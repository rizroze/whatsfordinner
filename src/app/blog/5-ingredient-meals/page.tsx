import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";
import { MealCardGrid } from "@/components/blog/MealCard";

export const metadata: Metadata = {
  title: "15 Easy 5-Ingredient Dinners (Under 30 Minutes)",
  description:
    "Simple 5-ingredient dinners that actually taste good. 15 recipes using pantry staples, fresh basics, and no-cook assembly meals — all under 30 minutes. Plus a free personalized meal plan.",
  openGraph: {
    title: "15 Easy 5-Ingredient Dinners (Under 30 Minutes)",
    description:
      "Simple 5-ingredient dinners that actually taste good. 15 recipes using pantry staples, fresh basics, and no-cook assembly meals — all under 30 minutes. Plus a free personalized meal plan.",
    siteName: "What's For Dinner",
    type: "article",
    images: [{ url: `/api/og?title=15%20Easy%205-Ingredient%20Dinners%20(Under%2030%20Minutes)&description=Simple%205-ingredient%20dinners%20that%20actually%20taste%20good.%2015%20recipes%20using%20pantry%20staples%2C%20fresh%20basics%2C%20and%20no-cook%20assembl`, width: 1200, height: 630 }],
    url: "https://whatsfordinner.fit/blog/5-ingredient-meals",
  },
  twitter: {
    card: "summary_large_image",
    title: "15 Easy 5-Ingredient Dinners (Under 30 Minutes)",
    description:
      "Simple 5-ingredient dinners that actually taste good. 15 recipes using pantry staples, fresh basics, and no-cook assembly meals — all under 30 minutes.",
    images: ["/api/og?title=15%20Easy%205-Ingredient%20Dinners%20(Under%2030%20Minutes)&description=Simple%205-ingredient%20dinners%20that%20actually%20taste%20good.%2015%20recipes%20using%20pantry%20staples%2C%20fresh%20basics%2C%20and%20no-cook%20assembl"],
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/5-ingredient-meals",
  },
};

export default function FiveIngredientMealsArticle() {
  return (
    <>
      <ArticleJsonLd
        title="15 Easy 5-Ingredient Dinners (Under 30 Minutes)"
        description="Simple 5-ingredient dinners that actually taste good. 15 recipes using pantry staples, fresh basics, and no-cook assembly meals — all under 30 minutes. Plus a free personalized meal plan."
        url="https://whatsfordinner.fit/blog/5-ingredient-meals"
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
                name: "Do salt, pepper, and oil count as ingredients?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Salt, black pepper, and cooking oil (olive or neutral) are pantry freebies that virtually everyone has on hand. The 5-ingredient count covers the actual recipe components — proteins, produce, dairy, grains, and sauces. This is the standard convention used by most 5-ingredient cookbooks and food blogs.",
                },
              },
              {
                "@type": "Question",
                name: "Are 5-ingredient meals healthy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "They can be, and often are. Fewer ingredients doesn't mean less nutrition — a chicken breast, broccoli, rice, soy sauce, and garlic hits protein, fiber, complex carbs, and micronutrients in one bowl. The key is variety across your week, not cramming every nutrient into a single meal. A good 5-ingredient meal plan rotates proteins, vegetables, and grains so you cover all your bases over 7 days.",
                },
              },
              {
                "@type": "Question",
                name: "Won't 5-ingredient dinners taste bland?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not if you pick the right five. One high-impact ingredient — soy sauce, pesto, salsa, curry paste, or parmesan — does the work of five spices. The recipes in this list use bold flavors strategically so nothing tastes like a sad diet meal. Constraint forces creativity, and 5-ingredient cooking proves it.",
                },
              },
              {
                "@type": "Question",
                name: "Are 5-ingredient meals good for beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Perfect for beginners. Fewer ingredients means fewer things to prep, fewer steps, and fewer ways to mess up. You learn fundamental techniques — searing, boiling, assembling — without the overwhelm of a 20-ingredient recipe. Most 5-ingredient meals take under 25 minutes and use basic equipment: one pan, one pot, or no cooking at all.",
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
          { name: "5-Ingredient Meals", url: "https://whatsfordinner.fit/blog/5-ingredient-meals" },
        ]}
      />
      <article className="blog-article">
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-xs text-stone-400">Updated March 2026</p>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        15 Easy 5-Ingredient Dinners (Under 30 Minutes)
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          The real reason people don&apos;t cook isn&apos;t time. It&apos;s the
          15-ingredient recipe that needs a specialty store run, three spices you&apos;ll
          use once, and a &quot;quick&quot; prep step that somehow takes 45 minutes. You
          open the recipe, see the ingredient list, and close your laptop. DoorDash wins
          again.
        </p>
        <p>
          But here&apos;s the thing: the best weeknight meals don&apos;t need 15
          ingredients. They need five good ones and 20 minutes.
        </p>

        {/* Stat callout */}
        <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-4 my-6">
          <p className="text-2xl font-bold text-stone-800">5 ingredients. Under 30 minutes. Under $4/serving.</p>
          <p className="text-sm text-stone-500 mt-1">No specialty stores. No leftover spice jars collecting dust.</p>
        </div>

        <p>
          These 15 dinners use ingredients you probably already have &mdash; or can grab
          in a single grocery aisle. They&apos;re organized into three categories: pantry
          staples, fresh + simple, and no-cook assembly meals. Every one of them costs{" "}
          <Link href="/meal-plans/meal-plan-on-a-budget" className="text-orange-500 underline">under $4 per serving</Link> and
          takes less than 30 minutes.
        </p>
      </div>

      {/* TL;DR box */}
      <div className="bg-stone-50 rounded-xl p-5 my-8">
        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">TL;DR</p>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>15 dinners with just 5 main ingredients each (salt, pepper, oil don&apos;t count)</li>
          <li>Pantry staples, fresh basics, and no-cook assembly meals</li>
          <li>All under 30 minutes and $1.50&ndash;4/serving</li>
        </ul>
      </div>

      {/* Section 1: Pantry-Staple Dinners */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        5 Pantry-Staple Dinners
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          These meals live in your cupboard. Canned goods, dried pasta, rice,
          eggs, beans &mdash; the stuff that doesn&apos;t go bad and doesn&apos;t
          require a trip to the store. Perfect for the &quot;there&apos;s nothing
          to eat&quot; nights when there absolutely is.
        </p>
        <MealCardGrid meals={[
          { name: "Garlic Butter Pasta", mealType: "dinner", prepTime: "15 min \u00b7 $1.50", description: "Pasta, butter, garlic, parmesan, red pepper flakes. Boil the pasta, melt butter with garlic in the same pot, toss everything together. The meal that proves you don\u2019t need a recipe to eat well.", tags: ["pantry", "vegetarian"] },
          { name: "Egg Fried Rice", mealType: "dinner", prepTime: "12 min \u00b7 $1.75", description: "Rice (leftover is best), eggs, frozen peas, soy sauce, sesame oil. Scramble eggs in a hot pan, add rice and peas, hit it with soy sauce. Better than takeout, and it costs less than two dollars.", tags: ["pantry", "under-$2"] },
          { name: "Black Bean Tacos", mealType: "dinner", prepTime: "10 min \u00b7 $1.75", description: "Canned black beans, tortillas, cumin, salsa, shredded cheese. Heat beans with cumin, spoon into tortillas, top with salsa and cheese. Three tacos for under two bucks.", tags: ["pantry", "vegetarian"] },
          { name: "Canned Tomato Pasta", mealType: "dinner", prepTime: "18 min \u00b7 $1.50", description: "Pasta, canned crushed tomatoes, garlic, dried basil, parmesan. Simmer tomatoes with garlic while pasta boils. A pantry marinara that tastes like you tried harder than you did.", tags: ["pantry", "vegetarian"] },
          { name: "Rice and Beans", mealType: "dinner", prepTime: "20 min \u00b7 $1.50", description: "Rice, canned pinto beans, cumin, hot sauce, canned corn. Cook rice, heat beans with cumin and corn, drizzle hot sauce. The cheapest complete protein on the planet.", tags: ["pantry", "under-$2"] },
        ]} />
      </div>

      {/* Section 2: Fresh + Simple Dinners */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        5 Fresh + Simple Dinners
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          These need one or two fresh ingredients &mdash; chicken, ground beef, or
          a vegetable &mdash; plus pantry backup. One quick grocery grab and you&apos;re
          set for the week.
        </p>
        <MealCardGrid meals={[
          { name: "Chicken and Broccoli Stir-Fry", mealType: "dinner", prepTime: "20 min \u00b7 $3.50", description: "Chicken breast, broccoli, soy sauce, garlic, rice. Slice chicken thin, stir-fry with broccoli and garlic, splash soy sauce, serve over rice. Restaurant-quality for a quarter of the price.", tags: ["high-protein", "quick"] },
          { name: "Beef Taco Skillet", mealType: "dinner", prepTime: "15 min \u00b7 $3.25", description: "Ground beef, taco seasoning, canned diced tomatoes, tortillas, shredded cheese. Brown beef, stir in seasoning and tomatoes, simmer five minutes. Scoop into tortillas.", tags: ["high-protein", "one-pan"] },
          { name: "Pesto Chicken Pasta", mealType: "dinner", prepTime: "20 min \u00b7 $3.75", description: "Pasta, chicken breast, jarred pesto, cherry tomatoes, parmesan. Cook pasta and chicken separately, toss everything with pesto. Looks fancy. Took 20 minutes.", tags: ["quick", "high-protein"] },
          { name: "Sausage and Peppers", mealType: "dinner", prepTime: "22 min \u00b7 $3.50", description: "Italian sausage, bell pepper, onion, hoagie roll, mustard. Slice and pan-fry sausage with peppers and onion until browned. Pile into a roll. Hearty, zero fuss.", tags: ["one-pan", "high-protein"] },
          { name: "Lemon Butter Salmon", mealType: "dinner", prepTime: "18 min \u00b7 $4.00", description: "Salmon fillet, lemon, butter, garlic, asparagus. Sear salmon skin-down, add butter and garlic, squeeze lemon, roast asparagus alongside. Looks like a $30 plate.", tags: ["high-protein", "quick"] },
        ]} />
      </div>

      {/* Section 3: No-Cook 5-Ingredient Meals */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        5 No-Cook 5-Ingredient Meals
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Zero cooking. These are assembly meals &mdash; open, chop, combine, eat.
          For the nights when even boiling water feels like too much commitment.
        </p>
        <MealCardGrid meals={[
          { name: "Tuna White Bean Salad", mealType: "dinner", prepTime: "8 min \u00b7 $2.50", description: "Canned tuna, canned white beans, red onion, lemon juice, arugula. Drain, chop, toss. High protein, no heat, five minutes of actual work.", tags: ["no-cook", "high-protein"] },
          { name: "Caprese Wrap", mealType: "lunch", prepTime: "5 min \u00b7 $2.75", description: "Tortilla, fresh mozzarella, tomato, basil, balsamic glaze. Layer, roll, slice in half. Italian deli vibes from your kitchen counter.", tags: ["no-cook", "vegetarian"] },
          { name: "Greek Chickpea Bowl", mealType: "dinner", prepTime: "8 min \u00b7 $2.25", description: "Canned chickpeas, cucumber, cherry tomatoes, feta, store-bought tzatziki. Chop, toss, dollop. Mediterranean lunch energy for dinner.", tags: ["no-cook", "vegetarian"] },
          { name: "Smoked Salmon Bagel", mealType: "dinner", prepTime: "5 min \u00b7 $3.50", description: "Bagel, cream cheese, smoked salmon, capers, red onion. Spread, layer, done. Feels luxurious. Costs less than a fast food combo.", tags: ["no-cook", "high-protein"] },
          { name: "Black Bean Crunch Wrap", mealType: "dinner", prepTime: "8 min \u00b7 $2.00", description: "Large tortilla, canned black beans, shredded cheese, salsa, sour cream. Layer everything, fold into a hexagon, pan-press until crispy. Technically one minute of heat, but we\u2019ll allow it.", tags: ["no-cook", "under-$3"] },
        ]} />
      </div>

      {/* Section 4: The 5-Ingredient Pantry */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The 5-Ingredient Pantry
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Stock these and you can make most of the meals above without a grocery run.
          This isn&apos;t a fantasy pantry &mdash; it&apos;s a realistic one that costs
          about $25 to set up from scratch.
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>Pasta + rice.</strong> Two boxes of spaghetti, one bag of rice.
            That&apos;s your base for at least 8 meals.
          </li>
          <li>
            <strong>Canned beans.</strong> Black beans, pinto beans, chickpeas. Protein,
            fiber, and they last forever.
          </li>
          <li>
            <strong>Canned tomatoes.</strong> Crushed and diced. The foundation of
            sauces, soups, and skillets.
          </li>
          <li>
            <strong>Eggs.</strong> Technically not &quot;pantry&quot; but they last weeks
            in the fridge and go into everything &mdash; fried rice, tacos, toast, pasta.
          </li>
          <li>
            <strong>Soy sauce + hot sauce.</strong> Two bottles that turn bland food into
            good food. Soy sauce for umami, hot sauce for heat.
          </li>
          <li>
            <strong>Frozen vegetables.</strong> Broccoli, peas, stir-fry mix. Cheaper
            than fresh, already prepped, never goes bad.
          </li>
          <li>
            <strong>Cheese.</strong> A block of parmesan or a bag of shredded Mexican
            blend. Finishes almost any dish.
          </li>
        </ul>

        {/* Pro tip callout */}
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 my-6">
          <p className="text-sm font-semibold text-amber-800">Pro tip</p>
          <p className="text-sm text-amber-700 mt-1">Keep one &quot;flavor bomb&quot; in the fridge at all times &mdash; jarred pesto, curry paste, salsa, or miso paste. One tablespoon turns a boring 5-ingredient meal into a genuinely good one.</p>
        </div>
      </div>

      {/* Section 5: Why 5 Ingredients Changes Everything */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Why 5 Ingredients Changes Everything
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Constraints breed creativity. When you limit yourself to five ingredients,
          something interesting happens: you actually cook. You don&apos;t spend
          30 minutes prepping. You don&apos;t abandon the recipe halfway through
          because it got complicated. You don&apos;t order takeout because the
          grocery list was too long.
        </p>
        <p>
          Five ingredients means a shorter grocery list, less food waste, faster
          prep, and fewer dishes. It means you can{" "}
          <Link href="/blog/meal-planning-for-beginners" className="text-orange-500 underline">meal plan for the whole week</Link>{" "}
          in five minutes because there&apos;s less to think about. And when cooking
          is easy, you do it more often. That&apos;s the whole game.
        </p>
        <p>
          The people who cook consistently aren&apos;t better chefs &mdash; they
          just have{" "}
          <Link href="/meal-plans/5-ingredient-meal-plan" className="text-orange-500 underline">simpler recipes</Link>.
        </p>
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Want a personalized 5-ingredient meal plan?
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Tell us your preferences. We&apos;ll generate a week of simple meals
          with recipes and a grocery list &mdash; nothing over 5 main ingredients.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try Free &rarr;
        </Link>
      </div>

      {/* FAQs */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        FAQs About 5-Ingredient Cooking
      </h2>
      <div className="space-y-6 text-stone-600 leading-relaxed">
        <div>
          <p className="font-semibold text-stone-800">Do salt, pepper, and oil count as ingredients?</p>
          <p className="mt-1">
            No. Salt, black pepper, and cooking oil are pantry freebies. The 5-ingredient
            count covers actual recipe components &mdash; proteins, produce, dairy, grains,
            and sauces. This is the standard convention used by most 5-ingredient cookbooks.
          </p>
        </div>
        <div>
          <p className="font-semibold text-stone-800">Are 5-ingredient meals healthy?</p>
          <p className="mt-1">
            They can be, and often are. Fewer ingredients doesn&apos;t mean less nutrition.
            A chicken breast, broccoli, rice, soy sauce, and garlic hits protein, fiber,
            complex carbs, and micronutrients in one bowl. The key is variety across your
            week &mdash; rotate proteins and vegetables and you&apos;ll cover all your bases.
          </p>
        </div>
        <div>
          <p className="font-semibold text-stone-800">Won&apos;t 5-ingredient dinners taste bland?</p>
          <p className="mt-1">
            Not if you pick the right five. One high-impact ingredient &mdash; soy sauce,
            pesto, salsa, curry paste, or parmesan &mdash; does the work of five spices.
            Constraint forces creativity, and these recipes prove it.
          </p>
        </div>
        <div>
          <p className="font-semibold text-stone-800">Are 5-ingredient meals good for beginners?</p>
          <p className="mt-1">
            Perfect for{" "}
            <Link href="/meal-plans/meal-plan-for-beginners" className="text-orange-500 underline">beginners</Link>.
            Fewer ingredients means fewer things to prep, fewer steps, and fewer ways to
            mess up. Most of these meals take under 25 minutes and use basic equipment:
            one pan, one pot, or no cooking at all.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Your first week is free
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Set your preferences and get a personalized meal plan with recipes and
          a grocery list &mdash; built around simple, 5-ingredient meals. $7.99/mo
          after your trial.
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
            href="/blog/meal-planning-for-beginners"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Planning for Beginners: The Complete Guide (2026)
          </Link>
          <Link
            href="/blog/eating-healthy-on-a-budget"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Eating Healthy on a Budget: $50/Week, No Sad Salads
          </Link>
          <Link
            href="/blog/weekly-meal-plan"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            How to Create a Weekly Meal Plan That Actually Works
          </Link>
          <Link
            href="/blog/what-to-cook-when-you-have-nothing"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            What to Cook When You Have Nothing in the Fridge
          </Link>
        </div>
        <p className="text-sm font-medium text-stone-400 mt-6 mb-4">
          Browse meal plans
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/meal-plans/5-ingredient-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">5-Ingredient</Link>
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans/meal-plan-on-a-budget" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Budget</Link>
          <Link href="/meal-plans/meal-plan-for-beginners" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">For Beginners</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
