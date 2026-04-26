# Project Library — Full Detail (Source of Truth for Tailoring)

**Purpose:** Long-form catalog of every shipped project. When tailoring a CV, cover letter, or interview answer, pull the *exact* phrasing from this file rather than re-summarizing.

**Conventions:** Each project has — *Name · One-liner · Stack · Key technical details · What it proves · Best-fit roles*.

---

## Tier 1 — Production agentic & full-stack AI work (ClientAcquisition.io era)

### Meta Ads Manager
**One-liner:** Full-stack Facebook/Instagram ad management system powered by an LLM agent with **40+ tools** that autonomously creates campaigns, generates creatives, analyzes performance, and recommends optimizations through natural-language conversation.
**Stack:** LLM agent (40+ tools), Meta Graph API + OAuth, Redis caching, automated rules engine, encrypted token storage, workspace scoping, rate-limit handling.
**Key technical details:**
- Agent dynamically receives runtime context (account data, business profile, live campaign stats) to make informed decisions across the full ad lifecycle.
- Real-time analytics: ROAS, CTR, CPC.
- Audience targeting with reach estimation.
- Workspace-scoped multi-tenant architecture with encrypted tokens.
**Proves:** Production agent design at scale, OAuth/API integration depth, multi-tenant security, real-time analytics, ad-tech domain knowledge.
**Best-fit roles:** AI Engineer, Agentic Systems, Ad-tech, FDE, LLMOps.

### Cold Email Engine
**One-liner:** Multi-step cold email campaign system with a context-aware LLM agent that writes personalized copy, generates spintax variations, builds sequences, and analyzes campaign performance — backed by **7 relational tables and 177 automated tests**.
**Stack:** LLM agent w/ page-aware tool loading, SMTP + OAuth sending, IMAP polling, HMAC-signed tracking, AI sentiment classifier, Postgres/SQL (7 tables), 177 tests.
**Key technical details:**
- Agent **dynamically loads different tool sets and instructions based on the user's current workflow page**.
- Intelligent SMTP account rotation.
- HMAC-signed open/click tracking pixels.
- IMAP-based reply detection → AI-driven sentiment classification → automated lead scoring (hot/warm/cold).
- Domain health verification (SPF / DKIM / DMARC).
- 14-day warmup scheduler.
- Unified inbox view across rotated accounts.
**Proves:** Production email-deliverability infrastructure (rare skill), multi-step LLM agents with conditional tool surfaces, AI-driven scoring, security/cryptography (HMAC), large test suite (177 tests).
**Best-fit roles:** AI Engineer, Growth/Outbound Engineer, Backend with AI, FDE.

### CAIO Intelligence Platform
**One-liner:** Full-stack intelligence dashboard for a client-success platform using **Next.js 16, Mastra AI agents, LangChain/LangGraph, AI SDK**, with multiple specialized LLM agents for support-ticket analysis, client-health assessment, and automated risk reporting.
**Stack:** Next.js 16, Mastra, LangChain/LangGraph, AI SDK, **BullMQ** worker pipelines, **Clerk** auth, **Drizzle ORM** + **Turso** DB, real-time response streaming.
**Key technical details:**
- Multiple specialized LLM agents, each with distinct prompts and tool sets (support tickets, client health, risk reporting).
- BullMQ for queueing background analysis jobs.
- Real-time response streaming to the dashboard.
**Proves:** Senior-level full-stack agent architecture, modern stack mastery (Next.js 16 + Mastra + LangGraph + Drizzle + BullMQ + Turso + Clerk), production observability of agents.
**Best-fit roles:** Senior AI Engineer, Agentic Systems Lead, AI Platform / LLMOps, Full-Stack AI.

### Content Scraping & Search API
**One-liner:** Multi-platform content scraping + semantic search API powered by **Redis job queues with priority scheduling**, batch processing, and automatic retry/recovery; scrapes Facebook Ads via Apify, processes/uploads videos to Bunny CDN, runs a Gemini agent for content classification, and exposes **vector-embedding semantic search** consumed downstream by Mastra AI agents for automated storyboard creation.
**Stack:** Redis job queues, Apify, Bunny CDN, **Gemini** agent, vector embeddings, Mastra integration. Sources: TikTok, YouTube, Reddit, Facebook Ads.
**Key technical details:**
- Priority scheduling and retry/recovery in Redis queues.
- Video pipeline: scrape → transcode/upload → embed → classify.
- Vector search exposed as a service.
- Downstream consumer = Mastra agents for storyboard creation.
**Proves:** Distributed systems chops (job queues, retry semantics), media-pipeline engineering, multi-source ingestion, vector search as a productized API, multi-LLM (Gemini) experience.
**Best-fit roles:** AI Platform Engineer, Data Engineer with AI, Backend with AI, Senior Engineer.

### Discord Intelligence Viewer
**One-liner:** Next.js 15 internal web app for navigating Discord server data with real-time message polling, channel browsing, and rich media — plus a conversational AI agent (OpenRouter) that ingests full channel context to answer questions with **source-attributed insights** and suggested follow-up queries.
**Stack:** Next.js 15, OpenRouter LLM, Discord API, real-time polling.
**Key technical details:**
- Full-context channel ingestion before answering.
- Source attribution on responses.
- Suggested follow-up queries.
**Proves:** Conversational agent UX, RAG-style context windowing, internal tooling craft.
**Best-fit roles:** AI Engineer, Internal Tools, FDE.

### Bug Alert Bot
**One-liner:** Discord bot that monitors channels in real time and routes every message through an LLM agent to **autonomously classify bugs vs. feature requests vs. general chat**, generate severity-tagged structured reports, persist to Turso, and post formatted alerts to a dedicated channel.
**Stack:** Discord API, LLM agent, Turso DB, background polling agent.
**Key technical details:**
- Severity-tagged structured reports.
- Background polling agent for external database entries.
- End-to-end: ingestion → classification → storage → channel post.
**Proves:** Real-time event-driven AI, structured-output generation, production reliability of bot infra.
**Best-fit roles:** AI Engineer, DevTools/Internal Tools, FDE.

### Client Intelligence Listener
**One-liner:** Real-time Discord intelligence bot where every incoming client message goes through an LLM agent that performs AI triage (question / bug / general, urgency scoring), sentiment classification, churn-signal detection, response-quality evaluation, and risk radar scoring across **10+ enriched database tables**.
**Stack:** Discord API, multi-task LLM agent, 10+ DB tables, rolling daily analytics, deep-linked Discord message references.
**Key technical details:**
- Incremental message processing with configurable channel filtering.
- Rolling daily analytics aggregation.
- Deep-linked Discord message references for traceability.
**Proves:** Multi-output LLM agent design (one model, many structured outputs), schema design (10+ tables), production analytics aggregation.
**Best-fit roles:** AI Engineer, Customer Success Eng, Senior Eng.

### Whop Support Classifier
**One-liner:** Whop API poller that fetches support messages every 30 minutes and routes each through an LLM classification agent that **autonomously categorizes** (client question / bug / team response / announcement / spam) and persists enriched, structured data to Turso.
**Stack:** Whop API, scheduled poller (30-min cadence), LLM classifier agent, Turso DB.
**Key technical details:**
- Scheduled batch ingestion.
- Multi-class classification with structured outputs.
- Enables automated support intelligence and triage.
**Proves:** API integration depth, scheduled-job design, production classification pipelines.
**Best-fit roles:** AI Engineer, Backend, FDE.

### Predictive Churn Monitor
**One-liner:** Predictive churn detection system that runs daily health scans across all client channels, computing a **0–100 risk score** using **five metrics** (velocity drop, sentiment drift, ghosting ratio, silence alarm, complexity spike) — using a **two-tier cost-optimized agent architecture**.
**Stack:** Multi-tier LLM agent design (heuristic pre-filter → deep-analysis), rolling context windows, incremental message fetching.
**Key technical details:**
- **Tier 1:** heuristic pre-filtering (cheap, deterministic).
- **Tier 2:** deep-analysis LLM agent on flagged clients with rolling context windows.
- 5 weighted metrics → composite 0–100 score → red/yellow/green classification.
- Incremental message fetching (only deltas processed).
**Proves:** **Cost-optimized agent architecture** (rare and senior signal), composite-scoring system design, ML/heuristic hybrid systems, churn modeling domain.
**Best-fit roles:** Senior AI Engineer, AI Platform, Customer Success Eng, ML Engineer.

### YT Trends Dashboard
**One-liner:** YouTube trending video discovery platform using the YouTube Data API with keyword search, category/region filtering, duration segmentation, plus an LLM agent (via **OpenRouter**) for AI-powered trend analysis, content-pattern recognition, and actionable insights.
**Stack:** YouTube Data API, OpenRouter LLM agent.
**Key technical details:**
- Search filters: keyword, category, region, duration.
- LLM analysis layer on top of API data.
**Proves:** API-driven product, LLM analytics layer, content-domain knowledge.
**Best-fit roles:** AI Engineer, Content/Creator-tooling Eng, FDE.

---

## Tier 1 — Public-research & flagship side projects

### MAPO Reproduction & PAPC Improvement
**One-liner:** Laptop-scale reproduction of **MAPO — Multilingual Alignment via Preference Optimization** (arXiv:2401.06838) with a novel improvement (**PAPC**), plus a Next.js demo site visualizing the framework.
**Stack:** Python ML pipeline (6 stages: translate → prefs → train → eval → report → export), NLLB scoring, preference optimization, Next.js demo.
**Key technical details:**
- Three reproduction iterations (v1 → v2 → v3) with measured reward margins.
- v1: answer-equality scoring; v2: NLLB-faithful CE scoring; v3: improved further.
- Audit-trail-style intermediate JSONL data.
**Proves:** Paper-to-code skill, NLP/multilingual depth, research rigor (versioned iterations + measured outcomes), proposal of a novel improvement.
**Best-fit roles:** ML/AI Research Engineer, NLP Engineer, Applied Research, Senior AI Engineer at research-leaning shops.

### Tencounterzz (TenCount)
**One-liner:** Boxing punch detection & analytics — detects, tracks, and classifies punches in real-time from fight footage. **YOLOv11m + YOLOv8m-pose + AttentionBiLSTM** with a Next.js + Python bridge.
**Stack:** Next.js 14 + TypeScript + Tailwind + Framer Motion + GSAP frontend; Python `frontend_runner.py` bridge; CV pipeline = YOLOv11m detection + YOLOv8m-pose skeleton + AttentionBiLSTM classifier; punch classes: Jab, Cross, Lead/Rear Hook, Lead/Rear Uppercut.
**Key technical details:**
- **JSON-stdout protocol** between Python inference process and Next.js — agent-friendly architecture pattern.
- Real-time job-status polling endpoint.
- In-memory job store on the server.
**Proves:** End-to-end CV/ML deployment, multi-model pipelines (detection + pose + classification), inter-process protocol design, polished UX on top of ML.
**Best-fit roles:** ML/CV Engineer, Applied AI, Full-Stack ML.

### Agent Memory — AI Research Intelligence Platform
**One-liner:** Agentic research platform with autonomous AI agents that scrape Reddit, YouTube (with transcripts), and web sources to generate market-research reports — featuring **semantic duplicate detection**, RAG, PDF export, Supabase RLS.
**Stack:** Next.js, Supabase + RLS, OpenAI embeddings + GPT-4o-mini, vector search, YouTube Data API, PDF export.
**Live URL:** https://client-acquisition-assessment.vercel.app
**Best-fit roles:** AI Engineer, RAG/vector specialist, FDE.

### Multi-Armed Bandit + RL on Facebook ads (Remoto Co.)
**One-liner:** Implemented MAB algorithms and RL on hierarchical marketing data, paired with forecasting models, to predict and improve Facebook ad ROI in production.
**Best-fit roles:** ML Engineer, Ad-tech, Growth Eng, RL roles.

### Job Engine for German market (Remoto Co.)
**One-liner:** Aggregated job listings via APIs and search-AI agents into a unified discovery platform for the German market.
**Best-fit roles:** AI Engineer, FDE, Search/Discovery roles.

### Solar Survey (Remoto Co.)
**One-liner:** Web app digitalizing solar surveys in the UK by integrating the Google Solar API for enhanced insights and planning.
**Best-fit roles:** FDE, Full-Stack with API integration depth.

### Social Media Content Automation (TikTok)
**One-liner:** Automated daily TikTok content using **n8n** + OpenAI agents + ElevenLabs voice + video models (Bytedance Seedance → Veo 3 → OpenAI Sora 2). **3 self-sustaining accounts uploading 2 videos/day with zero human intervention.**
**Best-fit roles:** AI Engineer, Content/Creator tooling, Automation Eng.

### JOBr
**One-liner:** Full-stack job-matching platform using **cosine similarity** to match candidates with jobs. Automated vetting and scoring via n8n on Supabase, **reducing manual screening by 85%**. RAG-powered chatbot with real-time scoring and interactive skill-tree visualizations.
**Best-fit roles:** AI Engineer, FDE, Recruiting/HR-tech.

---

## Tier 2 — Strong supporting work

(See `context/github/repos.md` Tier 2 for full descriptions: AFFECT_Valence_Arousal_Prediction, Mortality_Analysis_Forecasting, Clustering_and_Predictive_Modeling, Image_Classification_CNNs, Spotify-Clone, Streaming-Data-Insights, agentic_search_openai_langgraph, mcp-server-bigquery.)

---

## Tier 3 — Foundation / coursework

(See `context/github/repos.md` Tier 3.)

---

## Patterns I should highlight in interviews

1. **Cost-optimized two-tier agents** — Predictive Churn Monitor. Senior-level architectural choice.
2. **Page-context-aware tool loading** — Cold Email Engine. Sophisticated agent design.
3. **JSON-stdout subprocess bridges** — Tencounterzz. Pragmatic CV/ML deployment.
4. **Multi-task LLM agents writing to 10+ tables** — Client Intelligence Listener. Schema-design + structured outputs.
5. **Vector search as a product, consumed by other agents** — Content Scraping & Search API. Composable agentic infra.
6. **HMAC-signed tracking + SPF/DKIM/DMARC** — Cold Email Engine. Security & deliverability infra knowledge.
7. **Real-time response streaming with BullMQ pipelines** — CAIO Intelligence. Modern Next.js 16 + worker patterns.
8. **Reading and reproducing recent NLP papers** — MAPO + PAPC. Research literacy that most engineers lack.

## Anti-patterns to avoid

- Do **not** lead with coursework projects (Tier 3) for any production AI role.
- Do **not** mention private GitHub repos by URL — only describe the work.
- Do **not** claim sole authorship on Remoto.co work in a way that ignores team context — frame as "I implemented" / "I shipped" / "I owned" rather than "I built alone".
