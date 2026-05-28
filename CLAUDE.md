# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` — Start dev server (Next.js 16 with Turbopack, port 3000)
- `pnpm build` — Production build
- `pnpm lint` — ESLint (flat config, eslint.config.mjs)
- No test framework is configured yet

## Architecture

Next.js 16 App Router project (React 19, TypeScript) for a media/digital publishing platform. Uses React Server Components by default.

**Path alias:** `@/*` maps to `./src/*`

**Key layers:**
- `src/app/` — App Router pages, layouts, SEO (robots.ts, sitemap.ts)
- `src/components/ui/` — shadcn/ui components (base-nova style, built on Base UI React + CVA)
- `src/components/site/` — Page-level compositions (e.g., media-home.tsx is a client component with Framer Motion)
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

**Styling:** Tailwind CSS 4 via `@tailwindcss/postcss`. CSS variables for theming. Animation via Framer Motion and tw-animate-css.

**UI components** use Base UI React primitives for accessibility, styled with CVA variants and Tailwind classes. Add new ones via `pnpm dlx shadcn@latest add <component>`.

**Images:** Remote patterns configured for `images.unsplash.com` in next.config.ts.

**MCP servers** (`.mcp.json`): next-devtools-mcp and shadcn CLI are available for development tooling.
