import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";

export const metadata: Metadata = {
  title:
    "Meal Planning for Two — Perfectly Portioned Plans for Couples & Roommates",
  description:
    "Meal planning for two doesn't have to mean food waste or boring leftovers. Get AI-generated, perfectly portioned weekly meal plans and grocery lists for couples and roommates — just $4.99/mo.",
  openGraph: {
    title:
      "Meal Planning for Two — Perfectly Portioned Plans for Couples & Roommates",
    description:
      "Meal planning for two doesn't have to mean food waste or boring leftovers. Get AI-generated, perfectly portioned weekly meal plans and grocery lists for couples and roommates.",
    siteName: "What's For Dinner",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Meal Planning for Two — Perfectly Portioned Plans for Couples & Roommates",
    description:
      "Meal planning for two doesn't have to mean food waste or boring leftovers. Get AI-generated, perfectly portioned weekly meal plans and grocery lists.",
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/meal-planning-for-two",
  },
};

export default function MealPlanningForTwo() {
  return (
    <>
      <ArticleJsonLd
        title="Meal Planning for Two: No More Waste, No More Guessing"
        description="Meal planning for two doesn't have to mean food waste or boring leftovers. Get AI-generated, perfectly portioned weekly meal plans and grocery lists for couples and roommates — just $4.99/mo."
        url="https://whatsfordinner.fit/blog/meal-planning-for-two"
        datePublished="2026-02-25"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://whatsfordinner.fit" },
          { name: "Blog", url: "https://whatsfordinner.fit/blog" },
          { name: "Meal Planning for Two: No More Waste, No More Guessing", url: "https://whatsfordinner.fit/blog/meal-planning-for-two" },
        ]}
      />
      <article>
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        For Couples
      </span>
      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        Meal Planning for Two: No More Waste, No More Guessing
      </h1>
      <p className="text-sm text-stone-400 mb-8">February 25, 2026</p>

      <div className="space-y-4">
        <p className="text-stone-600 leading-relaxed">
          If you live with a partner, a roommate, or you&apos;re just a
          two-person household trying to eat well without throwing half your
          groceries in the trash — you already know the struggle. Most meal
          planning advice is written for families of four. Most recipes default
          to six servings. And most grocery runs leave you with way more food
          than two people can reasonably eat before it goes bad.
        </p>
        <p className="text-stone-600 leading-relaxed">
          We built{" "}
          <Link href="/" className="text-orange-500 hover:text-orange-600 underline">
            What&apos;s For Dinner
          </Link>{" "}
          to fix exactly this. Here&apos;s how meal planning for two actually
          works when you have the right tool.
        </p>
      </div>

      {/* Section: The Unique Challenge */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The unique challenge of cooking for two
      </h2>
      <div className="space-y-4">
        <p className="text-stone-600 leading-relaxed">
          Walk into any grocery store and you&apos;ll notice the problem
          immediately. The chicken comes in family packs. The produce is sized
          for bigger households. That head of cabbage? You&apos;ll use a quarter
          of it and find the rest liquefying in the back of your fridge next
          week.
        </p>
        <p className="text-stone-600 leading-relaxed">
          Recipes make it worse. Most cookbooks and food blogs default to 4-6
          servings. You can try halving them, but the math gets awkward fast —
          half an egg, a third of a can of coconut milk, 0.75 tablespoons of
          something. It&apos;s annoying enough that most people just make the
          full recipe and end up eating the same thing four nights in a row.
        </p>
        <p className="text-stone-600 leading-relaxed">
          Then there&apos;s the mental load. When you&apos;re cooking for a
          bigger family, bulk buying and batch cooking are obvious wins. For two
          people, those strategies often backfire. You end up with a freezer full
          of Tupperware containers you forget about and a fridge crammed with
          leftovers that were exciting on Monday and depressing by Wednesday.
        </p>
      </div>

      {/* Section: How We Solve It */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        How we solve it
      </h2>
      <div className="space-y-4">
        <p className="text-stone-600 leading-relaxed">
          When you sign up for What&apos;s For Dinner, one of the first things
          you tell us is your household size. Set it to two, and everything
          downstream changes.
        </p>
        <p className="text-stone-600 leading-relaxed">
          Our AI generates recipes that are portioned for exactly two people. Not
          a family recipe divided in half — actually designed for two servings
          from the start. That means the ingredient quantities make sense. You
          won&apos;t need to buy a full bunch of cilantro when you only need a
          tablespoon. You won&apos;t end up with three-quarters of an onion
          sitting on your counter with nowhere to go.
        </p>
        <p className="text-stone-600 leading-relaxed">
          Your{" "}
          <Link
            href="/blog/meal-plan-with-grocery-list"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            weekly grocery list
          </Link>{" "}
          is scaled accordingly. It&apos;s a targeted, right-sized shopping list
          that gets you in and out of the store fast — no wandering the aisles
          wondering if you need more of something. Every item on the list has a
          purpose in that week&apos;s plan.
        </p>
      </div>

      {/* Section: Smart Leftovers */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Smart leftovers, not wasted food
      </h2>
      <div className="space-y-4">
        <p className="text-stone-600 leading-relaxed">
          Here&apos;s the thing — leftovers aren&apos;t bad. Wasting food is
          bad. The difference is intention.
        </p>
        <p className="text-stone-600 leading-relaxed">
          Our AI plans your week strategically. It might suggest roasting a
          slightly larger batch of chicken thighs on Sunday so you can shred the
          extra into Monday&apos;s chicken salad wraps. Or cooking a bigger pot
          of rice that becomes fried rice the next day. These are intentional
          leftovers — planned from the start so nothing sits in the fridge
          wondering what it did wrong.
        </p>
        <p className="text-stone-600 leading-relaxed">
          This approach is especially powerful for two-person households. You
          cook once, eat twice, and nothing goes to waste. The average American
          household throws away about $1,500 worth of food per year. For couples,
          smart repurposing can cut that number dramatically.
        </p>
      </div>

      {/* Mid-Article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-900 mb-2">
          Perfectly portioned for two — every single week
        </p>
        <p className="text-stone-500 text-sm mb-6">
          AI-generated meal plans + grocery lists, scaled to your household.
          No waste, no guessing. Just $4.99/mo.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Start your free plan &rarr;
        </Link>
      </div>

      {/* Section: Budget Benefits */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Budget benefits of planning for two
      </h2>
      <div className="space-y-4">
        <p className="text-stone-600 leading-relaxed">
          One of the biggest perks of meal planning for two is the budget
          clarity. When you know exactly what you&apos;re eating this week, you
          know exactly what you&apos;re spending.
        </p>
        <p className="text-stone-600 leading-relaxed">
          Every plan from What&apos;s For Dinner includes an estimated weekly
          grocery cost so there are no surprises at checkout. Your list is
          smaller and more targeted than a family&apos;s, which means less
          impulse buying and fewer &quot;well, I might need this&quot; additions
          to the cart.
        </p>
        <p className="text-stone-600 leading-relaxed">
          There&apos;s also the takeout factor. The number one reason couples
          order delivery isn&apos;t laziness — it&apos;s decision fatigue.
          &quot;What do you want for dinner?&quot; &quot;I don&apos;t know, what
          do you want?&quot; Sound familiar? When dinner is already decided and
          the ingredients are already in your fridge, that $40 DoorDash order
          becomes a lot less tempting. Most of our users report spending $50-80
          per week on groceries for two — a fraction of what meal kits or
          regular takeout costs.
        </p>
        <p className="text-stone-600 leading-relaxed">
          Compare that to a{" "}
          <Link
            href="/blog/hellofresh-alternative-cheap"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            meal kit service like HelloFresh
          </Link>
          , where two people easily spend $60-80 per week for just three or four
          meals. With What&apos;s For Dinner, $4.99/mo covers all seven days of
          planning — and you buy your own groceries at whatever store has the
          best prices.
        </p>
      </div>

      {/* Section: Different Diets */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Couples with different diets
      </h2>
      <div className="space-y-4">
        <p className="text-stone-600 leading-relaxed">
          This is the scenario that breaks most meal planning apps: one of you
          is vegetarian, the other isn&apos;t. Or one has a dairy allergy. Or
          one is doing low-carb while the other just wants normal food. Suddenly
          &quot;planning dinner together&quot; means planning two separate
          dinners, which defeats the entire point.
        </p>
        <p className="text-stone-600 leading-relaxed">
          What&apos;s For Dinner handles this during onboarding. You set dietary
          preferences and restrictions for your household, and the AI finds
          meals that work for both of you. That might mean a stir-fry base that
          one person tops with tofu and the other with chicken. Or a taco night
          where the protein is flexible. The key is that you&apos;re still
          eating together, at the same table, with the same meal — just with
          small adaptations that respect each person&apos;s needs.
        </p>
        <p className="text-stone-600 leading-relaxed">
          No more cooking two completely separate meals. No more one person
          compromising every night. The AI does the creative problem-solving so
          you don&apos;t have to.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-900 mb-2">
          Dinner for two, figured out
        </p>
        <p className="text-stone-500 text-sm mb-6">
          Personalized meal plans, right-sized grocery lists, and no more
          &quot;what do you want to eat?&quot; arguments. Try it free.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Get your first plan free &rarr;
        </Link>
      </div>
      </article>
    </>
  );
}
