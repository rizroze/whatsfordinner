import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";

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
    url: "https://whatsfordinner.fit/blog/cooking-for-your-partner",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cooking for Your Partner: 10 Impressive Meals Anyone Can Make",
    description:
      "Want to cook for your boyfriend or girlfriend but don't know how? These 10 meals look impressive but are secretly easy. Date night dinner for under $15.",
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
      <article>
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
      <div className="space-y-6 text-stone-600 leading-relaxed">

        <div className="bg-stone-50 rounded-xl p-5">
          <h3 className="font-semibold text-stone-800 mb-2">1. Lemon Butter Salmon</h3>
          <p className="mb-2">
            <strong>Why it&apos;s impressive:</strong> Salmon is universally
            considered &quot;fancy.&quot; A golden, flaky fillet with a lemon
            butter sauce looks like something from a nice restaurant. People
            will literally say &quot;you made this?&quot;
          </p>
          <p className="mb-2">
            <strong>Why it&apos;s actually easy:</strong> Season salmon with
            salt and pepper. Pan-sear skin-side down for 4 minutes. Flip, add
            butter, garlic, and lemon juice. Baste for 3 minutes. Done. The
            pan does all the work.
          </p>
          <p className="text-sm text-stone-400">~$12 for two | 15 minutes</p>
        </div>

        <div className="bg-stone-50 rounded-xl p-5">
          <h3 className="font-semibold text-stone-800 mb-2">2. Creamy Tuscan Chicken</h3>
          <p className="mb-2">
            <strong>Why it&apos;s impressive:</strong> It looks like a
            restaurant entree &mdash; chicken in a rich, creamy sauce with
            sun-dried tomatoes and spinach. The colors alone make it look
            professional.
          </p>
          <p className="mb-2">
            <strong>Why it&apos;s actually easy:</strong> One pan. Sear chicken
            breasts, remove them, make the sauce in the same pan (cream,
            garlic, sun-dried tomatoes, spinach, parmesan), put chicken back
            in. That&apos;s it. Everything cooks in the sauce.
          </p>
          <p className="text-sm text-stone-400">~$11 for two | 25 minutes</p>
        </div>

        <div className="bg-stone-50 rounded-xl p-5">
          <h3 className="font-semibold text-stone-800 mb-2">3. Pasta Aglio e Olio</h3>
          <p className="mb-2">
            <strong>Why it&apos;s impressive:</strong> It sounds Italian because
            it IS Italian. Say &quot;I made aglio e olio&quot; and people think
            you studied abroad in Rome. In reality, the name just means
            &quot;garlic and oil.&quot;
          </p>
          <p className="mb-2">
            <strong>Why it&apos;s actually easy:</strong> Five ingredients:
            spaghetti, garlic (lots of it), olive oil, red pepper flakes,
            parsley. Cook pasta. Toast garlic in olive oil. Toss together
            with pasta water. The starchy water creates a silky sauce
            without any actual sauce-making.
          </p>
          <p className="text-sm text-stone-400">~$5 for two | 20 minutes</p>
        </div>

        <div className="bg-stone-50 rounded-xl p-5">
          <h3 className="font-semibold text-stone-800 mb-2">4. Steak with Garlic Butter</h3>
          <p className="mb-2">
            <strong>Why it&apos;s impressive:</strong> Steak dinner at home is
            an instant power move. Add a compound garlic-herb butter melting
            on top and it looks like a steakhouse plate.
          </p>
          <p className="mb-2">
            <strong>Why it&apos;s actually easy:</strong> Get a cast iron
            screaming hot. Salt the steak 30 minutes before. Sear 4 minutes
            per side. Rest for 5 minutes with a pat of garlic butter on top.
            The resting is the hardest part (because you have to wait). Pair
            with a simple salad or roasted potatoes.
          </p>
          <p className="text-sm text-stone-400">~$14 for two | 20 minutes (plus 30 min salting)</p>
        </div>

        <div className="bg-stone-50 rounded-xl p-5">
          <h3 className="font-semibold text-stone-800 mb-2">5. Shrimp Scampi</h3>
          <p className="mb-2">
            <strong>Why it&apos;s impressive:</strong> Shrimp automatically
            feels upscale. Tossed with pasta in a garlicky white wine butter
            sauce? That&apos;s a $28 restaurant dish right there.
          </p>
          <p className="mb-2">
            <strong>Why it&apos;s actually easy:</strong> Shrimp cooks in
            literally 3 minutes. Saute garlic in butter, add white wine (or
            chicken broth), toss in shrimp, cook until pink, add cooked
            linguine. Squeeze lemon on top. The whole thing takes 15 minutes
            and the wow factor is enormous.
          </p>
          <p className="text-sm text-stone-400">~$13 for two | 15 minutes</p>
        </div>

        <div className="bg-stone-50 rounded-xl p-5">
          <h3 className="font-semibold text-stone-800 mb-2">6. Chicken Piccata</h3>
          <p className="mb-2">
            <strong>Why it&apos;s impressive:</strong> It has a French-sounding
            name and a glossy lemon-caper sauce. It looks like something a
            trained chef would plate.
          </p>
          <p className="mb-2">
            <strong>Why it&apos;s actually easy:</strong> Pound chicken thin
            (or butterfly it), dust with flour, pan-fry 3 minutes per side.
            Make sauce in the same pan: butter, lemon juice, capers, a splash
            of chicken broth. Pour over chicken. Five minutes of sauce work.
          </p>
          <p className="text-sm text-stone-400">~$10 for two | 25 minutes</p>
        </div>

        <div className="bg-stone-50 rounded-xl p-5">
          <h3 className="font-semibold text-stone-800 mb-2">7. Mushroom Risotto</h3>
          <p className="mb-2">
            <strong>Why it&apos;s impressive:</strong> Risotto has a reputation
            as the ultimate &quot;I know what I&apos;m doing in the
            kitchen&quot; dish. Creamy, rich, luxurious. Gordon Ramsay tests
            chefs on it.
          </p>
          <p className="mb-2">
            <strong>Why it&apos;s actually easy:</strong> The technique is just
            &quot;stir and add broth gradually.&quot; That&apos;s it. Saute
            mushrooms, toast arborio rice, add warm broth one ladle at a time
            while stirring. Finish with butter and parmesan. It takes 30
            minutes of stirring but zero actual skill.
          </p>
          <p className="text-sm text-stone-400">~$9 for two | 30 minutes</p>
        </div>

        <div className="bg-stone-50 rounded-xl p-5">
          <h3 className="font-semibold text-stone-800 mb-2">8. Honey Garlic Glazed Pork Chops</h3>
          <p className="mb-2">
            <strong>Why it&apos;s impressive:</strong> The glaze looks like
            you caramelized something complicated. The shine on the pork chops
            is genuinely photogenic. It&apos;s a dish that looks better in
            person than in a recipe photo.
          </p>
          <p className="mb-2">
            <strong>Why it&apos;s actually easy:</strong> Sear pork chops 4
            minutes per side. Remove. In the same pan: honey, soy sauce,
            garlic, a splash of vinegar. Let it bubble for 2 minutes. Pour
            over chops. The glaze makes itself.
          </p>
          <p className="text-sm text-stone-400">~$8 for two | 20 minutes</p>
        </div>

        <div className="bg-stone-50 rounded-xl p-5">
          <h3 className="font-semibold text-stone-800 mb-2">9. Caprese Stuffed Chicken</h3>
          <p className="mb-2">
            <strong>Why it&apos;s impressive:</strong> When you slice it open,
            mozzarella oozes out with basil and tomato. It&apos;s a
            presentation moment. It looks like you have technique.
          </p>
          <p className="mb-2">
            <strong>Why it&apos;s actually easy:</strong> Cut a pocket in
            chicken breast. Stuff with mozzarella, basil leaves, and sliced
            tomato. Secure with a toothpick. Bake at 400&deg;F for 20
            minutes. The &quot;stuffing&quot; is just putting things inside
            other things.
          </p>
          <p className="text-sm text-stone-400">~$10 for two | 30 minutes</p>
        </div>

        <div className="bg-stone-50 rounded-xl p-5">
          <h3 className="font-semibold text-stone-800 mb-2">10. One-Pot Creamy Tomato Pasta</h3>
          <p className="mb-2">
            <strong>Why it&apos;s impressive:</strong> Rich, creamy, vibrant
            red &mdash; it looks like a pasta dish from a trattoria. The color
            alone sells it.
          </p>
          <p className="mb-2">
            <strong>Why it&apos;s actually easy:</strong> Everything goes in
            one pot. Saute garlic, add crushed tomatoes, cream, dried basil,
            and pasta. Cook with the lid on until the pasta absorbs the sauce.
            Literally one pot, one burner, zero mess. Top with fresh basil
            and parmesan.
          </p>
          <p className="text-sm text-stone-400">~$7 for two | 25 minutes</p>
        </div>

      </div>

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
          <Link href="/meal-plans/budget-friendly" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Budget-Friendly</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
