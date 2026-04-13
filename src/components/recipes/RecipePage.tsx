import Link from "next/link";
import type { FullRecipe } from "@/data/recipes/types";
import { BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";
import { RecipeJsonLd } from "./RecipeJsonLd";
import { IngredientList } from "./IngredientList";
import { StepByStep } from "./StepByStep";
import { NutritionCard } from "./NutritionCard";
import { YouTubeEmbed } from "./YouTubeEmbed";
import { RelatedRecipes } from "./RelatedRecipes";

interface RelatedRecipe {
  slug: string;
  name: string;
  emoji: string;
  cuisine: string;
  prepTime: number;
  mealType: string;
}

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-50 text-green-600",
  Medium: "bg-amber-50 text-amber-600",
  Advanced: "bg-red-50 text-red-600",
};

const mealTypeColors: Record<string, string> = {
  breakfast: "bg-orange-50 text-orange-600",
  lunch: "bg-blue-50 text-blue-600",
  dinner: "bg-purple-50 text-purple-600",
  snack: "bg-lime-50 text-lime-600",
};

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-stone-400">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 4.5v4l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-stone-400">
      <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1.5 14c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="11.5" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M11.5 9.5c1.5 0 3 1.2 3 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function GaugeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-stone-400">
      <path d="M2 10a6 6 0 1 1 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 10V5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}

function formatTime(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (mins === 0) return `${hrs} hr`;
  return `${hrs} hr ${mins} min`;
}

export function RecipePage({
  recipe,
  locale,
  relatedRecipes = [],
}: {
  recipe: FullRecipe;
  locale?: string;
  relatedRecipes?: RelatedRecipe[];
}) {
  const prefix = locale && locale !== "en" ? `/${locale}` : "";
  const url = `https://whatsfordinner.fit${prefix}/recipes/${recipe.slug}`;

  return (
    <>
      <RecipeJsonLd recipe={recipe} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `https://whatsfordinner.fit${prefix || ""}` },
          { name: "Recipes", url: `https://whatsfordinner.fit${prefix}/recipes` },
          { name: recipe.name, url },
        ]}
      />

      <main className="min-h-screen" style={{ backgroundColor: "#FFFBF5" }}>
        <div className="max-w-3xl mx-auto px-6 py-10 sm:py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-stone-400 mb-8">
            <Link href={prefix || "/"} className="hover:text-orange-500 transition-colors duration-200">Home</Link>
            <span>/</span>
            <Link href={`${prefix}/recipes`} className="hover:text-orange-500 transition-colors duration-200">Recipes</Link>
            <span>/</span>
            <span className="text-stone-600 truncate">{recipe.name}</span>
          </nav>

          {/* Hero */}
          <div className="mb-8">
            <span className="text-6xl sm:text-7xl block mb-4">{recipe.emoji}</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
              {recipe.name}
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              {recipe.description}
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${mealTypeColors[recipe.mealType] ?? "bg-stone-50 text-stone-500"}`}>
              {recipe.mealType.charAt(0).toUpperCase() + recipe.mealType.slice(1)}
            </span>
            <span className="inline-block rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-600">
              {recipe.cuisine}
            </span>
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${difficultyColors[recipe.difficulty] ?? "bg-stone-50 text-stone-500"}`}>
              {recipe.difficulty}
            </span>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 rounded-xl border border-stone-200 bg-white px-5 py-4 mb-12">
            <div className="flex items-center gap-2">
              <ClockIcon />
              <div>
                <p className="text-sm font-semibold text-stone-900">{formatTime(recipe.prepTime)}</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-wider">Prep</p>
              </div>
            </div>
            <div className="w-px h-8 bg-stone-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <ClockIcon />
              <div>
                <p className="text-sm font-semibold text-stone-900">{formatTime(recipe.cookTime)}</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-wider">Cook</p>
              </div>
            </div>
            <div className="w-px h-8 bg-stone-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <ClockIcon />
              <div>
                <p className="text-sm font-semibold text-stone-900">{formatTime(recipe.totalTime)}</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-wider">Total</p>
              </div>
            </div>
            <div className="w-px h-8 bg-stone-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <UsersIcon />
              <div>
                <p className="text-sm font-semibold text-stone-900">{recipe.servings}</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-wider">Servings</p>
              </div>
            </div>
            <div className="w-px h-8 bg-stone-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <GaugeIcon />
              <div>
                <p className="text-sm font-semibold text-stone-900">{recipe.difficulty}</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-wider">Difficulty</p>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-stone-800 mb-6">Ingredients</h2>
            <IngredientList ingredients={recipe.ingredients} />
          </section>

          {/* Instructions */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-stone-800 mb-6">Instructions</h2>
            <StepByStep steps={recipe.steps} />
          </section>

          {/* Nutrition */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-stone-800 mb-6">Nutrition per Serving</h2>
            <NutritionCard nutrition={recipe.nutrition} />
          </section>

          {/* Video */}
          {recipe.youtubeVideoId && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-stone-800 mb-6">Watch It Being Made</h2>
              <YouTubeEmbed videoId={recipe.youtubeVideoId} />
            </section>
          )}

          {/* Tags */}
          {recipe.tags.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-stone-800 mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`${prefix}/recipes?tag=${encodeURIComponent(tag)}`}
                    className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-500 hover:border-orange-200 hover:text-orange-500 transition-all duration-200 min-h-[32px] inline-flex items-center"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related Recipes */}
          {relatedRecipes.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-stone-800 mb-6">You Might Also Like</h2>
              <RelatedRecipes recipes={relatedRecipes} locale={locale} />
            </section>
          )}

          {/* CTA */}
          <section className="rounded-2xl bg-orange-500 p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Love this recipe?
            </h2>
            <p className="text-orange-100 text-sm sm:text-base mb-6 max-w-md mx-auto">
              Get a full weekly meal plan built around your favorites, with recipes and a grocery list.
            </p>
            <Link
              href={locale && locale !== "en" ? `/onboarding?lang=${locale}` : "/onboarding"}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-orange-600 bg-white hover:bg-orange-50 rounded-full shadow-md transition-colors duration-200 min-h-[44px]"
            >
              Get your free plan
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
