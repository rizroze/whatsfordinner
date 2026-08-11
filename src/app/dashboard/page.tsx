import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getWeekOf } from "@/lib/utils";
import { CurrentPlan } from "@/components/dashboard/CurrentPlan";
import { FreeToday } from "@/components/dashboard/FreeToday";
import {
  INSTANT_DIETS,
  INSTANT_CUISINES,
  type InstantDiet,
  type InstantCuisine,
} from "@/lib/instant-plan";
import { PastPlans } from "@/components/dashboard/PastPlans";
import { SubscriptionStatus } from "@/components/dashboard/SubscriptionStatus";
import { FreePlanBanner } from "@/components/dashboard/FreePlanBanner";
import { TrialBanner } from "@/components/dashboard/TrialBanner";
import { LogoutButton } from "@/components/dashboard/LogoutButton";
import { PromoCodeInput } from "@/components/dashboard/PromoCodeInput";
import { ReferralCodes } from "@/components/dashboard/ReferralCodes";
import { DashboardHero } from "@/components/dashboard/DashboardHero";
import {
  DashboardHeader,
  DashboardHomeLink,
  PastPlansHeading,
  SetupCard,
  SettingsCard,
} from "@/components/dashboard/DashboardContent";
import { FastingToggle } from "@/components/dashboard/FastingToggle";
import { PantrySettings } from "@/components/dashboard/PantrySettings";
import { LanguagePicker } from "@/components/ui/LanguagePicker";
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
  // First-ever plan = the onboarding moment. Only then should the dashboard
  // auto-generate + email. Returning subscribers just view their Sunday plan;
  // if this week's is missing they get a manual button, never a surprise send.
  const isFirstPlan = plans.length === 0;

  // Map the onboarding profile onto the zero-token instant generator for the
  // free dashboard's "Today" — real personalized meals without AI spend.
  const instantDiet = ((profile?.dietary_restrictions ?? []) as string[])
    .map((r) => r.toLowerCase())
    .find((r): r is InstantDiet => (INSTANT_DIETS as readonly string[]).includes(r)) ?? "anything";
  const instantCuisine =
    ((profile?.cuisine_preferences ?? []) as string[]).find(
      (c): c is InstantCuisine => (INSTANT_CUISINES as readonly string[]).includes(c),
    ) ?? "any";
  const instantCalories =
    profile?.nutrition_goal === "lose" ? 1500 : profile?.nutrition_goal === "bulk" ? 2400 : 1800;
  const instantMeals: 2 | 3 | 4 =
    profile?.meals_per_day === 2 ? 2 : profile?.include_snacks ? 4 : 3;

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <header className="border-b border-stone-100 bg-white/60 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <DashboardHeader email={user.email ?? ""} />
          <div className="flex items-center gap-4">
            <LanguagePicker />
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

        <TrialBanner
          trialEndsAt={userRecord?.trial_ends_at ?? null}
          planInterval={userRecord?.plan_interval ?? null}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content — 2/3 */}
          <div className="lg:col-span-2 space-y-8">
            {hasProfile && (
              <>
                <section>
                  {isSubscribed ? (
                    <CurrentPlan plan={currentPlan} isSubscribed={isSubscribed} isFirstPlan={isFirstPlan} />
                  ) : (
                    <FreeToday
                      diet={instantDiet}
                      cuisine={instantCuisine}
                      calories={instantCalories}
                      meals={instantMeals}
                    />
                  )}
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

            {/* Pantry settings — subscriber feature */}
            {hasProfile && isSubscribed && <PantrySettings />}

            {/* Ramadan fasting toggle — only for Halal users */}
            {profile?.dietary_restrictions?.includes("Halal") && (
              <FastingToggle initialFast={profile.active_fast ?? null} />
            )}

            {/* Referral codes — 3 for yearly, 1 for everyone else active */}
            {isSubscribed && <ReferralCodes />}

            {/* Promo code input for non-subscribers */}
            {!isSubscribed && <PromoCodeInput />}
          </aside>
        </div>
      </main>
    </div>
  );
}
