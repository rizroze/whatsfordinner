import { DIET_PAGES } from "./diets";
import { CUISINE_PAGES } from "./cuisines";
import { COMBO_PAGES } from "./combos";
import { goalPages } from "./goals";
import { householdPages } from "./households";
import { caloriePages } from "./calories";
import { durationPages } from "./durations";
import { seasonalPages } from "./seasonal";
import { healthPages } from "./health";
import { lifestagePages } from "./lifestage";
import { practicalPages } from "./practical";
import { budgetExtendedPages } from "./budget-extended";
import { dietsExtendedPages } from "./diets-extended";
import { methodsExtendedPages } from "./methods-extended";
import { genzPages } from "./genz";
import { genzExtendedPages } from "./genz-extended";
import { occasionPages } from "./occasions";
import { cuisinesExtendedPages } from "./cuisines-extended";
import { genzSituationPages } from "./genz-situations";
import type { MealPlanPageData } from "./types";

const ALL_PAGES: MealPlanPageData[] = [
  ...DIET_PAGES,
  ...CUISINE_PAGES,
  ...COMBO_PAGES,
  ...goalPages,
  ...householdPages,
  ...caloriePages,
  ...durationPages,
  ...seasonalPages,
  ...healthPages,
  ...lifestagePages,
  ...practicalPages,
  ...budgetExtendedPages,
  ...dietsExtendedPages,
  ...methodsExtendedPages,
  ...genzPages,
  ...genzExtendedPages,
  ...occasionPages,
  ...cuisinesExtendedPages,
  ...genzSituationPages,
];

// Validate no duplicate slugs at import time
const slugs = ALL_PAGES.map((p) => p.slug);
const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
if (dupes.length > 0) {
  throw new Error(`Duplicate meal plan slugs: ${dupes.join(", ")}`);
}

export function getAllMealPlanPages(): MealPlanPageData[] {
  return ALL_PAGES;
}

export function getMealPlanBySlug(slug: string): MealPlanPageData | undefined {
  return ALL_PAGES.find((p) => p.slug === slug);
}

export type { MealPlanPageData } from "./types";
