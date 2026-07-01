import Link from "next/link";

const mealTypeStyles: Record<string, string> = {
  breakfast: "bg-orange-50 text-orange-600",
  lunch: "bg-blue-50 text-blue-600",
  dinner: "bg-purple-50 text-purple-600",
  snack: "bg-lime-50 text-lime-600",
};

type BlogMeal = {
  name: string;
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
  prepTime: string;
  description: string;
  tags?: string[];
};

export function MealCard({ meal }: { meal: BlogMeal }) {
  return (
    <div className="rounded-xl border border-stone-100 bg-white p-5">
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${mealTypeStyles[meal.mealType] ?? "bg-stone-50 text-stone-500"}`}
        >
          {meal.mealType}
        </span>
        <span className="text-[10px] text-stone-400">{meal.prepTime}</span>
      </div>
      <h3 className="text-sm font-semibold text-stone-800 mb-1">{meal.name}</h3>
      <p className="text-xs text-stone-500 mb-2">{meal.description}</p>
      {meal.tags && meal.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {meal.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-stone-400 bg-stone-50 rounded-full px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/** CTA card that looks like a meal card but drives conversion */
function MealCardCTA() {
  return (
    <Link
      href="/onboarding"
      className="rounded-xl border-2 border-dashed border-orange-200 bg-orange-50/50 p-5 flex flex-col items-center justify-center text-center gap-3 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200 group"
    >
      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </div>
      <div>
        <p className="text-sm font-semibold text-stone-800">Get meals like these every week</p>
        <p className="text-xs text-stone-500 mt-0.5">Personalized to your diet, budget &amp; household</p>
      </div>
      <span className="text-xs font-semibold text-orange-500 group-hover:text-orange-600 transition-colors">
        Free preview &rarr;
      </span>
    </Link>
  );
}

export function MealCardGrid({ meals, showCTA = true }: { meals: BlogMeal[]; showCTA?: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-blog-article">
      {meals.map((meal) => (
        <MealCard key={meal.name} meal={meal} />
      ))}
      {showCTA && <MealCardCTA />}
    </div>
  );
}

/** Sample day card in the product format */
type DayMeal = {
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
  name: string;
  prepTime: string;
  calories?: string;
};

type SampleDay = {
  day: string;
  meals: DayMeal[];
};

/** Product-style week preview with fade + CTA overlay */
export function WeekPreviewCTA({
  days,
  groceryItems,
}: {
  days: SampleDay[];
  groceryItems?: string[];
}) {
  return (
    <div className="my-8 not-blog-article">
      <div className="relative">
        {/* Days + optional grocery sidebar */}
        <div className="flex gap-4">
          {/* Day cards column */}
          <div className="flex-1 space-y-3">
            {days.map((day, i) => (
              <div
                key={day.day}
                className="rounded-xl border border-stone-100 bg-white p-4"
                style={i >= 2 ? { opacity: 0.4, filter: "blur(1px)" } : undefined}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-stone-800">{day.day}</h4>
                  {i < 2 && (
                    <span className="text-[10px] font-medium text-orange-500">
                      Recipes, grocery list &rarr;
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  {day.meals.map((meal) => (
                    <div key={meal.name} className="flex items-center gap-3 text-xs">
                      <span
                        className={`font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full text-[9px] shrink-0 ${mealTypeStyles[meal.mealType] ?? "bg-stone-50 text-stone-500"}`}
                      >
                        {meal.mealType}
                      </span>
                      <span className="font-medium text-stone-700 flex-1 truncate">{meal.name}</span>
                      <span className="text-stone-400 shrink-0">{meal.prepTime}</span>
                      {meal.calories && (
                        <span className="text-stone-400 shrink-0">{meal.calories}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Grocery sidebar — desktop only */}
          {groceryItems && groceryItems.length > 0 && (
            <div className="hidden sm:block w-48 shrink-0">
              <div className="rounded-xl border border-stone-100 bg-white p-4 sticky top-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-400">
                      <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                    </svg>
                    Your Grocery Run
                  </h4>
                  <span className="text-[10px] text-stone-400">{groceryItems.length} items</span>
                </div>
                <div className="space-y-2">
                  {groceryItems.slice(0, 8).map((item) => (
                    <label key={item} className="flex items-center gap-2 text-xs text-stone-600">
                      <span className="w-3.5 h-3.5 rounded border border-stone-200 shrink-0" />
                      {item}
                    </label>
                  ))}
                  {groceryItems.length > 8 && (
                    <p className="text-[10px] text-stone-400 italic">
                      +{groceryItems.length - 8} more items
                    </p>
                  )}
                </div>
                <p className="text-[10px] text-stone-400 mt-3 leading-relaxed">
                  Walk in, buy exactly this, walk out. No wandering, no forgetting.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Fade overlay + CTA */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FFFBF5] via-[#FFFBF5]/90 to-transparent flex items-end justify-center pb-4 pointer-events-none">
          <Link
            href="/onboarding"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg transition-colors pointer-events-auto"
          >
            Make this yours, free &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
