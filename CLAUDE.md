# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Academic personal website built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. Outputs as a **static site** (`output: 'export'` in next.config.ts) — no server-side runtime, no API routes, no dynamic routes.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Static export to /out directory
npm run lint     # ESLint
```

## Architecture

### Data-Driven Content

All content lives in `/data` — components consume it via direct imports, not props:
- `siteConfig.ts` — Personal info, social links, metadata
- `content.ts` — About text, education, teaching, affiliations
- `papers.ts` — Research papers with categories, authors, abstracts
- `mainSections.ts` — Section ordering and component mapping (array of `{id, component}`)

### Layout Structure

The site is a single-page layout with two columns on desktop:
- **Left column**: `ProfileSection` (sticky sidebar with photo, name, links)
- **Right column**: `MainContent` orchestrates sections from `mainSections.ts` array

`MainContent` is the only stateful orchestrator — it manages which paper abstract is open and passes that state down to the Research section. Sections navigate via hash links (`/#research`, `/#about`).

### Component Organization

- `components/layout/` — Page structure (Header, Footer, MainContent, ProfileSection)
- `components/layout/SectionsMain/` — Content sections (About, Education, Research, Teaching)
- `components/ui/` — Reusable primitives (button with CVA variants, links, theme toggle, icons)
- `components/social/` — Social/contact links

### Client vs Server Components

Most components are client components (`'use client'`). The root `layout.tsx` and `page.tsx` are server components. The page includes schema.org structured data for SEO.

### Types

TypeScript interfaces live in `/types` (content.ts, papers.ts). All data structures are explicitly typed.

## Styling

- **Tailwind CSS v4** with `@tailwindcss/postcss` — theme defined via `@theme` directive in `globals.css`
- **HSL color system** with CSS variables — light/dark themes defined in `:root` and `.dark`
- **Key custom color**: `accent-red` used for links, highlights, selections
- **Fonts**: Inter (sans, primary), Source Serif 4 (serif, blockquotes)
- **`cn()` utility** in `lib/utils.ts` — combines `clsx` + `tailwind-merge`
- **Component variants** via `class-variance-authority` (see `components/ui/button.tsx`)
- Dark mode managed by `next-themes` with class strategy

## Deployment

GitHub Actions workflow deploys to Hetzner via FTPS on push to `main`. The `/out` directory is uploaded after `npm run build`.

## Code Quality Conventions

- Avoid AI-generated slop: no unnecessary comments, defensive checks, or `any` casts (see `.cursor/commands/deslop.md`)
- Path alias: `@/*` maps to project root
- Direct imports preferred over barrel exports
