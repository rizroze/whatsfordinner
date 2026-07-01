import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";
import { MealCardGrid, WeekPreviewCTA } from "@/components/blog/MealCard";

export const metadata: Metadata = {
  title: "The Only Grocery List Template You Need (+ Free Generator)",
  description:
    "Stop writing random grocery lists. This store-section template matches your meals to your list automatically. Free weekly grocery list generator included.",
  openGraph: {
    title: "The Only Grocery List Template You Need (+ Free Generator)",
    description:
      "Stop writing random grocery lists. This store-section template matches your meals to your list automatically. Free weekly grocery list generator included.",
    siteName: "What's For Dinner",
    type: "article",
    images: [{ url: `/api/og?title=The%20Only%20Grocery%20List%20Template%20You%20Need%20(%2B%20Free%20Generator)&description=Stop%20writing%20random%20grocery%20lists.%20This%20store-section%20template%20matches%20your%20meals%20to%20your%20list%20automatically.%20Free%20weekl`, width: 1200, height: 630 }],
    url: "https://whatsfordinner.fit/blog/grocery-list-template",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Only Grocery List Template You Need (+ Free Generator)",
    description:
      "Stop writing random grocery lists. This store-section template matches your meals to your list automatically.",
    images: ["/api/og?title=The%20Only%20Grocery%20List%20Template%20You%20Need%20(%2B%20Free%20Generator)&description=Stop%20writing%20random%20grocery%20lists.%20This%20store-section%20template%20matches%20your%20meals%20to%20your%20list%20automatically.%20Free%20weekl"],
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/grocery-list-template",
  },
};

export default function GroceryListTemplateArticle() {
  return (
    <>
      <ArticleJsonLd
        title="The Only Grocery List Template You Need (+ Free Generator)"
        description="Stop writing random grocery lists. This store-section template matches your meals to your list automatically. Free weekly grocery list generator included."
        url="https://whatsfordinner.fit/blog/grocery-list-template"
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
                name: "What should be on a basic grocery list?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A basic grocery list should cover six store sections: Produce (fruits, vegetables, herbs), Protein (chicken, ground beef, eggs, tofu), Dairy (milk, cheese, yogurt, butter), Pantry (rice, pasta, canned beans, oils, spices), Frozen (vegetables, fruit, pre-made items), and Bakery (bread, tortillas, rolls). Organizing by section means you walk through the store once without backtracking.",
                },
              },
              {
                "@type": "Question",
                name: "How do I make a weekly grocery list from a meal plan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Start by listing every ingredient from your weekly meal plan. Then combine duplicates (if three recipes call for onions, you just need a bag of onions, not three). Group by store section so you can shop efficiently. Finally, check your pantry and cross off anything you already have. Tools like What's For Dinner generate this list automatically from your meal plan.",
                },
              },
              {
                "@type": "Question",
                name: "How much should a weekly grocery list cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For one person, a well-planned weekly grocery list costs $40-75 depending on location and dietary preferences. For a family of four, expect $100-200 per week. Families that shop with a meal-plan-matched grocery list typically save 20-25% compared to shopping without a plan, because they buy only what they need and waste less food.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a free grocery list generator?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. What's For Dinner generates a personalized grocery list automatically when it creates your weekly meal plan. You tell it your dietary preferences, household size, and budget. It generates a full week of meals with recipes, then builds a matching grocery list organized by store section. The first plan is free.",
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
          { name: "Grocery List Template", url: "https://whatsfordinner.fit/blog/grocery-list-template" },
        ]}
      />
      <article className="blog-article">
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-xs text-stone-400">Updated March 2026</p>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        The Only Grocery List Template You Need (+ Free Generator)
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Most grocery lists are random. You walk through the store adding
          whatever looks good, forget half the things you actually need, and
          come home with ingredients that don&apos;t make a single complete
          meal. A bag of spinach that wilts in three days. A block of cheese
          with no plan for it. Chicken thighs that sit in the fridge until
          you throw them out.
        </p>
        <p>
          A real{" "}
          <Link href="/blog/meal-plan-with-grocery-list" className="text-orange-500 underline">
            grocery list starts with a meal plan
          </Link>. When you know what you&apos;re cooking, you know exactly
          what to buy &mdash; and nothing else.
        </p>
      </div>

      {/* TL;DR box */}
      <div className="bg-stone-50 rounded-xl p-5 my-8">
        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">TL;DR</p>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>A grocery list template organized by store section (so you shop once, no backtracking)</li>
          <li>A sample week of meals with the matching auto-generated grocery list</li>
          <li>5 meals you can make from a single, efficient grocery run</li>
          <li>A free tool that builds your grocery list from your meal plan automatically</li>
        </ul>
      </div>

      {/* Section 1: Why Most Grocery Lists Don't Work */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Why Most Grocery Lists Don&apos;t Work
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          The typical grocery list is a brain dump. You write down whatever
          you remember needing, in no particular order, with no connection
          to actual meals. Then you get to the store and three things happen:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>Organized by impulse, not by store section.</strong> You
            zigzag from produce to dairy to produce again because your list
            has &quot;bananas&quot; on line 1 and &quot;avocados&quot; on line 15.
            Every backtrack costs you time and willpower.
          </li>
          <li>
            <strong>No connection to actual meals.</strong> You buy
            ingredients that sound good in isolation but don&apos;t combine
            into anything. Tuesday night you stare at a fridge full of food
            and still order takeout because nothing goes together.
          </li>
          <li>
            <strong>Missing quantities.</strong> &quot;Chicken&quot; on your
            list could mean one breast or five pounds. Without knowing
            how many meals you&apos;re making and how many servings each needs,
            you either overbuy and waste food or underbuy and run out
            mid-week.
          </li>
        </ul>
        <p>
          The fix isn&apos;t a prettier list. It&apos;s a list that&apos;s
          built backward from a plan &mdash; starting with the meals, then
          extracting exactly the ingredients you need, organized so you can
          walk the store in one pass.
        </p>
      </div>

      {/* Section 2: The Template */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The Template: Organized by Store Section
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          This is the structure. Every item goes into one of six categories
          that match the way most grocery stores are laid out. Walk in, start
          at produce, work your way through, and you&apos;re done.
        </p>

        {/* Store section template */}
        <div className="grid gap-3 my-6">
          <div className="bg-green-50 border border-green-100 rounded-xl p-4">
            <p className="text-sm font-semibold text-green-800 mb-2">Produce</p>
            <p className="text-sm text-green-700">Onions (3) &middot; Garlic (1 head) &middot; Bell peppers (3) &middot; Broccoli (2 crowns) &middot; Spinach (1 bag) &middot; Bananas (1 bunch) &middot; Lemons (2) &middot; Fresh herbs</p>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-xl p-4">
            <p className="text-sm font-semibold text-red-800 mb-2">Protein</p>
            <p className="text-sm text-red-700">Chicken thighs (2 lbs) &middot; Ground beef (1 lb) &middot; Eggs (1 dozen) &middot; Canned black beans (3) &middot; Canned tuna (2)</p>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
            <p className="text-sm font-semibold text-blue-800 mb-2">Dairy</p>
            <p className="text-sm text-blue-700">Shredded cheese (1 bag) &middot; Butter (1 stick) &middot; Greek yogurt (1 tub) &middot; Milk (1/2 gallon)</p>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
            <p className="text-sm font-semibold text-amber-800 mb-2">Pantry</p>
            <p className="text-sm text-amber-700">Rice (2 lbs) &middot; Pasta (1 lb) &middot; Olive oil &middot; Soy sauce &middot; Canned diced tomatoes (2) &middot; Chicken broth (1 carton) &middot; Tortillas (10 pack) &middot; Spices (cumin, paprika, chili powder)</p>
          </div>
          <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-4">
            <p className="text-sm font-semibold text-cyan-800 mb-2">Frozen</p>
            <p className="text-sm text-cyan-700">Frozen stir-fry vegetables (1 bag) &middot; Frozen broccoli (1 bag) &middot; Frozen corn (1 bag)</p>
          </div>
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
            <p className="text-sm font-semibold text-orange-800 mb-2">Bakery</p>
            <p className="text-sm text-orange-700">Whole wheat bread (1 loaf) &middot; Hamburger buns (4 pack)</p>
          </div>
        </div>

        <p>
          Notice the quantities. Not just &quot;chicken&quot; &mdash; but
          &quot;chicken thighs (2 lbs)&quot; because the plan calls for
          two recipes that each need a pound. Every item is there for a
          reason, tied to a specific meal later in the week.
        </p>
      </div>

      {/* Section 3: A Week of Meals + Matching Grocery List */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        A Week of Meals + The Matching Grocery List
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          This is what it looks like when your meal plan and grocery list
          are connected. Every ingredient on the right comes from the meals
          on the left. Nothing extra, nothing missing.
        </p>
        <WeekPreviewCTA
          days={[
            { day: "Monday", meals: [
              { mealType: "breakfast", name: "Greek Yogurt + Banana", prepTime: "3 min" },
              { mealType: "lunch", name: "Chicken Rice Bowl", prepTime: "10 min" },
              { mealType: "dinner", name: "One-Pan Chicken Fajitas", prepTime: "25 min", calories: "$3.50" },
            ]},
            { day: "Tuesday", meals: [
              { mealType: "breakfast", name: "Scrambled Eggs + Toast", prepTime: "5 min" },
              { mealType: "lunch", name: "Leftover Fajita Wraps", prepTime: "5 min" },
              { mealType: "dinner", name: "Beef Taco Bowls", prepTime: "20 min", calories: "$3.25" },
            ]},
            { day: "Wednesday", meals: [
              { mealType: "breakfast", name: "Overnight Oats", prepTime: "2 min (prep night before)" },
              { mealType: "lunch", name: "Black Bean Quesadillas", prepTime: "8 min" },
              { mealType: "dinner", name: "Garlic Butter Pasta with Broccoli", prepTime: "18 min", calories: "$2.00" },
            ]},
            { day: "Thursday", meals: [
              { mealType: "breakfast", name: "Eggs + Toast", prepTime: "5 min" },
              { mealType: "lunch", name: "Tuna Salad on Bread", prepTime: "5 min" },
              { mealType: "dinner", name: "Chicken Stir-Fry with Rice", prepTime: "20 min", calories: "$3.00" },
            ]},
          ]}
          groceryItems={[
            "Chicken thighs (2 lbs)", "Ground beef (1 lb)", "Eggs (1 dozen)",
            "Bell peppers (3)", "Onions (3)", "Broccoli (2 crowns)", "Bananas (1 bunch)",
            "Garlic (1 head)", "Lemons (2)", "Greek yogurt (1 tub)",
            "Shredded cheese (1 bag)", "Butter (1 stick)", "Milk (1/2 gal)",
            "Rice (2 lbs)", "Pasta (1 lb)", "Canned black beans (3)",
            "Canned tuna (2)", "Tortillas (10 pack)", "Bread (1 loaf)",
            "Frozen stir-fry veggies", "Olive oil", "Soy sauce",
          ]}
        />

        <p>
          That&apos;s 4 dinners, 4 lunches, and 4 breakfasts from 22
          grocery items. The chicken shows up in fajitas, rice bowls, and
          stir-fry. The tortillas handle quesadillas and fajita wraps. The
          eggs do double duty for breakfast and can fill in any lunch gap.
          Nothing sits unused.
        </p>
      </div>

      {/* Stat callout */}
      <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-4 my-6">
        <p className="text-2xl font-bold text-stone-800">20&ndash;25% savings on groceries</p>
        <p className="text-sm text-stone-500 mt-1">Families that shop with a meal-plan-matched grocery list spend 20&ndash;25% less than those who shop without a plan. Less impulse buying, less food waste.</p>
      </div>

      {/* Section 4: 5 Meals From This List */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        5 Meals You Can Make From This Grocery List
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Every meal below uses ingredients from the template above. No
          extra trips to the store. No surprise missing items at 7 PM.
        </p>
        <MealCardGrid meals={[
          { name: "One-Pan Chicken Fajitas", mealType: "dinner", prepTime: "25 min · $3.50/serving", description: "Sliced chicken thighs, bell peppers, and onions cooked with cumin and chili powder. Serve in tortillas with cheese. One pan, feeds two nights if you use the leftovers for wraps.", tags: ["one-pan", "high-protein"] },
          { name: "Beef Taco Bowls", mealType: "dinner", prepTime: "20 min · $3.25/serving", description: "Seasoned ground beef over rice with black beans, cheese, and diced tomatoes. Skip the tortilla and eat it as a bowl, or wrap it up. Either way, it takes 20 minutes.", tags: ["quick", "high-protein"] },
          { name: "Garlic Butter Pasta with Broccoli", mealType: "dinner", prepTime: "18 min · $2.00/serving", description: "Pasta tossed in butter, garlic, and olive oil with steamed broccoli. Squeeze a lemon over it. Simple, cheap, and better than it has any right to be.", tags: ["vegetarian", "under-$3"] },
          { name: "Chicken Stir-Fry with Rice", mealType: "dinner", prepTime: "20 min · $3.00/serving", description: "Diced chicken thighs stir-fried with frozen vegetables, soy sauce, and garlic. Serve over rice. The frozen stir-fry mix is the secret &mdash; pre-cut, never goes bad, always ready.", tags: ["one-pan", "quick"] },
          { name: "Black Bean Quesadillas", mealType: "lunch", prepTime: "8 min · $1.75/serving", description: "Canned black beans mashed with cumin, spread on a tortilla with shredded cheese. Pan-fry until crispy. Two quesadillas make a full lunch for under $2.", tags: ["vegetarian", "under-$2"] },
        ]} />
        <p>
          See the pattern? The same chicken, the same beans, the same
          tortillas and rice show up across multiple meals. That&apos;s not
          boring &mdash; that&apos;s efficient. Different flavors, different
          cuisines, same grocery run.
        </p>
      </div>

      {/* Pro tip callout */}
      <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 my-6">
        <p className="text-sm font-semibold text-amber-800">Pro tip: the pantry audit</p>
        <p className="text-sm text-amber-700 mt-1">Before you shop, spend 2 minutes checking what you already have. Rice, pasta, canned goods, and spices carry over week to week. Most people overbuy pantry staples because they don&apos;t check first. A quick scan of your pantry and fridge can cut 15&ndash;20% off your list before you leave the house.</p>
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Want a grocery list that writes itself?
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Tell us your preferences and household size. We&apos;ll generate
          a week of meals with recipes &mdash; and the matching grocery list,
          organized by store section, with exact quantities. Automatically.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Free Preview &rarr;
        </Link>
      </div>

      {/* Why a generator beats a template */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Why a Generator Beats a Static Template
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Templates are a starting point, but they have a shelf life. After
          two weeks of the same chicken fajitas, you need variety. After
          your dietary needs change &mdash;{" "}
          <Link href="/meal-plans/meal-plan-on-a-budget" className="text-orange-500 underline">
            tighter budget
          </Link>,{" "}
          <Link href="/blog/eating-healthy-on-a-budget" className="text-orange-500 underline">
            healthier eating
          </Link>, new allergies &mdash; the template breaks.
        </p>
        <p>
          What&apos;s For Dinner generates a fresh{" "}
          <Link
            href="/blog/weekly-meal-plan"
            className="text-orange-500 underline"
          >
            weekly meal plan
          </Link>{" "}
          with recipes and a matching grocery list every week. It knows your
          diet, your budget, your household size, and what you actually like
          to eat. The grocery list is built from the recipes automatically
          &mdash; quantities combined, organized by store section, nothing
          extra.
        </p>
        <p>
          It&apos;s{" "}
          <Link
            href="/onboarding"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            $7.99/month
          </Link>{" "}
          &mdash; less than the food you throw away each week from a
          disorganized grocery run. If it saves you even one impulse buy per
          trip, it pays for itself.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Your first week is free
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Set your preferences. Get a personalized meal plan with recipes
          and an auto-generated grocery list &mdash; organized by store
          section with exact quantities. $7.99/mo after your trial.
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
            href="/blog/meal-plan-with-grocery-list"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            How to Create a Meal Plan with a Grocery List (Step by Step)
          </Link>
          <Link
            href="/blog/save-money-groceries-meal-planning"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            How to Save Money on Groceries with Meal Planning
          </Link>
          <Link
            href="/blog/best-grocery-list-apps"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Best Grocery List Apps in 2026 (Compared)
          </Link>
          <Link
            href="/blog/weekly-meal-plan"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            How to Build a Weekly Meal Plan That Actually Works
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
          <Link href="/meal-plans/meal-plan-on-a-budget" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Budget</Link>
          <Link href="/meal-plans/meal-plan-for-family-of-4" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Family of 4</Link>
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
