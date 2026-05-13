# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Dev server at http://localhost:3000
npm run build      # Static export → out/ (requires no TypeScript errors)
npm run lint       # ESLint check
npx tsc --noEmit   # Type-check without building
npx serve out -p 3001  # Preview the static build locally
```

The build sets `NEXT_PUBLIC_BASE_PATH=/El-Buen-ROI` via the GitHub Actions workflow. For local builds without that env var, `basePath` defaults to `''`.

## Architecture

**Static export** — `next.config.mjs` sets `output: 'export'`, so the entire site compiles to `out/`. No server-side rendering. Dynamic routes (`/parches/[slug]`) require `generateStaticParams()` to enumerate all slugs at build time.

**Data layer** — All parche content lives in `src/lib/parches.ts` as a static array. To add a new parche: append an object to `parches[]` and drop a `1200×800` JPEG in `public/images/`. The slug becomes the URL segment.

**Routing** — Two routes: `/` (homepage) and `/parches/[slug]` (detail). The homepage composes `HeroBanner → BentoGrid → ParcheCalculator`. The detail page renders a metrics dashboard + article body from `Parche.contenido`.

**Design tokens** — Colors, shadows, and fonts are centralized in `tailwind.config.ts`. The three fonts have distinct roles: `Anton` (uppercase headings), `Inter` (body), `Space Mono` (all numeric/financial data). Use `font-mono` / `fontFamily: "'Space Mono', monospace"` for any COP amounts or percentages.

**Animations** — Framer Motion is used throughout. Key patterns:
- `AnimatePresence mode="popLayout"` + `motion.div layout` for list reordering (BentoGrid, ParcheCalculator)
- `useMotionValue` + `useSpring` for magnetic hover (avoids re-renders)
- `useScroll` + `useTransform` for parallax in HeroBanner
- CSS `@keyframes` handles the ticker and `.blink` class (defined in `globals.css`)

**Deployment** — Push to `main` triggers `.github/workflows/deploy.yml`, which builds with `NEXT_PUBLIC_BASE_PATH=/El-Buen-ROI` and deploys `out/` to GitHub Pages. GitHub Pages source must be set to **GitHub Actions** (not "Deploy from a branch").

## Financial Metrics Model

Each parche exposes four core metrics used across all components:
- `roe` (0–100): Return on Entertainment — color thresholds: ≥75 green, ≥50 mustard, <50 red
- `capex` (COP): minimum hard investment (transport + entry)
- `ebitda` (COP): real value before extras
- `perfilRiesgo`: `Conservador | Moderado | Agresivo | Especulativo` — Especulativo gets `.blink`
- `tieneConsumoMinimo`: boolean — drives the Prueba Ácida filter in BentoGrid

Use `formatCOP()` from `src/lib/parches.ts` for all currency display.
