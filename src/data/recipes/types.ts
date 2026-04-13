export interface RecipeIngredient {
  name: string;
  amount: string;
  unit: string;
  group?: string;
}

export interface RecipeStep {
  step: number;
  instruction: string;
  tip?: string;
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export interface FullRecipe {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  cuisine: string;
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
  difficulty: "Easy" | "Medium" | "Advanced";
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: number;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  nutrition: NutritionInfo;
  tags: string[];
  youtubeVideoId: string | null;
  relatedSlugs: string[];
  datePublished: string;
  dateModified: string;
}
