import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Meal Planning for College Students (Dorm + Off-Campus)",
  description:
    "The college meal plan is overpriced and the dining hall closes at 8. Here's how to actually feed yourself in college — dorm-friendly, under $40/week, no kitchen required.",
  openGraph: {
    title: "Meal Planning for College Students (Dorm + Off-Campus)",
    description:
      "The college meal plan is overpriced and the dining hall closes at 8. Here's how to actually feed yourself in college — dorm-friendly, under $40/week, no kitchen required.",
    siteName: "What's For Dinner",
    type: "article",
    url: "https://whatsfordinner.fit/blog/meal-planning-for-college",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meal Planning for College Students (Dorm + Off-Campus)",
    description:
      "The college meal plan is overpriced and the dining hall closes at 8. Here's how to actually feed yourself in college — dorm-friendly, under $40/week.",
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/meal-planning-for-college",
  },
};

export default function MealPlanningForCollegeArticle() {
  return (
    <>
      <ArticleJsonLd
        title="Meal Planning for College Students (Dorm + Off-Campus)"
        description="The college meal plan is overpriced and the dining hall closes at 8. Here's how to actually feed yourself in college — dorm-friendly, under $40/week, no kitchen required."
        url="https://whatsfordinner.fit/blog/meal-planning-for-college"
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
                name: "How do college students meal plan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "College students can meal plan by picking 5-7 simple meals for the week, making a grocery list, and shopping once. In a dorm, focus on microwave and mini-fridge meals like overnight oats, wraps, and microwave rice bowls. Off-campus students with a kitchen can batch-cook on Sunday for the whole week. AI meal planners like What's For Dinner can automate the whole process for $7.99/month.",
                },
              },
              {
                "@type": "Question",
                name: "How much should a college student spend on groceries?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A college student can eat well on $30-50 per week ($120-200 per month) by meal planning and cooking at home. This is significantly cheaper than a university meal plan ($2,000-4,000 per semester, or $500-1,000/month) and far cheaper than eating out or ordering delivery regularly.",
                },
              },
              {
                "@type": "Question",
                name: "Can you meal prep in a dorm room?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. With just a microwave and mini-fridge, you can make overnight oats, microwave rice bowls, deli sandwiches and wraps, canned soup with added protein, quesadillas (microwave or a small press), and instant ramen upgrades with eggs and frozen vegetables. No stove or oven required.",
                },
              },
              {
                "@type": "Question",
                name: "What are easy meals for college students?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The easiest college meals include: overnight oats (prep in 2 minutes), wraps with deli meat and veggies, microwave rice bowls with canned beans, pasta with jarred sauce, quesadillas, fried rice with frozen veggies and eggs, and sheet pan meals if you have an oven. Most of these cost $2-4 per serving and take under 15 minutes.",
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
          { name: "Meal Planning for College Students", url: "https://whatsfordinner.fit/blog/meal-planning-for-college" },
        ]}
      />
      <article>
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-sm text-stone-400 mb-8">Updated March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        Meal Planning for College Students: Dorm + Off-Campus Guide
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          College meal plans are one of the great scams of higher education.
          You pay $2,000 to $4,000 per semester for the privilege of eating
          the same five rotating entrees in a cafeteria that closes at 8 PM.
          That&apos;s $500 to $1,000 a month for food you&apos;d never
          voluntarily choose. And when the dining hall is closed &mdash;
          which is most of the time you&apos;re actually hungry &mdash;
          you&apos;re either ordering DoorDash or eating cereal straight out
          of the box at 11 PM.
        </p>
        <p>
          Here&apos;s the good news: you can feed yourself better, for less
          money, with about 30 minutes of planning per week. Whether
          you&apos;re in a dorm with nothing but a microwave and a mini fridge,
          or off-campus with an actual kitchen, there&apos;s a system that works.
          And no, it doesn&apos;t involve learning to cook like a chef or
          spending your entire Sunday batch-cooking for the week.
        </p>
      </div>

      {/* Dorm room meals */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Dorm Room Meals (No Kitchen Needed)
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          A microwave and a mini fridge. That&apos;s your entire kitchen. It
          sounds limiting, but you can make legitimately good meals with just
          these two appliances. Here are seven dorm-friendly meals that cost
          $2 to $4 per serving:
        </p>
        <ol className="list-decimal list-inside space-y-3 pl-1">
          <li>
            <strong>Overnight oats ($0.75/serving).</strong> Oats + milk + yogurt
            + honey in a jar. Prep the night before, grab it in the morning.
            Add banana or berries if you&apos;re feeling fancy. Takes literally
            2 minutes to prepare.
          </li>
          <li>
            <strong>Deli wraps ($2.50/serving).</strong> Tortilla + deli turkey
            or ham + cheese + lettuce + mustard. Keep ingredients in the mini
            fridge and assemble in 3 minutes. This is faster than walking to the
            dining hall.
          </li>
          <li>
            <strong>Microwave rice bowls ($3/serving).</strong> Instant rice
            (90-second microwave packs) + canned black beans + salsa + shredded
            cheese. Drain and rinse the beans, heat everything, layer it up.
            Filling, cheap, done in 5 minutes.
          </li>
          <li>
            <strong>Upgraded instant ramen ($2/serving).</strong> Cook the ramen.
            Crack an egg into it while it&apos;s hot. Add frozen peas or spinach.
            Drizzle soy sauce and sriracha. This turns a $0.30 packet into an
            actual meal. Your dining hall wishes.
          </li>
          <li>
            <strong>PB&amp;J + banana ($1.50/serving).</strong> The classic. Whole
            wheat bread + peanut butter + jam + a banana on the side. This
            isn&apos;t glamorous but it&apos;s 400+ calories, 15g of protein,
            and zero cooking required.
          </li>
          <li>
            <strong>Canned soup upgrade ($2.50/serving).</strong> Progresso or
            Amy&apos;s soup + a handful of crackers + cheese on top. Microwave
            the soup, crumble crackers in, add shredded cheese while it&apos;s
            hot. Comfort food for the price of a vending machine snack.
          </li>
          <li>
            <strong>Microwave quesadilla ($2/serving).</strong> Tortilla + cheese
            + canned chicken or beans. Fold it, microwave for 90 seconds.
            It won&apos;t be crispy, but it&apos;ll be hot, cheesy, and
            satisfying.
          </li>
        </ol>
        <p>
          Weekly grocery cost for all of this? About <strong>$25 to $35</strong>.
          Compare that to the dining hall&apos;s $125+ per week. You&apos;re
          eating better food, on your own schedule, for a fraction of the cost.
        </p>
      </div>

      {/* Off-campus with a kitchen */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Off-Campus with a Kitchen
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Once you have a stove and an oven, the game changes completely. You
          can make real meals for less than $4 per serving &mdash; meals that
          are genuinely good, not just &quot;good for a college student.&quot;
          Here are 10 staples that every student with a kitchen should know:
        </p>
        <ol className="list-decimal list-inside space-y-3 pl-1">
          <li>
            <strong>Pasta with jarred sauce ($1.50/serving).</strong> Boil pasta.
            Heat sauce. Done. Add ground beef or sausage if you want protein.
            This is the gateway drug to cooking.
          </li>
          <li>
            <strong>Stir-fry ($3/serving).</strong> Any protein + frozen stir-fry
            vegetables + soy sauce + rice. Cooks in one pan in 15 minutes. Buy
            the big bag of frozen veggies &mdash; it lasts weeks.
          </li>
          <li>
            <strong>Quesadillas ($2/serving).</strong> Now you can use a real pan.
            Tortilla + cheese + whatever&apos;s in the fridge. Crispy, golden,
            5 minutes.
          </li>
          <li>
            <strong>Fried rice ($2.50/serving).</strong> Leftover rice + eggs +
            frozen peas and carrots + soy sauce. The best way to use yesterday&apos;s
            rice. Tastes better than takeout.
          </li>
          <li>
            <strong>Sheet pan chicken and veggies ($3.50/serving).</strong> Chicken
            thighs + whatever vegetables you have + olive oil + seasoning. Put
            it all on a sheet pan, bake at 425&deg;F for 25 minutes. Zero effort,
            one pan to clean.
          </li>
          <li>
            <strong>Bean and cheese burritos ($1.50/serving).</strong> Canned
            beans + rice + cheese + salsa in a tortilla. Make 4 at once, wrap in
            foil, eat them all week. The ultimate batch meal.
          </li>
          <li>
            <strong>Scrambled eggs and toast ($1.50/serving).</strong> Not just
            for breakfast. Eggs + toast + hot sauce is a complete meal any time
            of day. Add cheese and vegetables if you have them.
          </li>
          <li>
            <strong>One-pot chili ($2.50/serving).</strong> Ground beef or turkey
            + canned beans + canned tomatoes + chili seasoning. Makes 6+ servings.
            Eat it with rice, over nachos, or straight out of the pot at midnight.
          </li>
          <li>
            <strong>Chicken Caesar wraps ($3/serving).</strong> Rotisserie chicken
            (pre-cooked, $6 for 3+ meals) + romaine + Caesar dressing + tortilla.
            No cooking at all.
          </li>
          <li>
            <strong>Ramen upgrade &mdash; stove edition ($2.50/serving).</strong>{" "}
            Real ramen broth (miso paste + water) + soft-boiled egg + green
            onions + the noodles. Takes 10 minutes and tastes like a restaurant.
          </li>
        </ol>
        <p>
          Weekly grocery cost? About <strong>$30 to $45</strong> for one person,
          covering all meals. That&apos;s $120 to $180 per month &mdash; less
          than half what most students spend on food. And you&apos;re eating
          better than 90% of your floor.
        </p>
      </div>

      {/* Broke week emergency plan */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        The Broke Week Emergency Plan
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          It&apos;s Thursday. You have $15 in your account and payday
          isn&apos;t until Friday. This happens to every college student at
          least once a semester. Here&apos;s how to eat 5 meals for $15:
        </p>
        <p>
          <strong>Buy these 5 items:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>Rice (2 lb bag) &mdash; $1.50</li>
          <li>Eggs (dozen) &mdash; $3.00</li>
          <li>Canned black beans (2 cans) &mdash; $2.00</li>
          <li>Frozen mixed vegetables (1 bag) &mdash; $2.50</li>
          <li>Hot sauce &mdash; $2.00</li>
        </ul>
        <p className="text-stone-500 text-sm">
          Total: ~$11. You even have $4 left for bread or tortillas.
        </p>
        <p>
          <strong>Your 5 meals from these ingredients:</strong>
        </p>
        <ol className="list-decimal list-inside space-y-2 pl-1">
          <li>
            <strong>Rice and beans bowl</strong> &mdash; rice + black beans +
            hot sauce. Classic for a reason.
          </li>
          <li>
            <strong>Egg fried rice</strong> &mdash; leftover rice + scrambled
            eggs + frozen veggies + soy sauce (borrow from a friend or grab a
            packet from the dining hall).
          </li>
          <li>
            <strong>Bean and egg scramble</strong> &mdash; eggs + beans +
            hot sauce. Surprisingly good.
          </li>
          <li>
            <strong>Veggie rice bowl</strong> &mdash; rice + steamed frozen
            vegetables + eggs on top.
          </li>
          <li>
            <strong>Bean and rice burrito</strong> &mdash; rice + beans + hot
            sauce in a tortilla (if you bought them with your remaining $4).
          </li>
        </ol>
        <p>
          Is this exciting? No. Will you survive with energy and dignity? Yes.
          Every college student should know how to eat for $15 in a pinch.
          It&apos;s a life skill that&apos;ll serve you well beyond
          graduation. For more ultra-budget strategies, check out our{" "}
          <Link
            href="/blog/cheap-meals-for-one"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            cheap meals for one
          </Link>{" "}
          guide.
        </p>
      </div>

      {/* Meal prepping on Sunday */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Meal Prepping on Sunday for the Week
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Sunday meal prep gets a bad rep because people think it means spending
          6 hours cooking 21 meals in matching containers. It doesn&apos;t. For
          a college student, Sunday prep looks like this:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>Cook a big pot of rice or pasta (10 min).</strong> This is
            your base for the week. Rice for stir-fries, fried rice, and bowls.
            Pasta for quick dinners.
          </li>
          <li>
            <strong>Cook a batch of protein (20 min).</strong> Bake chicken
            thighs, brown ground beef, or hard-boil a dozen eggs. This goes
            into everything.
          </li>
          <li>
            <strong>Chop vegetables (10 min).</strong> If you bought fresh
            produce, chop it now. Bell peppers, onions, broccoli &mdash; into
            containers. You won&apos;t chop on a Tuesday night, but you will
            grab pre-chopped from the fridge.
          </li>
          <li>
            <strong>Make overnight oats for the week (5 min).</strong> Five jars,
            all the same. Grab and go every morning.
          </li>
        </ul>
        <p>
          Total time: <strong>45 minutes to an hour</strong>. That&apos;s one
          episode of a show. Put something on in the background and it flies by.
          The result: you have food ready to assemble into meals all week. No
          nightly cooking sessions. No deciding what to eat while hungry. Just
          open the fridge, grab components, assemble, eat.
        </p>
        <p>
          <strong>Storage tips:</strong> Use whatever containers you have &mdash;
          actual Tupperware, takeout containers you saved, mason jars. Label
          with masking tape if you&apos;re sharing a fridge with roommates (or
          if you&apos;ll forget what&apos;s in there by Wednesday). Most prepped
          food lasts 4 to 5 days in the fridge. If you make more than that,
          freeze the extras.
        </p>
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Too busy to plan meals? Same.
        </p>
        <p className="text-stone-500 text-sm mb-5">
          What&apos;s For Dinner generates a weekly meal plan with recipes and a
          grocery list tailored to your budget. Less than one DoorDash order per
          month.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try Free &rarr;
        </Link>
      </div>

      {/* Get a student meal plan */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Get a Student Meal Plan (the Good Kind)
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Here&apos;s the irony: you&apos;re paying thousands for a
          &quot;meal plan&quot; that gives you cafeteria food on someone else&apos;s
          schedule. Meanwhile, an actual personalized meal plan that tells you
          exactly what to cook, gives you recipes, and generates a grocery list
          costs $7.99 a month.
        </p>
        <p>
          That&apos;s one DoorDash order. One and a half Starbucks drinks. For
          an entire month of planned meals.
        </p>
        <p>
          What&apos;s For Dinner generates a{" "}
          <Link
            href="/blog/weekly-meal-plan"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            weekly meal plan
          </Link>{" "}
          based on your preferences &mdash; budget, dietary restrictions, how
          much time you have, what equipment you&apos;re working with. It
          knows if you only have a microwave. It knows if you&apos;re feeding
          one person on $40 a week. The recipes are simple, the grocery list is
          organized, and a new plan shows up in your inbox every week without
          you doing anything.
        </p>
        <p>
          You&apos;re already paying for a meal plan. This one actually works
          for you. You can{" "}
          <Link
            href="/onboarding"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            try a free plan
          </Link>{" "}
          right now &mdash; no credit card, no commitment. See if it&apos;s
          better than whatever your dining hall is serving tonight.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Eat better than the dining hall
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Get a personalized meal plan with recipes and a grocery list &mdash;
          tailored to your budget and kitchen setup. First week free. $7.99/mo after.
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
            href="/blog/eating-healthy-on-a-budget"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Eating Healthy on a Budget
          </Link>
          <Link
            href="/blog/cheap-meals-for-one"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Cheap Meals for One: Eat Well on $5/Day
          </Link>
          <Link
            href="/blog/first-grocery-shopping-list"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Your First Grocery Shopping List
          </Link>
          <Link
            href="/blog/meal-planning-for-beginners"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Planning for Beginners: The Complete Guide
          </Link>
          <Link
            href="/blog/doordash-vs-cooking"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            DoorDash vs. Cooking: The Real Cost
          </Link>
          <Link
            href="/blog/food-budget-in-your-20s"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Food Budget in Your 20s
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
