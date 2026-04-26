# GitHub Repository Library — Muhammad-Rayyan-Mohsin

**Profile:** https://github.com/Muhammad-Rayyan-Mohsin · 59 public repos · 90 total · 18 followers · 18 following
**Bio:** Data Science student at FAST University Islamabad. Based in Pakistan, Rawalpindi.
**Company on profile:** Remoto Co. (stale — currently at ClientAcquisition.io)
**Snapshot:** 2026-04-27 · 57 public-original · 31 private · 3 forks

This is your **fast-surf index**. Each project has: what it is, the stack, what it proves, and which roles it's strongest evidence for.

---

## ⭐ Tier 1 — Hero Projects (lead with these)

These are your strongest, most recent, production-grade or research-grade builds. Use them in tailored CVs when relevant.

### `mapo-reproduction` + `mapo-demo` — Research-grade NLP work *(2026-04, public)*
- **What:** Laptop-scale reproduction of **MAPO — Multilingual Alignment via Preference Optimization** (arXiv:2401.06838) with a novel **PAPC** improvement; paired with an interactive Next.js demo site.
- **Stack:** Python ML pipeline (translate → prefs → train → eval → report → export, 6 stages), NLLB scoring, preference optimization, Next.js demo.
- **Proves:** Can read and reproduce a recent NLP paper end-to-end; can propose and validate a novel improvement; understands multilingual alignment and preference learning. Has v1/v2/v3 iterations with measured reward margins.
- **Use for:** AI Research roles, NLP/LLM research, applied research roles where reading papers matters.

### `Client_Acquisition_Assessment` — Agent Memory / RAG platform *(2025-11, live, public)*
- **What:** Full-stack AI agent memory system with semantic duplicate detection, RAG over past research, automated multi-source scraping (Reddit/YouTube/web).
- **Stack:** Next.js, Supabase + RLS, OpenAI embeddings + GPT-4o-mini, vector search, YouTube Data API, PDF export.
- **Proves:** Production RAG with real auth, vector embeddings for dedup, multi-source agentic ingestion, structured output (PDF reports).
- **Live URL:** https://client-acquisition-assessment.vercel.app
- **Use for:** Agentic systems, LLMOps, RAG/vector roles, AI Forward Deployed Engineer.

### `Tencounterzz` (TenCount) — Real-time CV pipeline *(2026-04, public+private pair)*
- **What:** Boxing punch detection & analytics — detects, tracks, and classifies punches from fight footage in real-time.
- **Stack:** Next.js 14 + TypeScript + Tailwind + Framer Motion + GSAP frontend; Python bridge (`frontend_runner.py`); CV pipeline = **YOLOv11m** detection + **YOLOv8m-pose** skeleton + **AttentionBiLSTM** classifier.
- **Architecture:** Frontend uploads → spawns Python process → JSON-stdout protocol streams progress → polling endpoint.
- **Proves:** End-to-end CV/ML deployment, real-time inference architecture, custom classifier (BiLSTM with attention), polished UX on top of ML.
- **Punch classes:** Jab, Cross, Lead/Rear Hook, Lead/Rear Uppercut.
- **Use for:** ML Engineer, Computer Vision, Applied AI, full-stack-ML hybrid roles.

### `AFFECT_Valence_Arousal_Prediction` — Emotion recognition framework *(2025-09, public)*
- **What:** Multi-task deep-learning framework for emotion recognition from faces — predicts both 8 discrete emotion classes and continuous valence/arousal in [-1, 1].
- **Stack:** PyTorch 2.0+, multi-task CNN heads, ensemble methods with attention, transfer learning.
- **Three approaches:** multi-task learning, comprehensive CNN comparison, ensemble with attention.
- **Proves:** Solid deep-learning fundamentals on a non-trivial vision task; ability to design multi-output networks; research-style READMEs.
- **Use for:** ML/DL Engineer, Computer Vision, applied research.

### `professional-data-portfolio` — Public portfolio site *(2026-02, public)*
- **What:** Live data-portfolio site — https://professional-data-portfolio.vercel.app
- **Use for:** Reference URL for portfolio in CV/cover letters.

### Private heavy-hitters worth name-dropping (don't share repo, do mention work)

| Repo | What it is | Why it matters |
|---|---|---|
| `quantum-ads` | "Quantum Ads — AI-powered Meta Ads management platform by Vaibrant" | Production ad-tech with LLM agent; matches the Meta Ads Manager project on CV |
| `cv-project` | Next.js CV/résumé project (live) | Matches `https://cv-project-jet.vercel.app` |
| `dvm-hf-host` + `demovidmaker` family | HyperFrames host service that manages preview + render CLI processes, exports MP4s to Supabase Storage | Worker/queue + media-pipeline experience; demo creation tooling |
| `notebooklm-agent` | Live https://notebooklm-agent.vercel.app | Agent-tool work |
| `yoshimoto` | "Transforms daily Japanese attendance Excel data into monthly registers and payroll CSVs" | Data-pipeline + i18n + automation deliverable |
| `ai-skill-tree-integrated` | "Integrated AI skill tree visualization platform combining developer showcase with interactive skill assessments" | Plays into the skill-tree visualization mentioned in JOBr |
| `Solar_Survey` / `Solarr2` / `sun-survey-spark` | Solar-survey suite (UK Google Solar API) | Matches the "digitalized solar surveys in the UK" CV bullet |
| `remotoco-ai` (fork, public) | https://remotoco-ai.vercel.app | Matches the Remoto.co tenure |

---

## 🥈 Tier 2 — Strong Supporting Projects

### `Client_Acquisition_Assessment` — see Tier 1 above

### `Mortality_Analysis_Forecasting` & `NewYork_Mortality_Analysis` *(2025-04 / 2025-03)*
- **What:** Streamlit dashboards for mortality data — chunk-based processing for >100k rows, dynamic column detection, robust cleaning, time-series forecasting.
- **Use for:** Data-analyst hybrid, healthcare-data, BI/dashboard roles.

### `Clustering_and_Predictive_Modeling` — Energy demand *(2025-05, public, ⭐1)*
- **What:** Energy demand analysis + forecasting using clustering and ML with a web app.
- **Stack:** Python, ML, web visualization. Uses weather + time features.
- **Use for:** Time-series, forecasting, energy/utilities-flavored roles.

### `agentic_search_openai_langgraph` *(2024-07, fork)*
- **What:** Agentic web search using **LangGraph + GPT-4o + Tavily**.
- **Use for:** Reference for LangGraph experience early on.

### `mcp-server-bigquery` *(2025-01, fork)*
- **What:** Model Context Protocol server providing BigQuery access.
- **Use for:** MCP / GCP / agent-tooling roles.

### `Image_Classification_CNNs` *(Bytewise final project)*
- **What:** Vegetable/fruit image classifier with TensorFlow + Streamlit deployment.
- **Use for:** Classic CV/CNN demo; covers data prep through deployed app.

### `Spotify-Clone` *(2024-05, ⭐1)*
- **What:** Music recommendation system: ETL with MFCC/spectral features → MongoDB → K-means/ANN model → Flask/Django web app → Apache Kafka for real-time recs.
- **Use for:** Big-data + recsys + streaming. Demonstrates ETL + Kafka + recsys end-to-end.

### `Streaming-Data-Insights` *(2024-04)*
- **What:** Kafka streaming over Amazon metadata (~100GB sampled to 15GB), 1 producer + 3 consumers running **Apriori** + **PCY** + a custom analysis consumer, MongoDB sink.
- **Use for:** Big data, streaming/Kafka, data engineering.

---

## 🥉 Tier 3 — Foundation / Coursework (signal of breadth, not depth)

### Bytewise ML Fellowship suite *(2024-09–10)*
- `Bytewise_Machine_Learning_Fellowship` — 100-Days-of-Code journal
- `Deep_Learning_Documentation` — personal DL notes
- `Deep_Learning` — CNNs, RNNs, transformers theory + practice (MNIST + transfer learning to VGG16)
- `Hyperparameter_Tuning` — grid search, random search, Bayesian optimization on Heart Disease UCI
- `Feature_Selection_Mastery` — filter/wrapper/embedded methods on Loan Prediction
- `Data_Preprocessing` — NYC Property Sales (IQR outliers, frequency/target encoding, K-Fold)
- `NLP_-_Transformers` — transformer NLP work
- `Advanced_ML_Algorithms` — XGBoost, LightGBM, Bagging, Blending on breast-cancer dataset

### Data analysis projects *(2024-04)*
- `Data_Analysis` — Happiness Score 2015–2019 analysis (correlation, regional)
- `Data_Analysis_2` — Climate data analysis (z-score outliers, regional trends)
- `E-commerce_Trends_Analysis` — global e-commerce + traditional retail, **PCA + CLV + what-if analysis**
- `Machine_Learning` — property price prediction, linear regression
- `Machine_Learning-2-` — fraud detection with decision trees, one-hot encoding, MinMax
- `Python_EDA` & `Python_EDA-2-` — data cleaning, EDA, outlier detection, correlation analyses
- `NLTK_Sentiment_Analysis` — sentiment analysis on product reviews via word-weight scoring
- `NLTK_Poem_generation` — poetic verse generator
- `OpenCV_Image_Processing` — OpenCV CV work (⭐1)
- `Image_Classification_CNN` — additional CNN classifier project

### Visualization
- `Netflix_Dashboard_Tableau` — Netflix content distribution Tableau dashboard
- `PowerBI_Dashboard` — feature visualization in Power BI

### Other / Misc
- `Naive-Search-Engine` — TF-IDF + Hadoop MapReduce text-mining pipeline (Big Data course, team project)
- `Medical_Biollama` — chatbot using **biollama 1.5B**
- `rag_system` — early RAG repo
- `AI_LabTask2` — uni AI lab task

### CS fundamentals coursework
- `OOP_School_Management_System` — C++ classroom management
- `Data_Structures_City_Planner` — C++ BFS shortest-path between cities (graph + adjacency matrix)
- `Candy-Crush-Clone` — programming-fundamentals semester project

### AESGC (Al Ain Equestrian, Shooting & Golf Club) projects *(2024-11)*
- `AESGC_Race_Analyzer` — Streamlit app for analyzing horse-race participant guesses (real client deliverable for AESGC, Abu Dhabi)
- `AESGC_Race_Predictor`, `AESGC`, `RacePRed` — companion private repos

---

## 🌐 Live Vercel deployments (drop-in evidence)

| URL | Project |
|---|---|
| https://portfolio-rayyan-opal.vercel.app | Main portfolio |
| https://professional-data-portfolio.vercel.app | Data portfolio |
| https://client-acquisition-assessment.vercel.app | Agent Memory / RAG demo |
| https://cv-project-jet.vercel.app | CV project |
| https://demovidmaker.vercel.app | DemoVidMaker |
| https://notebooklm-agent.vercel.app | NotebookLM-style agent |
| https://vai-new.vercel.app · https://vai-iota-ebon.vercel.app | VAI (private) |
| https://solar-survey-pearl.vercel.app · https://solarr2.vercel.app · https://sun-survey-spark.vercel.app | Solar surveys |
| https://ai-skill-tree-integrated.vercel.app | AI skill tree |
| https://nexus-revenue-flow.vercel.app | Nexus revenue flow |
| https://abundiant-woad.vercel.app | Abundiant |
| https://aes-fin-ai.vercel.app | AesFin_AI |
| https://digital-marketing-website-xi.vercel.app | Digital marketing site |
| https://application-sigma-cyan.vercel.app | Application portfolio (React 19 + TS) |
| https://asmo-six.vercel.app | asmo |
| https://vaibrant.vercel.app | Vaibrant landing page |

---

## 🔁 What does NOT show on GitHub but is on the CV

CV mentions explicitly:
- **TryCook.ai** + **The Truth Engine (research.trycook.ai)** — likely org/private repos at ClientAcquisition.io. Not in your personal GitHub.
- **Meta Ads Manager** with 40+ tools — likely private (`quantum-ads` is the closest hit); the portfolio also calls it out separately.
- **Cold Email Engine** with 177 tests — on portfolio but not on personal repos visible. Likely org/private at ClientAcquisition.io.
- **CAIO Intelligence** with Mastra + LangGraph + BullMQ + Turso — on portfolio but not in personal repos. Likely org/private.
- **Job Engine for the German market** at Remoto.co — likely org/private.
- **Multi-Armed Bandit + RL for Facebook ad ROI** at Remoto.co — likely org/private.

> When tailoring a CV for a role that asks for these capabilities, lean on the portfolio descriptions (in `context/portfolio/site.md`) since the GitHub source isn't public.

---

## Heuristics for picking projects per role

| If the JD says... | Lead with... | Backup |
|---|---|---|
| "agents", "multi-agent", "LLMOps" | Agent Memory + Meta Ads Manager + CAIO Intelligence | TryCook.ai |
| "RAG", "vector", "embeddings" | Agent Memory (semantic dedup + RAG) | Cold Email Engine, Medical_Biollama |
| "research", "papers", "NLP" | MAPO Reproduction + PAPC improvement | AFFECT, Bytewise transformer work |
| "computer vision" | Tencounterzz (YOLOv11 + AttentionBiLSTM) + AFFECT | Image_Classification_CNNs |
| "production ML", "deployment" | Tencounterzz + Mortality dashboard + Image_Classification_CNNs | Spotify-Clone, AESGC |
| "data engineering", "Kafka", "streaming" | Streaming-Data-Insights + Spotify-Clone | Naive-Search-Engine |
| "fast prototyping", "client-facing", "FDE" | TryCook.ai + The Truth Engine + Job Engine + Solar Surveys | AESGC client deliverable |
| "ad-tech", "growth", "marketing" | Meta Ads Manager + Cold Email Engine + Multi-Armed Bandit at Remoto | Quantum Ads |
| "marketing analytics", "BI", "dashboards" | Mortality dashboard + Tableau Netflix + Power BI | Energy demand forecasting |
| "Next.js / full-stack" | CAIO Intelligence + Cold Email Engine + Tencounterzz | Many Vercel deployments |
