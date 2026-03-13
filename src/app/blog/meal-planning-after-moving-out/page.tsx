import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Meal Planning After Moving Out: The Adulting Guide Nobody Gave You",
  description:
    "You moved out. Nobody taught you how to feed yourself. Here's everything you need to know about groceries, cooking, and not living on takeout — from scratch.",
  openGraph: {
    title: "Meal Planning After Moving Out: The Adulting Guide Nobody Gave You",
    description:
      "You moved out. Nobody taught you how to feed yourself. Here's everything you need to know about groceries, cooking, and not living on takeout — from scratch.",
    siteName: "What's For Dinner",
    type: "article",
    url: "https://whatsfordinner.fit/blog/meal-planning-after-moving-out",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meal Planning After Moving Out: The Adulting Guide Nobody Gave You",
    description:
      "You moved out. Nobody taught you how to feed yourself. Here's everything you need to know about groceries, cooking, and not living on takeout — from scratch.",
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/meal-planning-after-moving-out",
  },
};

export default function MealPlanningAfterMovingOutArticle() {
  return (
    <>
      <ArticleJsonLd
        title="Meal Planning After Moving Out: The Adulting Guide Nobody Gave You"
        description="You moved out. Nobody taught you how to feed yourself. Here's everything you need to know about groceries, cooking, and not living on takeout — from scratch."
        url="https://whatsfordinner.fit/blog/meal-planning-after-moving-out"
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
                name: "How do I start feeding myself after moving out?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Start simple: get a basic kitchen setup (one pan, one pot, a knife, a cutting board), learn 5 easy meals, and do one grocery run per week with a list. Don't try to cook elaborate meals from day one. Focus on mastering a handful of simple dishes — pasta, stir fry, sheet pan chicken, tacos, and fried rice will carry you through the first few months.",
                },
              },
              {
                "@type": "Question",
                name: "What should I buy for my first apartment kitchen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You need less than you think: one 12-inch nonstick pan, one medium pot, a spatula, a wooden spoon, a cutting board, one sharp knife, a baking sheet, and a colander. That's it. Skip the waffle maker, the bread machine, and the 20-piece knife set. You can always add tools later when you actually need them.",
                },
              },
              {
                "@type": "Question",
                name: "How much should I spend on food after moving out?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A reasonable grocery budget for one person is $50-80 per week ($200-320/month) if you're cooking most meals at home. This drops significantly with meal planning because you buy only what you need and waste less. For reference, the average American spends $150-200/month on takeout alone — redirecting even half of that to groceries means eating better for less.",
                },
              },
              {
                "@type": "Question",
                name: "What's the easiest way to meal plan for the first time?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The easiest first meal plan: pick 5 dinners for the week (keep them simple — pasta, stir fry, tacos, sheet pan chicken, soup). Write down every ingredient you need. Check what you already have. Buy only what's missing. That's the entire system. If even that feels like too much, an AI meal planner like What's For Dinner generates the plan and grocery list for you automatically.",
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
          { name: "Meal Planning After Moving Out", url: "https://whatsfordinner.fit/blog/meal-planning-after-moving-out" },
        ]}
      />
      <article>
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        Meal Planning After Moving Out: The Guide Nobody Gave You
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          There&apos;s this gap between &quot;my parents fed me&quot; and
          &quot;I know how to feed myself&quot; and nobody talks about it.
          School taught you calculus, the mitochondria is the powerhouse of
          the cell, and how to cite sources in MLA format. But somehow,
          &quot;how to buy groceries and not starve&quot; didn&apos;t make
          the curriculum.
        </p>
        <p>
          The first week after moving out, you&apos;re excited. You eat
          out every meal. You discover DoorDash. You order pad thai at 11 PM
          because you can. By week three, you check your bank account and
          realize you&apos;ve spent more on food than rent. The pad thai
          was $18 with delivery fees. You&apos;ve been paying $18 for pad
          thai four times a week.
        </p>
        <p>
          Welcome to adulting. Here&apos;s the crash course on feeding
          yourself that nobody gave you &mdash; broken down by your first
          two months on your own.
        </p>
      </div>

      {/* Week 1: The starter kitchen */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Week 1: The Starter Kitchen
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Before you cook anything, you need tools. But here&apos;s the
          trap: you walk into Target or IKEA and suddenly you&apos;re
          considering a $40 garlic press and a pasta-making attachment you
          will never, ever use.
        </p>
        <p>
          Here&apos;s everything you actually need for your first kitchen:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li><strong>One 12-inch nonstick pan.</strong> This will make 80% of your meals. Eggs, stir fry, pasta sauce, chicken, pancakes &mdash; it all happens here.</li>
          <li><strong>One medium pot.</strong> For pasta, rice, soup, boiling anything. Get one with a lid.</li>
          <li><strong>One sharp knife.</strong> Doesn&apos;t need to be expensive. A $15 chef&apos;s knife from the grocery store works fine. A dull knife is more dangerous than a sharp one.</li>
          <li><strong>A cutting board.</strong> Plastic is fine. Wood is nicer. Don&apos;t cut on the counter.</li>
          <li><strong>A spatula and a wooden spoon.</strong> For flipping things and stirring things. That&apos;s what cooking is.</li>
          <li><strong>A baking sheet.</strong> For sheet pan dinners, roasting vegetables, heating up frozen food. Get one.</li>
          <li><strong>A colander.</strong> For draining pasta. You can use a lid for the first week but eventually, get the colander.</li>
        </ul>
        <p>
          That&apos;s it. Seven items. Don&apos;t buy a waffle maker. Don&apos;t
          buy a bread machine. Don&apos;t buy a 20-piece knife set when
          you&apos;ll use one knife 99% of the time. Don&apos;t buy a rice
          cooker until you&apos;re eating rice three times a week and sick of
          watching the pot. Start minimal. Add tools when you actually need
          them, not when Amazon recommends them.
        </p>
      </div>

      {/* Week 2: First grocery run */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Week 2: Your First Grocery Run
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Walking into a grocery store without a list when you&apos;ve never
          shopped for yourself is a recipe for spending $120 on vibes. You&apos;ll
          grab things that look good, forget everything essential, and end
          up with six avocados and no cooking oil.
        </p>
        <p>
          Here&apos;s your{" "}
          <Link
            href="/blog/first-grocery-shopping-list"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            first grocery shopping list
          </Link>
          {" "}framework &mdash; the essentials that stock a kitchen from zero:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li><strong>Pantry staples:</strong> Olive oil (or any cooking oil), salt, pepper, garlic powder, pasta, rice, canned tomatoes, soy sauce. These last weeks and form the base of dozens of meals.</li>
          <li><strong>Fridge basics:</strong> Eggs (the most versatile food on earth), butter, milk (or whatever you drink), cheese, a bag of mixed greens.</li>
          <li><strong>Proteins:</strong> Chicken thighs (cheaper and harder to overcook than breasts), ground beef or turkey, a pack of whatever lunch meat you like.</li>
          <li><strong>Produce:</strong> Onions, garlic (the real stuff, not just the powder), lemons, whatever fruit you snack on, one or two vegetables you actually like.</li>
          <li><strong>Frozen backup:</strong> A bag of frozen vegetables (they&apos;re just as nutritious as fresh and they don&apos;t rot), frozen chicken nuggets or pizza for emergency &quot;I can&apos;t cook tonight&quot; nights.</li>
        </ul>
        <p>
          <strong>Pro tip that nobody tells you:</strong> Look at the
          price-per-unit label, not just the sticker price. The small tag on
          the shelf shows price per ounce or per count. The bigger box of
          pasta might cost more upfront but be half the price per serving.
          Also &mdash; store brand is the same thing. Kirkland, Great Value,
          Trader Joe&apos;s brand &mdash; it&apos;s often literally made in
          the same factory as the name brand with a different label.
        </p>
      </div>

      {/* Week 3: First meal plan */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Week 3: Your First Meal Plan
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          You&apos;ve got a stocked kitchen and you&apos;ve survived a grocery
          run. Now it&apos;s time for the thing that turns &quot;I have food
          in the house&quot; into &quot;I actually eat the food in the house
          before it goes bad.&quot;
        </p>
        <p>
          Your first{" "}
          <Link
            href="/blog/meal-planning-for-beginners"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            meal plan
          </Link>
          {" "}doesn&apos;t need to be fancy. Here&apos;s the entire system:
        </p>
        <ol className="list-decimal list-inside space-y-3 pl-1">
          <li><strong>Pick 5 dinners.</strong> Not 7 &mdash; leave room for leftovers and the inevitable night you don&apos;t feel like cooking. Keep them simple: pasta with sauce, stir fry, tacos, sheet pan chicken and vegetables, fried rice.</li>
          <li><strong>Write down every ingredient.</strong> Go recipe by recipe. If Monday&apos;s stir fry needs soy sauce and Wednesday&apos;s fried rice also needs soy sauce, you only write it once.</li>
          <li><strong>Check what you already have.</strong> Cross off anything that&apos;s already in the pantry. This is the step that saves the most money &mdash; you&apos;d be surprised how much you already have.</li>
          <li><strong>Buy only what&apos;s missing.</strong> That&apos;s your grocery list. One trip. One store.</li>
          <li><strong>Cook and eat.</strong> When it&apos;s time for dinner, you already know what you&apos;re making and everything is in the kitchen. No decision fatigue, no 6 PM panic, no DoorDash temptation.</li>
        </ol>
        <p>
          That&apos;s it. That&apos;s the whole system. It takes 15 minutes
          to plan and saves you hours of wandering the kitchen saying
          &quot;there&apos;s nothing to eat&quot; while staring at a full
          pantry.
        </p>
        <p>
          If you&apos;re{" "}
          <Link
            href="/blog/cheap-meals-for-one"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            cooking for one on a budget
          </Link>
          , planning is even more important. Without a plan, single-person
          households waste the most food because recipes serve 4 and half the
          produce rots before you can eat it. A plan accounts for portions
          and leftovers so nothing gets thrown away.
        </p>
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Skip the learning curve
        </p>
        <p className="text-stone-500 text-sm mb-5">
          What&apos;s For Dinner generates a personalized meal plan with
          recipes and a grocery list every week. It does the planning so
          you can focus on learning to cook. First week free.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try Free &rarr;
        </Link>
      </div>

      {/* Month 2: Building the habit */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Month 2: Building the Habit
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Something shifts around the second month. It&apos;s subtle but it
          changes everything: you start knowing prices. You walk into the
          store and you know that chicken thighs are $3.99/lb at your store
          and $4.49 at the one across the street. You know that the big bag
          of rice is a better deal than the small one. You know that
          avocados are cheaper on Tuesdays for some reason.
        </p>
        <p>
          You also start building a pantry. The first grocery run was
          expensive because you had nothing &mdash; no oil, no spices, no
          basics. By month two, you have all that. Your weekly runs get
          cheaper because you&apos;re only replacing what you used, not
          building from scratch.
        </p>
        <p>
          Cooking gets faster too. That stir fry that took you 40 minutes
          the first time? It&apos;s 20 minutes now. You don&apos;t need to
          look at the recipe anymore. You know how long to cook chicken
          because you&apos;ve done it eight times. The knife feels natural.
          You can chop an onion without Googling &quot;how to chop an onion&quot;
          first.
        </p>
        <p>
          And here&apos;s the best part: your fridge looks like an adult&apos;s
          fridge. There&apos;s actual food in there. Vegetables. Leftovers
          in containers. Herbs. It&apos;s not just condiments, beer, and
          leftover takeout boxes anymore. You look at it and think, &quot;okay,
          I&apos;m actually doing this.&quot;
        </p>
        <p>
          If you&apos;re living with roommates, you&apos;ve probably figured
          out a system for{" "}
          <Link
            href="/blog/splitting-groceries-with-roommates"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            splitting groceries
          </Link>
          {" "}by now. If not, read that guide &mdash; it&apos;ll save you
          from passive-aggressive Post-it notes on the milk.
        </p>
      </div>

      {/* The budget reality */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The Budget Reality
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Let&apos;s talk numbers, because nobody does this clearly enough:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border border-stone-200 rounded-xl overflow-hidden">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-stone-700">How You Eat</th>
                <th className="px-4 py-3 font-semibold text-stone-700">Monthly Cost (1 person)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Takeout every meal</td>
                <td className="px-4 py-3">$800-1,200</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Takeout for dinner, simple breakfast/lunch</td>
                <td className="px-4 py-3">$500-700</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Groceries without a plan (lots of waste)</td>
                <td className="px-4 py-3">$350-450</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Groceries with a meal plan</td>
                <td className="px-4 py-3">$200-320</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Meal plan + budget focus</td>
                <td className="px-4 py-3">$150-250</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The difference between &quot;takeout every meal&quot; and
          &quot;groceries with a plan&quot; is $500-900 per month. That&apos;s
          rent money. That&apos;s a vacation fund. That&apos;s the difference
          between checking your bank account with anxiety and checking it
          with confidence.
        </p>
        <p>
          And the jump from &quot;groceries without a plan&quot; to
          &quot;groceries with a plan&quot; is mostly about waste. Without a
          plan, you buy things that go bad before you use them. With a plan,
          every item has a purpose and a meal it belongs to. The food
          actually gets eaten.
        </p>
        <p>
          If{" "}
          <Link
            href="/blog/food-budget-in-your-20s"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            managing your food budget in your 20s
          </Link>
          {" "}feels overwhelming, meal planning is the single highest-impact
          change you can make. It saves more money than couponing, more
          than switching stores, more than buying generic brands (though
          you should do that too).
        </p>
      </div>

      {/* The shortcut */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The Shortcut That Saves the Whole Process
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Here&apos;s the thing about everything I just described: it works.
          But it requires you to sit down every week, pick meals, write
          lists, and plan. When you&apos;re also figuring out laundry, bills,
          and the fact that toilet paper doesn&apos;t just appear in the
          bathroom anymore, that planning time can feel like one more chore
          on an already overwhelming list.
        </p>
        <p>
          What&apos;s For Dinner does the planning for you. You set your
          preferences once &mdash; diet, budget, household size, cuisines
          you like, foods you hate &mdash; and it generates a personalized
          7-day meal plan with recipes and a grocery list every week.
          Delivered to your inbox. $7.99/mo.
        </p>
        <p>
          That&apos;s cheaper than one DoorDash order. It does the thinking
          for you while you&apos;re still learning. And it teaches you to
          cook because every plan comes with actual recipes &mdash; not
          just &quot;make chicken&quot; but step-by-step instructions for
          someone who&apos;s still figuring out what &quot;medium heat&quot;
          means.
        </p>
        <p>
          You can also start with a{" "}
          <Link
            href="/onboarding"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            free 3-day plan
          </Link>
          {" "}to see if it clicks. No signup required. Set your preferences,
          get a plan, try cooking from it this week. If it saves you even one
          takeout order, it&apos;s already paid for a month of the service.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Your first week is free
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Set your preferences in two minutes. Get a personalized meal plan
          with recipes and a grocery list by email. $7.99/mo after your
          trial &mdash; less than one DoorDash order.
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
            href="/blog/first-grocery-shopping-list"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Your First Grocery Shopping List
          </Link>
          <Link
            href="/blog/meal-planning-for-beginners"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Planning for Beginners: The Complete Guide
          </Link>
          <Link
            href="/blog/cheap-meals-for-one"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Cheap Meals for One: Budget-Friendly Ideas
          </Link>
          <Link
            href="/blog/meal-planning-in-your-20s"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Planning in Your 20s
          </Link>
          <Link
            href="/blog/splitting-groceries-with-roommates"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            How to Split Groceries with Roommates (Without Drama)
          </Link>
          <Link
            href="/blog/cooking-for-your-partner"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Cooking for Your Partner: 10 Impressive Meals Anyone Can Make
          </Link>
        </div>
        <p className="text-sm font-medium text-stone-400 mt-6 mb-4">
          Browse meal plans
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/meal-plans/meal-plan-for-beginners" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Beginner</Link>
          <Link href="/meal-plans/budget-friendly" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Budget-Friendly</Link>
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
