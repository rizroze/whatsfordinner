import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";
import { MealCardGrid } from "@/components/blog/MealCard";

export const metadata: Metadata = {
  title: "Meal Prep for Weight Loss: 12 Meals Under 500 Calories",
  description:
    "12 meal prep recipes under 500 calories each — 4 breakfasts, 4 lunches, 4 dinners. Plus a 2-hour Sunday prep system and common mistakes to avoid. Free preview included.",
  openGraph: {
    title: "Meal Prep for Weight Loss: 12 Meals Under 500 Calories",
    description:
      "12 meal prep recipes under 500 calories each — 4 breakfasts, 4 lunches, 4 dinners. Plus a 2-hour Sunday prep system and common mistakes to avoid. Free preview included.",
    siteName: "What's For Dinner",
    type: "article",
    images: [{ url: `/api/og?title=Meal%20Prep%20for%20Weight%20Loss%3A%2012%20Meals%20Under%20500%20Calories&description=12%20meal%20prep%20recipes%20under%20500%20calories%20each%20%E2%80%94%204%20breakfasts%2C%204%20lunches%2C%204%20dinners.%20Plus%20a%202-hour%20Sunday%20prep%20system%20and%20`, width: 1200, height: 630 }],
    url: "https://whatsfordinner.fit/blog/meal-prep-for-weight-loss",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meal Prep for Weight Loss: 12 Meals Under 500 Calories",
    description:
      "12 meal prep recipes under 500 calories each — breakfasts, lunches, and dinners. Plus a 2-hour Sunday prep system.",
    images: ["/api/og?title=Meal%20Prep%20for%20Weight%20Loss%3A%2012%20Meals%20Under%20500%20Calories&description=12%20meal%20prep%20recipes%20under%20500%20calories%20each%20%E2%80%94%204%20breakfasts%2C%204%20lunches%2C%204%20dinners.%20Plus%20a%202-hour%20Sunday%20prep%20system%20and%20"],
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/meal-prep-for-weight-loss",
  },
};

export default function MealPrepForWeightLossArticle() {
  return (
    <>
      <ArticleJsonLd
        title="Meal Prep for Weight Loss: 12 Meals Under 500 Calories"
        description="12 meal prep recipes under 500 calories each — 4 breakfasts, 4 lunches, 4 dinners. Plus a 2-hour Sunday prep system and common mistakes to avoid. Free preview included."
        url="https://whatsfordinner.fit/blog/meal-prep-for-weight-loss"
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
                name: "How many calories should meal prep meals be for weight loss?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most meal prep meals for weight loss should be 300-500 calories each. This allows for three meals plus a small snack while staying in a moderate calorie deficit. Breakfasts can be lighter (300-400 cal), while lunches and dinners should be more substantial (400-500 cal) to keep you full through the afternoon and evening.",
                },
              },
              {
                "@type": "Question",
                name: "How long does meal prepped food last in the fridge?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most meal prepped food lasts 3-4 days in the fridge when stored in airtight containers. Cooked chicken, rice, roasted vegetables, and soups all hold up well. For a full 5-day work week, prep Sunday and Wednesday, or freeze meals for days 4-5 and thaw overnight.",
                },
              },
              {
                "@type": "Question",
                name: "Is meal prepping actually effective for weight loss?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Meal prepping removes the biggest obstacle to weight loss: last-minute decisions when you're hungry. When healthy food is already portioned and ready, you don't have to rely on willpower at 6pm. Studies show that people who plan meals in advance are more likely to maintain a healthy weight and eat more vegetables.",
                },
              },
              {
                "@type": "Question",
                name: "What should I meal prep first if I'm a beginner?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Start with just lunches for the work week — it's the meal most people default to takeout for. Pick two recipes, make 5 portions total (3 of one, 2 of the other for variety), and store in containers. Once that feels easy, add breakfasts. Dinners can come last since you have more time to cook in the evening.",
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
          { name: "Meal Prep for Weight Loss", url: "https://whatsfordinner.fit/blog/meal-prep-for-weight-loss" },
        ]}
      />
      <article className="blog-article">
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-xs text-stone-400">Updated March 2026</p>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        Meal Prep for Weight Loss: 12 Meals Under 500 Calories
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          The problem isn&apos;t willpower &mdash; it&apos;s 6pm with no plan. When
          you&apos;re hungry and there&apos;s nothing ready, you eat whatever&apos;s
          fastest. A drive-through combo. Leftover pizza. Cereal straight from the
          box. Not because you lack discipline, but because your brain is tired and
          the path of least resistance wins.
        </p>
        <p>
          <Link href="/blog/how-to-meal-prep" className="text-orange-500 underline">Meal prep</Link> fixes
          the decision, not the discipline. When there&apos;s a container of{" "}
          <Link href="/meal-plans/high-protein-meal-plan" className="text-orange-500 underline">high-protein food</Link> already
          portioned in the fridge, eating well becomes the easiest option &mdash; not
          the hardest.
        </p>

        {/* Stat callout */}
        <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-4 my-6">
          <p className="text-2xl font-bold text-stone-800">12 meals, all under 500 calories</p>
          <p className="text-sm text-stone-500 mt-1">4 breakfasts + 4 lunches + 4 dinners. Prep once, eat all week.</p>
        </div>

        <p>
          Here are 12 meals that are easy to prep in bulk, actually taste good on
          day 4, and keep you under 500 calories per serving without feeling like
          you&apos;re on a diet.
        </p>
      </div>

      {/* TL;DR box */}
      <div className="bg-stone-50 rounded-xl p-5 my-8">
        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">TL;DR</p>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>12 meal prep recipes under 500 calories (breakfast, lunch, dinner)</li>
          <li>A 2-hour Sunday prep system that covers the whole week</li>
          <li>Common meal prep mistakes that sabotage weight loss</li>
        </ul>
      </div>

      {/* 4 High-Protein Breakfasts */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        4 High-Protein Breakfasts
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Breakfast is where most people blow it &mdash; either skipping it entirely
          or grabbing something carb-heavy that leaves them starving by 10am. These
          are all high in protein to keep you full until lunch.
        </p>
        <MealCardGrid meals={[
          { name: "Veggie Egg Muffins", mealType: "breakfast", prepTime: "25 min prep · 12 muffins", description: "Whisk 12 eggs with diced bell peppers, spinach, onion, and a pinch of salt. Pour into a muffin tin, bake at 375\u00B0F for 20 min. 2 muffins = one serving. 180 calories, 14g protein.", tags: ["high-protein", "meal-prep"] },
          { name: "Overnight Protein Oats", mealType: "breakfast", prepTime: "5 min prep · 5 jars", description: "1/2 cup oats, 1 scoop protein powder, 3/4 cup almond milk, 1 tbsp chia seeds. Mix in a jar, refrigerate overnight. Top with berries in the morning. 320 calories, 25g protein.", tags: ["no-cook", "meal-prep"] },
          { name: "Greek Yogurt Power Bowl", mealType: "breakfast", prepTime: "5 min assembly", description: "1 cup plain Greek yogurt, 1/4 cup granola, 1 tbsp honey, mixed berries. Simple, no cooking required. Prep toppings in baggies for grab-and-go. 350 calories, 22g protein.", tags: ["no-cook", "high-protein"] },
          { name: "Smoothie Prep Bags", mealType: "breakfast", prepTime: "15 min prep · 5 bags", description: "Pre-portion into freezer bags: 1 banana, handful spinach, 1/2 cup frozen berries, 1 scoop protein powder. Morning routine: dump bag in blender, add milk, blend. 290 calories, 24g protein.", tags: ["meal-prep", "freezer-friendly"] },
        ]} />
      </div>

      {/* 4 Lunches That Actually Fill You Up */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        4 Lunches That Actually Fill You Up
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Lunch is the danger zone. If it&apos;s not ready, you&apos;re ordering
          delivery or grabbing something from the nearest chain. These meals reheat
          well and actually keep you full through the afternoon slump.
        </p>
        <MealCardGrid meals={[
          { name: "Chicken &amp; Quinoa Grain Bowl", mealType: "lunch", prepTime: "35 min prep · 5 bowls", description: "Baked chicken breast, quinoa, roasted sweet potato, steamed broccoli, drizzle of tahini. Divide into 5 containers. Tastes great cold or reheated. 450 calories, 38g protein.", tags: ["high-protein", "meal-prep"] },
          { name: "Turkey Lettuce Wraps", mealType: "lunch", prepTime: "15 min prep · 5 servings", description: "Ground turkey cooked with soy sauce, garlic, ginger, and water chestnuts. Store the filling separately, spoon into butter lettuce cups at lunch. Fresh and crunchy every time. 320 calories, 30g protein.", tags: ["low-carb", "high-protein"] },
          { name: "Red Lentil Soup", mealType: "lunch", prepTime: "30 min · 6 servings", description: "Red lentils, diced tomatoes, onion, garlic, cumin, turmeric, vegetable broth. Simmer 25 min. Freezes perfectly, reheats in the microwave in 3 min. 310 calories, 18g protein.", tags: ["batch-cook", "freezer-friendly"] },
          { name: "Tuna Salad Protein Box", mealType: "lunch", prepTime: "10 min prep · 5 boxes", description: "Canned tuna mixed with Greek yogurt (not mayo), diced celery, lemon juice. Pair with whole grain crackers, cucumber slices, and cherry tomatoes. 380 calories, 35g protein.", tags: ["no-cook", "high-protein"] },
        ]} />
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Want a calorie-controlled meal plan built for you?
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Tell us your goal and preferences. We&apos;ll generate a week of
          meals with recipes and a grocery list &mdash; portioned for weight loss.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Free Preview &rarr;
        </Link>
      </div>

      {/* 4 Dinners Under 500 Calories */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        4 Dinners Under 500 Calories
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Dinner is where meal prep pays off the most. You&apos;re tired, you don&apos;t
          want to cook, and the couch is calling. Having a container you just need to
          reheat is the difference between a 480-calorie dinner and a 1,200-calorie
          Uber Eats order.
        </p>
        <MealCardGrid meals={[
          { name: "Sheet Pan Chicken &amp; Vegetables", mealType: "dinner", prepTime: "10 min prep + 25 min oven · 4 servings", description: "Chicken thighs, broccoli, bell peppers, and red onion tossed with olive oil, garlic powder, paprika. Bake at 400\u00B0F. One pan, one meal, minimal cleanup. 420 calories, 35g protein.", tags: ["sheet-pan", "high-protein"] },
          { name: "Beef &amp; Broccoli Stir Fry", mealType: "dinner", prepTime: "20 min · 4 servings", description: "Thinly sliced beef, broccoli florets, garlic, low-sodium soy sauce, brown rice on the side. Cooks in 10 min, tastes like takeout. Store rice separately so it doesn\u2019t get mushy. 470 calories, 32g protein.", tags: ["high-protein", "meal-prep"] },
          { name: "Lemon Salmon with Asparagus", mealType: "dinner", prepTime: "10 min prep + 15 min oven · 4 servings", description: "Salmon fillets on a sheet pan with asparagus, lemon slices, olive oil, salt and pepper. Bake at 400\u00B0F for 15 min. Elegant enough for a date night but meal-preppable. 390 calories, 34g protein.", tags: ["sheet-pan", "high-protein"] },
          { name: "Turkey Chili", mealType: "dinner", prepTime: "15 min prep + 30 min · 6 servings", description: "Ground turkey, kidney beans, diced tomatoes, onion, chili powder, cumin. Simmer or slow cook. Makes a huge batch, freezes perfectly, and somehow tastes better on day 3. 380 calories, 28g protein.", tags: ["batch-cook", "freezer-friendly"] },
        ]} />
      </div>

      {/* The Sunday Prep System */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The Sunday Prep System
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Two hours on Sunday. That&apos;s it. Here&apos;s the order that makes it
          efficient &mdash; everything overlaps so you&apos;re never just standing
          around waiting.
        </p>
        <ol className="list-decimal list-inside space-y-3 pl-1">
          <li>
            <strong>Start the oven (0:00).</strong> Preheat to 400&deg;F. Season your
            sheet pan chicken and get it in first &mdash; it takes the longest.
          </li>
          <li>
            <strong>Start the stove (0:05).</strong> Get your turkey chili or lentil
            soup simmering. This cooks itself while you do everything else.
          </li>
          <li>
            <strong>Cook grains (0:10).</strong> Start a pot of quinoa or brown rice.
            Set a timer and forget it.
          </li>
          <li>
            <strong>Prep cold items (0:20).</strong> While everything cooks, assemble
            your overnight oats jars, smoothie prep bags, and tuna salad. Chop
            vegetables for the week.
          </li>
          <li>
            <strong>Make egg muffins (0:40).</strong> Pull the chicken out, put the
            muffin tin in. Whisk eggs while the oven is still hot.
          </li>
          <li>
            <strong>Portion and store (1:15).</strong> Everything should be cooked or
            cooling. Divide into containers. Label with the day if you&apos;re
            organized like that.
          </li>
          <li>
            <strong>Clean up (1:40).</strong> Done by the 2-hour mark. Fridge is
            stocked. Week is handled.
          </li>
        </ol>

        {/* Pro tip callout */}
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 my-6">
          <p className="text-sm font-semibold text-amber-800">Pro tip</p>
          <p className="text-sm text-amber-700 mt-1">Invest in a set of same-size glass containers. They stack neatly, reheat evenly, and you can see what&apos;s inside without opening them. Worth every penny.</p>
        </div>
      </div>

      {/* What Not to Do */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        What Not to Do
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Meal prep for weight loss fails for predictable reasons. Avoid these and
          you&apos;ll actually stick with it:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>Going too restrictive.</strong> A 1,000-calorie day sounds
            productive until you&apos;re face-first in a bag of chips by Wednesday.
            Aim for a moderate deficit &mdash; 300-500 calories below maintenance.
            Sustainable beats aggressive every time.
          </li>
          <li>
            <strong>Eating the same meal 5 days straight.</strong> Chicken and rice
            is fine on Monday. By Thursday it&apos;s punishment. Prep 2-3 different
            meals and rotate. Variety is what keeps you from abandoning the whole
            system.
          </li>
          <li>
            <strong>Forgetting about flavor.</strong> Low calorie doesn&apos;t mean
            low flavor. Use spices, citrus, fresh herbs, hot sauce, soy sauce. A
            well-seasoned 400-calorie meal is more satisfying than a bland
            600-calorie one.
          </li>
          <li>
            <strong>Prepping 7 days at once.</strong> Food quality drops after day 4.
            Prep for 4 days, then do a quick 30-minute mid-week refresh &mdash; or
            freeze the last 2-3 days and thaw overnight.
          </li>
          <li>
            <strong>Skipping protein.</strong> Protein keeps you full longer than
            carbs or fat. Every meal should have at least 20-25g. Without it,
            you&apos;ll be hungry between meals and snack your way past your calorie
            goal.
          </li>
        </ul>
      </div>

      {/* Personalized section */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Get a Personalized Weight Loss Meal Plan Every Week
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Knowing what to eat is one thing. Doing the math on portions, building a
          grocery list, and making sure it all fits your calorie target &mdash;
          that&apos;s the part that burns people out. It&apos;s not the cooking.
          It&apos;s the planning.
        </p>
        <p>
          What&apos;s For Dinner handles all of it. Set your{" "}
          <Link href="/meal-plans/meal-plan-for-weight-loss" className="text-orange-500 hover:text-orange-600 underline">weight loss goal</Link>,
          pick your dietary preferences, and you get a personalized meal plan with
          recipes and a grocery list every week. Calories are tracked per meal.
          Ingredients overlap so nothing gets wasted. And every recipe is designed
          to be{" "}
          <Link href="/meal-plans/meal-prep-meal-plan" className="text-orange-500 hover:text-orange-600 underline">meal-prep friendly</Link>.
        </p>
        <p>
          It&apos;s{" "}
          <Link
            href="/onboarding"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            $7.99/month
          </Link>{" "}
          &mdash; less than a single takeout order. If it saves you from even two
          impulse orders a month, it pays for itself and then some.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Your first week is free
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Set your calorie goal and preferences. Get a personalized meal plan with
          recipes and a grocery list &mdash; built for weight loss. $7.99/mo after
          your trial.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Preview Your Plan Free &rarr;
        </Link>
      </div>

      {/* Related articles + meal plans */}
      <div className="border-t border-stone-100 mt-12 pt-8">
        <p className="text-sm font-medium text-stone-400 mb-4">
          Related articles
        </p>
        <div className="space-y-3">
          <Link
            href="/blog/how-to-meal-prep"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            How to Meal Prep: A Complete Guide for Beginners
          </Link>
          <Link
            href="/blog/easy-meal-prep-for-beginners"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Easy Meal Prep for Beginners: Start Here
          </Link>
          <Link
            href="/blog/cheap-meals-for-one"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Cheap Meals for One: 15 Dinners Under $3/Serving
          </Link>
          <Link
            href="/blog/weekly-meal-plan"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Weekly Meal Plan: How to Plan a Full Week of Meals
          </Link>
          <Link
            href="/blog/eating-healthy-on-a-budget"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Eating Healthy on a Budget: $50/Week, No Sad Salads
          </Link>
        </div>
        <p className="text-sm font-medium text-stone-400 mt-6 mb-4">
          Browse meal plans
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/meal-plans/high-protein-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">High Protein</Link>
          <Link href="/meal-plans/meal-plan-for-weight-loss" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Weight Loss</Link>
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans/meal-prep-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Meal Prep</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
