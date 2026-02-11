# Pritam's Portfolio

A modern, dark-themed portfolio website built with Next.js 16, featuring a unique Bento Grid layout and dedicated project landing pages for App Store submissions.

## Features

- **Bento Grid Layout** - Creative, modern grid-based design
- **Dark Theme** - Clean, monochromatic dark mode design
- **Project Landing Pages** - Each project has its own dedicated page with:
  - Hero section with metrics (revenue, users)
  - Features list
  - CTA buttons (App Store, Website, GitHub)
  - Privacy Policy page
  - Terms of Service page
  - Support/Contact page
- **Responsive Design** - Works on all devices
- **SEO Optimized** - Meta tags, Open Graph, Twitter cards, JSON-LD
- **Static Generation** - Fast loading with SSG

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Markdown**: react-markdown
- **Fonts**: Inter (Google Fonts)

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Home page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   └── projects/
│       └── [slug]/
│           ├── page.tsx            # Project landing page
│           ├── privacy/page.tsx    # Privacy policy
│           ├── terms/page.tsx      # Terms of service
│           └── support/page.tsx    # Support page
├── components/
│   ├── bento/                      # Bento grid components
│   │   ├── bento-grid.tsx
│   │   ├── hero-card.tsx
│   │   ├── project-card.tsx
│   │   ├── stats-card.tsx
│   │   └── ...
│   ├── projects/                   # Project page components
│   │   ├── project-hero.tsx
│   │   ├── project-features.tsx
│   │   ├── project-cta.tsx
│   │   └── support-contact.tsx
│   └── ui/                         # shadcn/ui components
└── lib/
    └── data.ts                     # Site config & project data
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/PrtHub/pritam.git
   cd pritam
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Configuration

Edit `src/lib/data.ts` to update:

- **Site Config**: Name, title, description, social links
- **Projects**: Add/edit projects with:
  - slug, title, description
  - metrics (revenue, users)
  - features list
  - App Store/Play Store/Website URLs
  - Privacy policy & Terms of service content

## Project URLs

Each project generates the following routes:

| Route | Description |
|-------|-------------|
| `/projects/[slug]` | Project landing page |
| `/projects/[slug]/privacy` | Privacy policy |
| `/projects/[slug]/terms` | Terms of service |
| `/projects/[slug]/support` | Support & contact |

## Deployment

Deploy on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/PrtHub/pritam)

Or build for production:

```bash
npm run build
npm start
```

## License

MIT License

## Author

**Pritam** - [@iPritamX](https://x.com/iPritamX)
