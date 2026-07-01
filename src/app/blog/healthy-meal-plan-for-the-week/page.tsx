import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";
import { MealCardGrid, WeekPreviewCTA } from "@/components/blog/MealCard";

export const metadata: Metadata = {
  title: "Healthy Meal Plan for the Week: Balanced, Simple, Under 30 Minutes",
  description:
    "A complete healthy weekly meal plan with breakfast, lunch, and dinner — all under 30 minutes. Balanced macros, real food, nothing weird. Plus a grocery list and 15 meal ideas.",
  openGraph: {
    title: "Healthy Meal Plan for the Week: Balanced, Simple, Under 30 Minutes",
    description:
      "A complete healthy weekly meal plan with breakfast, lunch, and dinner — all under 30 minutes. Balanced macros, real food, nothing weird. Plus a grocery list and 15 meal ideas.",
    siteName: "What's For Dinner",
    type: "article",
    images: [{ url: `/api/og?title=Healthy%20Meal%20Plan%20for%20the%20Week%3A%20Balanced%2C%20Simple%2C%20Under%2030%20Minutes&description=A%20complete%20healthy%20weekly%20meal%20plan%20with%20breakfast%2C%20lunch%2C%20and%20dinner%20%E2%80%94%20all%20under%2030%20minutes.%20Balanced%20macros%2C%20real%20food`, width: 1200, height: 630 }],
    url: "https://whatsfordinner.fit/blog/healthy-meal-plan-for-the-week",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthy Meal Plan for the Week: Balanced, Simple, Under 30 Minutes",
    description:
      "A complete healthy weekly meal plan with breakfast, lunch, and dinner — all under 30 minutes. Balanced macros, real food, nothing weird.",
    images: ["/api/og?title=Healthy%20Meal%20Plan%20for%20the%20Week%3A%20Balanced%2C%20Simple%2C%20Under%2030%20Minutes&description=A%20complete%20healthy%20weekly%20meal%20plan%20with%20breakfast%2C%20lunch%2C%20and%20dinner%20%E2%80%94%20all%20under%2030%20minutes.%20Balanced%20macros%2C%20real%20food"],
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/healthy-meal-plan-for-the-week",
  },
};

export default function HealthyMealPlanForTheWeekArticle() {
  return (
    <>
      <ArticleJsonLd
        title="Healthy Meal Plan for the Week: Balanced, Simple, Under 30 Minutes"
        description="A complete healthy weekly meal plan with breakfast, lunch, and dinner — all under 30 minutes. Balanced macros, real food, nothing weird. Plus a grocery list and 15 meal ideas."
        url="https://whatsfordinner.fit/blog/healthy-meal-plan-for-the-week"
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
                name: "What should a healthy weekly meal plan include?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A healthy weekly meal plan should include a balance of lean proteins (chicken, fish, eggs, legumes), complex carbohydrates (whole grains, sweet potatoes, brown rice), healthy fats (olive oil, avocado, nuts), and plenty of vegetables and fruits. Aim for variety across the week so you get a range of vitamins and minerals. Each meal should keep you full for 3-4 hours without making you sluggish.",
                },
              },
              {
                "@type": "Question",
                name: "How many calories should a healthy meal plan have per day?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most adults need 1,800-2,400 calories per day depending on age, sex, and activity level. A good healthy meal plan splits this across three meals (400-600 calories each) plus 1-2 snacks (150-250 calories). The exact number matters less than consistently eating balanced meals with protein, fiber, and healthy fats at each sitting.",
                },
              },
              {
                "@type": "Question",
                name: "Can you eat healthy for $50 a week?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. A healthy weekly meal plan built around chicken thighs, eggs, rice, oats, frozen vegetables, canned beans, and seasonal produce can easily come in under $50/week for one person. The key is planning ahead so you buy only what you need, use overlapping ingredients across meals, and avoid impulse purchases. Frozen vegetables are just as nutritious as fresh and cost significantly less.",
                },
              },
              {
                "@type": "Question",
                name: "How do I start eating healthy without it feeling overwhelming?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Start with one meal at a time. Pick 3-5 healthy breakfasts you actually like and rotate them. Once that feels automatic, do the same for lunches, then dinners. Don't overhaul everything at once — that's how people burn out by Wednesday. A meal planning tool like What's For Dinner can handle the planning for you so you only need to focus on cooking.",
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
          { name: "Healthy Meal Plan for the Week", url: "https://whatsfordinner.fit/blog/healthy-meal-plan-for-the-week" },
        ]}
      />
      <article className="blog-article">
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-xs text-stone-400">Updated March 2026</p>
      <p className="text-sm text-stone-400 mb-8">March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        Healthy Meal Plan for the Week: Balanced, Simple, Under 30 Minutes
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          &ldquo;Healthy eating&rdquo; doesn&apos;t mean salads and sadness. A{" "}
          <Link href="/blog/weekly-meal-plan" className="text-orange-500 underline">healthy meal plan</Link> is
          balanced meals you actually enjoy, planned ahead so you don&apos;t default
          to takeout at 7pm. Here&apos;s a full week &mdash; every meal under 30
          minutes, nothing weird or expensive.
        </p>
        <p>
          The trick isn&apos;t willpower. It&apos;s removing the daily decision of
          &ldquo;what should I eat?&rdquo; When the answer is already written down
          and the groceries are already in your fridge, eating well becomes the path
          of least resistance.
        </p>
      </div>

      {/* TL;DR box */}
      <div className="bg-stone-50 rounded-xl p-5 my-8">
        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">TL;DR</p>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>A full week of healthy meals (breakfast, lunch, dinner) &mdash; all under 30 minutes</li>
          <li>15 meal ideas with calorie counts across breakfast, lunch, and dinner</li>
          <li>A 15-item grocery list to cover the whole week</li>
          <li>No crash diets, no weird ingredients, no sad desk salads</li>
        </ul>
      </div>

      {/* Section 1: What Makes a Meal Plan "Healthy"? */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        What Makes a Meal Plan &ldquo;Healthy&rdquo;?
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          A healthy meal plan isn&apos;t about restriction. It&apos;s about
          consistency and balance. Here&apos;s what actually matters:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>Balanced macros.</strong> Every meal has protein, complex carbs,
            and healthy fats. This keeps you full, energized, and not craving sugar
            at 3pm.
          </li>
          <li>
            <strong>Variety across the week.</strong> Chicken on Monday, salmon on
            Wednesday, beans on Friday. Different proteins, different vegetables,
            different colors on your plate. That&apos;s how you get a range of
            nutrients without thinking about it.
          </li>
          <li>
            <strong>Realistic portions.</strong> Not 200-calorie meals that leave
            you raiding the pantry an hour later. Real portions &mdash; 400&ndash;600
            calories per meal &mdash; that keep you satisfied until the next one.
          </li>
          <li>
            <strong>Meals you&apos;ll actually eat.</strong> The healthiest meal
            plan in the world is worthless if you hate every recipe and order pizza
            by Thursday. Good nutrition has to taste good, or it doesn&apos;t stick.
          </li>
        </ul>
        <p>
          This is not a crash diet. There&apos;s no calorie floor, no food groups
          to eliminate, no supplements to buy. Just real food, cooked simply,
          portioned sensibly.
        </p>
      </div>

      {/* Section 2: Your Healthy Week */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Your Healthy Week
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Here&apos;s what a balanced week looks like &mdash; every meal under{" "}
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-orange-500 underline">30 minutes</Link>,
          nothing exotic, and a grocery list that won&apos;t break the bank:
        </p>
        <WeekPreviewCTA
          days={[
            { day: "Monday", meals: [
              { mealType: "breakfast", name: "Overnight Oats with Berries", prepTime: "5 min", calories: "350 cal" },
              { mealType: "lunch", name: "Chicken & Avocado Grain Bowl", prepTime: "15 min", calories: "520 cal" },
              { mealType: "dinner", name: "Lemon Herb Salmon with Roasted Broccoli", prepTime: "25 min", calories: "480 cal" },
            ]},
            { day: "Tuesday", meals: [
              { mealType: "breakfast", name: "Greek Yogurt Parfait", prepTime: "5 min", calories: "320 cal" },
              { mealType: "lunch", name: "Turkey & Hummus Wrap", prepTime: "8 min", calories: "450 cal" },
              { mealType: "dinner", name: "Chicken Stir Fry with Brown Rice", prepTime: "20 min", calories: "510 cal" },
            ]},
            { day: "Wednesday", meals: [
              { mealType: "breakfast", name: "Spinach & Feta Egg Scramble", prepTime: "10 min", calories: "380 cal" },
              { mealType: "lunch", name: "Leftover Stir Fry Bowl", prepTime: "3 min", calories: "490 cal" },
              { mealType: "dinner", name: "Black Bean & Sweet Potato Tacos", prepTime: "25 min", calories: "460 cal" },
            ]},
            { day: "Thursday", meals: [
              { mealType: "breakfast", name: "Peanut Butter Banana Smoothie", prepTime: "5 min", calories: "380 cal" },
              { mealType: "lunch", name: "Mediterranean Chickpea Salad", prepTime: "10 min", calories: "420 cal" },
              { mealType: "dinner", name: "Grilled Chicken with Quinoa & Roasted Vegetables", prepTime: "25 min", calories: "540 cal" },
            ]},
          ]}
          groceryItems={[
            "Chicken breasts (2 lbs)", "Salmon fillets (2)", "Eggs (1 dozen)",
            "Greek yogurt (32 oz)", "Brown rice (1 bag)", "Quinoa (1 bag)",
            "Rolled oats", "Canned black beans (2)", "Canned chickpeas (1)",
            "Sweet potatoes (3)", "Broccoli (2 crowns)", "Spinach (1 bag)",
            "Avocados (3)", "Bananas (4)", "Mixed berries (frozen, 1 bag)",
          ]}
        />
      </div>

      {/* Section 3: 5 Healthy Breakfasts */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        5 Healthy Breakfasts That Take Under 10 Minutes
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Breakfast sets the tone. These are quick, high-protein, and keep you
          full until lunch &mdash; no mid-morning crash.
        </p>
        <MealCardGrid meals={[
          { name: "Overnight Oats with Berries & Chia", mealType: "breakfast", prepTime: "5 min prep (night before) · 350 cal", description: "Rolled oats, Greek yogurt, chia seeds, almond milk, frozen berries. Mix the night before, grab from the fridge in the morning. Zero cooking required.", tags: ["meal-prep", "high-fiber"] },
          { name: "Spinach & Feta Egg Scramble", mealType: "breakfast", prepTime: "10 min · 380 cal", description: "Three eggs scrambled with a handful of spinach and crumbled feta. Serve on whole wheat toast. Simple, high-protein, and genuinely delicious.", tags: ["high-protein", "quick"] },
          { name: "Greek Yogurt Parfait", mealType: "breakfast", prepTime: "5 min · 320 cal", description: "Plain Greek yogurt layered with granola, mixed berries, and a drizzle of honey. More protein than most breakfasts and tastes like dessert.", tags: ["no-cook", "high-protein"] },
          { name: "Peanut Butter Banana Smoothie", mealType: "breakfast", prepTime: "5 min · 380 cal", description: "Banana, peanut butter, Greek yogurt, splash of milk, handful of ice. Blend for 30 seconds. Filling enough to get you to lunch without snacking.", tags: ["quick", "high-protein"] },
          { name: "Avocado Toast with Egg", mealType: "breakfast", prepTime: "8 min · 420 cal", description: "Whole grain toast, half an avocado mashed with salt and lemon, topped with a fried or poached egg. The cliche exists because it works.", tags: ["high-protein", "healthy-fats"] },
        ]} />
      </div>

      {/* Section 4: 5 Healthy Lunches */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        5 Healthy Lunches You Can Make in 15 Minutes
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Lunches that are easy to pack, quick to assemble, and don&apos;t leave
          you in a food coma at your desk.
        </p>
        <MealCardGrid meals={[
          { name: "Chicken & Avocado Grain Bowl", mealType: "lunch", prepTime: "15 min · 520 cal", description: "Brown rice or quinoa, sliced grilled chicken, avocado, cherry tomatoes, cucumber, lemon-olive oil dressing. Prep the grains on Sunday and assembly takes 5 minutes.", tags: ["meal-prep", "high-protein"] },
          { name: "Mediterranean Chickpea Salad", mealType: "lunch", prepTime: "10 min · 420 cal", description: "Canned chickpeas, diced cucumber, tomatoes, red onion, feta, olive oil, lemon juice. Toss and eat. Keeps well in the fridge for 3 days.", tags: ["no-cook", "vegetarian"] },
          { name: "Turkey & Hummus Wrap", mealType: "lunch", prepTime: "8 min · 450 cal", description: "Whole wheat wrap, turkey slices, hummus, spinach, shredded carrots. Roll up tight. Protein from two sources and fiber from the wrap keeps you full.", tags: ["no-cook", "high-protein"] },
          { name: "Tuna & White Bean Salad", mealType: "lunch", prepTime: "10 min · 440 cal", description: "Canned tuna, canned white beans, arugula, olive oil, lemon, salt and pepper. High protein, healthy fats, and takes zero cooking.", tags: ["no-cook", "high-protein"] },
          { name: "Sweet Potato & Black Bean Bowl", mealType: "lunch", prepTime: "15 min · 480 cal", description: "Roasted sweet potato cubes (microwave 5 min to speed it up), black beans, corn, salsa, squeeze of lime. Filling, fiber-rich, and naturally gluten-free.", tags: ["vegetarian", "high-fiber"] },
        ]} />
      </div>

      {/* Section 5: 5 Healthy Dinners */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        5 Healthy Dinners Under 30 Minutes
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Dinner is where most people fall off. These are fast enough to beat the
          &ldquo;just order something&rdquo; impulse, and satisfying enough that
          you won&apos;t snack afterward.
        </p>
        <MealCardGrid meals={[
          { name: "Lemon Herb Salmon with Roasted Broccoli", mealType: "dinner", prepTime: "25 min · 480 cal", description: "Salmon fillet seasoned with lemon, garlic, dill. Bake at 400 F alongside broccoli florets tossed in olive oil. One pan, 25 minutes, restaurant-quality protein.", tags: ["high-protein", "omega-3"] },
          { name: "Chicken Stir Fry with Brown Rice", mealType: "dinner", prepTime: "20 min · 510 cal", description: "Sliced chicken breast, bell peppers, snap peas, broccoli, soy sauce, garlic, ginger. Serve over brown rice. The weeknight dinner that never gets old.", tags: ["high-protein", "quick"] },
          { name: "Black Bean & Sweet Potato Tacos", mealType: "dinner", prepTime: "25 min · 460 cal", description: "Roasted sweet potato cubes and seasoned black beans in corn tortillas with avocado and salsa. Plant-based protein that even meat lovers enjoy.", tags: ["vegetarian", "high-fiber"] },
          { name: "Grilled Chicken with Quinoa & Roasted Vegetables", mealType: "dinner", prepTime: "25 min · 540 cal", description: "Seasoned chicken breast, fluffy quinoa, and whatever vegetables you have &mdash; zucchini, bell peppers, onions. A balanced plate that checks every box.", tags: ["high-protein", "meal-prep"] },
          { name: "One-Pot Lentil & Vegetable Soup", mealType: "dinner", prepTime: "30 min · 390 cal", description: "Red lentils, diced tomatoes, carrots, celery, cumin, and broth. Simmers in 25 minutes, makes 4 servings. Tomorrow&apos;s lunch is already handled.", tags: ["batch-cook", "vegetarian"] },
        ]} />
      </div>

      {/* Stat callout */}
      <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-4 my-6">
        <p className="text-2xl font-bold text-stone-800">People who meal plan eat 25% more fruits and vegetables</p>
        <p className="text-sm text-stone-500 mt-1">And spend less on groceries. Planning ahead changes what ends up on your plate &mdash; and what doesn&apos;t.</p>
      </div>

      {/* Pro tip callout */}
      <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 my-6">
        <p className="text-sm font-semibold text-amber-800">Pro tip</p>
        <p className="text-sm text-amber-700 mt-1">Batch-prep your grains and proteins on Sunday. Cook a big pot of brown rice, roast a few chicken breasts, and hard-boil a dozen eggs. That&apos;s 15&ndash;20 minutes of work that cuts your weeknight cooking time in half.</p>
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Want a personalized healthy meal plan?
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Tell us your goals and dietary preferences. We&apos;ll generate a week of
          balanced meals with recipes and a grocery list &mdash; every meal under
          30 minutes.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Free Preview &rarr;
        </Link>
      </div>

      {/* Get a personalized healthy meal plan */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Get a Personalized Healthy Meal Plan Every Week
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          The hardest part of{" "}
          <Link href="/blog/meal-planning-for-beginners" className="text-orange-500 underline">eating healthy</Link>{" "}
          isn&apos;t the cooking. It&apos;s deciding what to make, checking if you
          have the ingredients, and building a grocery list that doesn&apos;t result
          in half the produce rotting by Friday. That&apos;s the planning tax &mdash;
          and it&apos;s why most people give up after a week.
        </p>
        <p>
          What&apos;s For Dinner handles all of it. Set your health goals, dietary
          preferences, and household size, and you get a personalized meal plan with
          recipes and a grocery list every week. Balanced macros, realistic portions,
          and meals that take{" "}
          <Link href="/blog/30-minute-dinners" className="text-orange-500 underline">under 30 minutes</Link>.
          No willpower required &mdash; just follow the plan.
        </p>
        <p>
          It&apos;s{" "}
          <Link
            href="/onboarding"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            $7.99/month
          </Link>{" "}
          &mdash; less than a single Chipotle bowl. If it keeps you from ordering
          takeout even twice a month, it pays for itself many times over.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Your first week is free
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Set your goals and preferences. Get a personalized healthy meal plan with
          recipes and a grocery list. $7.99/mo after your trial.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Preview Your Plan Free &rarr;
        </Link>
      </div>

      {/* Related articles + meal plans */}
      <div className="border-t border-stone-100 mt-12 pt-8">
        <p className="text-sm font-medium text-stone-400 mb-4">
          Related articles
        </p>
        <div className="space-y-3">
          <Link
            href="/blog/meal-prep-for-weight-loss"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Prep for Weight Loss: 12 Meals Under 500 Calories
          </Link>
          <Link
            href="/blog/weekly-meal-plan"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Weekly Meal Plan: How to Plan Your Entire Week in 10 Minutes
          </Link>
          <Link
            href="/blog/eating-healthy-on-a-budget"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Eating Healthy on a Budget: The $50/Week Plan (2026)
          </Link>
          <Link
            href="/blog/meal-planning-for-beginners"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Planning for Beginners: 5-Step Guide (2026)
          </Link>
          <Link
            href="/blog/30-minute-dinners"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            20 Easy 30-Minute Dinners (That Don&apos;t Taste Like Shortcuts)
          </Link>
        </div>
        <p className="text-sm font-medium text-stone-400 mt-6 mb-4">
          Browse meal plans
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/meal-plans/whole30-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Clean Eating</Link>
          <Link href="/meal-plans/mediterranean" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Mediterranean</Link>
          <Link href="/meal-plans/high-protein-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">High Protein</Link>
          <Link href="/meal-plans/meal-plan-for-weight-loss" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Weight Loss</Link>
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
