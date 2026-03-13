import type { MealPlanPageData } from "./types";

export const genzExtendedPages: MealPlanPageData[] = [
  {
    slug: "dorm-room-meal-plan",
    type: "diet",
    title: "Dorm Room Meal Plan",
    metaDescription:
      "Get a weekly meal plan you can make with just a microwave and mini fridge. No kitchen needed. Real meals, real nutrition, dorm-room friendly. Try it free.",
    h1: "Dorm Room Meal Plan — No Kitchen, No Problem",
    intro:
      "Your entire kitchen is a microwave, a mini fridge, and maybe a forbidden hot plate. That doesn't mean you're stuck eating instant ramen and granola bars for four years. These meal plans are built for the reality of dorm life — every single recipe works with the equipment you actually have. No oven, no stove, no blender, no excuses.",
    valueProps: [
      {
        heading: "Microwave + mini fridge only",
        description:
          "Every recipe is designed for equipment you already have in your dorm. If it requires a stove or oven, it's not on the list.",
      },
      {
        heading: "Minimal storage, minimal waste",
        description:
          "Plans account for your tiny fridge. Ingredients are shelf-stable or used quickly, so nothing rots in the back of that mini fridge.",
      },
      {
        heading: "Actually tastes good",
        description:
          "These aren't sad desk meals. Mug omelets, loaded quesadillas, rice bowls — real food that happens to be microwaveable.",
      },
    ],
    sampleMeals: [
      {
        name: "Microwave Breakfast Burrito",
        mealType: "breakfast",
        description:
          "Scrambled eggs in a mug, dumped onto a tortilla with shredded cheese and salsa. Rolled up and eaten between classes.",
        prepTime: "5 min",
        tags: ["dorm-friendly", "microwave", "quick"],
      },
      {
        name: "Tuna Cracker Stacks",
        mealType: "lunch",
        description:
          "Canned tuna mixed with mayo and everything bagel seasoning, piled on crackers with a slice of cheese. No cooking at all.",
        prepTime: "5 min",
        tags: ["no-cook", "dorm-friendly", "cheap"],
      },
      {
        name: "Microwave Chicken Quesadilla",
        mealType: "dinner",
        description:
          "Tortilla layered with canned chicken, cheese, and hot sauce, folded and microwaved until melty. Crispy it up with a quick press if you have a pan.",
        prepTime: "7 min",
        tags: ["microwave", "dorm-friendly", "quick"],
      },
      {
        name: "Mug Mac & Cheese",
        mealType: "dinner",
        description:
          "Elbow pasta cooked in a mug with water in the microwave, drained, then stirred with milk, butter, and shredded cheese. Creamy in 10 minutes.",
        prepTime: "10 min",
        tags: ["microwave", "dorm-friendly", "comfort-food"],
      },
      {
        name: "PB Banana Roll-Up",
        mealType: "snack",
        description:
          "Peanut butter spread on a tortilla, a whole banana rolled inside, drizzled with honey. Portable, filling, cheap.",
        prepTime: "3 min",
        tags: ["no-cook", "cheap", "quick"],
      },
    ],
    faqs: [
      {
        question: "Can I really eat well with just a microwave?",
        answer:
          "Yes. Microwaves can cook eggs, steam vegetables, melt cheese, heat proteins, and even make pasta. The key is knowing which foods work well in a microwave and which combinations create actual meals, not just reheated leftovers. Our plans are specifically designed around microwave cooking techniques.",
      },
      {
        question: "What equipment do I need besides a microwave?",
        answer:
          "A microwave-safe mug, a microwave-safe bowl, and a plate. That's it. A can opener helps too. If you have a mini fridge, you can store perishables like cheese, yogurt, and deli meat. Everything else is shelf-stable pantry items.",
      },
      {
        question: "How do I store ingredients in a tiny dorm fridge?",
        answer:
          "Our plans prioritize shelf-stable ingredients — canned tuna, peanut butter, tortillas, rice, crackers — and use perishables sparingly. The fridge items rotate quickly so you're never storing more than a few days' worth of fresh food at a time.",
      },
      {
        question: "Will my RA care about the smells?",
        answer:
          "We avoid recipes that create strong odors — no fish in the microwave, no heavy spice blends. Most of these meals are mild enough to make without your entire floor knowing what you're eating.",
      },
    ],
    relatedSlugs: [
      "meal-plan-for-college-students",
      "meal-plan-for-broke-college-kids",
      "microwave-meal-plan",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "meal-plan-for-broke-college-kids",
    type: "diet",
    title: "Meal Plan for Broke College Kids",
    metaDescription:
      "Eat real meals on under $25/week. Budget meal plans for college students with minimal ingredients and maximum flavor. No dining hall required. Try it free.",
    h1: "Meal Plan for Broke College Kids — Under $25/Week",
    intro:
      "Your bank account has $47 in it and payday is next Friday. We get it. These meal plans are built for the reality of being genuinely broke — not 'I'll skip the avocado toast' broke, but 'I'm choosing between groceries and textbooks' broke. Every meal keeps you fed, full, and functioning on under $25 a week in groceries. No fancy ingredients, no specialty stores, nothing you can't find at any grocery store or dollar store.",
    valueProps: [
      {
        heading: "Under $25/week, for real",
        description:
          "We price every ingredient at standard grocery store rates. Rice, beans, eggs, pasta, frozen veggies, and budget proteins. Nothing costs more than it should.",
      },
      {
        heading: "Minimal ingredients per meal",
        description:
          "Most recipes use 3-5 ingredients. Less to buy, less to waste, less to figure out. Simplicity is the whole strategy.",
      },
      {
        heading: "Actually filling",
        description:
          "Cheap doesn't mean tiny portions. These meals are built around rice, beans, pasta, and eggs — foods that fill you up and keep you full through a 3-hour lecture.",
      },
    ],
    sampleMeals: [
      {
        name: "Peanut Butter Oatmeal",
        mealType: "breakfast",
        description:
          "Instant oatmeal with a big scoop of peanut butter and a drizzle of honey. Under 50 cents, keeps you full until lunch.",
        prepTime: "5 min",
        tags: ["cheap", "quick", "filling"],
      },
      {
        name: "Rice & Black Bean Bowl",
        mealType: "lunch",
        description:
          "White rice topped with seasoned canned black beans, a squeeze of lime, and hot sauce. Costs about 80 cents per bowl.",
        prepTime: "15 min",
        tags: ["cheap", "filling", "vegan"],
      },
      {
        name: "Egg Fried Rice",
        mealType: "dinner",
        description:
          "Leftover rice stir-fried with scrambled eggs, frozen peas, soy sauce, and garlic powder. Restaurant vibes on a dollar-store budget.",
        prepTime: "10 min",
        tags: ["cheap", "quick", "leftover-transform"],
      },
      {
        name: "Pasta with Butter & Parmesan",
        mealType: "dinner",
        description:
          "Spaghetti tossed with butter, garlic powder, and a generous pile of parmesan. Five ingredients, one pot, deeply satisfying.",
        prepTime: "12 min",
        tags: ["cheap", "quick", "comfort-food"],
      },
      {
        name: "Toast with Peanut Butter & Banana",
        mealType: "snack",
        description:
          "Two slices of bread toasted, spread with peanut butter, topped with sliced banana. About 30 cents and genuinely good.",
        prepTime: "3 min",
        tags: ["cheap", "no-cook", "quick"],
      },
    ],
    faqs: [
      {
        question: "Is $25/week actually realistic?",
        answer:
          "Yes, if you stick to staples. A bag of rice ($3), a can of beans ($1), a dozen eggs ($3), a loaf of bread ($2), peanut butter ($3), pasta ($1), frozen veggies ($2), and a few seasonings gets you through a week. Our plans mix these staples into varied meals so you're not eating the same thing every day.",
      },
      {
        question: "Where should I shop on this budget?",
        answer:
          "Aldi, Walmart, dollar stores, and ethnic grocery stores tend to have the best prices on staples. Buy store brands, not name brands. Frozen vegetables are just as nutritious as fresh and cost a fraction of the price. Avoid pre-cut, pre-washed, or single-serving anything.",
      },
      {
        question: "Can I get enough nutrition on $25/week?",
        answer:
          "Absolutely. Eggs, beans, rice, peanut butter, and frozen vegetables cover protein, fiber, vitamins, and healthy fats. Our plans are designed to hit nutritional basics even at the lowest budget. You're eating better than most people surviving on fast food and energy drinks.",
      },
      {
        question: "What if I only have a microwave?",
        answer:
          "Check out our dorm room meal plan for microwave-only recipes. Many of the meals here work in a microwave too — oatmeal, rice bowls, scrambled eggs in a mug. We mark which recipes are microwave-friendly.",
      },
    ],
    relatedSlugs: [
      "meal-plan-for-college-students",
      "meal-plan-on-a-budget",
      "5-dollar-meal-plan",
      "dorm-room-meal-plan",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "post-graduation-meal-plan",
    type: "diet",
    title: "Post-Graduation Meal Plan",
    metaDescription:
      "Just graduated? Learn to cook real meals in your first kitchen. Easy recipes for new adults with grocery lists and zero assumed skill. Try it free today.",
    h1: "Post-Graduation Meal Plan — Your First Kitchen, Your First Real Meals",
    intro:
      "You have a real kitchen for the first time. There's a stove with four burners and you've only ever used a microwave. The dining hall is gone, your parents aren't cooking for you, and suddenly 'what's for dinner' is your problem every single night. These meal plans are designed for the transition from college eating to actual adult cooking — simple recipes that teach you fundamentals while feeding you well. No culinary school required.",
    valueProps: [
      {
        heading: "Beginner-proof recipes",
        description:
          "Every recipe explains the why, not just the what. You'll learn to sear, simmer, and season — actual cooking skills you'll use forever.",
      },
      {
        heading: "Grocery store survival guide",
        description:
          "Your plan comes with a grocery list organized by store section. No wandering the aisles wondering what 'shallots' are or where to find them.",
      },
      {
        heading: "Impresses without trying",
        description:
          "When you invite people over, these meals look like you know what you're doing. Lemon herb chicken, pasta from scratch, stir-fry that pops — basic skills, impressive results.",
      },
    ],
    sampleMeals: [
      {
        name: "Avocado Toast with Everything Seasoning",
        mealType: "breakfast",
        description:
          "Mashed avocado on toasted sourdough with everything bagel seasoning, red pepper flakes, and a squeeze of lemon. The millennial rite of passage.",
        prepTime: "5 min",
        tags: ["quick", "no-cook", "beginner"],
      },
      {
        name: "Chicken Caesar Wrap",
        mealType: "lunch",
        description:
          "Rotisserie chicken (the adult cheat code) with romaine, parmesan, and Caesar dressing in a flour tortilla. Easy, balanced, portable.",
        prepTime: "8 min",
        tags: ["quick", "no-cook", "beginner"],
      },
      {
        name: "Lemon Herb Chicken Thighs",
        mealType: "dinner",
        description:
          "Chicken thighs seasoned with lemon, garlic, and dried herbs, roasted in the oven until golden. Your first real dinner party dish.",
        prepTime: "35 min",
        tags: ["beginner", "skill-builder", "impressive"],
      },
      {
        name: "One-Pot Pasta Primavera",
        mealType: "dinner",
        description:
          "Penne cooked with zucchini, bell peppers, cherry tomatoes, and garlic in one pot. Finished with parmesan and olive oil. One pot, one skill level: beginner.",
        prepTime: "20 min",
        tags: ["one-pot", "beginner", "quick"],
      },
      {
        name: "Yogurt with Granola & Berries",
        mealType: "snack",
        description:
          "Greek yogurt topped with granola and whatever berries were on sale. Simple, high protein, and you can eat it standing in front of the fridge.",
        prepTime: "3 min",
        tags: ["no-cook", "quick", "healthy"],
      },
    ],
    faqs: [
      {
        question: "I've never cooked before — is this too advanced?",
        answer:
          "Not at all. These plans assume you know how to boil water and turn on a stove. Every recipe includes detailed steps, temperatures, and visual cues (like 'cook until the edges turn golden'). You'll build skills gradually — week one is simpler than week four.",
      },
      {
        question: "What kitchen equipment do I need to start?",
        answer:
          "A decent skillet, a pot for boiling, a baking sheet, a cutting board, a knife, and a spatula. That's your starter kit. Skip the gadgets — you don't need an air fryer, instant pot, or stand mixer yet. Buy quality basics and add tools as you learn what you actually use.",
      },
      {
        question: "How much should I budget for groceries as a new grad?",
        answer:
          "Plan for $50-80 per week for one person eating three meals a day. That's significantly less than eating out, which most new grads default to. Our plans keep costs reasonable by using versatile ingredients across multiple meals.",
      },
      {
        question: "Will these plans actually teach me to cook?",
        answer:
          "Yes. Each week builds on the previous one. You'll start with simple assembly meals and one-pot recipes, then graduate to searing proteins, making sauces, and balancing flavors. After a month, you'll be cooking without thinking about it.",
      },
    ],
    relatedSlugs: [
      "meal-plan-for-beginners",
      "meal-plan-for-one",
      "meal-plan-for-college-students",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "meal-plan-for-night-shift",
    type: "diet",
    title: "Night Shift Meal Plan",
    metaDescription:
      "Meal plan designed for night shift workers. Pre-made meals, smart energy management, and recipes that work on a flipped schedule. Try your free plan today.",
    h1: "Night Shift Meal Plan — Eat Right When Your Schedule Is Upside Down",
    intro:
      "When you're eating dinner at 2 AM and trying to sleep when the sun is out, normal meal plans don't work. Your body doesn't know when it's hungry, the vending machine is the only thing open, and cooking at midnight feels absurd. These plans are built around shift work — pre-made meals you can grab, energy-sustaining foods that don't crash you at 4 AM, and a prep schedule that works with your actual life.",
    valueProps: [
      {
        heading: "Timed for your shift",
        description:
          "Meals are structured around a night shift schedule — pre-shift fuel, mid-shift sustenance, and post-shift wind-down food that won't keep you awake.",
      },
      {
        heading: "Batch prep, grab, and go",
        description:
          "Most meals are prepped on your days off and stored in containers. When it's 11 PM and your shift starts, you grab a container, not a pan.",
      },
      {
        heading: "No energy crashes",
        description:
          "Plans avoid sugar spikes and heavy carb loads during shift hours. Steady proteins and complex carbs keep you alert without the 3 AM crash.",
      },
    ],
    sampleMeals: [
      {
        name: "Overnight Oats with Protein",
        mealType: "breakfast",
        description:
          "Oats soaked overnight with milk, protein powder, chia seeds, and banana slices. Grab from the fridge whenever you wake up — no cooking required.",
        prepTime: "5 min",
        tags: ["meal-prep", "no-cook", "grab-and-go"],
      },
      {
        name: "Turkey & Hummus Wrap",
        mealType: "lunch",
        description:
          "Deli turkey, hummus, spinach, and shredded carrots in a whole wheat wrap. Pre-made and fridge-stable for mid-shift eating.",
        prepTime: "5 min",
        tags: ["meal-prep", "no-cook", "grab-and-go"],
      },
      {
        name: "Chicken Burrito Bowl (Prepped)",
        mealType: "dinner",
        description:
          "Seasoned chicken, cilantro lime rice, black beans, corn, and salsa assembled in a container. Microwave at work or eat cold.",
        prepTime: "15 min",
        tags: ["meal-prep", "microwave", "filling"],
      },
      {
        name: "Slow Cooker Beef Stew",
        mealType: "dinner",
        description:
          "Set it before you sleep, wake up to tender beef with potatoes, carrots, and onions in rich broth. Portion into containers for the week.",
        prepTime: "20 min",
        tags: ["batch-cook", "meal-prep", "comfort-food"],
      },
      {
        name: "Trail Mix & Apple",
        mealType: "snack",
        description:
          "A baggie of mixed nuts, dark chocolate chips, and dried cranberries with a whole apple. Desk-friendly, no refrigeration needed.",
        prepTime: "3 min",
        tags: ["no-cook", "grab-and-go", "energy"],
      },
    ],
    faqs: [
      {
        question: "When should I eat on a night shift schedule?",
        answer:
          "Eat your main meal before your shift starts, a moderate meal mid-shift, and a light meal when you get home before sleeping. Avoid heavy eating within 2 hours of sleep. Our plans structure meals around these windows so you're never guessing what to eat when.",
      },
      {
        question: "How do I meal prep when my schedule is chaotic?",
        answer:
          "Use your days off for batch cooking. Spend 1-2 hours making 4-5 days of meals, portion them into containers, and stack them in the fridge. During your work stretch, all you do is grab and reheat. The prep day is the only day you actually cook.",
      },
      {
        question: "What foods help me stay awake during night shift?",
        answer:
          "Lean proteins (chicken, turkey, eggs), complex carbs (brown rice, sweet potatoes), and healthy fats (nuts, avocado) provide steady energy. Avoid sugary snacks and heavy carb-only meals — they cause a spike and crash cycle that makes 4 AM brutal.",
      },
      {
        question: "What should I eat before sleeping after a night shift?",
        answer:
          "Something light with tryptophan-containing foods: a small bowl of oatmeal, a banana, warm milk, or a light turkey sandwich. Avoid caffeine, heavy meals, and spicy food within 3 hours of your planned sleep time.",
      },
    ],
    relatedSlugs: [
      "meal-plan-for-remote-workers",
      "quick-30-minute-meal-plan",
      "meal-plan-for-one",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "meal-plan-for-remote-workers",
    type: "diet",
    title: "Remote Worker Meal Plan",
    metaDescription:
      "Stop ordering UberEats for lunch. Get a WFH meal plan with quick lunches, desk-friendly snacks, and dinners that don't take all evening. Try it free today.",
    h1: "Remote Worker Meal Plan — Stop Ordering UberEats for Lunch",
    intro:
      "Working from home was supposed to make eating easier. Instead, you're ordering delivery for lunch because you 'don't have time to cook' even though your kitchen is ten feet away. Sound familiar? These plans give you quick WFH lunches that take less time than waiting for a delivery driver, plus dinners that don't eat into your evening. Your kitchen is right there — you might as well use it.",
    valueProps: [
      {
        heading: "Lunches faster than delivery",
        description:
          "Every lunch recipe takes 10-15 minutes. That's less time than opening an app, scrolling menus, ordering, and waiting 45 minutes for a driver.",
      },
      {
        heading: "No afternoon slump",
        description:
          "Plans avoid heavy, carb-loaded lunches that put you to sleep at 2 PM. Balanced meals keep you productive through your afternoon calls.",
      },
      {
        heading: "Clear work-life boundary",
        description:
          "Cooking dinner becomes your signal that the workday is over. Step away from the laptop, make something real, and actually stop working.",
      },
    ],
    sampleMeals: [
      {
        name: "Green Smoothie",
        mealType: "breakfast",
        description:
          "Spinach, frozen banana, protein powder, almond milk, and a tablespoon of peanut butter blended smooth. Drink it during your first meeting.",
        prepTime: "5 min",
        tags: ["quick", "healthy", "wfh"],
      },
      {
        name: "Mediterranean Pita Plate",
        mealType: "lunch",
        description:
          "Warm pita with hummus, cucumber, cherry tomatoes, olives, and feta. Assembled in 5 minutes, eaten at your desk without shame.",
        prepTime: "7 min",
        tags: ["no-cook", "quick", "wfh"],
      },
      {
        name: "Spicy Chicken Stir-Fry",
        mealType: "dinner",
        description:
          "Chicken breast strips with broccoli, snap peas, and bell pepper in a soy-sriracha sauce over rice. Your 'I'm done working' ritual.",
        prepTime: "20 min",
        tags: ["quick", "balanced", "skill-builder"],
      },
      {
        name: "Sheet Pan Sausage & Vegetables",
        mealType: "dinner",
        description:
          "Sliced sausage with sweet potato, Brussels sprouts, and red onion roasted on a single sheet pan. Throw it in the oven during your last meeting.",
        prepTime: "30 min",
        tags: ["one-pan", "easy", "hands-off"],
      },
      {
        name: "Apple & Almond Butter",
        mealType: "snack",
        description:
          "A sliced apple with almond butter for dipping. The 3 PM snack that doesn't require leaving your house or opening DoorDash.",
        prepTime: "3 min",
        tags: ["no-cook", "quick", "wfh"],
      },
    ],
    faqs: [
      {
        question: "How do I stop ordering delivery every day?",
        answer:
          "The trick is having a plan and prepped ingredients. When you know exactly what you're making for lunch and all the ingredients are ready, cooking takes 10 minutes. That's faster and cheaper than delivery. Our plans remove the decision fatigue that makes you reach for the delivery app.",
      },
      {
        question: "What if I have back-to-back meetings?",
        answer:
          "Our plans include no-cook assembly meals and batch-prep options for busy days. Make a big grain bowl on Sunday and portion it out. On meeting-heavy days, lunch is grabbing a container from the fridge. Zero cooking required.",
      },
      {
        question: "How much money will I save by not ordering delivery?",
        answer:
          "The average lunch delivery costs $15-20 including fees and tip. That's $75-100 per week on lunch alone. Our meal plans cost $40-60 per week for all meals. You could save $200+ per month by cooking your own WFH lunches.",
      },
      {
        question: "Can I eat lunch at my desk without making a mess?",
        answer:
          "Yes. We include plenty of desk-friendly meals — wraps, grain bowls, sandwiches, and salads — that are easy to eat without dripping sauce on your keyboard. We save the messier recipes for dinner when you can actually sit at a table.",
      },
    ],
    relatedSlugs: [
      "quick-30-minute-meal-plan",
      "meal-plan-for-one",
      "meal-plan-for-night-shift",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "5-dollar-meal-plan",
    type: "diet",
    title: "$5 Meal Plan",
    metaDescription:
      "Every meal under $5 per serving. Budget meal plans with real recipes, real portions, and a grocery list that won't break the bank. Try your free plan today.",
    h1: "$5 Meal Plan — Every Single Meal Under $5 Per Serving",
    intro:
      "Five dollars per meal. Not per ingredient, not per day — per complete, satisfying meal. That's the rule, and every recipe in this plan follows it. No tricks, no 'if you already have olive oil' asterisks. We count every ingredient, price it at standard grocery rates, and keep every serving under $5. Eating affordably doesn't mean eating badly — it means eating smart.",
    valueProps: [
      {
        heading: "Truly under $5 per serving",
        description:
          "We price every ingredient, including oil, salt, and spices. The per-serving cost is honest, not the 'pantry staples not included' math other plans use.",
      },
      {
        heading: "Full meals, not snacks",
        description:
          "Every meal is a complete plate — protein, carb, and vegetable. You're not eating a bowl of rice and calling it dinner.",
      },
      {
        heading: "Weekly grocery list under $60",
        description:
          "Your total weekly grocery bill for three meals a day stays under $60. That's less than two restaurant meals for the price of 21 home-cooked ones.",
      },
    ],
    sampleMeals: [
      {
        name: "Banana Pancakes",
        mealType: "breakfast",
        description:
          "Two-ingredient pancakes made with mashed banana and eggs, cooked in a skillet. Top with a drizzle of maple syrup. Cost per serving: about $1.20.",
        prepTime: "10 min",
        tags: ["cheap", "quick", "beginner"],
      },
      {
        name: "Black Bean Tacos",
        mealType: "lunch",
        description:
          "Seasoned canned black beans in corn tortillas with shredded cabbage, lime, and hot sauce. Three tacos for under $2.",
        prepTime: "10 min",
        tags: ["cheap", "quick", "vegan"],
      },
      {
        name: "Spaghetti with Meat Sauce",
        mealType: "dinner",
        description:
          "Ground beef browned with canned crushed tomatoes, garlic, and Italian seasoning over spaghetti. A full plate for about $3.50.",
        prepTime: "20 min",
        tags: ["cheap", "filling", "family-friendly"],
      },
      {
        name: "Chicken Thigh & Roasted Potatoes",
        mealType: "dinner",
        description:
          "Bone-in chicken thigh (the cheapest cut) roasted with cubed potatoes and frozen green beans. A complete dinner for $4.",
        prepTime: "35 min",
        tags: ["cheap", "one-pan", "filling"],
      },
      {
        name: "Popcorn with Nutritional Yeast",
        mealType: "snack",
        description:
          "Air-popped or stovetop popcorn dusted with nutritional yeast and a pinch of salt. Filling, savory, and about 25 cents per bowl.",
        prepTime: "5 min",
        tags: ["cheap", "quick", "vegan"],
      },
    ],
    faqs: [
      {
        question: "How do you keep every meal under $5?",
        answer:
          "Three strategies: use the cheapest cuts of meat (chicken thighs, ground beef, canned tuna), build meals around bulk staples (rice, pasta, beans, potatoes), and buy produce that's in season or frozen. We also design plans so ingredients overlap between meals, reducing waste and cost.",
      },
      {
        question: "Are $5 meals actually nutritious?",
        answer:
          "Yes. Beans, eggs, chicken thighs, frozen vegetables, and whole grains are some of the most nutritious foods you can buy and they're all budget-friendly. Expensive doesn't mean healthy — some of the most nutrient-dense foods are the cheapest.",
      },
      {
        question: "Does the $5 include everything, even spices?",
        answer:
          "Yes. We amortize spice costs across uses (a jar of cumin lasts months) and include every ingredient in the calculation. The only thing we don't count is water. Our cost estimates are conservative and based on standard grocery store prices.",
      },
      {
        question: "Can I feed a family on $5 per meal?",
        answer:
          "The $5 is per serving. For a family of four, that's $20 per meal or about $420 per month for three meals a day. That's well below the USDA's 'thrifty' food plan estimate. For even tighter budgets, check out our broke college kids plan.",
      },
    ],
    relatedSlugs: [
      "meal-plan-on-a-budget",
      "meal-plan-for-broke-college-kids",
      "meal-plan-for-family-of-4",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "microwave-meal-plan",
    type: "diet",
    title: "Microwave Meal Plan",
    metaDescription:
      "A full weekly meal plan where every recipe is made in the microwave. Perfect for dorms, offices, or kitchens without a stove. Try your free plan today.",
    h1: "Microwave Meal Plan — Every Meal, One Appliance",
    intro:
      "Whether you're in a dorm, a hotel room, an office breakroom, or a kitchen where the stove doesn't work, the microwave is your whole kitchen. Good news: it can do a lot more than reheat pizza. These plans use the microwave for everything — scrambled eggs, steamed vegetables, pasta, rice, even mug cakes. Real meals, real nutrition, one appliance.",
    valueProps: [
      {
        heading: "100% microwave cooking",
        description:
          "Every single recipe uses only a microwave. No 'finish under the broiler' steps, no 'sear in a pan first' cheats. If it's in the plan, it's microwaveable.",
      },
      {
        heading: "Office and dorm friendly",
        description:
          "Recipes work in any standard microwave — the one in your breakroom, your dorm, or your Airbnb. No wattage requirements or specialty equipment.",
      },
      {
        heading: "Faster than takeout",
        description:
          "Most meals are ready in 5-10 minutes. By the time you'd have the delivery app open and ordered, you could be eating.",
      },
    ],
    sampleMeals: [
      {
        name: "Microwave Scrambled Eggs",
        mealType: "breakfast",
        description:
          "Eggs whisked with milk and cheese in a microwave-safe bowl, cooked in 90-second intervals and stirred until fluffy. Add toast on the side.",
        prepTime: "5 min",
        tags: ["microwave", "quick", "beginner"],
      },
      {
        name: "Loaded Baked Potato",
        mealType: "lunch",
        description:
          "A whole potato microwaved for 8 minutes until tender, split open and loaded with cheese, sour cream, and chives. A complete meal from one potato.",
        prepTime: "12 min",
        tags: ["microwave", "cheap", "filling"],
      },
      {
        name: "Microwave Chicken & Broccoli Rice Bowl",
        mealType: "dinner",
        description:
          "Instant rice, frozen broccoli, and pre-cooked chicken strips all heated in the microwave, topped with teriyaki sauce and sesame seeds.",
        prepTime: "8 min",
        tags: ["microwave", "quick", "balanced"],
      },
      {
        name: "Mug Pasta with Marinara",
        mealType: "dinner",
        description:
          "Pasta cooked in a mug with water in the microwave, drained, and mixed with jarred marinara and a sprinkle of parmesan. Italian dinner, one mug.",
        prepTime: "12 min",
        tags: ["microwave", "cheap", "dorm-friendly"],
      },
      {
        name: "Microwave Mug Brownie",
        mealType: "snack",
        description:
          "Cocoa powder, flour, sugar, oil, and milk mixed in a mug and microwaved for 90 seconds. Warm, fudgy, and ready before you can say 'dessert.'",
        prepTime: "5 min",
        tags: ["microwave", "quick", "treat"],
      },
    ],
    faqs: [
      {
        question: "Can you really cook full meals in a microwave?",
        answer:
          "Yes. Microwaves cook eggs, steam vegetables, heat grains, melt cheese, and warm proteins. The key is learning which foods microwave well (potatoes, eggs, rice, steamed veggies) and which don't (anything you want crispy). Our plans stick to foods that taste great when microwaved.",
      },
      {
        question: "Are microwave meals healthy?",
        answer:
          "Microwaving is actually one of the healthiest cooking methods because it preserves more nutrients than boiling or frying. Steamed vegetables, scrambled eggs, and baked potatoes are all nutritious foods that cook perfectly in a microwave.",
      },
      {
        question: "What containers do I need?",
        answer:
          "A large microwave-safe mug, a microwave-safe bowl with a lid or plate to cover it, and a microwave-safe plate. That's your complete kitchen. Avoid metal and non-microwave-safe plastics. Glass containers work best.",
      },
      {
        question: "Can I meal prep microwave meals?",
        answer:
          "Absolutely. Prep ingredients on your day off — chop vegetables, portion rice, pre-cook proteins — and store in containers. During the week, assembly and microwaving takes 5-10 minutes. It's the fastest meal prep system there is.",
      },
    ],
    relatedSlugs: [
      "dorm-room-meal-plan",
      "meal-plan-for-college-students",
      "quick-30-minute-meal-plan",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "meal-plan-for-depression",
    type: "diet",
    title: "Meal Plan for When You're Not Doing Great",
    metaDescription:
      "Ultra-low effort meals for days when cooking feels impossible. No judgment, no complicated recipes. Just gentle, nourishing food. Try your free plan today.",
    h1: "Meal Plan for When Cooking Feels Impossible",
    intro:
      "Some days, getting out of bed is the accomplishment. Making a meal feels like climbing a mountain. The idea of following a recipe with 12 steps and 15 ingredients is laughable when you can barely open the fridge. This plan is for those days, those weeks, those stretches. Every meal here is designed to be as low-effort as possible — assembly only, minimal dishes, things you can eat cold or standing up or back in bed. No judgment, no pep talks, no 'just try harder.' Just food that's easy enough to actually eat.",
    valueProps: [
      {
        heading: "Assembly, not cooking",
        description:
          "Most meals are assembled, not cooked. Open a can, spread something on bread, pour cereal. If it requires more than 3 steps, it's not in this plan.",
      },
      {
        heading: "No guilt, no rules",
        description:
          "Eating a sandwich for dinner is fine. Cereal at 4 PM is fine. The goal is eating something — anything — and that counts. These plans meet you where you are.",
      },
      {
        heading: "Gentle nutrition",
        description:
          "When you can manage it, these meals sneak in some protein and vitamins without requiring effort. But even the simplest option — crackers and cheese — is better than not eating.",
      },
    ],
    sampleMeals: [
      {
        name: "Cereal with Banana",
        mealType: "breakfast",
        description:
          "Your favorite cereal with milk and a banana broken into pieces on top. No cooking, minimal dishes, and you can eat it wherever you are.",
        prepTime: "2 min",
        tags: ["no-effort", "no-cook", "gentle"],
      },
      {
        name: "Peanut Butter Sandwich",
        mealType: "lunch",
        description:
          "Two slices of bread, peanut butter, and honey or jelly if you have it. The meal that's always there for you, no matter what.",
        prepTime: "2 min",
        tags: ["no-effort", "no-cook", "gentle"],
      },
      {
        name: "Cheese Quesadilla",
        mealType: "dinner",
        description:
          "A tortilla with shredded cheese, folded and microwaved for 45 seconds. Dip in salsa if you have it. That's dinner, and it's enough.",
        prepTime: "3 min",
        tags: ["no-effort", "microwave", "gentle"],
      },
      {
        name: "Frozen Meal, Upgraded",
        mealType: "dinner",
        description:
          "A frozen meal you actually like, heated up and eaten on a plate if you can manage it. Add hot sauce or cheese if you want. No shame in frozen dinners.",
        prepTime: "5 min",
        tags: ["no-effort", "microwave", "gentle"],
      },
      {
        name: "Yogurt with Whatever",
        mealType: "snack",
        description:
          "A cup of yogurt eaten with a spoon. Add granola, fruit, or honey if you have the energy. Plain is also perfectly fine.",
        prepTime: "1 min",
        tags: ["no-effort", "no-cook", "gentle"],
      },
    ],
    faqs: [
      {
        question: "Is it okay to eat this simply?",
        answer:
          "Yes. Eating something is always better than eating nothing. A peanut butter sandwich has protein, fat, and carbs. Cereal with milk has calcium and vitamins. Yogurt has protein and probiotics. These are real foods that nourish your body, and they count as meals even if they don't look like a cooking show.",
      },
      {
        question: "What if I can't even go to the grocery store?",
        answer:
          "Grocery delivery exists for exactly this reason. Our plans include a simple list of shelf-stable items — peanut butter, bread, cereal, canned soup, crackers, cheese — that you can order online. Stock up on these basics when you have a better day, and they'll be there when you need them.",
      },
      {
        question: "What if I forget to eat?",
        answer:
          "Set a gentle phone alarm for mealtimes — not to pressure yourself, but as a quiet reminder. Keep grab-and-go foods visible: a banana on the counter, granola bars by the bed, crackers on your desk. Making food visible and accessible removes the barrier of having to think about it.",
      },
      {
        question: "When should I talk to someone about how I'm feeling?",
        answer:
          "If getting through the day feels hard most days, talking to a doctor or therapist can help. This meal plan is not a substitute for professional support — it's just here to make one part of your day a little easier. The 988 Suicide and Crisis Lifeline (call or text 988) is available 24/7 if you need someone to talk to right now.",
      },
    ],
    relatedSlugs: [
      "meal-plan-for-adhd",
      "meal-plan-for-one",
      "quick-30-minute-meal-plan",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "meal-plan-for-adhd",
    type: "diet",
    title: "ADHD-Friendly Meal Plan",
    metaDescription:
      "Meal plans for when focus is tough. Simple recipes, forgiving timing, hard to mess up, easy to remember. No 20-step recipes. Try your free plan today.",
    h1: "ADHD-Friendly Meal Plan — Simple, Forgiving, Hard to Mess Up",
    intro:
      "You put water on to boil and then forgot about it for 45 minutes. You bought groceries with great intentions and found them wilted a week later. You've abandoned more half-cooked meals than you've finished. None of that is a personal failing — your brain just works differently, and most recipes aren't designed for how you actually function. These plans are. Short ingredient lists, forgiving timing (nothing burns if you walk away for a few minutes), and meals that don't require sustained attention. If you get distracted, dinner still turns out fine.",
    valueProps: [
      {
        heading: "Forgiving timing",
        description:
          "Recipes are designed so that overcooking by 5 minutes doesn't ruin anything. Stews, sheet pan meals, and oven recipes that wait for you, not the other way around.",
      },
      {
        heading: "Short ingredient lists",
        description:
          "Most meals use 4-6 ingredients. Less to buy, less to forget, less to chop. The cognitive load of cooking is cut in half.",
      },
      {
        heading: "Hard to mess up",
        description:
          "No precise temperatures, no 'stir constantly for 3 minutes,' no delicate sauces. These meals are sturdy. They work even when your attention doesn't.",
      },
    ],
    sampleMeals: [
      {
        name: "Overnight Oats (Prep & Forget)",
        mealType: "breakfast",
        description:
          "Oats, milk, and toppings thrown in a jar before bed. Wake up, eat. No timers, no cooking, no way to mess it up.",
        prepTime: "5 min",
        tags: ["no-cook", "forgiving", "adhd-friendly"],
      },
      {
        name: "Deli Meat & Cheese Roll-Ups",
        mealType: "lunch",
        description:
          "Sliced turkey or ham wrapped around cheese sticks with mustard. No bread to go stale, no assembly required, eaten in 3 minutes.",
        prepTime: "3 min",
        tags: ["no-cook", "no-effort", "adhd-friendly"],
      },
      {
        name: "Sheet Pan Chicken Fajitas",
        mealType: "dinner",
        description:
          "Sliced chicken and peppers tossed with fajita seasoning on a sheet pan. Roast at 400 for 20 minutes. If you forget and it's 25 minutes, still good.",
        prepTime: "10 min",
        tags: ["one-pan", "forgiving", "adhd-friendly"],
      },
      {
        name: "Dump-and-Go Chili",
        mealType: "dinner",
        description:
          "Canned beans, canned tomatoes, ground beef, and chili seasoning dumped in a pot. Simmer for as long as you remember — 20 minutes or 2 hours, it only gets better.",
        prepTime: "10 min",
        tags: ["forgiving", "batch-cook", "adhd-friendly"],
      },
      {
        name: "String Cheese & Crackers",
        mealType: "snack",
        description:
          "String cheese and a handful of crackers. No prep, no dishes, no decisions. It's there when you remember to eat.",
        prepTime: "1 min",
        tags: ["no-cook", "no-effort", "adhd-friendly"],
      },
    ],
    faqs: [
      {
        question: "Why is cooking so hard with ADHD?",
        answer:
          "Cooking requires executive function skills that ADHD brains struggle with: planning ahead, sequencing steps, monitoring timing, and sustaining attention. It's not laziness — it's a genuine neurological challenge. Our plans reduce the executive function demands by simplifying every step, using forgiving recipes, and minimizing decisions.",
      },
      {
        question: "What if I forget about food on the stove?",
        answer:
          "Our plans favor oven and slow cooker recipes over stovetop cooking for exactly this reason. Oven meals are much harder to burn, and slow cooker meals literally can't be overcooked. We also include no-cook and microwave options for days when using the stove feels risky.",
      },
      {
        question: "How do I remember to eat regularly?",
        answer:
          "Visual cues and routines help more than willpower. Keep snacks visible on the counter, set phone alarms for meals, and pair eating with something you already do (coffee = breakfast, closing laptop = dinner). Our plans include grab-and-go snacks you can keep in sight.",
      },
      {
        question: "What about grocery shopping with ADHD?",
        answer:
          "Our grocery lists are short, organized by store section, and designed for one trip. Use the list on your phone so you don't forget it at home. Many of our ingredients are shelf-stable, so you can stock up on good days and coast on hard ones. Online grocery ordering is also a great option.",
      },
    ],
    relatedSlugs: [
      "meal-plan-for-depression",
      "meal-plan-for-beginners",
      "quick-30-minute-meal-plan",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "social-media-detox-meal-plan",
    type: "diet",
    title: "Social Media Detox Meal Plan",
    metaDescription:
      "Cook instead of scroll. A meal plan designed for mindful eating, phone-free dinners, and recipes that keep your hands busy. Try your free plan today.",
    h1: "Social Media Detox Meal Plan — Cook Instead of Scroll",
    intro:
      "You pick up your phone to check the time and 40 minutes later you're watching a stranger make a pasta dish you'll never cook. What if you actually made that pasta instead? This meal plan is designed to replace screen time with kitchen time — hands-on recipes that keep you engaged, meals meant to be eaten at a table without a phone, and cooking projects that are more satisfying than any feed. It's not about restriction. It's about doing something real with your hands and eating the result.",
    valueProps: [
      {
        heading: "Hands-on cooking",
        description:
          "Recipes that keep your hands busy — kneading dough, chopping vegetables, stirring risotto. Hard to scroll when your hands are covered in flour.",
      },
      {
        heading: "Phone-free dinner rituals",
        description:
          "Each dinner is designed to be a moment. Set the table, plate the food, sit down. The meal is the activity, not background noise.",
      },
      {
        heading: "Satisfying process",
        description:
          "The cooking itself is the point. Watching bread rise, smelling garlic hit a hot pan, assembling something from scratch — it's more rewarding than any notification.",
      },
    ],
    sampleMeals: [
      {
        name: "Homemade Granola",
        mealType: "breakfast",
        description:
          "Oats, honey, coconut oil, and nuts mixed by hand, spread on a sheet pan, and baked until golden and crunchy. Your kitchen smells incredible and you made it yourself.",
        prepTime: "10 min",
        tags: ["hands-on", "mindful", "batch-cook"],
      },
      {
        name: "Hand-Rolled Sushi Bowl",
        mealType: "lunch",
        description:
          "Sushi rice, sliced avocado, cucumber, crab stick, edamame, and spicy mayo arranged in a bowl. The assembly is meditative, the eating is satisfying.",
        prepTime: "20 min",
        tags: ["hands-on", "mindful", "fresh"],
      },
      {
        name: "Homemade Pasta with Brown Butter",
        mealType: "dinner",
        description:
          "Flour, eggs, and salt kneaded into dough, rolled, and cut into fettuccine. Tossed in brown butter with sage. The process takes an hour and it's worth every minute.",
        prepTime: "60 min",
        tags: ["hands-on", "project", "impressive"],
      },
      {
        name: "Stir-Fry from Scratch",
        mealType: "dinner",
        description:
          "All the chopping, all the sizzling, all the tossing. Vegetables and protein cut by hand, cooked in a blazing hot wok with homemade sauce. Active cooking, no dead time.",
        prepTime: "25 min",
        tags: ["hands-on", "active-cooking", "quick"],
      },
      {
        name: "Fruit & Cheese Plate",
        mealType: "snack",
        description:
          "Sliced apple, grapes, a few cubes of cheese, and some crackers arranged on a plate. Take your time arranging it. Eat it slowly. That's the whole point.",
        prepTime: "5 min",
        tags: ["mindful", "no-cook", "ritual"],
      },
    ],
    faqs: [
      {
        question: "How does cooking help with a social media detox?",
        answer:
          "Cooking occupies your hands, engages your senses, and produces a tangible result. It replaces the dopamine loop of scrolling with a slower, more satisfying kind of reward. You can't check your phone when you're kneading dough or flipping a stir-fry. And at the end, you have something real to show for your time.",
      },
      {
        question: "What if I'm not a good cook?",
        answer:
          "The point isn't perfection — it's presence. Even a simple meal made with attention feels different from food eaten while scrolling. Our plans range from simple assembly meals to more involved projects, so you can start wherever you are. The cooking itself is the activity.",
      },
      {
        question: "Do I have to cook every meal from scratch?",
        answer:
          "No. Breakfasts and lunches are quick and simple. The hands-on, phone-free focus is mainly on dinner — one intentional meal a day where you put the phone down, cook something, and eat it at a table. The rest of the day is normal.",
      },
      {
        question: "Can I listen to music or a podcast while cooking?",
        answer:
          "Absolutely. The goal is to replace mindless scrolling, not to sit in silence. Put on an album, listen to a podcast, or cook with someone else. Just keep the phone out of your hands and off the counter. A Bluetooth speaker in the kitchen is a great investment.",
      },
    ],
    relatedSlugs: [
      "meal-plan-for-beginners",
      "meal-plan-for-one",
      "post-graduation-meal-plan",
      "meal-plan-for-two",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
];
