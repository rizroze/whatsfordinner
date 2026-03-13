import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Meal Planning vs. DoorDash: Save $400/Month (2026)",
  description:
    "The average DoorDash user spends $450/month on delivery. Meal planning costs $50-100/week for all meals. Here's the complete cost breakdown and how to switch.",
  openGraph: {
    title: "Meal Planning vs. DoorDash: Save $400/Month (2026)",
    description:
      "The average DoorDash user spends $450/month on delivery. Meal planning costs $50-100/week for all meals. Here's the complete cost breakdown and how to switch.",
    siteName: "What's For Dinner",
    type: "article",
    url: "https://whatsfordinner.fit/blog/meal-planning-vs-doordash",
  },
  alternates: { canonical: "https://whatsfordinner.fit/blog/meal-planning-vs-doordash" },
  twitter: {
    card: "summary_large_image",
    title: "Meal Planning vs. DoorDash: Save $400/Month (2026)",
    description:
      "The average DoorDash user spends $450/month on delivery. Meal planning costs $50-100/week for all meals. Here's the complete cost breakdown.",
  },
};

export default function MealPlanningVsDoordashPage() {
  return (
    <>
      <ArticleJsonLd
        title="Meal Planning vs. DoorDash: The $5,000/Year Difference"
        description="The average DoorDash user spends $450/month on delivery. Meal planning costs $50-100/week for all meals. Here's the complete cost breakdown and how to switch."
        url="https://whatsfordinner.fit/blog/meal-planning-vs-doordash"
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
                name: "How much does the average person spend on DoorDash?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The average DoorDash user spends $350-500/month on food delivery, according to industry reports and user surveys. The average order is $25-35 including food, delivery fees, service fees, and tip. Regular users order 4-5 times per week, adding up to $4,200-6,000 per year on delivery alone.",
                },
              },
              {
                "@type": "Question",
                name: "Is cooking cheaper than DoorDash?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, significantly. The average home-cooked meal costs $2-4 per serving, compared to $15-25 per meal on DoorDash (after fees and tip). Cooking at home with a meal plan costs roughly $250-400/month for all meals. DoorDash costs $350-500/month and doesn't cover every meal. You can save $2,000-5,000 per year by switching to meal planning.",
                },
              },
              {
                "@type": "Question",
                name: "How do I stop spending so much on food delivery?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The biggest reason people order delivery is decision fatigue — not knowing what to cook. A meal planning app like What's For Dinner eliminates that by giving you a full week of meals planned in advance with a grocery list. Start by replacing 3-4 delivery nights per week with planned meals. Most people save $200-400/month within the first month of switching.",
                },
              },
              {
                "@type": "Question",
                name: "How much can meal planning save per year?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Meal planning saves the average household $2,000-5,000 per year compared to regular food delivery use. The savings come from three places: lower cost per meal ($2-4 vs $15-25), less food waste from buying only what you need, and fewer impulse purchases. A meal planning app costs $7.99/month — paying for itself many times over.",
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
          { name: "Meal Planning vs. DoorDash", url: "https://whatsfordinner.fit/blog/meal-planning-vs-doordash" },
        ]}
      />
      <article>
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-sm text-stone-400 mb-8">March 13, 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        Meal Planning vs. DoorDash: The $5,000/Year Difference
      </h1>

      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          You know the routine. It&apos;s 6:30pm. You&apos;re tired. The fridge has
          stuff in it but nothing sounds good. You open DoorDash &quot;just to
          browse.&quot; Twenty minutes later, you&apos;ve placed a $28 order for pad
          thai that will arrive in 45 minutes and taste okay. You do this 4 times
          this week.
        </p>
        <p>
          No judgment — this is one of the most common spending patterns in America.
          But if you&apos;ve opened your bank statement and thought &quot;wait, I
          spent <em>how much</em> on delivery?&quot; — this article is the wake-up
          call with actual numbers and a realistic exit plan.
        </p>
      </div>

      {/* --- The real cost of DoorDash --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The real cost of DoorDash (it&apos;s worse than you think)
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Let&apos;s break down a typical DoorDash order:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Food:</strong> $15&ndash;20 (menu prices are often 15&ndash;30% higher than in-store)</li>
          <li><strong>Delivery fee:</strong> $2&ndash;6 (even with DashPass)</li>
          <li><strong>Service fee:</strong> $2&ndash;4</li>
          <li><strong>Small order fee:</strong> $2 (orders under $12)</li>
          <li><strong>Tip:</strong> $3&ndash;6</li>
          <li><strong>Total per order:</strong> $25&ndash;35</li>
        </ul>
        <p>
          Now multiply that by frequency. According to industry data, regular
          DoorDash users order 4&ndash;5 times per week. Some order daily. Let&apos;s
          be conservative and say 4 times per week at $28 average:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Weekly:</strong> 4 orders x $28 = $112/week</li>
          <li><strong>Monthly:</strong> $448/month</li>
          <li><strong>Yearly:</strong> $5,376/year</li>
        </ul>
        <p>
          And that&apos;s just DoorDash. Add Uber Eats orders, the occasional
          Grubhub, plus all the meals you <em>do</em> buy groceries for, and many
          people are spending $600&ndash;800/month on food total — with delivery
          making up the majority.
        </p>
        <p>
          DashPass ($9.99/month) makes it feel cheaper by removing some delivery
          fees, but it actually increases spending by encouraging more frequent
          orders. It&apos;s a classic subscription trap.
        </p>
      </div>

      {/* --- The cost of meal planning --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The cost of meal planning
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Now let&apos;s look at the other side. With meal planning, your food
          costs are:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Meal planning app:</strong> $7.99/month (
            <Link href="/onboarding" className="text-orange-500 hover:text-orange-600 underline">
              What&apos;s For Dinner
            </Link>
            )</li>
          <li><strong>Groceries:</strong> $60&ndash;100/week for one person, $80&ndash;150 for two</li>
          <li><strong>Monthly total (one person):</strong> $248&ndash;408/month</li>
          <li><strong>Monthly total (couple):</strong> $328&ndash;608/month</li>
        </ul>
        <p>
          That covers <em>every meal</em>. Breakfast, lunch, dinner, and snacks.
          Not 4 dinners — everything. The per-meal cost works out to $2&ndash;4
          per serving, compared to $15&ndash;25 on DoorDash.
        </p>

        <p>
          <strong>The savings for a single person:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>DoorDash: ~$450/month</li>
          <li>Meal planning: ~$330/month (groceries + app)</li>
          <li><strong>Monthly savings: $120&ndash;200</strong></li>
          <li><strong>Annual savings: $1,440&ndash;2,400</strong></li>
        </ul>

        <p>
          <strong>For a heavy DoorDash user (daily orders):</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>DoorDash: ~$750/month</li>
          <li>Meal planning: ~$330/month</li>
          <li><strong>Monthly savings: $420</strong></li>
          <li><strong>Annual savings: $5,040</strong></li>
        </ul>
        <p>
          That&apos;s a vacation. A car payment. A solid emergency fund. The
          money is real.
        </p>
      </div>

      {/* --- Mid-article CTA --- */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Stop spending $400/month on delivery
        </p>
        <p className="text-stone-500 text-sm mb-6">
          Get a personalized weekly meal plan with recipes + grocery list. $7.99/mo vs. $28/order.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try your free plan
        </Link>
      </div>

      {/* --- Why people still use DoorDash --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Why people keep ordering DoorDash (even when they know the cost)
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          If cooking is so much cheaper, why does everyone keep ordering delivery?
          Because the cost isn&apos;t the problem. These are:
        </p>
        <p>
          <strong>Decision fatigue.</strong> After a long day, your brain has zero
          capacity left for &quot;what should I cook?&quot; DoorDash removes the
          decision. You scroll, you pick, it arrives. The cognitive load is near
          zero.
        </p>
        <p>
          <strong>No plan = no execution.</strong> You <em>intended</em> to cook
          this week. You even bought groceries. But you didn&apos;t decide
          <em> what</em> to cook with them, so by Wednesday the chicken is still in
          the fridge and you&apos;re opening the app again.
        </p>
        <p>
          <strong>The convenience gap.</strong> Cooking takes 30&ndash;60 minutes.
          DoorDash takes 30 seconds of scrolling. When you&apos;re exhausted, that
          gap feels insurmountable.
        </p>
        <p>
          <strong>Habit loops.</strong> The DoorDash app is designed to trigger
          ordering behavior. Notifications at dinner time. Past orders one tap
          away. Promotions that create urgency. It&apos;s a habit machine.
        </p>
        <p>
          Notice something? Three of those four reasons are about <em>planning</em>,
          not cooking. The cooking itself isn&apos;t the barrier. The barrier is
          not knowing what to cook.
        </p>
      </div>

      {/* --- How meal planning solves these --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        How meal planning solves every one of those problems
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          <strong>Decision fatigue?</strong> Eliminated. Your meals are decided for
          the entire week before Monday morning. When 6pm hits, you already know
          what&apos;s for dinner. Open the plan, start cooking.
        </p>
        <p>
          <strong>No plan?</strong> Solved. A{" "}
          <Link href="/blog/meal-plan-with-grocery-list" className="text-orange-500 hover:text-orange-600 underline">
            meal plan with a grocery list
          </Link>{" "}
          means you bought exactly what you need for this week&apos;s recipes. No
          mystery ingredients in the fridge. No &quot;I have chicken but what do I
          do with it?&quot; moments.
        </p>
        <p>
          <strong>The convenience gap?</strong> Narrower than you think. With a
          plan, cooking goes from &quot;figure out what to make + gather
          ingredients + cook&quot; (60+ minutes of cognitive load) to just
          &quot;cook&quot; (20&ndash;40 minutes of actual cooking). The planning
          was the hard part, and it&apos;s already done.
        </p>
        <p>
          <strong>Habit loops?</strong> Replace the trigger. Instead of the
          DoorDash notification at 5pm, you have a meal plan email in your inbox
          every Sunday. The new habit loop: check plan → grab ingredients →
          cook. After 2&ndash;3 weeks, it sticks.
        </p>
      </div>

      {/* --- The transition plan --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The realistic transition plan (don&apos;t go cold turkey)
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Going from ordering DoorDash 5 nights a week to cooking every night is
          like going from the couch to running a marathon. You&apos;ll burn out
          by Wednesday. Here&apos;s a more realistic approach:
        </p>
        <p>
          <strong>Week 1&ndash;2: Replace 2 delivery nights with planned meals.</strong>{" "}
          Pick Tuesday and Thursday (or whatever your least-busy evenings are).
          Follow the meal plan those nights, order delivery the rest. You&apos;re
          saving $50&ndash;60/week already.
        </p>
        <p>
          <strong>Week 3&ndash;4: Replace 4 delivery nights.</strong> Keep one
          &quot;treat night&quot; — Friday, probably — where you order guilt-free.
          The other 4 weeknights come from the plan. Savings jump to
          $100&ndash;120/week.
        </p>
        <p>
          <strong>Month 2+: Cook 5&ndash;6 nights, order 1&ndash;2.</strong> By
          now you&apos;ve built the habit. Cooking feels normal, not heroic.
          DoorDash becomes a treat, not a default. Your monthly food budget drops
          from $450 to $250&ndash;350.
        </p>
        <p>
          <strong>The key:</strong> Don&apos;t delete DoorDash. Don&apos;t shame
          yourself for ordering. Just have a better default. When dinner is already
          decided and groceries are already in the fridge, the{" "}
          <Link href="/blog/how-to-stop-ordering-takeout" className="text-orange-500 hover:text-orange-600 underline">
            urge to order delivery
          </Link>{" "}
          drops dramatically on its own.
        </p>
      </div>

      {/* --- What about nutrition --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The nutrition angle nobody talks about
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Restaurant and delivery food averages 1,200&ndash;1,500 calories per meal
          with 60&ndash;80% more sodium than home-cooked equivalents. That&apos;s
          not because restaurants are evil — it&apos;s because butter, oil, and salt
          make food taste better, and restaurants optimize for taste, not nutrition.
        </p>
        <p>
          Home-cooked meals from a meal plan typically run 400&ndash;700 calories
          with controlled sodium. Over a month, switching 4 delivery meals per
          week to home-cooked meals reduces your weekly calorie intake by
          2,000&ndash;4,000 calories and sodium by 3,000&ndash;5,000mg.
        </p>
        <p>
          You don&apos;t need to be on a diet. You don&apos;t need to count macros.
          Just cooking at home instead of ordering delivery is one of the highest-
          impact health changes you can make.
        </p>
      </div>

      {/* --- But I can't cook --- */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        &quot;But I can&apos;t cook&quot;
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          You can. Most{" "}
          <Link href="/blog/meal-planning-for-beginners" className="text-orange-500 hover:text-orange-600 underline">
            meal planning apps for beginners
          </Link>{" "}
          generate recipes with clear step-by-step instructions, using basic
          techniques. If you can boil water, follow a recipe, and set a timer, you
          can cook 90% of what a meal planner suggests.
        </p>
        <p>
          The &quot;I can&apos;t cook&quot; story is usually &quot;I don&apos;t know
          what to cook.&quot; Having a plan eliminates that barrier. You&apos;re not
          inventing a dish from scratch — you&apos;re following instructions for a
          meal someone (or an AI) already designed. It&apos;s the same skill set as
          following a meal kit recipe, minus the pre-portioned bags.
        </p>
        <p>
          Start with a{" "}
          <Link href="/onboarding" className="text-orange-500 hover:text-orange-600 underline">
            free 3-day plan
          </Link>{" "}
          and cook one meal. If it works, you can cook. The rest is just repetition.
        </p>
      </div>

      {/* --- Bottom CTA --- */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Save $200&ndash;400/month on food
        </p>
        <p className="text-stone-500 text-sm mb-6">
          Personalized weekly meal plans with recipes + grocery list. $7.99/mo. Cancel anytime.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Start your free trial
        </Link>
      </div>

      {/* Related articles + meal plans */}
      <div className="border-t border-stone-100 mt-12 pt-8">
        <p className="text-sm font-medium text-stone-400 mb-4">
          Related articles
        </p>
        <div className="space-y-3">
          <Link
            href="/blog/how-to-stop-ordering-takeout"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            How to Stop Ordering Takeout Every Night (2026)
          </Link>
          <Link
            href="/blog/save-money-groceries-meal-planning"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            How to Save Money on Groceries with Meal Planning
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
          <Link href="/meal-plans/cheap-meals-for-one" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Cheap Meals for One</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
