import type { MealPlanPageData } from "./types";

export const durationPages: MealPlanPageData[] = [
  {
    slug: "3-day-meal-plan",
    type: "diet",
    title: "3-Day Meal Plan",
    metaDescription:
      "Try a free 3-day meal plan with balanced recipes and a grocery list. Low commitment, zero stress. See if meal planning works for you before subscribing.",
    h1: "3-Day Meal Plan to Kickstart Your Week",
    intro:
      "Not sure if meal planning is for you? A 3-day plan is the perfect low-pressure way to find out. Cover your busiest weeknights with balanced, easy-to-cook meals and see how much time and mental energy you save. Our free trial is exactly this — three days of planned meals so you can experience the difference before committing to a full week.",
    valueProps: [
      {
        heading: "Zero commitment, real results",
        description:
          "Three days is enough to feel the difference. No grocery waste, no 6 PM panic, no decision fatigue. Just a short test drive to see if planned meals fit your life.",
      },
      {
        heading: "Perfect for weekend prep",
        description:
          "Use a Sunday afternoon to prep three days of meals. You'll breeze through Monday to Wednesday with everything already figured out — recipes, portions, and groceries.",
      },
      {
        heading: "Try it free, right now",
        description:
          "Our free plan generates exactly 3 days of personalized meals based on your dietary preferences. No credit card, no account required. Just tell us what you like and get your plan.",
      },
    ],
    sampleMeals: [
      {
        name: "Overnight Oats with Banana & Peanut Butter",
        mealType: "breakfast",
        description:
          "Rolled oats soaked overnight in milk with sliced banana, a swirl of peanut butter, and a drizzle of honey. Grab from the fridge and go.",
        prepTime: "5 min",
        tags: ["meal-prep", "no-cook"],
      },
      {
        name: "Chicken Caesar Wrap",
        mealType: "lunch",
        description:
          "Grilled chicken strips with romaine, shaved parmesan, and light Caesar dressing rolled in a whole wheat tortilla.",
        prepTime: "15 min",
        tags: ["quick", "high-protein"],
      },
      {
        name: "One-Pot Creamy Tuscan Chicken",
        mealType: "dinner",
        description:
          "Chicken thighs simmered with sun-dried tomatoes, spinach, and garlic in a light cream sauce. Serve over pasta or crusty bread.",
        prepTime: "30 min",
        tags: ["one-pot", "comfort-food"],
      },
      {
        name: "Black Bean & Sweet Potato Tacos",
        mealType: "dinner",
        description:
          "Roasted sweet potato cubes and seasoned black beans in corn tortillas topped with avocado crema and pickled red onion.",
        prepTime: "35 min",
        tags: ["vegetarian", "budget-friendly"],
      },
      {
        name: "Trail Mix Energy Bites",
        mealType: "snack",
        description:
          "No-bake bites made with oats, mini chocolate chips, peanut butter, and a touch of honey. Make a batch and snack all week.",
        prepTime: "10 min",
        tags: ["meal-prep", "no-cook"],
      },
    ],
    faqs: [
      {
        question: "Is 3 days enough to see the benefits of meal planning?",
        answer:
          "Absolutely. Three days covers the busiest stretch of most people's weeks. You'll notice less stress around dinnertime, fewer impulse takeout orders, and a shorter grocery list. Many of our subscribers started with the free 3-day plan and upgraded once they felt the difference.",
      },
      {
        question: "What does the free 3-day meal plan include?",
        answer:
          "You get 3 full days of meals — breakfast, lunch, and dinner — personalized to your dietary preferences and household size. Each meal comes with ingredients, instructions, and prep times. It's the same quality as our subscriber plans, just shorter.",
      },
      {
        question: "Can I repeat the 3-day plan every week?",
        answer:
          "The free plan is a one-time trial to help you experience meal planning. If you love it, our weekly subscription generates a fresh 7-day plan every week with new recipes, so you never eat the same meals on repeat.",
      },
      {
        question: "How do I turn my 3-day plan into a full week?",
        answer:
          "Subscribe to get a complete 7-day meal plan delivered every week. You'll also get the ability to regenerate plans, set detailed dietary preferences, and receive your plan by email each Monday.",
      },
    ],
    relatedSlugs: [
      "7-day-meal-plan",
      "meal-plan-for-beginners",
      "quick-30-minute-meal-plan",
    ],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "5-day-meal-plan",
    type: "diet",
    title: "5-Day Meal Plan",
    metaDescription:
      "Get a 5-day meal plan covering Monday to Friday with easy recipes and a focused grocery list. Eat out on weekends guilt-free. Try meal planning today.",
    h1: "5-Day Meal Plan for People Who Live for the Weekend",
    intro:
      "You want structure during the week but freedom on Saturday and Sunday. A 5-day meal plan covers every weeknight dinner and workday lunch without touching your weekends. Eat out, order in, or improvise on your days off — the weekdays are handled. It's the sweet spot between full planning and total flexibility.",
    valueProps: [
      {
        heading: "Weeknights on autopilot",
        description:
          "Monday through Friday is where the stress lives. A 5-day plan eliminates the nightly 'what's for dinner?' spiral while keeping your weekends spontaneous and unplanned.",
      },
      {
        heading: "Smaller, smarter grocery runs",
        description:
          "A focused 5-day list means less food waste and quicker shopping trips. Buy exactly what you need for the work week — nothing sits in the fridge until it goes bad.",
      },
      {
        heading: "Built for the 9-to-5 rhythm",
        description:
          "Meals are designed for real weeknight energy levels. Quick prep on Monday, batch-cook on Wednesday, leftovers repurposed on Thursday. We work with your schedule, not against it.",
      },
    ],
    sampleMeals: [
      {
        name: "Spinach & Feta Egg Muffins",
        mealType: "breakfast",
        description:
          "Baked egg cups loaded with spinach, crumbled feta, and diced red pepper. Make a batch on Sunday, reheat all week.",
        prepTime: "25 min",
        tags: ["meal-prep", "high-protein"],
      },
      {
        name: "Mediterranean Grain Bowl",
        mealType: "lunch",
        description:
          "Farro topped with cucumber, cherry tomatoes, kalamata olives, chickpeas, and a lemon-tahini dressing.",
        prepTime: "20 min",
        tags: ["vegetarian", "meal-prep"],
      },
      {
        name: "Sheet Pan Sausage & Vegetables",
        mealType: "dinner",
        description:
          "Italian sausage links roasted with broccoli, red onion, and baby potatoes tossed in olive oil and herbs. One pan, done.",
        prepTime: "35 min",
        tags: ["one-pan", "easy"],
      },
      {
        name: "Teriyaki Salmon with Steamed Rice",
        mealType: "dinner",
        description:
          "Pan-seared salmon glazed with homemade teriyaki sauce, served over jasmine rice with steamed bok choy on the side.",
        prepTime: "25 min",
        tags: ["quick", "high-protein"],
      },
      {
        name: "Hummus & Veggie Snack Plate",
        mealType: "snack",
        description:
          "Creamy hummus served with carrot sticks, cucumber rounds, cherry tomatoes, and whole wheat pita triangles.",
        prepTime: "5 min",
        tags: ["no-cook", "vegetarian"],
      },
    ],
    faqs: [
      {
        question: "Why a 5-day plan instead of 7?",
        answer:
          "Many people prefer to keep weekends flexible for dining out, social meals, or cooking something spontaneous. A 5-day plan gives you weekday structure without over-scheduling your entire week. If you want full coverage, check out our 7-day plan instead.",
      },
      {
        question: "Which 5 days does the plan cover?",
        answer:
          "We plan Monday through Friday by default, since that's the work-week grind where meal planning saves the most time. All meals are designed for weeknight-friendly prep times of 15 to 35 minutes.",
      },
      {
        question: "Can I swap a weekday meal for a weekend day?",
        answer:
          "The plans are flexible — you can cook any meal on any day. If you'd rather plan Saturday and skip Wednesday, just shift the meals around. The grocery list covers everything regardless of which days you cook.",
      },
      {
        question: "Do I get breakfast, lunch, and dinner for all 5 days?",
        answer:
          "Yes, each day includes all three meals plus optional snacks if you've enabled them in your preferences. That's 15 meals planned, prepped, and grocery-listed so your entire work week is covered.",
      },
    ],
    relatedSlugs: [
      "7-day-meal-plan",
      "3-day-meal-plan",
      "quick-30-minute-meal-plan",
      "meal-plan-on-a-budget",
    ],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "7-day-meal-plan",
    type: "diet",
    title: "7-Day Meal Plan",
    metaDescription:
      "Get a complete 7-day meal plan with breakfast, lunch, and dinner recipes plus a grocery list. Fresh plans every week, personalized to your diet. Subscribe now.",
    h1: "7-Day Meal Plan: Your Entire Week, Sorted",
    intro:
      "A full 7-day meal plan is the gold standard of meal planning. Every breakfast, lunch, and dinner for the entire week — planned, portioned, and grocery-listed before Monday morning. No gaps, no guesswork, no wasted food. This is what our subscribers get every single week: a complete plan built around their preferences, delivered automatically.",
    valueProps: [
      {
        heading: "Complete weekly coverage",
        description:
          "Seven days, three meals a day, zero decisions to make. From Monday breakfast to Sunday dinner, every meal is planned so you never default to takeout out of exhaustion.",
      },
      {
        heading: "Maximum savings, minimum waste",
        description:
          "A full-week plan lets us optimize your grocery list across all 21 meals. Ingredients get reused smartly — roast chicken on Tuesday becomes chicken salad on Thursday. Nothing goes to waste.",
      },
      {
        heading: "Fresh plans, every week",
        description:
          "Subscribers get a brand-new 7-day plan generated every Monday. No repeating the same rotation. Our AI builds variety into every week while respecting your preferences and dietary needs.",
      },
    ],
    sampleMeals: [
      {
        name: "Avocado Toast with Poached Eggs",
        mealType: "breakfast",
        description:
          "Sourdough toast topped with smashed avocado, two poached eggs, red pepper flakes, and a squeeze of lemon. Simple, filling, ready in minutes.",
        prepTime: "15 min",
        tags: ["quick", "high-protein"],
      },
      {
        name: "Thai Peanut Noodle Salad",
        mealType: "lunch",
        description:
          "Rice noodles tossed with shredded cabbage, carrots, edamame, and cilantro in a creamy peanut-lime dressing. Served cold or at room temperature.",
        prepTime: "20 min",
        tags: ["vegetarian", "meal-prep"],
      },
      {
        name: "Herb-Crusted Pork Tenderloin",
        mealType: "dinner",
        description:
          "Pork tenderloin coated in a Dijon-herb crust, roasted until golden, and sliced over mashed sweet potatoes with steamed green beans.",
        prepTime: "40 min",
        tags: ["high-protein", "family-friendly"],
      },
      {
        name: "Shrimp & Asparagus Risotto",
        mealType: "dinner",
        description:
          "Creamy arborio rice cooked with white wine, tender shrimp, and asparagus tips, finished with parmesan and fresh lemon zest.",
        prepTime: "35 min",
        tags: ["comfort-food", "date-night"],
      },
      {
        name: "Greek Yogurt with Walnuts & Honey",
        mealType: "snack",
        description:
          "Thick Greek yogurt drizzled with raw honey and topped with crushed walnuts. High protein, naturally sweet, deeply satisfying.",
        prepTime: "3 min",
        tags: ["quick", "no-cook"],
      },
    ],
    faqs: [
      {
        question: "How is a 7-day meal plan different from the free trial?",
        answer:
          "The free trial gives you a 3-day plan to test the experience. A 7-day plan covers your entire week with more variety and smarter ingredient reuse across all 21 meals. Subscribers also get fresh plans every week, regeneration options, and email delivery.",
      },
      {
        question: "Can I customize which meals are included?",
        answer:
          "Yes. You can set your dietary preferences, allergies, cooking skill level, and whether to include snacks. You can also add a personal note like 'no seafood on weekdays' or 'I like batch-cooking on Sundays' and the plan adapts accordingly.",
      },
      {
        question: "What if I don't like a meal in my plan?",
        answer:
          "Subscribers can regenerate their plan up to twice per week. Each regeneration creates an entirely new set of meals while respecting your preferences. Over time, the variety keeps things fresh without repeating recipes you didn't enjoy.",
      },
      {
        question: "Do 7-day plans include a grocery list?",
        answer:
          "Every plan comes with a consolidated grocery list organized by category. Ingredients shared across multiple meals are combined so you buy the right amounts without doubling up. Most subscribers report their grocery trips take under 30 minutes.",
      },
      {
        question: "Is the 7-day plan the best value?",
        answer:
          "It's what our subscription is built around. For a few dollars a week, you get a complete 7-day meal plan generated fresh every Monday — that's 21 meals planned, grocery-listed, and delivered to your inbox. Most subscribers save 2-3 hours per week on meal decisions and shopping alone.",
      },
    ],
    relatedSlugs: [
      "5-day-meal-plan",
      "14-day-meal-plan",
      "meal-plan-on-a-budget",
      "meal-plan-for-family-of-4",
    ],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "14-day-meal-plan",
    type: "diet",
    title: "14-Day Meal Plan",
    metaDescription:
      "Plan 14 days of meals at once with a complete two-week meal plan. Less frequent shopping, better variety, and zero daily decision-making. Start planning today.",
    h1: "14-Day Meal Plan: Plan Once, Eat Well for Two Weeks",
    intro:
      "Why plan every week when you can plan every two? A 14-day meal plan gives you a full fortnight of breakfasts, lunches, and dinners in one shot. It's ideal for bulk grocery shopping, reducing your planning sessions by half, and getting enough variety that no meal feels like a repeat. Think of it as the meal planning equivalent of buying in bulk — less effort, better results.",
    valueProps: [
      {
        heading: "Half the planning, double the coverage",
        description:
          "One planning session covers two full weeks. That's 42 meals decided, grocery-listed, and ready to go. You'll spend less time thinking about food and more time enjoying it.",
      },
      {
        heading: "Built for bulk shopping",
        description:
          "A two-week plan lets you make fewer, larger grocery runs. Buy proteins in bulk, stock up on pantry staples, and save money with warehouse-store quantities that actually get used.",
      },
      {
        heading: "Better variety over 14 days",
        description:
          "Two weeks gives us room to introduce more cuisines, cooking methods, and ingredients without repeating. Week one might lean Mediterranean while week two explores Asian-inspired dishes.",
      },
    ],
    sampleMeals: [
      {
        name: "Blueberry Banana Smoothie Bowl",
        mealType: "breakfast",
        description:
          "Thick blended smoothie base of frozen blueberries, banana, and Greek yogurt, topped with granola, chia seeds, and sliced almonds.",
        prepTime: "10 min",
        tags: ["quick", "vegetarian"],
      },
      {
        name: "Roasted Cauliflower & Chickpea Wrap",
        mealType: "lunch",
        description:
          "Spiced roasted cauliflower and chickpeas tucked into a warm tortilla with pickled onions, arugula, and garlic yogurt sauce.",
        prepTime: "30 min",
        tags: ["vegetarian", "budget-friendly"],
      },
      {
        name: "Slow Cooker Beef Stew",
        mealType: "dinner",
        description:
          "Tender beef chunks simmered for hours with potatoes, carrots, celery, and a rich tomato-red wine broth. Set it and forget it.",
        prepTime: "20 min active",
        tags: ["slow-cooker", "meal-prep"],
      },
      {
        name: "Lemon Garlic Chicken Thighs with Orzo",
        mealType: "dinner",
        description:
          "Crispy-skinned chicken thighs braised with lemon, garlic, and olives over herbed orzo pasta. One skillet, restaurant-quality results.",
        prepTime: "35 min",
        tags: ["one-pan", "comfort-food"],
      },
      {
        name: "Dark Chocolate & Almond Clusters",
        mealType: "snack",
        description:
          "Melted dark chocolate mixed with roasted almonds and a pinch of sea salt, dropped into clusters and chilled until set.",
        prepTime: "15 min",
        tags: ["meal-prep", "treat"],
      },
    ],
    faqs: [
      {
        question: "How does a 14-day meal plan work with grocery shopping?",
        answer:
          "You can do one large shop at the start and a smaller mid-point run for fresh produce and perishables. The plan is structured so shelf-stable and frozen ingredients are used throughout, while fresh items cluster in the first few days of each week.",
      },
      {
        question: "Won't food go bad over two weeks?",
        answer:
          "The plan is designed with food freshness in mind. Perishable ingredients like fresh fish and leafy greens appear in the first half of each week. Heartier vegetables, frozen proteins, and pantry staples are scheduled for later days. A quick mid-week produce run keeps everything fresh.",
      },
      {
        question: "Can I mix and match days between the two weeks?",
        answer:
          "Absolutely. The meals are independent — you can swap any day from week one with week two. The grocery list covers everything, so rearranging days won't leave you missing ingredients.",
      },
      {
        question: "Is a 14-day plan more cost-effective than weekly planning?",
        answer:
          "It can be. Buying in bulk reduces per-unit costs, and a two-week view lets us reuse ingredients more efficiently. Many families find they save 15-20% on groceries compared to shopping without a plan, and the savings compound over a longer planning window.",
      },
    ],
    relatedSlugs: [
      "7-day-meal-plan",
      "21-day-meal-plan",
      "meal-plan-on-a-budget",
      "meal-plan-for-family-of-4",
    ],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "21-day-meal-plan",
    type: "diet",
    title: "21-Day Meal Plan",
    metaDescription:
      "Start a 21-day meal plan to build lasting healthy eating habits. Three weeks of balanced recipes designed to transform how you cook, eat, and shop. Try it now.",
    h1: "21-Day Meal Plan: Three Weeks to Transform Your Eating Habits",
    intro:
      "It takes about 21 days to build a new habit, and meal planning is no exception. A 21-day plan gives you three full weeks of structured, balanced meals — enough time for home cooking to feel automatic instead of aspirational. By day 21, you'll have a stocked pantry, a faster grocery routine, and the confidence that you can actually do this every week.",
    valueProps: [
      {
        heading: "The science of habit formation",
        description:
          "Research suggests 21 days is the sweet spot for building new routines. Three weeks of planned meals creates muscle memory — checking the plan, prepping ingredients, and cooking on schedule starts to feel natural, not forced.",
      },
      {
        heading: "Progressive complexity",
        description:
          "Week one starts simple with quick, foolproof recipes. Week two introduces slightly more involved dishes. By week three, you're cooking with confidence and variety. It's a gentle on-ramp, not a cold plunge.",
      },
      {
        heading: "Measurable results",
        description:
          "Three weeks is enough to see real changes: lower grocery bills, less food waste, more energy from balanced nutrition, and the satisfaction of knowing exactly what you're eating every day.",
      },
    ],
    sampleMeals: [
      {
        name: "Peanut Butter & Banana Overnight Oats",
        mealType: "breakfast",
        description:
          "Oats soaked overnight with milk, a spoonful of peanut butter, sliced banana, and a dash of cinnamon. Ready when you wake up.",
        prepTime: "5 min",
        tags: ["meal-prep", "no-cook"],
      },
      {
        name: "Southwest Black Bean Soup",
        mealType: "lunch",
        description:
          "Smoky black bean soup with corn, diced tomatoes, cumin, and a squeeze of lime. Top with avocado and tortilla strips.",
        prepTime: "25 min",
        tags: ["vegetarian", "budget-friendly"],
      },
      {
        name: "Honey Mustard Chicken with Roasted Broccoli",
        mealType: "dinner",
        description:
          "Chicken breasts glazed with honey-Dijon mustard and baked alongside broccoli florets until caramelized and tender.",
        prepTime: "30 min",
        tags: ["one-pan", "family-friendly"],
      },
      {
        name: "Beef & Broccoli Stir-Fry",
        mealType: "dinner",
        description:
          "Thinly sliced flank steak stir-fried with broccoli and garlic in a savory soy-ginger sauce, served over steamed jasmine rice.",
        prepTime: "25 min",
        tags: ["quick", "high-protein"],
      },
      {
        name: "Cottage Cheese with Pineapple",
        mealType: "snack",
        description:
          "A bowl of creamy cottage cheese topped with fresh pineapple chunks. High protein, naturally sweet, and incredibly simple.",
        prepTime: "3 min",
        tags: ["quick", "no-cook"],
      },
    ],
    faqs: [
      {
        question: "Why 21 days specifically?",
        answer:
          "The 21-day habit formation concept comes from behavioral psychology — it's roughly how long it takes for a new behavior to start feeling automatic. Three weeks of meal planning is enough to build the routine of checking your plan, shopping with a list, and prepping ahead. After 21 days, most people find they can't go back to winging it.",
      },
      {
        question: "Is a 21-day plan good for a diet reset?",
        answer:
          "It's excellent for a reset. Three weeks is long enough to break old patterns like relying on takeout or skipping meals, but short enough to feel achievable. The structured plan removes willpower from the equation — you just follow the meals and let the habit build itself.",
      },
      {
        question: "How do I handle grocery shopping for 21 days?",
        answer:
          "We recommend shopping weekly within the 21-day plan. Each week's grocery list is separate, so you're buying fresh produce every 7 days rather than trying to stock up for the entire stretch. Think of it as three connected weekly plans rather than one massive haul.",
      },
      {
        question: "What happens after the 21 days are over?",
        answer:
          "By then, meal planning should feel like second nature. Our weekly subscription keeps the momentum going with a fresh 7-day plan every Monday. You've built the habit — we keep fueling it with new recipes and variety so you never plateau.",
      },
      {
        question: "Can I do a 21-day plan with dietary restrictions?",
        answer:
          "Absolutely. Set your preferences — vegetarian, gluten-free, dairy-free, low-carb, or any combination — and every meal across all 21 days will respect those restrictions. You can also note allergies and ingredients you dislike.",
      },
    ],
    relatedSlugs: [
      "30-day-meal-plan",
      "14-day-meal-plan",
      "meal-plan-for-weight-loss",
      "meal-plan-for-beginners",
    ],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "30-day-meal-plan",
    type: "diet",
    title: "30-Day Meal Plan",
    metaDescription:
      "Get a complete 30-day meal plan with four weeks of balanced recipes, grocery lists, and zero guesswork. Transform your eating habits in one month. Start today.",
    h1: "30-Day Meal Plan: One Month to a Completely New Routine",
    intro:
      "A 30-day meal plan is a full reset. Four weeks of planned breakfasts, lunches, and dinners that take the guesswork out of eating well for an entire month. Whether you're starting a new diet, recovering from a season of takeout, or just want to prove to yourself that consistent home cooking is possible — 30 days gives you the time and structure to make it happen and see real, noticeable results.",
    valueProps: [
      {
        heading: "A full month of momentum",
        description:
          "Thirty days is enough to move past the novelty phase and into genuine lifestyle change. By week four, meal planning isn't something you're 'trying' — it's just how you eat.",
      },
      {
        heading: "Noticeable results",
        description:
          "A month of balanced, home-cooked meals shows up everywhere: more energy, lower grocery bills, better sleep, and the quiet confidence that comes from knowing exactly what you're putting into your body.",
      },
      {
        heading: "Maximum variety across four weeks",
        description:
          "With 90 dinners, lunches, and breakfasts to fill, we pull from every cuisine and cooking method. Italian one night, Thai the next, sheet-pan meals midweek, slow cooker on Sunday. No meal fatigue, guaranteed.",
      },
    ],
    sampleMeals: [
      {
        name: "Shakshuka with Crusty Bread",
        mealType: "breakfast",
        description:
          "Eggs poached in a spiced tomato-pepper sauce with cumin, paprika, and a touch of harissa. Scoop up with warm crusty bread.",
        prepTime: "25 min",
        tags: ["vegetarian", "one-pan"],
      },
      {
        name: "Asian Chicken Lettuce Cups",
        mealType: "lunch",
        description:
          "Ground chicken sauteed with water chestnuts, ginger, and hoisin sauce, spooned into crisp butter lettuce cups with a sriracha drizzle.",
        prepTime: "20 min",
        tags: ["low-carb", "quick"],
      },
      {
        name: "Baked Cod with Mango Salsa",
        mealType: "dinner",
        description:
          "Flaky cod fillets baked with lime and chili, topped with a fresh mango-red onion-cilantro salsa. Light, bright, and ready in under 30 minutes.",
        prepTime: "25 min",
        tags: ["quick", "healthy"],
      },
      {
        name: "Eggplant Parmesan",
        mealType: "dinner",
        description:
          "Breaded eggplant rounds baked until crispy, layered with marinara and melted mozzarella. Comfort food that happens to be vegetarian.",
        prepTime: "45 min",
        tags: ["vegetarian", "comfort-food"],
      },
      {
        name: "Frozen Yogurt Bark",
        mealType: "snack",
        description:
          "Greek yogurt spread thin, studded with berries, pistachios, and a drizzle of dark chocolate, then frozen and snapped into pieces.",
        prepTime: "10 min",
        tags: ["meal-prep", "treat"],
      },
    ],
    faqs: [
      {
        question: "How is a 30-day plan structured?",
        answer:
          "Think of it as four connected weekly plans. Each week has its own grocery list so you're shopping fresh every 7 days. The meals are varied across the full month — we avoid repeating recipes and intentionally rotate cuisines, proteins, and cooking methods so week four feels as fresh as week one.",
      },
      {
        question: "Can I use a 30-day plan for a specific diet challenge?",
        answer:
          "Yes. Set your dietary preferences to match your challenge — whether that's Whole30-style, plant-based, low-carb, or calorie-controlled — and every meal across all 30 days will align. Having a structured plan removes the temptation to break your challenge because you always know what's next.",
      },
      {
        question: "Will I get bored eating planned meals for a full month?",
        answer:
          "The opposite, actually. Without a plan, most people rotate through the same 5-7 meals. Our 30-day plans introduce 60-90 unique recipes spanning multiple cuisines and cooking styles. You'll eat more variety in one planned month than most people eat in three unplanned months.",
      },
      {
        question: "How much money can I save with a 30-day meal plan?",
        answer:
          "Most families save 20-30% on food costs when following a meal plan versus shopping without one. Over 30 days, that adds up fast — less impulse buying, less food waste, and fewer takeout orders. Many subscribers report saving $200-400 per month after switching to planned meals.",
      },
      {
        question: "What if my schedule changes mid-month?",
        answer:
          "Plans are flexible. Swap days around, skip a meal and use leftovers, or regenerate a week's plan if your preferences change. The structure is there to support you, not box you in. Life happens — the plan adapts.",
      },
    ],
    relatedSlugs: [
      "21-day-meal-plan",
      "7-day-meal-plan",
      "meal-plan-for-weight-loss",
      "meal-plan-on-a-budget",
    ],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
];
