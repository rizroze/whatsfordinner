import { DIET_PAGES } from "./diets";
import { CUISINE_PAGES } from "./cuisines";
import { COMBO_PAGES } from "./combos";
import type { MealPlanPageData } from "./types";

const ALL_PAGES: MealPlanPageData[] = [
  ...DIET_PAGES,
  ...CUISINE_PAGES,
  ...COMBO_PAGES,
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
