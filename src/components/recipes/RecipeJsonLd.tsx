import type { FullRecipe } from "@/data/recipes/types";

function minutesToISO(minutes: number): string {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hrs && mins) return `PT${hrs}H${mins}M`;
  if (hrs) return `PT${hrs}H`;
  return `PT${mins}M`;
}

export function RecipeJsonLd({ recipe }: { recipe: FullRecipe }) {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.name,
    description: recipe.description,
    author: {
      "@type": "Organization",
      name: "What's For Dinner",
      url: "https://whatsfordinner.fit",
    },
    datePublished: recipe.datePublished,
    dateModified: recipe.dateModified,
    prepTime: minutesToISO(recipe.prepTime),
    cookTime: minutesToISO(recipe.cookTime),
    totalTime: minutesToISO(recipe.totalTime),
    recipeYield: `${recipe.servings} servings`,
    recipeCategory: recipe.mealType.charAt(0).toUpperCase() + recipe.mealType.slice(1),
    recipeCuisine: recipe.cuisine,
    keywords: recipe.tags.join(", "),
    recipeIngredient: recipe.ingredients.map((i) =>
      [i.amount, i.unit, i.name].filter(Boolean).join(" ")
    ),
    recipeInstructions: recipe.steps.map((s) => ({
      "@type": "HowToStep",
      position: s.step,
      text: s.instruction,
    })),
    nutrition: {
      "@type": "NutritionInformation",
      calories: `${recipe.nutrition.calories} calories`,
      proteinContent: `${recipe.nutrition.protein}g`,
      carbohydrateContent: `${recipe.nutrition.carbs}g`,
      fatContent: `${recipe.nutrition.fat}g`,
      fiberContent: `${recipe.nutrition.fiber}g`,
    },
  };

  if (recipe.youtubeVideoId) {
    jsonLd.video = {
      "@type": "VideoObject",
      name: recipe.name,
      description: recipe.description,
      embedUrl: `https://www.youtube.com/embed/${recipe.youtubeVideoId}`,
      contentUrl: `https://www.youtube.com/watch?v=${recipe.youtubeVideoId}`,
      thumbnailUrl: `https://img.youtube.com/vi/${recipe.youtubeVideoId}/maxresdefault.jpg`,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
