import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Cooking for One Without Wasting Half Your Groceries",
  description:
    "Recipes serve 4. Produce goes bad by Wednesday. Here's how to actually cook for one person without throwing money in the trash.",
  openGraph: {
    title: "Cooking for One Without Wasting Half Your Groceries",
    description:
      "Recipes serve 4. Produce goes bad by Wednesday. Here's how to actually cook for one person without throwing money in the trash.",
    siteName: "What's For Dinner",
    type: "article",
    url: "https://whatsfordinner.fit/blog/cooking-for-one-without-wasting-food",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cooking for One Without Wasting Half Your Groceries",
    description:
      "Recipes serve 4. Produce goes bad by Wednesday. Here's how to actually cook for one person without throwing money in the trash.",
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/cooking-for-one-without-wasting-food",
  },
};

export default function CookingForOneArticle() {
  return (
    <>
      <ArticleJsonLd
        title="Cooking for One Without Wasting Half Your Groceries"
        description="Recipes serve 4. Produce goes bad by Wednesday. Here's how to actually cook for one person without throwing money in the trash."
        url="https://whatsfordinner.fit/blog/cooking-for-one-without-wasting-food"
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
                name: "How do I stop wasting food when cooking for one?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The biggest strategies are: freeze portions immediately (chicken thighs individually, cooked rice in containers, bread in the freezer), plan meals that share ingredients (one protein used three different ways across the week), cook dinner portions for two and eat the second half for lunch, and buy frozen vegetables instead of fresh — they last months and are just as nutritious.",
                },
              },
              {
                "@type": "Question",
                name: "What's the best way to grocery shop for one person?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Buy frozen vegetables (last months), eggs (last weeks), canned goods (last years), and hardy produce like carrots, cabbage, and onions (last 2-4 weeks). Skip fresh herbs (buy paste instead), salad mix (goes bad in 2 days), and bulk meat unless you freeze it immediately. Plan 3 meals that share ingredients to avoid buying items you'll only use once.",
                },
              },
              {
                "@type": "Question",
                name: "How do you store food for one person?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Your freezer is your best friend. Freeze chicken thighs individually in bags, store cooked rice in single portions, keep bread in the freezer and pull out slices as needed, and freeze sauces in ice cube trays. In the fridge, use airtight containers and eat perishables within 3 days. Hardy vegetables like carrots and cabbage last 2-4 weeks.",
                },
              },
              {
                "@type": "Question",
                name: "Is it worth cooking for just one person?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. The average single person spends $300-400/month on delivery apps. Cooking at home costs $150-250/month even with some food waste. With a good system (freezing portions, overlapping ingredients, planned leftovers), you can cut that to under $200/month. A meal plan sized for one person eliminates the guesswork entirely.",
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
          { name: "Cooking for One Without Wasting Food", url: "https://whatsfordinner.fit/blog/cooking-for-one-without-wasting-food" },
        ]}
      />
      <article>
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        Cooking for One Without Wasting Food (It&apos;s Not Just You)
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          You buy a head of broccoli with the best intentions. You use half of it on
          Monday. By Thursday, the other half is yellow and sad. Into the trash it goes,
          along with $2 and whatever was left of your motivation to cook this week.
        </p>
        <p>
          Cooking for one isn&apos;t hard because you lack skill. It&apos;s hard because
          the entire grocery system is built for families. Chicken comes in family packs.
          Recipes serve 4-6. A bag of spinach is enough for three salads but turns to
          slime in four days. You&apos;re not bad at cooking &mdash; you&apos;re fighting
          a system that wasn&apos;t designed for you.
        </p>
        <p>
          The average American household wastes about 30% of the food they buy. For single
          people, that number is even higher because portions don&apos;t scale down
          easily. But it doesn&apos;t have to be this way. With a few simple strategies,
          you can cook for one without throwing half your groceries in the trash.
        </p>
      </div>

      {/* Why cooking for one wastes so much food */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Why Cooking for One Wastes So Much Food
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          It&apos;s not a willpower problem. It&apos;s a structural problem:
        </p>
        <ul className="list-disc list-inside space-y-3 pl-1">
          <li>
            <strong>Bulk packaging.</strong> Chicken breasts come in packs of 4-6.
            Ground beef starts at a pound. A bunch of cilantro is enough for five meals
            but you need it for one. The grocery store is optimized for families buying
            in bulk, not individuals buying portions.
          </li>
          <li>
            <strong>Recipes scaled for 4.</strong> Almost every recipe online serves
            &quot;4-6.&quot; You can halve it, but then you need half an onion, 1.5
            tablespoons of something, and 6 ounces of chicken. The math gets annoying
            fast, so you make the full recipe, eat one portion, put the rest in the
            fridge, and &quot;forget&quot; about it until it grows a personality.
          </li>
          <li>
            <strong>Produce spoilage timelines.</strong> Fresh berries: 3-5 days. Salad
            greens: 3-4 days. Avocados: ripe for about 12 minutes. Fresh herbs: 4-5
            days. If you don&apos;t have a plan for these ingredients within a few days
            of buying them, they&apos;re going in the trash.
          </li>
          <li>
            <strong>The &quot;I&apos;ll use it later&quot; lie.</strong> We&apos;ve all
            told ourselves we&apos;d use that second bell pepper, that remaining half
            onion, that open can of coconut milk. We won&apos;t. We both know it.
          </li>
        </ul>
      </div>

      {/* The freezer is your best friend */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The Freezer Is Your Best Friend
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          If you&apos;re cooking for one, the freezer isn&apos;t optional &mdash;
          it&apos;s your entire strategy. Everything that won&apos;t get used within a
          few days goes in the freezer immediately. Not &quot;later.&quot; Now.
        </p>
        <ul className="list-disc list-inside space-y-3 pl-1">
          <li>
            <strong>Chicken thighs/breasts:</strong> When you get home, separate them
            individually into freezer bags or wrap. Pull out one at a time as needed.
            Defrost in the fridge overnight or in cold water for 30 minutes.
          </li>
          <li>
            <strong>Cooked rice:</strong> Make a big batch, portion into single-serving
            containers, freeze. Microwave from frozen in 2 minutes. This is how meal
            prep works when you&apos;re one person.
          </li>
          <li>
            <strong>Bread:</strong> Freeze the whole loaf. Pull out individual slices
            and toast them directly from frozen. They taste the same. This is the
            single biggest food waste reducer for solo cooks.
          </li>
          <li>
            <strong>Sauces and broths:</strong> Pour into ice cube trays, freeze, pop
            out and store in a bag. Each cube is about 2 tablespoons. Need a splash of
            broth? Grab two cubes. Leftover pasta sauce? Freeze it in portions.
          </li>
          <li>
            <strong>Bananas going brown:</strong> Peel, break in half, freeze. Use for
            smoothies or banana bread later. Stop throwing away bananas.
          </li>
        </ul>
        <p>
          The freezer turns a 3-day shelf life into a 3-month shelf life. Once you get
          into the habit of freezing things the day you buy them, food waste drops
          dramatically.
        </p>
      </div>

      {/* Buy these, skip those */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Buy These, Skip Those
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Not all groceries are created equal when you&apos;re shopping for one. Some
          ingredients are designed to last. Others are a race against the clock.
        </p>
        <p><strong>Buy these (they last):</strong></p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li><strong>Frozen vegetables.</strong> Same nutrition as fresh, last 3+ months, already chopped. Frozen broccoli, peas, stir-fry mixes, and spinach are game changers for solo cooks.</li>
          <li><strong>Eggs.</strong> Last 4-5 weeks in the fridge. Cheap, versatile, high protein. The perfect single-person ingredient.</li>
          <li><strong>Canned goods.</strong> Beans, tomatoes, tuna, coconut milk. Years of shelf life. Open when you need them.</li>
          <li><strong>Hardy produce.</strong> Carrots (3-4 weeks), cabbage (2 months!), onions (2-4 weeks), potatoes (2-4 weeks), apples (4-6 weeks). These are the produce that actually survives solo cooking timelines.</li>
          <li><strong>Hard cheeses.</strong> Parmesan and cheddar last 3-4 weeks, sometimes longer. Way better than soft cheeses that go bad in a week.</li>
        </ul>
        <p className="mt-4"><strong>Skip these (waste traps):</strong></p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li><strong>Fresh herbs.</strong> Buy paste or dried instead. A bunch of cilantro costs $1 and you&apos;ll use 10% of it. A tube of cilantro paste costs $3 and lasts months in the fridge.</li>
          <li><strong>Bagged salad mix.</strong> Goes slimy in 2-3 days. Buy a whole head of romaine (lasts 1-2 weeks) or skip salad and eat your veggies cooked.</li>
          <li><strong>Bulk meat without a freeze plan.</strong> If you buy a 3-pound pack of ground beef and don&apos;t portion and freeze it immediately, you&apos;ll use a third and waste the rest.</li>
          <li><strong>Specialty ingredients.</strong> That bottle of fish sauce for the one Thai recipe? You&apos;ll use it once and it&apos;ll sit in your fridge for two years. Only buy specialty items if they work across multiple meals.</li>
        </ul>
      </div>

      {/* The overlapping ingredient strategy */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The Overlapping Ingredient Strategy
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          This is the single most important concept for cooking solo without waste:
          plan meals that share ingredients.
        </p>
        <p>
          Instead of making three completely different meals with three different protein
          sources, three different vegetables, and three different sauces &mdash; pick
          one protein and use it three ways:
        </p>
        <div className="bg-stone-50 rounded-xl p-6 my-4">
          <p className="font-semibold text-stone-800 mb-3">Example: One pack of chicken thighs, three meals</p>
          <ul className="list-disc list-inside space-y-2 text-stone-600">
            <li><strong>Monday:</strong> Chicken stir-fry with frozen vegetables and rice</li>
            <li><strong>Wednesday:</strong> Chicken quesadilla with cheese and salsa</li>
            <li><strong>Friday:</strong> Chicken fried rice with egg and soy sauce</li>
          </ul>
          <p className="text-sm text-stone-400 mt-3">
            One protein. Three completely different meals. Zero waste.
          </p>
        </div>
        <p>
          Same principle applies to vegetables. Buy a head of cabbage: use some in the
          stir-fry Monday, shred some for tacos Wednesday, saut&eacute; the rest as a
          side on Friday. A single head of cabbage lasts two months in the fridge and
          works in almost anything.
        </p>
        <p>
          This is exactly what a good{" "}
          <Link
            href="/blog/weekly-meal-plan"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            weekly meal plan
          </Link>{" "}
          does automatically &mdash; it makes sure ingredients overlap so nothing goes
          unused.
        </p>
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Get a meal plan sized for one
        </p>
        <p className="text-stone-500 text-sm mb-5">
          What&apos;s For Dinner generates personalized meal plans with recipes and a
          grocery list &mdash; portioned for your household size. No waste, no guesswork.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try Free &rarr;
        </Link>
      </div>

      {/* Embrace leftovers */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Embrace Leftovers as Tomorrow&apos;s Lunch
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          This is the single best hack for cooking solo: <strong>always cook dinner
          for two</strong>. Eat one portion for dinner, pack the other for tomorrow&apos;s
          lunch.
        </p>
        <p>
          You&apos;re not making &quot;leftovers&quot; &mdash; you&apos;re making lunch.
          Reframing it this way changes everything. You&apos;re not eating old food.
          You&apos;re being efficient. Professional move.
        </p>
        <p>
          This solves two problems at once: you don&apos;t waste the second portion,
          and you don&apos;t have to figure out lunch. Most meals reheat perfectly:
          pasta, rice dishes, stir-fries, soups, anything with a sauce. Pack it in a
          container while you&apos;re cleaning up dinner and it&apos;s ready to grab
          in the morning.
        </p>
        <p>
          If you hate reheated food, turn it into something new. Last night&apos;s
          grilled chicken becomes today&apos;s chicken wrap. Rice becomes fried rice.
          Roasted vegetables become a grain bowl with some cheese on top. Same
          ingredients, different meal, zero waste.
        </p>
      </div>

      {/* The real cost */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The Real Cost of Food Waste When You Live Alone
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Let&apos;s do the math. If you spend $80/week on groceries and waste 30%
          of it (the national average), that&apos;s $24/week going straight in the trash.
          That&apos;s <strong>$1,248 per year</strong> of food you bought, looked at,
          and threw away.
        </p>
        <p>
          With the strategies in this article &mdash; freezing portions, buying smart,
          overlapping ingredients, cooking for two and eating leftovers &mdash; you can
          realistically cut waste to under 10%. That&apos;s $16/week back in your pocket,
          or about $830/year.
        </p>
        <p>
          Or you could skip the mental gymnastics entirely and use a meal plan that
          tells you exactly what to buy for exactly what you&apos;re cooking. No extras,
          no waste, no guilt. A{" "}
          <Link
            href="/blog/meal-plan-with-grocery-list"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            meal plan with a grocery list
          </Link>{" "}
          is basically a food waste prevention system that also feeds you.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Stop wasting groceries
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Get a personalized meal plan with recipes and a grocery list &mdash; portioned
          for one. Every ingredient has a purpose. $7.99/mo.
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
            href="/blog/what-to-cook-when-you-have-nothing"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            What to Cook When You Have &quot;Nothing&quot; in the Fridge
          </Link>
          <Link
            href="/blog/groceries-keep-going-bad"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Why Your Groceries Keep Going Bad (And How to Fix It)
          </Link>
          <Link
            href="/blog/i-hate-cooking"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            I Hate Cooking (But I Still Need to Eat)
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
          <Link href="/meal-plans/meal-plan-for-one-person" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">For One</Link>
          <Link href="/meal-plans/budget-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Budget</Link>
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
