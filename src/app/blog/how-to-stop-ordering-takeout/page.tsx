import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";

export const metadata: Metadata = {
  title: "How to Stop Ordering Takeout Every Night (2026)",
  description:
    "You said you'd stop ordering DoorDash. Again. Here's the system that actually works — meal planning that takes 10 minutes and saves $200+/month.",
  openGraph: {
    title: "How to Stop Ordering Takeout Every Night (2026)",
    description:
      "You said you'd stop ordering DoorDash. Again. Here's the system that actually works — meal planning that takes 10 minutes and saves $200+/month.",
    siteName: "What's For Dinner",
    type: "article",
    url: "https://whatsfordinner.fit/blog/how-to-stop-ordering-takeout",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Stop Ordering Takeout Every Night (2026)",
    description:
      "You said you'd stop ordering DoorDash. Again. Here's the system that actually works — meal planning that takes 10 minutes and saves $200+/month.",
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/how-to-stop-ordering-takeout",
  },
};

export default function HowToStopOrderingTakeoutArticle() {
  return (
    <>
      <ArticleJsonLd
        title="How to Stop Ordering Takeout Every Night (2026)"
        description="You said you'd stop ordering DoorDash. Again. Here's the system that actually works — meal planning that takes 10 minutes and saves $200+/month."
        url="https://whatsfordinner.fit/blog/how-to-stop-ordering-takeout"
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
                name: "How do I stop ordering food every day?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The key is removing the decision, not relying on willpower. You order food because you're hungry and don't have a plan. Fix this by deciding what you'll eat for the week on Sunday, buying the groceries in one trip, and doing minimal prep. When you already know what's for dinner and the ingredients are ready, cooking is faster and easier than ordering.",
                },
              },
              {
                "@type": "Question",
                name: "How much money can I save by not ordering takeout?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If you order takeout 5 times a week at $15-25 per order, that's $75-125/week or $300-500/month. Cooking at home with a meal plan costs $50-100/week for all meals. That's a savings of $150-400 per month, or $1,800-4,800 per year. Even cutting takeout from 5 nights to 2 saves $100-200/month.",
                },
              },
              {
                "@type": "Question",
                name: "What's an easy alternative to ordering takeout?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The easiest alternative is a weekly meal plan with simple recipes and a pre-made grocery list. You shop once, and each night you already know what to cook. Start with easy meals that take 15-20 minutes: pasta, stir-fry, grain bowls, quesadillas, and sheet pan dinners. An AI meal planner like What's For Dinner can generate the plan and grocery list automatically for $7.99/month.",
                },
              },
              {
                "@type": "Question",
                name: "Why do I keep ordering DoorDash?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You order DoorDash because of decision fatigue — you're making the choice about what to eat when you're already hungry, tired, and have low willpower. It's not laziness, it's biology. The solution is making food decisions when you're NOT hungry (Sunday planning) so that when 7 PM hits on a Tuesday, the decision is already made and the ingredients are already in your fridge.",
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
          { name: "How to Stop Ordering Takeout", url: "https://whatsfordinner.fit/blog/how-to-stop-ordering-takeout" },
        ]}
      />
      <article>
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        How to Stop Ordering Takeout Every Night
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          You&apos;ve had this conversation with yourself before. Probably
          this week. &quot;I need to stop ordering food. I&apos;m going to
          cook more. Starting Monday.&quot;
        </p>
        <p>
          Monday comes. You get home at 7 PM. You&apos;re tired. The fridge
          has condiments and half a bag of spinach that&apos;s seen better days.
          You open DoorDash &quot;just to see what&apos;s around.&quot; Twenty
          minutes and $22 later, you&apos;re eating pad thai on the couch,
          feeling a mix of satisfaction and guilt.
        </p>
        <p>
          You&apos;re not lazy. You&apos;re not bad with money. You&apos;re
          just making a high-stakes decision (what to eat) at the worst
          possible time (when you&apos;re already hungry and exhausted). That&apos;s
          a game you&apos;ll lose every single time. The fix isn&apos;t
          willpower &mdash; it&apos;s removing the decision entirely.
        </p>
      </div>

      {/* Why you keep ordering takeout */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Why You Keep Ordering Takeout
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          It&apos;s not because you love spending $20 on mid food. It&apos;s
          because of three things happening at the same time:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>Decision fatigue.</strong> By 7 PM, you&apos;ve made
            hundreds of decisions at work. Your brain is done deciding things.
            &quot;What&apos;s for dinner?&quot; is one more decision and your
            brain takes the path of least resistance: let someone else figure
            it out.
          </li>
          <li>
            <strong>You don&apos;t know what&apos;s in the fridge.</strong> Even
            if you wanted to cook, you&apos;d have to open the fridge, assess
            what&apos;s there, figure out what you can make with it, and then
            actually cook it. That&apos;s three steps before you even start.
            DoorDash is one tap.
          </li>
          <li>
            <strong>Cooking feels like a chore.</strong> Because without a plan,
            it IS a chore. You&apos;re not just cooking &mdash; you&apos;re also
            meal planning, recipe hunting, and grocery assessing in real-time
            while your stomach growls. No wonder it feels like too much.
          </li>
        </ul>
        <p>
          Notice what&apos;s missing from that list? Discipline. It&apos;s not a
          character flaw. It&apos;s a systems problem. And systems problems have
          systems solutions.
        </p>
      </div>

      {/* The one thing that actually works */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The One Thing That Actually Works
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Having a plan <em>before</em> you&apos;re hungry. That&apos;s literally it.
        </p>
        <p>
          When you already know what&apos;s for dinner and the ingredients are
          sitting in your fridge, the equation flips. Cooking becomes the path
          of least resistance. You don&apos;t have to decide anything &mdash;
          you just execute. Open the plan, pull out the ingredients, cook for
          15-20 minutes, eat.
        </p>
        <p>
          It&apos;s actually faster than ordering. A DoorDash order takes 30-45
          minutes from tap to first bite. A simple stir-fry takes 15 minutes.
          Pasta with sauce takes 12 minutes. A quesadilla takes 8 minutes.
          When everything&apos;s prepped and ready, cooking beats delivery on
          speed every single time.
        </p>
        <p>
          The key insight: <strong>you make the food decision on Sunday, when
          you&apos;re rested and fed and thinking clearly.</strong> Not on
          Tuesday at 7 PM when you&apos;re running on fumes. Sunday-you is
          smart and motivated. Tuesday-you just needs to follow instructions.
        </p>
      </div>

      {/* The math that hurts */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The Math That Hurts
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Let&apos;s make this concrete. Say you order takeout 5 nights a week
          (which is common &mdash; no judgment):
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border border-stone-200 rounded-xl overflow-hidden">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-stone-700">Expense</th>
                <th className="px-4 py-3 font-semibold text-stone-700">Weekly</th>
                <th className="px-4 py-3 font-semibold text-stone-700">Monthly</th>
                <th className="px-4 py-3 font-semibold text-stone-700">Yearly</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Takeout (5x/week @ $20 avg)</td>
                <td className="px-4 py-3">$100</td>
                <td className="px-4 py-3">$400</td>
                <td className="px-4 py-3 text-red-500 font-semibold">$4,800</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Meal planning (all meals)</td>
                <td className="px-4 py-3">$50-75</td>
                <td className="px-4 py-3">$200-300</td>
                <td className="px-4 py-3 text-green-600 font-semibold">$2,400-3,600</td>
              </tr>
              <tr className="bg-orange-50/50">
                <td className="px-4 py-3 font-semibold text-stone-800">You save</td>
                <td className="px-4 py-3 font-semibold">$25-50</td>
                <td className="px-4 py-3 font-semibold">$100-200</td>
                <td className="px-4 py-3 font-semibold text-orange-600">$1,200-2,400</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          And that&apos;s the conservative math &mdash; $20 per takeout order is
          on the low end once you add delivery fees, service fees, and tip. Many
          people are spending $25-30 per order, which pushes the yearly takeout
          total past $6,000.
        </p>
        <p>
          Meanwhile, $50-75/week in groceries covers <em>all</em> your meals.
          Breakfast, lunch, dinner, and snacks. Not just dinner.
        </p>
      </div>

      {/* Start with just 3 nights */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Start with Just 3 Nights
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Here&apos;s where most advice gets it wrong: they tell you to go from
          ordering takeout every night to cooking every night. That&apos;s like
          going from zero gym sessions to six per week. You&apos;ll last three
          days.
        </p>
        <p>
          Instead, start with 3 planned dinners this week. Pick the three
          easiest meals you can think of:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>Monday: Pasta with jarred sauce (12 minutes)</li>
          <li>Wednesday: Chicken quesadillas (10 minutes)</li>
          <li>Friday: Stir-fry with frozen veggies (15 minutes)</li>
        </ul>
        <p>
          The other four nights? Do whatever you want. Order food, eat out with
          friends, make a sandwich, eat cereal. It doesn&apos;t matter. You&apos;re
          not trying to be perfect. You&apos;re trying to build a habit.
        </p>
        <p>
          Next week, add a fourth night. The week after, a fifth. Within a
          month, you&apos;ll be cooking most nights not because you forced
          yourself, but because you realized it&apos;s actually easier when
          you have a plan. And the $100+ you&apos;re saving each month doesn&apos;t
          hurt either.
        </p>
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Can&apos;t be bothered to plan? Same.
        </p>
        <p className="text-stone-500 text-sm mb-5">
          What&apos;s For Dinner generates your meal plan with recipes and a
          grocery list every week. You just shop and cook.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try Free &rarr;
        </Link>
      </div>

      {/* The cheat code */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The Cheat Code: Automated Meal Plans
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          The system above works. But it still requires you to pick meals,
          find recipes, and write a grocery list every week. For some people,
          that 20-30 minutes of planning is the friction that kills the habit.
        </p>
        <p>
          That&apos;s why{" "}
          <Link
            href="/blog/ai-meal-planner"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            AI meal planners
          </Link>{" "}
          exist. You tell it your preferences once &mdash; what you like to eat,
          your budget, your dietary needs, how many people you&apos;re cooking
          for &mdash; and it generates a{" "}
          <Link
            href="/blog/meal-plan-with-grocery-list"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            personalized meal plan with recipes and a grocery list
          </Link>{" "}
          every single week. No decisions, no recipe hunting, no grocery list
          building.
        </p>
        <p>
          What&apos;s For Dinner does this for{" "}
          <Link
            href="/onboarding"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            $7.99/month
          </Link>
          . That&apos;s the cost of one delivery fee. Except instead of one
          meal, you get an entire week of meals planned, with recipes you can
          actually follow and a grocery list you can take to the store.
        </p>
        <p>
          If you&apos;re spending $200-400/month on takeout, spending $8 to
          eliminate the planning barrier is the highest-ROI subscription you&apos;ll
          ever buy. It&apos;s not even close.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Your first week is free
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Set your preferences in two minutes. Get a personalized meal plan
          with recipes and a grocery list &mdash; no more deciding what&apos;s
          for dinner. $7.99/mo after your trial.
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
            href="/blog/cheap-meals-for-one"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Cheap Meals for One: 15 Dinners Under $3/Serving
          </Link>
          <Link
            href="/blog/meal-planning-in-your-20s"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Planning in Your 20s: Stop Spending $300/Month on DoorDash
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
