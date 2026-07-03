# What's For Dinner — Project Instructions

## What This Product Does
AI meal planner that generates personalized weekly **meal plans with recipes and a grocery list**.
Always mention all three: meal plans + recipes + grocery list. Never just "meal plans and grocery lists."

Paid-only (since late June 2026): $7.99/mo or $59.99/yr via LemonSqueezy. Flow is
onboarding → `/preview` (personalized, rule-based, zero tokens) → signup → pay.
Paid tier: 7-day weekly plan, regenerated every Sunday via cron, stored in DB.

## Stack
- **Next.js 16** (App Router), React 19, TypeScript
- **Tailwind 4** — CSS-only animations, no GSAP, no Framer Motion
- **Supabase** — Auth (email + Google OAuth) + Postgres DB
- **Claude API** — meal plan + recipe generation (claude-haiku-4-5)
- **Resend** — transactional emails + Supabase auth SMTP
- **LemonSqueezy** — payments (monthly + yearly plans)
- **Vercel** — auto-deploys on push to main

## Dev Commands
```bash
npm run dev        # localhost:3000 (or next available port)
npm run build      # production build check
npm run lint       # ESLint
```

## Design Rules
- **Warm Minimal Light** — orange (#F97316) on cream (#FFFBF5), no dark mode ever
- Pill buttons, Inter font only, CSS transitions (200ms) only
- Orange is the ONLY accent color (meal type badges are the only exception)
- No dark mode, no GSAP, no animation libraries

## Key Architecture

### Meal Plan Generation
- Free: `POST /api/generate-free-plan` — anonymous, fingerprint-guarded, not stored in DB
- Paid: `POST /api/generate-plan` — stored in `meal_plans` table, email sent on every generation
- Weekly cron: `GET /api/cron/weekly` — runs Sunday 8AM UTC, generates for all active subscribers
- Dashboard auto-generates if subscriber visits before cron fires (useEffect in CurrentPlan)

### Auth Flow
- Google OAuth → instant session → onboarding/checkout
- Email/password → confirmation ON → "Check your email" screen → `/callback` → onboarding
- Promo codes: stored in localStorage (`wfd_promo_code`), redeemed during onboarding

### SEO Infrastructure
- 80 pSEO meal plan pages (`/meal-plans/[slug]`) — static generated
- 18 blog articles (`/blog/[slug]`)
- 10 non-English locales (`/[locale]/meal-plans/[slug]`) — es, fr, de, pt, tr, ja, ko, zh, ar, hi
- 920+ total pages, hreflang on all, sitemap at `/sitemap.xml`
- Translation data: `src/data/meal-plans/translations/{locale}.json`

### Adding New pSEO Pages
1. Create data file in `src/data/meal-plans/` following `MealPlanPageData` type
2. Import + spread into `ALL_PAGES` in `src/data/meal-plans/index.ts`
3. Add slug mappings to each `translations/slugs/{locale}.json`
4. Add content to each `translations/{locale}.json`
5. Pages, sitemap, hreflang all auto-generate — nothing else needed

## Key File Locations
| What | Where |
|------|-------|
| Dashboard | `src/app/dashboard/page.tsx` |
| Plan view | `src/app/plan/[weekId]/PlanView.tsx` |
| Onboarding | `src/app/onboarding/page.tsx` |
| Free plan API | `src/app/api/generate-free-plan/route.ts` |
| Paid plan API | `src/app/api/generate-plan/route.ts` |
| Weekly cron | `src/app/api/cron/weekly/route.ts` |
| Email templates | `src/lib/resend.ts` |
| Promo system | `src/lib/promo.ts` |
| Rate limiting | `src/lib/rate-limit.ts` |
| Meal plan data | `src/data/meal-plans/` |
| i18n locales | `src/lib/i18n/locales.ts` |
| Sitemap | `src/app/sitemap.ts` |

## Critical Pitfalls

### Email HTML
- NEVER use `display:flex` or `gap` — use `<table>` layouts
- NEVER use `linear-gradient` or `rgba()` backgrounds — flat hex only
- Force `color-scheme: light` meta tags to prevent dark mode inversion
- Keep rendered height short — Apple Mail clips long emails visually
- Gmail clips at 102KB HTML

### Supabase
- `PromiseLike` doesn't support `.catch()` — use `void admin.from(...)` for fire-and-forget
- Deleting users: must delete in order: meal_plans → promo_redemptions → profiles → public.users → auth.users
- Use Resend SMTP for auth emails — Supabase built-in is unreliable

### General
- Free plans NOT stored in DB — only a stats row is inserted
- Profile schema uses `.strict()` — unknown keys cause 400 errors
- ISR cache can serve stale stats — use `force-dynamic` + `cache: "no-store"`
- Promo code race condition: uses optimistic locking with `.eq("current_uses", readValue)`
- Vercel auto-deploys on push — never run `npx vercel --prod` manually

## Deployment
Vercel auto-deploys on every push to `main`. No manual deploy needed.
Env vars live in Vercel dashboard (not in `.env.local` for production).
