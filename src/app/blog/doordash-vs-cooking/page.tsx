import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";

export const metadata: Metadata = {
  title: "DoorDash vs. Cooking at Home: The Real Cost (2026)",
  description:
    "DoorDash averages $25/order with fees. Cooking the same meal costs $3-5. Here's the real math on delivery apps vs. cooking — and how to actually make the switch.",
  openGraph: {
    title: "DoorDash vs. Cooking at Home: The Real Cost (2026)",
    description:
      "DoorDash averages $25/order with fees. Cooking the same meal costs $3-5. Here's the real math on delivery apps vs. cooking — and how to actually make the switch.",
    siteName: "What's For Dinner",
    type: "article",
    url: "https://whatsfordinner.fit/blog/doordash-vs-cooking",
  },
  twitter: {
    card: "summary_large_image",
    title: "DoorDash vs. Cooking at Home: The Real Cost (2026)",
    description:
      "DoorDash averages $25/order with fees. Cooking the same meal costs $3-5. Here's the real math on delivery apps vs. cooking.",
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/doordash-vs-cooking",
  },
};

export default function DoorDashVsCookingArticle() {
  return (
    <>
      <ArticleJsonLd
        title="DoorDash vs. Cooking at Home: The Real Cost (2026)"
        description="DoorDash averages $25/order with fees. Cooking the same meal costs $3-5. Here's the real math on delivery apps vs. cooking — and how to actually make the switch."
        url="https://whatsfordinner.fit/blog/doordash-vs-cooking"
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
                name: "How much does the average person spend on DoorDash per month?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The average DoorDash user spends $150-300 per month on delivery orders. Frequent users who order 4-5 times per week can easily spend $400-600 per month when you factor in delivery fees, service fees, and tips — which typically add $8-11 on top of the food price.",
                },
              },
              {
                "@type": "Question",
                name: "Is it really cheaper to cook at home?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The average home-cooked meal costs $3-5 per serving, while the same meal ordered through DoorDash costs $20-25 after fees and tip. Cooking at home is roughly 4-5x cheaper per meal. Even factoring in grocery costs and time, cooking saves most people $200-400 per month compared to regular delivery app use.",
                },
              },
              {
                "@type": "Question",
                name: "How do I stop using food delivery apps?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The most effective method is meal planning — deciding what you'll eat before you're hungry and having groceries already in the fridge. Start by cooking just 2-3 nights per week while keeping 1-2 delivery nights. Gradually increase cooking nights as it becomes routine. Delete the apps from your home screen (not your phone) so they're not the first thing you see when hungry.",
                },
              },
              {
                "@type": "Question",
                name: "What's the cheapest way to eat without cooking?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If you truly can't cook, the cheapest options are: rotisserie chicken and pre-made sides from the grocery store ($8-10 for 2-3 meals), deli sandwiches ($5-7), canned soups and pre-made salads, and microwave meals ($3-5 each). All of these are significantly cheaper than delivery apps. But even basic cooking — pasta, rice bowls, sandwiches — saves even more.",
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
          { name: "DoorDash vs. Cooking (2026)", url: "https://whatsfordinner.fit/blog/doordash-vs-cooking" },
        ]}
      />
      <article>
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-sm text-stone-400 mb-8">Updated March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        DoorDash vs. Cooking: You&apos;re Spending $6,000/Year on Delivery
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Nobody talks about delivery app spending the way they should. Not your
          bank. Not your friends. Definitely not DoorDash. Because the way it
          works &mdash; $15 here, $18 there, always just a tap away &mdash;
          makes it feel like small purchases. It&apos;s not small. For a lot of
          people, it&apos;s $400 to $600 a month. That&apos;s rent in some
          cities. That&apos;s a car payment. That&apos;s an entire vacation fund
          being converted into lukewarm pad thai in a styrofoam container.
        </p>
        <p>
          Let&apos;s do the math. Not the vague &quot;cooking is cheaper&quot;
          advice your parents gave you. The actual, real, line-item math on what
          delivery apps cost versus cooking the same food at home. And then
          let&apos;s talk about why you keep ordering anyway &mdash; because
          it&apos;s not laziness &mdash; and what actually fixes the problem.
        </p>
      </div>

      {/* The real cost of a DoorDash order */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The Real Cost of a DoorDash Order
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Here&apos;s what a typical DoorDash order actually costs when you add
          everything up. Let&apos;s say you order a chicken burrito bowl &mdash;
          one of the most common orders on the platform:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border border-stone-200 rounded-xl overflow-hidden">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-stone-700">Line Item</th>
                <th className="px-4 py-3 font-semibold text-stone-700">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr>
                <td className="px-4 py-3">Food (burrito bowl)</td>
                <td className="px-4 py-3">$12.00</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Delivery fee</td>
                <td className="px-4 py-3">$4.99</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Service fee</td>
                <td className="px-4 py-3">$3.20</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Tip</td>
                <td className="px-4 py-3">$3.00</td>
              </tr>
              <tr className="bg-orange-50">
                <td className="px-4 py-3 font-semibold text-stone-800">Total for one meal</td>
                <td className="px-4 py-3 font-semibold text-stone-800">$23.19</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          That&apos;s $23 for one meal for one person. And that&apos;s not even a
          fancy order &mdash; it&apos;s a burrito bowl. Now scale it:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>3x per week</strong> = $69/week = <strong>$276/month</strong> = $3,312/year
          </li>
          <li>
            <strong>5x per week</strong> = $115/week = <strong>$460/month</strong> = $5,520/year
          </li>
          <li>
            <strong>Daily</strong> = $161/week = <strong>$644/month</strong> = $7,728/year
          </li>
        </ul>
        <p>
          &quot;But I have DashPass,&quot; you say. Sure, DashPass waives delivery
          fees on orders over $12. That saves you maybe $5 per order. You&apos;re
          still paying $18+ per meal. And the subscription itself costs $9.99/month,
          which means you need to order frequently just to break even on the pass.
          DoorDash designed it that way.
        </p>
        <p>
          Now here&apos;s the same burrito bowl made at home: chicken thighs, rice,
          black beans, salsa, cheese, lettuce. Total ingredient cost for one serving:
          about <strong>$3.50</strong>. Make enough for two servings and your cost
          per meal drops to around <strong>$2.75</strong>.
        </p>
        <p>
          That&apos;s a 6:1 cost ratio. For every dollar you spend cooking, you
          spend six dollars ordering the same food through a delivery app.
        </p>
      </div>

      {/* What $5,500 buys you */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        What $5,500 Buys You
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Let&apos;s make this concrete. If you&apos;re ordering delivery 5
          times a week and you switch to cooking those meals at home, you save
          roughly $5,500 per year. Here&apos;s what that money could do instead:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>A round-trip flight to Europe plus a week of hotels</li>
          <li>Six months of rent in a mid-size city</li>
          <li>A down payment on a used car</li>
          <li>An entire year of groceries AND a meal planning service</li>
          <li>Max out a Roth IRA contribution (and start building real wealth)</li>
          <li>A new MacBook, a new phone, and still have change left</li>
        </ul>
        <p>
          This isn&apos;t theoretical money. It&apos;s money you&apos;re spending
          right now, every month, on delivery fees and service charges that
          evaporate the moment the driver pulls away. The food is the same food.
          The only difference is who heats it up and who profits from the
          transaction.
        </p>
      </div>

      {/* Why you keep ordering */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Why You Keep Ordering Anyway
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          If cooking is objectively cheaper, why does everyone still order? It&apos;s
          not because you&apos;re lazy. It&apos;s because delivery apps are
          solving a real problem &mdash; they just solve it in the most expensive
          way possible.
        </p>
        <p>The real reasons you order delivery:</p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>You have no plan.</strong> It&apos;s 7 PM. You&apos;re hungry.
            You have no idea what to cook. Opening DoorDash is faster than
            figuring it out.
          </li>
          <li>
            <strong>There&apos;s nothing in the fridge.</strong> Even if you wanted
            to cook, you don&apos;t have ingredients. Going to the store takes 45
            minutes. DoorDash takes 30.
          </li>
          <li>
            <strong>You&apos;re tired after work.</strong> Cooking after a long
            day feels like a second job. Ordering feels like self-care. (It
            isn&apos;t, but it feels that way at 7 PM.)
          </li>
          <li>
            <strong>The app is right there.</strong> DoorDash has a notification
            on your phone, a shortcut on your home screen, and your card saved.
            The friction to order is zero. The friction to cook is enormous.
          </li>
        </ul>
        <p>
          Notice something? Every single one of these is a <strong>design
          problem</strong>, not a character flaw. You&apos;re not failing at
          adulting. The system is designed to make ordering easier than cooking.
          So the fix isn&apos;t &quot;try harder&quot; &mdash; it&apos;s changing
          the system.
        </p>
      </div>

      {/* The fix */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The Fix: Remove the Decision
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          The single most effective thing you can do is{" "}
          <Link
            href="/blog/meal-planning-for-beginners"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            meal plan
          </Link>
          . Not because it&apos;s virtuous. Because it removes the moment
          where you decide to order.
        </p>
        <p>
          Think about it. You order delivery because you&apos;re hungry with no
          plan and no groceries. Meal planning eliminates both problems at once:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>Dinner is already decided</strong> before you&apos;re hungry.
            There&apos;s no decision to make. No browsing. No comparing
            restaurants. You just look at the plan.
          </li>
          <li>
            <strong>Groceries are already there.</strong> You shopped on Sunday
            with a list. The chicken is in the fridge. The rice is in the pantry.
            Cooking is now the path of least resistance.
          </li>
          <li>
            <strong>You know it&apos;ll take 20 to 30 minutes.</strong> Most
            weeknight meals take less time than waiting for DoorDash. Seriously.
            The average delivery takes 35 to 50 minutes. A stir-fry takes 15.
          </li>
        </ul>
        <p>
          Meal planning doesn&apos;t require willpower. It replaces willpower with
          a system. When the default is &quot;I already know what I&apos;m making
          and I have everything I need,&quot; you don&apos;t have to resist the
          urge to order &mdash; the urge barely shows up.
        </p>
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Stop spending $400/month on delivery
        </p>
        <p className="text-stone-500 text-sm mb-5">
          What&apos;s For Dinner generates a personalized meal plan with recipes
          and a grocery list every week. One less reason to open DoorDash.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try Free &rarr;
        </Link>
      </div>

      {/* How to transition */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        How to Transition Without Going Cold Turkey
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Don&apos;t delete DoorDash tomorrow and vow to cook every meal.
          You&apos;ll last four days and then order twice in one night out of
          rebellion. Instead, taper down gradually. Here&apos;s a realistic
          four-week plan:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border border-stone-200 rounded-xl overflow-hidden">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-stone-700">Week</th>
                <th className="px-4 py-3 font-semibold text-stone-700">Cook</th>
                <th className="px-4 py-3 font-semibold text-stone-700">Delivery</th>
                <th className="px-4 py-3 font-semibold text-stone-700">Monthly Savings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Week 1</td>
                <td className="px-4 py-3">2 nights</td>
                <td className="px-4 py-3">5 nights</td>
                <td className="px-4 py-3 text-green-600">~$80/month saved</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Week 2</td>
                <td className="px-4 py-3">3 nights</td>
                <td className="px-4 py-3">4 nights</td>
                <td className="px-4 py-3 text-green-600">~$160/month saved</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-stone-700">Week 3</td>
                <td className="px-4 py-3">4-5 nights</td>
                <td className="px-4 py-3">2-3 nights</td>
                <td className="px-4 py-3 text-green-600">~$280/month saved</td>
              </tr>
              <tr className="bg-orange-50">
                <td className="px-4 py-3 font-medium text-stone-800">Week 4+</td>
                <td className="px-4 py-3 font-medium text-stone-800">5-6 nights</td>
                <td className="px-4 py-3 font-medium text-stone-800">1-2 nights</td>
                <td className="px-4 py-3 font-semibold text-green-600">~$350/month saved</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          That last row is the sweet spot. You&apos;re still ordering delivery
          once or twice a week &mdash; no guilt, no deprivation. But you&apos;re
          saving $300 to $400 a month, which is $3,600 to $4,800 a year. And
          honestly, once you get used to having a plan and groceries in the
          fridge, you&apos;ll find yourself ordering less because cooking is just
          easier.
        </p>
        <p>
          A few tactical tips for the transition:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>Move delivery apps off your home screen.</strong> Don&apos;t
            delete them &mdash; just bury them in a folder. Add one step of
            friction between you and ordering.
          </li>
          <li>
            <strong>Remove your saved credit card</strong> from the app. Having
            to type in your card number adds another friction point. Most impulse
            orders die right there.
          </li>
          <li>
            <strong>Designate delivery nights.</strong> Instead of ordering when
            you feel like it, pick your 1 to 2 delivery nights in advance
            (Friday and one weeknight, for example). Everything else is cooking
            nights.
          </li>
          <li>
            <strong>Batch your cooking.</strong> Make double portions on cooking
            nights so you have leftovers for lunch the next day. Now delivery is
            competing with &quot;heat this up in 3 minutes&quot; &mdash; and
            it&apos;ll lose that fight.
          </li>
          <li>
            <strong>Track your spending for one month.</strong> Open your bank
            app and add up every DoorDash, Uber Eats, and Grubhub charge. Most
            people are genuinely shocked. That awareness alone changes behavior
            more than any willpower trick.
          </li>
        </ul>
        <p>
          The goal isn&apos;t to never order delivery again. The goal is to make
          it a choice instead of a default. When you{" "}
          <Link
            href="/blog/how-to-stop-ordering-takeout"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            stop ordering takeout
          </Link>{" "}
          out of habit, the money you save is life-changing &mdash; literally.
          $4,000 a year is the difference between feeling broke and having a
          savings cushion. Between surviving and actually getting ahead.
        </p>
        <p>
          And if the planning part feels like too much work, that&apos;s what{" "}
          <Link
            href="/blog/ai-meal-planner"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            AI meal planners
          </Link>{" "}
          are for. You set your preferences once and get a fresh plan with
          recipes and a grocery list every week &mdash; no browsing, no
          decision-making, no 30-minute Sunday planning session. For $7.99 a
          month, it&apos;s the cheapest investment that saves you $300+.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Your first week is free
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Get a personalized meal plan with recipes and a grocery list &mdash;
          delivered to your inbox. One DoorDash order costs more than a month
          of this.
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
            href="/blog/how-to-stop-ordering-takeout"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            How to Stop Ordering Takeout Every Night
          </Link>
          <Link
            href="/blog/cheap-meals-for-one"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Cheap Meals for One: Eat Well on $5/Day
          </Link>
          <Link
            href="/blog/meal-planning-in-your-20s"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Planning in Your 20s
          </Link>
          <Link
            href="/blog/save-money-groceries-meal-planning"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            How to Save Money on Groceries with Meal Planning
          </Link>
          <Link
            href="/blog/food-budget-in-your-20s"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Food Budget in Your 20s: How Much Should You Spend?
          </Link>
          <Link
            href="/blog/meal-planning-for-college"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Planning for College Students
          </Link>
        </div>
        <p className="text-sm font-medium text-stone-400 mt-6 mb-4">
          Browse meal plans
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/meal-plans/budget-friendly-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Budget-Friendly</Link>
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans/meal-plan-for-beginners" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Beginner</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
