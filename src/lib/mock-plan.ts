import type { MealPlanData } from "@/types/meal-plan";

/**
 * Realistic 1-day mock plan for development.
 * Use this instead of burning API credits while building UI.
 */
export const MOCK_PLAN: MealPlanData = {
  weekOf: "2026-02-23",
  days: [
    {
      day: "Monday",
      meals: [
        {
          name: "Greek Yogurt Parfait with Granola",
          type: "breakfast",
          prepTime: 5,
          cookTime: 0,
          calories: 380,
          servings: 2,
          ingredients: [
            { name: "Greek yogurt", amount: "2", unit: "cups" },
            { name: "Granola", amount: "1/2", unit: "cup" },
            { name: "Mixed berries", amount: "1", unit: "cup" },
            { name: "Honey", amount: "1", unit: "tbsp" },
          ],
          instructions: [
            "Layer yogurt, granola, and berries in two bowls.",
            "Drizzle with honey and serve immediately.",
          ],
          tags: ["quick", "no-cook", "high-protein"],
        },
        {
          name: "Lemon Herb Chicken with Roasted Vegetables",
          type: "dinner",
          prepTime: 10,
          cookTime: 25,
          calories: 520,
          servings: 2,
          ingredients: [
            { name: "Chicken thighs", amount: "4", unit: "pieces" },
            { name: "Zucchini", amount: "2", unit: "medium" },
            { name: "Bell peppers", amount: "2", unit: "whole" },
            { name: "Cherry tomatoes", amount: "1", unit: "cup" },
            { name: "Lemon", amount: "1", unit: "whole" },
            { name: "Fresh rosemary", amount: "2", unit: "sprigs" },
          ],
          instructions: [
            "Preheat oven to 425°F. Season chicken with lemon juice, rosemary, salt and pepper.",
            "Toss chopped vegetables with olive oil on a sheet pan.",
            "Place chicken on top of vegetables and roast for 25 minutes until golden.",
          ],
          tags: ["one-pan", "high-protein", "meal-prep"],
        },
      ],
      totalCalories: 900,
    },
  ],
  groceryList: [
    {
      category: "Produce",
      items: [
        { name: "Mixed berries", amount: "1", unit: "cup" },
        { name: "Zucchini", amount: "2", unit: "medium" },
        { name: "Bell peppers", amount: "2", unit: "whole" },
        { name: "Cherry tomatoes", amount: "1", unit: "cup" },
        { name: "Lemon", amount: "1", unit: "whole" },
        { name: "Fresh rosemary", amount: "2", unit: "sprigs" },
      ],
    },
    {
      category: "Protein",
      items: [
        { name: "Chicken thighs", amount: "4", unit: "pieces" },
      ],
    },
    {
      category: "Dairy",
      items: [
        { name: "Greek yogurt", amount: "2", unit: "cups" },
      ],
    },
    {
      category: "Grains & Bakery",
      items: [
        { name: "Granola", amount: "1/2", unit: "cup" },
      ],
    },
    {
      category: "Pantry",
      items: [
        { name: "Honey", amount: "1", unit: "tbsp" },
      ],
    },
  ],
  estimatedWeeklyCost: "$15-20",
  notes: "",
};
