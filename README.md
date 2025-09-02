# Gray GaaS — Next.js + Tailwind (App Router)

A ready-to-deploy mockup for the Gray GaaS website, built with **Next.js 14 (App Router)** and **Tailwind CSS**. It includes:
- Homepage (`/`) for storytelling and impact
- Conversion landing page (`/landing`) for sign-ups
- Simple UI components (Button, Card, Input) with Tailwind classes (no external UI library needed)

## Quick Start

```bash
# 1) Install deps
npm install

# 2) Start dev server
npm run dev

# 3) Open the app
# http://localhost:3000
```

## Deploy

Deploy effortlessly on **Vercel**:

1. Push this folder to a GitHub repo
2. Import the repo in Vercel (https://vercel.com/new)
3. Click **Deploy**

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3

## Project Structure

```
app/
  layout.tsx         # Root layout & global styles
  page.tsx           # Homepage
  landing/page.tsx   # Conversion-focused landing page
components/ui/
  Button.tsx
  Card.tsx
  Input.tsx
app/globals.css      # Tailwind base styles + utilities
tailwind.config.ts
postcss.config.js
next.config.mjs
package.json
tsconfig.json
```

## Notes

- Images use royalty-free placeholders from Unsplash. Replace with your own assets in `app/page.tsx`.
- No shadcn/ui dependency — components are implemented locally for portability.
