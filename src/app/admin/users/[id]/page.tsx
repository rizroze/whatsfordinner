import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdmin } from "@/lib/admin-auth";
import { ResendPlanButton } from "@/components/admin/ResendPlanButton";

export const dynamic = "force-dynamic";

const STATUS_STYLE: Record<string, string> = {
  active: "bg-green-50 text-green-700",
  inactive: "bg-stone-100 text-stone-500",
  past_due: "bg-amber-50 text-amber-700",
  cancelled: "bg-red-50 text-red-600",
};

const PLAN_STATUS_STYLE: Record<string, string> = {
  sent: "bg-green-50 text-green-700",
  ready: "bg-blue-50 text-blue-700",
  generating: "bg-orange-50 text-orange-700",
  failed: "bg-red-50 text-red-600",
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminUserDetailPage({ params }: PageProps) {
  const adminId = await requireAdmin();
  if (!adminId) redirect("/dashboard");

  const { id } = await params;
  const admin = createAdminClient();

  const [userResult, profileResult, plansResult, redemptionsResult, pantryResult, feedbackResult] = await Promise.all([
    admin.from("users").select("*").eq("id", id).single(),
    admin.from("profiles").select("*").eq("user_id", id).maybeSingle(),
    admin.from("meal_plans").select("id, week_of, status, sent_at, regeneration_count, created_at").eq("user_id", id).order("week_of", { ascending: false }).limit(20),
    admin.from("promo_redemptions").select("id, subscription_start, subscription_end, promo_codes(code, type, duration_months)").eq("user_id", id),
    admin.from("pantry_items").select("name, category").eq("user_id", id),
    admin.from("meal_feedback").select("meal_name, rating").eq("user_id", id),
  ]);

  if (userResult.error || !userResult.data) notFound();

  const u = userResult.data;
  const profile = profileResult.data;
  const plans = plansResult.data ?? [];
  const redemptions = redemptionsResult.data ?? [];
  const pantryItems = pantryResult.data ?? [];
  const feedback = feedbackResult.data ?? [];

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">

        <Link href="/admin" className="text-xs text-stone-400 hover:text-stone-600">
          ← Back to admin
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2xl border border-stone-100 p-5">
          <div className="flex items-start justify-between flex-wrap gap-3">
            <div>
              <h1 className="text-lg font-bold text-stone-900">{u.email}</h1>
              <p className="text-xs text-stone-400 mt-1 font-mono">{u.id}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${STATUS_STYLE[u.subscription_status] ?? STATUS_STYLE.inactive}`}>
                {u.subscription_status}
              </span>
              {profile && <ResendPlanButton userId={u.id} />}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5 pt-5 border-t border-stone-50">
            <Field label="Source" value={u.subscription_source ?? "none"} />
            <Field label="Plan" value={u.plan_interval ?? "—"} />
            <Field label="Signed up" value={new Date(u.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} />
            <Field label="Expires" value={u.subscription_expires_at ? new Date(u.subscription_expires_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "—"} />
          </div>
          {u.cancel_reason && (
            <div className="mt-3 pt-3 border-t border-stone-50">
              <Field label="Cancel reason" value={u.cancel_reason} />
            </div>
          )}
          {(u.lemon_customer_id || u.lemon_subscription_id) && (
            <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t border-stone-50">
              <Field label="Lemon customer" value={u.lemon_customer_id ?? "—"} mono />
              <Field label="Lemon subscription" value={u.lemon_subscription_id ?? "—"} mono />
            </div>
          )}
        </div>

        {/* Profile / preferences */}
        <div className="bg-white rounded-2xl border border-stone-100 p-5">
          <h2 className="text-sm font-semibold text-stone-700 mb-4">Preferences</h2>
          {!profile ? (
            <p className="text-sm text-stone-400">No profile yet — hasn&apos;t completed onboarding.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Field label="Household" value={`${profile.household_size} people${profile.has_kids ? ` (kids: ${(profile.kids_ages ?? []).join(", ") || "yes"})` : ""}`} />
              <Field label="Budget" value={profile.weekly_budget} />
              <Field label="Skill" value={profile.cooking_skill} />
              <Field label="Meals/day" value={String(profile.meals_per_day)} />
              <Field label="Servings/meal" value={String(profile.servings_per_meal)} />
              <Field label="Max cook time" value={`${profile.max_cook_time} min`} />
              <Field label="Delivery day" value={profile.delivery_day} />
              <Field label="Timezone" value={profile.timezone} />
              <Field label="Onboarded" value={profile.onboarding_completed ? "Yes" : "No"} />
              {profile.delivery_email && <Field label="Delivery email" value={profile.delivery_email} />}
              {(profile.dietary_restrictions ?? []).length > 0 && (
                <Field label="Restrictions" value={(profile.dietary_restrictions as string[]).join(", ")} />
              )}
              {(profile.allergies ?? []).length > 0 && (
                <Field label="Allergies" value={(profile.allergies as string[]).join(", ")} />
              )}
              {(profile.cuisine_preferences ?? []).length > 0 && (
                <Field label="Cuisines" value={(profile.cuisine_preferences as string[]).join(", ")} />
              )}
            </div>
          )}
        </div>

        {/* Meal plan history */}
        <div className="bg-white rounded-2xl border border-stone-100 p-5">
          <h2 className="text-sm font-semibold text-stone-700 mb-4">
            Plan history
            <span className="ml-2 text-xs font-normal text-stone-400">{plans.length} weeks</span>
          </h2>
          {plans.length === 0 ? (
            <p className="text-sm text-stone-400">No plans generated yet.</p>
          ) : (
            <div className="space-y-2">
              {plans.map((p) => (
                <div key={p.id} className="flex items-center justify-between py-2 border-b border-stone-50 last:border-0">
                  <div>
                    <p className="text-xs font-medium text-stone-700">Week of {p.week_of}</p>
                    <p className="text-[10px] text-stone-400">
                      {p.sent_at ? `Sent ${new Date(p.sent_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}` : "Not sent"}
                      {p.regeneration_count > 0 ? ` · ${p.regeneration_count} regen${p.regeneration_count > 1 ? "s" : ""}` : ""}
                    </p>
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${PLAN_STATUS_STYLE[p.status] ?? "bg-stone-100 text-stone-500"}`}>
                    {p.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Promo redemptions */}
        {redemptions.length > 0 && (
          <div className="bg-white rounded-2xl border border-stone-100 p-5">
            <h2 className="text-sm font-semibold text-stone-700 mb-4">Promo / referral redemptions</h2>
            <div className="space-y-2">
              {redemptions.map((r) => {
                const code = r.promo_codes as unknown as { code: string; type: string; duration_months: number } | null;
                return (
                  <div key={r.id} className="flex items-center justify-between py-2 border-b border-stone-50 last:border-0">
                    <div>
                      <p className="text-xs font-medium text-stone-700 font-mono">{code?.code ?? "—"}</p>
                      <p className="text-[10px] text-stone-400">
                        {code?.type} · {code?.duration_months === 0 ? "lifetime" : `${code?.duration_months} mo`}
                      </p>
                    </div>
                    <p className="text-[10px] text-stone-400">
                      {r.subscription_end ? `Expires ${new Date(r.subscription_end).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}` : "No expiry"}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Pantry + feedback (secondary, low priority context) */}
        {(pantryItems.length > 0 || feedback.length > 0) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pantryItems.length > 0 && (
              <div className="bg-white rounded-2xl border border-stone-100 p-5">
                <h2 className="text-sm font-semibold text-stone-700 mb-3">Pantry staples</h2>
                <div className="flex flex-wrap gap-1.5">
                  {pantryItems.map((p) => (
                    <span key={p.name} className="text-[10px] bg-stone-100 text-stone-600 px-2 py-1 rounded-full">{p.name}</span>
                  ))}
                </div>
              </div>
            )}
            {feedback.length > 0 && (
              <div className="bg-white rounded-2xl border border-stone-100 p-5">
                <h2 className="text-sm font-semibold text-stone-700 mb-3">Meal feedback</h2>
                <div className="flex flex-wrap gap-1.5">
                  {feedback.map((f, i) => (
                    <span
                      key={`${f.meal_name}-${i}`}
                      className={`text-[10px] px-2 py-1 rounded-full ${f.rating === "liked" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"}`}
                    >
                      {f.rating === "liked" ? "👍" : "👎"} {f.meal_name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

function Field({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <p className="text-[10px] text-stone-400 mb-0.5">{label}</p>
      <p className={`text-xs font-medium text-stone-700 ${mono ? "font-mono" : ""}`}>{value}</p>
    </div>
  );
}
