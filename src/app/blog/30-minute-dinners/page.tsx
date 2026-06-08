import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";
import { MealCardGrid } from "@/components/blog/MealCard";

export const metadata: Metadata = {
  title: "20 Easy 30-Minute Dinners (That Don't Taste Like Shortcuts)",
  description:
    "20 fast dinner recipes that are legitimately done in 30 minutes or less. One-pan meals, quick pastas, sheet pan dinners, and stir-fries with real flavor. Plus a free weekly meal plan.",
  openGraph: {
    title: "20 Easy 30-Minute Dinners (That Don't Taste Like Shortcuts)",
    description:
      "20 fast dinner recipes that are legitimately done in 30 minutes or less. One-pan meals, quick pastas, sheet pan dinners, and stir-fries with real flavor. Plus a free weekly meal plan.",
    siteName: "What's For Dinner",
    type: "article",
    images: [{ url: `/api/og?title=20%20Easy%2030-Minute%20Dinners%20(That%20Don't%20Taste%20Like%20Shortcuts)&description=20%20fast%20dinner%20recipes%20that%20are%20legitimately%20done%20in%2030%20minutes%20or%20less.%20One-pan%20meals%2C%20quick%20pastas%2C%20sheet%20pan%20dinners%2C`, width: 1200, height: 630 }],
    url: "https://whatsfordinner.fit/blog/30-minute-dinners",
  },
  twitter: {
    card: "summary_large_image",
    title: "20 Easy 30-Minute Dinners (That Don't Taste Like Shortcuts)",
    description:
      "20 fast dinner recipes that are legitimately done in 30 minutes or less. One-pan meals, quick pastas, sheet pan dinners, and stir-fries with real flavor.",
    images: ["/api/og?title=20%20Easy%2030-Minute%20Dinners%20(That%20Don't%20Taste%20Like%20Shortcuts)&description=20%20fast%20dinner%20recipes%20that%20are%20legitimately%20done%20in%2030%20minutes%20or%20less.%20One-pan%20meals%2C%20quick%20pastas%2C%20sheet%20pan%20dinners%2C"],
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/30-minute-dinners",
  },
};

export default function ThirtyMinuteDinnersArticle() {
  return (
    <>
      <ArticleJsonLd
        title="20 Easy 30-Minute Dinners (That Don't Taste Like Shortcuts)"
        description="20 fast dinner recipes that are legitimately done in 30 minutes or less. One-pan meals, quick pastas, sheet pan dinners, and stir-fries with real flavor. Plus a free weekly meal plan."
        url="https://whatsfordinner.fit/blog/30-minute-dinners"
        datePublished="2026-03-18"
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
                name: "Are 30-minute meals actually possible on a weeknight?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, if you pick the right recipes. The key is choosing meals with short ingredient lists and simple techniques — one-pan dishes, pastas, stir-fries, and sheet pan dinners. Avoid anything that requires marinating, slow braising, or multiple pots. With a little mise en place (pre-chopping garlic, having spices out), 30 minutes is very doable.",
                },
              },
              {
                "@type": "Question",
                name: "What equipment do I need for fast weeknight cooking?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A 12-inch skillet (stainless or cast iron), a large pot for pasta, and a sheet pan are all you need for 90% of quick dinners. A sharp chef's knife and cutting board speed up prep significantly. Optional but helpful: a rice cooker (set it and forget it) and a microplane for garlic and ginger.",
                },
              },
              {
                "@type": "Question",
                name: "How do I make 30-minute meals taste better?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Three tricks: First, use high-heat techniques like searing and stir-frying to build flavor fast. Second, finish with an acid — a squeeze of lemon, a splash of vinegar, or a spoonful of salsa brightens everything. Third, keep umami boosters on hand: soy sauce, parmesan, fish sauce, miso paste. A teaspoon of any of these makes a 30-minute meal taste like it took an hour.",
                },
              },
              {
                "@type": "Question",
                name: "Can I meal prep 30-minute dinners ahead of time?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Most of the time in a 30-minute meal is spent on chopping and prep, not cooking. If you batch-prep aromatics (mince garlic, dice onions, slice vegetables) on Sunday, your weeknight cook time drops to 15-20 minutes. Stir-fry sauces, pasta sauces, and sheet pan seasonings can all be mixed ahead and stored in the fridge.",
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
          { name: "30-Minute Dinners", url: "https://whatsfordinner.fit/blog/30-minute-dinners" },
        ]}
      />
      <article className="blog-article">
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-xs text-stone-400">Updated March 2026</p>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        20 Easy 30-Minute Dinners (That Don&apos;t Taste Like Shortcuts)
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          The myth of{" "}
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-orange-500 underline">30-minute meals</Link>{" "}
          is that they taste like compromises. Bland chicken breast, steamed
          vegetables, zero seasoning. The kind of food you eat because you
          &quot;should,&quot; not because you want to.
        </p>
        <p>
          These 20 actually slap &mdash; real flavor, real ingredients,
          legitimately done in half an hour. No cheating with pre-made sauces
          or &quot;active time doesn&apos;t count&quot; disclaimers. Timer
          starts when you walk into the kitchen. Timer stops when food hits
          the plate.
        </p>

        {/* Stat callout */}
        <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-4 my-6">
          <p className="text-2xl font-bold text-stone-800">30 minutes or less &mdash; all 20 meals</p>
          <p className="text-sm text-stone-500 mt-1">From fridge to plate. No asterisks. No &quot;plus inactive time.&quot;</p>
        </div>
      </div>

      {/* TL;DR box */}
      <div className="bg-stone-50 rounded-xl p-5 my-8">
        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">TL;DR</p>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>20 dinners organized by cooking method: one-pan, pasta, sheet pan, stir-fry</li>
          <li>Every meal under 30 minutes and $2&ndash;5/serving</li>
          <li>Kitchen setup tips to make weeknight cooking even faster</li>
        </ul>
      </div>

      {/* Section 1: One-Pan Wonders */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        1. 5 One-Pan Wonders
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          One pan. One burner. Minimal dishes. These are the meals you make
          when you want real food but refuse to do real cleanup.
        </p>
        <MealCardGrid meals={[
          { name: "Smashed Garlic Chicken Thighs", mealType: "dinner", prepTime: "25 min · $3.50", description: "Skin-on thighs seared in a screaming-hot skillet with smashed garlic cloves, butter, and thyme. The garlic gets golden and sweet. Serve with crusty bread to soak up the pan juices.", tags: ["one-pan", "high-protein"] },
          { name: "Sausage, White Bean & Kale Skillet", mealType: "dinner", prepTime: "20 min · $3.00", description: "Sliced Italian sausage browned with canned white beans, torn kale, garlic, and a splash of chicken broth. Hearty enough that you don&apos;t need a side.", tags: ["one-pan", "high-protein"] },
          { name: "Honey Soy Glazed Salmon", mealType: "dinner", prepTime: "18 min · $4.50", description: "Salmon fillet pan-seared skin-side down, then glazed with honey, soy sauce, and ginger. Finish with sesame seeds and scallions. Looks fancy, takes 18 minutes.", tags: ["one-pan", "high-protein"] },
          { name: "Chickpea Shakshuka", mealType: "dinner", prepTime: "22 min · $2.50", description: "Canned tomatoes simmered with cumin, paprika, and chickpeas. Crack eggs directly into the sauce, cover, and let them poach. Serve with toast for dipping.", tags: ["one-pan", "vegetarian"] },
          { name: "Spicy Ground Turkey Lettuce Wraps", mealType: "lunch", prepTime: "15 min · $3.00", description: "Ground turkey cooked with soy sauce, sriracha, garlic, and ginger. Spoon into butter lettuce cups and top with shredded carrots and cilantro. Light, fast, and full of flavor.", tags: ["one-pan", "low-carb"] },
        ]} />
      </div>

      {/* Section 2: Pasta in 30 or Less */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        2. 5 Pasta in 30 or Less
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Pasta is the original 30-minute meal. Boil water, cook noodles,
          make sauce while you wait. The trick is building flavor in the sauce
          while the pasta does its thing.
        </p>
        <MealCardGrid meals={[
          { name: "Cacio e Pepe", mealType: "dinner", prepTime: "18 min · $2.00", description: "Spaghetti tossed with pecorino Romano, black pepper, and starchy pasta water. Three ingredients, restaurant-quality results. The key is adding the cheese off-heat so it emulsifies instead of clumping.", tags: ["pasta", "vegetarian"] },
          { name: "Spicy Sausage Rigatoni", mealType: "dinner", prepTime: "25 min · $3.50", description: "Italian sausage crumbled and browned, tossed with rigatoni, crushed tomatoes, red pepper flakes, and a handful of parmesan. The pasta water makes the sauce cling.", tags: ["pasta", "high-protein"] },
          { name: "Lemon Butter Shrimp Linguine", mealType: "dinner", prepTime: "20 min · $4.50", description: "Shrimp sauteed in garlic butter, deglazed with white wine and lemon juice, tossed with linguine and fresh parsley. Date-night energy on a Tuesday.", tags: ["pasta", "high-protein"] },
          { name: "Pesto Pasta with Cherry Tomatoes", mealType: "lunch", prepTime: "15 min · $3.00", description: "Penne tossed with store-bought pesto, halved cherry tomatoes, and toasted pine nuts. Add mozzarella if you want it creamy. Works hot or cold.", tags: ["pasta", "vegetarian"] },
          { name: "Mushroom & Garlic Spaghetti", mealType: "dinner", prepTime: "22 min · $2.50", description: "Sliced mushrooms seared until golden in olive oil with garlic and thyme. Toss with spaghetti, pasta water, and parmesan. Earthy, savory, and deeply satisfying.", tags: ["pasta", "vegetarian"] },
        ]} />
      </div>

      {/* Section 3: Sheet Pan Dinners */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        3. 5 Sheet Pan Dinners
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          The formula: 10 minutes of chopping and seasoning, 20 minutes in
          the oven while you do nothing. Sheet pan dinners are the closest
          thing to a cooking cheat code.
        </p>
        <MealCardGrid meals={[
          { name: "Sheet Pan Chicken Fajitas", mealType: "dinner", prepTime: "10 min prep + 20 min oven · $3.50", description: "Sliced chicken breast, bell peppers, and onions tossed with cumin, chili powder, and lime juice. Roast at 425°F. Serve in warm tortillas with sour cream and salsa.", tags: ["sheet-pan", "high-protein"] },
          { name: "Roasted Sausage & Vegetables", mealType: "dinner", prepTime: "10 min prep + 20 min oven · $3.00", description: "Sliced kielbasa with cubed potatoes, broccoli, and red onion. Toss with olive oil, garlic powder, and smoked paprika. One pan, one meal, one dish to wash.", tags: ["sheet-pan", "high-protein"] },
          { name: "Teriyaki Salmon & Broccoli", mealType: "dinner", prepTime: "8 min prep + 18 min oven · $4.50", description: "Salmon fillets brushed with teriyaki glaze alongside broccoli florets. The salmon gets caramelized edges and the broccoli gets crispy tips. Serve over rice.", tags: ["sheet-pan", "high-protein"] },
          { name: "Mediterranean Chicken & Potatoes", mealType: "dinner", prepTime: "10 min prep + 20 min oven · $3.50", description: "Chicken thighs with baby potatoes, cherry tomatoes, and olives. Season with oregano, lemon, and garlic. The tomatoes burst and make their own sauce.", tags: ["sheet-pan", "mediterranean"] },
          { name: "Crispy Tofu & Sweet Potato", mealType: "dinner", prepTime: "10 min prep + 20 min oven · $2.50", description: "Cubed tofu and sweet potato tossed with soy sauce, sesame oil, and sriracha. Roast until the tofu is crispy and the sweet potato is caramelized. Top with scallions.", tags: ["sheet-pan", "vegan"] },
        ]} />
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Want a full week of 30-minute meals?
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Tell us your preferences and we&apos;ll generate a personalized meal
          plan with recipes and a grocery list &mdash; every meal under 30
          minutes.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try Free &rarr;
        </Link>
      </div>

      {/* Section 4: Stir-Fries & Bowls */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        4. 5 Stir-Fries &amp; Bowls
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          High heat, fast cooking, big flavor. Stir-fries are designed to be
          fast &mdash; everything cooks in minutes once the wok is hot. Bowls
          are just deconstructed stir-fries for people who like things neat.
        </p>
        <MealCardGrid meals={[
          { name: "Beef & Broccoli Stir-Fry", mealType: "dinner", prepTime: "22 min · $4.00", description: "Thinly sliced flank steak seared with broccoli in a soy-ginger-garlic sauce. The trick is cooking the beef in batches so it sears instead of steaming. Serve over rice.", tags: ["stir-fry", "high-protein"] },
          { name: "Chicken Teriyaki Bowl", mealType: "dinner", prepTime: "25 min · $3.50", description: "Diced chicken thigh cooked in homemade teriyaki (soy sauce, mirin, brown sugar, ginger). Serve over rice with steamed edamame and pickled cucumber.", tags: ["bowl", "high-protein"] },
          { name: "Peanut Noodle Bowl", mealType: "lunch", prepTime: "18 min · $2.50", description: "Rice noodles tossed in a peanut-lime-sriracha sauce with shredded cabbage, carrots, and cilantro. Works hot or cold. Pack it for lunch and coworkers will ask what smells amazing.", tags: ["bowl", "vegan"] },
          { name: "Shrimp Fried Rice", mealType: "dinner", prepTime: "20 min · $3.50", description: "Day-old rice stir-fried with shrimp, scrambled egg, frozen peas, soy sauce, and sesame oil. The secret to non-mushy fried rice: cold leftover rice and a screaming-hot pan.", tags: ["stir-fry", "high-protein"] },
          { name: "Spicy Korean Beef Bowl", mealType: "dinner", prepTime: "20 min · $3.50", description: "Ground beef cooked with gochujang, soy sauce, sesame oil, and brown sugar. Serve over rice with a fried egg, pickled radish, and a drizzle of sriracha mayo.", tags: ["bowl", "high-protein"] },
        ]} />
      </div>

      {/* Section 5: The 30-Minute Kitchen Setup */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        5. The 30-Minute Kitchen Setup
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          The difference between a 30-minute meal and a 45-minute meal
          usually isn&apos;t the recipe. It&apos;s the 15 minutes you spend
          hunting for the garlic press, realizing you&apos;re out of olive
          oil, and rummaging through the spice drawer. Here&apos;s how to
          actually hit 30 minutes consistently:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>Mise en place is non-negotiable.</strong> Read the recipe
            once. Pull everything out. Chop everything before you turn on the
            stove. This feels slower but it&apos;s dramatically faster because
            nothing burns while you&apos;re mid-dice.
          </li>
          <li>
            <strong>Own a 12-inch skillet.</strong> Stainless steel or cast
            iron &mdash; either works. A large skillet means food isn&apos;t
            crowded, which means it sears instead of steaming. This single
            upgrade makes every one-pan meal better.
          </li>
          <li>
            <strong>Keep a sheet pan ready.</strong> Line it with parchment
            or foil so cleanup is instant. Preheat the oven first &mdash; by
            the time you&apos;re done prepping, it&apos;s at temperature.
          </li>
          <li>
            <strong>Batch-prep aromatics on Sunday.</strong> Mince a full
            head of garlic, dice two onions, peel and grate a knob of ginger.
            Store in small containers in the fridge. This saves 5&ndash;8
            minutes on every weeknight meal.
          </li>
          <li>
            <strong>Stock three sauces.</strong> Soy sauce, a good hot sauce,
            and something acidic (lemon juice or rice vinegar). These three
            bottles turn bland food into craveable food in seconds.
          </li>
        </ul>

        {/* Pro tip callout */}
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 my-6">
          <p className="text-sm font-semibold text-amber-800">Pro tip</p>
          <p className="text-sm text-amber-700 mt-1">Start boiling water the second you walk into the kitchen &mdash; before you even look at the recipe. By the time you&apos;re done prepping, it&apos;s ready. This alone shaves 8&ndash;10 minutes off any pasta or noodle dish.</p>
        </div>
      </div>

      {/* Get a personalized plan */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Get a Personalized 30-Minute Meal Plan Every Week
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Finding recipes is the easy part. The hard part is figuring out
          what to make Monday through Friday, making sure the ingredients
          overlap so nothing goes to waste, and building a grocery list that
          doesn&apos;t have you wandering the store for an hour.
        </p>
        <p>
          What&apos;s For Dinner handles all of it. Tell it you want{" "}
          <Link
            href="/meal-plans/quick-30-minute-meal-plan"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            quick meals under 30 minutes
          </Link>
          , set your dietary preferences, and you get a personalized meal
          plan with recipes and a grocery list every week. Every recipe is
          timed to fit your schedule. No more staring at the fridge at 6 PM
          wondering what to cook.
        </p>
        <p>
          It&apos;s{" "}
          <Link
            href="/onboarding"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            $7.99/month
          </Link>{" "}
          &mdash; less than a single takeout order. If it saves you even one
          &quot;forget it, let&apos;s just order in&quot; night per week,
          it pays for itself instantly.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Your first week is free
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Set your preferences and time constraints. Get a personalized meal
          plan with recipes and a grocery list &mdash; every meal done in 30
          minutes or less. $7.99/mo after your trial.
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
            href="/blog/cheap-meals-for-one"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Cheap Meals for One: 15 Dinners Under $3/Serving
          </Link>
          <Link
            href="/blog/how-to-meal-prep"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            How to Meal Prep: The Complete Guide for Beginners
          </Link>
          <Link
            href="/blog/weekly-meal-plan"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Weekly Meal Plan: How to Plan a Full Week of Meals
          </Link>
          <Link
            href="/blog/meal-planning-for-beginners"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Planning for Beginners: The Complete Guide (2026)
          </Link>
          <Link
            href="/blog/what-to-cook-when-you-have-nothing"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            What to Cook When You Have Nothing in the Fridge
          </Link>
        </div>
        <p className="text-sm font-medium text-stone-400 mt-6 mb-4">
          Browse meal plans
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans/italian" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Italian</Link>
          <Link href="/meal-plans/mediterranean" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Mediterranean</Link>
          <Link href="/meal-plans/meal-plan-for-one" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">For One</Link>
          <Link href="/meal-plans/meal-plan-for-family-of-4" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Family of 4</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
