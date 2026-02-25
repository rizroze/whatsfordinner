-- Enable RLS on all tables
alter table public.users enable row level security;
alter table public.profiles enable row level security;
alter table public.meal_plans enable row level security;

-- Users: read/update own row only
create policy "Users can view own data"
  on public.users for select
  using (auth.uid() = id);

create policy "Users can update own data"
  on public.users for update
  using (auth.uid() = id);

-- Profiles: full CRUD on own profile
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = user_id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = user_id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = user_id);

-- Meal plans: read own only (writes via service role)
create policy "Users can view own meal plans"
  on public.meal_plans for select
  using (auth.uid() = user_id);
