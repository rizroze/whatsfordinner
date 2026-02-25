-- Track anonymous free plan generations to prevent abuse
-- One free plan per device fingerprint, ever
create table if not exists public.free_generations (
  id uuid primary key default gen_random_uuid(),
  fingerprint text not null,
  ip_address text not null,
  created_at timestamptz not null default now()
);

-- Fast lookup by fingerprint
create unique index idx_free_gen_fingerprint on public.free_generations(fingerprint);

-- Fast lookup by IP
create index idx_free_gen_ip on public.free_generations(ip_address);

-- No RLS — only accessed via service role from API routes
alter table public.free_generations enable row level security;
-- No policies = no access from client (anon/authenticated), only service role
