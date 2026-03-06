import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { formatWeekOf } from "@/lib/utils";
import type { MealPlanData, MealPlanRecord } from "@/types/meal-plan";
import { PlanView } from "./PlanView";
import { PlanStatusPage } from "@/components/plan/PlanStatusPage";

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

  const [{ data: planRow }, { data: feedback }] = await Promise.all([
    supabase
      .from("meal_plans")
      .select("*")
      .eq("user_id", user.id)
      .eq("week_of", weekId)
      .single(),
    supabase
      .from("meal_feedback")
      .select("meal_name, rating")
      .eq("user_id", user.id),
  ]);

  const plan = planRow as unknown as MealPlanRecord | null;

  if (!plan) {
    return <PlanStatusPage status="not_found" />;
  }

  if (plan.status !== "ready" && plan.status !== "sent") {
    return <PlanStatusPage status={plan.status === "generating" ? "generating" : "failed"} />;
  }

  const planData = plan.plan_data as MealPlanData;
  const formattedWeek = formatWeekOf(weekId);

  return (
    <PlanView
      planData={planData}
      weekOf={weekId}
      formattedWeek={formattedWeek}
      initialFeedback={feedback as { meal_name: string; rating: "liked" | "disliked" }[] ?? []}
    />
  );
}
