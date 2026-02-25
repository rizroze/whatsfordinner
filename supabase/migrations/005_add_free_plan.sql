-- Track whether user has used their free plan
alter table public.users add column free_plan_used boolean not null default false;
