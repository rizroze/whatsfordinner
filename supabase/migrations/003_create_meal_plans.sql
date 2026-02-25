-- Weekly meal plans
create table public.meal_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  week_of date not null,
  plan_data jsonb,
  regeneration_count int not null default 0,
  status text not null default 'generating'
    check (status in ('generating', 'ready', 'sent', 'failed')),
  sent_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, week_of)
);

create index idx_meal_plans_status on public.meal_plans(status);
create index idx_meal_plans_user_week on public.meal_plans(user_id, week_of desc);

create trigger meal_plans_updated_at
  before update on public.meal_plans
  for each row execute function public.update_updated_at();
