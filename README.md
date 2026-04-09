# Saha — Marketing Website

A warm, minimal, institutional marketing website for Saha, a long-term ownership company for Swiss SMEs.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

---

## Getting started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start the production server
npm run start
```

The site runs at `http://localhost:3000`.

---

## Project structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (header + footer wrap all pages)
│   ├── page.tsx            # Homepage
│   ├── founders/page.tsx   # For Founders
│   ├── investors/page.tsx  # For Investors
│   ├── join/page.tsx       # Join Saha
│   ├── about/page.tsx      # About
│   ├── contact/page.tsx    # Contact (three inquiry paths)
│   ├── privacy/page.tsx    # Privacy Policy (placeholder)
│   └── terms/page.tsx      # Terms of Use (placeholder)
│
├── components/             # Reusable UI components
│   ├── site-header.tsx     # Sticky header with responsive mobile menu
│   ├── site-footer.tsx     # Footer with link columns
│   ├── hero.tsx            # Homepage hero (large headline + CTAs)
│   ├── page-hero.tsx       # Interior page hero (eyebrow + headline)
│   ├── section-intro.tsx   # Section heading with optional label
│   ├── audience-card.tsx   # Card for audience routing (founders/investors/builders)
│   ├── model-steps.tsx     # Numbered steps grid (how the model works)
│   ├── process-steps.tsx   # Sequential steps list (founder engagement process)
│   ├── value-grid.tsx      # Grid of title + description items
│   ├── cta-banner.tsx      # Dark full-width call-to-action banner
│   ├── quote-block.tsx     # Styled blockquote
│   └── contact-pathways.tsx # Interactive contact form with three inquiry paths
│
├── content/
│   └── site-copy.ts        # ALL website copy lives here — edit this file
│
├── lib/
│   └── utils.ts            # Utility functions (cn classname helper)
│
├── styles/
│   └── globals.css         # Global styles, Tailwind layers, component classes
│
├── public/                 # Static assets (add logos, images, favicons here)
├── tailwind.config.ts      # Design system (colours, fonts, spacing, sizes)
└── package.json
```

---

## Editing content

**All website copy is in one file: `content/site-copy.ts`.**

This includes:

- Navigation labels
- Hero headlines and subheadlines
- Section headings and body paragraphs
- CTA button text and link targets
- Contact form labels and pathway descriptions
- Footer text
- SEO metadata (title, description, Open Graph) for every page

To update any text on the site, edit the corresponding object in `site-copy.ts`.

---

## Design system

The visual system is defined in `tailwind.config.ts` and `styles/globals.css`.

**Colours:** Warm stone palette with subtle warm and sage accents. Primary background is `stone-50`, primary text is `stone-800/900`.

**Typography:** Serif (`Georgia`) for headings, system sans-serif for body text. Type scale ranges from `caption` (13px) to `display-lg` (64px).

**Spacing:** Sections use `section-padding` (72px / 112px). Content is constrained to `max-w-content` (1200px) or `max-w-prose` (680px).

**Buttons:** Two styles — `btn-primary` (dark fill) and `btn-secondary` (bordered outline).

**Forms:** Styled with `input-field` and `textarea-field` classes.

---

## What to replace later

- **Logo:** Replace the text "Saha" in the header with an SVG or image logo
- **Fonts:** Load custom web fonts (e.g., from Google Fonts or self-hosted) and update `tailwind.config.ts`
- **Favicon:** Add favicon files to `public/`
- **Images:** Add photography or illustrations to `public/` and reference them in pages
- **Form backend:** Wire the contact form to a real backend (e.g., Formspree, a serverless function, or your CRM)
- **Analytics:** Add privacy-respectful analytics if needed
- **Legal pages:** Replace placeholder privacy and terms content with reviewed legal text
- **Domain / email:** Update `siteConfig.url` and `siteConfig.email` in `content/site-copy.ts`
- **Open Graph images:** Add OG images for social sharing

---

## Tech stack

- **Next.js 14** — App Router, server components by default
- **TypeScript** — type safety throughout
- **Tailwind CSS 3** — utility-first styling with custom design tokens
- **Zero external dependencies** — no animation libraries, icon packs, or CMS required

The site is designed to be deployed to Vercel, Netlify, or any Node.js hosting provider.
