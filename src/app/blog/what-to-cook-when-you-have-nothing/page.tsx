import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";

export const metadata: Metadata = {
  title: "What to Cook When You Have 'Nothing' in the Fridge",
  description:
    "You have random stuff in the fridge and zero inspiration. Here are 12 actual meals you can make from whatever's left — no grocery run needed.",
  openGraph: {
    title: "What to Cook When You Have 'Nothing' in the Fridge",
    description:
      "You have random stuff in the fridge and zero inspiration. Here are 12 actual meals you can make from whatever's left — no grocery run needed.",
    siteName: "What's For Dinner",
    type: "article",
    url: "https://whatsfordinner.fit/blog/what-to-cook-when-you-have-nothing",
  },
  twitter: {
    card: "summary_large_image",
    title: "What to Cook When You Have 'Nothing' in the Fridge",
    description:
      "You have random stuff in the fridge and zero inspiration. Here are 12 actual meals you can make from whatever's left — no grocery run needed.",
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/what-to-cook-when-you-have-nothing",
  },
};

export default function WhatToCookWhenYouHaveNothingArticle() {
  return (
    <>
      <ArticleJsonLd
        title="What to Cook When You Have 'Nothing' in the Fridge"
        description="You have random stuff in the fridge and zero inspiration. Here are 12 actual meals you can make from whatever's left — no grocery run needed."
        url="https://whatsfordinner.fit/blog/what-to-cook-when-you-have-nothing"
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
                name: "What can I cook with almost no ingredients?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "With eggs alone you can make scrambled eggs on toast, fried rice, an omelette, or an egg sandwich. With pasta or rice you can make aglio e olio (pasta + garlic + oil), butter rice with soy sauce, or rice and beans. With bread you can make grilled cheese, French toast, or toast with peanut butter and banana. Most 'empty' kitchens have enough for 4-5 meals.",
                },
              },
              {
                "@type": "Question",
                name: "What to eat when there's no food at home?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "First, do a real audit — open every cabinet, check the back of the fridge, look in the freezer. You probably have more than you think. Eggs, rice, pasta, bread, cheese, canned goods, and condiments can combine into dozens of meals. If you truly have nothing, $6 at the store (eggs, bread, butter, cheese) gives you 4+ meals.",
                },
              },
              {
                "@type": "Question",
                name: "What are easy meals with pantry staples?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The easiest pantry staple meals include: aglio e olio (pasta, garlic, olive oil — 10 minutes), rice and canned beans with hot sauce, egg fried rice with soy sauce, pasta with any jarred sauce, and grilled cheese. These all use ingredients that last weeks or months in your pantry.",
                },
              },
              {
                "@type": "Question",
                name: "What should I always have in my kitchen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Keep five things always stocked and you'll never have 'nothing' to eat: eggs (last 4-5 weeks), rice (lasts months), canned beans (last years), cheese (lasts 3-4 weeks), and bread (freeze it for months). With just these five staples, you can make at least 10 different meals.",
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
          { name: "What to Cook When You Have Nothing", url: "https://whatsfordinner.fit/blog/what-to-cook-when-you-have-nothing" },
        ]}
      />
      <article>
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        What to Cook When You Have Nothing (You Probably Have More Than You Think)
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          We&apos;ve all done it. Open the fridge, stare for 30 seconds, close it,
          open it again like something new will materialize, close it again, and then
          open DoorDash. Thirty dollars later, you&apos;re eating pad thai on your couch
          while that bag of rice in the pantry gathers dust.
        </p>
        <p>
          Here&apos;s the thing: &quot;nothing in the fridge&quot; almost never means
          nothing. It means nothing that <em>looks</em> like a meal. You see random
          ingredients &mdash; some eggs, a half block of cheese, a sad onion, condiments
          &mdash; and your brain says &quot;that&apos;s not food.&quot; But it is.
          You just need to know what to do with it.
        </p>
        <p>
          This isn&apos;t a list of recipes that require 15 ingredients and a trip to
          Trader Joe&apos;s. These are 12 actual meals you can make from the random stuff
          that&apos;s already in your kitchen. No grocery run. No meal kit. Just you and
          whatever&apos;s on hand.
        </p>
      </div>

      {/* The audit */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The &quot;I Literally Have Nothing&quot; Audit
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Before you declare your kitchen empty, do an actual audit. Open every cabinet.
          Check the back of the fridge. Look in the freezer. Check that one drawer you
          never open. Write down everything you find.
        </p>
        <p>
          Most &quot;empty&quot; kitchens have at least a few of these:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>Eggs (the most versatile food on earth)</li>
          <li>Some kind of bread &mdash; sliced, tortillas, pita, naan</li>
          <li>Rice or pasta</li>
          <li>Cheese &mdash; even a few slices or a bag of shredded</li>
          <li>Butter or oil</li>
          <li>Condiments &mdash; soy sauce, hot sauce, ketchup, mustard</li>
          <li>Canned something &mdash; beans, tuna, tomatoes, soup</li>
          <li>Frozen something &mdash; veggies, chicken nuggets, pizza</li>
          <li>An onion or garlic hanging around somewhere</li>
        </ul>
        <p>
          If you have even three things from that list, you have dinner. Let&apos;s
          figure out what to make.
        </p>
      </div>

      {/* If you have eggs */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        If You Have Eggs
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Eggs are the ultimate &quot;I have nothing&quot; food. They&apos;re cheap,
          they last weeks, and they turn into a meal in under 10 minutes. If you have
          eggs, you&apos;re not broke &mdash; you&apos;re rich.
        </p>
        <ul className="list-disc list-inside space-y-3 pl-1">
          <li>
            <strong>Scrambled eggs on toast.</strong> Butter in a pan, crack two eggs,
            stir, put on toast. Add cheese if you have it. Salt, pepper, hot sauce.
            Done in 5 minutes. This is a complete meal and don&apos;t let anyone tell
            you otherwise.
          </li>
          <li>
            <strong>Egg fried rice.</strong> Leftover rice (or cook some fresh), scramble
            eggs in a hot pan with oil, add rice, splash of soy sauce. If you have
            frozen peas or a leftover vegetable, throw it in. Restaurant-quality? No.
            Satisfying? Absolutely.
          </li>
          <li>
            <strong>Omelette with whatever.</strong> Any cheese, any vegetable, any
            leftover meat. Crack 2-3 eggs, pour into a buttered pan, add stuff to one
            half, fold. An omelette is just a vehicle for clearing out your fridge.
          </li>
          <li>
            <strong>Egg sandwich.</strong> Fry an egg, put it on bread with cheese and
            whatever sauce you have. If you have a slice of deli meat or some spinach,
            even better. This is the breakfast sandwich you&apos;d pay $8 for at a cafe.
          </li>
        </ul>
      </div>

      {/* If you have pasta or rice */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        If You Have Pasta or Rice
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Dry pasta and rice are the backbone of &quot;I have nothing&quot; cooking.
          They last forever, they&apos;re filling, and they pair with almost anything.
        </p>
        <ul className="list-disc list-inside space-y-3 pl-1">
          <li>
            <strong>Aglio e olio.</strong> This is a real Italian dish and it uses three
            ingredients: pasta, garlic, and olive oil. Boil pasta, saut&eacute; sliced
            garlic in olive oil until golden, toss with pasta. Add red pepper flakes if
            you have them. It sounds too simple to be good, but it&apos;s genuinely
            delicious. Restaurants charge $16 for this.
          </li>
          <li>
            <strong>Butter rice with soy sauce.</strong> Cook rice, add a knob of butter
            and a splash of soy sauce. That&apos;s it. If you have a fried egg to put
            on top, you&apos;re living. Add sesame seeds or green onion if you&apos;re
            feeling fancy.
          </li>
          <li>
            <strong>Pasta with literally any sauce.</strong> Jarred marinara, pesto from
            a tube, even just olive oil and parmesan. Pasta is not meant to be
            complicated. Italians have been eating simple pasta for centuries and they
            seem to be doing fine.
          </li>
          <li>
            <strong>Rice + canned beans + hot sauce.</strong> Open a can of black beans
            or kidney beans, heat them up, serve over rice. Add hot sauce, lime if you
            have it, cheese if you have it. This is a complete protein, costs about $0.80,
            and takes 15 minutes.
          </li>
        </ul>
      </div>

      {/* If you have bread */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        If You Have Bread
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Bread gets a bad rap, but it&apos;s one of the most versatile base ingredients
          you can have. Even slightly stale bread works for most of these.
        </p>
        <ul className="list-disc list-inside space-y-3 pl-1">
          <li>
            <strong>Grilled cheese.</strong> Bread + butter + cheese + pan. The ultimate
            comfort food that requires almost nothing. Add a slice of tomato or dip it
            in soup if you have canned tomato soup. You&apos;re 10 years old again and
            everything is fine.
          </li>
          <li>
            <strong>French toast.</strong> Crack an egg, add a splash of milk (or water
            honestly), pinch of cinnamon and sugar if you have them, dip bread, cook in a
            buttered pan. This is a perfectly acceptable dinner. Nobody&apos;s judging.
          </li>
          <li>
            <strong>Toast with peanut butter and banana.</strong> If you have peanut
            butter and a banana, you have a meal with protein, carbs, and potassium.
            Drizzle honey if you have it. This gets you through the evening.
          </li>
          <li>
            <strong>Bread with canned tuna.</strong> Open tuna, drain it, mix with mayo
            (or olive oil and lemon juice), put on bread. A tuna sandwich is a meal that
            has been sustaining humanity since the invention of canned fish.
          </li>
        </ul>
      </div>

      {/* The emergency */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The &quot;I Actually Have Nothing&quot; Emergency
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Okay, so you did the audit and you genuinely have nothing. The cabinets are
          bare. There are condiments and that&apos;s it. It happens.
        </p>
        <p>
          Here&apos;s your emergency move: walk to the nearest store and buy five things.
          That&apos;s it. Five things.
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>A dozen eggs &mdash; about $3</li>
          <li>A loaf of bread &mdash; about $2</li>
          <li>Butter &mdash; about $3</li>
          <li>Cheese (block or sliced) &mdash; about $3</li>
          <li>A bag of rice &mdash; about $2</li>
        </ul>
        <p>
          Total: roughly $13. That&apos;s enough for a week of meals. Scrambled eggs,
          egg sandwiches, grilled cheese, egg fried rice, butter rice, French toast.
          You&apos;re not going to be posting it on Instagram, but you&apos;re going to
          eat well for under $2 a meal.
        </p>
        <p>
          Compare that to one DoorDash order. One delivery is $20-30 for a single meal.
          Your emergency grocery run feeds you for a week.
        </p>
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Tired of the &quot;what do I eat&quot; spiral?
        </p>
        <p className="text-stone-500 text-sm mb-5">
          What&apos;s For Dinner generates a personalized meal plan with recipes and a
          grocery list &mdash; so you always know exactly what to buy and cook.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try Free &rarr;
        </Link>
      </div>

      {/* How to never have nothing */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        How to Never Have &quot;Nothing&quot; Again
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          The real fix isn&apos;t learning to cook with nothing. It&apos;s making sure
          you always have <em>something</em>. And it&apos;s easier than you think.
        </p>
        <p>
          <strong>The &quot;always stocked&quot; list.</strong> Keep five things in your
          kitchen at all times and you will never be in a &quot;nothing&quot; situation:
        </p>
        <ol className="list-decimal list-inside space-y-2 pl-1">
          <li><strong>Eggs</strong> &mdash; last 4-5 weeks in the fridge. Breakfast, lunch, or dinner. Infinite versatility.</li>
          <li><strong>Rice</strong> &mdash; lasts literally months. Pairs with anything. Cook a big batch and refrigerate.</li>
          <li><strong>Canned beans</strong> &mdash; last years. Protein, fiber, cheap. Black beans, chickpeas, kidney beans &mdash; pick your favorite.</li>
          <li><strong>Cheese</strong> &mdash; lasts 3-4 weeks. Makes anything taste better. Hard cheeses last even longer.</li>
          <li><strong>Bread</strong> &mdash; freeze it and it lasts months. Pull out two slices, toast them, you&apos;re set.</li>
        </ol>
        <p>
          With just those five staples, you can make at least a dozen different meals.
          No recipe hunting, no inspiration needed. Just open the fridge and start cooking.
        </p>
        <p>
          Or, if you want to skip the guesswork entirely: get a{" "}
          <Link
            href="/blog/meal-plan-with-grocery-list"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            meal plan with a grocery list
          </Link>{" "}
          that tells you exactly what to buy each week. You walk into the store knowing
          every ingredient you need, and nothing goes to waste because every item has a
          purpose. No more staring at the fridge wondering what counts as dinner.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Never stare at an empty fridge again
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Get a personalized meal plan with recipes and a grocery list every week.
          You&apos;ll always know what to buy, what to cook, and what&apos;s for dinner.
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
            href="/blog/i-hate-cooking"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            I Hate Cooking (But I Still Need to Eat)
          </Link>
          <Link
            href="/blog/groceries-keep-going-bad"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Why Your Groceries Keep Going Bad (And How to Fix It)
          </Link>
          <Link
            href="/blog/cheap-meals-for-one"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Cheap Meals for One: 15 Dinners Under $3/Serving
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
