import Link from "next/link";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdmin } from "@/lib/admin-auth";
import { getWeekOf } from "@/lib/utils";

export const dynamic = "force-dynamic";

const MONTHLY_PRICE = 7.99;
const YEARLY_PRICE = 59.99;
const PAGE_SIZE = 20;

const REASON_LABELS: Record<string, string> = {
  price: "Too expensive",
  not_using: "Not using it enough",
  missing_feature: "Missing a feature",
  found_alternative: "Found something else",
  temporary: "Just taking a break",
  other: "Other",
};

const STATUS_FILTERS = ["all", "active", "inactive", "past_due", "cancelled"] as const;

const STATUS_STYLE: Record<string, string> = {
  active: "bg-green-50 text-green-700",
  inactive: "bg-stone-100 text-stone-500",
  past_due: "bg-amber-50 text-amber-700",
  cancelled: "bg-red-50 text-red-600",
};

interface PageProps {
  searchParams: Promise<{ q?: string; status?: string; page?: string }>;
}

export default async function AdminPage({ searchParams }: PageProps) {
  const adminId = await requireAdmin();
  if (!adminId) redirect("/dashboard");

  const { q = "", status = "all", page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);

  const admin = createAdminClient();
  const weekOf = getWeekOf();
  const monthStart = new Date();
  monthStart.setDate(1);
  monthStart.setHours(0, 0, 0, 0);

  // Build the filtered/searched user query
  let userQuery = admin
    .from("users")
    .select("id, email, subscription_status, subscription_source, plan_interval, created_at", { count: "exact" });
  if (q.trim()) userQuery = userQuery.ilike("email", `%${q.trim()}%`);
  if (status !== "all") userQuery = userQuery.eq("subscription_status", status);
  const offset = (page - 1) * PAGE_SIZE;
  userQuery = userQuery.order("created_at", { ascending: false }).range(offset, offset + PAGE_SIZE - 1);

  const [
    activeResult,
    monthlyResult,
    yearlyResult,
    cancelledResult,
    totalUsersResult,
    onboardedResult,
    cancelReasonsResult,
    plansWeekResult,
    newThisMonthResult,
    cancelledThisMonthResult,
    userListResult,
    leadsResult,
  ] = await Promise.all([
    admin.from("users").select("*", { count: "exact", head: true }).eq("subscription_status", "active"),
    admin.from("users").select("*", { count: "exact", head: true }).eq("subscription_status", "active").eq("plan_interval", "monthly"),
    admin.from("users").select("*", { count: "exact", head: true }).eq("subscription_status", "active").eq("plan_interval", "yearly"),
    admin.from("users").select("*", { count: "exact", head: true }).eq("subscription_status", "cancelled"),
    admin.from("users").select("*", { count: "exact", head: true }),
    admin.from("profiles").select("*", { count: "exact", head: true }).eq("onboarding_completed", true),
    admin.from("users").select("cancel_reason").not("cancel_reason", "is", null),
    admin.from("meal_plans").select("status").eq("week_of", weekOf).not("user_id", "is", null),
    admin.from("users").select("*", { count: "exact", head: true }).gte("created_at", monthStart.toISOString()),
    admin.from("users").select("*", { count: "exact", head: true }).eq("subscription_status", "cancelled").gte("updated_at", monthStart.toISOString()),
    userQuery,
    // Onboarded-but-never-paid leads: anonymous meal_plans rows captured at
    // the end of onboarding (see /api/leads) that never converted to an account
    admin.from("meal_plans")
      .select("created_at, plan_data")
      .is("user_id", null)
      .eq("plan_data->>source", "preview_lead")
      .order("created_at", { ascending: false })
      .limit(20),
  ]);

  const active = activeResult.count ?? 0;
  const monthly = monthlyResult.count ?? 0;
  const yearly = yearlyResult.count ?? 0;
  const cancelled = cancelledResult.count ?? 0;
  const totalUsers = totalUsersResult.count ?? 0;
  const onboarded = onboardedResult.count ?? 0;
  const newThisMonth = newThisMonthResult.count ?? 0;
  const cancelledThisMonth = cancelledThisMonthResult.count ?? 0;

  const users = userListResult.data ?? [];
  const totalMatching = userListResult.count ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalMatching / PAGE_SIZE));

  const leads = (leadsResult.data ?? []).map((r) => ({
    email: (r.plan_data as Record<string, unknown>)?.nurture_email as string | undefined,
    created_at: r.created_at as string,
  })).filter((l) => l.email);

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

  function pageHref(targetPage: number) {
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (status !== "all") params.set("status", status);
    if (targetPage > 1) params.set("page", String(targetPage));
    const qs = params.toString();
    return qs ? `/admin?${qs}` : "/admin";
  }

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">

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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <StatCard label="Total signups" value={String(totalUsers)} sub="all time" />
          <StatCard label="Onboarded" value={String(onboarded)} sub="completed setup" />
          <StatCard label="Conversion" value={`${conversionRate}%`} sub="onboarded → paid" />
        </div>

        {/* Cancellation reasons + Plan pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

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

        {/* Full user directory — search + filter + pagination */}
        <div className="bg-white rounded-2xl border border-stone-100 p-5">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <h2 className="text-sm font-semibold text-stone-700">
              All users
              <span className="ml-2 text-xs font-normal text-stone-400">{totalMatching} matching</span>
            </h2>
          </div>

          <form method="get" className="flex flex-wrap items-center gap-2 mb-4">
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Search by email…"
              className="flex-1 min-w-[180px] text-sm px-3 py-2 rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <select
              name="status"
              defaultValue={status}
              className="text-sm px-3 py-2 rounded-full border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              {STATUS_FILTERS.map((s) => (
                <option key={s} value={s}>{s === "all" ? "All statuses" : s.replace("_", " ")}</option>
              ))}
            </select>
            <button
              type="submit"
              className="text-sm font-semibold px-4 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
            >
              Search
            </button>
            {(q || status !== "all") && (
              <Link href="/admin" className="text-xs text-stone-400 hover:text-stone-600 px-2">
                Clear
              </Link>
            )}
          </form>

          {users.length === 0 ? (
            <p className="text-sm text-stone-400">No users match this search.</p>
          ) : (
            <div className="space-y-1">
              {users.map((u) => {
                const dateStr = new Date(u.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
                return (
                  <Link
                    key={u.id}
                    href={`/admin/users/${u.id}`}
                    className="flex items-center justify-between py-2.5 px-2 -mx-2 rounded-lg border-b border-stone-50 last:border-0 hover:bg-stone-50 transition-colors"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-stone-700 truncate">{u.email}</p>
                      <p className="text-[10px] text-stone-400">{dateStr} · {u.subscription_source ?? "none"}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {u.plan_interval && (
                        <span className="text-[10px] text-stone-400">{u.plan_interval}</span>
                      )}
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${STATUS_STYLE[u.subscription_status] ?? STATUS_STYLE.inactive}`}>
                        {u.subscription_status}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-stone-50">
              <Link
                href={page > 1 ? pageHref(page - 1) : "#"}
                aria-disabled={page <= 1}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border border-stone-200 ${page <= 1 ? "pointer-events-none opacity-40" : "hover:bg-stone-50"}`}
              >
                ← Prev
              </Link>
              <span className="text-xs text-stone-400">Page {page} of {totalPages}</span>
              <Link
                href={page < totalPages ? pageHref(page + 1) : "#"}
                aria-disabled={page >= totalPages}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border border-stone-200 ${page >= totalPages ? "pointer-events-none opacity-40" : "hover:bg-stone-50"}`}
              >
                Next →
              </Link>
            </div>
          )}
        </div>

        {/* Onboarded but never paid — leads captured from /api/leads */}
        <div className="bg-white rounded-2xl border border-stone-100 p-5">
          <h2 className="text-sm font-semibold text-stone-700 mb-4">
            Onboarded, didn&apos;t pay
            <span className="ml-2 text-xs font-normal text-stone-400">{leads.length} leads · covered by nurture emails</span>
          </h2>
          {leads.length === 0 ? (
            <p className="text-sm text-stone-400">No leads yet.</p>
          ) : (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {leads.map((l) => {
                const date = new Date(l.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" });
                return (
                  <div key={l.email} className="flex items-center justify-between py-1.5 border-b border-stone-50 last:border-0">
                    <p className="text-xs font-medium text-stone-700 truncate max-w-[220px]">{l.email}</p>
                    <p className="text-[10px] text-stone-400">{date}</p>
                  </div>
                );
              })}
            </div>
          )}
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
