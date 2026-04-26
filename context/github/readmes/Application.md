<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Application - Muhammad Rayyan Mohsin Portfolio

A high-performance, modern portfolio landing page built with React, Vite, and Tailwind CSS. This application showcases AI engineering expertise and professional capabilities.

## Features

- Modern, responsive design with Tailwind CSS
- Smooth scrolling navigation
- Interactive UI components
- Animated background gradients
- Mobile-optimized layout
- Built with React 19 and TypeScript
- Error boundary for robust error handling
- Production-optimized build with code splitting

## Prerequisites

- Node.js (v16 or higher)
- npm or bun package manager

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Muhammad-Rayyan-Mohsin/Application.git
   cd Application
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or with bun:
   ```bash
   bun install
   ```

3. Create a `.env.local` file (optional):
   ```bash
   cp .env.example .env.local
   ```
   Then add your Gemini API key if needed:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

## Development

Run the development server:
```bash
npm run dev
```
or:
```bash
bun run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## Production Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

The production build is optimized with:
- Minified JavaScript using esbuild
- Code splitting for better caching (separate chunks for lucide-react)
- No source maps in production
- Sourcemap-free bundles (~63KB gzip)

## Deployment

The `dist/` directory contains the production-ready static files. Deploy to any static hosting service:

### **Vercel (Recommended)**

The easiest way to deploy this app:

1. Push your code to GitHub:
   ```bash
   git push origin main
   ```

2. Import on Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Select your GitHub repository
   - Vercel auto-detects the build settings from `vercel.json`
   - Add environment variable `GEMINI_API_KEY` (optional)
   - Click "Deploy"

3. Your app is live! Vercel provides:
   - Automatic deployments on git push
   - Preview deployments for pull requests
   - CDN acceleration globally
   - SSL certificate included
   - Automatic cache optimization

**Vercel Configuration:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variables: Auto-configured in `vercel.json`

### **Other Deployment Options**

- **Netlify**: Connect GitHub repo → Auto-build on push
- **GitHub Pages**: `npm run build` → Push `dist/` to `gh-pages` branch
- **AWS S3 + CloudFront**: `npm run build` → Upload `dist/` folder
- **Traditional Server**: Copy `dist/` contents to web server


## Environment Variables

- `GEMINI_API_KEY` - Optional: Your Gemini API key for AI features

See `.env.example` for configuration template.

## Project Structure

```
├── components/          # React components
│   ├── BackgroundGradient.tsx
│   ├── CTA.tsx
│   ├── ErrorBoundary.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Requirements.tsx
│   ├── RoleDetails.tsx
│   └── ui.tsx
├── App.tsx             # Main app component
├── index.tsx           # React entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## Performance

- **Bundle Size**: ~63KB gzipped (optimized)
- **Build Time**: ~684ms
- **First Paint**: Instant (static assets)
- **Interactive**: < 2 seconds on 4G

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Muhammad Rayyan Mohsin. All rights reserved.
