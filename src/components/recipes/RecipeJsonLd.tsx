import type { FullRecipe } from "@/data/recipes/types";

function minutesToISO(minutes: number): string {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hrs && mins) return `PT${hrs}H${mins}M`;
  if (hrs) return `PT${hrs}H`;
  return `PT${mins}M`;
}

export function RecipeJsonLd({ recipe }: { recipe: FullRecipe }) {
  const imageUrl = `https://whatsfordinner.fit/api/og/recipe/${recipe.slug}`;

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.name,
    description: recipe.description,
    image: [imageUrl],
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
    recipeCategory:
      recipe.mealType.charAt(0).toUpperCase() + recipe.mealType.slice(1),
    recipeCuisine: recipe.cuisine,
    keywords: recipe.tags.join(", "),
    suitableForDiet: recipe.tags
      .map((t) => {
        const map: Record<string, string> = {
          vegetarian: "https://schema.org/VegetarianDiet",
          vegan: "https://schema.org/VeganDiet",
          "gluten-free": "https://schema.org/GlutenFreeDiet",
          "dairy-free": "https://schema.org/LowLactoseDiet",
          "low-carb": "https://schema.org/LowCalorieDiet",
          keto: "https://schema.org/LowCalorieDiet",
        };
        return map[t];
      })
      .filter(Boolean),
    recipeIngredient: recipe.ingredients.map((i) =>
      [i.amount, i.unit, i.name].filter(Boolean).join(" "),
    ),
    recipeInstructions: recipe.steps.map((s) => ({
      "@type": "HowToStep",
      position: s.step,
      text: s.instruction,
    })),
    nutrition: {
      "@type": "NutritionInformation",
      calories: `${recipe.nutrition.calories} calories`,
      proteinContent: `${recipe.nutrition.protein} g`,
      carbohydrateContent: `${recipe.nutrition.carbs} g`,
      fatContent: `${recipe.nutrition.fat} g`,
      fiberContent: `${recipe.nutrition.fiber} g`,
      servingSize: "1 serving",
    },
  };

  if (
    (jsonLd.suitableForDiet as unknown[]).length === 0
  ) {
    delete jsonLd.suitableForDiet;
  }

  if (recipe.youtubeVideoId) {
    jsonLd.video = {
      "@type": "VideoObject",
      name: `How to make ${recipe.name}`,
      description: recipe.description,
      thumbnailUrl: [
        `https://img.youtube.com/vi/${recipe.youtubeVideoId}/maxresdefault.jpg`,
      ],
      uploadDate: recipe.datePublished,
      contentUrl: `https://www.youtube.com/watch?v=${recipe.youtubeVideoId}`,
      embedUrl: `https://www.youtube.com/embed/${recipe.youtubeVideoId}`,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
