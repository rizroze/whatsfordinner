-- Anonymous nurture leads live in meal_plans with user_id null
-- (the old free-plan flow relied on this; codify it so fresh environments match prod)
alter table public.meal_plans alter column user_id drop not null;

-- Fast lookup for lead dedupe by email
create index if not exists idx_meal_plans_nurture_email
  on public.meal_plans ((plan_data->>'nurture_email'))
  where user_id is null;
