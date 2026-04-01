import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";

const title =
  "Meal Plan with Grocery List: The Complete Guide (2026)";
const description =
  "Get a personalized weekly meal planner with grocery list — see a 3-day sample plan, compare top apps, and learn why planning without a list fails. Free to try.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "article",
    siteName: "What's For Dinner",
    url: "https://whatsfordinner.fit/blog/meal-plan-with-grocery-list",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/meal-plan-with-grocery-list",
  },
};

export default function MealPlanWithGroceryList() {
  return (
    <>
      <ArticleJsonLd
        title="Meal Plan with Grocery List: The Complete Guide (2026)"
        description="Get a personalized weekly meal planner with grocery list — see a 3-day sample plan, compare top apps, and learn why planning without a list fails. Free to try."
        url="https://whatsfordinner.fit/blog/meal-plan-with-grocery-list"
        datePublished="2026-02-25"
        dateModified="2026-04-01"
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
                name: "What is the best meal planner with grocery list?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The best meal planner with grocery list combines personalized recipes with a consolidated, aisle-organized shopping list. What's For Dinner generates a full weekly meal plan with recipes and a merged grocery list grouped by store section, adjusted for your household size and dietary needs. Other options include Mealime (free tier with basic lists), Plan to Eat (import your own recipes), and eMeals (store-linked lists).",
                },
              },
              {
                "@type": "Question",
                name: "How do I create a meal plan and grocery list for the week?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Set your dietary preferences, household size, and budget during a 2-minute onboarding. The AI generates a full 7-day meal plan with recipes and a consolidated grocery list grouped by store section. Duplicates across recipes are merged automatically so you buy exactly what you need. Your first plan is free with no signup required.",
                },
              },
              {
                "@type": "Question",
                name: "Is the grocery list organized by store aisle?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The grocery list is automatically organized into categories — Produce, Protein, Dairy, Grains & Bakery, and Pantry — so you can work through the store in one pass without backtracking.",
                },
              },
              {
                "@type": "Question",
                name: "Can I get a weekly meal planner with grocery list for free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. What's For Dinner offers a free 3-day meal plan with recipes and a grocery list. No account required. The paid plan ($7.99/month) gives you a full 7-day plan regenerated every week, meal swaps, and email delivery every Sunday morning.",
                },
              },
              {
                "@type": "Question",
                name: "Do grocery list apps include recipes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most standalone grocery list apps do not include recipes. Apps like AnyList or OurGroceries are list-only tools. For a grocery list with recipes, you need a meal planning app. What's For Dinner, Mealime, and Plan to Eat all generate grocery lists directly from their recipe databases, so every item on your list connects to a specific meal.",
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
          { name: "Meal Plan with Grocery List: The Complete Guide", url: "https://whatsfordinner.fit/blog/meal-plan-with-grocery-list" },
        ]}
      />
      <article className="blog-article">
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        Meal Plan with Grocery List: The Complete Guide
      </h1>
      <p className="text-sm text-stone-400 mb-8">Updated April 1, 2026</p>

      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          You found a great recipe. You bookmarked it. You even planned to cook
          it Thursday night. Then Thursday came and you realized you had no
          chicken thighs, no coconut milk, and somehow three half-empty jars of
          cumin. Sound familiar?
        </p>
        <p>
          The problem was never the recipe. The problem was the gap between
          having a meal plan and actually buying the right groceries. A meal plan
          without a grocery list is just a wish list. And a grocery list that
          doesn&apos;t match your meal plan is how you end up with a fridge full
          of ingredients that don&apos;t go together.
        </p>
        <p>
          That&apos;s the problem we set out to solve with{" "}
          <Link href="/" className="text-orange-500 hover:text-orange-600 underline">
            What&apos;s For Dinner
          </Link>
          : a complete meal plan with grocery list, generated by AI, delivered to
          your inbox every week. Below, we&apos;ll show you exactly what that looks
          like, compare the top apps that offer this, and explain why the grocery
          list is the most important part of any meal plan.
        </p>
      </div>

      {/* --- Section: Why most meal plans fail without a grocery list --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Why Most Meal Plans Fail Without a Grocery List
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Meal planning has a dirty secret: most people who start a meal plan
          quit within two weeks. Not because the recipes were bad, not because
          they lacked motivation, but because they couldn&apos;t bridge the gap
          between &quot;plan&quot; and &quot;execution.&quot;
        </p>
        <p>
          A meal plan tells you <em>what</em> to cook. A grocery list tells you
          <em> what to buy</em>. Without the second part, your plan is
          theoretical. You open the fridge on Wednesday, see nothing that
          matches Wednesday&apos;s dinner, and order takeout. By Friday, the
          plan is abandoned.
        </p>
        <p>
          The data backs this up. A 2023 study in the <em>Journal of Nutrition
          Education and Behavior</em> found that households who shop from a
          planned list spend roughly 25% less on groceries and throw away
          significantly less food. The USDA estimates American households waste
          about 30% of the food they buy. The biggest contributor? Buying
          ingredients without a plan for how to use them.
        </p>
        <p>
          The failure points are predictable:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong>Per-recipe shopping.</strong> Each recipe has its own ingredient list.
            Monday needs half a red onion, Wednesday needs a whole one, Friday needs two.
            You buy four and use two and a half.
          </li>
          <li>
            <strong>No consolidation.</strong> Three recipes call for garlic, but you see
            three separate line items. You buy three heads instead of one.
          </li>
          <li>
            <strong>Multiple store trips.</strong> You forgot the coconut milk. Now you&apos;re
            making a midweek run for one item, which turns into $40 of impulse buys.
          </li>
          <li>
            <strong>Decision fatigue at the store.</strong> Without a clear list, every
            aisle becomes a decision. You spend longer shopping and still miss things.
          </li>
        </ul>
        <p>
          A meal plan with a grocery list solves all four. One trip, one list,
          no waste. If you want to see how this connects to{" "}
          <Link
            href="/blog/eating-healthy-on-a-budget"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            eating healthy on a budget
          </Link>
          , a consolidated list is the single biggest lever.
        </p>
      </div>

      {/* --- Section: What a good meal plan with grocery list looks like --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        What a Good Meal Plan with Grocery List Looks Like
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          A lot of apps promise a &quot;meal plan with grocery list,&quot; but
          the quality varies wildly. Some give you a list of recipes and call the
          raw ingredient dump a &quot;grocery list.&quot; Here&apos;s what an
          actual useful one looks like. This is a 3-day sample from a real plan
          generated for two people on a moderate budget:
        </p>
      </div>

      {/* 3-day sample plan */}
      <div className="bg-stone-50 rounded-xl border border-stone-100 p-6 text-sm space-y-5 my-4">
        <p className="font-semibold text-stone-800 text-base">3-Day Sample Meal Plan (2 people)</p>

        <div>
          <p className="font-semibold text-orange-600 mb-1">Monday</p>
          <p className="text-stone-600">
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-medium px-2 py-0.5 rounded-full mr-1">Breakfast</span>
            Greek yogurt parfait with granola and blueberries
          </p>
          <p className="text-stone-600 mt-1">
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full mr-1">Lunch</span>
            Chicken Caesar wraps with romaine and parmesan
          </p>
          <p className="text-stone-600 mt-1">
            <span className="inline-block bg-purple-50 text-purple-600 text-xs font-medium px-2 py-0.5 rounded-full mr-1">Dinner</span>
            One-pan lemon herb salmon with roasted broccoli and potatoes
          </p>
        </div>

        <div>
          <p className="font-semibold text-orange-600 mb-1">Tuesday</p>
          <p className="text-stone-600">
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-medium px-2 py-0.5 rounded-full mr-1">Breakfast</span>
            Overnight oats with banana and peanut butter
          </p>
          <p className="text-stone-600 mt-1">
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full mr-1">Lunch</span>
            Black bean quesadillas with salsa and sour cream
          </p>
          <p className="text-stone-600 mt-1">
            <span className="inline-block bg-purple-50 text-purple-600 text-xs font-medium px-2 py-0.5 rounded-full mr-1">Dinner</span>
            Beef stir-fry with bell peppers and jasmine rice
          </p>
        </div>

        <div>
          <p className="font-semibold text-orange-600 mb-1">Wednesday</p>
          <p className="text-stone-600">
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-medium px-2 py-0.5 rounded-full mr-1">Breakfast</span>
            Spinach and feta scramble with whole wheat toast
          </p>
          <p className="text-stone-600 mt-1">
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full mr-1">Lunch</span>
            Leftover stir-fry bowl (built-in from Tuesday&apos;s dinner)
          </p>
          <p className="text-stone-600 mt-1">
            <span className="inline-block bg-purple-50 text-purple-600 text-xs font-medium px-2 py-0.5 rounded-full mr-1">Dinner</span>
            Baked chicken parmesan with arugula side salad
          </p>
        </div>
      </div>

      {/* Combined grocery list for the 3-day sample */}
      <div className="bg-stone-50 rounded-xl border border-stone-100 p-6 text-sm space-y-3 my-4">
        <p className="font-semibold text-stone-800 text-base">Combined Grocery List (3 days, 2 people)</p>

        <p className="font-semibold text-stone-800">Produce (9 items)</p>
        <p className="text-stone-600">
          Bananas (2) &bull; Blueberries (1 pint) &bull; Lemons (2) &bull;
          Romaine lettuce (1 head) &bull; Arugula (1 bag) &bull; Spinach (1 bag) &bull;
          Broccoli (1 crown) &bull; Bell peppers (2) &bull; Potatoes (1 lb)
        </p>

        <p className="font-semibold text-stone-800 pt-2">Protein (4 items)</p>
        <p className="text-stone-600">
          Chicken breasts (1.5 lb) &bull; Salmon fillets (2) &bull;
          Ground beef (0.75 lb) &bull; Eggs (6)
        </p>

        <p className="font-semibold text-stone-800 pt-2">Dairy (4 items)</p>
        <p className="text-stone-600">
          Greek yogurt (16 oz) &bull; Feta cheese (4 oz) &bull;
          Parmesan (3 oz) &bull; Sour cream (4 oz)
        </p>

        <p className="font-semibold text-stone-800 pt-2">Grains &amp; Bakery (4 items)</p>
        <p className="text-stone-600">
          Flour tortillas (8-pack) &bull; Whole wheat bread (1 loaf) &bull;
          Jasmine rice (1 lb) &bull; Rolled oats (1 lb)
        </p>

        <p className="font-semibold text-stone-800 pt-2">Pantry (5 items)</p>
        <p className="text-stone-600">
          Peanut butter &bull; Granola &bull; Marinara sauce &bull;
          Black beans (1 can) &bull; Soy sauce
        </p>

        <p className="text-stone-500 text-xs pt-2 italic">
          26 items total. Estimated cost: $45-55 for two people.
          No duplicates. Every item maps to a specific meal.
        </p>
      </div>

      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Notice what&apos;s happening here: Tuesday&apos;s stir-fry makes
          extra, which becomes Wednesday&apos;s lunch. The grocery list doesn&apos;t
          double-count ingredients for that leftover meal. Eggs appear once even
          though they&apos;re in two recipes. This is what consolidation looks
          like in practice, and it&apos;s the difference between a useful
          grocery list and a raw ingredient dump.
        </p>
        <p>
          The full 7-day version of this plan (available to subscribers)
          includes 21 meals across the week with a single merged list of 35-45
          items. If you want to see a complete{" "}
          <Link
            href="/meal-plans/7-day-meal-plan"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            7-day meal plan
          </Link>
          , we have sample plans for every diet and cuisine.
        </p>
      </div>

      {/* --- Section: How we build your grocery list --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        How We Build Your Grocery List
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          When you sign up, our AI generates a complete 7-day meal plan tailored
          to your preferences. Then it does something most services skip
          entirely: it reads every ingredient across all 21 meals and
          consolidates them into a single, organized list.
        </p>
        <p>Here&apos;s what that process looks like behind the scenes:</p>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>
            <strong>Generate the plan.</strong> The AI creates breakfast, lunch,
            and dinner for seven days, balancing nutrition, variety, and your
            stated preferences.
          </li>
          <li>
            <strong>Extract all ingredients.</strong> Every recipe&apos;s
            ingredient list gets pulled and normalized (no more &quot;1 cup
            diced tomatoes&quot; alongside &quot;2 Roma tomatoes, chopped&quot;).
          </li>
          <li>
            <strong>Merge duplicates.</strong> If three recipes call for garlic,
            you get one line item with the total amount.
          </li>
          <li>
            <strong>Adjust for household size.</strong> Cooking for one? The
            quantities scale down. Family of five? They scale up. No mental math
            required.
          </li>
          <li>
            <strong>Group by store section.</strong> Your final list is organized
            into categories: <em>Produce</em>, <em>Protein</em>, <em>Dairy</em>,{" "}
            <em>Grains &amp; Bakery</em>, and <em>Pantry</em>. Walk through the
            store once, top to bottom, and you&apos;re done.
          </li>
        </ol>
        <p>
          The result is a grocery list that reads like something a very organized
          friend made for you. No duplicates, no guesswork, no wandering the
          aisles trying to remember what you needed. For more on the meal prep
          side of the equation, see our guide on{" "}
          <Link
            href="/blog/how-to-meal-prep"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            how to meal prep effectively
          </Link>
          .
        </p>
      </div>

      {/* --- Section: Comparison table --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Meal Planning Apps with Grocery Lists Compared
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Not every meal planning app handles grocery lists the same way. Some
          generate them automatically, some require manual work, and some
          don&apos;t offer consolidation at all. Here&apos;s how the top options
          compare. For a broader comparison of planning apps, see our{" "}
          <Link
            href="/blog/best-meal-planning-apps"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            full review of the best meal planning apps
          </Link>
          .
        </p>
      </div>

      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-stone-50">
              <th className="text-left px-4 py-3 font-semibold text-stone-800 border-b border-stone-200">App</th>
              <th className="text-left px-4 py-3 font-semibold text-stone-800 border-b border-stone-200">Price</th>
              <th className="text-left px-4 py-3 font-semibold text-stone-800 border-b border-stone-200">Auto Grocery List</th>
              <th className="text-left px-4 py-3 font-semibold text-stone-800 border-b border-stone-200">Consolidates Duplicates</th>
              <th className="text-left px-4 py-3 font-semibold text-stone-800 border-b border-stone-200">Aisle Grouped</th>
              <th className="text-left px-4 py-3 font-semibold text-stone-800 border-b border-stone-200">Recipes Included</th>
            </tr>
          </thead>
          <tbody className="text-stone-600">
            <tr className="bg-orange-50/50">
              <td className="px-4 py-3 font-medium text-stone-800 border-b border-stone-100">What&apos;s For Dinner</td>
              <td className="px-4 py-3 border-b border-stone-100">$7.99/mo</td>
              <td className="px-4 py-3 border-b border-stone-100">Yes (AI-generated)</td>
              <td className="px-4 py-3 border-b border-stone-100">Yes</td>
              <td className="px-4 py-3 border-b border-stone-100">Yes (5 categories)</td>
              <td className="px-4 py-3 border-b border-stone-100">Yes (full recipes with steps)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-stone-800 border-b border-stone-100">Mealime</td>
              <td className="px-4 py-3 border-b border-stone-100">Free / $5.99/mo Pro</td>
              <td className="px-4 py-3 border-b border-stone-100">Yes</td>
              <td className="px-4 py-3 border-b border-stone-100">Yes</td>
              <td className="px-4 py-3 border-b border-stone-100">Yes</td>
              <td className="px-4 py-3 border-b border-stone-100">Yes (curated library)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-stone-800 border-b border-stone-100">Plan to Eat</td>
              <td className="px-4 py-3 border-b border-stone-100">$5.95/mo</td>
              <td className="px-4 py-3 border-b border-stone-100">Yes (from saved recipes)</td>
              <td className="px-4 py-3 border-b border-stone-100">Partial</td>
              <td className="px-4 py-3 border-b border-stone-100">Yes</td>
              <td className="px-4 py-3 border-b border-stone-100">BYO (import/clip recipes)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-stone-800 border-b border-stone-100">Paprika</td>
              <td className="px-4 py-3 border-b border-stone-100">$4.99 one-time</td>
              <td className="px-4 py-3 border-b border-stone-100">Manual (add from recipes)</td>
              <td className="px-4 py-3 border-b border-stone-100">No</td>
              <td className="px-4 py-3 border-b border-stone-100">By category</td>
              <td className="px-4 py-3 border-b border-stone-100">BYO (clip from web)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-stone-800">eMeals</td>
              <td className="px-4 py-3">$5.99/mo</td>
              <td className="px-4 py-3">Yes</td>
              <td className="px-4 py-3">Yes</td>
              <td className="px-4 py-3">Yes (store-linked)</td>
              <td className="px-4 py-3">Yes (themed plans)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          The key differentiator is how each app <em>generates</em> the list.
          What&apos;s For Dinner and eMeals create the entire plan for you. Plan
          to Eat and Paprika require you to find and import your own recipes
          first. Mealime sits in between with a curated recipe library you pick
          from. If you want a truly hands-off weekly meal planner with grocery
          list that just shows up ready to go, AI-generated plans are the fastest
          path.
        </p>
      </div>

      {/* --- Mid-article CTA --- */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-900 mb-2">
          Get your first meal plan with grocery list free
        </p>
        <p className="text-sm text-stone-500 mb-6">
          Personalized to your household, dietary needs, and budget. Delivered
          every Sunday morning.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Start Free Trial
        </Link>
      </div>

      {/* --- Section: Customization that matters --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Customization That Matters
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          A meal plan with grocery list is only useful if it fits your life. A
          vegan shouldn&apos;t get plans full of chicken. Someone on a tight
          budget doesn&apos;t want truffle oil on the list. That&apos;s why
          every plan we generate is shaped by the preferences you set during
          onboarding:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong>Dietary restrictions:</strong> Vegan, vegetarian,
            gluten-free, dairy-free, keto, paleo, and more. The AI doesn&apos;t
            just filter recipes — it generates meals natively within your
            constraints.
          </li>
          <li>
            <strong>Budget tier:</strong> Choose from budget, moderate, or
            premium. Budget plans favor in-season produce, pantry staples, and
            versatile proteins. Premium plans unlock seafood, specialty
            ingredients, and more complex dishes. See our{" "}
            <Link
              href="/meal-plans/meal-plan-on-a-budget"
              className="text-orange-500 hover:text-orange-600 underline"
            >
              budget meal plan
            </Link>
            {" "}for examples.
          </li>
          <li>
            <strong>Household size:</strong> Whether you&apos;re cooking for one
            or feeding a family of six, quantities adjust automatically. If
            you&apos;re{" "}
            <Link
              href="/blog/meal-planning-for-two"
              className="text-orange-500 hover:text-orange-600 underline"
            >
              meal planning for two
            </Link>
            , we have a whole guide on how portioned plans eliminate food waste
            for couples and roommates.
          </li>
          <li>
            <strong>Cuisine preferences:</strong> Love Mediterranean food? Tired
            of pasta? Tell us what you gravitate toward and what you&apos;d
            rather skip.
          </li>
          <li>
            <strong>Cooking skill level:</strong> Beginner-friendly plans stick
            to simple techniques and fewer ingredients. Advanced plans bring in
            homemade sauces, multi-step prep, and more adventurous flavors.
          </li>
          <li>
            <strong>Max cook time:</strong> If you only have 30 minutes on
            weeknights, every weeknight dinner stays under that limit. Weekend
            meals can be more ambitious if you want.
          </li>
        </ul>
        <p>
          You set these once and we remember them. Update anytime from the web
          dashboard. Every week&apos;s plan — and its matching grocery list —
          reflects your latest preferences. If{" "}
          <Link
            href="/meal-plans/meal-prep-meal-plan"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            meal prep
          </Link>
          {" "}is your style, the plan can lean into batch-friendly recipes
          that store well.
        </p>
      </div>

      {/* --- Section: Delivered to your inbox --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Delivered to Your Inbox, Not Another App
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          We deliberately chose email over a mobile app. Here&apos;s why: you
          don&apos;t need another app on your phone. You don&apos;t need push
          notifications about meal prep. You don&apos;t need to open something
          and scroll through a feed to find your dinner plan.
        </p>
        <p>
          Every Sunday morning, your meal plan with grocery list arrives in your
          inbox. It&apos;s formatted cleanly — meals organized by day, grocery
          list grouped by store section. You can read it right in your email
          client, forward it to a partner, or print it and stick it on the
          fridge.
        </p>
        <p>
          If you prefer a more visual experience, you also get access to a web
          dashboard where you can view your current plan, browse past weeks, and
          print individual days or the full grocery list. But the dashboard is
          optional. The email has everything you need.
        </p>
        <p>
          This email-first model means there&apos;s no daily check-in required,
          no gamification, no streaks to maintain. Just a practical plan that
          shows up when you need it and stays out of your way the rest of the
          week.
        </p>
      </div>

      {/* --- Section: FAQ --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6 text-stone-600 leading-relaxed">
        <div>
          <p className="font-semibold text-stone-800 mb-1">
            What is the best meal planner with grocery list?
          </p>
          <p>
            It depends on how hands-on you want to be. If you want a fully
            automated weekly meal planner with grocery list that generates
            personalized recipes, What&apos;s For Dinner is the fastest option.
            If you prefer to curate your own recipe collection, Plan to Eat is
            solid. Mealime offers a good free tier. See the comparison table
            above for a full breakdown.
          </p>
        </div>

        <div>
          <p className="font-semibold text-stone-800 mb-1">
            How do I create a meal plan and grocery list for the week?
          </p>
          <p>
            The easiest way is to use an AI meal planner. Set your dietary
            preferences, household size, and budget in a 2-minute onboarding.
            The AI generates a full 7-day meal plan with recipes and a
            consolidated grocery list grouped by store section. Duplicates
            across recipes are merged automatically so you buy exactly what
            you need. Your first plan is free.
          </p>
        </div>

        <div>
          <p className="font-semibold text-stone-800 mb-1">
            Can I get a weekly meal planner with grocery list for free?
          </p>
          <p>
            Yes. What&apos;s For Dinner offers a free 3-day meal plan with
            recipes and a grocery list, no account required. The paid plan
            ($7.99/month) unlocks full 7-day plans regenerated every week,
            meal swaps, and Sunday email delivery.
          </p>
        </div>

        <div>
          <p className="font-semibold text-stone-800 mb-1">
            Do grocery list apps include recipes?
          </p>
          <p>
            Most standalone grocery list apps (AnyList, OurGroceries, Google
            Keep) do not include recipes. They&apos;re list-only tools. For a
            grocery list with recipes, you need a meal planning app like
            What&apos;s For Dinner, Mealime, or Plan to Eat, where every item
            on the list connects to a specific meal.
          </p>
        </div>

        <div>
          <p className="font-semibold text-stone-800 mb-1">
            Is the grocery list organized by store aisle?
          </p>
          <p>
            Yes. Our grocery list is automatically organized into five
            categories — Produce, Protein, Dairy, Grains &amp; Bakery, and
            Pantry — so you can work through the store in one efficient pass.
            Quantities are adjusted for your household size and duplicates
            across recipes are merged into single line items.
          </p>
        </div>
      </div>

      {/* --- Bottom CTA --- */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-900 mb-2">
          Your week, planned and listed
        </p>
        <p className="text-sm text-stone-500 mb-6">
          7 days of meals. One organized grocery list. Delivered every Sunday for
          $7.99/month.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Start Your Free Week
        </Link>
      </div>

      {/* Related articles + meal plans */}
      <div className="border-t border-stone-100 mt-12 pt-8">
        <p className="text-sm font-medium text-stone-400 mb-4">
          Related articles
        </p>
        <div className="space-y-3">
          <Link
            href="/blog/best-meal-planning-apps"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Best Meal Planning Apps in 2026: Full Comparison
          </Link>
          <Link
            href="/blog/eating-healthy-on-a-budget"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Eating Healthy on a Budget: Practical Tips That Work
          </Link>
          <Link
            href="/blog/how-to-meal-prep"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            How to Meal Prep: A Beginner&apos;s Guide
          </Link>
          <Link
            href="/blog/ai-meal-planner"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            AI Meal Planner: How It Works and Why It&apos;s Better
          </Link>
          <Link
            href="/blog/meal-planning-for-two"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Planning for Two: No More Waste
          </Link>
          <Link
            href="/blog/save-money-groceries-meal-planning"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            How to Save Money on Groceries with Meal Planning
          </Link>
        </div>
        <p className="text-sm font-medium text-stone-400 mt-6 mb-4">
          Browse meal plans
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/meal-plans/7-day-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">7-Day Plan</Link>
          <Link href="/meal-plans/meal-prep-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Meal Prep</Link>
          <Link href="/meal-plans/meal-plan-on-a-budget" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Budget</Link>
          <Link href="/meal-plans/vegetarian" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Vegetarian</Link>
          <Link href="/meal-plans/italian" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Italian</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
