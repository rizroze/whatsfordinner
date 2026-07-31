-- Trial support for LemonSqueezy card-required free trials.
-- trial_ends_at: copied from the LS subscription payload when a trial
--   subscription is created. Purely informational after conversion (the
--   date passes and display logic treats the user as a normal subscriber);
--   never cleared, so no state cleanup is needed anywhere.
-- trial_reminder_sent_at: set once when the "trial ends tomorrow" email
--   goes out, so the daily cron never double-sends.
--
-- NOTE: deliberately separate from subscription_expires_at, which drives
-- the gifted/promo expiry sweep in the weekly cron (expireGiftedSubscriptions).
-- Reusing it would cancel trial users at the exact moment LemonSqueezy is
-- about to charge them.

ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS trial_ends_at timestamptz,
  ADD COLUMN IF NOT EXISTS trial_reminder_sent_at timestamptz;
