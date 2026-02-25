export interface Ingredient {
  name: string;
  amount: string;
  unit: string;
}

export interface Meal {
  name: string;
  type: "breakfast" | "lunch" | "dinner" | "snack";
  prepTime: number; // minutes
  cookTime: number; // minutes
  calories: number;
  servings: number;
  ingredients: Ingredient[];
  instructions: string[];
  tags: string[]; // e.g. ["vegetarian", "quick", "kid-friendly"]
}

export interface DayPlan {
  day: string; // "Monday", "Tuesday", etc.
  meals: Meal[];
  totalCalories: number;
}

export interface GroceryItem {
  name: string;
  amount: string;
  unit: string;
  checked?: boolean;
}

export interface GroceryCategory {
  category: string; // "Produce", "Dairy", "Protein", etc.
  items: GroceryItem[];
}

export interface MealPlanData {
  weekOf: string;
  days: DayPlan[];
  groceryList: GroceryCategory[];
  estimatedWeeklyCost: string;
  notes: string;
}

export interface MealPlanRecord {
  id: string;
  user_id: string;
  week_of: string;
  plan_data: MealPlanData | null;
  regeneration_count: number;
  status: "generating" | "ready" | "sent" | "failed";
  sent_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserProfile {
  id: string;
  user_id: string;
  household_size: number;
  has_kids: boolean;
  kids_ages: string[];
  weekly_budget: "budget" | "moderate" | "premium";
  age_range: "18-25" | "26-35" | "36-45" | "46-55" | "56+" | "";
  nutrition_goal: "lose" | "maintain" | "bulk" | "";
  dietary_restrictions: string[];
  allergies: string[];
  personal_note: string;
  cuisine_preferences: string[];
  cooking_skill: "beginner" | "intermediate" | "advanced";
  max_cook_time: number;
  meals_per_day: number;
  include_snacks: boolean;
  servings_per_meal: number;
  delivery_email: string | null;
  delivery_day: string;
  timezone: string;
  onboarding_completed: boolean;
}
