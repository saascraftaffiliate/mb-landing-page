# Supafast Clone

A pixel-perfect clone of [withsupafast.com](https://withsupafast.com/) — a creative agency website for SaaS & Tech companies.

## Features

- **Hero Section** — Bold headline with clear value proposition
- **Before/After Comparison** — Visual contrast of problems vs solutions
- **Services Grid** — 6 service cards (Website, Brand, Product, Growth, Dev, Video)
- **Results Section** — Key metrics and social proof
- **Testimonials** — Founder quotes with ratings
- **Footer CTA** — Conversion-focused call-to-action

## Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS 3
- Lucide React (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx      # Sticky navigation
│   ├── Hero.tsx        # Hero section
│   ├── BeforeAfter.tsx # Before/after comparison
│   ├── Services.tsx    # Services grid
│   ├── Results.tsx     # Metrics section
│   ├── Testimonials.tsx# Founder quotes
│   └── Footer.tsx      # Footer with CTA
├── App.tsx
├── main.tsx
└── index.css           # Tailwind directives
```

## Build Output

Production build is in `dist/` folder — ready for deployment to Netlify, Vercel, or any static host.

---

*Cloned by Pepper for Jason*