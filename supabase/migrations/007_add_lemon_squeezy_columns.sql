-- Add Lemon Squeezy columns alongside existing Stripe columns
ALTER TABLE users ADD COLUMN IF NOT EXISTS lemon_customer_id TEXT;
ALTER TABLE users ADD COLUMN IF NOT EXISTS lemon_subscription_id TEXT;

-- Index for webhook lookups
CREATE INDEX IF NOT EXISTS idx_users_lemon_subscription_id ON users(lemon_subscription_id);
CREATE INDEX IF NOT EXISTS idx_users_lemon_customer_id ON users(lemon_customer_id);
