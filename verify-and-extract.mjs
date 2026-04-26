#!/usr/bin/env node
// verify-and-extract.mjs — Headless Playwright scraper for job pages.
//
// Usage:
//   node verify-and-extract.mjs <url>                          # single URL → JSON to stdout
//   node verify-and-extract.mjs --batch < urls.txt             # one URL per line → JSON-lines
//   node verify-and-extract.mjs --batch --concurrency 5 ...
//
// Output (single mode): one JSON object on stdout.
// Output (batch mode): one JSON object per URL, newline-delimited (JSONL).
//
// Status detection:
//   open   — page renders job content (title + body text > 200 chars)
//   closed — page contains a "filled" / "no longer accepting" / "position closed" phrase
//   gone   — HTTP 404/410 or redirected to homepage / generic 'jobs' index
//   error  — timeout, navigation failure, or unexpected exception

import { chromium } from 'playwright';

const CLOSED_PHRASES = [
  'job you are trying to apply for has been filled',
  'no longer accepting applications',
  'position has been filled',
  'this job is closed',
  'job posting is no longer available',
  'role is no longer available',
  'we are not currently hiring for this role',
  'position closed',
  'hiring closed',
];

// These are checked only against <title> or against thin pages — they're chrome
// strings that legitimately appear on real job pages (e.g. "Oops, you need JS").
const GONE_TITLE_PHRASES = [
  'page not found',
  '404',
  'not found',
  'page doesn\'t exist',
];

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36';

function detectStatus({ httpStatus, finalUrl, originalUrl, bodyText, title }) {
  if (httpStatus === 404 || httpStatus === 410) return 'gone';
  const lower = (bodyText || '').toLowerCase();
  // Closed-phrase wins regardless of body length
  for (const p of CLOSED_PHRASES) if (lower.includes(p)) return 'closed';
  // 404-style indicators — only match against <title> (the trustworthy signal).
  const lowerTitle = (title || '').toLowerCase();
  for (const g of GONE_TITLE_PHRASES) if (lowerTitle.includes(g)) return 'gone';
  // Hard redirect from a deep path to a homepage/index = role pulled.
  // Only treat as 'gone' if body is THIN (<300 chars) — otherwise the page still rendered job content.
  try {
    const orig = new URL(originalUrl);
    const fin = new URL(finalUrl);
    const homepage = (fin.pathname === '/' || fin.pathname === '' || /\/jobs\/?$/.test(fin.pathname) || /\/careers\/?$/.test(fin.pathname));
    if (orig.pathname.length > 5 && homepage && (bodyText || '').length < 300) return 'gone';
  } catch (_) {}
  if (!bodyText || bodyText.length < 200) {
    if (lower.includes('filled') || lower.includes('closed')) return 'closed';
    return 'error';
  }
  return 'open';
}

async function scrapeOne(browser, url) {
  const context = await browser.newContext({ userAgent: UA });
  const page = await context.newPage();
  let httpStatus = null;
  let finalUrl = url;
  let title = '';
  let bodyText = '';
  try {
    const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30_000 });
    httpStatus = resp ? resp.status() : null;
    // Wait for SPAs to hydrate. Try networkidle first (best); fall back to fixed wait.
    try {
      await page.waitForLoadState('networkidle', { timeout: 10_000 });
    } catch (_) {
      await page.waitForTimeout(3500);
    }
    // Then poll up to ~6s for the body to grow past 800 chars (real JD content)
    for (let i = 0; i < 6; i++) {
      const len = await page.evaluate(() => (document.body && document.body.innerText || '').length).catch(() => 0);
      if (len > 800) break;
      await page.waitForTimeout(1000);
    }
    finalUrl = page.url();
    title = await page.title().catch(() => '');
    bodyText = await page.evaluate(() => {
      const candidates = ['main', '[class*="job"]', '[class*="posting"]', '[class*="content"]', 'article'];
      let root = null;
      for (const sel of candidates) {
        const el = document.querySelector(sel);
        if (el && (el.innerText || '').trim().length > 200) { root = el; break; }
      }
      if (!root) root = document.body;
      const clone = root.cloneNode(true);
      clone.querySelectorAll('script,style,noscript,nav,header,footer').forEach((n) => n.remove());
      return (clone.innerText || '').trim();
    }).catch(() => '');
  } catch (err) {
    return {
      url,
      finalUrl,
      httpStatus,
      status: 'error',
      error: String(err.message || err),
      title: '',
      bodyText: '',
    };
  } finally {
    await context.close().catch(() => {});
  }
  const status = detectStatus({ httpStatus, finalUrl, originalUrl: url, bodyText, title });
  return { url, finalUrl, httpStatus, status, title, bodyText: bodyText.slice(0, 6000) };
}

async function readStdinLines() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8')
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0 && /^https?:\/\//.test(s));
}

async function pmap(items, n, fn) {
  const out = new Array(items.length);
  let i = 0;
  const worker = async () => {
    while (true) {
      const idx = i++;
      if (idx >= items.length) return;
      out[idx] = await fn(items[idx], idx);
    }
  };
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, worker));
  return out;
}

async function main() {
  const args = process.argv.slice(2);
  const batch = args.includes('--batch');
  const concIdx = args.indexOf('--concurrency');
  const concurrency = concIdx >= 0 ? parseInt(args[concIdx + 1], 10) || 5 : 5;
  const positional = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--concurrency');

  const browser = await chromium.launch({ headless: true });
  try {
    if (batch) {
      const urls = await readStdinLines();
      if (urls.length === 0) {
        process.stderr.write('No URLs on stdin\n');
        process.exit(1);
      }
      const results = await pmap(urls, concurrency, (u) => scrapeOne(browser, u));
      for (const r of results) process.stdout.write(JSON.stringify(r) + '\n');
    } else {
      const url = positional[0];
      if (!url) {
        process.stderr.write('Usage: node verify-and-extract.mjs <url>\n');
        process.exit(1);
      }
      const r = await scrapeOne(browser, url);
      process.stdout.write(JSON.stringify(r, null, 2) + '\n');
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  process.stderr.write(`Fatal: ${err.message || err}\n`);
  process.exit(2);
});
