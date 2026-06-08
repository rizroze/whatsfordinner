import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";
import { MealCardGrid, WeekPreviewCTA } from "@/components/blog/MealCard";

export const metadata: Metadata = {
  title: "What Should I Make for Dinner? 20 Ideas Based on What You Have",
  description:
    "It's 6pm and you're hungry. These 20 dinner ideas are organized by what's already in your fridge — chicken, pasta, eggs, ground beef, or literally nothing. All under 25 minutes.",
  openGraph: {
    title: "What Should I Make for Dinner? 20 Ideas Based on What You Have",
    description:
      "It's 6pm and you're hungry. These 20 dinner ideas are organized by what's already in your fridge — chicken, pasta, eggs, ground beef, or literally nothing. All under 25 minutes.",
    siteName: "What's For Dinner",
    type: "article",
    images: [{ url: `/api/og?title=What%20Should%20I%20Make%20for%20Dinner%3F%2020%20Ideas%20Based%20on%20What%20You%20Have&description=It's%206pm%20and%20you're%20hungry.%20These%2020%20dinner%20ideas%20are%20organized%20by%20what's%20already%20in%20your%20fridge%20%E2%80%94%20chicken%2C%20pasta%2C%20eggs%2C`, width: 1200, height: 630 }],
    url: "https://whatsfordinner.fit/blog/dinner-ideas-tonight",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Should I Make for Dinner? 20 Ideas Based on What You Have",
    description:
      "It's 6pm and you're hungry. 20 dinner ideas organized by what's in your fridge. All under 25 minutes.",
    images: ["/api/og?title=What%20Should%20I%20Make%20for%20Dinner%3F%2020%20Ideas%20Based%20on%20What%20You%20Have&description=It's%206pm%20and%20you're%20hungry.%20These%2020%20dinner%20ideas%20are%20organized%20by%20what's%20already%20in%20your%20fridge%20%E2%80%94%20chicken%2C%20pasta%2C%20eggs%2C"],
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/dinner-ideas-tonight",
  },
};

export default function DinnerIdeasTonightArticle() {
  return (
    <>
      <ArticleJsonLd
        title="What Should I Make for Dinner? 20 Ideas Based on What You Have"
        description="It's 6pm and you're hungry. These 20 dinner ideas are organized by what's already in your fridge — chicken, pasta, eggs, ground beef, or literally nothing. All under 25 minutes."
        url="https://whatsfordinner.fit/blog/dinner-ideas-tonight"
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
                name: "What should I make for dinner with no plan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Check what protein you have — chicken, eggs, ground beef, or even canned tuna. Then pick a 15-minute recipe around it. Stir-fries, quesadillas, pasta dishes, and fried rice all work with whatever you have. If you truly have nothing, pantry staples like pasta, canned beans, and rice can make a full meal in under 20 minutes.",
                },
              },
              {
                "@type": "Question",
                name: "What's the fastest dinner I can make at home?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Scrambled eggs with toast takes 5 minutes. Quesadillas take 8 minutes. Garlic butter pasta takes 12 minutes. Egg fried rice takes 10 minutes. All of these are faster than any delivery app and cost under $3.",
                },
              },
              {
                "@type": "Question",
                name: "What can I cook when I have nothing in the fridge?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If you have pasta, rice, canned beans, or eggs, you have dinner. Aglio e olio (garlic pasta) needs just pasta, garlic, olive oil, and red pepper flakes. Rice and beans is a complete protein for under $1. Canned bean tacos with hot sauce take 10 minutes. Check your pantry before you check DoorDash.",
                },
              },
              {
                "@type": "Question",
                name: "How do I stop asking 'what's for dinner' every night?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Meal planning eliminates the daily decision entirely. When you plan your week in advance, you already know what's for dinner before you get hungry. AI meal planners like What's For Dinner generate a personalized weekly plan with recipes and a grocery list so you never have to think about it.",
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
          { name: "Dinner Ideas Tonight", url: "https://whatsfordinner.fit/blog/dinner-ideas-tonight" },
        ]}
      />
      <article className="blog-article">
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-xs text-stone-400">Updated March 2026</p>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        What Should I Make for Dinner? 20 Ideas Based on What You Have
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          It&apos;s 6pm. You&apos;re hungry. You open the fridge, stare at it
          for 30 seconds, close it, and open DoorDash. This article is faster
          than delivery.
        </p>
        <p>
          Every recipe below takes <strong>under 25 minutes</strong> and uses
          stuff you probably already have. Pick the section that matches
          what&apos;s in your kitchen right now.
        </p>
      </div>

      {/* TL;DR box */}
      <div className="bg-stone-50 rounded-xl p-5 my-8">
        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">TL;DR</p>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>20 dinner ideas organized by what&apos;s in your fridge right now</li>
          <li>Every meal takes under 25 minutes &mdash; most under 15</li>
          <li>Chicken, pasta, eggs, ground beef, or literally nothing &mdash; we&apos;ve got you</li>
          <li>Skip the nightly &quot;what should I make?&quot; forever with a{" "}
            <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-orange-500 underline">weekly meal plan</Link>
          </li>
        </ul>
      </div>

      {/* Section 1: Chicken */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        If You Have Chicken
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Chicken breast, chicken thighs, even leftover rotisserie chicken.
          Any of these work.
        </p>
        <MealCardGrid meals={[
          { name: "Chicken Quesadillas", mealType: "dinner", prepTime: "10 min", description: "Shredded or diced chicken, cheese, tortilla. Pan-fry until golden on both sides. Add salsa, sour cream, done. The fastest way to turn leftover chicken into a meal.", tags: ["quick", "under-15-min"] },
          { name: "Chicken Stir-Fry", mealType: "dinner", prepTime: "15 min", description: "Sliced chicken, whatever vegetables you have (frozen works great), soy sauce, garlic. Serve over rice if you have it, eat it straight if you don't.", tags: ["quick", "high-protein"] },
          { name: "Chicken Caesar Wrap", mealType: "dinner", prepTime: "8 min", description: "Sliced chicken, romaine, parmesan, Caesar dressing, wrapped in a tortilla. No cooking required if you're using leftover chicken.", tags: ["no-cook", "high-protein"] },
          { name: "One-Pan Lemon Chicken", mealType: "dinner", prepTime: "20 min", description: "Season chicken thighs with lemon juice, garlic, salt, pepper. Pan-sear 8 min per side. Squeeze more lemon on top. Restaurant-quality in one pan.", tags: ["one-pan", "high-protein"] },
        ]} />
      </div>

      {/* Section 2: Pasta */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        If You Have Pasta
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          A box of pasta is a box of possibilities. Every one of these
          is a complete dinner.
        </p>
        <MealCardGrid meals={[
          { name: "Aglio e Olio", mealType: "dinner", prepTime: "12 min", description: "Pasta, garlic, olive oil, red pepper flakes, parmesan. That's it. An Italian classic that costs about $1.50 and tastes like you know what you're doing.", tags: ["quick", "under-$2"] },
          { name: "Butter Parmesan Pasta", mealType: "dinner", prepTime: "12 min", description: "Boil pasta, drain, toss with butter and a mountain of parmesan. Add black pepper. Embarrassingly simple, embarrassingly good.", tags: ["quick", "under-$2"] },
          { name: "Pasta with Canned Tomatoes", mealType: "dinner", prepTime: "18 min", description: "Saut&eacute; garlic in olive oil, add a can of crushed tomatoes, salt, basil (dried is fine). Simmer 10 min while pasta boils. Better than most jarred sauces.", tags: ["pantry", "vegetarian"] },
          { name: "Tuna Pasta", mealType: "dinner", prepTime: "15 min", description: "Boil pasta, drain, toss with canned tuna, olive oil, lemon juice, capers or olives if you have them. A Mediterranean pantry dinner that actually slaps.", tags: ["pantry", "high-protein"] },
        ]} />
      </div>

      {/* Section 3: Eggs */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        If You Have Eggs
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Eggs are the ultimate &quot;I have nothing&quot; dinner. Cheap,
          fast, packed with protein, and endlessly flexible.
        </p>
        <MealCardGrid meals={[
          { name: "Egg Fried Rice", mealType: "dinner", prepTime: "10 min", description: "Leftover rice (or microwave a packet), scramble eggs into it, add soy sauce, sesame oil, frozen peas. Better than takeout and ready in 10 minutes flat.", tags: ["quick", "under-$2"] },
          { name: "Shakshuka", mealType: "dinner", prepTime: "20 min", description: "Canned tomatoes simmered with cumin, paprika, garlic. Crack eggs directly into the sauce, cover, cook until set. Eat with bread. Impressive for zero effort.", tags: ["one-pan", "vegetarian"] },
          { name: "Breakfast-for-Dinner Scramble", mealType: "dinner", prepTime: "8 min", description: "Scramble 3 eggs with whatever you have &mdash; cheese, leftover vegetables, ham, hot sauce. Serve with toast. No rules, no judgment.", tags: ["quick", "under-$2"] },
          { name: "Egg Drop Soup", mealType: "dinner", prepTime: "10 min", description: "Bring broth to a boil, drizzle in beaten eggs while stirring, add soy sauce and green onions. Comforting, warm, and done before the delivery driver even accepts your order.", tags: ["quick", "under-$2"] },
        ]} />
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Tired of this question every single night?
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Get a personalized weekly meal plan with recipes and a grocery list
          &mdash; so you never have to wonder what&apos;s for dinner again.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try Free &rarr;
        </Link>
      </div>

      {/* Section 4: Ground Beef */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        If You Have Ground Beef
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Ground beef cooks fast, stretches far, and works in basically
          everything. These are all one-pan situations.
        </p>
        <MealCardGrid meals={[
          { name: "Beef Tacos", mealType: "dinner", prepTime: "15 min", description: "Brown ground beef, add taco seasoning (or just cumin + chili powder + garlic), spoon into tortillas. Top with whatever's in the fridge. Three tacos, done.", tags: ["quick", "high-protein"] },
          { name: "Cheeseburger Skillet", mealType: "dinner", prepTime: "15 min", description: "Brown ground beef with onion, stir in mustard, ketchup, pickles, and cheese. Eat with bread or over rice. All the burger flavor, no grill required.", tags: ["one-pan", "high-protein"] },
          { name: "Beef and Rice Bowl", mealType: "dinner", prepTime: "18 min", description: "Saut&eacute; ground beef with garlic and soy sauce. Serve over rice with a fried egg on top and sriracha. Korean-inspired and dead simple.", tags: ["quick", "high-protein"] },
          { name: "Sloppy Joes", mealType: "dinner", prepTime: "20 min", description: "Brown ground beef, add tomato sauce, Worcestershire, brown sugar, mustard. Simmer 10 min, pile onto buns. Messy, satisfying, nostalgic.", tags: ["quick", "comfort-food"] },
        ]} />
      </div>

      {/* Section 5: Literally Nothing */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        If You Have Literally Nothing
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Your fridge is empty but your pantry isn&apos;t. Canned goods,
          rice, pasta, and spices can make a real dinner. Check the{" "}
          <Link href="/blog/what-to-cook-when-you-have-nothing" className="text-orange-500 underline">full pantry cooking guide</Link>{" "}
          for more ideas.
        </p>
        <MealCardGrid meals={[
          { name: "Rice and Beans", mealType: "dinner", prepTime: "20 min", description: "Canned beans (any kind), rice, cumin, garlic powder, hot sauce. A complete protein for under $1. Half the world eats this daily for a reason.", tags: ["pantry", "under-$2"] },
          { name: "Garlic Noodles", mealType: "dinner", prepTime: "12 min", description: "Any noodles or pasta, butter, soy sauce, garlic, red pepper flakes. Sweet, savory, spicy. Pure pantry magic.", tags: ["pantry", "under-$2"] },
          { name: "Canned Soup Upgrade", mealType: "dinner", prepTime: "10 min", description: "Heat canned soup, add a handful of pasta or rice to bulk it up. Stir in hot sauce, a squeeze of lemon, or a drizzle of olive oil. Turns $1.50 soup into a real meal.", tags: ["pantry", "under-$2"] },
          { name: "Bean and Cheese Burritos", mealType: "dinner", prepTime: "10 min", description: "Canned refried beans, shredded cheese, tortilla. Microwave or pan-fry. Add hot sauce. Two of these and you&apos;re full for under $2.", tags: ["pantry", "under-$2"] },
        ]} />
      </div>

      {/* Never ask again section */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Never Ask &quot;What&apos;s For Dinner?&quot; Again
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          You found this article because you were hungry and didn&apos;t
          have a plan. That happens to everyone. But it doesn&apos;t have
          to happen every night.
        </p>
        <p>
          <Link href="/blog/weekly-meal-plan" className="text-orange-500 underline">Weekly meal planning</Link>{" "}
          eliminates the 6pm panic entirely. When you already know what&apos;s
          for dinner &mdash; and you already have the ingredients &mdash; cooking
          takes 20 minutes instead of 45 minutes of scrolling recipes plus
          a last-minute grocery run.
        </p>
        <p>
          Here&apos;s what a planned week looks like:
        </p>
        <WeekPreviewCTA
          days={[
            { day: "Monday", meals: [
              { mealType: "breakfast", name: "Oatmeal + Banana", prepTime: "5 min" },
              { mealType: "lunch", name: "Turkey Wrap", prepTime: "5 min" },
              { mealType: "dinner", name: "Chicken Stir-Fry", prepTime: "15 min" },
            ]},
            { day: "Tuesday", meals: [
              { mealType: "breakfast", name: "Eggs + Toast", prepTime: "5 min" },
              { mealType: "lunch", name: "Leftover Stir-Fry", prepTime: "2 min" },
              { mealType: "dinner", name: "Beef Tacos", prepTime: "15 min" },
            ]},
            { day: "Wednesday", meals: [
              { mealType: "breakfast", name: "Yogurt + Granola", prepTime: "3 min" },
              { mealType: "lunch", name: "Tuna Wrap", prepTime: "5 min" },
              { mealType: "dinner", name: "Aglio e Olio", prepTime: "12 min" },
            ]},
            { day: "Thursday", meals: [
              { mealType: "breakfast", name: "PB Banana Toast", prepTime: "3 min" },
              { mealType: "lunch", name: "Bean Burrito", prepTime: "5 min" },
              { mealType: "dinner", name: "Shakshuka + Bread", prepTime: "20 min" },
            ]},
          ]}
          groceryItems={[
            "Chicken breast (1 lb)", "Ground beef (1 lb)", "Eggs (1 dozen)", "Tortillas (10 pack)",
            "Pasta (1 lb)", "Rice (1 bag)", "Canned tomatoes (2)", "Canned beans (2)",
            "Shredded cheese", "Soy sauce", "Garlic", "Onion", "Frozen vegetables",
          ]}
        />

        <p>
          Every meal planned. Every ingredient on one list. No 6pm panic.
          That&apos;s{" "}
          <Link
            href="/onboarding"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            what the tool does
          </Link>{" "}
          &mdash; a personalized weekly meal plan with recipes and a grocery
          list, generated for your preferences and household size. $7.99/month,
          less than a single DoorDash order.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Your first week is free
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Tell us what you like, how many people you&apos;re feeding, and your
          budget. Get a personalized meal plan with recipes and a grocery list
          &mdash; ready in 30 seconds.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Start Your Free Plan &rarr;
        </Link>
      </div>

      {/* FAQs */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        FAQs
      </h2>
      <div className="space-y-6 text-stone-600 leading-relaxed">
        <div>
          <p className="font-medium text-stone-800">What should I make for dinner with no plan?</p>
          <p className="mt-1">Check what protein you have and build around it. Chicken goes into quesadillas or stir-fry. Eggs become fried rice or shakshuka. Ground beef makes tacos in 15 minutes. If you have nothing, pasta with garlic and olive oil is 12 minutes away.</p>
        </div>
        <div>
          <p className="font-medium text-stone-800">What&apos;s the fastest dinner I can make at home?</p>
          <p className="mt-1">Scrambled eggs with toast: 5 minutes. Quesadillas: 8 minutes. Egg fried rice: 10 minutes. All faster than any delivery app.</p>
        </div>
        <div>
          <p className="font-medium text-stone-800">What can I cook when I have nothing in the fridge?</p>
          <p className="mt-1">Your pantry has more than you think. Rice and beans, garlic noodles, canned soup with added pasta, or bean burritos &mdash; all under $2 and under 20 minutes. See our full{" "}
            <Link href="/blog/what-to-cook-when-you-have-nothing" className="text-orange-500 underline">pantry cooking guide</Link>.
          </p>
        </div>
        <div>
          <p className="font-medium text-stone-800">How do I stop asking &quot;what&apos;s for dinner?&quot; every night?</p>
          <p className="mt-1">Meal planning. When you plan your week in advance, the decision is already made before you get hungry. AI meal planners like{" "}
            <Link href="/onboarding" className="text-orange-500 underline">What&apos;s For Dinner</Link>{" "}
            generate a personalized plan with recipes and a grocery list so you never have to think about it.
          </p>
        </div>
      </div>

      {/* Related articles + meal plans */}
      <div className="border-t border-stone-100 mt-12 pt-8">
        <p className="text-sm font-medium text-stone-400 mb-4">
          Related articles
        </p>
        <div className="space-y-3">
          <Link
            href="/blog/what-to-cook-when-you-have-nothing"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            What to Cook When You Have &apos;Nothing&apos; in the Fridge
          </Link>
          <Link
            href="/blog/cheap-meals-for-one"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Cheap Meals for One: 15 Dinners Under $3/Serving
          </Link>
          <Link
            href="/blog/30-minute-dinners"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            20 Easy 30-Minute Dinners (That Don&apos;t Taste Like Shortcuts)
          </Link>
          <Link
            href="/blog/5-ingredient-meals"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            15 Easy 5-Ingredient Dinners (Under 30 Minutes)
          </Link>
          <Link
            href="/blog/weekly-meal-plan"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Weekly Meal Plan: How to Plan Your Entire Week in 10 Minutes
          </Link>
        </div>
        <p className="text-sm font-medium text-stone-400 mt-6 mb-4">
          Browse meal plans
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans/5-ingredient-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">5-Ingredient</Link>
          <Link href="/meal-plans/meal-plan-for-one" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">For One</Link>
          <Link href="/meal-plans/italian" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Italian</Link>
          <Link href="/meal-plans/meal-plan-on-a-budget" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Budget</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
