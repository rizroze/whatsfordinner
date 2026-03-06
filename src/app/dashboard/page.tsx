import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getWeekOf } from "@/lib/utils";
import { CurrentPlan } from "@/components/dashboard/CurrentPlan";
import { PastPlans } from "@/components/dashboard/PastPlans";
import { SubscriptionStatus } from "@/components/dashboard/SubscriptionStatus";
import { FreePlanBanner } from "@/components/dashboard/FreePlanBanner";
import { LogoutButton } from "@/components/dashboard/LogoutButton";
import { PromoCodeInput } from "@/components/dashboard/PromoCodeInput";
import { ReferralCodes } from "@/components/dashboard/ReferralCodes";
import { DashboardHero } from "@/components/dashboard/DashboardHero";
import {
  DashboardHeader,
  DashboardHomeLink,
  UpgradeBanner,
  PastPlansHeading,
  SetupCard,
  SettingsCard,
} from "@/components/dashboard/DashboardContent";
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
          <DashboardHeader email={user.email ?? ""} />
          <div className="flex items-center gap-4">
            <DashboardHomeLink />
            <LogoutButton />
          </div>
        </div>
      </header>

      {/* Hero stat — iconic heading */}
      {currentPlan?.plan_data && (
        <DashboardHero planData={currentPlan.plan_data} isSubscribed={isSubscribed} planCount={plans.filter((p) => p.status === "sent" || p.status === "ready").length} />
      )}

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Free plan from localStorage — client component */}
        <FreePlanBanner hasDbPlan={!!currentPlan} hasProfile={hasProfile} />

        {/* Upgrade banner for free users without the hero */}
        {!isSubscribed && freeUsed && !currentPlan?.plan_data && (
          <UpgradeBanner />
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
                    <PastPlansHeading />
                    <PastPlans plans={pastPlans} />
                  </section>
                )}
              </>
            )}

            {!hasProfile && <SetupCard />}
          </div>

          {/* Sidebar — 1/3 */}
          <aside className="space-y-6">
            <SubscriptionStatus
              status={userRecord?.subscription_status ?? "inactive"}
              freeUsed={freeUsed}
              hasBilling={!!userRecord?.lemon_customer_id}
              planInterval={userRecord?.plan_interval ?? null}
            />

            <SettingsCard hasProfile={hasProfile} isSubscribed={isSubscribed} freeUsed={freeUsed} />

            {/* Referral codes for yearly subscribers */}
            {isSubscribed && userRecord?.plan_interval === "yearly" && (
              <ReferralCodes />
            )}

            {/* Promo code input for non-subscribers */}
            {!isSubscribed && <PromoCodeInput />}
          </aside>
        </div>
      </main>
    </div>
  );
}
