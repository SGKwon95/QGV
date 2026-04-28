<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## KGV - Quick Reference

**Stack:** Next.js 16.2.4 (App Router) · TypeScript · Tailwind CSS v4 · Prisma 7.8.0 · MySQL

### Commands
```
npm run dev          # Start dev server
npm run build        # Production build (TypeScript check included)
npm run lint         # ESLint
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to DB (dev)
npm run db:migrate   # Run migrations
npm run db:studio    # Open Prisma Studio
```

### Architecture

```
src/
├── app/              # Next.js App Router pages + API routes
│   ├── page.tsx      # Home (hero + movie lists + theaters)
│   ├── movies/page.tsx   # Movie list with genre/status filters
│   ├── screening/page.tsx # Screening timetable UI
│   ├── theaters/page.tsx  # Theater listings
│   ├── reviews/page.tsx   # Reviews
│   └── api/movies/, api/theaters/  # API routes
├── components/       # UI components (header, hero, movie-card, etc.)
├── lib/              # Data layer
│   ├── prisma.ts     # DB client (graceful fallback to mock on failure)
│   ├── mock-data.ts  # Mock data (primary source when DB unavailable)
│   ├── movies.ts     # Movie data functions
│   ├── theaters.ts   # Theater data functions
│   └── reviews.ts    # Review data functions
├── hooks/            # Custom React hooks
└── types/            # Shared TypeScript types
```

### Gotchas

- **Prisma 7.x** uses `prisma.config.ts` (not `schema.prisma` for config). Generated client outputs to `src/generated/prisma`. Run `npm run db:generate` after schema changes.
- **DB fallback**: `src/lib/prisma.ts` catches connection errors and sets `prisma = null`. All data functions use `src/lib/mock-data.ts` as fallback — never assume `prisma` is available.
- **External images**: `image.tmdb.org` is the only external image host. It is configured in `next.config.ts` under `remotePatterns`. Do not add new external image hosts without updating this config.
- **Name casing**: npm package name is lowercase `qgv`. The directory `QGV` was renamed during init. Do not use capital letters in npm package names.
- **No test framework** is configured. Add one if tests are needed.
- **Tailwind CSS v4** uses `@tailwindcss/postcss` and `@import "tailwindcss"` syntax in CSS (not `@tailwind` directives).
