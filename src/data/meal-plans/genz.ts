import type { MealPlanPageData } from "./types";

export const genzPages: MealPlanPageData[] = [
  {
    slug: "meal-plan-for-first-apartment",
    type: "diet",
    title: "First Apartment Meal Plan",
    metaDescription:
      "Your first apartment meal plan with easy recipes for a basic kitchen. No fancy gear needed — just a pan, a pot, and a grocery list. Try it free today.",
    h1: "First Apartment Meal Plan for When You Finally Have a Kitchen",
    intro:
      "You have your own kitchen for the first time. Maybe it came with a dented pan and a spatula that's seen better days. You're not sure what spices to buy, your cutting board is still in the Amazon box, and you've been eating cereal for dinner more than you'd like to admit. This meal plan is built for exactly where you are — basic equipment, basic skills, big flavor. Every recipe assumes you own almost nothing and know almost nothing, and somehow you'll still eat really well.",
    valueProps: [
      {
        heading: "Works with a starter kitchen",
        description:
          "Every recipe uses basic equipment — one pan, one pot, a baking sheet. No stand mixer, no food processor, no immersion blender. If your kitchen has a stove and a microwave, you're set.",
      },
      {
        heading: "Builds real cooking skills",
        description:
          "Each week introduces a new technique without making a big deal about it. You'll learn to sear chicken, make a pan sauce, and roast vegetables just by following the recipes.",
      },
      {
        heading: "Starter grocery list included",
        description:
          "First week includes a pantry starter list — the oils, spices, and staples you'll actually use. Buy them once and they'll last for months.",
      },
    ],
    sampleMeals: [
      {
        name: "Scrambled Eggs & Toast",
        mealType: "breakfast",
        description:
          "Fluffy scrambled eggs with butter, salt, and pepper on buttered toast. The first thing everyone should learn to cook, and it never gets old.",
        prepTime: "10 min",
        tags: ["beginner", "quick"],
      },
      {
        name: "Chicken Quesadilla",
        mealType: "lunch",
        description:
          "Shredded rotisserie chicken with cheese and salsa pressed in a tortilla until crispy. One pan, five minutes, zero skill required.",
        prepTime: "10 min",
        tags: ["beginner", "quick"],
      },
      {
        name: "Garlic Butter Pasta",
        mealType: "dinner",
        description:
          "Spaghetti tossed with butter, garlic, parmesan, and a handful of whatever vegetables you have. The recipe that proves cooking doesn't have to be complicated.",
        prepTime: "15 min",
        tags: ["one-pot", "beginner"],
      },
      {
        name: "Sheet Pan Sausage & Vegetables",
        mealType: "dinner",
        description:
          "Sliced sausage with potatoes, bell peppers, and onions tossed in olive oil and roasted on one pan. Chop, toss, bake, eat.",
        prepTime: "30 min",
        tags: ["one-pan", "beginner"],
      },
      {
        name: "Peanut Butter Banana Toast",
        mealType: "snack",
        description:
          "Peanut butter spread on toast with sliced banana and a drizzle of honey. Filling, cheap, and genuinely good.",
        prepTime: "5 min",
        tags: ["no-cook", "quick"],
      },
    ],
    faqs: [
      {
        question: "What kitchen equipment do I actually need?",
        answer:
          "Start with a 10-inch skillet, a medium pot, a baking sheet, a cutting board, and a chef's knife. That's it. You can cook 90% of our recipes with just those five things. Add a spatula and a wooden spoon and you're fully equipped. Skip the gadgets — they take up space and you won't use them.",
      },
      {
        question: "What pantry staples should I buy first?",
        answer:
          "Olive oil, salt, pepper, garlic powder, soy sauce, and red pepper flakes. That's your starter pack. Add butter, pasta, rice, canned tomatoes, and chicken broth and you can make dozens of meals. Our first week's grocery list includes all of these so you build your pantry as you go.",
      },
      {
        question: "I've literally never cooked before — is this too advanced?",
        answer:
          "Not even close. Our recipes tell you exactly what to do: 'heat the pan on medium, add a tablespoon of oil, wait until it shimmers.' We don't assume you know what 'fold' means or how to tell when chicken is done. If you can read instructions and set a timer, you can do this.",
      },
      {
        question: "How much will my first week of groceries cost?",
        answer:
          "Your first week is a bit more expensive because you're buying pantry staples that last months — expect $50-60. After that, weekly groceries drop to $30-45 because you already have the basics. Still way cheaper than ordering food every night.",
      },
    ],
    relatedSlugs: ["meal-plan-for-college-students", "meal-plan-for-beginners", "meal-plan-on-a-budget"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "meal-plan-for-roommates",
    type: "diet",
    title: "Meal Plan for Roommates",
    metaDescription:
      "Weekly meal plan for roommates who share a kitchen. Split groceries, cook together, and actually eat real food without stepping on each other's toes.",
    h1: "Meal Plan for Roommates Who Want to Split Groceries and Eat Well",
    intro:
      "Living with roommates means a shared kitchen, a shared fridge, and the eternal question of whose milk that is. Instead of everyone buying their own sad groceries and cooking separately, our roommate meal plans let you split one grocery list, cook communal dinners a few nights a week, and still have your own breakfasts and lunches. It's cheaper, less wasteful, and way more fun than eating alone in your room.",
    valueProps: [
      {
        heading: "Split one grocery list",
        description:
          "One trip to the store, one bill to Venmo-split. No more three half-empty jars of peanut butter in the pantry or passive-aggressive sticky notes about someone's yogurt.",
      },
      {
        heading: "Communal dinners, independent lunches",
        description:
          "Dinners are designed for 3-4 people to eat together. Breakfasts and lunches are grab-and-go so everyone can eat on their own schedule.",
      },
      {
        heading: "Rotation-friendly cooking",
        description:
          "Recipes are simple enough that anyone can take a turn cooking. No one person gets stuck as the house chef every night.",
      },
    ],
    sampleMeals: [
      {
        name: "Overnight Oats (Individual Jars)",
        mealType: "breakfast",
        description:
          "Each roommate preps their own jar: oats, milk, chia seeds, and whatever toppings they want. Made the night before, grab from fridge in the morning.",
        prepTime: "5 min",
        tags: ["meal-prep", "individual"],
      },
      {
        name: "Deli Wrap Bar",
        mealType: "lunch",
        description:
          "Tortillas, deli meat, cheese, lettuce, and condiments laid out for everyone to build their own wrap. Shared ingredients, personal customization.",
        prepTime: "10 min",
        tags: ["no-cook", "build-your-own"],
      },
      {
        name: "Big Batch Chicken Stir-Fry",
        mealType: "dinner",
        description:
          "Chicken thighs with mixed vegetables and soy-garlic sauce served over rice. Feeds 3-4, one person cooks, everyone eats.",
        prepTime: "25 min",
        tags: ["communal", "one-pan"],
      },
      {
        name: "Taco Night",
        mealType: "dinner",
        description:
          "Seasoned ground beef or turkey with shells, cheese, salsa, sour cream, and lettuce. One person browns the meat, everyone assembles their own.",
        prepTime: "20 min",
        tags: ["communal", "build-your-own"],
      },
      {
        name: "Chips & Guacamole",
        mealType: "snack",
        description:
          "Three avocados smashed with lime, salt, and cilantro, served with a bag of tortilla chips. The ultimate communal snack.",
        prepTime: "10 min",
        tags: ["communal", "quick"],
      },
    ],
    faqs: [
      {
        question: "How do we split the grocery bill fairly?",
        answer:
          "The simplest way: one person buys everything, splits the receipt on Venmo or Splitwise. Our grocery list makes this easy because everything is for shared meals. For personal items like specific snacks or drinks, buy those separately. Most roommate houses find the shared list runs $25-35 per person per week.",
      },
      {
        question: "What if we have different dietary restrictions?",
        answer:
          "Set everyone's preferences and we'll find common ground. If one roommate is vegetarian, communal dinners can be meat-optional — cook the base vegetarian and add chicken on the side for meat-eaters. For more complex differences, some nights might be 'cook your own' nights.",
      },
      {
        question: "How do we decide who cooks?",
        answer:
          "We suggest a simple rotation — whoever cooks doesn't clean up. Our recipes are simple enough that even the roommate who can barely boil water can handle their night. The plan tells you which meals are easiest so you can assign those to the least experienced cook.",
      },
      {
        question: "What about leftovers and fridge space?",
        answer:
          "Communal dinner leftovers become the next day's lunch for whoever wants them — first come, first served. We size recipes to minimize excess so you're not fighting over fridge real estate. Individual breakfasts and lunches use compact containers or grab-and-go formats.",
      },
    ],
    relatedSlugs: ["meal-plan-for-college-students", "meal-plan-for-first-apartment", "meal-plan-on-a-budget"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "meal-plan-no-cooking-experience",
    type: "diet",
    title: "Meal Plan for People Who Can't Cook",
    metaDescription:
      "A meal plan for people who genuinely can't cook. Assembly meals, 5 ingredients max, and zero culinary skill required. Eat real food starting today.",
    h1: "Meal Plan for People Who Can't Cook (Yet)",
    intro:
      "Let's be honest — you've burned rice, you've set off the smoke alarm making toast, and your go-to dinner is whatever the delivery app recommends. That's fine. This meal plan doesn't judge. Every recipe is basically assembly: combine these things, heat if needed, eat. Five ingredients max, no technique required, and nothing that can go catastrophically wrong. You'll eat real food this week, and by the end of the month you might accidentally learn to cook.",
    valueProps: [
      {
        heading: "5 ingredients or less",
        description:
          "Every recipe uses five ingredients maximum (salt, pepper, and oil don't count). If the ingredient list scares you, the recipe is too complicated. Ours won't.",
      },
      {
        heading: "Assembly, not cooking",
        description:
          "Most meals are built, not cooked. Layer this, microwave that, mix these together. When cooking is required, it's 'put it in a pan and wait' simple.",
      },
      {
        heading: "Impossible to mess up",
        description:
          "No precise temperatures, no 'cook until golden,' no timing three things at once. One step, then the next step. If you can follow IKEA instructions, you can make these meals.",
      },
    ],
    sampleMeals: [
      {
        name: "Greek Yogurt Parfait",
        mealType: "breakfast",
        description:
          "Greek yogurt layered with granola and berries in a cup. No cooking, no measuring, just layer and eat. Protein-packed and actually filling.",
        prepTime: "5 min",
        tags: ["no-cook", "beginner"],
      },
      {
        name: "Rotisserie Chicken Wrap",
        mealType: "lunch",
        description:
          "Pre-cooked rotisserie chicken shredded into a tortilla with lettuce, cheese, and ranch. The grocery store did the hard part for you.",
        prepTime: "5 min",
        tags: ["no-cook", "assembly"],
      },
      {
        name: "Pasta with Jarred Sauce & Frozen Meatballs",
        mealType: "dinner",
        description:
          "Boil pasta, heat frozen meatballs, pour sauce from a jar, add parmesan. A complete dinner that requires exactly one skill: boiling water.",
        prepTime: "15 min",
        tags: ["beginner", "one-pot"],
      },
      {
        name: "Rice Bowl with Canned Chicken & Avocado",
        mealType: "dinner",
        description:
          "Microwave rice, top with canned chicken, sliced avocado, soy sauce, and sesame seeds. Looks like a restaurant bowl, requires zero restaurant skills.",
        prepTime: "10 min",
        tags: ["assembly", "quick"],
      },
      {
        name: "Apple Slices & Peanut Butter",
        mealType: "snack",
        description:
          "A sliced apple with peanut butter for dipping. If this counts as cooking, you're already a chef.",
        prepTime: "5 min",
        tags: ["no-cook", "quick"],
      },
    ],
    faqs: [
      {
        question: "Is this just fancy lunchables?",
        answer:
          "Kind of, but better. Assembly meals aren't lesser meals — they're how professional kitchens work too. A grain bowl is assembled. A wrap is assembled. A cheese board is assembled. The food is real, nutritious, and satisfying. We just removed the part where you need to know how to julienne an onion.",
      },
      {
        question: "Will I actually learn to cook from this?",
        answer:
          "Accidentally, yes. We start with pure assembly and gradually introduce one-step cooking — heating a pan, boiling pasta, microwaving rice. After a month, you'll realize you've been cooking all along. It's sneaky like that.",
      },
      {
        question: "What groceries do I need?",
        answer:
          "The heavy hitters: rotisserie chicken, pre-washed salad, tortillas, jarred sauce, pasta, canned beans, frozen vegetables, eggs, cheese, and rice. Most can be bought pre-cut, pre-cooked, or frozen. The grocery list does the meal prep for you.",
      },
      {
        question: "What if I mess up a recipe?",
        answer:
          "These recipes are designed so that messing up is nearly impossible. Over-microwaved rice? Still edible. Pasta a little mushy? Still pasta. The margin for error is enormous because we removed all the steps where things can go wrong. Worst case, you have a slightly ugly meal that tastes fine.",
      },
    ],
    relatedSlugs: ["meal-plan-for-beginners", "meal-plan-for-first-apartment", "quick-30-minute-meal-plan"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "meal-plan-for-busy-students",
    type: "diet",
    title: "Meal Plan for Busy Students",
    metaDescription:
      "Meal plan for students who are too busy to cook. Dorm-friendly, ultra-cheap, and ready in 15 minutes or less. Stop skipping meals. Try it free today.",
    h1: "Meal Plan for Busy Students Who Don't Have Time to Cook",
    intro:
      "You're juggling classes, assignments, a part-time job, and some version of a social life. Cooking a real meal feels like a luxury you can't afford — in time or money. But skipping meals and living on energy drinks isn't working either. This plan is built around your actual schedule: meals you can prep Sunday and grab all week, 10-minute dinners for study breaks, and snacks that keep your brain working during late-night cram sessions. Everything is cheap, fast, and doesn't require a real kitchen.",
    valueProps: [
      {
        heading: "Sunday prep, weekday grab",
        description:
          "Spend one hour on Sunday prepping grab-and-go meals for the week. Breakfasts, lunches, and snacks are ready when you are — just pull from the fridge between classes.",
      },
      {
        heading: "Under $25 per week",
        description:
          "Built around the cheapest nutritious foods: rice, beans, eggs, oats, frozen vegetables, and budget proteins. Your dining hall charges more than this.",
      },
      {
        heading: "Study-friendly fuel",
        description:
          "Meals focus on sustained energy — complex carbs, protein, and healthy fats that keep you alert during lectures and focused during study sessions. No sugar crashes.",
      },
    ],
    sampleMeals: [
      {
        name: "Banana Oat Smoothie",
        mealType: "breakfast",
        description:
          "Frozen banana, oats, peanut butter, and milk blended together. Drink it on your walk to class. Done before your alarm snooze runs out.",
        prepTime: "5 min",
        tags: ["quick", "grab-and-go"],
      },
      {
        name: "Bean & Cheese Burrito (Batch of 5)",
        mealType: "lunch",
        description:
          "Black beans, rice, cheese, and salsa wrapped in tortillas. Make five on Sunday, wrap in foil, microwave one each day for lunch.",
        prepTime: "10 min",
        tags: ["meal-prep", "budget"],
      },
      {
        name: "Egg Fried Rice",
        mealType: "dinner",
        description:
          "Day-old rice fried with eggs, frozen peas, soy sauce, and sesame oil. The ultimate broke-student dinner that actually tastes amazing.",
        prepTime: "10 min",
        tags: ["budget", "quick"],
      },
      {
        name: "Chicken Ramen Upgrade",
        mealType: "dinner",
        description:
          "Instant ramen with a soft-boiled egg, frozen spinach, and a drizzle of sesame oil. Takes packet ramen from sad to actually good in 3 extra minutes.",
        prepTime: "10 min",
        tags: ["budget", "dorm-friendly"],
      },
      {
        name: "Trail Mix Bags",
        mealType: "snack",
        description:
          "Pre-portioned bags of peanuts, raisins, and chocolate chips. Make a batch Sunday, throw one in your backpack every morning. Study fuel.",
        prepTime: "5 min",
        tags: ["meal-prep", "grab-and-go"],
      },
    ],
    faqs: [
      {
        question: "I only have a microwave — can I still use this?",
        answer:
          "Yes. More than half our meals are no-cook or microwave-only. Burritos reheat in the microwave. Rice cooks in the microwave. Mug meals cook in the microwave. If you have access to a communal kitchen even once a week (Sunday prep), you're fully covered.",
      },
      {
        question: "How do I meal prep when I don't know how to cook?",
        answer:
          "Our Sunday prep is mostly assembly: roll burritos, portion overnight oats, chop vegetables. The most complex thing you'll do is cook rice and scramble eggs. We walk you through every step, assuming you're starting from zero.",
      },
      {
        question: "Can this actually be under $25 a week?",
        answer:
          "Yes, if you shop smart. Rice, beans, eggs, oats, bananas, frozen vegetables, and tortillas are all extremely cheap. A bag of rice lasts weeks. A dozen eggs costs a few dollars. We optimize the grocery list for the cheapest stores and avoid anything that costs more than it should.",
      },
      {
        question: "What should I eat before exams?",
        answer:
          "Complex carbs and protein: oatmeal with peanut butter, a bean burrito, or eggs with toast. Avoid sugar-heavy foods that cause crashes. Our plans naturally include these foods because they're cheap AND good for brain function. Eat a real meal 2-3 hours before a big exam.",
      },
    ],
    relatedSlugs: ["meal-plan-for-college-students", "meal-plan-on-a-budget", "meal-plan-no-cooking-experience"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "tiktok-recipes-meal-plan",
    type: "diet",
    title: "TikTok Recipes Meal Plan",
    metaDescription:
      "Trending TikTok recipes organized into a real weekly meal plan with a grocery list. All the viral hits, none of the chaos. Try your free plan today.",
    h1: "TikTok Recipes Meal Plan — Viral Hits Organized Into a Real Week",
    intro:
      "You've saved hundreds of recipe videos on TikTok but somehow still have no idea what to eat for dinner. Sound familiar? This meal plan takes the most popular viral recipes — the ones that actually work — and organizes them into a real, balanced week with a grocery list. No more buying ingredients for one trending recipe and letting the rest rot. Every meal is something you've probably seen on your For You page, and they actually taste as good as the videos promise.",
    valueProps: [
      {
        heading: "Viral recipes that actually work",
        description:
          "We test every trending recipe and only include the ones that deliver. No bait-and-switch videos where the result looks nothing like the thumbnail. These are the hits.",
      },
      {
        heading: "Organized into a real week",
        description:
          "Instead of cooking one random TikTok recipe and wasting half the ingredients, get a full week where ingredients overlap and nothing goes to waste.",
      },
      {
        heading: "Updated with new trends",
        description:
          "The plan evolves as new recipes go viral. You'll see current trending meals mixed with proven classics so your weekly plan never feels stale.",
      },
    ],
    sampleMeals: [
      {
        name: "Baked Oats",
        mealType: "breakfast",
        description:
          "Blended oats, banana, and peanut butter baked until golden. The TikTok breakfast that launched a thousand videos, and it genuinely slaps.",
        prepTime: "20 min",
        tags: ["trending", "high-protein"],
      },
      {
        name: "Salmon Rice Bowl",
        mealType: "lunch",
        description:
          "Flaked salmon, sushi rice, avocado, cucumber, sriracha mayo, and soy sauce. The viral Emily Mariko bowl that broke TikTok.",
        prepTime: "15 min",
        tags: ["trending", "assembly"],
      },
      {
        name: "Marry Me Chicken",
        mealType: "dinner",
        description:
          "Chicken breasts in a creamy sun-dried tomato and parmesan sauce. The recipe that made a million people say 'I'd marry whoever makes this for me.'",
        prepTime: "25 min",
        tags: ["trending", "date-night"],
      },
      {
        name: "Birria Tacos",
        mealType: "dinner",
        description:
          "Shredded beef tacos dipped in consomme, pan-fried until crispy with melted cheese. The most satisfying thing TikTok has ever produced.",
        prepTime: "30 min",
        tags: ["trending", "crowd-pleaser"],
      },
      {
        name: "Frozen Yogurt Bark",
        mealType: "snack",
        description:
          "Greek yogurt spread thin on parchment, topped with berries, granola, and a drizzle of honey, then frozen and broken into pieces. The healthy dessert that went viral.",
        prepTime: "10 min",
        tags: ["trending", "no-cook"],
      },
    ],
    faqs: [
      {
        question: "Are these actual TikTok recipes or just inspired by them?",
        answer:
          "These are the real viral recipes — the ones with millions of views that people actually make. We test each one, adjust proportions if the original was vague (TikTok recipes are notorious for 'just eyeball it'), and write proper instructions so they work every time.",
      },
      {
        question: "Do you update the recipes when new things go viral?",
        answer:
          "Yes. Our plans rotate trending recipes regularly so you're cooking what's current, not what went viral two years ago. We keep the proven classics (like the salmon rice bowl) and swap in new trending meals as they emerge and get tested.",
      },
      {
        question: "Are TikTok recipes actually healthy?",
        answer:
          "Some are, some aren't. We curate a balanced mix — viral salads and grain bowls alongside the indulgent stuff. The weekly plan is nutritionally balanced overall, even if individual meals lean more treat than health food. That's realistic eating.",
      },
      {
        question: "What if a recipe needs an ingredient I can't find?",
        answer:
          "We avoid recipes that require specialty ingredients you'd need to order online. Everything on our grocery list is available at a regular grocery store. For trendy ingredients like gochujang or everything bagel seasoning, we suggest substitutes if your store doesn't carry them.",
      },
    ],
    relatedSlugs: ["quick-30-minute-meal-plan", "meal-plan-for-first-apartment", "meal-plan-for-two"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "meal-plan-for-gym-beginners",
    type: "diet",
    title: "Meal Plan for Gym Beginners",
    metaDescription:
      "Meal plan for gym beginners who want to build muscle and eat right. High protein, simple recipes, no confusing macros. Get your free plan today.",
    h1: "Meal Plan for Gym Beginners Who Have No Idea What to Eat",
    intro:
      "You started going to the gym. Nice. Now everyone is telling you to 'eat more protein' and 'hit your macros' and you have no idea what any of that actually means in terms of real food. This meal plan cuts through the fitness bro science and gives you simple, high-protein meals that support your training without requiring a food scale, a meal prep empire, or a degree in nutrition. Just eat these meals, lift your weights, and you'll see results.",
    valueProps: [
      {
        heading: "Protein-focused, not protein-obsessed",
        description:
          "You'll hit 120-150g of protein per day without chugging shakes for every meal. Real food, real meals, and enough protein to build muscle without making eating feel like a chore.",
      },
      {
        heading: "No macro counting required",
        description:
          "We did the math so you don't have to. Follow the plan and you're eating the right balance of protein, carbs, and fats for someone who's training regularly. No MyFitnessPal, no food scale.",
      },
      {
        heading: "Pre and post-workout meals included",
        description:
          "The plan tells you what to eat before and after the gym based on when you train. Carbs before for energy, protein after for recovery. Simple.",
      },
    ],
    sampleMeals: [
      {
        name: "Protein Oatmeal",
        mealType: "breakfast",
        description:
          "Oats cooked with milk, stirred with a scoop of protein powder, topped with banana and peanut butter. 40g protein before you leave the house.",
        prepTime: "10 min",
        tags: ["high-protein", "quick"],
      },
      {
        name: "Chicken Rice Bowl",
        mealType: "lunch",
        description:
          "Seasoned chicken thighs over rice with broccoli and a drizzle of teriyaki sauce. The gym bro classic exists for a reason — it works.",
        prepTime: "20 min",
        tags: ["high-protein", "meal-prep"],
      },
      {
        name: "Ground Turkey Pasta",
        mealType: "dinner",
        description:
          "Ground turkey browned with garlic, tossed with penne and marinara sauce. 45g protein per serving and it tastes like a real dinner, not gym food.",
        prepTime: "20 min",
        tags: ["high-protein", "one-pot"],
      },
      {
        name: "Beef & Bean Burrito Bowl",
        mealType: "dinner",
        description:
          "Ground beef with black beans, rice, cheese, salsa, and sour cream. Over 50g protein and it hits the Chipotle craving without the Chipotle price.",
        prepTime: "20 min",
        tags: ["high-protein", "budget"],
      },
      {
        name: "Cottage Cheese & Berries",
        mealType: "snack",
        description:
          "A bowl of cottage cheese with mixed berries and a drizzle of honey. 25g protein for a snack. The gym community was right about this one.",
        prepTime: "5 min",
        tags: ["high-protein", "no-cook"],
      },
    ],
    faqs: [
      {
        question: "How much protein do I actually need?",
        answer:
          "If you're lifting regularly and trying to build muscle, aim for 0.7-1g of protein per pound of bodyweight. For a 170-pound person, that's 120-170g per day. Our meal plan hits this range naturally through whole foods, with a protein shake only if you want one. You don't need to obsess over exact numbers.",
      },
      {
        question: "Do I need protein shakes?",
        answer:
          "Not necessarily. Our plan gets you to 120-150g of protein per day through real food — chicken, eggs, Greek yogurt, ground turkey, cottage cheese. A shake can help if you're struggling to hit your number or need something quick after the gym, but it's a supplement, not a requirement.",
      },
      {
        question: "Should I eat differently on rest days?",
        answer:
          "Not dramatically. You still need protein for recovery on rest days. Our plan keeps meals consistent throughout the week because complicated 'training day vs rest day' splits are unnecessary for beginners. Just eat the meals, train hard, and rest well.",
      },
      {
        question: "Can I build muscle on a budget?",
        answer:
          "Absolutely. Eggs, chicken thighs, canned tuna, Greek yogurt, cottage cheese, beans, and rice are all cheap and packed with protein. Our plan uses these affordable staples rather than expensive cuts of meat or specialty fitness foods. Building muscle doesn't require a premium grocery budget.",
      },
    ],
    relatedSlugs: ["high-protein-budget-meal-plan", "high-protein-meal-plan", "meal-plan-for-beginners"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "high-protein-budget-meal-plan",
    type: "diet",
    title: "High Protein Meal Plan on a Budget",
    metaDescription:
      "High protein meal plan that won't empty your wallet. Chicken thighs, eggs, Greek yogurt, and beans — real protein sources, real savings. Try it free.",
    h1: "High Protein Meal Plan on a Budget — Real Gains, Real Savings",
    intro:
      "Everyone says eat more protein, but have you seen the price of chicken breast lately? You don't need expensive supplements or premium cuts to hit your protein goals. This meal plan is built around the cheapest high-protein foods that actually taste good — chicken thighs instead of breasts, eggs by the dozen, Greek yogurt on sale, canned beans, and ground turkey. You'll hit 130+ grams of protein daily while keeping groceries under $50 per week. No sad boiled chicken required.",
    valueProps: [
      {
        heading: "Budget protein sources",
        description:
          "Chicken thighs ($2-3/lb), eggs ($0.25 each), canned beans ($1/can), Greek yogurt (bulk tubs). We build every meal around proteins that cost pennies per gram.",
      },
      {
        heading: "130g+ protein daily",
        description:
          "Every day's meals add up to 130-160g of protein without supplements. Enough to support muscle building, weight loss, or just feeling full and energized.",
      },
      {
        heading: "Under $50 per week",
        description:
          "The full grocery list for seven days runs $40-50. That's less than most people spend on protein powder alone. We stretch every dollar without sacrificing flavor.",
      },
    ],
    sampleMeals: [
      {
        name: "Egg & Black Bean Breakfast Tacos",
        mealType: "breakfast",
        description:
          "Three scrambled eggs with black beans, cheese, and hot sauce in corn tortillas. 35g protein for under $2. The budget breakfast king.",
        prepTime: "10 min",
        tags: ["high-protein", "budget"],
      },
      {
        name: "Tuna Salad Stuffed Peppers",
        mealType: "lunch",
        description:
          "Canned tuna mixed with Greek yogurt, celery, and mustard, stuffed into halved bell peppers. 40g protein, zero cooking, and the tuna costs $1.",
        prepTime: "10 min",
        tags: ["high-protein", "no-cook"],
      },
      {
        name: "Chicken Thigh & Rice Plate",
        mealType: "dinner",
        description:
          "Bone-in chicken thighs seasoned and baked until crispy, served with rice and steamed broccoli. The cheapest protein per pound, and thighs taste better than breast anyway.",
        prepTime: "30 min",
        tags: ["high-protein", "budget"],
      },
      {
        name: "Lentil & Sausage Soup",
        mealType: "dinner",
        description:
          "Red lentils simmered with diced smoked sausage, carrots, and cumin. One pot, four servings, 35g protein each, and the whole batch costs about $6.",
        prepTime: "25 min",
        tags: ["high-protein", "batch-cook"],
      },
      {
        name: "Greek Yogurt with Granola",
        mealType: "snack",
        description:
          "A big scoop of plain Greek yogurt with crunchy granola and a drizzle of honey. 20g protein for a snack that costs less than a dollar.",
        prepTime: "5 min",
        tags: ["high-protein", "no-cook"],
      },
    ],
    faqs: [
      {
        question: "What are the cheapest high-protein foods?",
        answer:
          "Eggs (6g protein, ~$0.25 each), chicken thighs (26g protein per thigh, ~$2/lb), canned tuna (20g protein, ~$1/can), Greek yogurt (15g per cup, ~$0.80), dried lentils (18g per cup, ~$0.30), and canned black beans (15g per can, ~$1). Our plan rotates all of these so you never get bored.",
      },
      {
        question: "Can I hit 150g protein without supplements?",
        answer:
          "Yes. Three eggs at breakfast (18g), a tuna-based lunch (35g), a chicken thigh dinner (40g), Greek yogurt snack (20g), and beans somewhere in the day (15g) gets you to 128g before even trying. Add cheese, milk, or a slightly larger portion and you're at 150g. Real food gets you there.",
      },
      {
        question: "Is this plan good for weight loss?",
        answer:
          "High protein diets are one of the best approaches for weight loss because protein keeps you full longer and preserves muscle mass. This plan provides high protein at a moderate calorie level. If you're trying to lose weight, the plan works as-is — you won't feel hungry because protein and fiber keep you satisfied.",
      },
      {
        question: "How do I keep groceries under $50?",
        answer:
          "Buy chicken thighs (not breasts), eggs in 18-packs, Greek yogurt in large tubs (not individual cups), dry beans or canned on sale, and frozen vegetables instead of fresh. Buy rice and oats in bulk. Skip pre-marinated or pre-seasoned proteins — seasoning your own is cheaper and tastes better.",
      },
    ],
    relatedSlugs: ["meal-plan-for-gym-beginners", "meal-plan-on-a-budget", "high-protein-meal-plan"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "meal-plan-to-stop-ordering-takeout",
    type: "diet",
    title: "Meal Plan to Stop Ordering Takeout",
    metaDescription:
      "A meal plan designed to replace DoorDash. Homemade versions of your favorite takeout that are faster, cheaper, and just as satisfying. Try it free today.",
    h1: "Meal Plan to Stop Ordering Takeout (Your Wallet Will Thank You)",
    intro:
      "You open DoorDash, scroll for 20 minutes, pay $25 for a $12 meal after fees and tip, and eat it in 7 minutes. Then you do it again tomorrow. This meal plan is your intervention. Every recipe is a homemade version of something you'd normally order — chicken teriyaki, pad thai, burrito bowls, pizza — and they're all ready faster than delivery would arrive. We're not going to lecture you about cooking being a 'life skill.' We're just going to make cooking easier than ordering, and the savings will speak for themselves.",
    valueProps: [
      {
        heading: "Faster than delivery",
        description:
          "Average DoorDash delivery: 35-50 minutes. Average recipe in this plan: 15-25 minutes. You'll be eating before the delivery driver even picks up your order.",
      },
      {
        heading: "Homemade takeout favorites",
        description:
          "Chicken teriyaki, pad thai, burrito bowls, fried rice, pizza — all the things you actually order, made at home for a fraction of the cost and zero delivery fees.",
      },
      {
        heading: "Save $150+ per week",
        description:
          "If you're ordering delivery 5 times a week at $20-30 per order, you're spending $100-150 on food you could make for $40. That's a car payment you're eating.",
      },
    ],
    sampleMeals: [
      {
        name: "Homemade Egg McMuffin",
        mealType: "breakfast",
        description:
          "Fried egg, American cheese, and Canadian bacon on a toasted English muffin. Faster than the McDonald's drive-through and way better.",
        prepTime: "10 min",
        tags: ["takeout-swap", "quick"],
      },
      {
        name: "Chipotle-Style Burrito Bowl",
        mealType: "lunch",
        description:
          "Cilantro lime rice, seasoned chicken, black beans, corn, salsa, cheese, and sour cream. Tastes like Chipotle, costs $3 instead of $12.",
        prepTime: "25 min",
        tags: ["takeout-swap", "batch-cook"],
      },
      {
        name: "15-Minute Chicken Teriyaki",
        mealType: "dinner",
        description:
          "Chicken thighs glazed with homemade teriyaki sauce (soy sauce, honey, garlic, ginger) served over steamed rice. Your Panda Express replacement.",
        prepTime: "15 min",
        tags: ["takeout-swap", "quick"],
      },
      {
        name: "Skillet Pad Thai",
        mealType: "dinner",
        description:
          "Rice noodles stir-fried with shrimp or chicken, egg, bean sprouts, peanuts, and a sweet-tangy sauce. The $18 Thai delivery order, now $4.",
        prepTime: "20 min",
        tags: ["takeout-swap", "one-pan"],
      },
      {
        name: "Frozen Grapes",
        mealType: "snack",
        description:
          "Grapes thrown in the freezer for a few hours. They taste like candy. This is the snack that makes you stop ordering boba tea at 10pm.",
        prepTime: "5 min",
        tags: ["no-cook", "healthy"],
      },
    ],
    faqs: [
      {
        question: "How much money will I actually save?",
        answer:
          "If you order delivery 5 times a week averaging $25 per order (food + fees + tip), that's $125/week or $500/month. Cooking these same meals at home costs roughly $40-50 per week for groceries. That's $300-400 in monthly savings. Over a year, that's enough for a vacation, a new laptop, or 6 months of rent depending on your city.",
      },
      {
        question: "Will homemade versions taste as good as restaurant food?",
        answer:
          "Honestly? Most of them taste better because you're eating them fresh, hot, and customized to your taste. Restaurant food sits in a container during delivery, gets soggy, and arrives lukewarm. Your homemade chicken teriyaki comes straight from the pan. The flavor difference is real.",
      },
      {
        question: "What if I'm too tired to cook after work?",
        answer:
          "That's why most of our recipes take 15-20 minutes. If you can scroll DoorDash for 15 minutes deciding what to order, you can cook a meal in the same time. We also include Sunday prep options so some meals are already half-done when you get home. Heat and eat.",
      },
      {
        question: "Can I still order takeout sometimes?",
        answer:
          "Obviously. This isn't a takeout detox program. The goal is to make cooking your default because it's faster, cheaper, and better — not because you've taken a vow of delivery abstinence. Even cutting delivery from 5 times to 2 times a week saves you $75/week.",
      },
    ],
    relatedSlugs: ["quick-30-minute-meal-plan", "meal-plan-on-a-budget", "meal-plan-for-first-apartment"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
];
