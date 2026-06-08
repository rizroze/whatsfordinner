import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";
import { MealCardGrid } from "@/components/blog/MealCard";

export const metadata: Metadata = {
  title: "Cooking for Your Partner: 10 Impressive Meals Anyone Can Make",
  description:
    "Want to cook for your boyfriend or girlfriend but don't know how? These 10 meals look impressive but are secretly easy. Date night dinner for under $15.",
  openGraph: {
    title: "Cooking for Your Partner: 10 Impressive Meals Anyone Can Make",
    description:
      "Want to cook for your boyfriend or girlfriend but don't know how? These 10 meals look impressive but are secretly easy. Date night dinner for under $15.",
    siteName: "What's For Dinner",
    type: "article",
    images: [{ url: `/api/og?title=Cooking%20for%20Your%20Partner%3A%2010%20Impressive%20Meals%20Anyone%20Can%20Make&description=Want%20to%20cook%20for%20your%20boyfriend%20or%20girlfriend%20but%20don't%20know%20how%3F%20These%2010%20meals%20look%20impressive%20but%20are%20secretly%20easy.%20`, width: 1200, height: 630 }],
    url: "https://whatsfordinner.fit/blog/cooking-for-your-partner",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cooking for Your Partner: 10 Impressive Meals Anyone Can Make",
    description:
      "Want to cook for your boyfriend or girlfriend but don't know how? These 10 meals look impressive but are secretly easy. Date night dinner for under $15.",
    images: ["/api/og?title=Cooking%20for%20Your%20Partner%3A%2010%20Impressive%20Meals%20Anyone%20Can%20Make&description=Want%20to%20cook%20for%20your%20boyfriend%20or%20girlfriend%20but%20don't%20know%20how%3F%20These%2010%20meals%20look%20impressive%20but%20are%20secretly%20easy.%20"],
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/cooking-for-your-partner",
  },
};

export default function CookingForYourPartnerArticle() {
  return (
    <>
      <ArticleJsonLd
        title="Cooking for Your Partner: 10 Impressive Meals Anyone Can Make"
        description="Want to cook for your boyfriend or girlfriend but don't know how? These 10 meals look impressive but are secretly easy. Date night dinner for under $15."
        url="https://whatsfordinner.fit/blog/cooking-for-your-partner"
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
                name: "What should I cook for a date night at home?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The best date night meals look impressive but are secretly simple. Lemon butter salmon, creamy tuscan chicken, pasta aglio e olio, or steak with garlic butter are all excellent choices. They take 30 minutes or less, cost under $15 for two, and look like you spent hours in the kitchen.",
                },
              },
              {
                "@type": "Question",
                name: "What's an easy impressive dinner for two?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Shrimp scampi is one of the easiest impressive dinners you can make. It takes 15 minutes, costs about $12 for two, and looks like a restaurant dish. Creamy tuscan chicken is another great option — one pan, 25 minutes, and it tastes like a $30 entree.",
                },
              },
              {
                "@type": "Question",
                name: "How do I cook for my boyfriend or girlfriend?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pick a recipe that's simple but looks fancy — the key is choosing the RIGHT recipe, not being a skilled cook. Start with something like pan-seared salmon or a one-pan pasta. Use restaurant tricks: high heat for a good sear, finish with butter, add fresh herbs on top, and wipe the plate edge clean before serving.",
                },
              },
              {
                "@type": "Question",
                name: "What's a cheap date night dinner?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most impressive date night meals cost under $15 for two people. Pasta aglio e olio costs about $5 (pasta, garlic, olive oil, red pepper flakes, parsley). A full steak dinner with garlic butter and roasted vegetables runs about $14. Compare that to $60-80 at a restaurant — cooking at home saves 75% or more.",
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
          { name: "Cooking for Your Partner", url: "https://whatsfordinner.fit/blog/cooking-for-your-partner" },
        ]}
      />
      <article className="blog-article">
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        Cooking for Your Partner: 10 Easy Meals That Look Fancy
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Cooking dinner for someone you&apos;re dating is one of the most
          attractive things you can do. Seriously. It beats any restaurant
          reservation. It&apos;s personal, it&apos;s thoughtful, it says
          &quot;I put effort into this evening&quot; &mdash; and it costs $15
          instead of $80.
        </p>
        <p>
          Also, lowkey, it&apos;s a flex. There&apos;s something about watching
          someone move confidently around a kitchen that just hits different.
          Even if your &quot;confidence&quot; is secretly following a recipe
          on your phone propped behind the toaster.
        </p>
        <p>
          Here&apos;s the thing: you don&apos;t need to be good at cooking.
          You just need to pick the right recipe. These 10 meals LOOK like
          you spent hours, but every single one takes 30 minutes or less.
          The secret isn&apos;t skill &mdash; it&apos;s recipe selection.
        </p>
      </div>

      {/* The 10 meals */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The 10 Meals
      </h2>
      <MealCardGrid meals={[
        { name: "Lemon Butter Salmon", mealType: "dinner", prepTime: "15 min · ~$12", description: "Pan-sear skin-side down 4 minutes, flip, baste with butter, garlic, and lemon juice for 3 minutes. Golden, flaky, and looks like a restaurant plate. People will literally say \"you made this?\"", tags: ["date-night", "quick"] },
        { name: "Creamy Tuscan Chicken", mealType: "dinner", prepTime: "25 min · ~$11", description: "One pan. Sear chicken breasts, make the sauce (cream, garlic, sun-dried tomatoes, spinach, parmesan) in the same pan, nestle chicken back in. Looks like a $30 entree.", tags: ["one-pan", "impressive"] },
        { name: "Pasta Aglio e Olio", mealType: "dinner", prepTime: "20 min · ~$5", description: "Five ingredients: spaghetti, garlic, olive oil, red pepper flakes, parsley. Toast garlic in oil, toss with pasta and starchy water for a silky sauce. Sounds Italian because it IS Italian.", tags: ["budget", "vegetarian"] },
        { name: "Steak with Garlic Butter", mealType: "dinner", prepTime: "20 min · ~$14", description: "Cast iron screaming hot, sear 4 minutes per side, rest with a pat of garlic-herb butter melting on top. Steakhouse vibes at home. The resting is the hardest part (because you have to wait).", tags: ["date-night", "impressive"] },
        { name: "Shrimp Scampi", mealType: "dinner", prepTime: "15 min · ~$13", description: "Shrimp cooks in 3 minutes. Saute garlic in butter, add white wine, toss in shrimp until pink, add linguine and lemon. A $28 restaurant dish for under $15.", tags: ["quick", "date-night"] },
        { name: "Chicken Piccata", mealType: "dinner", prepTime: "25 min · ~$10", description: "Pound chicken thin, dust with flour, pan-fry 3 minutes per side. Make the glossy lemon-caper sauce in the same pan. It has a French-sounding name and looks like a trained chef plated it.", tags: ["one-pan", "impressive"] },
        { name: "Mushroom Risotto", mealType: "dinner", prepTime: "30 min · ~$9", description: "Saute mushrooms, toast arborio rice, add warm broth one ladle at a time while stirring. Finish with butter and parmesan. 30 minutes of stirring but zero actual skill. Gordon Ramsay tests chefs on this.", tags: ["vegetarian", "comfort"] },
        { name: "Honey Garlic Glazed Pork Chops", mealType: "dinner", prepTime: "20 min · ~$8", description: "Sear pork chops, then make the glaze in the same pan: honey, soy sauce, garlic, a splash of vinegar. Let it bubble 2 minutes and pour over chops. The glaze makes itself.", tags: ["budget", "one-pan"] },
        { name: "Caprese Stuffed Chicken", mealType: "dinner", prepTime: "30 min · ~$10", description: "Cut a pocket in chicken breast, stuff with mozzarella, basil, and sliced tomato, bake at 400\u00B0F for 20 minutes. When you slice it open, cheese oozes out. A presentation moment.", tags: ["impressive", "date-night"] },
        { name: "One-Pot Creamy Tomato Pasta", mealType: "dinner", prepTime: "25 min · ~$7", description: "Everything goes in one pot: garlic, crushed tomatoes, cream, dried basil, and pasta. Cook with the lid on until the pasta absorbs the sauce. One pot, one burner, zero mess.", tags: ["one-pot", "budget"] },
      ]} />

      {/* Restaurant techniques */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The Secret: Restaurant Techniques Are Simple
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          The gap between &quot;home cooking&quot; and &quot;restaurant
          food&quot; is way smaller than you think. Restaurants don&apos;t
          use secret ingredients or magic techniques. They use four things
          consistently, and you can copy all of them tonight:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>High heat.</strong> Most home cooks are afraid of heat.
            Restaurants blast it. A screaming hot pan is what gives you that
            golden sear on salmon, that crust on steak, that caramelization
            on vegetables. Don&apos;t be scared of a little smoke.
          </li>
          <li>
            <strong>Finish with butter.</strong> Almost every restaurant sauce
            gets a knob of butter stirred in right at the end. It adds
            richness and makes the sauce glossy. This one trick makes
            everything taste 40% more expensive.
          </li>
          <li>
            <strong>Fresh herbs on top.</strong> A handful of chopped parsley,
            basil, or cilantro on top of a finished dish is the easiest
            visual upgrade. It adds color, freshness, and makes any plate
            look intentional instead of thrown together.
          </li>
          <li>
            <strong>Wipe the plate edge.</strong> Before you serve, take a
            paper towel and wipe any drips or smudges off the rim of the
            plate. This is what every chef does before a plate leaves the
            kitchen. It takes three seconds and makes the whole thing look
            polished.
          </li>
        </ul>
        <p>
          That&apos;s it. Those four things are 80% of what makes food look
          and taste &quot;fancy.&quot; The recipe does the rest. You&apos;re
          not learning to be a chef &mdash; you&apos;re learning to pick
          the right recipe and plate it like you know what you&apos;re doing.
        </p>
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Date nights built into your weekly plan
        </p>
        <p className="text-stone-500 text-sm mb-5">
          What&apos;s For Dinner generates a personalized meal plan with
          recipes and a grocery list every week. Pick one night as date
          night. $7.99/mo.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try Free &rarr;
        </Link>
      </div>

      {/* Meal plan date nights */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Meal Plan Your Date Nights Into the Week
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Here&apos;s an underrated move: don&apos;t treat date night cooking
          as a one-off event. Build it into your weekly routine. When you{" "}
          <Link
            href="/blog/meal-planning-for-two"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            meal plan for two
          </Link>
          , designate one night as your &quot;date night dinner.&quot; The
          rest of the week can be simple meals &mdash; stir fries, pasta,
          sheet pan dinners. But that one night, you pick something from
          this list and make it an event.
        </p>
        <p>
          The beauty of this approach is that your grocery list already includes
          everything you need. You&apos;re not making a special trip to the
          store at 5 PM on Saturday trying to figure out what to cook. The
          salmon is already in the fridge. The herbs are already bought. The
          plan handled the logistics so you can focus on the experience.
        </p>
        <p>
          What&apos;s For Dinner plans include a mix of quick weeknight meals
          and more interesting recipes &mdash; perfect for designating one
          night as date night without any extra effort. One plan, one grocery
          run, one evening that feels special without the stress.
        </p>
        <p>
          And if you&apos;re{" "}
          <Link
            href="/blog/meal-planning-in-your-20s"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            in your 20s figuring out this whole cooking thing
          </Link>
          , knowing even two or three of these recipes puts you ahead of 90%
          of your friends. The bar is on the floor. Clear it by making
          lemon butter salmon and you&apos;re a legend.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Your first week is free
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Set your preferences in two minutes. Get a personalized meal plan
          with recipes and a grocery list &mdash; including date-night-worthy
          dinners. $7.99/mo after your trial.
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
            href="/blog/meal-planning-for-two"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Planning for Two: A Complete Guide
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
            href="/blog/meal-planning-after-moving-out"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Planning After Moving Out: The Guide Nobody Gave You
          </Link>
        </div>
        <p className="text-sm font-medium text-stone-400 mt-6 mb-4">
          Browse meal plans
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/meal-plans/meal-plan-for-two" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">For Two</Link>
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans/meal-plan-on-a-budget" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Budget-Friendly</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
