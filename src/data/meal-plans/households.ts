import type { MealPlanPageData } from "./types";

export const householdPages: MealPlanPageData[] = [
  {
    slug: "meal-plan-for-one",
    type: "diet",
    title: "Meal Plan for One Person",
    metaDescription:
      "Get a personalized weekly meal plan sized for one. No food waste, perfect portions, and easy recipes for solo cooking. Try your free meal plan today.",
    h1: "Meal Plan for One Person That Eliminates Food Waste",
    intro:
      "Cooking for one is its own challenge. Recipes are designed for four, produce goes bad before you can use it, and the temptation to just order takeout is real. Our single-serving meal plans solve all of that — properly portioned recipes, smart grocery lists that minimize waste, and meals that feel like a real dinner even when you're eating solo.",
    valueProps: [
      {
        heading: "Perfectly portioned",
        description:
          "Every recipe is scaled for one person. No halving recipes and wondering what to do with the other half of a can of coconut milk.",
      },
      {
        heading: "Zero-waste grocery lists",
        description:
          "If you buy a bunch of cilantro on Monday, you'll use the rest by Thursday. Ingredients overlap across meals so nothing goes to waste.",
      },
      {
        heading: "Leftovers by design",
        description:
          "Some dinners intentionally make two portions — one for tonight and one that becomes tomorrow's lunch in a different format. Cook once, eat twice.",
      },
    ],
    sampleMeals: [
      {
        name: "Single-Serve Shakshuka",
        mealType: "breakfast",
        description:
          "One egg poached in a small skillet of spiced tomato sauce with a slice of crusty bread for dipping. Ready in minutes.",
        prepTime: "15 min",
        tags: ["single-serving", "quick"],
      },
      {
        name: "Mediterranean Grain Bowl",
        mealType: "lunch",
        description:
          "Leftover grain base topped with cucumber, cherry tomatoes, feta, olives, and a lemon-herb dressing. Uses last night's extras.",
        prepTime: "10 min",
        tags: ["no-cook", "leftover-transform"],
      },
      {
        name: "Pan-Seared Chicken Thigh with Roasted Vegetables",
        mealType: "dinner",
        description:
          "One bone-in chicken thigh seared and roasted with whatever vegetables need using up — potatoes, carrots, or Brussels sprouts.",
        prepTime: "30 min",
        tags: ["one-pan", "single-serving"],
      },
      {
        name: "Shrimp Scampi for One",
        mealType: "dinner",
        description:
          "A personal portion of shrimp sauteed in garlic butter and white wine, tossed with linguine and fresh parsley.",
        prepTime: "20 min",
        tags: ["quick", "single-serving"],
      },
      {
        name: "Apple & Cheddar Slices",
        mealType: "snack",
        description:
          "A sliced apple with a few cubes of sharp cheddar cheese. Simple, satisfying, and perfectly portioned for one.",
        prepTime: "5 min",
        tags: ["no-cook", "quick"],
      },
    ],
    faqs: [
      {
        question: "How do you avoid food waste when cooking for one?",
        answer:
          "Our plans use overlapping ingredients across the week. If a recipe calls for half a bell pepper, another meal later that week uses the other half. We also favor ingredients with longer shelf lives — root vegetables, frozen proteins, canned goods — and use fresh produce strategically early in the week.",
      },
      {
        question: "Is it cheaper to meal plan for one person?",
        answer:
          "Absolutely. The biggest money drain for solo eaters is buying ingredients for one recipe and throwing half away, or giving up and ordering delivery. A planned week with a smart grocery list typically costs $40-60 and eliminates both problems.",
      },
      {
        question: "Will I be eating the same thing every day?",
        answer:
          "No. Our plans include 3-4 different dinners per week with lunches that creatively repurpose leftovers. A roasted chicken thigh becomes a chicken salad the next day. Variety without waste is the whole point.",
      },
      {
        question: "Can I batch cook even though I live alone?",
        answer:
          "Yes, and we encourage it. Some meals are designed to make 2-3 portions that you eat throughout the week or freeze for later. Soups, stews, and grain bowls are especially good for this. Your plan will tell you which meals are batch-friendly.",
      },
    ],
    relatedSlugs: ["meal-plan-on-a-budget", "meal-plan-for-beginners", "quick-30-minute-meal-plan"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "meal-plan-for-two",
    type: "diet",
    title: "Meal Plan for Two",
    metaDescription:
      "Get a weekly meal plan perfectly portioned for two people. Balanced recipes, shared grocery lists, and no leftovers piling up. Try it free today.",
    h1: "Meal Plan for Two That Makes Weeknight Cooking Easy",
    intro:
      "Cooking for two should be simple, but most recipes serve four and leave you drowning in leftovers or halving measurements awkwardly. Our plans are built for exactly two servings — date-night-worthy dinners, easy weeknight meals, and a grocery list sized so nothing goes to waste. Whether you're a couple, roommates, or parent-and-kid, it just works.",
    valueProps: [
      {
        heading: "Scaled for two, not halved from four",
        description:
          "Recipes are written from scratch for two servings, not awkwardly divided from family-sized portions. Proportions, cooking times, and pan sizes are all optimized.",
      },
      {
        heading: "Shared grocery list",
        description:
          "One trip to the store, one list, everything you need for the week. No duplicate trips, no mystery ingredients lingering in the fridge.",
      },
      {
        heading: "Flexible for different tastes",
        description:
          "Set preferences for both eaters. We'll find common ground and suggest easy swaps when one person likes spice and the other doesn't.",
      },
    ],
    sampleMeals: [
      {
        name: "Eggs Benedict for Two",
        mealType: "breakfast",
        description:
          "Poached eggs on toasted English muffins with Canadian bacon and a quick blender hollandaise. A weekend treat that's easier than it looks.",
        prepTime: "25 min",
        tags: ["date-night", "brunch"],
      },
      {
        name: "Caprese Panini",
        mealType: "lunch",
        description:
          "Fresh mozzarella, tomato, and basil pressed between ciabatta with a balsamic glaze. Makes exactly two sandwiches.",
        prepTime: "15 min",
        tags: ["quick", "no-waste"],
      },
      {
        name: "Lemon Garlic Shrimp Pasta",
        mealType: "dinner",
        description:
          "Jumbo shrimp sauteed with garlic and lemon zest, tossed with angel hair pasta and fresh parsley. A 20-minute date night dinner.",
        prepTime: "20 min",
        tags: ["date-night", "quick"],
      },
      {
        name: "Stuffed Bell Peppers",
        mealType: "dinner",
        description:
          "Two bell peppers stuffed with seasoned ground turkey, rice, black beans, and cheese, baked until bubbly.",
        prepTime: "40 min",
        tags: ["balanced", "no-waste"],
      },
      {
        name: "Cheese & Fruit Board",
        mealType: "snack",
        description:
          "A small board with two cheeses, sliced apple, grapes, crackers, and a handful of nuts. Perfect for sharing.",
        prepTime: "10 min",
        tags: ["no-cook", "date-night"],
      },
    ],
    faqs: [
      {
        question: "Can two people with different diets use the same plan?",
        answer:
          "To some extent, yes. If one person is vegetarian and the other isn't, our plans can build a base meal that works for both with a protein add-on for the meat eater. For more complex differences (keto + vegan), separate plans may work better.",
      },
      {
        question: "How much will groceries cost for two people per week?",
        answer:
          "Most couples following our plans spend $60-100 per week on groceries, depending on location and protein choices. That's significantly less than eating out, and our waste-free approach means you're not throwing money in the trash.",
      },
      {
        question: "Are there date night meal options?",
        answer:
          "Yes. We include one or two slightly more special meals per week — things like shrimp pasta, steak with roasted potatoes, or homemade pizza night — that feel like a date night without requiring restaurant prices or chef skills.",
      },
      {
        question: "What if we have different portion sizes?",
        answer:
          "Our recipes serve two equal portions. If one person eats more, you can add sides like extra bread, rice, or a salad. The base meal provides balanced nutrition and the bigger eater can scale up carbs or sides without throwing off the whole plan.",
      },
    ],
    relatedSlugs: ["meal-plan-for-one", "meal-plan-for-family-of-4", "quick-30-minute-meal-plan"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "meal-plan-for-family-of-4",
    type: "diet",
    title: "Meal Plan for a Family of 4",
    metaDescription:
      "Get a weekly family meal plan for 4 with kid-friendly recipes, balanced nutrition, and one grocery list. End the 'what's for dinner' stress. Try it free.",
    h1: "Meal Plan for a Family of 4 That Everyone Will Actually Eat",
    intro:
      "Feeding a family of four means balancing nutrition, taste preferences, time, and budget — every single night. The mental load of deciding what to cook is exhausting before you even start cooking. Our family meal plans take that decision off your plate with kid-approved, nutritious meals that adults enjoy too, plus a single grocery list for the whole week.",
    valueProps: [
      {
        heading: "Kid-tested, parent-approved",
        description:
          "Meals feature familiar flavors and textures that kids accept while being nutritious enough that parents don't feel guilty. No separate kid meals needed.",
      },
      {
        heading: "One grocery trip per week",
        description:
          "A complete grocery list organized by store section so you can get in and out quickly. No midweek panic runs for forgotten ingredients.",
      },
      {
        heading: "30-minute weeknight meals",
        description:
          "Most weeknight dinners take 30 minutes or less because we know you're cooking after a full day of work and kid activities.",
      },
      {
        heading: "Built-in variety",
        description:
          "Taco Tuesday, pasta night, stir-fry — we rotate through family favorites so nobody gets bored but every meal feels familiar enough to eat without complaints.",
      },
    ],
    sampleMeals: [
      {
        name: "Sheet Pan Pancakes",
        mealType: "breakfast",
        description:
          "Fluffy pancake batter poured onto a sheet pan and baked with blueberries. Feeds four with zero flipping. Serve with maple syrup.",
        prepTime: "25 min",
        tags: ["family-friendly", "batch-cook"],
      },
      {
        name: "Build-Your-Own Taco Bar",
        mealType: "lunch",
        description:
          "Seasoned ground beef with shells, shredded cheese, lettuce, tomatoes, and sour cream. Everyone customizes their own.",
        prepTime: "20 min",
        tags: ["family-friendly", "interactive"],
      },
      {
        name: "One-Pot Chicken & Rice",
        mealType: "dinner",
        description:
          "Chicken thighs simmered with rice, peas, and carrots in chicken broth. One pot, four servings, minimal cleanup.",
        prepTime: "30 min",
        tags: ["one-pot", "family-friendly"],
      },
      {
        name: "Homemade Pizza Night",
        mealType: "dinner",
        description:
          "Store-bought dough with marinara, mozzarella, and toppings of each person's choice. Kids love making their own.",
        prepTime: "25 min",
        tags: ["family-friendly", "interactive"],
      },
      {
        name: "Ants on a Log",
        mealType: "snack",
        description:
          "Celery sticks filled with peanut butter and topped with raisins. A classic kid-friendly snack that sneaks in fruits and vegetables.",
        prepTime: "5 min",
        tags: ["kid-approved", "no-cook"],
      },
    ],
    faqs: [
      {
        question: "What if my kids are picky eaters?",
        answer:
          "Our family plans focus on universally appealing flavors — pasta, chicken, tacos, pizza — that most kids will eat. You can also mark specific ingredients your kids avoid and we'll work around them. Many meals have a 'build your own' element so picky eaters can skip what they don't like.",
      },
      {
        question: "How much does it cost to feed a family of 4 per week?",
        answer:
          "With our meal plans, most families spend $100-150 per week on groceries. That's significantly less than the average family spends when shopping without a plan, and a fraction of what eating out would cost for four people.",
      },
      {
        question: "Can the meals accommodate food allergies?",
        answer:
          "Yes. Set allergies in your family profile — nut-free, dairy-free, gluten-free, etc. — and every meal will avoid those allergens. We also flag common allergens in ingredient lists so you can double-check.",
      },
      {
        question: "Do I need to cook separate meals for adults and kids?",
        answer:
          "No, that's the whole point. Every meal is designed to work for the whole family. Adults might add hot sauce or a more complex side, but the base meal satisfies everyone. No more cooking two dinners every night.",
      },
    ],
    relatedSlugs: ["meal-plan-for-picky-eaters", "meal-plan-on-a-budget", "meal-plan-for-family-of-6"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "meal-plan-for-family-of-6",
    type: "diet",
    title: "Meal Plan for a Family of 6",
    metaDescription:
      "Feed a family of 6 with a weekly meal plan. Large-batch recipes, budget-friendly groceries, and meals everyone enjoys. Try your free plan today.",
    h1: "Meal Plan for a Family of 6 That Keeps Everyone Fed and Happy",
    intro:
      "Feeding six mouths every day is a logistical feat. The cost adds up fast, the cooking takes forever, and finding meals that satisfy both toddlers and teenagers feels impossible. Our large-family meal plans are designed for volume — big-batch recipes that scale naturally, budget-conscious ingredients, and crowd-pleasing flavors that work across age groups.",
    valueProps: [
      {
        heading: "Big-batch cooking",
        description:
          "Every recipe is designed for 6+ servings from the start. No awkward multiplication — portions, cooking times, and pan sizes are all calibrated for a large family.",
      },
      {
        heading: "Budget-conscious by necessity",
        description:
          "Feeding six people adds up fast. Our plans rely on affordable proteins, bulk grains, and seasonal produce to keep the weekly grocery bill reasonable.",
      },
      {
        heading: "Crowd-pleasing variety",
        description:
          "We rotate through universally loved meals — casseroles, stir-fries, tacos, pasta — so picky eaters and adventurous eaters both find something to enjoy.",
      },
    ],
    sampleMeals: [
      {
        name: "Baked Oatmeal Casserole",
        mealType: "breakfast",
        description:
          "A large pan of oatmeal baked with eggs, milk, maple syrup, and mixed berries. Slice and serve — enough for the whole family.",
        prepTime: "35 min",
        tags: ["batch-cook", "family-friendly"],
      },
      {
        name: "Chicken Caesar Salad Wraps",
        mealType: "lunch",
        description:
          "Shredded rotisserie chicken with romaine, parmesan, and Caesar dressing wrapped in large flour tortillas. Makes six quickly.",
        prepTime: "15 min",
        tags: ["quick", "no-cook"],
      },
      {
        name: "Beef & Bean Chili",
        mealType: "dinner",
        description:
          "A massive pot of ground beef chili with kidney beans, diced tomatoes, and warm spices. Feeds six with enough for next-day leftovers.",
        prepTime: "45 min",
        tags: ["batch-cook", "freezer-friendly"],
      },
      {
        name: "Baked Ziti",
        mealType: "dinner",
        description:
          "Ziti pasta baked with ricotta, mozzarella, marinara, and Italian sausage in a large casserole dish. A family crowd-pleaser.",
        prepTime: "45 min",
        tags: ["comfort-food", "batch-cook"],
      },
      {
        name: "Popcorn & Fruit",
        mealType: "snack",
        description:
          "A big bowl of air-popped popcorn with a plate of sliced apples and oranges. Cheap, healthy, and kid-approved.",
        prepTime: "10 min",
        tags: ["budget", "family-friendly"],
      },
    ],
    faqs: [
      {
        question: "How much will groceries cost for a family of 6?",
        answer:
          "With our meal plans, most families of six spend $150-220 per week. That's roughly $5-6 per person per day for three meals and snacks. We prioritize affordable proteins like chicken thighs, ground beef, and beans, and use seasonal produce to keep costs down.",
      },
      {
        question: "Can I prep meals ahead for a large family?",
        answer:
          "Absolutely, and we encourage it. Many of our large-family recipes are designed for Sunday prep — casseroles assembled and refrigerated, chili made in bulk, overnight oats portioned out. Spending 1-2 hours on Sunday saves hours during the busy weeknight rush.",
      },
      {
        question: "What if family members have different dietary needs?",
        answer:
          "Our plans focus on flexible base meals where individual adjustments are easy. A taco bar lets everyone pick their toppings. A stir-fry can be served with rice for some and cauliflower rice for others. We build in these flexibility points so one meal works for everyone.",
      },
      {
        question: "Are these meals suitable for all ages?",
        answer:
          "Yes. Our family plans avoid overly spicy or complex flavors that young kids tend to reject, while keeping meals interesting enough for adults and teens. Hot sauce and extra seasoning can always be added at the table for those who want it.",
      },
    ],
    relatedSlugs: ["meal-plan-for-family-of-4", "meal-plan-on-a-budget", "meal-plan-for-picky-eaters"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "meal-plan-for-college-students",
    type: "diet",
    title: "Meal Plan for College Students",
    metaDescription:
      "Get a weekly meal plan built for college life. Budget-friendly, dorm-friendly recipes with minimal equipment and short prep times. Try it free today.",
    h1: "Meal Plan for College Students on a Real Student Budget",
    intro:
      "Between classes, studying, and a social life, cooking is the last thing on most college students' minds. But surviving on ramen and dining hall pizza gets old fast — and expensive. Our college meal plans use cheap ingredients, minimal equipment, and recipes short enough to cook between classes. No oven required for most meals.",
    valueProps: [
      {
        heading: "Dorm-room friendly",
        description:
          "Most meals can be made with a microwave, a hot plate, or a single pan. No oven, no food processor, no kitchen island required.",
      },
      {
        heading: "Under $30/week groceries",
        description:
          "Plans are designed around the cheapest nutritious foods: eggs, rice, beans, frozen vegetables, pasta, and budget proteins like canned tuna and chicken thighs.",
      },
      {
        heading: "15-minute meals",
        description:
          "Most recipes take 15 minutes or less. You have time to eat well even during finals week.",
      },
      {
        heading: "Brain food included",
        description:
          "Plans include omega-3 rich foods, complex carbs for sustained energy, and protein for focus — because your brain needs fuel to study.",
      },
    ],
    sampleMeals: [
      {
        name: "Microwave Egg & Cheese Mug",
        mealType: "breakfast",
        description:
          "Scrambled eggs cooked in a mug in the microwave with shredded cheese and salsa. Done in 3 minutes, zero dishes.",
        prepTime: "5 min",
        tags: ["dorm-friendly", "quick"],
      },
      {
        name: "Tuna Salad Rice Bowl",
        mealType: "lunch",
        description:
          "Canned tuna mixed with mayo, mustard, and diced pickles, served over instant rice with a handful of frozen peas heated in the microwave.",
        prepTime: "10 min",
        tags: ["budget", "dorm-friendly"],
      },
      {
        name: "One-Pan Garlic Chicken & Broccoli",
        mealType: "dinner",
        description:
          "Chicken thigh pieces and broccoli florets cooked in one pan with garlic, soy sauce, and a squeeze of lemon. Serve over rice.",
        prepTime: "20 min",
        tags: ["one-pan", "budget"],
      },
      {
        name: "Pasta Aglio e Olio",
        mealType: "dinner",
        description:
          "Spaghetti tossed with garlic, olive oil, red pepper flakes, and parmesan. Five ingredients, one pot, restaurant-quality flavor.",
        prepTime: "15 min",
        tags: ["budget", "quick"],
      },
      {
        name: "PB&J Energy Bites",
        mealType: "snack",
        description:
          "Rolled oats mixed with peanut butter, honey, and mini chocolate chips, formed into balls. Make a batch Sunday, snack all week.",
        prepTime: "10 min",
        tags: ["meal-prep", "no-cook"],
      },
    ],
    faqs: [
      {
        question: "Can I cook these meals in a dorm room?",
        answer:
          "Most of our college meals are designed for minimal equipment — a microwave, a hot plate, or a single pan. We mark which recipes need an oven or stove so you can skip them if you only have a microwave. Mug meals, no-cook bowls, and microwave recipes are heavily featured.",
      },
      {
        question: "How cheap are these meal plans really?",
        answer:
          "We target under $30 per week for groceries. That's about $4 per day for three meals and a snack. We achieve this by using staples like rice, beans, eggs, pasta, canned tuna, and frozen vegetables — all available at any grocery store or even a convenience store.",
      },
      {
        question: "I don't know how to cook anything — can I still use this?",
        answer:
          "Yes. Our college plans assume you're starting from zero. Recipes include exact steps like 'heat the pan on medium for 2 minutes' rather than assuming you know what 'sautee until translucent' means. If you can boil water and crack an egg, you can make these meals.",
      },
      {
        question: "Can meal planning help me study better?",
        answer:
          "Absolutely. Regular, balanced meals stabilize blood sugar and improve focus. Our plans include complex carbs for sustained energy, protein for alertness, and omega-3s for brain function. Students who eat regular meals consistently perform better academically than those who skip meals or eat erratically.",
      },
    ],
    relatedSlugs: ["meal-plan-on-a-budget", "meal-plan-for-one", "meal-plan-for-beginners"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "quick-30-minute-meal-plan",
    type: "diet",
    title: "Quick 30-Minute Meal Plan",
    metaDescription:
      "Get a weekly meal plan where every recipe takes 30 minutes or less. Fast, balanced dinners with grocery lists included. Try your free plan today.",
    h1: "Quick 30-Minute Meal Plan for Busy Weeknights",
    intro:
      "You don't have an hour to cook dinner every night, and you shouldn't have to. Every recipe in our 30-minute meal plan is designed to go from fridge to table in half an hour or less — including prep. No slow cooker cheats, no 'not including marination time' disclaimers. Just genuinely fast meals that are balanced, satisfying, and varied enough to keep things interesting.",
    valueProps: [
      {
        heading: "Honestly 30 minutes",
        description:
          "We time every recipe including prep, cooking, and plating. When we say 30 minutes, we mean it — no hidden steps, no 'while the oven preheats' tricks.",
      },
      {
        heading: "Weeknight-optimized",
        description:
          "Recipes use common pantry staples, minimal chopping, and one-pan or one-pot methods so cleanup is as fast as cooking.",
      },
      {
        heading: "Nutritionally complete",
        description:
          "Fast doesn't mean nutritionally empty. Every meal includes protein, vegetables, and complex carbs so you're not sacrificing health for speed.",
      },
    ],
    sampleMeals: [
      {
        name: "Avocado Toast with Poached Egg",
        mealType: "breakfast",
        description:
          "Smashed avocado on sourdough toast topped with a poached egg, red pepper flakes, and a squeeze of lemon. Under 10 minutes.",
        prepTime: "10 min",
        tags: ["quick", "high-protein"],
      },
      {
        name: "15-Minute Chicken Quesadilla",
        mealType: "lunch",
        description:
          "Shredded rotisserie chicken with cheese, black beans, and salsa pressed in a flour tortilla until crispy. Ready before the microwave would be.",
        prepTime: "15 min",
        tags: ["quick", "family-friendly"],
      },
      {
        name: "Teriyaki Salmon with Steamed Rice",
        mealType: "dinner",
        description:
          "Salmon fillets glazed with homemade teriyaki sauce, pan-seared in 8 minutes, served over microwave-steamed rice with a side of edamame.",
        prepTime: "20 min",
        tags: ["quick", "omega-3"],
      },
      {
        name: "One-Pan Italian Sausage & Peppers",
        mealType: "dinner",
        description:
          "Sliced Italian sausage cooked with bell peppers and onions in one skillet. Serve in hoagie rolls or over pasta.",
        prepTime: "25 min",
        tags: ["one-pan", "quick"],
      },
      {
        name: "Hummus & Veggie Plate",
        mealType: "snack",
        description:
          "Store-bought hummus with baby carrots, cucumber slices, and pita triangles. Zero cooking, maximum satisfaction.",
        prepTime: "5 min",
        tags: ["no-cook", "quick"],
      },
    ],
    faqs: [
      {
        question: "Are these meals really ready in 30 minutes?",
        answer:
          "Yes. We test every recipe for total time including washing, chopping, cooking, and plating. Some are ready in 15 minutes. The longest take exactly 30. We don't exclude prep time, marination time, or 'bring to room temperature' steps — what you see is what you get.",
      },
      {
        question: "Can fast meals still be healthy?",
        answer:
          "Absolutely. Speed comes from technique, not shortcuts. Stir-frying vegetables, pan-searing fish, and assembling grain bowls are all fast and nutritious. The unhealthy part of fast food is the processed ingredients, not the speed. Our meals use whole, fresh ingredients cooked efficiently.",
      },
      {
        question: "What if I want even faster options?",
        answer:
          "Many of our lunches and breakfasts are 10-15 minutes. We also include no-cook options like grain bowls, wraps, and salads that are ready in 5 minutes. If speed is your top priority, you can mark that in your preferences and we'll lean toward the fastest recipes.",
      },
      {
        question: "Do I need special kitchen equipment for quick cooking?",
        answer:
          "A sharp knife, a good skillet, and a pot for boiling. That's it. Speed in cooking comes from organization and simple techniques, not gadgets. We avoid recipes that require specialty equipment like pressure cookers or air fryers, though both can speed things up further if you have them.",
      },
    ],
    relatedSlugs: ["meal-plan-for-beginners", "meal-plan-for-two", "meal-plan-for-college-students"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
];
