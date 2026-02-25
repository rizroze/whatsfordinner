-- Drop the overly permissive update policy that lets users change subscription_status
drop policy if exists "Users can update own data" on public.users;

-- Replace with a restricted policy: users can only update safe fields (email preferences)
-- Subscription status, lemon IDs, and free_plan_used are admin-only (via service role)
create policy "Users can update own safe data"
  on public.users for update
  using (auth.uid() = id)
  with check (
    -- Prevent changing subscription/billing fields via client
    subscription_status is not distinct from (select subscription_status from public.users where id = auth.uid())
    and free_plan_used is not distinct from (select free_plan_used from public.users where id = auth.uid())
    and lemon_customer_id is not distinct from (select lemon_customer_id from public.users where id = auth.uid())
    and lemon_subscription_id is not distinct from (select lemon_subscription_id from public.users where id = auth.uid())
  );
