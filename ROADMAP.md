# What's For Dinner - Roadmap

## Launch Status: READY
Last audit: March 5, 2026

---

## PHASE 0: Launch Day (NOW)
- [x] Core flows working (free plan, signup, checkout, dashboard, emails)
- [x] SEO: structured data, sitemap, Google Search Console submitted
- [x] Social proof stats (honest, dynamic, grows with usage)
- [x] Print-friendly plan + grocery list
- [x] Unsubscribe link in emails (CAN-SPAM)
- [x] Referral codes for yearly subs (3 codes, shows usage)
- [x] Promo/gift code system working
- [x] Error handling on all user-facing actions
- [ ] Test purchase (monthly + yearly) end-to-end
- [ ] Share on Twitter

---

## PHASE 1: First Week Polish (Post-Launch)
Priority fixes based on real user feedback.

### Reliability
- [ ] Webhook idempotency — dedupe LemonSqueezy webhooks using event ID
- [ ] Cron timeout — add 90s timeout per user on plan generation so one slow user doesn't block others
- [ ] Promo code race condition — make increment atomic (Supabase RPC or row-level lock)

### UX Quick Wins
- [ ] Dedicated unsubscribe page (currently links to dashboard)
- [ ] Quick "change delivery email" in dashboard sidebar (skip full onboarding)
- [ ] Show "plan generating..." state on dashboard when cron is running
- [ ] Checkout return page — poll subscription status for 30s before showing dashboard

### Email
- [ ] Track email opens/clicks via Resend webhooks
- [ ] Welcome email on signup (before first plan)
- [ ] "Your plan is ready" push notification (if they enabled it)

---

## PHASE 2: Growth (Week 2-4)
Features that drive retention and acquisition.

### Retention
- [ ] Pause/skip week — let subscribers skip a single week without cancelling
- [ ] Favorite meals — save meals they liked, bias future plans toward them
- [ ] Swap single meal — replace one meal without regenerating entire plan
- [ ] Recipe ratings — thumbs up/down on individual recipes

### Acquisition
- [ ] Blog SEO — publish 2 more comparison posts (EveryPlate, Mealime alternatives)
- [ ] Free plan email capture — ask for email before showing preview (soft gate)
- [ ] Social sharing — "Share your meal plan" card for Twitter/Instagram
- [ ] Referral landing page — dedicated page explaining the referral program

### Analytics
- [ ] Track funnel: landing -> onboarding -> free plan -> signup -> paid
- [ ] Churn analysis: why do people cancel? (cancellation survey)
- [ ] Weekly email open rates and click-through

---

## PHASE 3: Product-Market Fit (Month 2-3)
Deepen the product based on data.

### Core Product
- [ ] Mobile-responsive plan view improvements
- [ ] Grocery list integration (Instacart, AnyList, Apple Reminders)
- [ ] Leftover tracking — mark what you didn't use, reduce next week's list
- [ ] Family profiles — different dietary needs per household member
- [ ] Seasonal/holiday meal plans (Thanksgiving, Christmas specials)

### Monetization
- [ ] Annual plan discount messaging on dashboard ("save 50%, switch to yearly")
- [ ] Gift subscriptions as a product (buy for someone, not just referral codes)
- [ ] Premium tier ($9.99/mo) — unlimited regenerations, recipe videos, nutritionist notes

### Technical Debt
- [ ] Test suite — unit tests for promo system, cron, webhook handling
- [ ] Error monitoring (Sentry or similar)
- [ ] Database indexes audit for query performance
- [ ] Rate limiting on all public API endpoints

---

## PHASE 4: Scale (Month 4+)
If we have paying customers and retention.

- [ ] Multi-language meal plans (not just UI — actual localized recipes)
- [ ] Dietary specialist plans (keto meal planner, vegan meal planner as separate landing pages)
- [ ] API for third-party integrations
- [ ] iOS app (plan viewer + grocery list with offline support)
- [ ] Affiliate program (bloggers/influencers earn commission)

---

## Metrics to Track
| Metric | Target (Month 1) | Target (Month 3) |
|--------|------------------|-------------------|
| Free plans generated | 100+ | 500+ |
| Paid subscribers | 10+ | 50+ |
| Monthly churn | <15% | <10% |
| Email open rate | >40% | >40% |
| Free -> paid conversion | >5% | >8% |

---

## Known Technical Debt
- Webhook idempotency missing (LemonSqueezy retry could double-process)
- Promo code RPC fallback not atomic (race condition on concurrent redemption)
- No test suite
- Free plan fingerprint guard is bypassable by determined users
- Cron has no per-user timeout (one slow generation blocks the queue)
