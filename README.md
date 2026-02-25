# What's For Dinner?

**Personalized meal plans + grocery lists, delivered to your inbox every week.**

No more staring at the fridge. No more last-minute takeout. Just tell us what you like, and we handle the rest.

[whatsfordinner.fit](https://whatsfordinner.fit)

![Landing page](docs/screenshots/landing.png)

---

## How it works

1. **Tell us your preferences** — dietary needs, budget, household size, allergies, favorite cuisines
2. **AI plans your week** — personalized recipes + a consolidated grocery list, delivered by email every Sunday
3. **Cook and enjoy** — simple recipes, no waste, no stress

![How it works](docs/screenshots/how-it-works.png)

---

## Try it free

Get a free 1-day meal plan without creating an account. No credit card, no signup — just answer 5 quick questions.

![Onboarding flow](docs/screenshots/onboarding.png)

---

## Your meal plan

Every plan includes recipes with ingredients, cook times, calorie counts, and a grocery list you can actually shop from.

![Meal plan preview](docs/screenshots/preview.png)

---

## Pricing

- **$4.99/month** — fresh 7-day plans every week
- **$2.50/month** — billed yearly at $29.99

Both plans include a free 1-day trial, regeneration (up to 2x/week), and support for allergies, diets, and picky eaters.

![Pricing](docs/screenshots/pricing-cards.png)

---

## Tech stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| Auth | Supabase Auth (email + Google OAuth) |
| Database | Supabase (Postgres + RLS) |
| AI | Claude API (Haiku for generation) |
| Payments | Lemon Squeezy (subscriptions) |
| Email | Resend (weekly delivery) |
| Hosting | Vercel (cron for weekly batch) |

## Project structure

```
src/
  app/
    page.tsx                    # Landing page
    dashboard/                  # Subscriber dashboard
    onboarding/                 # 5-step preference setup
    preview/                    # Free plan viewer
    plan/[weekId]/              # Full meal plan view
    api/
      generate-plan/            # Authenticated plan generation
      generate-free-plan/       # Free 1-day plan (rate limited)
      lemonsqueezy/             # Checkout, webhook, portal
      cron/weekly/              # Sunday batch: generate + email all subscribers
      send-plan/                # Email delivery
      profile/                  # User preferences CRUD
  lib/
    anthropic.ts                # Claude API + prompt builder
    resend.ts                   # Email templates
    supabase/                   # Client, server, admin clients
    lemonsqueezy.ts             # Payment setup + config
  components/
    landing/                    # Hero, HowItWorks, Pricing, FAQ
    onboarding/                 # Step components
    dashboard/                  # Dashboard widgets
    plan/                       # Meal cards, grocery list
    ui/                         # Button, Card, Input, etc.
```

## Running locally

```bash
# Install
npm install

# Set up environment variables (see .env.example)
cp .env.example .env.local

# Run dev server
npm run dev
```

Required env vars:
- `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase project
- `SUPABASE_SERVICE_ROLE_KEY` — Server-side DB access
- `ANTHROPIC_API_KEY` — Claude API for meal plan generation
- `LEMONSQUEEZY_API_KEY` + `LEMONSQUEEZY_STORE_ID` + variant IDs — Payments
- `LEMONSQUEEZY_WEBHOOK_SECRET` — Webhook verification
- `RESEND_API_KEY` — Email delivery
- `CRON_SECRET` — Protects the weekly cron endpoint

---

Built by [Zen](https://github.com/rizzytoday)
