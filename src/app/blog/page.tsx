import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Meal Planning Tips, Guides & Comparisons",
  description:
    "Meal planning tips, AI-powered cooking guides, and alternatives to popular meal planning services. Learn how to eat better every week.",
  alternates: {
    canonical: "https://whatsfordinner.fit/blog",
  },
  openGraph: {
    title: "Blog — Meal Planning Tips, Guides & Comparisons",
    description:
      "Meal planning tips, AI-powered cooking guides, and alternatives to popular meal planning services.",
    siteName: "What's For Dinner",
  },
};

type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
};

type Section = {
  heading: string;
  emoji: string;
  category: string;
  posts: Post[];
};

const sections: Section[] = [
  {
    heading: "Guides",
    emoji: "📖",
    category: "Guides",
    posts: [
      {
        slug: "meal-planning-for-beginners",
        title: "Meal Planning for Beginners: The Complete Guide (2026)",
        description:
          "Everything you need to start meal planning — the 5-step method, common mistakes, and when to automate.",
        category: "Guides",
      },
      {
        slug: "how-to-start-meal-planning",
        title: "How to Start Meal Planning (Even If You've Failed Before)",
        description:
          "Meal planning keeps failing? It's not willpower — it's your system. The simple 5-day method with 10 beginner-friendly meals.",
        category: "Guides",
      },
      {
        slug: "how-to-meal-prep",
        title: "How to Meal Prep for the Week in Under 2 Hours",
        description:
          "The 2-hour Sunday method that makes meal prep actually sustainable. Step-by-step guide.",
        category: "Guides",
      },
      {
        slug: "easy-meal-prep-for-beginners",
        title: "Easy Meal Prep for Beginners (Just 1 Hour/Week)",
        description:
          "Meal prep doesn't mean eating the same sad chicken for 5 days. Here's a 1-hour Sunday system with variety, zero cooking skills needed.",
        category: "Guides",
      },
      {
        slug: "eating-healthy-on-a-budget",
        title: "Eating Healthy on a Budget: The $50/Week Plan (2026)",
        description:
          "You don't need Whole Foods money to eat well. Here's a realistic $50/week grocery plan with actual meals — not just rice and beans.",
        category: "Guides",
      },
      {
        slug: "first-grocery-shopping-list",
        title: "Your First Real Grocery List (New Apartment Starter Kit)",
        description:
          "Just moved into your first apartment? Here's the exact grocery list to start with — staples, spices, and 5 easy meals. Under $60 total.",
        category: "Guides",
      },
      {
        slug: "upgrade-your-ramen",
        title: "Upgrade Your Ramen: 10 Ways to Make Instant Noodles Actually Good",
        description:
          "Instant ramen doesn't have to be depressing. These 10 upgrades turn a $0.30 pack into a legit meal — under $2/serving.",
        category: "Guides",
      },
      {
        slug: "what-to-cook-when-you-have-nothing",
        title: "What to Cook When You Have 'Nothing' in the Fridge",
        description:
          "You have random stuff in the fridge and zero inspiration. Here are 12 actual meals you can make from whatever's left — no grocery run needed.",
        category: "Guides",
      },
      {
        slug: "cooking-for-one-without-wasting-food",
        title: "Cooking for One Without Wasting Half Your Groceries",
        description:
          "Recipes serve 4. Produce goes bad by Wednesday. Here's how to actually cook for one person without throwing money in the trash.",
        category: "Guides",
      },
      {
        slug: "save-money-groceries-meal-planning",
        title: "How to Save Money on Groceries with Meal Planning",
        description:
          "The average family wastes $1,500/year on food. Here's how meal planning cuts your grocery bill.",
        category: "Guides",
      },
      {
        slug: "ai-meal-planner",
        title: "AI Meal Planner: How It Works and Why It's Better",
        description:
          "How AI meal planners create personalized weekly plans and why they're replacing traditional apps.",
        category: "Guides",
      },
      {
        slug: "meal-plan-with-grocery-list",
        title: "Meal Plan with Grocery List: The Complete Solution",
        description:
          "Why a consolidated grocery list is the secret to actually following through on your meal plan.",
        category: "Guides",
      },
      {
        slug: "5-ingredient-meals",
        title: "15 Easy 5-Ingredient Dinners (Under 30 Minutes)",
        description:
          "Simple 5-ingredient dinners using pantry staples, fresh basics, and no-cook assembly meals — all under 30 minutes and $4/serving.",
        category: "Guides",
      },
      {
        slug: "dinner-ideas-tonight",
        title: "What Should I Make for Dinner? 20 Ideas Based on What You Have",
        description:
          "It's 6pm and you're hungry. 20 dinner ideas organized by what's in your fridge — chicken, pasta, eggs, ground beef, or literally nothing. All under 25 minutes.",
        category: "Guides",
      },
      {
        slug: "healthy-meal-plan-for-the-week",
        title: "Healthy Meal Plan for the Week: Balanced, Simple, Under 30 Minutes",
        description:
          "A complete healthy weekly meal plan with breakfast, lunch, and dinner — all under 30 minutes. Balanced macros, real food, nothing weird.",
        category: "Guides",
      },
    ],
  },
  {
    heading: "Alternatives",
    emoji: "🔄",
    category: "Alternatives",
    posts: [
      {
        slug: "platejoy-alternative",
        title: "The Best PlateJoy Alternative in 2026",
        description:
          "PlateJoy shut down in July 2025. Here's the best replacement for personalized meal plans with grocery lists.",
        category: "Alternatives",
      },
      {
        slug: "yummly-alternative",
        title: "The Best Yummly Alternative in 2026",
        description:
          "Yummly closed in December 2024. Here's where to get AI-powered meal planning now.",
        category: "Alternatives",
      },
      {
        slug: "hellofresh-alternative-cheap",
        title: "The Best Cheap Alternative to HelloFresh",
        description:
          "Same convenience, 90% less cost. Why you don't need a meal kit to eat well every week.",
        category: "Alternatives",
      },
      {
        slug: "eat-this-much-alternative",
        title: "The Best Eat This Much Alternative in 2026",
        description:
          "Eat This Much generates meals by macros, but the recipes feel robotic. Here's a smarter AI meal planner.",
        category: "Alternatives",
      },
      {
        slug: "mealime-alternative",
        title: "The Best Mealime Alternative in 2026",
        description:
          "Mealime's free tier is limited and recipes get repetitive. Here's a better AI-powered option.",
        category: "Alternatives",
      },
      {
        slug: "emeals-alternative",
        title: "The Best eMeals Alternative in 2026",
        description:
          "eMeals plans feel generic and never adapt. Here's a meal planner that learns what you like.",
        category: "Alternatives",
      },
      {
        slug: "plan-to-eat-alternative",
        title: "The Best Plan to Eat Alternative in 2026",
        description:
          "Plan to Eat makes you find your own recipes. Here's a meal planner that does the work for you.",
        category: "Alternatives",
      },
      {
        slug: "prepear-alternative",
        title: "The Best Prepear Alternative in 2026",
        description:
          "Prepear relies on blogger recipes with inconsistent quality. Here's a more reliable alternative.",
        category: "Alternatives",
      },
      {
        slug: "paprika-alternative",
        title: "The Best Paprika Alternative in 2026",
        description:
          "Paprika organizes recipes but doesn't plan meals for you. Here's an AI planner that does both.",
        category: "Alternatives",
      },
      {
        slug: "budget-bytes-alternative",
        title: "The Best Budget Bytes Alternative in 2026",
        description:
          "Budget Bytes has great recipes but no meal planning. Here's budget-friendly planning on autopilot.",
        category: "Alternatives",
      },
      {
        slug: "cooklist-alternative",
        title: "The Best Cooklist Alternative in 2026",
        description:
          "Cooklist tracks your pantry but doesn't plan meals. Here's an AI planner that handles everything.",
        category: "Alternatives",
      },
      {
        slug: "factor-alternative",
        title: "Best Factor Alternative 2026 (Save $200+/Month)",
        description:
          "Factor charges $11-13 per meal for pre-made food. Cook better meals for 95% less with AI meal planning.",
        category: "Alternatives",
      },
      {
        slug: "home-chef-alternative",
        title: "Best Home Chef Alternative: Same Recipes, 90% Cheaper",
        description:
          "Home Chef charges $8-10 per serving for bagged ingredients. Same recipes, 90% cheaper with a meal planning app.",
        category: "Alternatives",
      },
      {
        slug: "everyplate-alternative",
        title: "EveryPlate Alternative: Even Cheaper Meal Planning",
        description:
          "EveryPlate is the cheapest meal kit at $5/serving — but that's still 10x more than AI meal planning.",
        category: "Alternatives",
      },
      {
        slug: "dinnerly-alternative",
        title: "Dinnerly Alternative: Simple Meals Without the Box",
        description:
          "Dinnerly's simple recipes at $5-7/serving. Same simplicity, fraction of the cost with a meal planning app.",
        category: "Alternatives",
      },
      {
        slug: "hungryroot-alternative",
        title: "Hungryroot Alternative: AI Meal Planning Without the Markup",
        description:
          "Hungryroot's AI grocery curation at $8-12/serving. Get AI meal planning without the inflated grocery prices.",
        category: "Alternatives",
      },
    ],
  },
  {
    heading: "Gen Z & Young Adults",
    emoji: "⚡",
    category: "Gen Z & Young Adults",
    posts: [
      {
        slug: "meal-planning-in-your-20s",
        title: "Meal Planning in Your 20s: Stop Spending $300/Month on DoorDash",
        description:
          "You're spending $200-400/month on delivery apps. Here's how to meal plan your way out — even if you can't cook.",
        category: "Gen Z & Young Adults",
      },
      {
        slug: "cheap-meals-for-one",
        title: "Cheap Meals for One: 15 Dinners Under $3/Serving",
        description:
          "Eating alone doesn't mean eating sad. 15 cheap dinner ideas under $3/serving that take under 30 minutes.",
        category: "Gen Z & Young Adults",
      },
      {
        slug: "how-to-stop-ordering-takeout",
        title: "How to Stop Ordering Takeout Every Night (2026)",
        description:
          "You said you'd stop ordering DoorDash. Again. Here's the system that actually works — saves $200+/month.",
        category: "Gen Z & Young Adults",
      },
      {
        slug: "eating-well-when-youre-struggling",
        title: "How to Eat Well When You're Going Through It",
        description:
          "When everything feels hard, cooking is the first thing to go. Low-effort meals that take care of you when you can't take care of yourself. No judgment.",
        category: "Gen Z & Young Adults",
      },
      {
        slug: "adhd-meal-planning",
        title: "ADHD Meal Planning: A System That Actually Works",
        description:
          "Traditional meal planning is an executive function nightmare. An ADHD-friendly system with low-decision meals, flexible structure, and zero guilt.",
        category: "Gen Z & Young Adults",
      },
      {
        slug: "meal-planning-for-college",
        title: "Meal Planning for College Students (Dorm + Off-Campus)",
        description:
          "The college meal plan is overpriced and the dining hall closes at 8. Here's how to actually feed yourself in college — under $40/week.",
        category: "Gen Z & Young Adults",
      },
      {
        slug: "food-budget-in-your-20s",
        title: "How to Set a Food Budget in Your 20s (And Actually Stick to It)",
        description:
          "Food is probably your biggest budget leak. Here's how to set a realistic food budget and the one habit that makes it stick.",
        category: "Gen Z & Young Adults",
      },
      {
        slug: "doordash-vs-cooking",
        title: "DoorDash vs. Cooking at Home: The Real Cost (2026)",
        description:
          "DoorDash averages $25/order with fees. Cooking the same meal costs $3-5. Here's the real math on delivery apps vs. cooking.",
        category: "Gen Z & Young Adults",
      },
      {
        slug: "i-hate-cooking",
        title: "I Hate Cooking (But I Still Need to Eat)",
        description:
          "You don't have to love cooking. You just need to not go broke on delivery. Here's a system for people who genuinely dislike being in the kitchen.",
        category: "Gen Z & Young Adults",
      },
      {
        slug: "groceries-keep-going-bad",
        title: "Why Your Groceries Keep Going Bad (And How to Fix It)",
        description:
          "You buy fresh food with good intentions. By Thursday it's brown. Here's why it happens and the simple system that stops the cycle.",
        category: "Gen Z & Young Adults",
      },
      {
        slug: "meal-planning-after-moving-out",
        title: "Meal Planning After Moving Out: The Adulting Guide Nobody Gave You",
        description:
          "You moved out. Nobody taught you how to feed yourself. Here's everything you need to know about groceries, cooking, and not living on takeout — from scratch.",
        category: "Gen Z & Young Adults",
      },
      {
        slug: "cooking-for-your-partner",
        title: "Cooking for Your Partner: 10 Impressive Meals Anyone Can Make",
        description:
          "Want to cook for your boyfriend or girlfriend but don't know how? These 10 meals look impressive but are secretly easy. Date night dinner for under $15.",
        category: "Gen Z & Young Adults",
      },
      {
        slug: "splitting-groceries-with-roommates",
        title: "How to Split Groceries with Roommates (Without Drama)",
        description:
          "Shared fridges, stolen food, and passive-aggressive labels. Here's how to actually split groceries with roommates — 3 systems that work and 2 that don't.",
        category: "Gen Z & Young Adults",
      },
    ],
  },
  {
    heading: "VS Comparisons",
    emoji: "⚖️",
    category: "VS Comparisons",
    posts: [
      {
        slug: "meal-kits-vs-meal-planning",
        title: "Meal Kits vs. Meal Planning Apps: Which Saves More? (2026)",
        description:
          "Meal kits cost $9-12/serving. Meal planning apps cost $8/month. We compared convenience, cost, customization, and food quality side by side.",
        category: "VS Comparisons",
      },
      {
        slug: "ai-vs-traditional-meal-planning",
        title: "AI Meal Planning vs. Traditional: Which Is Better? (2026)",
        description:
          "AI meal planners generate personalized plans from scratch. Traditional apps shuffle a recipe database. Here's why AI is winning.",
        category: "VS Comparisons",
      },
      {
        slug: "meal-planning-vs-doordash",
        title: "Meal Planning vs. DoorDash: Save $400/Month (2026)",
        description:
          "The average DoorDash user spends $450/month on delivery. Meal planning costs $50-100/week for all meals. Here's the cost breakdown.",
        category: "VS Comparisons",
      },
      {
        slug: "meal-planning-vs-meal-prep",
        title: "Meal Planning vs. Meal Prep: What's the Difference?",
        description:
          "Meal planning is deciding what to eat. Meal prep is cooking it in advance. You need both — but you can skip the prep.",
        category: "VS Comparisons",
      },
      {
        slug: "best-meal-kit-alternatives",
        title: "5 Cheap Alternatives to Meal Kits in 2026 (Under $2/Serving)",
        description:
          "Meal kits cost $8-12 per serving. These 5 alternatives give you planned meals with grocery lists for under $2/serving.",
        category: "VS Comparisons",
      },
      {
        slug: "best-meal-delivery-alternatives",
        title: "7 Best Meal Delivery Alternatives in 2026 (Cheaper Options)",
        description:
          "Meal delivery services cost $200-400/month. These 7 alternatives give you the same convenience for a fraction of the price.",
        category: "VS Comparisons",
      },
    ],
  },
  {
    heading: "Budget & Meal Prep",
    emoji: "💰",
    category: "Budget & Meal Prep",
    posts: [
      {
        slug: "best-budget-meal-plans",
        title: "5 Best Budget Meal Plans in 2026 (Under $75/Week)",
        description:
          "Eating well on a budget isn't about deprivation — it's about planning. These 5 options keep groceries under $75/week for two.",
        category: "Budget & Meal Prep",
      },
      {
        slug: "best-grocery-list-apps",
        title: "5 Best Grocery List Apps in 2026 (That Actually Help)",
        description:
          "Most grocery list apps are just note apps with a food skin. These 5 actually consolidate ingredients and save you time.",
        category: "Budget & Meal Prep",
      },
      {
        slug: "best-meal-planning-apps",
        title: "10 Best Meal Planning Apps in 2026 (Compared)",
        description:
          "We compared every major meal planning app. Here's which ones are worth it and which ones to skip.",
        category: "Budget & Meal Prep",
      },
      {
        slug: "weekly-meal-plan",
        title: "Weekly Meal Plan: How to Plan Your Entire Week in 10 Minutes",
        description:
          "Stop deciding what to eat every night. A complete weekly meal plan with recipes and a grocery list — planned in 10 minutes or generated automatically by AI.",
        category: "Budget & Meal Prep",
      },
      {
        slug: "30-minute-dinners",
        title: "20 Easy 30-Minute Dinners (That Don't Taste Like Shortcuts)",
        description:
          "Real flavor, real ingredients, legitimately done in half an hour. One-pan meals, pastas, sheet pan dinners, and stir-fries.",
        category: "Budget & Meal Prep",
      },
      {
        slug: "meal-prep-for-weight-loss",
        title: "Meal Prep for Weight Loss: 12 Meals Under 500 Calories",
        description:
          "The problem isn't willpower — it's 6pm with no plan. 12 calorie-controlled meals plus a Sunday prep system that takes 2 hours.",
        category: "Budget & Meal Prep",
      },
      {
        slug: "high-protein-meals-on-a-budget",
        title: "High-Protein Meals on a Budget: 15 Dinners Under $4",
        description:
          "You don't need $15 salmon fillets to hit 30g+ protein. 15 budget meals averaging $3/serving and 30g+ protein each.",
        category: "Budget & Meal Prep",
      },
      {
        slug: "grocery-list-template",
        title: "The Only Grocery List Template You Need (+ Free Generator)",
        description:
          "Most grocery lists are random. This one is organized by store section and matched to actual meals — plus a tool that generates it automatically.",
        category: "Budget & Meal Prep",
      },
    ],
  },
  {
    heading: "For Families & Couples",
    emoji: "👨‍👩‍👧",
    category: "For Families & Couples",
    posts: [
      {
        slug: "meal-planning-for-families",
        title: "Meal Planning for Families: Feed a Family of 4 for Under $100/Week",
        description:
          "Balanced meals kids will eat, a single grocery trip, and dinner on the table in 30 minutes. The practical guide to family meal planning.",
        category: "For Families & Couples",
      },
      {
        slug: "meal-planning-for-two",
        title: "Meal Planning for Two: No More Waste",
        description:
          "Perfectly portioned plans for couples and roommates. No more throwing away half the groceries.",
        category: "For Families & Couples",
      },
    ],
  },
];

const CATEGORY_EMOJI: Record<string, string> = {
  Guides: "📖",
  Alternatives: "🔄",
  "Gen Z & Young Adults": "⚡",
  "VS Comparisons": "⚖️",
  "Budget & Meal Prep": "💰",
  "For Families & Couples": "👨‍👩‍👧",
};

function PostCard({ post }: { post: Post }) {
  const emoji = CATEGORY_EMOJI[post.category];
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="bg-white rounded-xl border border-stone-100 hover:border-orange-200 hover:shadow-sm transition-all duration-200 p-5 flex flex-col gap-2"
    >
      <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">
        {emoji && <span className="mr-0.5 not-italic">{emoji}</span>}
        {post.category}
      </span>
      <h3 className="text-[15px] font-semibold text-stone-900 leading-snug">{post.title}</h3>
      <p className="text-sm text-stone-500 flex-1 leading-relaxed">{post.description}</p>
    </Link>
  );
}

const FEATURED_ARTICLES = [
  {
    slug: "best-meal-planning-apps",
    title: "10 Best Meal Planning Apps in 2026 (Compared)",
    description: "We compared every major meal planning app. Here's which ones are worth it and which ones to skip.",
    tag: "Popular",
  },
  {
    slug: "yummly-alternative",
    title: "The Best Yummly Alternative in 2026",
    description: "Yummly closed in December 2024. Here's where to get AI-powered meal planning now.",
    tag: "Trending",
  },
  {
    slug: "meal-plan-with-grocery-list",
    title: "Meal Plan with Grocery List: The Complete Solution",
    description: "Why a consolidated grocery list is the secret to actually following through on your meal plan.",
    tag: "Popular",
  },
  {
    slug: "eating-healthy-on-a-budget",
    title: "Eating Healthy on a Budget: The $50/Week Plan (2026)",
    description: "You don't need Whole Foods money to eat well. A realistic $50/week grocery plan with actual meals.",
    tag: "Popular",
  },
];

export default function BlogIndex() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-stone-900 mb-2 mt-8">Blog</h1>
      <p className="text-stone-500 mb-10">
        Tips, guides, and comparisons to help you eat better every week.
      </p>

      {/* Most Popular */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-stone-800 mb-5">Most Popular</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {FEATURED_ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="bg-orange-50 rounded-xl border border-orange-200 hover:border-orange-300 hover:shadow-sm transition-all duration-200 p-5 flex flex-col gap-2"
            >
              <span className="text-[10px] font-semibold text-orange-600 uppercase tracking-wider">
                {article.tag}
              </span>
              <h3 className="text-[15px] font-semibold text-stone-900 leading-snug">{article.title}</h3>
              <p className="text-sm text-stone-500 flex-1 leading-relaxed">{article.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.heading} className="mb-14">
          <h2 className="text-xl font-bold text-stone-800 mb-5">
            {section.heading}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {section.posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      ))}

      {/* Browse Meal Plans CTA */}
      <div className="mt-12 rounded-2xl border border-orange-200 bg-orange-50 p-8 text-center">
        <h2 className="text-xl font-bold text-stone-900 mb-2">
          Browse Meal Plans by Diet &amp; Cuisine
        </h2>
        <p className="text-sm text-stone-500 mb-5 max-w-md mx-auto">
          Explore personalized meal plans for keto, vegan, halal, Italian, Thai, and 30+ more combinations.
        </p>
        <Link
          href="/meal-plans"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm transition-colors"
        >
          Browse All Meal Plans &rarr;
        </Link>
      </div>
    </div>
  );
}
