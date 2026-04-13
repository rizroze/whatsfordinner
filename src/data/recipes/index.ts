import { breakfastRecipes } from "./breakfast";
import { lunchRecipes } from "./lunch";
import { dinnerRecipes } from "./dinner";
import { snackRecipes } from "./snack";
import type { FullRecipe } from "./types";

const ALL_RECIPES: FullRecipe[] = [
  ...breakfastRecipes,
  ...lunchRecipes,
  ...dinnerRecipes,
  ...snackRecipes,
];

// Validate no duplicate slugs at import time
const slugs = ALL_RECIPES.map((r) => r.slug);
const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
if (dupes.length > 0) {
  throw new Error(`Duplicate recipe slugs: ${dupes.join(", ")}`);
}

export function getAllRecipes(): FullRecipe[] {
  return ALL_RECIPES;
}

export function getRecipeBySlug(slug: string): FullRecipe | undefined {
  return ALL_RECIPES.find((r) => r.slug === slug);
}

export type { FullRecipe, RecipeIngredient, RecipeStep, NutritionInfo } from "./types";
