const BASE = "https://whatsfordinner.fit";

const blogPosts: { slug: string; title: string; description: string; date: string }[] = [
  { slug: "weekly-meal-plan", title: "Weekly Meal Plan: How to Plan Your Entire Week in 10 Minutes", description: "Stop deciding what to eat every night. Get a complete weekly meal plan with recipes and grocery list — planned in 10 minutes or generated automatically by AI. Free to try.", date: "2026-03-13" },
  { slug: "best-meal-kit-alternatives", title: "5 Cheap Alternatives to Meal Kits in 2026 (Under $2/Serving)", description: "Meal kits cost $8-12 per serving. These 5 alternatives give you planned meals with grocery lists for under $2/serving. Compare HelloFresh, Blue Apron, and cheaper options.", date: "2026-03-13" },
  { slug: "meal-planning-for-families", title: "Meal Planning for Families: Feed a Family of 4 for Under $100/Week", description: "A practical guide to family meal planning that actually works. Balanced meals kids will eat, a single grocery trip, and dinner on the table in 30 minutes. Free weekly plan included.", date: "2026-03-13" },
  { slug: "meal-planning-in-your-20s", title: "Meal Planning in Your 20s: Stop Spending $300/Month on DoorDash", description: "You're spending $200-400/month on delivery apps. Here's how to meal plan your way out — even if you can't cook. Simple system, $50-75/week groceries, zero cooking skills needed.", date: "2026-03-13" },
  { slug: "cheap-meals-for-one", title: "Cheap Meals for One: 15 Dinners Under $3/Serving", description: "Eating alone doesn't mean eating sad. These 15 cheap dinner ideas cost under $3/serving, take under 30 minutes, and actually taste good. Plus a free weekly meal plan.", date: "2026-03-13" },
  { slug: "how-to-stop-ordering-takeout", title: "How to Stop Ordering Takeout Every Night (2026)", description: "You said you'd stop ordering DoorDash. Again. Here's the system that actually works — meal planning that takes 10 minutes and saves $200+/month.", date: "2026-03-13" },
  { slug: "factor-alternative", title: "Best Factor Alternative 2026 (Save $200+/Month)", description: "Factor charges $11-13 per meal for pre-made food. What's For Dinner gives you personalized weekly meal plans with recipes and a grocery list for $7.99/mo — cook better meals for 95% less.", date: "2026-03-13" },
  { slug: "home-chef-alternative", title: "Best Home Chef Alternative 2026", description: "Home Chef charges $8-10 per serving for ingredients in a box. What's For Dinner gives you personalized weekly meal plans with recipes and a grocery list for $7.99/mo — same recipes, 90% cheaper.", date: "2026-03-13" },
  { slug: "everyplate-alternative", title: "Best EveryPlate Alternative 2026", description: "EveryPlate is the cheapest meal kit at $5/serving — but that's still 10x more than meal planning. What's For Dinner gives you personalized weekly meal plans with recipes and a grocery list for $7.99/mo.", date: "2026-03-13" },
  { slug: "dinnerly-alternative", title: "Best Dinnerly Alternative 2026", description: "Dinnerly charges $5-7 per serving for simple meal kits. What's For Dinner gives you personalized weekly meal plans with recipes and a grocery list for $7.99/mo — same simplicity, fraction of the cost.", date: "2026-03-13" },
  { slug: "hungryroot-alternative", title: "Best Hungryroot Alternative 2026", description: "Hungryroot charges $8-12 per serving for AI-curated groceries. What's For Dinner gives you AI meal planning with recipes and a grocery list for $7.99/mo — without the inflated grocery markup.", date: "2026-03-13" },
  { slug: "eating-well-when-youre-struggling", title: "How to Eat Well When You're Going Through It", description: "When everything feels hard, cooking is the first thing to go. Here are low-effort meals that take care of you when you can't take care of yourself. No judgment.", date: "2026-03-13" },
  { slug: "adhd-meal-planning", title: "ADHD Meal Planning: A System That Actually Works", description: "Traditional meal planning is an executive function nightmare. Here's an ADHD-friendly system with low-decision meals, flexible structure, and zero guilt when plans change.", date: "2026-03-13" },
  { slug: "eating-healthy-on-a-budget", title: "Eating Healthy on a Budget: The $50/Week Plan (2026)", description: "You don't need Whole Foods money to eat well. Here's a realistic $50/week grocery plan with actual meals — not just rice and beans. Free meal plan included.", date: "2026-03-13" },
  { slug: "easy-meal-prep-for-beginners", title: "Easy Meal Prep for Beginners (Just 1 Hour/Week)", description: "Meal prep doesn't mean eating the same sad chicken for 5 days. Here's a 1-hour Sunday system with variety, zero cooking skills needed. Free plan included.", date: "2026-03-13" },
  { slug: "upgrade-your-ramen", title: "Upgrade Your Ramen: 10 Ways to Make Instant Noodles Actually Good", description: "Instant ramen doesn't have to be depressing. These 10 upgrades turn a $0.30 pack into a legit meal — egg drop, peanut butter, chili oil, and more. Under $2/serving.", date: "2026-03-13" },
  { slug: "first-grocery-shopping-list", title: "Your First Real Grocery List (New Apartment Starter Kit)", description: "Just moved into your first apartment? Here's the exact grocery list to start with — staples, spices, and 5 easy meals you can make this week. Under $60 total.", date: "2026-03-13" },
  { slug: "doordash-vs-cooking", title: "DoorDash vs. Cooking at Home: The Real Cost (2026)", description: "DoorDash averages $25/order with fees. Cooking the same meal costs $3-5. Here's the real math on delivery apps vs. cooking — and how to actually make the switch.", date: "2026-03-13" },
  { slug: "meal-planning-for-college", title: "Meal Planning for College Students (Dorm + Off-Campus)", description: "The college meal plan is overpriced and the dining hall closes at 8. Here's how to actually feed yourself in college — dorm-friendly, under $40/week, no kitchen required.", date: "2026-03-13" },
  { slug: "food-budget-in-your-20s", title: "How to Set a Food Budget in Your 20s (And Actually Stick to It)", description: "Food is probably your biggest budget leak. Here's how to set a realistic food budget, what you should actually spend, and the one habit that makes it stick.", date: "2026-03-13" },
  { slug: "best-meal-delivery-alternatives", title: "7 Best Meal Delivery Alternatives in 2026 (Cheaper Options)", description: "Meal delivery services cost $200-400/month. These 7 alternatives give you the same convenience for a fraction of the price. Tested and ranked.", date: "2026-03-13" },
  { slug: "best-grocery-list-apps", title: "5 Best Grocery List Apps in 2026 (That Actually Help)", description: "Most grocery list apps are just note apps with a food skin. These 5 actually consolidate ingredients, organize by aisle, and save you time at the store.", date: "2026-03-13" },
  { slug: "best-budget-meal-plans", title: "5 Best Budget Meal Plans in 2026 (Under $75/Week)", description: "Eating well on a budget isn't about deprivation — it's about planning. These 5 budget meal plan options keep groceries under $75/week for two people.", date: "2026-03-13" },
  { slug: "what-to-cook-when-you-have-nothing", title: "What to Cook When You Have 'Nothing' in the Fridge", description: "You have random stuff in the fridge and zero inspiration. Here are 12 actual meals you can make from whatever's left — no grocery run needed.", date: "2026-03-13" },
  { slug: "cooking-for-one-without-wasting-food", title: "Cooking for One Without Wasting Half Your Groceries", description: "Recipes serve 4. Produce goes bad by Wednesday. Here's how to actually cook for one person without throwing money in the trash.", date: "2026-03-13" },
  { slug: "i-hate-cooking", title: "I Hate Cooking (But I Still Need to Eat)", description: "You don't have to love cooking. You just need to not go broke on delivery. Here's a system for people who genuinely dislike being in the kitchen.", date: "2026-03-13" },
  { slug: "groceries-keep-going-bad", title: "Why Your Groceries Keep Going Bad (And How to Fix It)", description: "You buy fresh food with good intentions. By Thursday it's brown. Here's why it happens and the simple system that stops the cycle — from someone who's been there.", date: "2026-03-13" },
  { slug: "cooking-for-your-partner", title: "Cooking for Your Partner: 10 Impressive Meals Anyone Can Make", description: "Want to cook for your boyfriend or girlfriend but don't know how? These 10 meals look impressive but are secretly easy. Date night dinner for under $15.", date: "2026-03-13" },
  { slug: "splitting-groceries-with-roommates", title: "How to Split Groceries with Roommates (Without Drama)", description: "Shared fridges, stolen food, and passive-aggressive labels. Here's how to actually split groceries with roommates — 3 systems that work and 2 that don't.", date: "2026-03-13" },
  { slug: "meal-planning-after-moving-out", title: "Meal Planning After Moving Out: The Adulting Guide Nobody Gave You", description: "You moved out. Nobody taught you how to feed yourself. Here's everything you need to know about groceries, cooking, and not living on takeout — from scratch.", date: "2026-03-13" },
  { slug: "meal-kits-vs-meal-planning", title: "Meal Kits vs. Meal Planning Apps: Which Saves More? (2026)", description: "Meal kits cost $9-12/serving. Meal planning apps cost $8/month. We compared convenience, cost, customization, and food quality side by side.", date: "2026-03-13" },
  { slug: "ai-vs-traditional-meal-planning", title: "AI Meal Planning vs. Traditional: Which Is Better? (2026)", description: "AI meal planners generate personalized plans from scratch. Traditional apps shuffle a recipe database. Here's why AI is winning — and where it still falls short.", date: "2026-03-13" },
  { slug: "meal-planning-vs-doordash", title: "Meal Planning vs. DoorDash: Save $400/Month (2026)", description: "The average DoorDash user spends $450/month on delivery. Meal planning costs $50-100/week for all meals. Here's the complete cost breakdown and how to switch.", date: "2026-03-13" },
  { slug: "meal-planning-vs-meal-prep", title: "Meal Planning vs. Meal Prep: What's the Difference?", description: "Meal planning is deciding what to eat. Meal prep is cooking it in advance. You need both — but you can skip the prep. Here's how each one works and which to start with.", date: "2026-03-13" },
  { slug: "eat-this-much-alternative", title: "Eat This Much Alternative (2026)", description: "Looking for an Eat This Much alternative? What's For Dinner uses AI to generate original meal plans that never repeat, with grocery lists by email for $7.99/mo — better variety, more personalization.", date: "2026-03-07" },
  { slug: "mealime-alternative", title: "Best Mealime Alternative 2026 | AI Meal Plans", description: "Looking for a Mealime alternative? What's For Dinner uses AI to generate unique personalized meal plans every week — no static recipe database, no repetition. $7.99/mo with a free trial, no signup required.", date: "2026-03-07" },
  { slug: "emeals-alternative", title: "Best eMeals Alternative 2026 | AI Meal Plans", description: "Looking for an eMeals alternative? What's For Dinner uses AI to generate unique, personalized meal plans every week for $7.99/mo — smarter recipes, real customization, and plans that adapt to your feedback.", date: "2026-03-07" },
  { slug: "plan-to-eat-alternative", title: "Best Plan to Eat Alternative 2026 | AI Plans", description: "Looking for a Plan to Eat alternative? What's For Dinner uses AI to generate personalized meal plans and grocery lists for you — no recipe importing, no manual planning. $7.99/mo.", date: "2026-03-07" },
  { slug: "prepear-alternative", title: "Best Prepear Alternative 2026 | AI Meal Plans", description: "Looking for a Prepear alternative? What's For Dinner uses AI to generate personalized meal plans tailored to your diet, allergies, and budget — $7.99/mo with a free trial, no signup required.", date: "2026-03-07" },
  { slug: "paprika-alternative", title: "Best Paprika Alternative 2026 | AI Meal Plans", description: "Looking for a Paprika alternative that actually plans your meals? What's For Dinner uses AI to generate personalized weekly meal plans with grocery lists for $7.99/mo — no recipe hunting required.", date: "2026-03-07" },
  { slug: "budget-bytes-alternative", title: "Best Budget Bytes Alternative 2026 | AI Plans", description: "Looking for a Budget Bytes alternative with automated meal planning? What's For Dinner generates personalized AI meal plans with grocery lists for $7.99/mo — no browsing, no guesswork.", date: "2026-03-07" },
  { slug: "cooklist-alternative", title: "Best Cooklist Alternative 2026 | AI Meal Plans", description: "Looking for a Cooklist alternative focused on meal planning? What's For Dinner delivers AI-powered personalized meal plans and grocery lists by email for $7.99/mo — no barcode scanning required.", date: "2026-03-07" },
  { slug: "best-meal-planning-apps", title: "10 Best Meal Planning Apps in 2026 (Tested & Ranked)", description: "We tested every meal planning app still active in 2026. See which AI planners, recipe organizers, and meal kits are actually worth paying for — and which ones fell behind.", date: "2026-03-07" },
  { slug: "meal-planning-for-beginners", title: "Meal Planning for Beginners: 5-Step Guide (2026)", description: "Start meal planning this week with a simple 5-step method. Save 2.5 hours and $50-100 per week — no cooking skills required. Free printable plan included.", date: "2026-03-07" },
  { slug: "how-to-meal-prep", title: "How to Meal Prep (2026 Guide)", description: "Learn a simple 2-hour Sunday meal prep routine that saves time, cuts grocery costs, and eliminates weeknight stress. Step-by-step guide with storage tips and a sample prep session.", date: "2026-03-07" },
  { slug: "save-money-groceries-meal-planning", title: "Save Money on Groceries", description: "The average family wastes $1,500/year on food. Learn 5 budget meal planning rules, savings by household size, and how an AI meal planner cuts grocery bills automatically.", date: "2026-03-07" },
  { slug: "meal-planning-for-two", title: "Meal Planning for Two | Plans for Couples", description: "Meal planning for two doesn't have to mean food waste or boring leftovers. Get AI-generated, perfectly portioned weekly meal plans and grocery lists for couples and roommates — just $7.99/mo.", date: "2026-02-25" },
  { slug: "hellofresh-alternative-cheap", title: "Cheap HelloFresh Alternative (2026)", description: "Looking for a HelloFresh alternative cheap enough for any budget? What's For Dinner gives you personalized weekly meal plans + grocery lists for $7.99/mo — no meal kit markup.", date: "2026-02-25" },
  { slug: "ai-meal-planner", title: "AI Meal Planner: How It Works", description: "Discover how an AI meal planner builds personalized weekly meal plans with grocery lists based on your diet, budget, household size, and cooking skill. $7.99/mo.", date: "2026-02-20" },
  { slug: "meal-plan-with-grocery-list", title: "Free Meal Plan with Grocery List (Updated Weekly)", description: "Get a personalized meal plan with grocery list delivered every week — AI-generated, sorted by store aisle, adjusted to your household size. Try free, no app needed.", date: "2026-02-20" },
  { slug: "platejoy-alternative", title: "Best PlateJoy Alternative 2026 | AI Meal Plans", description: "Looking for a PlateJoy alternative? What's For Dinner delivers AI-powered personalized meal plans and grocery lists by email for $7.99/mo — cheaper, smarter, and built for the post-PlateJoy era.", date: "2026-02-15" },
  { slug: "yummly-alternative", title: "Best Yummly Alternative (2026)", description: "Yummly shut down in December 2024. Discover the best Yummly alternative for personalized meal plans, grocery lists, and dietary filters — powered by AI for $7.99/mo.", date: "2026-02-15" },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${BASE}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE}/blog/${post.slug}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>What&apos;s For Dinner Blog</title>
    <link>${BASE}/blog</link>
    <description>Meal planning tips, guides, and alternatives — from What&apos;s For Dinner</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE}/blog/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
