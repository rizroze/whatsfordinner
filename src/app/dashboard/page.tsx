import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getWeekOf } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { CurrentPlan } from "@/components/dashboard/CurrentPlan";
import { PastPlans } from "@/components/dashboard/PastPlans";
import { SubscriptionStatus } from "@/components/dashboard/SubscriptionStatus";
import type { MealPlanRecord } from "@/types/meal-plan";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch user record, profile, and meal plans in parallel
  const [userResult, profileResult, plansResult] = await Promise.all([
    supabase.from("users").select("*").eq("id", user.id).single(),
    supabase.from("profiles").select("*").eq("user_id", user.id).single(),
    supabase
      .from("meal_plans")
      .select("*")
      .eq("user_id", user.id)
      .order("week_of", { ascending: false })
      .limit(5),
  ]);

  const userRecord = userResult.data;
  const profile = profileResult.data;
  const plans = (plansResult.data ?? []) as unknown as MealPlanRecord[];

  // Redirect to onboarding if profile is missing or incomplete
  if (!profile || !profile.onboarding_completed) {
    redirect("/onboarding");
  }

  const currentWeek = getWeekOf();
  const currentPlan = plans.find((p) => p.week_of === currentWeek) ?? null;
  const pastPlans = plans.filter((p) => p.week_of !== currentWeek);
  const isSubscribed = userRecord?.subscription_status === "active";
  const freeUsed = userRecord?.free_plan_used ?? false;

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <header className="border-b border-stone-100 bg-white/60 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-stone-800 tracking-tight">
              Dashboard
            </h1>
            <p className="text-sm text-stone-500 mt-0.5">{user.email}</p>
          </div>
          <a
            href="/"
            className="text-sm text-stone-400 hover:text-orange-500 transition-colors duration-200"
          >
            Home
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Upgrade banner for free users who've used their free plan */}
        {!isSubscribed && freeUsed && (
          <div className="mb-8 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-stone-800">
                Loved your free plan?
              </h3>
              <p className="text-sm text-stone-600 mt-1">
                Subscribe to get a fresh meal plan every week, plus regenerations and email delivery.
              </p>
            </div>
            <a
              href="/signup?plan=monthly"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm transition-all duration-200 whitespace-nowrap"
              onClick={async (e) => {
                e.preventDefault();
                const res = await fetch("/api/lemonsqueezy/checkout", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ plan: "monthly" }),
                });
                const data = await res.json();
                if (data.url) window.location.href = data.url;
              }}
            >
              Subscribe — $4.99/mo
            </a>
          </div>
        )}

        {/* Free plan notice for users who haven't generated yet */}
        {!isSubscribed && !freeUsed && !currentPlan && (
          <div className="mb-8 bg-lime-50 border border-lime-200 rounded-2xl p-6 text-center">
            <p className="text-sm font-medium text-lime-800">
              Try a free 1-day plan — generate yours below!
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content — 2/3 */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-lg font-semibold text-stone-800 mb-4">
                This Week&apos;s Plan
              </h2>
              <CurrentPlan plan={currentPlan} isSubscribed={isSubscribed} />
            </section>

            <section>
              <h2 className="text-lg font-semibold text-stone-800 mb-4">
                Past Plans
              </h2>
              <PastPlans plans={pastPlans} />
            </section>
          </div>

          {/* Sidebar — 1/3 */}
          <aside className="space-y-6">
            <SubscriptionStatus
              status={userRecord?.subscription_status ?? "inactive"}
              freeUsed={freeUsed}
            />

            <Card>
              <CardHeader>
                <h3 className="text-sm font-semibold text-stone-700">
                  Quick Settings
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-stone-500 mb-3">
                  Update your dietary preferences, household size, or delivery
                  schedule.
                </p>
                <a
                  href="/onboarding"
                  className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors duration-200"
                >
                  Edit preferences &rarr;
                </a>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}
