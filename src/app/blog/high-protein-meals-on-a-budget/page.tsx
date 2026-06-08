import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";
import { MealCardGrid, WeekPreviewCTA } from "@/components/blog/MealCard";

export const metadata: Metadata = {
  title: "High-Protein Meals on a Budget: 15 Dinners Under $4",
  description:
    "You don't need expensive salmon to hit 30g+ protein per meal. These 15 cheap high-protein dinners cost $2-4/serving and actually taste good. Plus a $50 weekly meal plan.",
  openGraph: {
    title: "High-Protein Meals on a Budget: 15 Dinners Under $4",
    description:
      "You don't need expensive salmon to hit 30g+ protein per meal. These 15 cheap high-protein dinners cost $2-4/serving and actually taste good. Plus a $50 weekly meal plan.",
    siteName: "What's For Dinner",
    type: "article",
    images: [{ url: `/api/og?title=High-Protein%20Meals%20on%20a%20Budget%3A%2015%20Dinners%20Under%20%244&description=You%20don't%20need%20expensive%20salmon%20to%20hit%2030g%2B%20protein%20per%20meal.%20These%2015%20cheap%20high-protein%20dinners%20cost%20%242-4%2Fserving%20and%20`, width: 1200, height: 630 }],
    url: "https://whatsfordinner.fit/blog/high-protein-meals-on-a-budget",
  },
  twitter: {
    card: "summary_large_image",
    title: "High-Protein Meals on a Budget: 15 Dinners Under $4",
    description:
      "You don't need expensive salmon to hit 30g+ protein per meal. These 15 cheap high-protein dinners cost $2-4/serving and actually taste good.",
    images: ["/api/og?title=High-Protein%20Meals%20on%20a%20Budget%3A%2015%20Dinners%20Under%20%244&description=You%20don't%20need%20expensive%20salmon%20to%20hit%2030g%2B%20protein%20per%20meal.%20These%2015%20cheap%20high-protein%20dinners%20cost%20%242-4%2Fserving%20and%20"],
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/high-protein-meals-on-a-budget",
  },
};

export default function HighProteinMealsOnABudgetArticle() {
  return (
    <>
      <ArticleJsonLd
        title="High-Protein Meals on a Budget: 15 Dinners Under $4"
        description="You don't need expensive salmon to hit 30g+ protein per meal. These 15 cheap high-protein dinners cost $2-4/serving and actually taste good. Plus a $50 weekly meal plan."
        url="https://whatsfordinner.fit/blog/high-protein-meals-on-a-budget"
        datePublished="2026-03-18"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the cheapest source of protein?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Eggs are the cheapest high-quality protein at roughly $0.25 per egg (6g protein each). Dried lentils ($0.15/serving, 18g protein), canned beans ($0.50/serving, 15g protein), and chicken thighs ($1.50/serving, 28g protein) round out the top budget protein sources. Buying in bulk and choosing bone-in cuts saves even more.",
                },
              },
              {
                "@type": "Question",
                name: "How can I eat 100g of protein a day on a budget?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hit 100g daily for under $5: 3 eggs at breakfast (18g, $0.75), a can of tuna or chicken at lunch (25g, $1.50), Greek yogurt snack (15g, $0.75), and chicken thighs or lentils at dinner (35-40g, $2.00). Total: ~100g protein for about $5. Buying eggs in bulk, chicken thighs bone-in, and dried beans instead of canned saves even more.",
                },
              },
              {
                "@type": "Question",
                name: "Is chicken breast or chicken thigh cheaper?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Chicken thighs are significantly cheaper — typically $1.50-2.50/lb vs $3.50-5.00/lb for boneless skinless breast. Thighs have slightly less protein per ounce (24g vs 26g per 4oz serving) but are more forgiving to cook, stay juicier, and have more flavor. Bone-in, skin-on thighs are the cheapest option and easy to debone yourself.",
                },
              },
              {
                "@type": "Question",
                name: "Are canned beans a good protein source?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. A can of black beans has about 25g of protein and costs $0.75-1.00. While beans aren't a complete protein on their own (they're low in methionine), pairing them with rice, tortillas, or any grain creates a complete amino acid profile. Canned beans are also high in fiber, shelf-stable for years, and require zero prep.",
                },
              },
            ],
          }),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://whatsfordinner.fit" },
          { name: "Blog", url: "https://whatsfordinner.fit/blog" },
          { name: "High-Protein Meals on a Budget", url: "https://whatsfordinner.fit/blog/high-protein-meals-on-a-budget" },
        ]}
      />
      <article className="blog-article">
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-xs text-stone-400">Updated March 2026</p>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        High-Protein Meals on a Budget: 15 Dinners Under $4
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Protein is expensive &mdash; or so people think. You don&apos;t need $15 salmon
          fillets to hit 30g+ protein per meal. Chicken thighs, eggs, canned beans, lentils,
          and ground beef are all protein powerhouses that cost a fraction of what most people
          spend on{" "}
          <Link href="/meal-plans/high-protein-meal-plan" className="text-orange-500 underline">high-protein meal plans</Link>.
        </p>
        <p>
          These 15 meals prove you can eat{" "}
          <Link href="/blog/eating-healthy-on-a-budget" className="text-orange-500 underline">healthy on a budget</Link>{" "}
          without living on plain rice and sadness. Every meal hits 30g+ protein,
          costs $2&ndash;4 per serving, and takes under 30 minutes.
        </p>
      </div>

      {/* TL;DR box */}
      <div className="bg-stone-50 rounded-xl p-5 my-8">
        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">TL;DR</p>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>15 high-protein dinners at $2&ndash;4/serving (30g+ protein each)</li>
          <li>A full $50 high-protein week with breakfast, lunch, and dinner</li>
          <li>Budget protein hacks using canned fish, lentils, and Greek yogurt</li>
          <li>Why chicken thighs beat chicken breast for your wallet</li>
        </ul>
      </div>

      {/* Section 1: Chicken & Turkey Dinners */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        🍗 5 Chicken &amp; Turkey Dinners
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Chicken thighs are the MVP of budget protein. Bone-in, skin-on thighs run
          $1.50&ndash;2.50/lb and are nearly impossible to overcook. Ground turkey is another
          underrated pick &mdash; leaner than beef, cheaper per pound.
        </p>
        <MealCardGrid meals={[
          { name: "Baked Chicken Thighs with Rice", mealType: "dinner", prepTime: "10 min prep + 30 min oven · $2.50", description: "Season bone-in thighs with paprika, garlic powder, salt, pepper. Bake at 400°F for 30 min. Serve over rice with frozen broccoli. 35g protein per serving.", tags: ["high-protein", "meal-prep"] },
          { name: "Chicken Stir-Fry", mealType: "dinner", prepTime: "20 min · $3.00", description: "Sliced chicken thigh, frozen stir-fry veggies, soy sauce, garlic, ginger. Serve over rice. 32g protein and cooks in one pan.", tags: ["high-protein", "one-pan"] },
          { name: "Turkey Taco Bowls", mealType: "dinner", prepTime: "15 min · $2.75", description: "Brown ground turkey with taco seasoning. Serve over rice with black beans, salsa, cheese, and lettuce. 38g protein from turkey + beans combined.", tags: ["high-protein", "under-$3"] },
          { name: "Chicken & Black Bean Quesadillas", mealType: "dinner", prepTime: "12 min · $2.50", description: "Shredded chicken, canned black beans, shredded cheese in a tortilla. Pan-fry until crispy. 34g protein and endlessly customizable.", tags: ["high-protein", "quick"] },
          { name: "One-Pot Chicken Pasta", mealType: "dinner", prepTime: "25 min · $3.50", description: "Diced chicken thigh, penne, jarred marinara, frozen spinach &mdash; all in one pot. Top with parmesan. 33g protein, minimal dishes.", tags: ["high-protein", "one-pot"] },
        ]} />
      </div>

      {/* Section 2: Egg & Bean Powerhouses */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        🥚 5 Egg &amp; Bean Powerhouses
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Eggs cost about $0.25 each for 6g of protein. Canned beans deliver 15g+ per can
          for under a dollar. Combine them and you&apos;re eating 30g+ protein meals for
          pocket change &mdash; and every one of these is vegetarian-friendly.
        </p>
        <MealCardGrid meals={[
          { name: "Shakshuka (Eggs in Tomato Sauce)", mealType: "dinner", prepTime: "20 min · $2.00", description: "Simmer canned tomatoes with cumin, paprika, and garlic. Crack 3 eggs in, cover until set. Serve with crusty bread. 24g protein, deeply satisfying.", tags: ["vegetarian", "high-protein"] },
          { name: "Black Bean & Egg Burrito", mealType: "lunch", prepTime: "10 min · $1.75", description: "Scramble 3 eggs, warm canned black beans with cumin, wrap in a tortilla with cheese and salsa. 30g protein for under two dollars.", tags: ["vegetarian", "high-protein"] },
          { name: "Chickpea Curry", mealType: "dinner", prepTime: "20 min · $2.00", description: "Canned chickpeas simmered in coconut milk with curry powder, garlic, and frozen spinach. Serve over rice. 22g protein per serving, scales easily.", tags: ["vegetarian", "batch-cook"] },
          { name: "Lentil Bolognese", mealType: "dinner", prepTime: "25 min · $1.50", description: "Red lentils cooked in marinara sauce with garlic and Italian seasoning. Serve over pasta. Tastes meaty, costs nothing. 28g protein per serving.", tags: ["vegetarian", "under-$2"] },
          { name: "Egg Fried Rice with Edamame", mealType: "lunch", prepTime: "12 min · $1.75", description: "Leftover rice, 3 scrambled eggs, frozen edamame, soy sauce, sesame oil. 31g protein and it&apos;s better than takeout.", tags: ["vegetarian", "high-protein"] },
        ]} />
      </div>

      {/* Stat callout */}
      <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-4 my-6">
        <p className="text-2xl font-bold text-stone-800">$3/serving average, 30g+ protein per meal</p>
        <p className="text-sm text-stone-500 mt-1">All 15 meals. No protein powder required.</p>
      </div>

      {/* Section 3: Budget Protein Hacks */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        💪 5 Budget Protein Hacks
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          These meals use the most underrated cheap protein sources: canned fish, ground
          beef, lentils, Greek yogurt, and cottage cheese. Most people overlook them,
          which is exactly why they&apos;re so affordable.
        </p>
        <MealCardGrid meals={[
          { name: "Tuna Pasta with Lemon & Capers", mealType: "dinner", prepTime: "15 min · $2.50", description: "Canned tuna tossed with hot pasta, olive oil, lemon juice, capers, and red pepper flakes. 30g protein from a $1 can of tuna. Italian pantry cooking at its finest.", tags: ["high-protein", "quick"] },
          { name: "Beef & Bean Chili", mealType: "dinner", prepTime: "10 min prep + 25 min · $3.00", description: "Ground beef, kidney beans, canned tomatoes, chili powder, cumin. Makes 4 servings so you&apos;re eating for days. 36g protein per bowl.", tags: ["high-protein", "batch-cook"] },
          { name: "Lentil Soup with Sausage", mealType: "dinner", prepTime: "10 min prep + 30 min · $2.50", description: "Dried lentils, sliced smoked sausage, broth, carrots, cumin. Lentils cook in 30 min, no soaking needed. 34g protein per bowl.", tags: ["high-protein", "batch-cook"] },
          { name: "Greek Yogurt Chicken Salad", mealType: "lunch", prepTime: "10 min · $3.00", description: "Canned chicken mixed with Greek yogurt (not mayo), diced celery, lemon juice, salt and pepper. Serve on bread or in a wrap. 40g protein, zero cooking.", tags: ["high-protein", "no-cook"] },
          { name: "Cottage Cheese Power Bowl", mealType: "breakfast", prepTime: "5 min · $2.00", description: "1 cup cottage cheese, sliced banana, handful of granola, drizzle of honey. 28g protein before you even leave the house. Sounds weird, tastes great.", tags: ["high-protein", "no-cook"] },
        ]} />
      </div>

      {/* A $50 High-Protein Week */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Your $50 High-Protein Week
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Here&apos;s what a full week of high-protein eating looks like on a{" "}
          <Link href="/meal-plans/meal-plan-on-a-budget" className="text-orange-500 underline">budget meal plan</Link>.
          Every day hits 90&ndash;110g protein. Total grocery cost: about $50.
        </p>
        <WeekPreviewCTA
          days={[
            { day: "Monday", meals: [
              { mealType: "breakfast", name: "Cottage Cheese Power Bowl", prepTime: "5 min", calories: "28g protein" },
              { mealType: "lunch", name: "Black Bean & Egg Burrito", prepTime: "10 min", calories: "30g protein" },
              { mealType: "dinner", name: "Baked Chicken Thighs with Rice", prepTime: "40 min", calories: "35g protein" },
            ]},
            { day: "Tuesday", meals: [
              { mealType: "breakfast", name: "3 Scrambled Eggs + Toast", prepTime: "8 min", calories: "24g protein" },
              { mealType: "lunch", name: "Greek Yogurt Chicken Salad Wrap", prepTime: "10 min", calories: "40g protein" },
              { mealType: "dinner", name: "Turkey Taco Bowls", prepTime: "15 min", calories: "38g protein" },
            ]},
            { day: "Wednesday", meals: [
              { mealType: "breakfast", name: "Oatmeal + PB + Banana", prepTime: "5 min", calories: "16g protein" },
              { mealType: "lunch", name: "Tuna Pasta (leftover)", prepTime: "2 min", calories: "30g protein" },
              { mealType: "dinner", name: "Beef & Bean Chili", prepTime: "35 min", calories: "36g protein" },
            ]},
            { day: "Thursday", meals: [
              { mealType: "breakfast", name: "Cottage Cheese Power Bowl", prepTime: "5 min", calories: "28g protein" },
              { mealType: "lunch", name: "Leftover Chili", prepTime: "2 min", calories: "36g protein" },
              { mealType: "dinner", name: "Chicken Stir-Fry", prepTime: "20 min", calories: "32g protein" },
            ]},
          ]}
          groceryItems={[
            "Chicken thighs, bone-in (3 lbs)",
            "Ground turkey (1 lb)",
            "Ground beef (1 lb)",
            "Eggs (1 dozen)",
            "Cottage cheese (16 oz)",
            "Greek yogurt (16 oz)",
            "Canned black beans (3)",
            "Canned kidney beans (2)",
            "Canned tuna (2)",
            "Canned chicken (1)",
            "Canned diced tomatoes (2)",
            "Rice (2 lbs)",
            "Pasta (1 lb)",
            "Tortillas (10 pack)",
            "Frozen stir-fry vegetables",
          ]}
        />

        {/* Pro tip callout */}
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 my-6">
          <p className="text-sm font-semibold text-amber-800">Pro tip</p>
          <p className="text-sm text-amber-700 mt-1">Buy whole chicken thighs (bone-in, skin-on) instead of boneless skinless breast. Thighs are $1.50&ndash;2.50/lb vs $3.50&ndash;5.00/lb for breast, they have nearly the same protein per serving, and they&apos;re almost impossible to overcook. Debone them yourself in 30 seconds if a recipe calls for boneless &mdash; you&apos;ll save 40&ndash;50% per pound.</p>
        </div>

        <p>
          Total grocery cost for the week: roughly $45&ndash;55 depending on where you shop.
          That&apos;s 90&ndash;110g of protein every day for less than most people spend on
          two restaurant meals.
        </p>
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Want a personalized high-protein meal plan?
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Tell us your protein goals, budget, and preferences. We&apos;ll generate a week
          of meals with recipes and a grocery list &mdash; optimized for protein per dollar.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try Free &rarr;
        </Link>
      </div>

      {/* Get a personalized plan */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Get a High-Protein Meal Plan Every Week
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Finding{" "}
          <Link href="/meal-plans/high-protein-meal-plan" className="text-orange-500 underline">cheap high-protein meals</Link>{" "}
          isn&apos;t the hard part. The hard part is doing it consistently &mdash;
          finding recipes, building a grocery list, making sure you&apos;re not eating
          the same three meals on repeat.
        </p>
        <p>
          What&apos;s For Dinner handles all of it. Set your protein target, pick your
          budget, choose your dietary preferences, and you get a{" "}
          <Link
            href="/blog/meal-plan-with-grocery-list"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            personalized meal plan with recipes and a grocery list
          </Link>{" "}
          every week. High-protein meals that actually fit your budget, with ingredients
          that overlap so nothing goes to waste.
        </p>
        <p>
          It&apos;s{" "}
          <Link
            href="/onboarding"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            $7.99/month
          </Link>{" "}
          &mdash; less than a single chicken breast at a restaurant. If it saves you even
          one impulse takeout order a month, it pays for itself.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Your first week is free
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Set your protein goals and budget. Get a personalized meal plan with recipes
          and a grocery list &mdash; high protein, low cost. $7.99/mo after your trial.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Start Your Free Plan &rarr;
        </Link>
      </div>

      {/* Related articles + meal plans */}
      <div className="border-t border-stone-100 mt-12 pt-8">
        <p className="text-sm font-medium text-stone-400 mb-4">
          Related articles
        </p>
        <div className="space-y-3">
          <Link
            href="/blog/cheap-meals-for-one"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Cheap Meals for One: 15 Dinners Under $3/Serving
          </Link>
          <Link
            href="/blog/eating-healthy-on-a-budget"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Eating Healthy on a Budget: $50/Week, No Sad Salads
          </Link>
          <Link
            href="/blog/meal-prep-for-weight-loss"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Prep for Weight Loss: The Complete Guide
          </Link>
          <Link
            href="/blog/weekly-meal-plan"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Weekly Meal Plan: How to Plan a Week of Meals
          </Link>
          <Link
            href="/blog/best-budget-meal-plans"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Best Budget Meal Plans in 2026
          </Link>
        </div>
        <p className="text-sm font-medium text-stone-400 mt-6 mb-4">
          Browse meal plans
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/meal-plans/high-protein-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">High Protein</Link>
          <Link href="/meal-plans/meal-plan-on-a-budget" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Budget</Link>
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans/high-protein-budget-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">High Protein Budget</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
