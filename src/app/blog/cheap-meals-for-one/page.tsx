import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";
import { MealCardGrid, WeekPreviewCTA } from "@/components/blog/MealCard";

export const metadata: Metadata = {
  title: "Cheap Meals for One: 15 Dinners Under $3/Serving",
  description:
    "Eating alone doesn't mean eating sad. These 15 cheap dinner ideas cost under $3/serving, take under 30 minutes, and actually taste good. Plus a free weekly meal plan.",
  openGraph: {
    title: "Cheap Meals for One: 15 Dinners Under $3/Serving",
    description:
      "Eating alone doesn't mean eating sad. These 15 cheap dinner ideas cost under $3/serving, take under 30 minutes, and actually taste good. Plus a free weekly meal plan.",
    siteName: "What's For Dinner",
    type: "article",
    images: [{ url: `/api/og?title=Cheap%20Meals%20for%20One%3A%2015%20Dinners%20Under%20%243%2FServing&description=Eating%20alone%20doesn't%20mean%20eating%20sad.%20These%2015%20cheap%20dinner%20ideas%20cost%20under%20%243%2Fserving%2C%20take%20under%2030%20minutes%2C%20and%20actu`, width: 1200, height: 630 }],
    url: "https://whatsfordinner.fit/blog/cheap-meals-for-one",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheap Meals for One: 15 Dinners Under $3/Serving",
    description:
      "Eating alone doesn't mean eating sad. These 15 cheap dinner ideas cost under $3/serving, take under 30 minutes, and actually taste good.",
    images: ["/api/og?title=Cheap%20Meals%20for%20One%3A%2015%20Dinners%20Under%20%243%2FServing&description=Eating%20alone%20doesn't%20mean%20eating%20sad.%20These%2015%20cheap%20dinner%20ideas%20cost%20under%20%243%2Fserving%2C%20take%20under%2030%20minutes%2C%20and%20actu"],
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/cheap-meals-for-one",
  },
};

export default function CheapMealsForOneArticle() {
  return (
    <>
      <ArticleJsonLd
        title="Cheap Meals for One: 15 Dinners Under $3/Serving"
        description="Eating alone doesn't mean eating sad. These 15 cheap dinner ideas cost under $3/serving, take under 30 minutes, and actually taste good. Plus a free weekly meal plan."
        url="https://whatsfordinner.fit/blog/cheap-meals-for-one"
        datePublished="2026-03-13"
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
                name: "What's the cheapest meal to cook for one person?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cheapest meals for one person are rice and beans ($0.75/serving), egg fried rice ($1.00/serving), pasta with garlic and olive oil ($1.00/serving), and black bean quesadillas ($1.50/serving). All of these use pantry staples, take under 15 minutes, and taste better than they have any right to at that price.",
                },
              },
              {
                "@type": "Question",
                name: "How much should one person spend on groceries per week?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A single person can eat well on $35-75 per week depending on location and dietary preferences. With meal planning and cooking at home, $50/week covers breakfast, lunch, and dinner comfortably. The USDA's 'thrifty' food plan estimates about $55-65/week for one adult in 2026.",
                },
              },
              {
                "@type": "Question",
                name: "What should I cook when I'm broke?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Focus on cheap staples that stretch far: rice, pasta, eggs, canned beans, frozen vegetables, potatoes, and tortillas. These ingredients form the base of dozens of meals — fried rice, bean burritos, pasta with sauce, egg scrambles, baked potatoes, and quesadillas. Most of these meals cost $1-3 per serving and take under 20 minutes.",
                },
              },
              {
                "@type": "Question",
                name: "Is it cheaper to cook or eat out for one person?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cooking is dramatically cheaper. The average takeout meal costs $15-25 including delivery fees and tip. A home-cooked meal for one costs $2-5. Even if you only cook dinner 5 nights a week instead of ordering out, you save $50-100/week — that's $200-400/month or $2,400-4,800/year.",
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
          { name: "Cheap Meals for One", url: "https://whatsfordinner.fit/blog/cheap-meals-for-one" },
        ]}
      />
      <article className="blog-article">
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-xs text-stone-400">Updated March 2026</p>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        Cheap Meals for One: 15 Dinners Under $3
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          <Link href="/meal-plans/meal-plan-for-one" className="text-orange-500 underline">Cooking for one</Link> is weird. Every recipe serves four. Produce goes bad
          before you can eat it. And it&apos;s hard to motivate yourself to
          cook a &quot;real&quot; meal when it&apos;s just you. So you order
          a burrito for $12 instead, tell yourself it&apos;s fine, and do it
          again tomorrow.
        </p>
        <p>
          But $12 a meal times 30 days is $360 a month. On just dinner.
        </p>

        {/* Stat callout */}
        <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-4 my-6">
          <p className="text-2xl font-bold text-stone-800">$360/mo on takeout vs $35/week cooking</p>
          <p className="text-sm text-stone-500 mt-1">Same dinners. 90% less money. No delivery fees.</p>
        </div>

        <p>
          These 15 meals cost $1.50-3 per serving, take{" "}
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-orange-500 underline">under 30 minutes</Link>, and
          are genuinely good. Not &quot;good for the price&quot; &mdash;
          actually good. The kind of meals you&apos;d happily eat even if you
          had money to burn.
        </p>
      </div>

      {/* TL;DR box */}
      <div className="bg-stone-50 rounded-xl p-5 my-8">
        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">TL;DR</p>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>15 dinners that cost $1.50–3/serving and take under 30 minutes</li>
          <li>A full week of meals (breakfast, lunch, dinner) for ~$35</li>
          <li>How to stop wasting groceries when cooking for one</li>
        </ul>
      </div>

      {/* No-Cook / Assembly Meals */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        🥗 5 No-Cook &amp; Assembly Meals
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          These barely count as cooking. If you can open cans and use a
          microwave, you&apos;re qualified.
        </p>
        <MealCardGrid meals={[
          { name: "Black Bean Quesadillas", mealType: "dinner", prepTime: "8 min · $1.75", description: "Tortilla, canned black beans, shredded cheese. Fold, pan-fry until crispy. Add salsa if you're feeling fancy. Two quesadillas = a full meal.", tags: ["no-cook", "under-$2"] },
          { name: "Peanut Butter Banana Toast", mealType: "snack", prepTime: "3 min · $1.00", description: "Toast, peanut butter, sliced banana, drizzle of honey. Breakfast for dinner energy, zero shame required.", tags: ["no-cook", "under-$2"] },
          { name: "Tuna Salad Wrap", mealType: "lunch", prepTime: "5 min · $2.50", description: "Can of tuna, mayo, diced celery, salt and pepper. Wrap in a tortilla with lettuce. Protein-packed, no heat required.", tags: ["no-cook", "high-protein"] },
          { name: "Caprese-ish Sandwich", mealType: "lunch", prepTime: "5 min · $2.75", description: "Bread, mozzarella, tomato, olive oil, salt. Italian vibes without the restaurant prices. Add basil to feel like a chef.", tags: ["no-cook", "vegetarian"] },
          { name: "Microwave Loaded Potato", mealType: "dinner", prepTime: "10 min · $2.00", description: "Poke a potato, microwave 5-8 min, split open, load with canned chili or black beans, cheese, sour cream. A full meal from one potato.", tags: ["no-cook", "vegetarian"] },
        ]} />
      </div>

      {/* One-Pan Dinners */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        🍳 5 One-Pan Dinners
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          One pan, one burner, minimal cleanup. These are the meals that make
          you feel like you actually cooked something.
        </p>
        <MealCardGrid meals={[
          { name: "Garlic Butter Pasta", mealType: "dinner", prepTime: "15 min · $1.50", description: "Boil pasta, melt butter with garlic, toss together with parmesan and red pepper flakes. The meal that proves expensive doesn't mean good.", tags: ["one-pan", "vegetarian"] },
          { name: "Egg Fried Rice", mealType: "dinner", prepTime: "12 min · $1.00", description: "Leftover rice, scramble eggs into it, add frozen peas, soy sauce, sesame oil. Better than takeout fried rice and it costs a dollar.", tags: ["one-pan", "under-$2"] },
          { name: "Chicken Quesadillas", mealType: "dinner", prepTime: "12 min · $2.50", description: "Shredded chicken (or canned), loaded into a tortilla with cheese and hot sauce. Pan-fry both sides until golden.", tags: ["one-pan", "high-protein"] },
          { name: "Sausage and Peppers", mealType: "dinner", prepTime: "20 min · $3.00", description: "Sliced sausage and bell pepper cooked in olive oil until browned. Serve on rice or in a hoagie roll. Hearty and satisfying.", tags: ["one-pan", "high-protein"] },
          { name: "Black Bean Tacos", mealType: "dinner", prepTime: "10 min · $1.75", description: "Canned black beans heated with cumin and chili powder, spooned into tortillas. Three tacos and you're full for under two dollars.", tags: ["one-pan", "under-$2"] },
        ]} />
      </div>

      {/* Slow Cooker / Dump Meals */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        🫕 5 Set-It-and-Forget-It Meals
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          These meals cook themselves while you do literally anything else.
          Slow cooker, oven, or stovetop on low &mdash; dump everything in and
          come back later.
        </p>
        <MealCardGrid meals={[
          { name: "Chili", mealType: "dinner", prepTime: "10 min prep + 30 min · $2.00", description: "Kidney beans, diced tomatoes, ground beef or turkey, chili powder, cumin. Simmer or slow cook. Makes 4 servings — you're eating for days.", tags: ["batch-cook", "freezer-friendly"] },
          { name: "Baked Chicken Thighs with Rice", mealType: "dinner", prepTime: "10 min prep + 30 min oven · $2.50", description: "Season chicken thighs with salt, pepper, garlic powder, paprika. Bake at 400°F. Serve over rice with frozen broccoli.", tags: ["high-protein", "meal-prep"] },
          { name: "Pasta e Fagioli", mealType: "dinner", prepTime: "25 min · $1.75", description: "Italian bean soup with pasta. Sauté garlic, add white beans, tomatoes, broth, small pasta. Crusty bread on the side if you're splurging.", tags: ["one-pot", "vegetarian"] },
          { name: "Lentil Soup", mealType: "dinner", prepTime: "10 min prep + 30 min · $1.50", description: "Dried lentils are stupidly cheap and cook in 30 min without soaking. Add broth, tomatoes, cumin, and whatever vegetables are dying in your fridge.", tags: ["batch-cook", "under-$2"] },
          { name: "Sheet Pan Sausage & Vegetables", mealType: "dinner", prepTime: "10 min prep + 25 min oven · $2.75", description: "Sliced sausage, cubed potatoes, broccoli or zucchini. Toss with olive oil and seasoning, bake at 400°F. One pan, one meal, one dish to wash.", tags: ["sheet-pan", "high-protein"] },
        ]} />
      </div>

      {/* The single-person grocery problem */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The Single-Person Grocery Problem
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          The annoying reality of cooking for one: recipes are portioned for
          four, produce spoils before you use it, and buying small quantities
          costs more per unit. Here&apos;s how to deal with it:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>Buy frozen vegetables.</strong> They&apos;re cheaper than
            fresh, they don&apos;t go bad, and they&apos;re already chopped.
            Frozen broccoli, stir-fry mix, peas, and corn are your best friends.
          </li>
          <li>
            <strong>Use the same ingredients across meals.</strong> Chicken
            thighs show up in quesadillas, grain bowls, and sheet pan dinners.
            Black beans go in tacos, quesadillas, and baked potatoes. When
            ingredients overlap, nothing gets wasted.
          </li>
          <li>
            <strong>Embrace leftovers.</strong> Cook for two (or four) on
            purpose and eat the rest for lunch or tomorrow&apos;s dinner. Chili,
            soup, and pasta all taste better the next day anyway.
          </li>
          <li>
            <strong>Canned goods are your pantry backbone.</strong> Beans,
            tomatoes, tuna, corn &mdash; they&apos;re shelf-stable, cheap, and
            ready to use. No prep, no waste, no rush to eat them before they
            expire.
          </li>
        </ul>

        {/* Pro tip callout */}
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 my-6">
          <p className="text-sm font-semibold text-amber-800">Pro tip</p>
          <p className="text-sm text-amber-700 mt-1">Buy a bag of frozen stir-fry vegetables and a bag of frozen broccoli. That&apos;s $5 worth of vegetables that last a month, never go bad, and work in almost every recipe on this list.</p>
        </div>
      </div>

      {/* A full week for $35 */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        A Full Week of Meals for $35
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Here&apos;s what a week looks like using meals from the list above,
          including breakfast and lunch:
        </p>
        <WeekPreviewCTA
          days={[
            { day: "Monday", meals: [
              { mealType: "breakfast", name: "Eggs + Toast", prepTime: "5 min" },
              { mealType: "lunch", name: "PB&J Sandwich", prepTime: "3 min" },
              { mealType: "dinner", name: "Garlic Butter Pasta", prepTime: "15 min", calories: "$1.50" },
            ]},
            { day: "Tuesday", meals: [
              { mealType: "breakfast", name: "Oatmeal + Banana", prepTime: "5 min" },
              { mealType: "lunch", name: "Leftover Pasta", prepTime: "2 min" },
              { mealType: "dinner", name: "Black Bean Tacos", prepTime: "10 min", calories: "$1.75" },
            ]},
            { day: "Wednesday", meals: [
              { mealType: "breakfast", name: "Eggs + Toast", prepTime: "5 min" },
              { mealType: "lunch", name: "Tuna Salad Wrap", prepTime: "5 min", calories: "$2.50" },
              { mealType: "dinner", name: "Chili", prepTime: "30 min", calories: "$2.00" },
            ]},
            { day: "Thursday", meals: [
              { mealType: "breakfast", name: "PB Banana Toast", prepTime: "3 min" },
              { mealType: "lunch", name: "Leftover Chili", prepTime: "2 min" },
              { mealType: "dinner", name: "Egg Fried Rice", prepTime: "12 min", calories: "$1.00" },
            ]},
          ]}
          groceryItems={[
            "Eggs (1 dozen)", "Bread (1 loaf)", "Pasta (1 lb)", "Canned black beans (2)",
            "Tortillas (10 pack)", "Shredded cheese", "Canned tuna (2)", "Oatmeal",
            "Bananas", "Peanut butter", "Butter", "Garlic", "Frozen peas",
          ]}
        />

        {/* Stat callout */}
        <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-4 my-6">
          <p className="text-2xl font-bold text-stone-800">$35/week &mdash; less than 2 DoorDash orders</p>
          <p className="text-sm text-stone-500 mt-1">Breakfast, lunch, and dinner. All week. For one person.</p>
        </div>

        <p>
          Total dinner cost: about $12.25 for the week. Add simple breakfasts
          (eggs, oatmeal, toast, PB) and lunches (leftovers + sandwiches) and
          you&apos;re looking at roughly $30-40 for the entire week with a{" "}
          <Link href="/meal-plans/meal-plan-on-a-budget" className="text-orange-500 underline">budget meal plan</Link>. That&apos;s
          less than two DoorDash orders.
        </p>
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Want a personalized cheap meal plan?
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Tell us your budget and preferences. We&apos;ll generate a week of
          meals with recipes and a grocery list &mdash; optimized for your
          wallet.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try Free &rarr;
        </Link>
      </div>

      {/* Get a personalized cheap meal plan */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Get a Personalized Cheap Meal Plan Every Week
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Finding recipes, adjusting portions for one, building a grocery list
          that doesn&apos;t leave you with rotting vegetables &mdash; this is the
          annoying part of cooking solo. It&apos;s not the cooking itself. It&apos;s
          the planning.
        </p>
        <p>
          What&apos;s For Dinner handles all of it. Set your budget, tell it
          you&apos;re cooking for one, pick your dietary preferences, and you
          get a{" "}
          <Link
            href="/blog/meal-plan-with-grocery-list"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            personalized meal plan with recipes and a grocery list
          </Link>{" "}
          every week. Portions are sized for one person. Ingredients overlap
          across meals so nothing goes to waste. And the recipes are all under
          30 minutes.
        </p>
        <p>
          It&apos;s{" "}
          <Link
            href="/onboarding"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            $7.99/month
          </Link>{" "}
          &mdash; which is less than a single takeout order. If it saves you
          even two delivery orders a month, it pays for itself 3x over.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Your first week is free
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Set your budget and preferences. Get a personalized meal plan with
          recipes and a grocery list &mdash; portioned for one. $7.99/mo after
          your trial.
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
            href="/blog/meal-planning-for-beginners"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Planning for Beginners: The Complete Guide (2026)
          </Link>
          <Link
            href="/blog/save-money-groceries-meal-planning"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            How to Save Money on Groceries with Meal Planning
          </Link>
          <Link
            href="/blog/best-meal-planning-apps"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            10 Best Meal Planning Apps in 2026 (Compared)
          </Link>
          <Link
            href="/blog/eating-healthy-on-a-budget"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Eating Healthy on a Budget: $50/Week, No Sad Salads
          </Link>
          <Link
            href="/blog/cooking-for-one-without-wasting-food"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Cooking for One Without Wasting Half Your Groceries
          </Link>
        </div>
        <p className="text-sm font-medium text-stone-400 mt-6 mb-4">
          Browse meal plans
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/meal-plans/meal-plan-on-a-budget" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Budget</Link>
          <Link href="/meal-plans/meal-plan-for-one" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">For One</Link>
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
