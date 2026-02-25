import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getWeekOf } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { CurrentPlan } from "@/components/dashboard/CurrentPlan";
import { PastPlans } from "@/components/dashboard/PastPlans";
import { SubscriptionStatus } from "@/components/dashboard/SubscriptionStatus";
import { FreePlanBanner } from "@/components/dashboard/FreePlanBanner";
import { LogoutButton } from "@/components/dashboard/LogoutButton";
import type { MealPlanRecord, MealPlanData } from "@/types/meal-plan";

function DashboardHero({ planData, isSubscribed }: { planData: MealPlanData; isSubscribed: boolean }) {
  const totalMeals = planData.days.reduce((sum, d) => sum + d.meals.length, 0);
  const totalGroceryItems = planData.groceryList.reduce((sum, c) => sum + c.items.length, 0);
  const totalCalories = planData.days.reduce((sum, d) => sum + d.totalCalories, 0);
  const totalCookTime = planData.days.reduce(
    (sum, d) => sum + d.meals.reduce((ms, m) => ms + m.prepTime + m.cookTime, 0),
    0,
  );
  const hoursSavedYearly = Math.round((25 * 365) / 60 / 10) * 10;

  return (
    <div className="border-b border-orange-100 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-8 sm:pb-12">
        <p className="text-xs sm:text-sm text-stone-500 mb-1">
          {totalMeals} meals &middot; {totalGroceryItems} grocery items &middot; {totalCalories.toLocaleString()} cal &middot; Est. {planData.estimatedWeeklyCost}
        </p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.1]">
          just saved <span className="text-orange-500">{hoursSavedYearly}+ hours/yr</span>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>not thinking about what to eat
        </h2>
        {!isSubscribed && (
          <div className="mt-4 flex items-center gap-3">
            <a
              href="/signup?plan=monthly"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm transition-all duration-200"
            >
              Get this every week — $4.99/mo
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

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
  const hasProfile = !!profile?.onboarding_completed;

  const currentWeek = getWeekOf();
  const currentPlan = plans.find((p) => p.week_of === currentWeek) ?? null;
  const pastPlans = plans.filter((p) => p.week_of !== currentWeek);
  const isSubscribed = userRecord?.subscription_status === "active";
  const freeUsed = userRecord?.free_plan_used ?? false;

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <header className="border-b border-stone-100 bg-white/60 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-xl flex items-center justify-center transition-colors shrink-0"
            >
              <span className="text-2xl leading-none" style={{ filter: "brightness(0) invert(1)" }}>🍴</span>
            </Link>
            <div>
              <h1 className="text-lg sm:text-2xl font-semibold text-stone-800 tracking-tight">
                Dashboard
              </h1>
              <p className="text-xs sm:text-sm text-stone-500">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-stone-400 hover:text-orange-500 transition-colors duration-200"
            >
              Home
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>

      {/* Hero stat — iconic heading */}
      {currentPlan?.plan_data && (
        <DashboardHero planData={currentPlan.plan_data} isSubscribed={isSubscribed} />
      )}

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Free plan from localStorage — client component */}
        <FreePlanBanner hasDbPlan={!!currentPlan} hasProfile={hasProfile} />

        {/* Upgrade banner for free users without the hero */}
        {!isSubscribed && freeUsed && !currentPlan?.plan_data && (
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
            >
              Subscribe — $4.99/mo
            </a>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content — 2/3 */}
          <div className="lg:col-span-2 space-y-8">
            {hasProfile && (
              <>
                <section>
                  <CurrentPlan plan={currentPlan} isSubscribed={isSubscribed} />
                </section>

                {pastPlans.length > 0 && (
                  <section>
                    <h2 className="text-lg font-semibold text-stone-800 mb-4">
                      Past Plans
                    </h2>
                    <PastPlans plans={pastPlans} />
                  </section>
                )}
              </>
            )}

            {!hasProfile && (
              <Card className="border-dashed border-2 border-stone-200 bg-[#FFFBF5]">
                <CardContent className="py-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-50 flex items-center justify-center text-2xl">
                    🍽️
                  </div>
                  <h3 className="text-lg font-semibold text-stone-700 mb-2">
                    Set up your meal preferences
                  </h3>
                  <p className="text-sm text-stone-500 mb-6 max-w-sm mx-auto">
                    Tell us about your household, diet, and cooking style so we can create personalized meal plans for you.
                  </p>
                  <a
                    href="/onboarding"
                    className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm transition-all duration-200"
                  >
                    Get Your Free 1-Day Plan
                  </a>
                </CardContent>
              </Card>
            )}
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
                  {hasProfile ? "Quick Settings" : "Get Started"}
                </h3>
              </CardHeader>
              <CardContent>
                {hasProfile && !isSubscribed && freeUsed ? (
                  <>
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone-400 shrink-0">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                      <p className="text-sm font-medium text-stone-700">
                        Preferences locked
                      </p>
                    </div>
                    <p className="text-sm text-stone-500 mb-3">
                      You&apos;ve used your free 1-day plan. Subscribe to edit preferences and get fresh plans every week.
                    </p>
                    <a
                      href="/signup?plan=monthly"
                      className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors duration-200"
                    >
                      Subscribe — $4.99/mo →
                    </a>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-stone-500 mb-3">
                      {hasProfile
                        ? "Update your dietary preferences, household size, or delivery schedule."
                        : "Complete your preferences to get personalized weekly meal plans."}
                    </p>
                    <Link
                      href={hasProfile ? "/onboarding?edit=1" : "/onboarding"}
                      className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors duration-200"
                    >
                      {hasProfile ? "Edit preferences →" : "Set up preferences →"}
                    </Link>
                  </>
                )}
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}
