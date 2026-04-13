import Link from "next/link";

interface RelatedRecipe {
  slug: string;
  name: string;
  emoji: string;
  cuisine: string;
  prepTime: number;
  mealType: string;
}

export function RelatedRecipes({ recipes, locale }: { recipes: RelatedRecipe[]; locale?: string }) {
  if (recipes.length === 0) return null;

  const prefix = locale && locale !== "en" ? `/${locale}` : "";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <Link
          key={recipe.slug}
          href={`${prefix}/recipes/${recipe.slug}`}
          className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 transition-all duration-200 hover:border-orange-200 hover:shadow-lg hover:-translate-y-0.5"
        >
          <span className="text-[32px] leading-none shrink-0">{recipe.emoji}</span>
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-stone-900 mb-1.5 leading-snug">{recipe.name}</h3>
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <span className="inline-block rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-medium text-stone-500">
                {recipe.cuisine}
              </span>
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="shrink-0">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M7 4v3.5l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {recipe.prepTime} min
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
