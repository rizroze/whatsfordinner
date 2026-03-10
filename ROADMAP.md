# What's For Dinner - Roadmap

## Status: LAUNCHED & LIVE
Last audit: March 10, 2026
First payment received. Product Hunt scheduled.

---

## What's Already Shipped

### Core Product
- [x] AI meal plan generation with recipes + grocery list (3-day free, 7-day paid)
- [x] 5-step onboarding (household, budget, diet, preferences, delivery)
- [x] Dashboard with plan view, past plans, regeneration (2x/week)
- [x] Grocery list with category grouping + checkboxes
- [x] Print-friendly plan view
- [x] Meal feedback (like/dislike — influences future AI generations)
- [x] Mock plan mode for dev (USE_MOCK_PLAN env var)

### Subscriptions & Payments
- [x] LemonSqueezy checkout (monthly + yearly)
- [x] Full webhook handler (created, updated, cancelled, expired, payment_failed, resumed)
- [x] Customer portal (manage billing)
- [x] Promo/gift code system with atomic redemption + admin panel
- [x] Referral codes for yearly subscribers (3 codes each, DINNER-XXXX-XXXX format)
- [x] Gifted subscription expiry via cron

### Emails (Resend)
- [x] Weekly meal plan email (dynamic hero based on week number, day-by-day meals)
- [x] Free plan delivery email with upsell nudge
- [x] Nurture sequence for free users (Day 3 → monthly CTA, Day 7 → yearly CTA)
- [x] Unsubscribe flow (HMAC token, RFC 8058 List-Unsubscribe, email_opted_out flag)
- [x] Supabase auth emails via Resend SMTP (confirmation, password reset)
- [x] HTML-safe email templates (no flexbox, no gradients, color-scheme:light forced)

### Auth
- [x] Email/password signup with confirmation
- [x] Google OAuth
- [x] Protected routes via middleware
- [x] Promo code survival across auth redirects (localStorage)
- [x] Callback route with plan/redirect param handling

### SEO — 920+ Pages
- [x] 80 pSEO meal plan pages with FAQPage + BreadcrumbList schema
- [x] 18 blog articles (10 alternatives + 4 guides + roundup + for couples)
- [x] 800 translated pages across 10 locales (es, fr, de, pt, tr, ja, ko, zh, ar, hi)
- [x] hreflang on all pages (sitemap + metadata)
- [x] Multi-sitemap index (12 sub-sitemaps)
- [x] Dynamic OG images per meal plan page + blog
- [x] WebSite + SoftwareApplication + FAQPage schema in root layout
- [x] robots.txt, IndexNow key, Google Search Console + Bing Webmaster Tools
- [x] Custom 404 page

### Security
- [x] 3-layer free plan abuse prevention (fingerprint + IP + timing + honeypot + UA filter)
- [x] Rate limiting on all public API routes
- [x] HMAC-SHA256 webhook verification
- [x] CRON_SECRET timing-safe auth
- [x] Unsubscribe tokens with 90-day expiry
- [x] Zod strict validation on all API inputs
- [x] Claude prompt injection sanitization
- [x] HTML escaping in email templates
- [x] PII masking in error logs

---

## What's Next

### High Impact — Do Soon

- [x] **Funnel analytics** — Vercel Analytics track() on each onboarding step + completion. onboarding_step_completed + onboarding_completed events live.
- [x] **Swap single meal** — refresh icon on every meal card, Claude Haiku generates replacement respecting diet/allergies/cuisine, patches DB, updates UI instantly.
- [x] **Required delivery email** — email field now required in onboarding for both free and paid users. Nurture sequence now always has an address to hit.
- [ ] **Welcome email** — new signups should get an email before their first plan lands. Introduce the product, set expectations, drive them back to dashboard.
- [ ] **Email open/click tracking** — Resend supports webhooks. Knowing which emails convert tells you what to double down on.
- [ ] **Checkout return page** — after LemonSqueezy redirects back, poll subscription status for 30s before showing dashboard. Currently the user lands before the webhook fires.

### Growth

- [ ] **Free plan soft email gate** — ask for email before showing the free plan preview. Biggest acquisition lever sitting on the table. Even 20% opt-in = huge nurture list.
- [ ] **Social sharing card** — "My meal plan for the week" shareable image for Twitter/Instagram. Free distribution.
- [ ] **Pause/skip week** — subscribers want to skip without cancelling. High retention value.
- [ ] **Cancellation survey** — ask why before they cancel. Churn insight + last-chance save.
- [ ] **Annual upsell nudge** — show "switch to yearly, save 50%" banner on dashboard for monthly subscribers.

### SEO Expansion

- [ ] **Blog translations** — 18 articles × 10 locales. Same pattern as meal plans. Big long-term SEO value.
- [ ] **Language switcher** — translated pages need a way to navigate between locales. Currently no UI for this.
- [ ] **More pSEO categories** — specific health conditions (IBS, PCOS, thyroid), meal prep focused pages, budget cooking pages.

### Product Depth

- [ ] **Favorite meals** — save meals you loved, bias future plans toward them (feedback table exists, just needs UI).
- [ ] **Recipe ratings** (thumbs up/down) — `meal_feedback` table already exists, just needs proper UI.
- [ ] **Grocery delivery integration** — Instacart or AnyList. High value for conversion.
- [ ] **Leftover tracking** — mark unused ingredients, reduce next week's list.

### Technical Health

- [ ] **Webhook idempotency** — dedupe LemonSqueezy retries using event ID. Low effort, high safety.
- [ ] **Cron per-user timeout** — 90s timeout per user so one slow Claude call doesn't block everyone.
- [ ] **Error monitoring** — Sentry or similar. Flying blind on production errors right now.
- [ ] **Test suite** — promo system, cron, webhook handling at minimum.

---

## Metrics to Track

| Metric | Now | Month 1 Target | Month 3 Target |
|--------|-----|----------------|----------------|
| Free plans generated | — | 100+ | 500+ |
| Paid subscribers | 1 | 10+ | 50+ |
| Free → paid conversion | — | >5% | >8% |
| Monthly churn | — | <15% | <10% |
| Email open rate | — | >40% | >40% |
| Organic search clicks | — | 100+/mo | 1000+/mo |
