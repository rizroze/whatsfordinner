import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Your First Real Grocery List (New Apartment Starter Kit)",
  description:
    "Just moved into your first apartment? Here's the exact grocery list to start with — staples, spices, and 5 easy meals you can make this week. Under $60 total.",
  openGraph: {
    title: "Your First Real Grocery List (New Apartment Starter Kit)",
    description:
      "Just moved into your first apartment? Here's the exact grocery list to start with — staples, spices, and 5 easy meals you can make this week. Under $60 total.",
    siteName: "What's For Dinner",
    type: "article",
    url: "https://whatsfordinner.fit/blog/first-grocery-shopping-list",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your First Real Grocery List (New Apartment Starter Kit)",
    description:
      "Just moved into your first apartment? Here's the exact grocery list to start with — staples, spices, and 5 easy meals you can make this week.",
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/first-grocery-shopping-list",
  },
};

export default function FirstGroceryShoppingListArticle() {
  return (
    <>
      <ArticleJsonLd
        title="Your First Real Grocery List (New Apartment Starter Kit)"
        description="Just moved into your first apartment? Here's the exact grocery list to start with — staples, spices, and 5 easy meals you can make this week. Under $60 total."
        url="https://whatsfordinner.fit/blog/first-grocery-shopping-list"
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
                name: "What groceries should I buy for my first apartment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Start with two categories: a pantry kit (~$25) with oil, salt, pepper, garlic powder, soy sauce, hot sauce, pasta, and rice; and fresh groceries (~$35) with eggs, chicken, cheese, bread, bananas, onions, frozen vegetables, butter, tortillas, and canned tomatoes. This gives you enough ingredients to make 5+ different meals your first week.",
                },
              },
              {
                "@type": "Question",
                name: "How much should my first grocery trip cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Your first grocery trip will cost $50-60 because you're buying pantry staples (oil, spices, sauces) that you won't need to replace for weeks or months. After the initial stock-up, weekly grocery runs drop to $30-40 because you're only buying fresh ingredients like produce, protein, and dairy.",
                },
              },
              {
                "@type": "Question",
                name: "What kitchen staples do I need?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The essential kitchen staples are: cooking oil (vegetable or olive), salt, black pepper, garlic powder, soy sauce, hot sauce, pasta, and rice. These 8 items cost about $25 total and form the foundation of hundreds of meals. You don't need a full spice rack — start with these and add spices as specific recipes call for them.",
                },
              },
              {
                "@type": "Question",
                name: "What easy meals can I make with basic ingredients?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "With basic staples you can make: garlic butter pasta with frozen broccoli (15 min), chicken stir-fry with rice and frozen vegetables (20 min), egg fried rice with soy sauce (10 min), quesadillas with chicken and cheese (10 min), and scrambled egg breakfast burritos (8 min). All use the same core ingredients from a starter grocery list.",
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
          { name: "First Grocery Shopping List", url: "https://whatsfordinner.fit/blog/first-grocery-shopping-list" },
        ]}
      />
      <article>
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        Your First Grocery List: The New Apartment Starter Kit
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          You moved in. The kitchen has a stove, a microwave, and maybe a pan
          that the previous tenant left behind. The fridge is empty except for
          a box of baking soda and existential dread. You need to buy food, but
          you&apos;ve never actually stocked a kitchen from scratch and the
          grocery store has 40,000 items.
        </p>
        <p>
          This is your list. Not a Pinterest-optimized, aspirational pantry
          guide with 47 artisan spices. Just the actual stuff you need to cook
          actual food in your first week. Two shopping categories, under $60
          total, and 5 meals you can make with just these ingredients.
        </p>
        <p>
          We&apos;re assuming you have a stove, a pan, a pot, and basic utensils.
          If you don&apos;t even have that yet, grab a nonstick skillet ($15),
          a medium pot ($12), and a spatula ($3) from Target or Walmart. That&apos;s
          your entire kitchen toolkit for now.
        </p>
      </div>

      {/* The buy-once pantry kit */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The &quot;Buy Once&quot; Pantry Kit (~$25)
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          These are the things you buy once and don&apos;t replace for weeks or
          months. They&apos;re the backbone of every meal you&apos;ll cook.
          This is not the exciting part of the grocery trip, but it&apos;s the
          most important.
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border border-stone-200 rounded-xl overflow-hidden">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-stone-700">Item</th>
                <th className="px-4 py-3 font-semibold text-stone-700">Why You Need It</th>
                <th className="px-4 py-3 font-semibold text-stone-700 text-right">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr>
                <td className="px-4 py-2 font-medium text-stone-700">Cooking oil (vegetable or olive)</td>
                <td className="px-4 py-2">You can&apos;t cook without it. Literally nothing else works in a pan.</td>
                <td className="px-4 py-2 text-right">$3.50</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-stone-700">Salt</td>
                <td className="px-4 py-2">Makes food taste like food. The $1 canister is fine.</td>
                <td className="px-4 py-2 text-right">$1.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-stone-700">Black pepper</td>
                <td className="px-4 py-2">Goes on everything after salt. Get pre-ground, life&apos;s too short for a pepper mill right now.</td>
                <td className="px-4 py-2 text-right">$2.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-stone-700">Garlic powder</td>
                <td className="px-4 py-2">The lazy version of mincing garlic. Tastes 80% as good with 0% of the effort.</td>
                <td className="px-4 py-2 text-right">$2.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-stone-700">Soy sauce</td>
                <td className="px-4 py-2">Adds salty, savory depth to anything with rice, noodles, or stir-fry.</td>
                <td className="px-4 py-2 text-right">$2.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-stone-700">Hot sauce</td>
                <td className="px-4 py-2">Makes boring food not boring. Cholula, Tapatio, Sriracha &mdash; pick your fighter.</td>
                <td className="px-4 py-2 text-right">$2.50</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-stone-700">Pasta (1 lb box)</td>
                <td className="px-4 py-2">The easiest dinner that exists. Boil water, add pasta, done.</td>
                <td className="px-4 py-2 text-right">$1.50</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-stone-700">Rice (5 lb bag)</td>
                <td className="px-4 py-2">The foundation of half the world&apos;s cuisine. A 5 lb bag lasts a month.</td>
                <td className="px-4 py-2 text-right">$4.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-stone-50 font-semibold">
                <td className="px-4 py-3" colSpan={2}>Pantry Kit Total</td>
                <td className="px-4 py-3 text-right">~$18.50</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p>
          That&apos;s 8 items for under $20. The rice and pasta alone give you
          30+ servings of carbs. The oil, salt, pepper, and garlic powder turn
          any protein and vegetable into a real meal. The soy sauce and hot sauce
          are there because food without flavor is punishment, not dinner.
        </p>
      </div>

      {/* Fresh groceries */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Your First Week&apos;s Fresh Groceries (~$35)
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          These are the things that need to be used within a week. This is your
          actual food &mdash; the protein, produce, and dairy that turn pantry
          staples into meals.
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border border-stone-200 rounded-xl overflow-hidden">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-stone-700">Item</th>
                <th className="px-4 py-3 font-semibold text-stone-700">What It Becomes</th>
                <th className="px-4 py-3 font-semibold text-stone-700 text-right">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr>
                <td className="px-4 py-2 font-medium text-stone-700">Eggs (dozen)</td>
                <td className="px-4 py-2">Breakfast, fried rice, ramen upgrade, quick dinner</td>
                <td className="px-4 py-2 text-right">$3.50</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-stone-700">Chicken thighs (2 lbs)</td>
                <td className="px-4 py-2">Stir-fry, tacos, quesadillas, rice bowls</td>
                <td className="px-4 py-2 text-right">$5.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-stone-700">Shredded cheese (bag)</td>
                <td className="px-4 py-2">Quesadillas, eggs, pasta, nachos, everything</td>
                <td className="px-4 py-2 text-right">$3.50</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-stone-700">Bread (loaf)</td>
                <td className="px-4 py-2">Toast, sandwiches, garlic bread (butter + garlic powder + broil)</td>
                <td className="px-4 py-2 text-right">$3.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-stone-700">Bananas (bunch of 6)</td>
                <td className="px-4 py-2">Instant breakfast, snack, smoothie if you have a blender</td>
                <td className="px-4 py-2 text-right">$1.50</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-stone-700">Onions (3 lb bag)</td>
                <td className="px-4 py-2">The base of every savory dish. Lasts 2-3 weeks.</td>
                <td className="px-4 py-2 text-right">$2.50</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-stone-700">Frozen vegetables (2 bags)</td>
                <td className="px-4 py-2">Stir-fry, pasta, rice bowls. No chopping. No waste.</td>
                <td className="px-4 py-2 text-right">$3.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-stone-700">Butter (1 stick)</td>
                <td className="px-4 py-2">Eggs, pasta, toast, rice. Makes everything taste better.</td>
                <td className="px-4 py-2 text-right">$1.50</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-stone-700">Tortillas (10-pack)</td>
                <td className="px-4 py-2">Wraps, quesadillas, breakfast burritos, makeshift bread</td>
                <td className="px-4 py-2 text-right">$3.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-stone-700">Canned diced tomatoes (2)</td>
                <td className="px-4 py-2">Pasta sauce, rice topping, base for any tomato dish</td>
                <td className="px-4 py-2 text-right">$2.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-stone-50 font-semibold">
                <td className="px-4 py-3" colSpan={2}>Fresh Groceries Total</td>
                <td className="px-4 py-3 text-right">~$28.50</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p>
          Combined with the pantry kit: <strong>$47 total</strong> for your
          first week&apos;s complete kitchen setup. And remember &mdash; the
          pantry stuff carries over. Week 2 is just the fresh groceries, so
          you&apos;re down to $28-30 per week after the initial stock-up.
        </p>
      </div>

      {/* 5 meals you can make */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        5 Meals You Can Make With Just This List
      </h2>
      <div className="space-y-6 text-stone-600 leading-relaxed">
        <div>
          <h3 className="text-lg font-semibold text-stone-800 mb-2">
            1. Garlic Butter Pasta with Broccoli (15 min)
          </h3>
          <p>
            Boil pasta. While it cooks, melt butter in the pan, add garlic
            powder, toss in frozen broccoli for 3 minutes. Drain pasta, throw
            it in the pan, stir everything together. Salt, pepper, done. This
            will become your go-to &quot;I&apos;m tired and don&apos;t want to
            think&quot; dinner. It&apos;s also shockingly good for how simple
            it is.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-stone-800 mb-2">
            2. Chicken Stir-Fry with Rice (20 min)
          </h3>
          <p>
            Start rice. Cut chicken thighs into bite-sized pieces, season with
            salt and garlic powder, cook in oil until browned (8-10 min). Add
            frozen stir-fry vegetables and a splash of soy sauce. Serve over
            rice. Hot sauce on top if you want. This is the meal that teaches
            you the fundamental skill of cooking: protein + vegetable + grain +
            sauce = dinner.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-stone-800 mb-2">
            3. Egg Fried Rice (10 min)
          </h3>
          <p>
            Use leftover rice from last night (cold rice fries better than fresh).
            Heat oil in a pan, scramble 2 eggs, push them to the side. Add rice,
            soy sauce, frozen veggies. Stir everything together for 3 minutes
            on high heat. This is a 10-minute meal that costs about $1.50 and
            tastes like you ordered in. The secret is high heat and not stirring
            too much &mdash; let the rice get a little crispy on the bottom.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-stone-800 mb-2">
            4. Chicken Quesadillas (10 min)
          </h3>
          <p>
            Chop up leftover chicken (or cook some fresh, 8 min). Put a
            tortilla in a dry pan on medium heat, add cheese and chicken to one
            half, fold it over. Cook 2-3 minutes per side until the cheese
            melts and the tortilla is golden and crispy. Serve with hot sauce.
            This is the fastest real meal you can make. Two quesadillas and
            you&apos;re full.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-stone-800 mb-2">
            5. Breakfast Burritos (8 min)
          </h3>
          <p>
            Scramble 2-3 eggs with salt and pepper. Warm a tortilla, add eggs,
            cheese, and hot sauce. Roll it up. That&apos;s breakfast. Or lunch.
            Or a 1 AM snack. Breakfast burritos work at any hour and cost about
            $0.80 each. If you have leftover chicken, throw some in. If you
            diced an onion, saut&eacute; some first. It&apos;s endlessly
            customizable.
          </p>
        </div>
      </div>

      {/* What you DON'T need yet */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        What You DON&apos;T Need Yet
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          The internet will try to convince you that a properly stocked kitchen
          needs 30+ items. Ignore that. Here&apos;s what you can skip for now:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>A full spice rack.</strong> You have salt, pepper, and
            garlic powder. That covers 80% of meals. Buy individual spices only
            when a specific recipe calls for them. Cumin will probably be next.
            Then paprika. That&apos;s it for month one.
          </li>
          <li>
            <strong>Fancy oils.</strong> You don&apos;t need sesame oil, truffle
            oil, avocado oil, or extra virgin olive oil right now. One bottle
            of regular cooking oil handles everything. Upgrade later when you
            start caring about flavor profiles.
          </li>
          <li>
            <strong>Gadgets.</strong> No air fryer. No Instant Pot. No rice
            cooker. No garlic press. A pan, a pot, and a spatula cook everything
            on this list. Buy gadgets after you&apos;ve been cooking consistently
            for a month and know what would actually save you time.
          </li>
          <li>
            <strong>Fresh herbs.</strong> Cilantro, basil, and parsley are great
            but they die in 3 days and cost $2 a bunch. For now, dried garlic
            powder is your herb. Fresh herbs are a level-up, not a starter item.
          </li>
          <li>
            <strong>Multiple proteins.</strong> You have chicken and eggs.
            That&apos;s two proteins. That&apos;s enough. Ground beef, fish,
            tofu, and pork can join the rotation in week 3 when you&apos;re
            more comfortable.
          </li>
        </ul>
        <p>
          The goal of week one isn&apos;t to build a dream kitchen. It&apos;s to
          prove to yourself that you can cook real food with basic ingredients.
          Everything else is an upgrade that comes later.
        </p>
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Get a weekly grocery list automatically
        </p>
        <p className="text-stone-500 text-sm mb-5">
          What&apos;s For Dinner generates a personalized meal plan with recipes
          and a grocery list every week &mdash; so you never stand in the store
          wondering what to buy.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Get a Free Plan &rarr;
        </Link>
      </div>

      {/* Week 2 and beyond */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Week 2 and Beyond: What to Add Next
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          You survived week one. The kitchen didn&apos;t burn down. You made
          actual food. Now you can start expanding. Here&apos;s the suggested
          order for building out your kitchen over the next month:
        </p>
        <ol className="list-decimal list-inside space-y-2 pl-1">
          <li>
            <strong>Week 2:</strong> Add ground beef ($5), a second frozen veg
            variety ($1.50), and cumin ($2). Now you can make tacos, meat sauce
            pasta, and beef fried rice.
          </li>
          <li>
            <strong>Week 3:</strong> Add canned beans ($2.50), peanut butter
            ($3), and limes ($1). Beans add cheap protein, PB is snacks and
            sauces, lime makes everything taste fresh.
          </li>
          <li>
            <strong>Week 4:</strong> Add whatever you&apos;ve been craving. By
            now you know what meals you actually cook and can buy ingredients to
            match your habits instead of someone else&apos;s list.
          </li>
        </ol>
        <p>
          If you want to skip the guesswork entirely, an{" "}
          <Link
            href="/blog/ai-meal-planner"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            AI meal planner
          </Link>{" "}
          generates a weekly meal plan with recipes and a grocery list tailored
          to your preferences and budget. You set it up once and get a fresh
          plan every week. It&apos;s like having a friend who&apos;s good at
          cooking text you what to buy every Sunday.
        </p>
      </div>

      {/* The mental game */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The Part Nobody Talks About
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Your first few meals will be mediocre. That&apos;s normal. Cooking is
          a skill, not a talent &mdash; which means it gets better with
          repetition, not inspiration. The eggs will be overcooked. The rice
          might be mushy. The chicken might be dry the first time (it
          won&apos;t be with thighs, but still).
        </p>
        <p>
          That&apos;s fine. A mediocre home-cooked meal still costs $2 and
          takes 15 minutes. A mediocre Uber Eats order costs $18 and takes 45.
          Even your worst attempt is a better deal than delivery. And by meal
          number 10, you&apos;ll be genuinely good at the basics. By meal 30,
          you&apos;ll wonder why you ever thought cooking was hard.
        </p>
        <p>
          The{" "}
          <Link
            href="/blog/meal-planning-for-beginners"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            beginner&apos;s guide to meal planning
          </Link>{" "}
          is your next step once you&apos;re comfortable with the basics. It
          teaches you how to plan a whole week&apos;s meals so you&apos;re not
          figuring it out every day.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Your first meal plan, on us
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Get a personalized meal plan with recipes and a grocery list &mdash;
          built for your diet, budget, and skill level. Try your first plan free.
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
            Meal Planning for Beginners: The Complete Guide
          </Link>
          <Link
            href="/blog/eating-healthy-on-a-budget"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Eating Healthy on a Budget: $50/Week, No Sad Salads
          </Link>
          <Link
            href="/blog/upgrade-your-ramen"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            10 Ways to Upgrade Instant Ramen Into a Real Meal
          </Link>
          <Link
            href="/blog/easy-meal-prep-for-beginners"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Easy Meal Prep for Beginners: 1 Hour, Done for the Week
          </Link>
          <Link
            href="/blog/meal-planning-in-your-20s"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Planning in Your 20s
          </Link>
        </div>
        <p className="text-sm font-medium text-stone-400 mt-6 mb-4">
          Browse meal plans
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/meal-plans/meal-plan-for-beginners" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Beginner</Link>
          <Link href="/meal-plans/budget-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Budget</Link>
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
