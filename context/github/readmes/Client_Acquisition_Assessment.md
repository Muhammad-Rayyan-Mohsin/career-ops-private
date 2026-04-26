# AI Agent Memory System - Web Frontend

A modern Next.js application with AI-powered research memory, semantic search, and RAG capabilities.

## 🚀 Features

- **AI Research Agent** - Automated research across Reddit, YouTube, and web sources
- **Semantic Duplicate Detection** - Vector embeddings to prevent redundant research
- **RAG Query System** - Ask questions about your research history
- **Memory Persistence** - Supabase database with Row-Level Security
- **PDF Export** - Generate professional research reports
- **Real-time Data** - Live Reddit and YouTube API integration

## 📋 Prerequisites

- Node.js 18+ 
- Supabase account
- OpenAI API key
- YouTube Data API key

## 🔧 Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create `.env.local` in the web directory:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# OpenAI
OPENAI_API_KEY=your_openai_key

# YouTube
YOUTUBE_API_KEY=your_youtube_key

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

See `ENV_TEMPLATE.md` for detailed instructions.

### 3. Setup Database

Run these SQL migrations in your Supabase SQL Editor (in order):

1. `../init.sql` - Base schema
2. `../rls-migration.sql` - Row-Level Security
3. `../vector-rag-migration.sql` - Vector embeddings for RAG
4. `../topic-embeddings-migration.sql` - Semantic duplicate detection

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
web/
├── app/
│   ├── (auth)/           # Authentication pages
│   │   ├── login/
│   │   └── signup/
│   ├── api/              # API routes
│   │   ├── embeddings/   # Vector embedding generation
│   │   ├── pdf/          # PDF generation
│   │   ├── rag/          # RAG query endpoint
│   │   └── research/     # Main research endpoint
│   ├── dashboard/        # Main dashboard page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── components/
│   ├── pdf/              # PDF generation components
│   ├── ui/               # Shadcn UI components
│   ├── Logo.tsx
│   ├── NavBar.tsx
│   ├── PageTransition.tsx
│   └── RAGQuery.tsx      # RAG query interface
├── lib/
│   ├── embeddings.ts     # OpenAI embedding utilities
│   ├── secrets.ts        # API key management (DO NOT COMMIT)
│   ├── supabaseBrowser.ts
│   ├── supabaseServer.ts
│   └── utils.ts
└── middleware.ts         # Auth middleware
```

## 🔐 Security

**IMPORTANT:** Never commit these files:
- `.env.local`
- `lib/secrets.ts` (with hardcoded keys)
- `APIs.txt`

Use environment variables for all sensitive data. See `SECURITY-SETUP-GUIDE.md` for details.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Add environment variables in Vercel Dashboard:
   - Settings → Environment Variables
   - Add all variables from `.env.local`

4. Deploy to production:
```bash
vercel --prod
```

## 📚 Key Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn UI** - Component library
- **Supabase** - Database, Auth, Vector storage
- **OpenAI** - Embeddings & LLM
- **@react-pdf/renderer** - PDF generation
- **@supabase/ssr** - Server-side Supabase client

## 🎯 Features Breakdown

### Research Agent
- Scrapes Reddit (top 5 posts)
- Searches YouTube (top 5 videos with AI summaries)
- Simulates website scraping
- Generates comprehensive summary using GPT-4o-mini

### Semantic Duplicate Detection
- Vector embeddings for topic similarity
- 85% similarity threshold
- Prevents researching "AI" after "Artificial Intelligence"
- AI-generated alternative suggestions

### RAG Query System
- Ask natural language questions
- Semantic search across past research
- GPT-4o-mini generates answers with citations
- Shows similarity scores for sources

### Memory System
- Stores all research in Supabase
- Row-Level Security (users only see their data)
- Topic embedding cache for fast duplicate detection
- Full content embeddings for RAG

## 🐛 Troubleshooting

### "Unauthorized" Error
- Check Supabase credentials in `.env.local`
- Verify user is logged in

### "find_similar_topics does not exist"
- Run `topic-embeddings-migration.sql` in Supabase SQL Editor

### OpenAI 401 Error
- Verify `OPENAI_API_KEY` in `.env.local`
- Check key is valid at https://platform.openai.com/api-keys

### YouTube API Error
- Enable YouTube Data API v3 in Google Cloud Console
- Verify `YOUTUBE_API_KEY` in `.env.local`

## 📖 Documentation

- `ENV_TEMPLATE.md` - Environment setup guide
- `../RAG-IMPLEMENTATION.md` - RAG system details
- `../SEMANTIC-DUPLICATE-DETECTION.md` - Duplicate detection docs
- `../SECURITY-SETUP-GUIDE.md` - Security best practices

## 🤝 Contributing

This is an assessment project, but feel free to fork and improve!

## 📄 License

Private - Assessment Project

---

Built with ❤️ using Next.js, Supabase, and OpenAI

