import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { formatWeekOf } from "@/lib/utils";
import type { MealPlanData, MealPlanRecord } from "@/types/meal-plan";
import { PlanView } from "./PlanView";

interface PlanPageProps {
  params: Promise<{ weekId: string }>;
}

export default async function PlanPage({ params }: PlanPageProps) {
  const { weekId } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: planRow } = await supabase
    .from("meal_plans")
    .select("*")
    .eq("user_id", user.id)
    .eq("week_of", weekId)
    .single();

  const plan = planRow as unknown as MealPlanRecord | null;

  // Not found
  if (!plan) {
    return (
      <div className="min-h-screen bg-[#FFFBF5]">
        <header className="border-b border-stone-100 bg-white/60 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <a
              href="/dashboard"
              className="text-sm text-stone-400 hover:text-orange-500 transition-colors duration-200"
            >
              &larr; Back to Dashboard
            </a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-xl font-semibold text-stone-700 mb-2">
            Plan not found
          </h2>
          <p className="text-sm text-stone-500">
            We couldn&apos;t find a meal plan for this week.
          </p>
        </main>
      </div>
    );
  }

  // Plan not ready
  if (plan.status !== "ready" && plan.status !== "sent") {
    return (
      <div className="min-h-screen bg-[#FFFBF5]">
        <header className="border-b border-stone-100 bg-white/60 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <a
              href="/dashboard"
              className="text-sm text-stone-400 hover:text-orange-500 transition-colors duration-200"
            >
              &larr; Back to Dashboard
            </a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-xl font-semibold text-stone-700 mb-2">
            {plan.status === "generating"
              ? "Plan is still generating..."
              : "Plan generation failed"}
          </h2>
          <p className="text-sm text-stone-500">
            {plan.status === "generating"
              ? "Check back in a moment. Your plan is being created."
              : "Please return to your dashboard and try regenerating."}
          </p>
        </main>
      </div>
    );
  }

  const planData = plan.plan_data as MealPlanData;
  const formattedWeek = formatWeekOf(weekId);

  return <PlanView planData={planData} weekOf={weekId} formattedWeek={formattedWeek} />;
}
