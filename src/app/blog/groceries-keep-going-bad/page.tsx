import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Why Your Groceries Keep Going Bad (And How to Fix It)",
  description:
    "You buy fresh food with good intentions. By Thursday it's brown. Here's why it happens and the simple system that stops the cycle — from someone who's been there.",
  openGraph: {
    title: "Why Your Groceries Keep Going Bad (And How to Fix It)",
    description:
      "You buy fresh food with good intentions. By Thursday it's brown. Here's why it happens and the simple system that stops the cycle — from someone who's been there.",
    siteName: "What's For Dinner",
    type: "article",
    url: "https://whatsfordinner.fit/blog/groceries-keep-going-bad",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Your Groceries Keep Going Bad (And How to Fix It)",
    description:
      "You buy fresh food with good intentions. By Thursday it's brown. Here's why it happens and the simple system that stops the cycle.",
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/groceries-keep-going-bad",
  },
};

export default function GroceriesKeepGoingBadArticle() {
  return (
    <>
      <ArticleJsonLd
        title="Why Your Groceries Keep Going Bad (And How to Fix It)"
        description="You buy fresh food with good intentions. By Thursday it's brown. Here's why it happens and the simple system that stops the cycle — from someone who's been there."
        url="https://whatsfordinner.fit/blog/groceries-keep-going-bad"
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
                name: "How do I stop wasting groceries?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The single biggest fix is having a meal plan before you shop. Plan your meals for the week, write down exactly what ingredients you need, and buy only those items. No plan means random buying, random buying means ingredients that don't go together, and unused ingredients end up in the trash. A meal plan with a grocery list ensures every item you buy has a purpose.",
                },
              },
              {
                "@type": "Question",
                name: "Why does my food keep going bad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most food waste happens because people buy without a plan. You shop based on what looks good, buy produce you 'might use,' and grab items without knowing what meals they'll go into. Without specific meals assigned to each ingredient, food sits in the fridge until it spoils. The fix is simple: decide what you're cooking before you shop, and buy only what's on your list.",
                },
              },
              {
                "@type": "Question",
                name: "How do I plan meals to reduce food waste?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Plan 4-5 meals for the week that share ingredients (e.g., one protein used three ways). Build a consolidated grocery list from those meals. Shop once. Use perishable ingredients in the first 3-4 days and save hardy ingredients (root vegetables, frozen foods, canned goods) for later in the week. Cook dinner portions for two and eat leftovers for lunch.",
                },
              },
              {
                "@type": "Question",
                name: "What groceries last the longest?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Longest-lasting groceries: eggs (4-5 weeks), hard cheese (3-4 weeks), onions and potatoes (2-4 weeks), carrots (3-4 weeks), cabbage (up to 2 months), frozen anything (3+ months), canned goods (years), rice and pasta (months to years). Fresh chicken and ground beef only last 1-2 days in the fridge, so cook or freeze them immediately.",
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
          { name: "Why Your Groceries Keep Going Bad", url: "https://whatsfordinner.fit/blog/groceries-keep-going-bad" },
        ]}
      />
      <article>
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        Why Your Groceries Keep Going Bad (The Fix Is Simple)
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          You know the cycle. You go grocery shopping on Sunday with the best intentions.
          You buy fresh vegetables, lean protein, fruit, salad greens. You feel good about
          yourself. You&apos;re going to cook this week. This is the week it all changes.
        </p>
        <p>
          Monday you&apos;re tired. Tuesday you forgot to thaw the chicken. Wednesday
          you order Thai food. Thursday you open the fridge and the spinach is slimy,
          the chicken smells questionable, and the bell pepper has a soft spot. You throw
          it all away, feel guilty, and order delivery again. Friday you buy groceries
          again. The cycle continues.
        </p>
        <p>
          This isn&apos;t a character flaw. It&apos;s not a discipline problem. It&apos;s
          a planning problem. And the fix is embarrassingly simple.
        </p>
      </div>

      {/* The grocery guilt cycle */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The Grocery Guilt Cycle
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Let&apos;s name what&apos;s happening, because once you see it you can&apos;t
          unsee it:
        </p>
        <ol className="list-decimal list-inside space-y-2 pl-1">
          <li><strong>Buy with ambition.</strong> You&apos;re in the store, feeling healthy and motivated. You buy fresh produce, interesting ingredients, things you saw on a recipe video.</li>
          <li><strong>Reality hits.</strong> The week gets busy. You&apos;re tired after work. Some of those recipes look harder than you thought.</li>
          <li><strong>Food rots.</strong> By midweek, the perishables start going bad. The clock is ticking and you can feel it every time you open the fridge.</li>
          <li><strong>Feel guilty.</strong> You throw away food and money. You feel bad about the waste. You feel bad about &quot;failing&quot; at being an adult.</li>
          <li><strong>Order delivery.</strong> Out of guilt and hunger, you open DoorDash. Another $25-30 gone.</li>
          <li><strong>Repeat.</strong> Next Sunday, you&apos;re back at the store, swearing this week will be different.</li>
        </ol>
        <p>
          This is the most expensive cycle in your budget. You&apos;re paying for
          groceries AND delivery. You&apos;re spending money twice to eat once.
        </p>
      </div>

      {/* Why it happens */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Why It Happens
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          The root cause is almost always the same: <strong>no plan</strong>.
        </p>
        <p>
          When you shop without a meal plan, you buy based on vibes. &quot;That
          looks good.&quot; &quot;I should eat more vegetables.&quot; &quot;Maybe
          I&apos;ll make stir-fry this week.&quot; But &quot;maybe&quot; doesn&apos;t
          keep food from going bad. Only a concrete plan does.
        </p>
        <p>
          No plan means:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li><strong>Random buying.</strong> Ingredients that don&apos;t go together. A bell pepper with no recipe to put it in. Chicken with no plan for when you&apos;ll cook it.</li>
          <li><strong>Aspirational purchases.</strong> You buy what you <em>wish</em> you&apos;d eat, not what you <em>will</em> eat. That kale? The beets? The fresh ginger? They&apos;re going in the trash and we both know it.</li>
          <li><strong>No timeline.</strong> Perishables have deadlines. Fresh chicken: 1-2 days. Berries: 3-5 days. Salad greens: 3-4 days. If you don&apos;t know when you&apos;re using each ingredient, you&apos;re just hoping you beat the clock. You usually won&apos;t.</li>
          <li><strong>Duplicate buying.</strong> Without checking what you have, you buy a second bottle of soy sauce, more eggs when you already have a dozen, garlic when there&apos;s garlic in the drawer. Now you have double the perishables and the same amount of time.</li>
        </ul>
      </div>

      {/* The fix */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The Fix: Buy ONLY What You&apos;ll Cook
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          This is it. This is the entire fix. It&apos;s not a hack. It&apos;s not a
          system with 12 steps. It&apos;s one rule: <strong>have a plan before you
          shop</strong>.
        </p>
        <p>
          Not a vague idea. Not &quot;I&apos;ll probably make pasta and maybe some
          chicken thing.&quot; A real plan:
        </p>
        <ol className="list-decimal list-inside space-y-2 pl-1">
          <li>Pick 4-5 meals for the week</li>
          <li>List every ingredient those meals need</li>
          <li>Check what you already have and cross it off</li>
          <li>Buy only what&apos;s left on the list</li>
        </ol>
        <p>
          That&apos;s it. Every item in your cart has a specific meal attached to it.
          Nothing is aspirational. Nothing is &quot;maybe.&quot; Every bell pepper has
          a Wednesday dinner. Every chicken breast has a Tuesday recipe. Every ingredient
          earns its spot.
        </p>
        <p>
          When you shop this way, food waste drops dramatically because nothing is random.
          You&apos;re not buying produce that &quot;might&quot; get used. You&apos;re
          buying produce that <em>will</em> get used, because it&apos;s already assigned
          to a meal.
        </p>
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Get a meal plan with a grocery list every week
        </p>
        <p className="text-stone-500 text-sm mb-5">
          What&apos;s For Dinner generates a personalized meal plan with recipes and
          a consolidated grocery list &mdash; so every item you buy has a purpose.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try Free &rarr;
        </Link>
      </div>

      {/* Shelf life cheat sheet */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Shelf Life Cheat Sheet
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Knowing how long things actually last changes how you plan. Most people
          overestimate how long fresh food stays good and underestimate how long pantry
          staples last.
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border border-stone-200 rounded-xl overflow-hidden">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-stone-700">Food</th>
                <th className="px-4 py-3 font-semibold text-stone-700">How Long It Lasts</th>
                <th className="px-4 py-3 font-semibold text-stone-700">Tip</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Eggs</td>
                <td className="px-4 py-3">4-5 weeks</td>
                <td className="px-4 py-3 text-stone-400">Way longer than you think. Always keep them stocked.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Hard cheese</td>
                <td className="px-4 py-3">3-4 weeks</td>
                <td className="px-4 py-3 text-stone-400">Cheddar, parmesan, gouda. Cut off mold, the rest is fine.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Fresh chicken</td>
                <td className="px-4 py-3">1-2 days</td>
                <td className="px-4 py-3 text-stone-400">Cook or freeze immediately. Don&apos;t &quot;plan to use it later.&quot;</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Ground beef</td>
                <td className="px-4 py-3">1-2 days</td>
                <td className="px-4 py-3 text-stone-400">Same as chicken. Freeze in portions if not cooking today.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Bread</td>
                <td className="px-4 py-3">5-7 days (months frozen)</td>
                <td className="px-4 py-3 text-stone-400">Freeze immediately. Toast directly from frozen.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Most produce</td>
                <td className="px-4 py-3">4-7 days</td>
                <td className="px-4 py-3 text-stone-400">Plan to use these in the first half of the week.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Onions &amp; potatoes</td>
                <td className="px-4 py-3">2-4 weeks</td>
                <td className="px-4 py-3 text-stone-400">Store in a cool, dark place. Not in the fridge.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Carrots &amp; cabbage</td>
                <td className="px-4 py-3">3-4 weeks (cabbage up to 2 months)</td>
                <td className="px-4 py-3 text-stone-400">The hardy vegetables. Buy these for end-of-week meals.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Frozen anything</td>
                <td className="px-4 py-3">3+ months</td>
                <td className="px-4 py-3 text-stone-400">Vegetables, meat, bread, cooked grains. Your safety net.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Canned goods</td>
                <td className="px-4 py-3">1-5 years</td>
                <td className="px-4 py-3 text-stone-400">Beans, tomatoes, tuna, coconut milk. Never waste these.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The pattern is clear: plan fresh/perishable meals for early in the week and
          pantry/frozen meals for later. Monday&apos;s dinner uses the fresh salmon.
          Thursday&apos;s dinner uses the frozen stir-fry vegetables and canned coconut
          milk. By the weekend, you&apos;re working from the pantry and freezer.
        </p>
      </div>

      {/* Buy less, more often */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The &quot;Buy Less, More Often&quot; Approach
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          If the big Sunday haul keeps ending in waste, try a different rhythm: two
          smaller shopping trips instead of one big one.
        </p>
        <ul className="list-disc list-inside space-y-3 pl-1">
          <li>
            <strong>Trip 1 (Sunday or Monday):</strong> Buy pantry staples, frozen
            items, hardy produce, and fresh protein/produce for the first 3-4 days of
            meals.
          </li>
          <li>
            <strong>Trip 2 (Wednesday or Thursday):</strong> Buy fresh ingredients for
            the last 3 days. This is a quick trip &mdash; you already have the pantry
            base from trip 1.
          </li>
        </ul>
        <p>
          This keeps produce fresh because you&apos;re never asking berries to survive
          a full week. The second trip is small and fast &mdash; maybe 5-6 items. It
          adds 15 minutes to your week but saves you from throwing away $15-20 in
          spoiled food.
        </p>
        <p>
          Alternatively, lean hard into frozen and canned for your base and only buy
          fresh what you&apos;ll use within 3 days. Frozen vegetables are just as
          nutritious as fresh, last months, and never go bad on you. They&apos;re the
          most underrated grocery hack for people who hate food waste.
        </p>
      </div>

      {/* Or let someone else figure it out */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Or Let Someone Else Figure It Out
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Here&apos;s the honest truth: the reason most people waste groceries is because
          meal planning takes effort. And when something takes effort, it doesn&apos;t
          happen consistently. The first week? Great. The second week? Okay. Week three?
          You&apos;re back to winging it.
        </p>
        <p>
          That&apos;s exactly why{" "}
          <Link
            href="/blog/ai-meal-planner"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            AI meal planners
          </Link>{" "}
          exist. A meal plan with a{" "}
          <Link
            href="/blog/meal-plan-with-grocery-list"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            grocery list
          </Link>{" "}
          means you walk into the store knowing exactly what to buy. Every item on the
          list maps to a specific meal. You don&apos;t browse. You don&apos;t guess. You
          don&apos;t buy aspirational kale. You buy what you need and you leave.
        </p>
        <p>
          The grocery list is the entire point. Without it, you&apos;re shopping blind.
          With it, you&apos;re shopping with purpose. Food waste drops. Spending drops.
          The guilt cycle breaks.
        </p>
        <p>
          What&apos;s For Dinner generates a personalized weekly meal plan with recipes
          and a consolidated grocery list for $7.99/mo. You set your preferences once
          &mdash; dietary needs, household size, budget, cooking skill &mdash; and get a
          fresh plan delivered to your inbox every week. Every ingredient on the list
          has a meal. Nothing goes to waste.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Break the grocery guilt cycle
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Get a personalized meal plan with recipes and a grocery list every week.
          Buy only what you&apos;ll cook. Waste nothing. First plan free.
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
            href="/blog/cooking-for-one-without-wasting-food"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Cooking for One Without Wasting Half Your Groceries
          </Link>
          <Link
            href="/blog/what-to-cook-when-you-have-nothing"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            What to Cook When You Have &quot;Nothing&quot; in the Fridge
          </Link>
          <Link
            href="/blog/i-hate-cooking"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            I Hate Cooking (But I Still Need to Eat)
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
          <Link href="/meal-plans/budget-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Budget</Link>
          <Link href="/meal-plans/meal-plan-for-one-person" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">For One</Link>
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
