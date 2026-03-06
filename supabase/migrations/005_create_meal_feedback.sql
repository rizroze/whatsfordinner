-- Meal feedback: tracks user likes/dislikes per meal name
CREATE TABLE IF NOT EXISTS meal_feedback (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  meal_name text NOT NULL,
  rating text NOT NULL CHECK (rating IN ('liked', 'disliked')),
  created_at timestamptz DEFAULT now() NOT NULL,
  UNIQUE(user_id, meal_name)
);

-- Index for fast lookups when generating plans
CREATE INDEX IF NOT EXISTS idx_meal_feedback_user_id ON meal_feedback(user_id);

-- RLS
ALTER TABLE meal_feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own feedback"
  ON meal_feedback FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own feedback"
  ON meal_feedback FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own feedback"
  ON meal_feedback FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own feedback"
  ON meal_feedback FOR DELETE
  USING (auth.uid() = user_id);
