import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";

export const metadata: Metadata = {
  title: "5 Cheap Alternatives to Meal Kits in 2026 (Under $2/Serving)",
  description:
    "Meal kits cost $8-12 per serving. These 5 alternatives give you planned meals with grocery lists for under $2/serving. Compare HelloFresh, Blue Apron, and cheaper options.",
  openGraph: {
    title: "5 Cheap Alternatives to Meal Kits in 2026 (Under $2/Serving)",
    description:
      "Meal kits cost $8-12 per serving. These 5 alternatives give you planned meals with grocery lists for under $2/serving. Compare HelloFresh, Blue Apron, and cheaper options.",
    siteName: "What's For Dinner",
    type: "article",
    url: "https://whatsfordinner.fit/blog/best-meal-kit-alternatives",
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Cheap Alternatives to Meal Kits in 2026 (Under $2/Serving)",
    description:
      "Meal kits cost $8-12 per serving. These 5 alternatives give you planned meals with grocery lists for under $2/serving.",
  },
  alternates: { canonical: "https://whatsfordinner.fit/blog/best-meal-kit-alternatives" },
};

export default function BestMealKitAlternativesPage() {
  return (
    <>
      <ArticleJsonLd
        title="5 Cheap Alternatives to Meal Kits in 2026 (Under $2/Serving)"
        description="Meal kits cost $8-12 per serving. These 5 alternatives give you planned meals with grocery lists for under $2/serving. Compare HelloFresh, Blue Apron, and cheaper options."
        url="https://whatsfordinner.fit/blog/best-meal-kit-alternatives"
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
                name: "What is the cheapest meal kit alternative?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cheapest meal kit alternative is an AI meal planning app like What's For Dinner ($7.99/month), which generates personalized weekly meal plans with recipes and a grocery list. You shop at your own grocery store, bringing the cost per serving down to $1.50-2.00 compared to $8-12 per serving with meal kits like HelloFresh.",
                },
              },
              {
                "@type": "Question",
                name: "How much cheaper is meal planning than HelloFresh?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Meal planning is roughly 80-85% cheaper than HelloFresh. HelloFresh costs $8-12 per serving ($200-400/week for a family of 4). With a meal planning app ($7.99/month) and grocery shopping, the same family spends $75-95/week for all meals — not just dinners. That's a savings of $400-1,200+ per month.",
                },
              },
              {
                "@type": "Question",
                name: "Are meal kits worth the money?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Meal kits are worth it only if you have zero time for grocery shopping AND money isn't a concern. For most households, a meal planning app provides 90% of the convenience (planned meals, recipes, grocery list) at about 10% of the cost. The ingredients in meal kits aren't special — you can buy the same things at your local store for far less.",
                },
              },
              {
                "@type": "Question",
                name: "Can I get meal kit recipes without the box?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Many meal kit recipes are available online for free — HelloFresh, Blue Apron, and Home Chef all publish their recipe cards. However, you still need to plan your week, build a grocery list, and shop. An AI meal planner like What's For Dinner automates all of this: it generates original recipes, plans your full week, and creates a consolidated grocery list.",
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
          { name: "5 Cheap Alternatives to Meal Kits in 2026", url: "https://whatsfordinner.fit/blog/best-meal-kit-alternatives" },
        ]}
      />
      <article>
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Roundup
      </span>
      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        5 Cheap Alternatives to Meal Kits in 2026
      </h1>
      <p className="text-sm text-stone-400 mb-8">
        Updated March 2026
      </p>

      {/* --- Intro --- */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Meal kits were revolutionary in 2015. A box of pre-portioned
          ingredients showed up at your door, and suddenly cooking felt
          approachable. Ten years later, the novelty has worn off &mdash; but
          the prices haven&apos;t come down. HelloFresh charges $8-12 per
          serving. Blue Apron charges about the same. For a family of four
          eating dinner five nights a week, that&apos;s <strong>$160-240 per
          week</strong> &mdash; just for dinners.
        </p>
        <p>
          The dirty secret of meal kits? The ingredients aren&apos;t special.
          The chicken breast in your HelloFresh box is the same chicken breast
          at your grocery store &mdash; except yours costs $3/lb, not $12.
          The recipes aren&apos;t complex either. Most are 30-minute meals
          that any home cook could follow from a recipe card. You&apos;re not
          paying for quality. You&apos;re paying for someone to put
          ingredients in a box and ship it to you with an ice pack.
        </p>
        <p>
          In 2026, there are far cheaper ways to get the same result: planned
          meals, clear recipes, and a grocery list. Here are five alternatives
          that cost a fraction of what meal kits charge &mdash; most under
          $2 per serving.
        </p>
      </div>

      {/* --- The real cost of meal kits --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The real cost of meal kits
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Before we get into alternatives, let&apos;s be honest about what
          meal kits actually cost. These are current per-serving prices
          for the major services:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>HelloFresh</strong> &mdash; $9.99/serving average
          </li>
          <li>
            <strong>Blue Apron</strong> &mdash; $9.99/serving average
          </li>
          <li>
            <strong>Home Chef</strong> &mdash; $8.99/serving average
          </li>
          <li>
            <strong>Factor</strong> &mdash; $11.00/serving (pre-made meals)
          </li>
          <li>
            <strong>Sunbasket</strong> &mdash; $10.99/serving average
          </li>
        </ul>
        <p>
          Let&apos;s do the math for a household of two people ordering 4
          dinners per week (the most common plan):
        </p>
        <div className="bg-stone-50 rounded-xl p-6 my-4">
          <p className="text-sm text-stone-700">
            <strong>4 dinners x 2 servings x $9.99</strong> = $79.92/week
            &mdash; and that&apos;s <em>just</em> dinners. You still need
            breakfast, lunch, and snacks. A realistic weekly grocery bill for
            all meals runs <strong>$75-95 per week</strong> when you shop with
            a plan. So meal kits cost nearly the same as your entire grocery
            budget &mdash; for four dinners.
          </p>
        </div>
        <p>
          For a family of four, the numbers are even worse. Four dinners at
          $9.99/serving is $160/week. Five dinners is $200. Over a year,
          that&apos;s <strong>$8,000-10,000</strong> spent on meal kits alone.
          A meal planning app costs $96/year.
        </p>
      </div>

      {/* --- #1 What's For Dinner --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        1. What&apos;s For Dinner &mdash; Best overall alternative
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          What&apos;s For Dinner replaces your meal kit with something
          smarter: an AI that generates a personalized weekly meal plan with
          recipes and a consolidated grocery list, delivered to your inbox
          every week. You set your dietary preferences, allergies, household
          size, cuisine preferences, and budget tier once. A new plan shows up
          automatically &mdash; no app to open, no recipes to browse, no box
          to unpack.
        </p>
        <p>
          The key difference from meal kits is where you shop. Instead of
          overpaying for pre-portioned ingredients shipped in a refrigerated
          box, you take your grocery list to whatever store you prefer &mdash;
          Costco, Trader Joe&apos;s, Aldi, your local market. The same
          ingredients that cost $10/serving in a meal kit cost $1.50-2.00
          when you buy them yourself.
        </p>
        <p>
          At <strong>$7.99/month</strong> (not per serving &mdash; per
          month), it&apos;s roughly 1/50th the cost of HelloFresh for the
          same outcome: you know what you&apos;re cooking every night, you
          have the recipes, and you have the shopping list. The only thing
          you&apos;re giving up is someone physically putting chicken thighs
          in a cardboard box.
        </p>

        <div className="my-4">
          <p className="text-sm font-medium text-stone-700 mb-2">Pros:</p>
          <ul className="list-disc list-inside space-y-1 pl-1 text-sm">
            <li>AI-generated plans personalized to your exact diet and preferences</li>
            <li>Recipes + grocery list included every week</li>
            <li>$7.99/mo total &mdash; not per serving, not per meal</li>
            <li>Shop at any store you want (use sales, buy in bulk)</li>
            <li>Free trial with no signup or credit card</li>
          </ul>
        </div>
        <div className="my-4">
          <p className="text-sm font-medium text-stone-700 mb-2">Cons:</p>
          <ul className="list-disc list-inside space-y-1 pl-1 text-sm">
            <li>You still need to grocery shop yourself</li>
            <li>No recipe photos (text-based plans)</li>
          </ul>
        </div>

        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try What&apos;s For Dinner free
        </Link>
      </div>

      {/* --- #2 Grocery store meal planning --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        2. Grocery store meal planning &mdash; Best free method
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          The simplest meal kit alternative costs nothing: plan your meals
          around what&apos;s on sale at your grocery store. Most stores
          publish a weekly circular (online and in-app). Pull it up on
          Sunday, see what proteins and produce are discounted, and plan
          5 dinners around those deals. Write your grocery list. Done.
        </p>
        <p>
          This is how your grandparents ate. Chicken thighs on sale? That&apos;s
          three meals right there &mdash; stir fry, sheet pan with veggies,
          shredded chicken tacos. Pork shoulder on special? Slow cooker
          pulled pork, carnitas, and sandwiches for the week. You don&apos;t
          need a subscription or an app. You need a grocery flyer and 20
          minutes of planning.
        </p>
        <p>
          The downside is obvious: it takes effort. You need to find recipes,
          check what you already have, build the list, and make sure the
          meals work together nutritionally. For people who enjoy that
          process, it&apos;s the most rewarding option. For everyone else,
          it&apos;s the reason meal kits exist in the first place.
        </p>

        <div className="my-4">
          <p className="text-sm font-medium text-stone-700 mb-2">Pros:</p>
          <ul className="list-disc list-inside space-y-1 pl-1 text-sm">
            <li>Completely free</li>
            <li>Maximum flexibility &mdash; eat whatever you want</li>
            <li>Take advantage of sales and seasonal produce</li>
          </ul>
        </div>
        <div className="my-4">
          <p className="text-sm font-medium text-stone-700 mb-2">Cons:</p>
          <ul className="list-disc list-inside space-y-1 pl-1 text-sm">
            <li>Requires 30-60 minutes of planning per week</li>
            <li>No recipe curation or dietary guidance</li>
            <li>Easy to fall back into &ldquo;what should we eat&rdquo; paralysis</li>
          </ul>
        </div>
      </div>

      {/* --- #3 Budget Bytes + a grocery list --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        3. Budget Bytes + a grocery list &mdash; Best for budget cooks
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Budget Bytes has been the gold standard for affordable recipes since
          2009. Every recipe includes a per-serving cost breakdown &mdash; and
          most land between $1-3 per serving. The content is genuinely good:
          well-tested recipes with clear instructions and honest pricing. If
          you want to eat well on a tight budget, it&apos;s one of the best
          free resources online.
        </p>
        <p>
          The limitation is that Budget Bytes is a recipe site, not a meal
          planner. You&apos;ll need to pick your own recipes, build your own
          grocery list, and manage your own weekly schedule. They offer a paid
          meal plan service ($8/mo), but it&apos;s not personalized &mdash;
          everyone gets the same plan regardless of dietary needs or
          preferences.
        </p>
        <p>
          The best free strategy: bookmark 10-15 Budget Bytes recipes you
          love, rotate through them on a 2-week cycle, and write your grocery
          list manually. It&apos;s work, but the per-serving cost is hard to
          beat.
        </p>

        <div className="my-4">
          <p className="text-sm font-medium text-stone-700 mb-2">Pros:</p>
          <ul className="list-disc list-inside space-y-1 pl-1 text-sm">
            <li>Free recipes with per-serving cost breakdowns</li>
            <li>High-quality, well-tested content</li>
            <li>$1-3 per serving average</li>
          </ul>
        </div>
        <div className="my-4">
          <p className="text-sm font-medium text-stone-700 mb-2">Cons:</p>
          <ul className="list-disc list-inside space-y-1 pl-1 text-sm">
            <li>No automated meal planning or grocery lists</li>
            <li>Paid plans aren&apos;t personalized</li>
            <li>You do all the planning work yourself</li>
          </ul>
        </div>

        <Link
          href="/blog/budget-bytes-alternative"
          className="text-orange-500 hover:text-orange-600 underline text-sm"
        >
          Read our full Budget Bytes comparison &rarr;
        </Link>
      </div>

      {/* --- #4 Costco/warehouse club hauls --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        4. Warehouse club hauls &mdash; Best for families
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          If you have a Costco, Sam&apos;s Club, or BJ&apos;s membership, you
          already have one of the cheapest meal kit alternatives available.
          The strategy is simple: buy proteins and staples in bulk, portion
          them at home, and plan 5 dinners from what you bought. A $25 pack
          of chicken thighs, a $15 bag of rice, and $20 in seasonal vegetables
          feeds a family of four for a week of dinners at roughly $2-3 per
          serving.
        </p>
        <p>
          The key is to portion and freeze immediately. A family pack of
          ground beef becomes four separate meals: tacos, bolognese, stuffed
          peppers, and burgers. A whole pork loin gets sliced into chops, a
          roast, and stir-fry strips. The upfront cost feels higher
          ($100-150 per trip), but the per-serving math crushes meal kits by
          a factor of four.
        </p>
        <p>
          The catch: you need freezer space, you need to plan meals around
          what you bought, and you need recipes. Without a plan, bulk buying
          becomes bulk wasting. This method pairs well with an{" "}
          <Link
            href="/blog/ai-meal-planner"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            AI meal planner
          </Link>{" "}
          that can generate recipes around the ingredients you already have.
        </p>

        <div className="my-4">
          <p className="text-sm font-medium text-stone-700 mb-2">Pros:</p>
          <ul className="list-disc list-inside space-y-1 pl-1 text-sm">
            <li>$2-3/serving average for quality ingredients</li>
            <li>Great for families and batch cooking</li>
            <li>Stock up once, eat all week</li>
          </ul>
        </div>
        <div className="my-4">
          <p className="text-sm font-medium text-stone-700 mb-2">Cons:</p>
          <ul className="list-disc list-inside space-y-1 pl-1 text-sm">
            <li>Requires membership ($50-120/year)</li>
            <li>Need freezer space and portioning discipline</li>
            <li>No recipes or meal plans included</li>
          </ul>
        </div>
      </div>

      {/* --- #5 Freezer meal prep --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        5. Freezer meal prep &mdash; Best for busy weeknights
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Freezer meal prep is the closest thing to a meal kit without the
          meal kit price tag. The concept: spend one afternoon (usually
          Sunday) assembling 5-10 meals in freezer bags or containers.
          Label them. Stack them in the freezer. On weeknights, pull one
          out, dump it in a slow cooker or Instant Pot, and dinner is ready
          with zero thought.
        </p>
        <p>
          The economics are unbeatable. A batch of slow cooker chicken
          tortilla soup costs about $8 total and makes 6 servings &mdash;
          $1.33 per serving. Beef stew, chili, teriyaki chicken, pasta bake,
          and curry all land in the $1-2/serving range when made in bulk.
          Compare that to $9.99/serving from HelloFresh for a meal that
          takes 30 minutes of active cooking.
        </p>
        <p>
          The trade-off is front-loaded work. That Sunday session takes 2-3
          hours. You also need recipes that freeze well (not everything
          does), and the variety can feel limited after a few weeks. But for
          families where both parents work and weeknight cooking is a
          non-starter, freezer prep is a legitimate meal kit replacement.
        </p>

        <div className="my-4">
          <p className="text-sm font-medium text-stone-700 mb-2">Pros:</p>
          <ul className="list-disc list-inside space-y-1 pl-1 text-sm">
            <li>$1-2/serving &mdash; the cheapest option on this list</li>
            <li>Zero weeknight cooking effort (dump and go)</li>
            <li>Great for slow cooker and Instant Pot recipes</li>
          </ul>
        </div>
        <div className="my-4">
          <p className="text-sm font-medium text-stone-700 mb-2">Cons:</p>
          <ul className="list-disc list-inside space-y-1 pl-1 text-sm">
            <li>2-3 hours of prep on one day</li>
            <li>Limited variety &mdash; not everything freezes well</li>
            <li>Need recipes, containers, and freezer space</li>
          </ul>
        </div>

        <Link
          href="/blog/how-to-meal-prep"
          className="text-orange-500 hover:text-orange-600 underline text-sm"
        >
          Read our full meal prep guide &rarr;
        </Link>
      </div>

      {/* --- Mid-article CTA --- */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Done with meal kit prices?
        </p>
        <p className="text-stone-500 text-sm mb-6">
          Get a personalized weekly meal plan with recipes and a grocery list
          for $7.99/month. Free trial, no credit card required.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try it free
        </Link>
      </div>

      {/* --- Meal kit vs meal planning app comparison --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Meal kit vs. meal planning app: side-by-side
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Here&apos;s how meal kits stack up against a meal planning app
          like What&apos;s For Dinner across the factors that actually matter:
        </p>

        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200">
                <th className="text-left py-3 pr-4 font-semibold text-stone-800">&nbsp;</th>
                <th className="text-left py-3 pr-4 font-semibold text-stone-800">Meal Kits</th>
                <th className="text-left py-3 font-semibold text-stone-800">Meal Planning App</th>
              </tr>
            </thead>
            <tbody className="text-stone-600">
              <tr className="border-b border-stone-100">
                <td className="py-3 pr-4 font-medium text-stone-700">Cost per serving</td>
                <td className="py-3 pr-4">$8-12</td>
                <td className="py-3">$1.50-2.00</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="py-3 pr-4 font-medium text-stone-700">Monthly cost (family of 4)</td>
                <td className="py-3 pr-4">$640-960</td>
                <td className="py-3">$7.99 + groceries (~$350)</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="py-3 pr-4 font-medium text-stone-700">Dietary customization</td>
                <td className="py-3 pr-4">Basic categories only</td>
                <td className="py-3">Any restriction in plain English</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="py-3 pr-4 font-medium text-stone-700">Recipes included</td>
                <td className="py-3 pr-4">Yes (with ingredients)</td>
                <td className="py-3">Yes (with grocery list)</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="py-3 pr-4 font-medium text-stone-700">Grocery shopping</td>
                <td className="py-3 pr-4">Not needed</td>
                <td className="py-3">You shop (any store)</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="py-3 pr-4 font-medium text-stone-700">Covers all meals</td>
                <td className="py-3 pr-4">Dinners only (usually)</td>
                <td className="py-3">Breakfast, lunch, dinner, snacks</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="py-3 pr-4 font-medium text-stone-700">Packaging waste</td>
                <td className="py-3 pr-4">Significant (ice packs, boxes, plastic)</td>
                <td className="py-3">None</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-stone-700">Convenience</td>
                <td className="py-3 pr-4">Very high</td>
                <td className="py-3">High (plan is automatic, you shop once)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          The only category where meal kits win is pure convenience &mdash;
          you don&apos;t have to go to a store. But that convenience costs
          you $500-900 per month more than the alternative. Most people
          are already going to the grocery store for breakfast, lunch, and
          snacks anyway. Adding dinner ingredients to that trip takes 15
          minutes when you have a list.
        </p>
      </div>

      {/* --- When meal kits still make sense --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        When meal kits still make sense
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Let&apos;s be fair. Meal kits aren&apos;t a scam &mdash;
          they&apos;re just overpriced for what they deliver. There are
          situations where they genuinely make sense:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>Learning to cook</strong> &mdash; Pre-portioned
            ingredients and step-by-step cards are genuinely great for
            beginners who&apos;ve never made anything beyond pasta.
          </li>
          <li>
            <strong>Physical limitations</strong> &mdash; If grocery shopping
            is difficult due to mobility, health, or lack of transportation,
            meal kits solve a real problem.
          </li>
          <li>
            <strong>Occasional treat</strong> &mdash; Ordering a meal kit
            once a month for a fun cooking night is reasonable. Subscribing
            weekly for $200+ is not.
          </li>
        </ul>
        <p>
          For everyone else &mdash; people who know how to cook, have access
          to a grocery store, and want to eat well without going broke &mdash;
          a meal planning app gives you 90% of the convenience at about 10%
          of the cost. The meal kit industry is a $10 billion market built on
          solving a $8/month problem. You don&apos;t need pre-portioned
          ingredients. You need a plan.
        </p>
      </div>

      {/* --- Bottom CTA --- */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Stop overpaying for meal kits
        </p>
        <p className="text-stone-500 text-sm mb-6">
          Get a personalized weekly meal plan with recipes and a grocery list.
          $7.99/month &mdash; that&apos;s less than one serving from HelloFresh.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Start your free trial
        </Link>
      </div>

      {/* --- Related articles --- */}
      <div className="border-t border-stone-100 mt-12 pt-8">
        <p className="text-sm font-medium text-stone-400 mb-4">
          Related articles
        </p>
        <div className="space-y-3">
          <Link
            href="/blog/best-meal-planning-apps"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            10 Best Meal Planning Apps in 2026 (Compared)
          </Link>
          <Link
            href="/blog/hellofresh-alternative-cheap"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            The Best Cheap Alternative to HelloFresh
          </Link>
          <Link
            href="/blog/save-money-groceries-meal-planning"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            How to Save Money on Groceries with Meal Planning
          </Link>
        </div>
      </div>

      {/* --- Browse meal plans --- */}
      <div className="mt-10 flex flex-wrap gap-2">
        <Link href="/meal-plans/keto-meal-plan" className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full px-3 py-1.5 transition-colors">Keto Meal Plans</Link>
        <Link href="/meal-plans/vegan-meal-plan" className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full px-3 py-1.5 transition-colors">Vegan Meal Plans</Link>
        <Link href="/meal-plans/budget-meal-plan" className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full px-3 py-1.5 transition-colors">Budget Meal Plans</Link>
        <Link href="/meal-plans/family-meal-plan" className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full px-3 py-1.5 transition-colors">Family Meal Plans</Link>
        <Link href="/meal-plans/mediterranean-meal-plan" className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full px-3 py-1.5 transition-colors">Mediterranean Meal Plans</Link>
        <Link href="/meal-plans/high-protein-meal-plan" className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full px-3 py-1.5 transition-colors">High-Protein Meal Plans</Link>
      </div>
      </article>
    </>
  );
}
