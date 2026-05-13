# RANK Engineering Services — Website

Modern, professional marketing site for **RANK ENGINEERING SERVICES**, built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and `lucide-react` icons.

## Tech stack

- [Next.js 16](https://nextjs.org/) with the App Router and Turbopack
- React 19
- TypeScript 5
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- `lucide-react` for iconography
- `next/image` with remote Unsplash imagery for placeholder photography

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Booking emails (Resend)

The `/booking` page submits to `app/api/booking/route.ts`, which sends email using Resend.

1. Copy `.env.example` to `.env.local`
2. Fill in:
   - `RESEND_API_KEY`
   - `BOOKING_FROM_EMAIL` (must be a verified sender in Resend, or use `onboarding@resend.dev` for testing)
   - `BOOKING_TO_EMAIL` (your receiving inbox)

## Available scripts

- `npm run dev` — start the local dev server with Turbopack
- `npm run build` — produce a production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Project structure

```
app/
  layout.tsx          // Inter font + global metadata
  page.tsx            // Composes the full landing page
  globals.css         // Tailwind theme tokens + base styles
components/
  site-header.tsx     // Sticky nav with logo + Contact CTA
  sections/
    hero.tsx          // Cityscape hero
    services.tsx      // Three-service grid
    about.tsx         // About Us + Our Expertise
    projects.tsx      // Featured Projects grid
    footer.tsx        // Brand + contact + copyright
  ui/
    button.tsx        // Shared button (Link or button)
    logo.tsx          // RANK SVG mark + wordmark
    section-heading.tsx
lib/
  content.ts          // Single source of truth for copy + images
  cn.ts               // Tiny className combiner
public/
  logo.svg            // Standalone RANK logo asset
```

## Editing content

All headings, body copy, navigation labels, and image URLs live in [`lib/content.ts`](lib/content.ts). Update that one file to rebrand or rewire any section without touching the components.

## Swapping the imagery

Imagery is loaded from `images.unsplash.com` and whitelisted in [`next.config.ts`](next.config.ts). To use your own photos, drop them into `public/` and replace the URLs in `lib/content.ts` with `"/your-image.jpg"`. No other config changes needed.
