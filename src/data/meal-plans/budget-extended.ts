import type { MealPlanPageData } from "./types";

export const budgetExtendedPages: MealPlanPageData[] = [
  {
    slug: "under-30-dollar-meal-plan",
    type: "diet",
    title: "Meal Plan Under $30/Week",
    metaDescription:
      "Get a weekly meal plan under $30 with filling, nutritious meals built on rice, beans, eggs, and seasonal produce. Free AI-generated plan with grocery list.",
    h1: "Meal Plan Under $30/Week That Actually Keeps You Full",
    intro:
      "Thirty dollars a week sounds impossible until you break it down: a 5lb bag of rice ($3), a pound of dried beans ($1.50), a dozen eggs ($3), a bag of frozen vegetables ($2). That's $9.50 and you've already covered half your meals. Our ultra-budget plans build every week around these anchor ingredients and add variety with seasonal produce, canned goods, and loss-leader proteins. You'll eat three real meals a day without relying on ramen or fast food dollar menus.",
    valueProps: [
      {
        heading: "Built on $1-per-meal math",
        description:
          "Every recipe is costed at grocery store prices. Rice and beans form the caloric base, eggs and canned fish add protein, and frozen or seasonal vegetables round out nutrition — all within $4.30/day.",
      },
      {
        heading: "Strategic grocery shopping",
        description:
          "Your grocery list prioritizes store-brand staples, bulk bins, and loss-leader deals. We tell you exactly what to buy and what to skip so every dollar stretches further.",
      },
      {
        heading: "No special ingredients",
        description:
          "Everything comes from a regular grocery store. No specialty health food items, no exotic grains, no $8 bottles of sauce. Just everyday ingredients cooked well.",
      },
    ],
    sampleMeals: [
      {
        name: "Egg & Rice Scramble",
        mealType: "breakfast",
        description:
          "Two eggs scrambled with leftover rice, a splash of soy sauce, and frozen peas. Filling, high-protein, and costs about $0.60.",
        prepTime: "10 min",
        tags: ["budget", "high-protein"],
      },
      {
        name: "Black Bean Quesadilla",
        mealType: "lunch",
        description:
          "Mashed black beans with shredded cheese and salsa pressed in a flour tortilla until crispy. Under $1 per serving.",
        prepTime: "10 min",
        tags: ["budget", "quick"],
      },
      {
        name: "Chicken Thigh & Rice Bowl",
        mealType: "dinner",
        description:
          "Bone-in chicken thighs (the cheapest cut at ~$1.50/lb) roasted with garlic and paprika, served over rice with steamed broccoli.",
        prepTime: "35 min",
        tags: ["budget", "batch-cook"],
      },
      {
        name: "Pasta e Fagioli",
        mealType: "dinner",
        description:
          "A hearty Italian soup of white beans, diced tomatoes, small pasta, and garlic in broth. A full pot costs under $4 and feeds you for two days.",
        prepTime: "25 min",
        tags: ["budget", "batch-cook"],
      },
      {
        name: "Peanut Butter Banana Toast",
        mealType: "snack",
        description:
          "A slice of bread with peanut butter and half a banana. Simple, filling, and about $0.35 per serving.",
        prepTime: "3 min",
        tags: ["budget", "no-cook"],
      },
    ],
    faqs: [
      {
        question: "Can you really eat well on $30 a week?",
        answer:
          "Yes, if you build meals around staples. Rice, dried beans, eggs, oats, frozen vegetables, and bananas form a nutritionally complete base for under $15/week. The remaining $15 buys proteins like chicken thighs, canned tuna, and extras like cheese, tortillas, and cooking oil. It requires planning — which is exactly what this meal plan does for you.",
      },
      {
        question: "What if I don't have a fully stocked pantry?",
        answer:
          "Your first week might run $35-40 as you buy cooking oil, salt, pepper, and basic spices. After that initial investment, weekly groceries drop to $25-30 because those pantry staples last months. We flag which items are one-time purchases versus weekly buys.",
      },
      {
        question: "Will I be eating the same thing every day?",
        answer:
          "No. Budget cooking gets repetitive when you don't plan. Our plans rotate through different cuisines and cooking methods — stir-fries, soups, baked dishes, bowls — using the same affordable base ingredients prepared differently each time. Rice shows up in a scramble, a bowl, a stir-fry, and fried rice across one week.",
      },
      {
        question: "Is this plan nutritionally balanced?",
        answer:
          "Yes. Rice and beans together form a complete protein. Eggs add B12 and healthy fats. Frozen vegetables retain the same nutrients as fresh. We track macros across the week to ensure you're getting adequate protein, fiber, and micronutrients even at this price point.",
      },
    ],
    relatedSlugs: ["under-50-dollar-meal-plan", "meal-plan-on-a-budget", "meal-plan-for-college-students"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "under-75-dollar-meal-plan",
    type: "diet",
    title: "Meal Plan Under $75/Week",
    metaDescription:
      "Get a weekly meal plan for two under $75. Balanced dinners, smart grocery lists, and no food waste. AI-personalized to your tastes. Try it free today.",
    h1: "Meal Plan Under $75/Week for Two People",
    intro:
      "Seventy-five dollars a week for two people works out to about $5.35 per person per day — tight but absolutely doable with the right plan. This budget gives you room for real proteins like chicken breasts, ground turkey, and salmon once a week, plus fresh produce, dairy, and pantry staples. The key is strategic ingredient overlap: the bell peppers in Monday's stir-fry show up in Wednesday's fajitas, and Sunday's roast chicken becomes Tuesday's chicken salad.",
    valueProps: [
      {
        heading: "Smart ingredient crossover",
        description:
          "Every ingredient appears in at least two meals. Buy one bunch of cilantro and use it in tacos, rice bowls, and a Thai-inspired soup. Zero waste means zero wasted dollars.",
      },
      {
        heading: "Real proteins, real variety",
        description:
          "At $75/week for two, you can afford chicken breasts, ground turkey, eggs, canned fish, and one premium protein like salmon or shrimp. No bean-only dinners unless you want them.",
      },
      {
        heading: "Grocery list organized by store section",
        description:
          "Your list is sorted by produce, dairy, meat, pantry, and frozen so you can move through the store efficiently. Estimated cost per section helps you stay on budget in real time.",
      },
    ],
    sampleMeals: [
      {
        name: "Overnight Oats with Berries",
        mealType: "breakfast",
        description:
          "Rolled oats soaked overnight in milk with chia seeds, honey, and frozen mixed berries. Grab from the fridge and eat — no cooking needed.",
        prepTime: "5 min",
        tags: ["meal-prep", "no-cook"],
      },
      {
        name: "Turkey & Avocado Wrap",
        mealType: "lunch",
        description:
          "Sliced deli turkey with avocado, spinach, tomato, and mustard rolled in a whole wheat tortilla. Quick, balanced, and portable.",
        prepTime: "10 min",
        tags: ["quick", "no-cook"],
      },
      {
        name: "Honey Garlic Chicken Stir-Fry",
        mealType: "dinner",
        description:
          "Chicken breast strips stir-fried with bell peppers, snap peas, and broccoli in a honey-garlic-soy glaze. Served over jasmine rice.",
        prepTime: "25 min",
        tags: ["quick", "balanced"],
      },
      {
        name: "Baked Salmon with Roasted Potatoes",
        mealType: "dinner",
        description:
          "Two salmon fillets baked with lemon and dill alongside roasted baby potatoes and green beans. The one splurge meal of the week.",
        prepTime: "30 min",
        tags: ["omega-3", "date-night"],
      },
      {
        name: "Apple Slices with Almond Butter",
        mealType: "snack",
        description:
          "A sliced apple with a tablespoon of almond butter. Simple, satisfying, and costs about $0.75 per serving.",
        prepTime: "3 min",
        tags: ["no-cook", "quick"],
      },
    ],
    faqs: [
      {
        question: "Is $75 a week realistic for two people?",
        answer:
          "Yes, and it's actually above the USDA's 'thrifty' plan estimate for two adults. At this budget you can eat balanced, varied meals with real proteins and fresh produce. The key is planning — unplanned grocery trips are where budgets blow up. Our plan eliminates impulse buys by giving you an exact list.",
      },
      {
        question: "How do you keep the cost under $75?",
        answer:
          "Three strategies: ingredient overlap (buy once, use in multiple meals), choosing cost-effective proteins (chicken thighs over breasts when possible, eggs, canned tuna), and using seasonal produce which is always cheaper. We also minimize specialty ingredients that you'd buy for one recipe and never use again.",
      },
      {
        question: "Can we still eat out once a week on this budget?",
        answer:
          "The $75 covers groceries only. If you want to eat out, our plan includes 5 dinners instead of 7, leaving two nights open for takeout or dining out on a separate budget. You can also swap to the full 7-dinner plan if you prefer to cook every night.",
      },
      {
        question: "What if groceries cost more in my area?",
        answer:
          "Grocery prices vary by region — $75 in the Midwest goes further than in NYC. Our plans flag which ingredients are flexible. If salmon is $12/lb in your area, we'll suggest a swap like cod or tilapia that keeps the meal delicious at half the price. The structure adapts to your local costs.",
      },
    ],
    relatedSlugs: ["meal-plan-on-a-budget", "meal-plan-for-two", "under-50-dollar-meal-plan", "meal-plan-for-couples"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "under-100-dollar-family-meal-plan",
    type: "diet",
    title: "$100/Week Family Meal Plan",
    metaDescription:
      "Feed a family of 4 for under $100/week with balanced, kid-friendly meals. Smart grocery lists, batch cooking tips, and zero food waste. Try it free.",
    h1: "$100/Week Family Meal Plan That Feeds Four Without Cutting Corners",
    intro:
      "A hundred dollars a week for a family of four comes out to $3.57 per person per day. That's tight — but families across the country do it every week with smart planning. The secret isn't eating less, it's eating strategically. Whole chickens instead of boneless breasts. Dried beans instead of canned. Frozen vegetables that are just as nutritious as fresh but half the price. Our plans build around these budget moves while keeping meals kid-friendly and genuinely good.",
    valueProps: [
      {
        heading: "Batch cooking that actually saves money",
        description:
          "Sunday's roast chicken becomes Monday's chicken tacos and Tuesday's chicken soup. One $7 chicken feeds your family three different meals. We plan these chains intentionally.",
      },
      {
        heading: "Kid-approved on a budget",
        description:
          "Budget meals don't have to be boring. Homemade pizza, taco nights, and pasta bakes are all cheap crowd-pleasers. We rotate through familiar favorites so nobody complains.",
      },
      {
        heading: "Store-brand strategy",
        description:
          "Your grocery list specifies which items are fine as store-brand (canned tomatoes, pasta, frozen vegetables) and which are worth the name-brand spend (butter, cheese). Every dollar is allocated intentionally.",
      },
    ],
    sampleMeals: [
      {
        name: "Sheet Pan French Toast",
        mealType: "breakfast",
        description:
          "Thick-cut bread soaked in egg-milk-cinnamon mixture and baked on a sheet pan. Feeds four for under $3 total. Serve with maple syrup and sliced bananas.",
        prepTime: "25 min",
        tags: ["family-friendly", "budget"],
      },
      {
        name: "Chicken Salad Sandwiches",
        mealType: "lunch",
        description:
          "Shredded leftover roast chicken mixed with mayo, celery, and mustard on sandwich bread. Uses yesterday's dinner to make today's lunch for free.",
        prepTime: "10 min",
        tags: ["leftover-transform", "budget"],
      },
      {
        name: "One-Pot Chili Mac",
        mealType: "dinner",
        description:
          "Ground beef, elbow macaroni, canned tomatoes, kidney beans, and chili seasoning cooked in one pot. Four big bowls for under $8 total.",
        prepTime: "25 min",
        tags: ["one-pot", "family-friendly"],
      },
      {
        name: "Whole Roast Chicken with Vegetables",
        mealType: "dinner",
        description:
          "A whole chicken roasted with potatoes, carrots, and onions. The anchor meal of the week — dinner tonight, leftovers for two more meals.",
        prepTime: "75 min",
        tags: ["batch-cook", "budget"],
      },
      {
        name: "Homemade Trail Mix",
        mealType: "snack",
        description:
          "Peanuts, raisins, a few chocolate chips, and pretzels mixed together. Made in bulk for the week for about $3 total.",
        prepTime: "5 min",
        tags: ["budget", "meal-prep"],
      },
    ],
    faqs: [
      {
        question: "Can a family of 4 really eat on $100 a week?",
        answer:
          "Yes. The USDA's thrifty food plan budgets about $175/week for a family of four, so $100 is tight but achievable with planning. The key is buying whole proteins (a whole chicken vs. chicken breasts saves 40%), using dried beans and lentils, buying frozen vegetables, and eliminating food waste through smart meal planning. Our plans do all of this for you.",
      },
      {
        question: "How do you handle picky kids on a tight budget?",
        answer:
          "We stick to universally appealing formats — tacos, pasta, pizza, stir-fry — and let the budget ingredients fit inside those familiar shapes. A kid who won't eat 'lentil stew' will happily eat 'taco meat' that's 50% lentils and 50% ground beef. We use these blending tricks throughout.",
      },
      {
        question: "Is batch cooking required to stay under $100?",
        answer:
          "It helps enormously. Cooking a whole chicken on Sunday and using the leftovers in two more meals saves about $10-15 per week compared to buying individual proteins for each meal. We build 2-3 'chain meals' per week where one cooking session feeds multiple dinners and lunches.",
      },
      {
        question: "What about fresh produce on this budget?",
        answer:
          "We use a mix of fresh and frozen. Bananas, carrots, onions, potatoes, and cabbage are always cheap fresh. Broccoli, peas, spinach, and berries are cheaper frozen and nutritionally identical. We time fresh produce early in the week and frozen produce later to maximize freshness and minimize waste.",
      },
    ],
    relatedSlugs: ["meal-plan-for-family-of-4", "meal-plan-on-a-budget", "under-50-dollar-meal-plan"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "meal-plan-for-couples",
    type: "diet",
    title: "Meal Plan for Couples",
    metaDescription:
      "Get a weekly meal plan for couples with date night dinners, easy weeknight meals, and a shared grocery list. Zero food waste, perfect portions for two.",
    h1: "Meal Plan for Couples Who Love Good Food Without the Waste",
    intro:
      "Cooking as a couple should be a pleasure, not a chore. But between coordinating schedules, navigating different tastes, and trying not to throw out half a head of lettuce every week, it often becomes one. Our couples meal plan is designed for two people who want to eat well together — date-night-worthy dinners on weekends, quick weeknight meals you can cook while catching up about your day, and a grocery list sized so nothing rots in the crisper drawer.",
    valueProps: [
      {
        heading: "Date night dinners built in",
        description:
          "One or two meals per week are a step above weeknight cooking — think pan-seared steak, homemade pasta, or wine-braised chicken. Restaurant quality, your kitchen, a fraction of the price.",
      },
      {
        heading: "Balanced for two different appetites",
        description:
          "Portions account for different hunger levels. Base meals are balanced, and we suggest easy add-ons (extra rice, a side salad, more bread) for the bigger eater without doubling the recipe.",
      },
      {
        heading: "Cook together or take turns",
        description:
          "Recipes include a suggested split for two cooks — one person handles the protein while the other preps the sides. Or alternate nights. Either way, meals are designed to feel collaborative, not like homework.",
      },
    ],
    sampleMeals: [
      {
        name: "Smoked Salmon Bagels",
        mealType: "breakfast",
        description:
          "Toasted bagels with cream cheese, smoked salmon, capers, red onion, and fresh dill. A weekend brunch for two in 10 minutes.",
        prepTime: "10 min",
        tags: ["date-night", "brunch"],
      },
      {
        name: "Mediterranean Mezze Plate",
        mealType: "lunch",
        description:
          "Hummus, feta, olives, cherry tomatoes, cucumber, and warm pita bread arranged on a shared plate. No cooking, all flavor.",
        prepTime: "10 min",
        tags: ["no-cook", "date-night"],
      },
      {
        name: "Pan-Seared Steak with Garlic Butter",
        mealType: "dinner",
        description:
          "Two ribeye steaks seared in a cast-iron skillet and basted with garlic herb butter. Served with roasted asparagus and mashed potatoes.",
        prepTime: "30 min",
        tags: ["date-night", "premium"],
      },
      {
        name: "Lemon Herb Chicken with Couscous",
        mealType: "dinner",
        description:
          "Chicken breasts marinated in lemon, garlic, and herbs, pan-seared and served over fluffy couscous with roasted zucchini.",
        prepTime: "25 min",
        tags: ["quick", "balanced"],
      },
      {
        name: "Cheese & Charcuterie for Two",
        mealType: "snack",
        description:
          "A small board with two cheeses, prosciutto, crackers, cornichons, and honey. Perfect for wine night at home.",
        prepTime: "10 min",
        tags: ["no-cook", "date-night"],
      },
    ],
    faqs: [
      {
        question: "How is this different from a regular meal plan for two?",
        answer:
          "Our couples plan emphasizes shared cooking experiences and includes date-night-caliber meals you'd normally pay $80+ for at a restaurant. It also accounts for different taste preferences — if one person loves spice and the other doesn't, we suggest heat-on-the-side approaches rather than bland compromises.",
      },
      {
        question: "What if we have completely different diets?",
        answer:
          "Minor differences (one eats more, one likes spice) are easy — our plans build in flexibility. Major differences (one vegan, one keto) are harder to serve from one plan. In that case, separate plans may work better, though we'll still try to find common-ground meals like build-your-own bowls.",
      },
      {
        question: "How much will we spend on groceries?",
        answer:
          "Most couples on our plan spend $70-110 per week depending on location and how many date-night meals they include. The premium dinner ingredients (steak, salmon, shrimp) account for most of the cost variation. Weeknight meals average $5-8 total for two servings.",
      },
      {
        question: "Can we meal prep together on Sundays?",
        answer:
          "Absolutely. Our plans include a Sunday prep guide that takes about an hour for two people working together — marinating proteins, chopping vegetables, cooking grains, and prepping sauces. It cuts weeknight cooking time in half and makes a great Sunday ritual.",
      },
    ],
    relatedSlugs: ["meal-plan-for-two", "under-75-dollar-meal-plan", "quick-30-minute-meal-plan"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "meal-plan-for-athletes",
    type: "diet",
    title: "Meal Plan for Athletes",
    metaDescription:
      "Get an athlete meal plan with high-protein, high-calorie recipes for training and recovery. Macro-balanced meals with grocery lists. Try it free today.",
    h1: "Meal Plan for Athletes That Fuels Training and Recovery",
    intro:
      "Training hard means eating hard. An athlete's body needs 2,500-4,000+ calories a day depending on sport, body weight, and training intensity — and those calories need to come from the right sources. Our athlete meal plans are built around performance nutrition: complex carbs for sustained energy, lean proteins for muscle repair, healthy fats for joint health, and strategic timing so you're fueled before workouts and recovering after. No bro-science, no chicken-and-rice monotony — just real meals that support real training.",
    valueProps: [
      {
        heading: "Macro-calculated meals",
        description:
          "Every meal comes with protein, carb, and fat breakdowns. Hit your daily targets without counting — we've already done the math for your training load and body weight.",
      },
      {
        heading: "Pre and post-workout nutrition",
        description:
          "Meals are timed around training. Quick-digesting carbs before a session, protein-rich recovery meals after. Your plan tells you what to eat and when relative to your workout.",
      },
      {
        heading: "High-volume, whole-food meals",
        description:
          "Athletes need real food, not just protein shakes. Our meals are calorie-dense enough to meet high energy demands using whole ingredients — sweet potatoes, salmon, eggs, oats, and lean meats.",
      },
    ],
    sampleMeals: [
      {
        name: "Power Oatmeal Bowl",
        mealType: "breakfast",
        description:
          "Rolled oats cooked with milk, topped with banana, peanut butter, honey, and a scoop of protein powder. 600+ calories to start training days right.",
        prepTime: "10 min",
        tags: ["high-calorie", "pre-workout"],
      },
      {
        name: "Chicken & Sweet Potato Power Bowl",
        mealType: "lunch",
        description:
          "Grilled chicken breast over roasted sweet potato and quinoa with avocado, black beans, and a lime-cilantro dressing. 50g+ protein per bowl.",
        prepTime: "30 min",
        tags: ["high-protein", "meal-prep"],
      },
      {
        name: "Salmon with Brown Rice & Broccoli",
        mealType: "dinner",
        description:
          "Baked salmon fillet with teriyaki glaze, brown rice, and steamed broccoli. Omega-3s for recovery, complex carbs for glycogen replenishment.",
        prepTime: "25 min",
        tags: ["omega-3", "recovery"],
      },
      {
        name: "Beef & Vegetable Stir-Fry",
        mealType: "dinner",
        description:
          "Lean beef strips stir-fried with bell peppers, snap peas, mushrooms, and garlic in a ginger-soy sauce. Served over white rice for fast-digesting carbs.",
        prepTime: "20 min",
        tags: ["high-protein", "quick"],
      },
      {
        name: "Greek Yogurt & Granola",
        mealType: "snack",
        description:
          "Full-fat Greek yogurt with homemade granola and a drizzle of honey. 25g protein, perfect post-workout or between meals.",
        prepTime: "5 min",
        tags: ["high-protein", "post-workout"],
      },
    ],
    faqs: [
      {
        question: "How many calories does an athlete need?",
        answer:
          "It depends on your sport, body weight, and training volume. Endurance athletes may need 3,000-5,000 calories/day. Strength athletes typically need 2,500-4,000. Our plans ask about your sport, training frequency, and goals, then calibrate calorie and macro targets accordingly. You can always adjust if you're gaining or losing weight unintentionally.",
      },
      {
        question: "Do I need to eat differently on rest days?",
        answer:
          "Slightly. Rest days need fewer carbs since you're not burning glycogen, but protein stays high for recovery. Our plans include separate rest-day meals with adjusted macros — you're not eating 4,000 calories of pasta on a couch day.",
      },
      {
        question: "Can this replace sports supplements?",
        answer:
          "For most athletes, whole food covers 90% of nutritional needs. Our plans may include protein powder in smoothies or oatmeal for convenience, but the core nutrition comes from real food. Creatine, caffeine, and sport-specific supplements are beyond what a meal plan covers — consult a sports dietitian for those.",
      },
      {
        question: "How much will this grocery bill be?",
        answer:
          "Athletes eat more, so groceries cost more — typically $100-150/week for one person. The caloric demands require more protein and carb sources. We keep costs reasonable by using chicken thighs, eggs, canned tuna, oats, rice, and sweet potatoes as staples rather than expensive supplements or specialty foods.",
      },
    ],
    relatedSlugs: ["high-protein-meal-plan", "meal-plan-for-muscle-gain", "3000-calorie-meal-plan", "2500-calorie-meal-plan"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "meal-plan-for-new-parents",
    type: "diet",
    title: "Meal Plan for New Parents",
    metaDescription:
      "Get a meal plan for new parents with one-handed meals, freezer-friendly batches, and 15-minute dinners. Eat well with a newborn. Try your free plan today.",
    h1: "Meal Plan for New Parents Who Barely Have Time to Eat",
    intro:
      "The first months with a newborn are a blur of feedings, diaper changes, and survival. Cooking drops to the bottom of the priority list — but you still need to eat, and your body needs real nutrition, especially if you're breastfeeding or recovering from birth. Our new parent meal plans are built for this reality: one-handed meals you can eat while holding a baby, freezer-friendly batches you prep during nap time, and dinners that go from fridge to table in 15 minutes or less.",
    valueProps: [
      {
        heading: "One-handed meals",
        description:
          "Wraps, bowls, and handheld foods you can eat with one hand while feeding or holding a baby. No meals that require a knife and fork and two free hands you don't have.",
      },
      {
        heading: "Freezer stash strategy",
        description:
          "Build a freezer supply during good days so you're covered on hard ones. Our plans include batch-cook sessions that yield 8-10 freezer meals — soups, casseroles, burritos — ready to reheat in minutes.",
      },
      {
        heading: "Nutrient-dense for recovery",
        description:
          "Postpartum recovery and breastfeeding demand extra calories, iron, protein, and hydration. Every meal is designed to support your body's recovery without requiring you to think about nutrition.",
      },
    ],
    sampleMeals: [
      {
        name: "Overnight Oats Jars",
        mealType: "breakfast",
        description:
          "Oats, milk, chia seeds, and peanut butter prepped in mason jars the night before. Grab from the fridge and eat cold, one-handed, no cooking required.",
        prepTime: "5 min",
        tags: ["one-handed", "meal-prep"],
      },
      {
        name: "Turkey & Cheese Pinwheels",
        mealType: "lunch",
        description:
          "Deli turkey, cream cheese, spinach, and shredded carrots rolled in a tortilla and sliced into pinwheels. Eat cold, one-handed, prep a batch for the week.",
        prepTime: "10 min",
        tags: ["one-handed", "no-cook"],
      },
      {
        name: "Freezer-Friendly Chicken Burritos",
        mealType: "dinner",
        description:
          "Seasoned shredded chicken, black beans, rice, and cheese wrapped in foil-lined tortillas. Make 10 at once, freeze, microwave in 3 minutes when hunger hits.",
        prepTime: "45 min",
        tags: ["freezer-friendly", "batch-cook"],
      },
      {
        name: "15-Minute Tomato Soup & Grilled Cheese",
        mealType: "dinner",
        description:
          "Canned tomato soup heated on the stove with a grilled cheese sandwich. Comfort food that requires almost zero brain power to make.",
        prepTime: "15 min",
        tags: ["quick", "comfort-food"],
      },
      {
        name: "Energy Bites",
        mealType: "snack",
        description:
          "Oats, peanut butter, honey, flaxseed, and chocolate chips rolled into balls. High-calorie, nutrient-dense, and you can eat them one-handed at 3 AM.",
        prepTime: "15 min",
        tags: ["one-handed", "meal-prep"],
      },
    ],
    faqs: [
      {
        question: "When am I supposed to cook with a newborn?",
        answer:
          "That's the whole point of this plan. Most meals require zero cooking (overnight oats, wraps, pinwheels) or are reheated from the freezer in 3-5 minutes. The cooking happens in one batch session — ideally when your partner is on baby duty, or during a longer nap. One hour of cooking yields a week of meals.",
      },
      {
        question: "Is this plan good for breastfeeding?",
        answer:
          "Yes. Breastfeeding requires an extra 300-500 calories per day, plus extra fluids, calcium, and iron. Our plans include calorie-dense, nutrient-rich meals and remind you to drink water throughout the day. We include foods known to support milk supply like oats, flaxseed, and leafy greens.",
      },
      {
        question: "Can my partner meal prep while I recover?",
        answer:
          "Absolutely. Our batch-cook sessions are written so anyone can follow them — even a partner who doesn't usually cook. Step-by-step instructions, no assumed knowledge. Many new parent households have a friend or family member who wants to help — our prep guide makes it easy to hand them a grocery list and say 'make these.'",
      },
      {
        question: "What about meals people can bring us?",
        answer:
          "We include a 'meal train guide' — a shareable list of freezer-friendly meals with recipes that well-meaning friends and family can make for you. It solves the 'let me know if you need anything' problem by giving people a specific, useful way to help.",
      },
    ],
    relatedSlugs: ["postpartum-meal-plan", "meal-plan-for-beginners", "quick-30-minute-meal-plan", "meal-prep-meal-plan"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
];
