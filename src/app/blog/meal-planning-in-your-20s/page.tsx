import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Meal Planning in Your 20s: Stop Spending $300/Month on DoorDash",
  description:
    "You're spending $200-400/month on delivery apps. Here's how to meal plan your way out — even if you can't cook. Simple system, $50-75/week groceries, zero cooking skills needed.",
  openGraph: {
    title: "Meal Planning in Your 20s: Stop Spending $300/Month on DoorDash",
    description:
      "You're spending $200-400/month on delivery apps. Here's how to meal plan your way out — even if you can't cook. Simple system, $50-75/week groceries, zero cooking skills needed.",
    siteName: "What's For Dinner",
    type: "article",
    url: "https://whatsfordinner.fit/blog/meal-planning-in-your-20s",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meal Planning in Your 20s: Stop Spending $300/Month on DoorDash",
    description:
      "You're spending $200-400/month on delivery apps. Here's how to meal plan your way out — even if you can't cook.",
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/meal-planning-in-your-20s",
  },
};

export default function MealPlanningInYour20sArticle() {
  return (
    <>
      <ArticleJsonLd
        title="Meal Planning in Your 20s: Stop Spending $300/Month on DoorDash"
        description="You're spending $200-400/month on delivery apps. Here's how to meal plan your way out — even if you can't cook. Simple system, $50-75/week groceries, zero cooking skills needed."
        url="https://whatsfordinner.fit/blog/meal-planning-in-your-20s"
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
                name: "How much should a 20-something spend on groceries?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A single person in their 20s can eat well on $50-75 per week in groceries by meal planning and cooking at home. That's $200-300/month — compared to $300-500/month that most Gen Z spends on delivery apps and eating out. The key is buying staples like rice, pasta, eggs, and frozen vegetables instead of pre-made meals.",
                },
              },
              {
                "@type": "Question",
                name: "Is meal planning worth it in your 20s?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. The average 20-something spends $200-400/month on delivery apps like DoorDash and UberEats. Meal planning cuts food costs to $50-75/week for all meals — saving $150-300/month. That's $1,800-3,600/year back in your pocket, which could go toward rent, travel, savings, or student loans.",
                },
              },
              {
                "@type": "Question",
                name: "What's the easiest meal plan for someone who can't cook?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Start with 5 'assembly' meals that barely count as cooking: grain bowls (rice + protein + veggies + sauce), wraps and quesadillas, sheet pan dinners (throw everything on a pan, bake at 400F), basic stir-fry (protein + frozen veggies + soy sauce), and pasta with jarred sauce. If you can boil water and use an oven, you can make all of these.",
                },
              },
              {
                "@type": "Question",
                name: "How do I stop ordering DoorDash every night?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The fix isn't willpower — it's removing the decision. You order DoorDash because you're hungry, tired, and don't know what to make. Meal planning solves all three: you decide what to eat on Sunday when you're not starving, buy the ingredients in one trip, and when dinner time comes, you just follow the plan. Start with just 3 planned nights per week and build from there.",
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
          { name: "Meal Planning in Your 20s", url: "https://whatsfordinner.fit/blog/meal-planning-in-your-20s" },
        ]}
      />
      <article>
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        Meal Planning in Your 20s: A No-BS Guide
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Let&apos;s talk about the number you don&apos;t want to look at. Open
          your DoorDash app and check your spending for the last month. Go
          ahead &mdash; we&apos;ll wait.
        </p>
        <p>
          If you&apos;re like most people in their 20s, it&apos;s somewhere
          between $200 and $400. That&apos;s just one app. Add UberEats,
          Grubhub, the occasional Chipotle run, and the &quot;I&apos;ll just
          grab something&quot; trips &mdash; you&apos;re easily looking at
          $300-500 a month on food you eat in 15 minutes and forget about.
        </p>
        <p>
          That&apos;s $3,600 to $6,000 a year. On delivery fees and lukewarm
          pad thai.
        </p>
        <p>
          Meal planning cuts your food spending to $50-75 per week &mdash; for
          <em> all</em> your meals, not just dinner. That&apos;s $200-300 a
          month instead of $400-500. The savings add up to $1,800-3,600 a year.
          Enough for a trip, a few months of rent, or a solid start on that
          savings account you keep meaning to open.
        </p>
        <p>
          And no, you don&apos;t need to know how to cook.
        </p>
      </div>

      {/* You don't need to know how to cook */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        You Don&apos;t Need to Know How to Cook
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          This is the biggest lie holding you back. You think meal planning
          means becoming some kind of home chef &mdash; julienning vegetables,
          reducing sauces, knowing what &quot;deglaze&quot; means. It doesn&apos;t.
        </p>
        <p>
          You need exactly two skills: boiling water and turning on an oven.
          That&apos;s it. Here are five meals that are basically assembly, not
          cooking:
        </p>
        <ol className="list-decimal list-inside space-y-3 pl-1">
          <li>
            <strong>Grain bowls.</strong> Cook rice (or buy microwaveable
            packets). Add whatever protein you have &mdash; rotisserie chicken
            from the store, canned black beans, scrambled eggs. Top with
            whatever vegetables are in the fridge, drizzle with sauce. Done in
            10 minutes.
          </li>
          <li>
            <strong>Wraps and quesadillas.</strong> Tortilla + cheese + protein
            + whatever else. Fold, heat in a pan or microwave. Five minutes.
            You&apos;ve been eating these drunk at 2 AM for years &mdash; you
            already have the skills.
          </li>
          <li>
            <strong>Sheet pan dinners.</strong> Cut up chicken thighs and
            vegetables. Toss with olive oil, salt, pepper, and garlic powder.
            Put on a sheet pan. Bake at 400&deg;F for 25 minutes. Walk away and
            do something else while it cooks. Come back to dinner.
          </li>
          <li>
            <strong>Stir-fry.</strong> Any protein + a bag of frozen stir-fry
            vegetables + soy sauce + rice. Fifteen minutes in one pan. The
            frozen veggies are pre-cut, so there&apos;s literally no prep.
          </li>
          <li>
            <strong>Pasta.</strong> Boil pasta. Heat jarred sauce. Combine.
            Add ground meat or sausage if you want protein. This is the meal
            that got every college student through four years. It still works.
          </li>
        </ol>
        <p>
          That&apos;s five dinners. You now have a week&apos;s worth of meals.
          None of them require a recipe. None of them take more than 25 minutes.
          None of them need equipment beyond a pot, a pan, and a sheet pan.
        </p>
      </div>

      {/* The $50/week grocery list */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The $50/Week Grocery List
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Here&apos;s what to actually buy. This list feeds one person for a
          full week &mdash; breakfast, lunch, and dinner &mdash; for about $50-60:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li><strong>Rice</strong> (2 lb bag) &mdash; $2-3</li>
          <li><strong>Pasta</strong> (2 boxes) &mdash; $2-3</li>
          <li><strong>Chicken thighs</strong> (3 lbs) &mdash; $6-8</li>
          <li><strong>Eggs</strong> (dozen) &mdash; $3-4</li>
          <li><strong>Frozen stir-fry vegetables</strong> (2 bags) &mdash; $4-5</li>
          <li><strong>Frozen broccoli</strong> (1 bag) &mdash; $2</li>
          <li><strong>Canned black beans</strong> (3 cans) &mdash; $3</li>
          <li><strong>Canned diced tomatoes</strong> (2 cans) &mdash; $2</li>
          <li><strong>Jarred pasta sauce</strong> (1 jar) &mdash; $3</li>
          <li><strong>Cheese</strong> (shredded, 1 bag) &mdash; $3-4</li>
          <li><strong>Tortillas</strong> (pack of 10) &mdash; $3</li>
          <li><strong>Bread</strong> (1 loaf) &mdash; $2-3</li>
          <li><strong>Bananas</strong> (bunch) &mdash; $1</li>
          <li><strong>Peanut butter</strong> (1 jar) &mdash; $3</li>
          <li><strong>Olive oil</strong> (you probably already have this) &mdash; $5</li>
          <li><strong>Soy sauce, garlic powder, salt, pepper</strong> &mdash; $5-8 (one-time buy, lasts months)</li>
        </ul>
        <p>
          Total: $50-60. That covers grain bowls, stir-fry, pasta nights, wraps,
          sheet pan chicken, and simple breakfasts (eggs, toast, PB&amp;banana).
          The spices and oil are a one-time purchase that last weeks.
        </p>
        <p>
          Compare that to five DoorDash orders at $15-25 each. You&apos;re
          spending $75-125 on dinner alone &mdash; and that doesn&apos;t even
          cover breakfast and lunch.
        </p>
      </div>

      {/* Sunday prep */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Sunday Prep: 45 Minutes, Done for the Week
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          You don&apos;t have to cook everything on Sunday. You just have to
          make the week easier for future-you. Here&apos;s what 45 minutes of
          Sunday prep looks like:
        </p>
        <ol className="list-decimal list-inside space-y-3 pl-1">
          <li>
            <strong>Cook a big batch of rice</strong> (15 minutes hands-off).
            This covers grain bowls, stir-fry, and sides for 3-4 meals.
          </li>
          <li>
            <strong>Bake or season your chicken thighs</strong> (25 minutes in
            the oven). Slice them up and store in the fridge. Now you have
            protein ready to throw into bowls, wraps, or salads all week.
          </li>
          <li>
            <strong>Chop any fresh vegetables</strong> you bought (5 minutes).
            Bell peppers, onions, whatever. Store in containers. When it&apos;s
            time to cook, everything&apos;s already prepped.
          </li>
        </ol>
        <p>
          That&apos;s it. 45 minutes on Sunday. Now when you get home at 7 PM on
          a Tuesday, exhausted and hungry, you&apos;re not starting from scratch.
          You&apos;re assembling a meal from things that are already cooked.
          It&apos;s faster than waiting for DoorDash.
        </p>
        <p>
          If Sunday prep feels like too much, skip it entirely. You can still
          meal plan without prepping ahead &mdash; it just means cooking from
          scratch each night (which is still only 15-25 minutes for the meals
          above). Do whatever version you&apos;ll actually stick with.
        </p>
      </div>

      {/* Or just let AI do it */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Or Just Let AI Do It
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Here&apos;s the thing about meal planning: the system works, but
          actually sitting down to pick meals, find recipes, and build a grocery
          list every week is... a chore. You&apos;ll do it for two weeks and
          then you&apos;ll &quot;forget&quot; and order Chipotle again.
        </p>
        <p>
          That&apos;s the problem{" "}
          <Link
            href="/blog/ai-meal-planner"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            AI meal planners
          </Link>{" "}
          solve. You set your preferences once &mdash; budget, dietary needs,
          how many people you&apos;re feeding, what cuisines you like &mdash;
          and you get a personalized meal plan with recipes and a{" "}
          <Link
            href="/blog/meal-plan-with-grocery-list"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            complete grocery list
          </Link>{" "}
          every single week. No browsing Pinterest for recipes. No building
          spreadsheets. No decision fatigue.
        </p>
        <p>
          What&apos;s For Dinner does exactly this for{" "}
          <Link
            href="/onboarding"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            $7.99/month
          </Link>
          . That&apos;s roughly what a single DoorDash delivery fee costs.
          Except instead of one meal, you get a full week of dinners, lunches,
          and breakfasts with a grocery list you can take straight to the store.
        </p>
        <p>
          $7.99/month vs. $300+/month on delivery apps. The math does itself.
        </p>
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Stop spending $300/month on delivery
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Get a personalized meal plan with recipes and a grocery list every
          week. Set your preferences once &mdash; we handle the rest.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try Free &rarr;
        </Link>
      </div>

      {/* What about eating out with friends? */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        What About Eating Out with Friends?
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          This is the question everyone asks, and it has a simple answer: build
          it into the plan.
        </p>
        <p>
          Meal planning doesn&apos;t mean you never eat at a restaurant again.
          It means you&apos;re intentional about when you do. Plan for 5 dinners
          at home and leave 2 nights open. Maybe Friday is always your going-out
          night. Maybe Saturday is date night or hanging with friends. That&apos;s
          completely fine &mdash; and it&apos;s actually budgeted for now instead
          of being an impulse spend.
        </p>
        <p>
          The difference is the other 5 nights. Instead of each one being a $15-25
          DoorDash order because you couldn&apos;t figure out what to make, they&apos;re
          $3-5 home-cooked meals. That alone saves you $50-100 per week.
        </p>
        <p>
          Your social life doesn&apos;t suffer. Your bank account recovers. And
          honestly? The meals you eat out feel more special when they&apos;re not
          your default.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Your first week is free
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Set your budget, dietary preferences, and cooking skill level.
          Get a personalized 7-day meal plan with recipes and a grocery list
          &mdash; delivered to your inbox. $7.99/mo after your trial.
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
            href="/blog/meal-plan-with-grocery-list"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Plan with Grocery List: The Complete Solution
          </Link>
        </div>
        <p className="text-sm font-medium text-stone-400 mt-6 mb-4">
          Browse meal plans
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/meal-plans/budget-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Budget</Link>
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans/meal-plan-for-beginners" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Beginner</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
