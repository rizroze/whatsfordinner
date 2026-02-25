-- User preference profiles
create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references public.users(id) on delete cascade,
  household_size int not null default 2,
  has_kids boolean not null default false,
  kids_ages text[], -- e.g. ['toddler', 'school-age']
  weekly_budget text not null default 'moderate'
    check (weekly_budget in ('budget', 'moderate', 'premium')),
  dietary_restrictions text[] default '{}',
  allergies text[] default '{}',
  cuisine_preferences text[] default '{}',
  cooking_skill text not null default 'intermediate'
    check (cooking_skill in ('beginner', 'intermediate', 'advanced')),
  max_cook_time int not null default 45, -- minutes
  meals_per_day int not null default 3
    check (meals_per_day between 1 and 5),
  servings_per_meal int not null default 2,
  delivery_email text,
  delivery_day text not null default 'sunday'
    check (delivery_day in ('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday')),
  timezone text not null default 'America/New_York',
  onboarding_completed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function public.update_updated_at();
