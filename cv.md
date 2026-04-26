# Muhammad Rayyan Mohsin

**AI Engineer & Researcher**

mo.rayyan2002@gmail.com · 0333-9312013 · Punjab, Rawalpindi, Pakistan
[LinkedIn](https://www.linkedin.com/in/rayyan-mohsin-216713331/) · [GitHub](https://github.com/Muhammad-Rayyan-Mohsin) · [Portfolio](https://portfolio-rayyan-opal.vercel.app/)

## Summary

AI Engineer specializing in agentic systems, LLM orchestration, and end-to-end automation. Currently building production AI products at ClientAcquisition.io serving 2,000+ clients across 13+ industries. Background spans deep learning research (87% accuracy on custom CV datasets, 92% precision on NLP), reinforcement learning for ad optimization, and full-stack agent platforms integrating Claude, OpenAI, Gemini, and the Mastra framework. Final-year Data Science undergrad at FAST-NUCES Islamabad (2022–2026).

## Experience

### AI Engineer — ClientAcquisition.io (Nov 2025 – Present, Remote · Montreal)
- Building AI-powered products at a growth company serving **2,000+ clients across 13+ industries**, helping agencies and high-ticket businesses scale to **$50K–$100K+/month**.
- Working on **TryCook.ai**, a full-stack AI operating system with specialized LLM agents for sales automation, content generation, ad management, and CRM integration — powered by Claude, OpenAI, Gemini, and the **Mastra** agent framework.
- Working on **The Truth Engine** (research.trycook.ai), an agentic AI market research platform that reverse-engineers competitors, identifies high-intent markets, and generates 7-figure offer blueprints in seconds.

### AI Engineer — Remoto Co. (Apr 2025 – Nov 2025, Remote · Spain)
- Implemented **Multi-Armed Bandit** algorithms and reinforcement learning on hierarchical marketing data, paired with forecasting models to predict and improve **Facebook ad ROI**.
- Built a **Job Engine** for the German market aggregating listings via APIs and search-AI agents into a unified discovery platform.
- Delivered multiple AI automations that streamlined operations and drove measurable business impact.
- Developed a web app that **digitalized solar surveys in the UK** by integrating the Google Solar API for enhanced insights and planning.

### AI Internship — LMKR (Jul 2024 – Sept 2024, Islamabad)
- Researched and implemented deep learning models in **TensorFlow** and **PyTorch**, achieving **87% accuracy** on custom datasets.
- Applied **YOLO** for real-time object detection at **45 FPS**.
- Developed NLP models for sentiment analysis and language understanding with **92% precision**.
- Implemented ANNs and **transfer learning**, reducing training time by **60%**.

### AI Research Fellowship — Bytewise (Jun 2024 – Jul 2024, Islamabad)
- Specialized in AI research and intelligent systems development.
- Applied advanced NLP and **transformer architectures**.
- Researched deep-learning optimization and neural architecture search.

## Projects

### Meta Ads Manager
Full-stack Facebook/Instagram ad management system powered by an LLM agent with **40+ tools** that autonomously creates campaigns, generates creatives, and optimizes performance via natural-language conversation. OAuth + Meta Graph API, real-time analytics (ROAS, CTR, CPC), automated rules engine, audience targeting with reach estimation. Workspace-scoped with encrypted token storage, Redis caching, rate-limit handling.

### Cold Email Engine
Multi-step cold email campaign system with a **context-aware LLM agent** that dynamically loads different tool sets and instructions based on the user's current workflow page — writes personalized copy, generates spintax variations, builds sequences. Backed by **7 relational tables and 177 automated tests**. SMTP/OAuth sending with intelligent account rotation, **HMAC-signed** open/click tracking, IMAP-based reply detection with **AI-driven sentiment classification** and automated lead scoring (hot/warm/cold), domain health verification (**SPF/DKIM/DMARC**), 14-day warmup scheduler, unified inbox.

### CAIO Intelligence Platform
Full-stack intelligence dashboard built with **Next.js 16, Mastra AI agents, LangChain/LangGraph, AI SDK**, with multiple specialized LLM agents for support-ticket analysis, client-health assessment, and automated risk reporting. **BullMQ** worker pipelines, **Clerk** auth, **Drizzle ORM** + **Turso** DB, real-time response streaming.

### Predictive Churn Monitor
Daily health-scan system across all client channels that computes a **0–100 risk score** using five metrics (velocity drop, sentiment drift, ghosting ratio, silence alarm, complexity spike). Two-tier cost-optimized agent architecture: **Tier 1 heuristic pre-filter → Tier 2 deep-analysis LLM** with rolling context windows. Delivers red/yellow/green classifications with incremental message fetching.

### Content Scraping & Search API
Multi-platform content scraping + semantic search API powered by **Redis job queues** with priority scheduling, batch processing, and automatic retry/recovery. Scrapes Facebook ads via **Apify**, processes/uploads videos to **Bunny CDN**, and runs a **Gemini** AI agent for content classification. Exposes **vector embedding-based semantic search** across TikTok, YouTube, and Reddit — consumed downstream by Mastra agents for automated storyboard creation.

### Agent Memory — AI Research Intelligence Platform — [Live](https://client-acquisition-assessment.vercel.app)
Agentic research platform with autonomous agents that scrape Reddit, YouTube (with transcripts), and web sources to generate market-research reports via GPT-4o-mini. **Semantic duplicate detection** using OpenAI vector embeddings, RAG with vector search for natural-language queries across past research. PDF export, Supabase with Row-Level Security, AI-generated topic suggestions.

### Tencounterzz — Real-time Boxing Punch Detection
Detects, tracks, and classifies punches from fight footage in real-time. **YOLOv11m** detection + **YOLOv8m-pose** skeleton + **AttentionBiLSTM** classifier (6 punch classes). Next.js 14 frontend with Python `frontend_runner.py` bridge over a JSON-stdout protocol; real-time job-status polling endpoint.

### Discord Intelligence Suite
Three production Discord/AI bots: (1) **Discord Intelligence Viewer** — Next.js 15 web app with a conversational agent that ingests full channel context and returns source-attributed insights; (2) **Bug Alert Bot** — autonomous LLM classifier (bug vs. feature vs. chat) with severity-tagged structured reports persisted to Turso; (3) **Client Intelligence Listener** — multi-task LLM agent across 10+ database tables performing AI triage, sentiment, churn-signal, response-quality, and risk-radar scoring with rolling daily analytics aggregation.

### Whop Support Classifier
Whop API poller that fetches support messages every 30 minutes and routes each through an LLM classifier agent that autonomously categorizes (client question / bug / team response / announcement / spam) and persists enriched, structured data to Turso for automated support intelligence and triage.

### Social Media Content Automation
Daily TikTok content pipeline using **n8n** + OpenAI agents, **ElevenLabs** voice generation, and video models (Bytedance Seedance → Veo 3 → OpenAI Sora 2). Ran **3 self-sustaining accounts uploading 2 videos/day** with zero human intervention.

### JOBr
Full-stack job-matching platform using **cosine similarity** to match candidates with jobs. Automated vetting and scoring via n8n on Supabase, **reducing manual screening by 85%**. RAG-powered chatbot with real-time scoring and interactive skill-tree visualizations.

### YT Trends Dashboard
YouTube trending-video discovery platform using the YouTube Data API with keyword/category/region/duration filters. LLM agent (via **OpenRouter**) layered on top for trend analysis, content-pattern recognition, and actionable insights on viral video performance.

### MAPO Reproduction & Demo (2026)
Laptop-scale reproduction of **MAPO (arXiv:2401.06838)** with a novel **PAPC** improvement. Six-stage Python pipeline (translate → prefs → train → eval → report → export) with three measured iterations (v1 → v2 → v3). Interactive Next.js demo visualizing the framework.

## Education

- **B.Sc. Data Science** — National University of Computer & Emerging Sciences (FAST-NUCES), Islamabad · 2022 – 2026
- **A Levels** — City School, Capital Campus, Islamabad · 2020 – 2022
- **O Levels** — City School, Satellite Town Campus, Rawalpindi · 2017 – 2020

## Skills

- **LLM / Agents:** Claude, OpenAI (GPT-4o/4o-mini), Gemini, OpenRouter, Mastra, LangChain/LangGraph, AI SDK, RAG, vector embeddings, semantic dedup, page-aware tool loading, two-tier cost-optimized agent architectures, multi-task LLM agents, tool-calling agents (40+ tools)
- **ML / Deep Learning:** TensorFlow, PyTorch, CNNs, transformers, transfer learning, YOLOv11m / YOLOv8m-pose, AttentionBiLSTM, multi-armed bandits, reinforcement learning, forecasting, multi-task learning, ensemble methods, preference optimization (MAPO/PAPC)
- **Data / Streaming:** pandas, NumPy, scikit-learn, Streamlit, Tableau, Power BI, Kafka (Apriori, PCY), Redis priority queues with retry/recovery, BullMQ, Hadoop/MapReduce, BigQuery, MCP servers
- **Backend / Infra:** Node.js, Python, Supabase (RLS), Drizzle ORM, Turso, Postgres, Redis, BullMQ, OAuth, REST/Graph APIs, n8n, Playwright, Puppeteer, MCP, SMTP/IMAP, HMAC-signed tracking, SPF/DKIM/DMARC, Apify, Bunny CDN
- **Frontend / Apps:** Next.js (14/15/16), TypeScript, React, Tailwind, Framer Motion, GSAP, Clerk auth, real-time response streaming, Vercel deployments
- **Integrations:** Meta Graph API, Google Solar API, YouTube Data API, Discord API, Whop API, ElevenLabs, OpenAI Sora 2, Veo 3, Bytedance Seedance
- **Languages:** Python, TypeScript/JavaScript, C++, SQL
