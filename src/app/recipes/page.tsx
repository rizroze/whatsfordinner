import type { Metadata } from "next";
import { getAllRecipes } from "@/data/recipes";
import { getAllMealPlanPages } from "@/data/meal-plans";
import { RecipeLibrary } from "@/components/recipes/RecipeLibrary";

export const metadata: Metadata = {
  title: "Free Recipe Library | What's For Dinner",
  description:
    "Browse 800+ recipe ideas for breakfast, lunch, dinner, and snacks. Filter by diet, cuisine, prep time, and more. Find your next favorite meal, then get a personalized plan built around it.",
  alternates: {
    canonical: "https://whatsfordinner.fit/recipes",
  },
  openGraph: {
    title: "Free Recipe Library | What's For Dinner",
    description:
      "Browse 800+ recipe ideas for breakfast, lunch, dinner, and snacks. Filter by diet, cuisine, prep time, and more.",
    url: "https://whatsfordinner.fit/recipes",
    siteName: "What's For Dinner",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Recipe Library | What's For Dinner",
    description:
      "Browse 800+ recipe ideas for breakfast, lunch, dinner, and snacks. Filter by diet, cuisine, prep time, and more.",
  },
};

interface FullRecipeCard {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  mealType: string;
  prepTime: number;
  cuisine: string;
  difficulty: string;
  tags: string[];
}

interface PreviewRecipeCard {
  name: string;
  mealType: string;
  description: string;
  prepTime: string;
  tags: string[];
  parentSlug: string;
  parentTitle: string;
}

function buildPreviewRecipes(fullRecipeNames: Set<string>): PreviewRecipeCard[] {
  const pages = getAllMealPlanPages();
  const seen = new Map<string, PreviewRecipeCard>();

  for (const page of pages) {
    for (const meal of page.sampleMeals) {
      const key = meal.name.toLowerCase();
      // Skip if this recipe already exists as a full recipe
      if (fullRecipeNames.has(key)) continue;
      if (!seen.has(key)) {
        seen.set(key, {
          name: meal.name,
          mealType: meal.mealType,
          description: meal.description,
          prepTime: meal.prepTime,
          tags: meal.tags,
          parentSlug: page.slug,
          parentTitle: page.h1,
        });
      }
    }
  }

  return [...seen.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function ItemListJsonLd({
  fullRecipes,
  previewCount,
}: {
  fullRecipes: FullRecipeCard[];
  previewCount: number;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free Recipe Library",
    description:
      "A collection of recipe ideas across every diet, cuisine, and goal from What's For Dinner.",
    url: "https://whatsfordinner.fit/recipes",
    numberOfItems: fullRecipes.length + previewCount,
    itemListElement: fullRecipes.slice(0, 100).map((recipe, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: recipe.name,
      url: `https://whatsfordinner.fit/recipes/${recipe.slug}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RecipesPage() {
  const allFull = getAllRecipes();

  const fullRecipes: FullRecipeCard[] = allFull.map((r) => ({
    slug: r.slug,
    name: r.name,
    emoji: r.emoji,
    description: r.description,
    mealType: r.mealType,
    prepTime: r.prepTime,
    cuisine: r.cuisine,
    difficulty: r.difficulty,
    tags: r.tags,
  }));

  const fullRecipeNames = new Set(allFull.map((r) => r.name.toLowerCase()));
  const previewRecipes = buildPreviewRecipes(fullRecipeNames);

  return (
    <>
      <ItemListJsonLd fullRecipes={fullRecipes} previewCount={previewRecipes.length} />
      <RecipeLibrary fullRecipes={fullRecipes} previewRecipes={previewRecipes} />
    </>
  );
}
