/**
 * The single switch for the free-trial funnel. Unset (the default) means
 * every trial-facing surface — copy, the trial-ending reminder cron, the
 * dashboard banner — renders exactly the pre-trial experience, so code can
 * ship ahead of the LemonSqueezy variant config without ever promising a
 * trial that checkout won't grant.
 *
 * Flipping it on is a three-step checklist done together:
 *   1. Apply supabase/migrations/012_add_trial_columns.sql
 *   2. Set the free-trial days on both LS variants (monthly + yearly)
 *   3. Set NEXT_PUBLIC_TRIAL_DAYS in Vercel to the same number and redeploy
 *
 * NEXT_PUBLIC_ so the same value is inlined client-side (pricing/preview
 * copy) and readable server-side (nurture emails, cron). Trimmed because
 * trailing whitespace in Vercel env vars is a repeat offender here.
 */
export function getTrialDays(): number | null {
  const raw = process.env.NEXT_PUBLIC_TRIAL_DAYS?.trim();
  if (!raw) return null;
  const days = parseInt(raw, 10);
  return Number.isFinite(days) && days > 0 ? days : null;
}
