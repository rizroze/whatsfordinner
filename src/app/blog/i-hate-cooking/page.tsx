import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";

export const metadata: Metadata = {
  title: "I Hate Cooking (But I Still Need to Eat)",
  description:
    "You don't have to love cooking. You just need to not go broke on delivery. Here's a system for people who genuinely dislike being in the kitchen.",
  openGraph: {
    title: "I Hate Cooking (But I Still Need to Eat)",
    description:
      "You don't have to love cooking. You just need to not go broke on delivery. Here's a system for people who genuinely dislike being in the kitchen.",
    siteName: "What's For Dinner",
    type: "article",
    url: "https://whatsfordinner.fit/blog/i-hate-cooking",
  },
  twitter: {
    card: "summary_large_image",
    title: "I Hate Cooking (But I Still Need to Eat)",
    description:
      "You don't have to love cooking. You just need to not go broke on delivery. Here's a system for people who genuinely dislike being in the kitchen.",
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/i-hate-cooking",
  },
};

export default function IHateCookingArticle() {
  return (
    <>
      <ArticleJsonLd
        title="I Hate Cooking (But I Still Need to Eat)"
        description="You don't have to love cooking. You just need to not go broke on delivery. Here's a system for people who genuinely dislike being in the kitchen."
        url="https://whatsfordinner.fit/blog/i-hate-cooking"
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
                name: "What should I eat if I hate cooking?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Focus on meals that require minimal or no actual cooking: toast with toppings, wraps, yogurt bowls, cheese and crackers plates, deli sandwiches (zero cooking). For slightly more effort, pasta with jar sauce, quesadillas, scrambled eggs, and frozen stir-fry with rice all take under 15 minutes. You can also use assembly meals — grain bowls, wraps, and salads with pre-cooked ingredients — where you're combining, not cooking.",
                },
              },
              {
                "@type": "Question",
                name: "How do I save money on food if I don't cook?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The average delivery app user spends $300-450/month. You can cut this dramatically by keeping easy no-cook ingredients at home (bread, deli meat, cheese, wraps, canned goods) and following a meal plan even 4 nights a week. A meal plan that costs $7.99/month can save you $200+/month by reducing delivery orders, even if you still order out 2-3 times a week.",
                },
              },
              {
                "@type": "Question",
                name: "What are the easiest meals for non-cooks?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The easiest meals require almost no skill: toast with peanut butter and banana, wraps with deli meat and cheese, yogurt bowls with granola, and cheese plates. One step up: quesadillas (cheese in a tortilla, pan, flip), scrambled eggs (5 minutes), and pasta with jarred sauce (boil water, add pasta, add sauce). Slow cooker dump meals are also great — put ingredients in, press a button, come back to food.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a meal plan for people who don't like cooking?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — AI meal planners like What's For Dinner can generate plans tailored to your skill level and time preferences. Set your cooking skill to beginner and your time preference to quick, and you'll get simple recipes that take 15-20 minutes with basic techniques. The plan comes with a grocery list so you don't have to think about shopping either. Even following the plan 4 nights a week saves $200+/month vs. delivery apps.",
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
          { name: "I Hate Cooking", url: "https://whatsfordinner.fit/blog/i-hate-cooking" },
        ]}
      />
      <article>
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        I Hate Cooking: A Meal Plan for People Who&apos;d Rather Not
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Not everyone finds cooking therapeutic. Not everyone watches cooking TikToks
          and feels inspired to make homemade pasta from scratch on a Tuesday night.
          Some people genuinely hate it &mdash; the prep, the waiting, the cleanup,
          the fact that you spend 45 minutes making something that disappears in 10.
          All of it.
        </p>
        <p>
          And that&apos;s fine. You&apos;re not broken. You don&apos;t need to &quot;learn
          to love it.&quot; Cooking is a chore for most people, just like laundry and
          cleaning the bathroom. The internet romanticizes it, but that&apos;s not
          reality for everyone.
        </p>
        <p>
          But here&apos;s the problem: you still need to eat. And{" "}
          <Link
            href="/blog/doordash-vs-cooking"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            DoorDash is draining your bank account
          </Link>
          . The average delivery app user spends $300-450 per month. That&apos;s $3,600
          to $5,400 a year on someone else making your food and a stranger driving it
          to your door.
        </p>
        <p>
          So here&apos;s the deal: you don&apos;t have to become a home chef. You just
          need a minimum viable cooking plan &mdash; the least amount of effort that
          keeps you fed, healthy-ish, and not broke.
        </p>
      </div>

      {/* It's okay to hate cooking */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        It&apos;s Okay to Hate Cooking
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Let&apos;s get this out of the way: there&apos;s nothing wrong with you.
          The cooking-as-self-care narrative is real for some people and completely
          fictional for others. Some people love doing laundry too. Most don&apos;t.
          Nobody writes think pieces about how you should learn to find joy in folding
          socks.
        </p>
        <p>
          Cooking is a life skill, not a hobby you&apos;re obligated to enjoy. You
          need to eat. You want to spend less money. You probably want to eat
          something that isn&apos;t fast food every single day. Those are practical
          goals, not lifestyle transformations.
        </p>
        <p>
          So let&apos;s approach this practically. Here are four tiers of &quot;cooking&quot;
          &mdash; and the first one barely counts.
        </p>
      </div>

      {/* The 5-minute meal tier */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The 5-Minute Meal Tier
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          These barely count as cooking. No heat required for most of them. If you can
          open a package and spread something on bread, you can do these.
        </p>
        <ul className="list-disc list-inside space-y-3 pl-1">
          <li>
            <strong>Toast with toppings.</strong> Peanut butter and banana. Avocado
            with salt and lemon. Cream cheese and everything bagel seasoning. Ricotta
            with honey. Toast is a canvas, not a snack.
          </li>
          <li>
            <strong>Wraps.</strong> Tortilla, deli meat, cheese, lettuce, mustard.
            Roll it up. You&apos;re done. This is a $9 sandwich shop wrap for $1.50
            in ingredients.
          </li>
          <li>
            <strong>Yogurt bowls.</strong> Yogurt, granola, fruit, honey. Four
            ingredients, zero cooking, genuinely good for you. This is a complete
            breakfast or lunch.
          </li>
          <li>
            <strong>Cheese plate.</strong> Cheese, crackers, some fruit, maybe deli
            meat or nuts. This is what fancy restaurants call &quot;charcuterie&quot;
            and charge $22 for. At home it&apos;s $4 and you&apos;re eating it on
            your couch. No shame.
          </li>
          <li>
            <strong>Deli sandwich.</strong> Good bread, good deli meat, good cheese,
            lettuce, tomato, mayo. This is a real meal. People eat sandwiches for
            lunch every day and nobody questions it.
          </li>
        </ul>
        <p>
          These are all real meals. If someone tells you a yogurt bowl isn&apos;t dinner,
          that person can cook their own dinner. You&apos;re fed, you spent $2, and
          you didn&apos;t open a delivery app. Win.
        </p>
      </div>

      {/* The 15-minute tier */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The 15-Minute &quot;Fine, I&apos;ll Cook&quot; Tier
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          On the nights when you can tolerate 15 minutes in the kitchen, these are your
          go-tos. Set a timer. When it beeps, you eat.
        </p>
        <ul className="list-disc list-inside space-y-3 pl-1">
          <li>
            <strong>Pasta with jar sauce.</strong> Boil water. Add pasta. Drain.
            Add sauce from a jar. That&apos;s four steps. Add parmesan if you have it.
            Total active effort: about 3 minutes of actual work, 10 minutes of waiting
            for water to boil (during which you can do literally anything else).
          </li>
          <li>
            <strong>Quesadillas.</strong> Tortilla in a pan. Cheese on half. Fold.
            Flip when brown. Cut into triangles. Add salsa. This takes 5 minutes and
            tastes like the $11 appetizer at a Mexican restaurant.
          </li>
          <li>
            <strong>Scrambled eggs.</strong> Butter in pan, crack eggs, stir. Add
            cheese, put on toast or eat alone. Five minutes, one pan, one plate. If
            this is dinner, it&apos;s dinner.
          </li>
          <li>
            <strong>Frozen stir-fry + rice.</strong> Microwave rice (those 90-second
            pouches are a miracle). Dump a bag of frozen stir-fry vegetables in a pan
            with oil and soy sauce. Combine. This looks and tastes like you cooked.
            You didn&apos;t, really. But nobody needs to know.
          </li>
          <li>
            <strong>Sheet pan whatever.</strong> Cut up any vegetable and protein, throw
            on a sheet pan with oil and salt, put in oven at 400&deg;F for 20 minutes.
            Okay this one is 20 minutes, but 18 of those minutes the oven does the work
            and you&apos;re on your phone.
          </li>
        </ul>
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Get meals planned for you automatically
        </p>
        <p className="text-stone-500 text-sm mb-5">
          What&apos;s For Dinner generates a personalized meal plan with simple recipes
          and a grocery list every week. Set it once, never think about planning again.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try Free &rarr;
        </Link>
      </div>

      {/* Set it and forget it tier */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The &quot;Set It and Forget It&quot; Tier
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          If you hate the active part of cooking &mdash; standing at the stove, stirring,
          watching, timing &mdash; these are for you. Put stuff in a machine, press a
          button, leave.
        </p>
        <ul className="list-disc list-inside space-y-3 pl-1">
          <li>
            <strong>Slow cooker dump meals.</strong> Put chicken thighs, a jar of salsa,
            and a can of black beans in a slow cooker. Set to low for 6-8 hours. Come
            home to shredded chicken tacos. You &quot;cooked&quot; for 3 minutes.
            Other combos: chicken + BBQ sauce, beef + potatoes + broth, sausage +
            peppers + onions.
          </li>
          <li>
            <strong>Rice cooker meals.</strong> Rice cookers aren&apos;t just for rice.
            Add rice, broth, diced vegetables, and protein. Press cook. Walk away.
            Come back to a one-pot meal. Some rice cookers even have slow cooker
            and steam functions.
          </li>
          <li>
            <strong>Instant pot magic.</strong> Frozen chicken breast + broth + seasoning
            = shredded chicken in 25 minutes, no thawing needed. Dried beans + water =
            cooked beans in 30 minutes, no soaking. The Instant Pot exists for people
            who want food without the process.
          </li>
        </ul>
        <p>
          The theme here: your total hands-on time is 3-5 minutes. You&apos;re not
          cooking. You&apos;re pressing buttons. Different skill set.
        </p>
      </div>

      {/* Assembly, not cooking */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Assembly, Not Cooking
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Here&apos;s a mental shift that helps: stop thinking about &quot;cooking&quot;
          and start thinking about &quot;assembling.&quot; You&apos;re not a chef.
          You&apos;re a food assembler. Big difference.
        </p>
        <ul className="list-disc list-inside space-y-3 pl-1">
          <li>
            <strong>Grain bowls.</strong> Microwave rice, add rotisserie chicken (from
            the store &mdash; $6 and already cooked), add whatever vegetables you have,
            drizzle sauce. You assembled a $14 Sweetgreen bowl for $3.
          </li>
          <li>
            <strong>Salads with pre-cooked protein.</strong> Bag of pre-washed greens,
            rotisserie chicken or canned tuna, cherry tomatoes, cheese, dressing from a
            bottle. This is assembly, not cooking. It&apos;s healthy. It takes 4 minutes.
          </li>
          <li>
            <strong>Wraps and burritos.</strong> Tortilla + whatever is in your fridge.
            Leftover rice? Goes in the wrap. Canned beans? Goes in the wrap. Random
            cheese? Goes in the wrap. Wraps are the duct tape of meals &mdash; they hold
            anything together.
          </li>
          <li>
            <strong>Snack plates.</strong> Hummus, crackers, sliced vegetables, cheese,
            deli meat, fruit. Arrange on a plate. This is a legitimate dinner in many
            European countries. It&apos;s also a legitimate dinner in your apartment.
          </li>
        </ul>
      </div>

      {/* Or just don't cook */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Or Just&hellip; Don&apos;t Cook
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Here&apos;s the truth nobody tells you: you don&apos;t have to cook every
          night. You don&apos;t even have to cook most nights. The goal isn&apos;t to
          become a home cook &mdash; it&apos;s to spend less on food while eating
          reasonably well.
        </p>
        <p>
          A realistic plan looks like this:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>2-3 nights: simple cooking (15-minute meals from above)</li>
          <li>2 nights: assembly meals (bowls, wraps, plates)</li>
          <li>1-2 nights: takeout or eating out</li>
          <li>1 night: leftovers or snack dinner</li>
        </ul>
        <p>
          That&apos;s not a &quot;meal plan.&quot; That&apos;s just real life with a
          little structure. Even this partial approach saves $200+ per month compared
          to ordering delivery every night.
        </p>
        <p>
          And here&apos;s where a meal plan actually helps people who hate cooking:
          the plan removes the <em>deciding</em>, which is the worst part. You don&apos;t
          have to browse recipes. You don&apos;t have to figure out what goes with what.
          You don&apos;t have to build a grocery list. The plan does all of that. You
          just follow it on the nights you can manage and ignore it on the nights you
          can&apos;t.
        </p>
        <p>
          What&apos;s For Dinner generates a{" "}
          <Link
            href="/blog/weekly-meal-plan"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            weekly meal plan
          </Link>{" "}
          with recipes and a grocery list, personalized to your skill level and time
          preferences. Set your cooking skill to &quot;beginner&quot; and your time
          preference to &quot;quick&quot; and you&apos;ll get the simplest possible
          meals. Follow it when you feel like it. Get takeout when you don&apos;t. The
          plan saves you money either way because it&apos;s there when you need it.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          A meal plan for people who&apos;d rather not
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Simple recipes, minimal effort, and a grocery list so you don&apos;t have to
          think. Even following it 4 nights a week saves $200+/month. First plan free.
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
            href="/blog/cooking-for-one-without-wasting-food"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Cooking for One Without Wasting Half Your Groceries
          </Link>
          <Link
            href="/blog/groceries-keep-going-bad"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Why Your Groceries Keep Going Bad (And How to Fix It)
          </Link>
          <Link
            href="/blog/how-to-stop-ordering-takeout"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            How to Stop Ordering Takeout Every Night
          </Link>
        </div>
        <p className="text-sm font-medium text-stone-400 mt-6 mb-4">
          Browse meal plans
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans/meal-plan-for-beginners" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Beginner</Link>
          <Link href="/meal-plans/budget-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Budget</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
