import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";

export const metadata: Metadata = {
  title: "How to Eat Well When You're Going Through It",
  description:
    "When everything feels hard, cooking is the first thing to go. Here are low-effort meals that take care of you when you can't take care of yourself. No judgment.",
  openGraph: {
    title: "How to Eat Well When You're Going Through It",
    description:
      "When everything feels hard, cooking is the first thing to go. Here are low-effort meals that take care of you when you can't take care of yourself. No judgment.",
    siteName: "What's For Dinner",
    type: "article",
    url: "https://whatsfordinner.fit/blog/eating-well-when-youre-struggling",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Eat Well When You're Going Through It",
    description:
      "When everything feels hard, cooking is the first thing to go. Low-effort meals for when you can't take care of yourself. No judgment.",
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/eating-well-when-youre-struggling",
  },
};

export default function EatingWellWhenYoureStrugglingArticle() {
  return (
    <>
      <ArticleJsonLd
        title="How to Eat Well When You're Going Through It"
        description="When everything feels hard, cooking is the first thing to go. Here are low-effort meals that take care of you when you can't take care of yourself. No judgment."
        url="https://whatsfordinner.fit/blog/eating-well-when-youre-struggling"
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
                name: "What should I eat when I have no motivation to cook?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Focus on foods that require zero cooking: yogurt with granola, apple slices with peanut butter, cheese and crackers with deli meat, cereal, or pre-made salad kits. A rotisserie chicken from the store counts as a real meal. The goal is eating something, not cooking something impressive.",
                },
              },
              {
                "@type": "Question",
                name: "How do I feed myself during a depressive episode?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Keep a shelf of zero-effort foods stocked: peanut butter, bread, bananas, granola bars, yogurt, frozen burritos, canned soup, cheese, and tortillas. When depression makes cooking impossible, these foods mean you always have something to eat without needing to plan, decide, or cook.",
                },
              },
              {
                "@type": "Question",
                name: "What are the easiest possible meals to make?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The easiest meals require no cooking at all: yogurt and granola, peanut butter toast, cheese and crackers, or a pre-made salad kit. If you can manage 5 minutes, try toast with avocado, a quesadilla, scrambled eggs, or instant oatmeal with banana. These are all real meals.",
                },
              },
              {
                "@type": "Question",
                name: "How do I stop skipping meals?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Skipping meals usually happens because deciding what to eat and making it feels like too much work. Two things help: keeping grab-and-go foods always stocked (granola bars, fruit, yogurt), and removing the decision entirely with a meal plan that tells you exactly what to eat and buy each week.",
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
          { name: "How to Eat Well When You're Going Through It", url: "https://whatsfordinner.fit/blog/eating-well-when-youre-struggling" },
        ]}
      />
      <article>
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        How to Eat Well When You&apos;re Going Through It
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          When life gets heavy, eating well is the first casualty. You skip
          meals, survive on delivery and snacks, eat cereal at 11 PM standing
          over the sink. Not because you&apos;re lazy or don&apos;t care about
          your health &mdash; but because decision-making takes energy you
          don&apos;t have right now.
        </p>
        <p>
          Maybe you&apos;re dealing with depression, burnout, grief, anxiety, a
          breakup, a move, a job loss, or just a stretch of time where
          everything feels harder than it should. Whatever it is &mdash; you
          still need to eat. And &quot;just cook a healthy meal&quot; is advice
          that completely misses the point when getting out of bed is the
          accomplishment.
        </p>
        <p>
          This isn&apos;t a &quot;get your life together&quot; lecture. There
          are no smoothie bowls with edible flowers. These are simple, honest
          ways to feed yourself when cooking feels impossible &mdash; organized
          by how much energy you actually have.
        </p>
      </div>

      {/* Zero-effort tier */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The Zero-Effort Tier
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          These meals require no cooking, no prep, and almost no decisions.
          Open, eat, done. If this is all you can manage right now, that&apos;s
          okay. <strong>These count. These are real meals.</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>Yogurt + granola (or just yogurt, that&apos;s fine too)</li>
          <li>Apple slices + peanut butter</li>
          <li>Cheese + crackers + deli meat</li>
          <li>Cereal with milk</li>
          <li>Pre-made salad kit (the bagged ones, already dressed)</li>
          <li>Rotisserie chicken straight from the store</li>
          <li>A banana and a handful of nuts</li>
          <li>String cheese and grapes</li>
        </ul>
        <p>
          Nobody needs to chop, saut&eacute;, or follow a recipe to eat. If
          you ate one of these today, you fed yourself. That matters more than
          you think.
        </p>
      </div>

      {/* 5-minute tier */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The 5-Minute Tier
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          For the days when you have a tiny bit more capacity &mdash; enough
          to turn on a stove or a microwave but not enough for anything that
          involves more than three steps.
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>Toast with avocado and everything bagel seasoning</li>
          <li>Quesadilla &mdash; tortilla + cheese in a pan, fold, done</li>
          <li>Scrambled eggs (two eggs, butter, pan, three minutes)</li>
          <li>Instant oatmeal with a sliced banana</li>
          <li>Peanut butter and jelly sandwich</li>
          <li>A frozen meal &mdash; no shame, zero shame, they exist for a reason</li>
          <li>Ramen with an egg cracked into it</li>
        </ul>
        <p>
          The bar here is not &quot;nutritionally perfect.&quot; The bar is
          &quot;I ate warm food today.&quot; That&apos;s a win.
        </p>
      </div>

      {/* 15-minute tier */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The 15-Minute Tier (for Better Days)
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          These are for when you have a little more in the tank. Not a lot
          &mdash; just enough to stand in the kitchen for 15 minutes without
          it feeling like a marathon. Save these for the days that feel slightly
          more manageable.
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>Pasta with jarred sauce.</strong> Boil water, cook pasta,
            pour sauce on top. Add parmesan if you have it. This is a complete
            meal and nobody can tell you otherwise.
          </li>
          <li>
            <strong>Rice bowl with whatever protein you have.</strong> Leftover
            chicken, canned beans, a fried egg &mdash; pile it on rice with
            some hot sauce or soy sauce.
          </li>
          <li>
            <strong>Grilled cheese + canned soup.</strong> A classic comfort
            meal that&apos;s ready in the time it takes the soup to heat up.
          </li>
          <li>
            <strong>Stir-fry with frozen vegetables.</strong> Frozen stir-fry
            mix + any protein + soy sauce + rice. One pan, no chopping.
          </li>
          <li>
            <strong>Loaded toast.</strong> Toast with ricotta and honey, or
            cream cheese and smoked salmon, or peanut butter and banana. When
            toast is the foundation, anything works.
          </li>
        </ul>
        <p>
          The 15-minute tier isn&apos;t about ambition. It&apos;s about having
          a few go-to meals that feel nourishing without requiring you to think
          too hard about them. If you cooked one of these, you did something
          really good for yourself today.
        </p>
      </div>

      {/* The shelf */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Stock the &quot;I Can&apos;t Cook Right Now&quot; Shelf
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          The hardest part of eating when you&apos;re struggling isn&apos;t the
          cooking &mdash; it&apos;s the deciding. And if the fridge is empty,
          the decision becomes even harder because now you have to go to the
          store first. That&apos;s two executive function hurdles stacked on
          top of each other.
        </p>
        <p>
          The fix: keep a shelf (or a corner of your fridge) permanently
          stocked with things that require zero planning. Buy these once, and
          you always have something to eat:
        </p>
        <div className="bg-stone-50 rounded-2xl p-6 my-4">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="space-y-2">
              <p className="font-medium text-stone-700">Pantry</p>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>Peanut butter</li>
                <li>Bread</li>
                <li>Granola bars</li>
                <li>Canned soup</li>
                <li>Pasta + jarred sauce</li>
                <li>Rice or instant rice</li>
                <li>Cereal</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-stone-700">Fridge &amp; Freezer</p>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>Eggs</li>
                <li>Cheese (sliced or shredded)</li>
                <li>Tortillas</li>
                <li>Yogurt</li>
                <li>Bananas</li>
                <li>Frozen burritos</li>
                <li>Frozen vegetables</li>
              </ul>
            </div>
          </div>
        </div>
        <p>
          This isn&apos;t a grocery list for meal prepping a perfect week.
          It&apos;s a safety net. When everything else falls apart, you open
          the cabinet and there&apos;s something there. That&apos;s the whole
          point.
        </p>
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Let someone else handle the planning
        </p>
        <p className="text-stone-500 text-sm mb-5">
          What&apos;s For Dinner generates a personalized meal plan with
          recipes and a grocery list &mdash; so you don&apos;t have to figure
          out what to eat. One less thing to think about.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try Free &rarr;
        </Link>
      </div>

      {/* You don't have to figure this out alone */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        You Don&apos;t Have to Figure This Out Alone
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Here&apos;s the thing about feeding yourself when you&apos;re
          struggling: the hardest part isn&apos;t the cooking. It&apos;s all
          the invisible work that comes before it &mdash; deciding what to eat,
          figuring out what to buy, remembering to go to the store, mustering
          the energy to do any of it. Each step is a decision, and when
          you&apos;re running on empty, decisions are the most expensive
          currency you have.
        </p>
        <p>
          Meal planning removes the decision entirely. When a plan just shows
          up with exactly what to buy and exactly what to cook, it&apos;s one
          less thing your brain has to process. You don&apos;t have to browse
          recipes. You don&apos;t have to build a grocery list. You don&apos;t
          have to stand in front of the fridge at 7 PM trying to assemble
          dinner from three random ingredients.
        </p>
        <p>
          That&apos;s not laziness. That&apos;s recognizing that your energy
          is limited right now and choosing to spend it on things that matter
          more &mdash; like getting through the day, taking care of yourself,
          or just resting.
        </p>
        <p>
          If you&apos;re in a place where even thinking about food feels like
          too much, a{" "}
          <Link
            href="/onboarding"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            meal plan that does the thinking for you
          </Link>{" "}
          might be the kindest thing you can do for yourself this week.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Get a meal plan that does the thinking for you
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Set your preferences once. Get a personalized plan with recipes and
          a grocery list every week &mdash; no decisions required.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Start Your Free Plan &rarr;
        </Link>
      </div>

      {/* Related articles */}
      <div className="border-t border-stone-100 mt-12 pt-8">
        <p className="text-sm font-medium text-stone-400 mb-4">
          Related articles
        </p>
        <div className="space-y-3">
          <Link
            href="/blog/adhd-meal-planning"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            ADHD Meal Planning: A System That Actually Works
          </Link>
          <Link
            href="/blog/easy-meal-prep-for-beginners"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Easy Meal Prep for Beginners
          </Link>
          <Link
            href="/blog/cheap-meals-for-one"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Cheap Meals for One: Eating Well on a Tight Budget
          </Link>
          <Link
            href="/blog/meal-planning-for-beginners"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Planning for Beginners: The Complete Guide
          </Link>
        </div>
        <p className="text-sm font-medium text-stone-400 mt-6 mb-4">
          Browse meal plans
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans/meal-plan-for-beginners" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Beginner</Link>
          <Link href="/meal-plans/comfort-food" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Comfort Food</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
