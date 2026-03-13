import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";

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
    url: "https://whatsfordinner.fit/blog/cheap-meals-for-one",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheap Meals for One: 15 Dinners Under $3/Serving",
    description:
      "Eating alone doesn't mean eating sad. These 15 cheap dinner ideas cost under $3/serving, take under 30 minutes, and actually taste good.",
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
      <article>
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        Cheap Meals for One: 15 Dinners Under $3
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Cooking for one is weird. Every recipe serves four. Produce goes bad
          before you can eat it. And it&apos;s hard to motivate yourself to
          cook a &quot;real&quot; meal when it&apos;s just you. So you order
          a burrito for $12 instead, tell yourself it&apos;s fine, and do it
          again tomorrow.
        </p>
        <p>
          But $12 a meal times 30 days is $360 a month. On just dinner.
        </p>
        <p>
          These 15 meals cost $1.50-3 per serving, take under 30 minutes, and
          are genuinely good. Not &quot;good for the price&quot; &mdash;
          actually good. The kind of meals you&apos;d happily eat even if you
          had money to burn.
        </p>
      </div>

      {/* No-Cook / Assembly Meals */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        5 No-Cook &amp; Assembly Meals
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          These barely count as cooking. If you can open cans and use a
          microwave, you&apos;re qualified.
        </p>
        <ol className="list-decimal list-inside space-y-4 pl-1">
          <li>
            <strong>Black bean quesadillas</strong> &mdash; $1.75/serving, 8
            min. Tortilla, canned black beans (drained), shredded cheese. Fold,
            pan-fry until crispy. Add salsa if you&apos;re feeling fancy. Two
            quesadillas = a full meal.
          </li>
          <li>
            <strong>Peanut butter banana toast</strong> &mdash; $1.00/serving,
            3 min. Toast, peanut butter, sliced banana, drizzle of honey.
            Breakfast for dinner energy, zero shame required.
          </li>
          <li>
            <strong>Tuna salad wrap</strong> &mdash; $2.50/serving, 5 min. Can
            of tuna, mayo, diced celery if you have it, salt and pepper. Wrap
            in a tortilla with some lettuce. Protein-packed and requires no
            heat source whatsoever.
          </li>
          <li>
            <strong>Caprese-ish sandwich</strong> &mdash; $2.75/serving, 5 min.
            Bread, mozzarella slices, tomato, olive oil, salt. Italian vibes
            without the Italian restaurant prices. Add basil if you want to
            feel like a chef.
          </li>
          <li>
            <strong>Microwave loaded potato</strong> &mdash; $2.00/serving, 10
            min. Poke a potato, microwave 5-8 minutes, split open, load with
            canned chili or black beans, cheese, sour cream. A full meal from
            one potato.
          </li>
        </ol>
      </div>

      {/* One-Pan Dinners */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        5 One-Pan Dinners
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          One pan, one burner, minimal cleanup. These are the meals that make
          you feel like you actually cooked something.
        </p>
        <ol className="list-decimal list-inside space-y-4 pl-1" start={6}>
          <li>
            <strong>Garlic butter pasta</strong> &mdash; $1.50/serving, 15 min.
            Boil pasta. In the same pan, melt butter with minced garlic (or
            garlic powder), toss pasta in it, add parmesan and red pepper
            flakes. This is the meal that proves expensive doesn&apos;t mean
            good.
          </li>
          <li>
            <strong>Egg fried rice</strong> &mdash; $1.00/serving, 12 min.
            Leftover rice (or microwave rice), scramble eggs into it, add
            frozen peas, soy sauce, sesame oil if you have it. Better than
            takeout fried rice and it costs a dollar.
          </li>
          <li>
            <strong>Chicken quesadillas</strong> &mdash; $2.50/serving, 12 min.
            Shred some cooked chicken (or use canned), load into a tortilla
            with cheese and whatever salsa or hot sauce you like. Pan-fry both
            sides until golden.
          </li>
          <li>
            <strong>Sausage and peppers</strong> &mdash; $3.00/serving, 20 min.
            Slice a couple of sausage links and a bell pepper. Cook in a pan
            with olive oil until everything is browned. Serve on rice or in a
            hoagie roll. Hearty and satisfying.
          </li>
          <li>
            <strong>Black bean tacos</strong> &mdash; $1.75/serving, 10 min.
            Heat canned black beans with cumin and chili powder. Spoon into
            tortillas. Top with cheese, salsa, whatever you have. Three tacos
            and you&apos;re full for under two dollars.
          </li>
        </ol>
      </div>

      {/* Slow Cooker / Dump Meals */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        5 Set-It-and-Forget-It Meals
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          These meals cook themselves while you do literally anything else.
          Slow cooker, oven, or stovetop on low &mdash; dump everything in and
          come back later.
        </p>
        <ol className="list-decimal list-inside space-y-4 pl-1" start={11}>
          <li>
            <strong>Chili</strong> &mdash; $2.00/serving, 10 min prep. Can of
            kidney beans, can of diced tomatoes, ground beef or turkey, chili
            powder, cumin. Simmer on the stove for 30 minutes or dump in a
            slow cooker for 4 hours. Makes 4 servings, so you&apos;re eating
            for days.
          </li>
          <li>
            <strong>Baked chicken thighs with rice</strong> &mdash;
            $2.50/serving, 10 min prep + 30 min oven. Season chicken thighs
            (salt, pepper, garlic powder, paprika), bake at 400&deg;F for 25-30
            minutes. Serve over rice with frozen broccoli.
          </li>
          <li>
            <strong>Pasta e fagioli</strong> &mdash; $1.75/serving, 25 min.
            Basically Italian bean soup with pasta. Saut&eacute; garlic, add
            canned white beans, diced tomatoes, broth, small pasta. Simmer
            until pasta is cooked. Crusty bread on the side if you&apos;re
            splurging.
          </li>
          <li>
            <strong>Lentil soup</strong> &mdash; $1.50/serving, 10 min prep +
            30 min simmer. Dried lentils are stupidly cheap and they cook in 30
            minutes without soaking. Lentils + broth + canned tomatoes + cumin
            + whatever vegetables are dying in your fridge. Makes enough for
            3-4 meals.
          </li>
          <li>
            <strong>Sheet pan sausage and vegetables</strong> &mdash;
            $2.75/serving, 10 min prep + 25 min oven. Slice sausage, cube
            potatoes, chop broccoli or zucchini. Toss everything with olive
            oil and seasoning. Bake at 400&deg;F. One pan, one meal, one dish
            to wash.
          </li>
        </ol>
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
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border border-stone-200 rounded-xl overflow-hidden">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-stone-700">Day</th>
                <th className="px-4 py-3 font-semibold text-stone-700">Breakfast</th>
                <th className="px-4 py-3 font-semibold text-stone-700">Lunch</th>
                <th className="px-4 py-3 font-semibold text-stone-700">Dinner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Mon</td>
                <td className="px-4 py-3">Eggs + toast</td>
                <td className="px-4 py-3">PB&amp;J sandwich</td>
                <td className="px-4 py-3">Garlic butter pasta ($1.50)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Tue</td>
                <td className="px-4 py-3">Oatmeal + banana</td>
                <td className="px-4 py-3">Leftover pasta</td>
                <td className="px-4 py-3">Black bean tacos ($1.75)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Wed</td>
                <td className="px-4 py-3">Eggs + toast</td>
                <td className="px-4 py-3">Tuna wrap ($2.50)</td>
                <td className="px-4 py-3">Chili ($2.00)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Thu</td>
                <td className="px-4 py-3">PB banana toast ($1.00)</td>
                <td className="px-4 py-3">Leftover chili</td>
                <td className="px-4 py-3">Egg fried rice ($1.00)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Fri</td>
                <td className="px-4 py-3">Oatmeal + banana</td>
                <td className="px-4 py-3">Black bean quesadilla ($1.75)</td>
                <td className="px-4 py-3">Baked chicken + rice ($2.50)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Sat</td>
                <td className="px-4 py-3">Eggs + toast</td>
                <td className="px-4 py-3">Leftover chicken + rice</td>
                <td className="px-4 py-3">Loaded potato ($2.00)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Sun</td>
                <td className="px-4 py-3">PB banana toast ($1.00)</td>
                <td className="px-4 py-3">Leftover chili</td>
                <td className="px-4 py-3">Lentil soup ($1.50)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Total dinner cost: about $12.25 for the week. Add simple breakfasts
          (eggs, oatmeal, toast, PB) and lunches (leftovers + sandwiches) and
          you&apos;re looking at roughly $30-40 for the entire week. That&apos;s
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
        </div>
        <p className="text-sm font-medium text-stone-400 mt-6 mb-4">
          Browse meal plans
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/meal-plans/budget-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Budget</Link>
          <Link href="/meal-plans/meal-plan-for-one" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">For One</Link>
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
