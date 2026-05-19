import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getWeekOf } from "@/lib/utils";

export const dynamic = "force-dynamic";

const MONTHLY_PRICE = 7.99;
const YEARLY_PRICE = 59.99;

const REASON_LABELS: Record<string, string> = {
  price: "Too expensive",
  not_using: "Not using it enough",
  missing_feature: "Missing a feature",
  found_alternative: "Found something else",
  temporary: "Just taking a break",
  other: "Other",
};

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail || user.email !== adminEmail) redirect("/dashboard");

  const admin = createAdminClient();
  const weekOf = getWeekOf();
  const monthStart = new Date();
  monthStart.setDate(1);
  monthStart.setHours(0, 0, 0, 0);

  const [
    activeResult,
    monthlyResult,
    yearlyResult,
    cancelledResult,
    totalUsersResult,
    onboardedResult,
    freeGenResult,
    cancelReasonsResult,
    recentSignupsResult,
    plansWeekResult,
    newThisMonthResult,
    cancelledThisMonthResult,
  ] = await Promise.all([
    admin.from("users").select("*", { count: "exact", head: true }).eq("subscription_status", "active"),
    admin.from("users").select("*", { count: "exact", head: true }).eq("subscription_status", "active").eq("plan_interval", "monthly"),
    admin.from("users").select("*", { count: "exact", head: true }).eq("subscription_status", "active").eq("plan_interval", "yearly"),
    admin.from("users").select("*", { count: "exact", head: true }).eq("subscription_status", "cancelled"),
    admin.from("users").select("*", { count: "exact", head: true }),
    admin.from("profiles").select("*", { count: "exact", head: true }).eq("onboarding_completed", true),
    admin.from("free_generations").select("*", { count: "exact", head: true }),
    admin.from("users").select("cancel_reason").not("cancel_reason", "is", null),
    admin.from("users")
      .select("email, created_at, subscription_status, plan_interval, subscription_source")
      .order("created_at", { ascending: false })
      .limit(10),
    admin.from("meal_plans").select("status").eq("week_of", weekOf),
    admin.from("users").select("*", { count: "exact", head: true }).gte("created_at", monthStart.toISOString()),
    admin.from("users").select("*", { count: "exact", head: true }).eq("subscription_status", "cancelled").gte("updated_at", monthStart.toISOString()),
  ]);

  const active = activeResult.count ?? 0;
  const monthly = monthlyResult.count ?? 0;
  const yearly = yearlyResult.count ?? 0;
  const cancelled = cancelledResult.count ?? 0;
  const totalUsers = totalUsersResult.count ?? 0;
  const onboarded = onboardedResult.count ?? 0;
  const freePlans = freeGenResult.count ?? 0;
  const newThisMonth = newThisMonthResult.count ?? 0;
  const cancelledThisMonth = cancelledThisMonthResult.count ?? 0;

  const mrr = (monthly * MONTHLY_PRICE) + (yearly * (YEARLY_PRICE / 12));
  const arr = mrr * 12;
  const conversionRate = onboarded > 0 ? ((active / onboarded) * 100).toFixed(1) : "0.0";

  // Aggregate cancel reasons
  const reasonCounts: Record<string, number> = {};
  for (const row of cancelReasonsResult.data ?? []) {
    const r = row.cancel_reason as string;
    reasonCounts[r] = (reasonCounts[r] ?? 0) + 1;
  }
  const totalCancelReasons = Object.values(reasonCounts).reduce((a, b) => a + b, 0);
  const sortedReasons = Object.entries(reasonCounts).sort((a, b) => b[1] - a[1]);

  // Plan pipeline this week
  const plans = plansWeekResult.data ?? [];
  const planSent = plans.filter(p => p.status === "sent").length;
  const planReady = plans.filter(p => p.status === "ready").length;
  const planFailed = plans.filter(p => p.status === "failed").length;
  const planGenerating = plans.filter(p => p.status === "generating").length;

  const recentSignups = recentSignupsResult.data ?? [];

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-stone-900">Admin</h1>
            <p className="text-xs text-stone-400 mt-0.5">whatsfordinner.fit — live data</p>
          </div>
          <span className="text-xs text-stone-400 bg-white border border-stone-100 px-3 py-1.5 rounded-full">
            Week of {weekOf}
          </span>
        </div>

        {/* MRR + key numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard label="MRR" value={`$${mrr.toFixed(2)}`} sub={`ARR $${arr.toFixed(0)}`} accent />
          <StatCard label="Active subs" value={String(active)} sub={`${monthly} mo · ${yearly} yr`} />
          <StatCard label="New this month" value={String(newThisMonth)} sub="signed up" />
          <StatCard label="Churned this month" value={String(cancelledThisMonth)} sub={`${cancelled} total cancelled`} warn={cancelledThisMonth > 0} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard label="Total signups" value={String(totalUsers)} sub="all time" />
          <StatCard label="Onboarded" value={String(onboarded)} sub="completed setup" />
          <StatCard label="Free plans" value={String(freePlans)} sub="generated" />
          <StatCard label="Conversion" value={`${conversionRate}%`} sub="onboarded → paid" />
        </div>

        {/* Cancellation reasons + Recent signups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Cancel reasons */}
          <div className="bg-white rounded-2xl border border-stone-100 p-5">
            <h2 className="text-sm font-semibold text-stone-700 mb-4">
              Why people cancel
              <span className="ml-2 text-xs font-normal text-stone-400">{totalCancelReasons} responses</span>
            </h2>
            {sortedReasons.length === 0 ? (
              <p className="text-sm text-stone-400">No cancellations yet.</p>
            ) : (
              <div className="space-y-3">
                {sortedReasons.map(([reason, count]) => {
                  const pct = totalCancelReasons > 0 ? Math.round((count / totalCancelReasons) * 100) : 0;
                  return (
                    <div key={reason}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-stone-600">{REASON_LABELS[reason] ?? reason}</span>
                        <span className="text-stone-400">{count} · {pct}%</span>
                      </div>
                      <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-orange-400 rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Recent signups */}
          <div className="bg-white rounded-2xl border border-stone-100 p-5">
            <h2 className="text-sm font-semibold text-stone-700 mb-4">Recent signups</h2>
            <div className="space-y-2">
              {recentSignups.map((u) => {
                const isActive = u.subscription_status === "active";
                const date = new Date(u.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" });
                return (
                  <div key={u.email} className="flex items-center justify-between py-1.5 border-b border-stone-50 last:border-0">
                    <div>
                      <p className="text-xs font-medium text-stone-700 truncate max-w-[180px]">{u.email}</p>
                      <p className="text-[10px] text-stone-400">{date}</p>
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-green-50 text-green-700"
                        : u.subscription_status === "cancelled"
                        ? "bg-red-50 text-red-600"
                        : "bg-stone-100 text-stone-500"
                    }`}>
                      {isActive ? (u.plan_interval ?? "paid") : u.subscription_status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* This week's plan pipeline */}
        <div className="bg-white rounded-2xl border border-stone-100 p-5">
          <h2 className="text-sm font-semibold text-stone-700 mb-4">
            Plan pipeline
            <span className="ml-2 text-xs font-normal text-stone-400">week of {weekOf}</span>
          </h2>
          <div className="grid grid-cols-4 gap-3">
            <PipelineCard label="Sent" value={planSent} color="green" />
            <PipelineCard label="Ready" value={planReady} color="blue" />
            <PipelineCard label="Generating" value={planGenerating} color="orange" />
            <PipelineCard label="Failed" value={planFailed} color="red" />
          </div>
        </div>

      </div>
    </div>
  );
}

function StatCard({ label, value, sub, accent, warn }: {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
  warn?: boolean;
}) {
  return (
    <div className={`rounded-2xl border p-4 ${
      accent
        ? "bg-orange-500 border-orange-500 text-white"
        : "bg-white border-stone-100"
    }`}>
      <p className={`text-xs font-medium mb-1 ${accent ? "text-orange-100" : "text-stone-500"}`}>{label}</p>
      <p className={`text-2xl font-bold tracking-tight ${
        accent ? "text-white" : warn ? "text-red-600" : "text-stone-900"
      }`}>{value}</p>
      {sub && <p className={`text-[10px] mt-0.5 ${accent ? "text-orange-100" : "text-stone-400"}`}>{sub}</p>}
    </div>
  );
}

function PipelineCard({ label, value, color }: { label: string; value: number; color: string }) {
  const colors: Record<string, string> = {
    green: "bg-green-50 text-green-700",
    blue: "bg-blue-50 text-blue-700",
    orange: "bg-orange-50 text-orange-700",
    red: "bg-red-50 text-red-600",
  };
  return (
    <div className={`rounded-xl p-3 text-center ${colors[color]}`}>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-[10px] font-medium mt-0.5 opacity-70">{label}</p>
    </div>
  );
}
