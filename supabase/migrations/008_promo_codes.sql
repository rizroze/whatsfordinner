-- Promo codes & referral system

-- Add subscription source and expiry to users
ALTER TABLE users ADD COLUMN IF NOT EXISTS subscription_source TEXT NOT NULL DEFAULT 'none'
  CHECK (subscription_source IN ('none', 'lemonsqueezy', 'promo', 'referral'));
ALTER TABLE users ADD COLUMN IF NOT EXISTS subscription_expires_at TIMESTAMPTZ;
ALTER TABLE users ADD COLUMN IF NOT EXISTS plan_interval TEXT
  CHECK (plan_interval IN ('monthly', 'yearly'));

-- Promo codes table
CREATE TABLE IF NOT EXISTS promo_codes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  type TEXT NOT NULL CHECK (type IN ('admin', 'referral')),
  duration_months INTEGER NOT NULL DEFAULT 1,  -- 0 = lifetime
  max_uses INTEGER NOT NULL DEFAULT 1,
  current_uses INTEGER NOT NULL DEFAULT 0,
  created_by UUID REFERENCES auth.users(id),
  referrer_user_id UUID REFERENCES auth.users(id),
  expires_at TIMESTAMPTZ,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_promo_codes_code ON promo_codes(code);
CREATE INDEX IF NOT EXISTS idx_promo_codes_referrer ON promo_codes(referrer_user_id) WHERE referrer_user_id IS NOT NULL;

-- Promo redemptions table
CREATE TABLE IF NOT EXISTS promo_redemptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  promo_code_id UUID NOT NULL REFERENCES promo_codes(id),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  subscription_start TIMESTAMPTZ NOT NULL DEFAULT now(),
  subscription_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(promo_code_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_promo_redemptions_user ON promo_redemptions(user_id);

-- RLS policies
ALTER TABLE promo_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE promo_redemptions ENABLE ROW LEVEL SECURITY;

-- Users can read promo codes (needed for validation)
CREATE POLICY "Anyone can read active promo codes" ON promo_codes
  FOR SELECT USING (is_active = true);

-- Users can read their own redemptions
CREATE POLICY "Users can read own redemptions" ON promo_redemptions
  FOR SELECT USING (auth.uid() = user_id);

-- Service role handles all writes (bypasses RLS)
