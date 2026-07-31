import type { Meal } from "@/types/meal-plan";

/**
 * Emoji for a meal row.
 *
 * Recipe-library meals (the preview plan, the instant widget) carry a real
 * emoji chosen per recipe — that always wins. AI-generated plans invent dish
 * names with no emoji attached, so they fall back to keyword matching and
 * finally to a per-slot default. Without the fallback the preview would show
 * emoji and the paid dashboard wouldn't, which reads as the paid product
 * being the plainer one.
 *
 * Matching is order-sensitive: more specific terms come first, so "chicken
 * soup" resolves to soup rather than chicken.
 */
const KEYWORD_EMOJI: Array<[RegExp, string]> = [
  [/\b(soup|broth|chowder|bisque|stew)\b/i, "🍲"],
  [/\b(salad|greens|slaw)\b/i, "🥗"],
  [/\b(taco|burrito|quesadilla|fajita|enchilada)\b/i, "🌮"],
  [/\b(pizza|flatbread)\b/i, "🍕"],
  [/\b(burger|cheeseburger|patty)\b/i, "🍔"],
  [/\b(pasta|spaghetti|penne|linguine|lasagna|alfredo|carbonara|noodle)\b/i, "🍝"],
  [/\b(ramen|pho|udon)\b/i, "🍜"],
  [/\b(sushi|sashimi|poke)\b/i, "🍣"],
  [/\b(curry|masala|tikka|korma|dal)\b/i, "🍛"],
  [/\b(stir[- ]?fry|teriyaki|wok)\b/i, "🥢"],
  [/\b(sandwich|wrap|panini|sub|toast)\b/i, "🥪"],
  [/\b(salmon|tuna|cod|fish|shrimp|prawn|seafood|halibut)\b/i, "🐟"],
  [/\b(chicken|turkey|poultry|wings)\b/i, "🍗"],
  [/\b(steak|beef|sirloin|brisket|pork|lamb|bacon)\b/i, "🥩"],
  [/\b(egg|omelet|omelette|frittata|scramble|shakshuka)\b/i, "🍳"],
  [/\b(pancake|waffle|french toast)\b/i, "🥞"],
  [/\b(oat|oatmeal|porridge|granola|cereal|muesli)\b/i, "🥣"],
  [/\b(yogurt|parfait|smoothie)\b/i, "🥤"],
  [/\b(rice|risotto|paella|congee|pilaf)\b/i, "🍚"],
  [/\b(bowl|grain bowl|buddha)\b/i, "🥙"],
  [/\b(tofu|tempeh|vegan|veggie|vegetable)\b/i, "🥦"],
  [/\b(bean|lentil|chickpea|hummus|falafel)\b/i, "🫘"],
  [/\b(potato|fries|mash)\b/i, "🥔"],
  [/\b(cheese|mac and cheese|grilled cheese)\b/i, "🧀"],
  [/\b(fruit|berry|berries|apple|banana)\b/i, "🍓",],
  [/\b(nut|almond|peanut|trail mix)\b/i, "🥜"],
];

const SLOT_FALLBACK: Record<Meal["type"], string> = {
  breakfast: "🍳",
  lunch: "🥪",
  dinner: "🍽️",
  snack: "🍎",
};

export function mealEmoji(
  name: string,
  type: Meal["type"],
  explicit?: string,
): string {
  if (explicit) return explicit;
  for (const [pattern, emoji] of KEYWORD_EMOJI) {
    if (pattern.test(name)) return emoji;
  }
  return SLOT_FALLBACK[type] ?? SLOT_FALLBACK.dinner;
}
