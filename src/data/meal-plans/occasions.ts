import type { MealPlanPageData } from "./types";

export const occasionPages: MealPlanPageData[] = [
  // ──────────────────────────────────────────────
  // Occasion & Event Pages
  // ──────────────────────────────────────────────
  {
    slug: "spring-meal-plan",
    type: "diet",
    title: "Spring Meal Plan",
    metaDescription:
      "Get a weekly spring meal plan featuring fresh seasonal produce, lighter meals, and vibrant flavors. Make the most of asparagus, peas, and spring greens.",
    h1: "Spring Meal Plan Built Around Fresh Seasonal Produce",
    intro:
      "Spring is when farmers markets come alive and grocery stores finally stock something worth getting excited about. A spring meal plan takes advantage of tender asparagus, sweet peas, fresh herbs, and leafy greens at their peak. We build you a weekly plan that feels lighter after months of heavy winter food, without leaving you hungry. Every recipe highlights what's actually in season so your meals taste better and cost less.",
    valueProps: [
      {
        heading: "Peak-season ingredients",
        description:
          "Plans feature spring staples like asparagus, artichokes, peas, radishes, and fresh herbs when they're cheapest and most flavorful at your grocery store.",
      },
      {
        heading: "Lighter without being skimpy",
        description:
          "After months of stews and casseroles, spring meals shift to brighter flavors and lighter proteins while still keeping you full and satisfied.",
      },
      {
        heading: "Quick prep for longer days",
        description:
          "Most meals come together in 25 minutes or less so you can enjoy the extra daylight instead of standing in the kitchen.",
      },
    ],
    sampleMeals: [
      {
        name: "Shaved Asparagus and Lemon Ricotta Toast",
        mealType: "breakfast",
        description:
          "Toasted sourdough topped with whipped ricotta, raw shaved asparagus, lemon zest, and cracked pepper.",
        prepTime: "10 min",
        tags: ["vegetarian", "spring", "quick"],
      },
      {
        name: "Spring Pea and Mint Soup",
        mealType: "lunch",
        description:
          "Bright green soup made with fresh peas, mint, and a swirl of yogurt. Served with crusty bread.",
        prepTime: "20 min",
        tags: ["vegetarian", "spring", "light"],
      },
      {
        name: "Lemon Herb Chicken with Roasted Radishes",
        mealType: "dinner",
        description:
          "Pan-seared chicken thighs with a lemon-herb pan sauce alongside roasted radishes that turn sweet and mellow in the oven.",
        prepTime: "30 min",
        tags: ["high-protein", "spring", "gluten-free"],
      },
      {
        name: "Strawberry Spinach Salad with Grilled Salmon",
        mealType: "dinner",
        description:
          "Baby spinach tossed with sliced strawberries, toasted almonds, and goat cheese, topped with a grilled salmon fillet.",
        prepTime: "25 min",
        tags: ["high-protein", "spring", "omega-3"],
      },
      {
        name: "Snap Pea and Hummus Snack Plate",
        mealType: "snack",
        description:
          "Crisp sugar snap peas with lemon hummus, cherry tomatoes, and whole grain crackers.",
        prepTime: "5 min",
        tags: ["vegetarian", "spring", "no-cook"],
      },
    ],
    faqs: [
      {
        question: "What vegetables are in season during spring?",
        answer:
          "Spring brings asparagus, peas, artichokes, radishes, fava beans, spring onions, spinach, arugula, and strawberries. Your meal plan prioritizes whatever is freshest and most affordable during the season.",
      },
      {
        question: "Will a spring meal plan help me eat lighter?",
        answer:
          "Yes. Spring plans naturally shift toward lighter proteins, more raw and quick-cooked vegetables, and brighter dressings. You'll eat fewer heavy starches without feeling like you're on a diet.",
      },
      {
        question: "Can I follow a spring meal plan if I have dietary restrictions?",
        answer:
          "Absolutely. Tell us your restrictions during onboarding and every spring recipe will respect them. Whether you're gluten-free, dairy-free, or vegetarian, the seasonal focus stays the same.",
      },
      {
        question: "Do spring meal plans change week to week?",
        answer:
          "Yes. Each week you get a completely new plan with different recipes so you never repeat the same meals. The seasonal focus stays consistent while the variety keeps things interesting.",
      },
    ],
    relatedSlugs: [
      "summer-meal-plan",
      "fall-meal-plan",
      "mediterranean-meal-plan",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },

  {
    slug: "fall-meal-plan",
    type: "diet",
    title: "Fall Meal Plan",
    metaDescription:
      "Get a weekly fall meal plan with comfort food, warming soups, roasted squash, and apple recipes. Cozy seasonal meals with recipes and a grocery list.",
    h1: "Fall Meal Plan Packed with Comfort Food and Seasonal Flavors",
    intro:
      "When the air turns crisp and sweaters come out, your meals should match. A fall meal plan leans into the best produce of the season: butternut squash, sweet potatoes, apples, pears, and hearty greens like kale. We build you a weekly plan that balances warming soups and roasted dishes with meals that still come together on busy weeknights. Every recipe makes the most of fall flavors without chaining you to the kitchen.",
    valueProps: [
      {
        heading: "Warming, satisfying meals",
        description:
          "Soups, stews, roasted vegetables, and one-pot dinners that feel like a warm blanket. Comfort food that's actually good for you.",
      },
      {
        heading: "Fall produce at its peak",
        description:
          "Plans feature butternut squash, sweet potatoes, apples, pears, Brussels sprouts, and cranberries when they're cheapest and most flavorful.",
      },
      {
        heading: "Batch-friendly recipes",
        description:
          "Many fall recipes improve overnight, so you'll get meals that work as next-day lunches. Cook once, eat twice.",
      },
    ],
    sampleMeals: [
      {
        name: "Apple Cinnamon Overnight Oats",
        mealType: "breakfast",
        description:
          "Rolled oats soaked overnight with diced apples, cinnamon, maple syrup, and a handful of walnuts.",
        prepTime: "5 min",
        tags: ["vegetarian", "fall", "meal-prep"],
      },
      {
        name: "Butternut Squash Soup with Sage",
        mealType: "lunch",
        description:
          "Roasted butternut squash blended into a velvety soup with crispy sage leaves and a drizzle of brown butter.",
        prepTime: "35 min",
        tags: ["vegetarian", "fall", "comfort-food"],
      },
      {
        name: "One-Pan Sausage with Roasted Apples and Brussels Sprouts",
        mealType: "dinner",
        description:
          "Italian sausage roasted alongside halved Brussels sprouts and apple wedges on a single sheet pan.",
        prepTime: "30 min",
        tags: ["high-protein", "fall", "one-pan"],
      },
      {
        name: "Harvest Grain Bowl with Roasted Sweet Potato",
        mealType: "lunch",
        description:
          "Farro topped with roasted sweet potato, dried cranberries, pepitas, and a maple tahini dressing.",
        prepTime: "25 min",
        tags: ["vegetarian", "fall", "meal-prep"],
      },
      {
        name: "Spiced Pear and Almond Butter Toast",
        mealType: "snack",
        description:
          "Whole grain toast spread with almond butter, topped with sliced pear, a pinch of cardamom, and honey.",
        prepTime: "5 min",
        tags: ["vegetarian", "fall", "quick"],
      },
    ],
    faqs: [
      {
        question: "What produce is best in fall?",
        answer:
          "Fall highlights include butternut squash, sweet potatoes, apples, pears, Brussels sprouts, cranberries, kale, cauliflower, and root vegetables. Your meal plan prioritizes what's freshest and most affordable.",
      },
      {
        question: "Are fall meal plans heavy and high-calorie?",
        answer:
          "Not necessarily. While fall food is warming and satisfying, your plan is calibrated to your calorie preferences. Comfort food doesn't have to mean overeating.",
      },
      {
        question: "Can I make fall meals ahead of time?",
        answer:
          "Many fall recipes are ideal for meal prep. Soups, stews, and grain bowls store well and often taste better the next day. Your plan flags which meals are batch-friendly.",
      },
      {
        question: "Will the plan include Thanksgiving recipes?",
        answer:
          "The general fall plan focuses on everyday meals. If you want a plan built around Thanksgiving week specifically, check out our dedicated Thanksgiving meal plan page.",
      },
    ],
    relatedSlugs: [
      "spring-meal-plan",
      "winter-meal-plan",
      "thanksgiving-meal-plan",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },

  {
    slug: "thanksgiving-meal-plan",
    type: "diet",
    title: "Thanksgiving Meal Plan",
    metaDescription:
      "Get a full Thanksgiving week meal plan with recipes and a grocery list. Cover everyday meals plus the big day so nothing falls through the cracks.",
    h1: "Thanksgiving Meal Plan for the Whole Week, Not Just Thursday",
    intro:
      "Thanksgiving isn't just one meal — it's a whole week of cooking, hosting, and trying not to live on leftovers alone. A proper Thanksgiving meal plan covers your everyday breakfasts and lunches alongside the big feast so you're not scrambling at 6 PM on Tuesday. We plan your entire week including prep-ahead dishes, the main event, and smart ways to turn leftovers into meals you actually want to eat.",
    valueProps: [
      {
        heading: "The full week, planned",
        description:
          "Not just Thursday dinner. You get breakfast, lunch, and dinner for the entire week, with prep timelines so nothing overlaps on the big day.",
      },
      {
        heading: "One consolidated grocery list",
        description:
          "Every ingredient for the whole week in one list. No last-minute grocery runs, no forgetting the cranberries, no buying three things you already have.",
      },
      {
        heading: "Leftover transformation recipes",
        description:
          "Friday through Sunday meals use Thursday's leftovers in creative ways — turkey cranberry paninis, stuffing-crusted frittatas, and more.",
      },
    ],
    sampleMeals: [
      {
        name: "Pumpkin Spice Pancakes",
        mealType: "breakfast",
        description:
          "Fluffy pancakes with pumpkin puree and warm spices, topped with maple syrup and toasted pecans.",
        prepTime: "20 min",
        tags: ["vegetarian", "thanksgiving", "holiday"],
      },
      {
        name: "Herb-Brined Roast Turkey",
        mealType: "dinner",
        description:
          "Classic brined turkey with fresh herbs, roasted to golden perfection with pan gravy from the drippings.",
        prepTime: "4 hr",
        tags: ["high-protein", "thanksgiving", "centerpiece"],
      },
      {
        name: "Cranberry Walnut Stuffing",
        mealType: "dinner",
        description:
          "Sourdough bread stuffing with dried cranberries, toasted walnuts, celery, and fresh sage.",
        prepTime: "45 min",
        tags: ["vegetarian", "thanksgiving", "side-dish"],
      },
      {
        name: "Turkey Cranberry Panini",
        mealType: "lunch",
        description:
          "Pressed sandwich with leftover turkey, cranberry sauce, brie, and arugula on sourdough.",
        prepTime: "10 min",
        tags: ["leftovers", "thanksgiving", "quick"],
      },
      {
        name: "Sweet Potato Casserole Bites",
        mealType: "snack",
        description:
          "Mini muffin tin sweet potato casserole with a pecan streusel topping. Make-ahead friendly.",
        prepTime: "30 min",
        tags: ["vegetarian", "thanksgiving", "make-ahead"],
      },
    ],
    faqs: [
      {
        question: "Does the plan include the full Thanksgiving dinner?",
        answer:
          "Yes. Thursday's plan includes a complete Thanksgiving dinner with a main protein, sides, and dessert. The rest of the week covers everyday meals plus leftover recipes for Friday through Sunday.",
      },
      {
        question: "When should I start prepping for Thanksgiving?",
        answer:
          "Your plan includes a prep timeline starting Monday. Brine the turkey Tuesday, make-ahead sides Wednesday, and you'll be organized and calm on Thursday morning.",
      },
      {
        question: "What if I'm hosting a vegetarian Thanksgiving?",
        answer:
          "Set your dietary preferences to vegetarian and the entire plan adapts. The centerpiece shifts to stuffed squash or a hearty vegetable Wellington instead of turkey.",
      },
      {
        question: "Can the plan handle different group sizes?",
        answer:
          "Yes. Tell us your household size during onboarding and all recipes scale accordingly, including the Thanksgiving dinner itself. The grocery list adjusts automatically.",
      },
    ],
    relatedSlugs: [
      "fall-meal-plan",
      "christmas-meal-plan",
      "meal-plan-for-entertaining",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },

  {
    slug: "christmas-meal-plan",
    type: "diet",
    title: "Christmas Week Meal Plan",
    metaDescription:
      "Get a Christmas week meal plan with recipes and a grocery list. Cover everyday meals, holiday baking, and the big dinner without the stress.",
    h1: "Christmas Week Meal Plan So You Can Actually Enjoy the Holiday",
    intro:
      "The week of Christmas is chaos. Between gift wrapping, holiday parties, and trying to keep the house from looking like a disaster, the last thing you need is to wonder what's for dinner every night. A Christmas week meal plan covers everything from quick weeknight dinners to the holiday feast itself, plus cookie baking and appetizers for gatherings. One grocery trip, one plan, zero stress about food.",
    valueProps: [
      {
        heading: "Holiday feast, fully planned",
        description:
          "Christmas dinner with all the trimmings — roast, sides, dessert — plus a prep timeline so you're not starting everything Christmas morning.",
      },
      {
        heading: "Simple meals around the big day",
        description:
          "Monday through Wednesday dinners are deliberately quick and easy so you can save your energy for the main event.",
      },
      {
        heading: "Party-ready appetizers included",
        description:
          "If you're hosting or bringing something, the plan includes make-ahead appetizers and holiday snacks that travel well.",
      },
    ],
    sampleMeals: [
      {
        name: "Gingerbread Granola Parfait",
        mealType: "breakfast",
        description:
          "Greek yogurt layered with homemade gingerbread granola, sliced banana, and a drizzle of molasses.",
        prepTime: "10 min",
        tags: ["vegetarian", "christmas", "holiday"],
      },
      {
        name: "Rosemary Garlic Prime Rib",
        mealType: "dinner",
        description:
          "Slow-roasted prime rib with a rosemary garlic crust, served with horseradish cream and Yorkshire puddings.",
        prepTime: "3 hr",
        tags: ["high-protein", "christmas", "centerpiece"],
      },
      {
        name: "Roasted Root Vegetable Medley",
        mealType: "dinner",
        description:
          "Carrots, parsnips, and turnips roasted with thyme and honey until caramelized and tender.",
        prepTime: "40 min",
        tags: ["vegetarian", "christmas", "side-dish"],
      },
      {
        name: "Leftover Roast Beef and Arugula Wraps",
        mealType: "lunch",
        description:
          "Flour tortillas with sliced roast beef, peppery arugula, pickled red onion, and horseradish mayo.",
        prepTime: "10 min",
        tags: ["leftovers", "christmas", "quick"],
      },
      {
        name: "Cranberry Brie Bites",
        mealType: "snack",
        description:
          "Puff pastry cups filled with brie and cranberry sauce, baked until golden. Perfect party appetizer.",
        prepTime: "20 min",
        tags: ["vegetarian", "christmas", "party"],
      },
    ],
    faqs: [
      {
        question: "Does the plan cover Christmas Eve and Christmas Day?",
        answer:
          "Yes. Christmas Eve features a lighter dinner (many families do fish or soup), and Christmas Day includes the full feast with sides and dessert. The rest of the week is simpler meals.",
      },
      {
        question: "Can I make things ahead of time?",
        answer:
          "The plan is designed around make-ahead prep. Desserts and appetizers can be made days early, sides prepped the night before, and the main protein follows a clear timeline.",
      },
      {
        question: "What if my family doesn't eat red meat?",
        answer:
          "Set your dietary preferences during onboarding. The centerpiece adapts to roast chicken, glazed ham, stuffed pork loin, or a fully vegetarian option depending on your preferences.",
      },
      {
        question: "Is this plan good for people hosting for the first time?",
        answer:
          "Especially good. The step-by-step prep timeline takes the guesswork out of hosting. You'll know exactly when to start each dish so everything lands on the table at the same time.",
      },
    ],
    relatedSlugs: [
      "thanksgiving-meal-plan",
      "new-years-healthy-meal-plan",
      "meal-plan-for-entertaining",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },

  {
    slug: "new-years-healthy-meal-plan",
    type: "diet",
    title: "New Year's Healthy Meal Plan",
    metaDescription:
      "Start January with a healthy meal plan that actually tastes good. Clean eating recipes with a grocery list to reset after the holidays without crash dieting.",
    h1: "New Year's Healthy Meal Plan That Doesn't Feel Like Punishment",
    intro:
      "January 1st hits and suddenly everyone wants to eat nothing but salad. That lasts about four days. A better approach: a New Year's meal plan that's genuinely healthy but still satisfying enough to stick with. We build you a week of clean, whole-food meals that help you reset after holiday indulgence without the misery of a crash diet. Real food, real portions, real flavor.",
    valueProps: [
      {
        heading: "Reset without restriction",
        description:
          "No juice cleanses or elimination diets. Just whole foods, lean proteins, plenty of vegetables, and balanced portions that leave you satisfied.",
      },
      {
        heading: "Sustainable, not extreme",
        description:
          "Every meal is something you'd actually want to eat in February too. The goal is building habits, not white-knuckling through a miserable week.",
      },
      {
        heading: "Post-holiday detox done right",
        description:
          "Less sugar, less processed food, more water-rich vegetables and fiber. Your body resets naturally when you feed it well.",
      },
    ],
    sampleMeals: [
      {
        name: "Green Smoothie Bowl with Hemp Seeds",
        mealType: "breakfast",
        description:
          "Blended spinach, banana, and almond milk topped with hemp seeds, sliced kiwi, and unsweetened coconut.",
        prepTime: "10 min",
        tags: ["vegan", "clean-eating", "high-fiber"],
      },
      {
        name: "Turmeric Chicken and Quinoa Bowl",
        mealType: "lunch",
        description:
          "Grilled turmeric-spiced chicken over quinoa with roasted broccoli, shredded carrots, and a lemon tahini drizzle.",
        prepTime: "25 min",
        tags: ["high-protein", "clean-eating", "anti-inflammatory"],
      },
      {
        name: "Baked Salmon with Roasted Cauliflower",
        mealType: "dinner",
        description:
          "Wild salmon fillet baked with lemon and dill, served with roasted cauliflower and a simple green salad.",
        prepTime: "25 min",
        tags: ["high-protein", "omega-3", "gluten-free"],
      },
      {
        name: "Turkey and Veggie Lettuce Wraps",
        mealType: "dinner",
        description:
          "Seasoned ground turkey with water chestnuts and shredded carrots in crisp butter lettuce cups with a ginger soy sauce.",
        prepTime: "20 min",
        tags: ["high-protein", "low-carb", "clean-eating"],
      },
      {
        name: "Apple Slices with Cinnamon Almond Butter",
        mealType: "snack",
        description:
          "Crisp apple slices with a tablespoon of almond butter and a dusting of cinnamon.",
        prepTime: "5 min",
        tags: ["vegan", "clean-eating", "no-cook"],
      },
    ],
    faqs: [
      {
        question: "Is this a detox or cleanse program?",
        answer:
          "No. There's no fasting, juicing, or elimination. It's a week of balanced, whole-food meals designed to help you feel better after holiday eating. Your body detoxes on its own when you feed it real food.",
      },
      {
        question: "Will I feel hungry on this plan?",
        answer:
          "No. Meals are designed with adequate protein, healthy fats, and fiber to keep you full. This isn't a calorie-restriction plan — it's about food quality, not deprivation.",
      },
      {
        question: "Can I follow this plan beyond January?",
        answer:
          "Absolutely. There's nothing January-specific about eating well. Many subscribers start with this plan and continue with similar balanced plans every week throughout the year.",
      },
      {
        question: "Is this plan good for weight loss?",
        answer:
          "It emphasizes whole foods, lean proteins, and vegetables, which naturally supports healthy weight management. Set your calorie preferences during onboarding for a more targeted approach.",
      },
    ],
    relatedSlugs: [
      "christmas-meal-plan",
      "clean-eating-meal-plan",
      "high-protein-meal-plan",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },

  {
    slug: "super-bowl-meal-plan",
    type: "diet",
    title: "Super Bowl Meal Plan",
    metaDescription:
      "Get a Super Bowl week meal plan with game day snacks, appetizers, and regular weeknight dinners. Recipes and a grocery list for the whole week.",
    h1: "Super Bowl Meal Plan: Game Day Snacks Plus a Full Week of Meals",
    intro:
      "Super Bowl Sunday is a food holiday in its own right, but you still need to eat the other six days. A Super Bowl meal plan gives you easy weeknight dinners leading up to the game plus a full spread of wings, dips, sliders, and snacks for Sunday. One grocery list covers everything so you're not making a separate trip for party food. Whether you're hosting twenty people or just watching with your household, the plan scales.",
    valueProps: [
      {
        heading: "Game day spread, fully planned",
        description:
          "Wings, dips, sliders, nachos, and more — all with make-ahead timelines so you're watching the game, not stuck in the kitchen during kickoff.",
      },
      {
        heading: "Easy meals the rest of the week",
        description:
          "Monday through Saturday dinners are quick and simple because your culinary energy is going toward Sunday. Nothing fancy, nothing fussy.",
      },
      {
        heading: "Scales to your party size",
        description:
          "Hosting a crowd or watching solo? All recipes scale based on your household size. The grocery list adjusts automatically.",
      },
    ],
    sampleMeals: [
      {
        name: "Loaded Breakfast Burritos",
        mealType: "breakfast",
        description:
          "Scrambled eggs, black beans, cheddar, salsa, and avocado in a large flour tortilla. Batch-wrappable for the week.",
        prepTime: "15 min",
        tags: ["high-protein", "meal-prep", "hearty"],
      },
      {
        name: "Crispy Baked Buffalo Wings",
        mealType: "dinner",
        description:
          "Oven-baked chicken wings tossed in buffalo sauce, served with celery sticks and homemade blue cheese dip.",
        prepTime: "45 min",
        tags: ["high-protein", "game-day", "crowd-pleaser"],
      },
      {
        name: "Slow Cooker Pulled Pork Sliders",
        mealType: "dinner",
        description:
          "Pork shoulder slow-cooked with BBQ sauce, piled onto slider buns with coleslaw.",
        prepTime: "15 min active",
        tags: ["slow-cooker", "game-day", "make-ahead"],
      },
      {
        name: "Seven-Layer Dip with Tortilla Chips",
        mealType: "snack",
        description:
          "Refried beans, guacamole, sour cream, salsa, cheese, olives, and green onions layered in a dish.",
        prepTime: "15 min",
        tags: ["vegetarian", "game-day", "no-cook"],
      },
      {
        name: "Quick Chicken Quesadillas",
        mealType: "lunch",
        description:
          "Shredded rotisserie chicken with pepper jack cheese, peppers, and onions in a crispy tortilla.",
        prepTime: "10 min",
        tags: ["quick", "kid-friendly", "weeknight"],
      },
    ],
    faqs: [
      {
        question: "How many people does the game day spread feed?",
        answer:
          "It scales to your household size. Set your headcount during onboarding and the recipes and grocery list adjust. For a party, just increase the number and all quantities scale up.",
      },
      {
        question: "Can I make game day food ahead of time?",
        answer:
          "Most of the spread is designed to be prepped Saturday. Dips, marinated wings, and slow cooker recipes can all be started early so Sunday morning is stress-free.",
      },
      {
        question: "What if I want healthier game day options?",
        answer:
          "Set your dietary preferences to emphasize lean proteins or vegetables. You'll still get crowd-pleasing food — think turkey chili, veggie platters with killer dips, and baked instead of fried options.",
      },
      {
        question: "Does the plan include drinks?",
        answer:
          "The plan focuses on food, but we include a simple drink pairing suggestion for game day. The grocery list covers all food ingredients but not beverages.",
      },
    ],
    relatedSlugs: [
      "meal-plan-for-entertaining",
      "bbq-summer-meal-plan",
      "high-protein-meal-plan",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },

  {
    slug: "bbq-summer-meal-plan",
    type: "diet",
    title: "Summer BBQ Meal Plan",
    metaDescription:
      "Get a summer BBQ meal plan with grilling recipes, fresh salads, and no-cook lunches. Weekly plan with recipes and a grocery list for warm-weather eating.",
    h1: "Summer BBQ Meal Plan with Grilling Recipes and Fresh Sides",
    intro:
      "Fire up the grill and put the oven on standby. A summer BBQ meal plan centers your week around outdoor cooking with marinades, rubs, and grilled vegetables alongside fresh salads and no-cook lunches that keep the kitchen cool. Whether you have a charcoal grill or a propane setup, every recipe is designed for warm-weather cooking. Quick prep, bold flavors, and minimal indoor cleanup.",
    valueProps: [
      {
        heading: "Grill-centric dinners",
        description:
          "Every dinner hits the grill — steaks, chicken, fish, vegetables, even fruit for dessert. Your oven gets the week off while the grill does the heavy lifting.",
      },
      {
        heading: "No-cook lunches and cold sides",
        description:
          "Lunches are designed for zero cooking. Think grain salads, wraps, and chilled noodle bowls that you can prep Sunday and grab all week.",
      },
      {
        heading: "Perfect for hosting",
        description:
          "Every grilled dinner is crowd-scalable. Having people over? Just increase portions. The recipes are designed to work for two or twenty.",
      },
    ],
    sampleMeals: [
      {
        name: "Grilled Peach and Burrata Salad",
        mealType: "lunch",
        description:
          "Halved peaches charred on the grill, served over arugula with burrata, basil, and a balsamic drizzle.",
        prepTime: "15 min",
        tags: ["vegetarian", "summer", "grilling"],
      },
      {
        name: "Korean BBQ Short Ribs",
        mealType: "dinner",
        description:
          "Flanken-cut short ribs marinated in soy, sesame, garlic, and pear, grilled hot and fast.",
        prepTime: "20 min plus marinade",
        tags: ["high-protein", "grilling", "asian-inspired"],
      },
      {
        name: "Grilled Chicken Thighs with Chimichurri",
        mealType: "dinner",
        description:
          "Bone-in chicken thighs grilled until crispy-skinned, topped with bright herbaceous chimichurri sauce.",
        prepTime: "25 min",
        tags: ["high-protein", "grilling", "gluten-free"],
      },
      {
        name: "Mediterranean Orzo Salad",
        mealType: "lunch",
        description:
          "Chilled orzo with cucumbers, cherry tomatoes, kalamata olives, feta, and a lemon oregano vinaigrette.",
        prepTime: "15 min",
        tags: ["vegetarian", "no-cook", "meal-prep"],
      },
      {
        name: "Frozen Mango and Coconut Bites",
        mealType: "snack",
        description:
          "Frozen mango chunks dipped in coconut cream and rolled in toasted coconut flakes.",
        prepTime: "10 min plus freeze",
        tags: ["vegan", "summer", "no-bake"],
      },
    ],
    faqs: [
      {
        question: "Do I need a specific type of grill?",
        answer:
          "No. All recipes work on gas, charcoal, or pellet grills. We include temperature guidelines rather than burner settings so the recipes adapt to whatever you're cooking on.",
      },
      {
        question: "What if it rains and I can't grill?",
        answer:
          "Every grilled recipe includes a stovetop or oven alternative. A cast iron grill pan on the stove gives you similar results when the weather doesn't cooperate.",
      },
      {
        question: "Can I meal prep grilled food?",
        answer:
          "Yes. Grilled proteins reheat well and grilled vegetables are great cold in salads. The plan suggests which items to grill in bulk Sunday for easy assembly during the week.",
      },
      {
        question: "Are the recipes good for a cookout with guests?",
        answer:
          "Every dinner recipe is designed to scale up easily. Set a larger household size or just double the recipe. The grocery list adjusts to match.",
      },
    ],
    relatedSlugs: [
      "summer-meal-plan",
      "super-bowl-meal-plan",
      "meal-plan-for-entertaining",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },

  {
    slug: "meal-plan-for-entertaining",
    type: "diet",
    title: "Meal Plan for Entertaining",
    metaDescription:
      "Get a weekly meal plan for entertaining with dinner party recipes, appetizers, and easy weeknight meals. Impress guests without living in the kitchen.",
    h1: "Meal Plan for Entertaining That Makes You Look Like a Pro",
    intro:
      "Hosting a dinner party shouldn't mean eating cereal every other night because all your energy went into Saturday's menu. A meal plan for entertaining balances one or two impressive dinners with quick, easy meals the rest of the week. We handle the menu planning, prep timelines, and grocery list so you can focus on the table setting and the playlist. Every recipe is tested for wow factor and doability.",
    valueProps: [
      {
        heading: "Impressive but achievable",
        description:
          "Dinner party recipes that look complex but follow straightforward steps. Your guests will think you spent hours. You didn't.",
      },
      {
        heading: "Prep timelines included",
        description:
          "Know exactly what to make ahead, what to prep day-of, and what to finish while guests have drinks. No last-minute panic.",
      },
      {
        heading: "Easy meals around the event",
        description:
          "Weeknight dinners are deliberately simple — 20-minute meals so your cooking energy is saved for the main event.",
      },
    ],
    sampleMeals: [
      {
        name: "Whipped Feta and Roasted Tomato Crostini",
        mealType: "snack",
        description:
          "Baguette slices topped with whipped feta, slow-roasted cherry tomatoes, and fresh thyme. Make-ahead friendly.",
        prepTime: "25 min",
        tags: ["vegetarian", "appetizer", "make-ahead"],
      },
      {
        name: "Seared Duck Breast with Cherry Reduction",
        mealType: "dinner",
        description:
          "Pan-seared duck breast scored and cooked to medium-rare, finished with a tart cherry and red wine reduction.",
        prepTime: "30 min",
        tags: ["high-protein", "dinner-party", "impressive"],
      },
      {
        name: "Lemon Risotto with Shaved Parmesan",
        mealType: "dinner",
        description:
          "Creamy arborio rice slowly cooked with white wine, lemon zest, and finished with butter and shaved Parmigiano.",
        prepTime: "35 min",
        tags: ["vegetarian", "dinner-party", "comfort-food"],
      },
      {
        name: "Simple Pasta Aglio e Olio",
        mealType: "dinner",
        description:
          "Spaghetti tossed with garlic, olive oil, red pepper flakes, and parsley. A 15-minute weeknight dinner.",
        prepTime: "15 min",
        tags: ["vegetarian", "quick", "weeknight"],
      },
      {
        name: "Chocolate Olive Oil Cake",
        mealType: "snack",
        description:
          "Rich, fudgy cake made with olive oil and dark chocolate. Bakes in one pan, better the next day.",
        prepTime: "45 min",
        tags: ["vegetarian", "dessert", "make-ahead"],
      },
    ],
    faqs: [
      {
        question: "How many guests can the dinner party recipes serve?",
        answer:
          "Recipes scale to your needs. Set your expected guest count and all portions and the grocery list adjust. Most dinner party recipes work well for 4-8 people.",
      },
      {
        question: "I'm not an experienced cook — can I still host?",
        answer:
          "Absolutely. The plan includes detailed prep timelines and step-by-step instructions. Every impressive-looking dish is broken into simple steps that any home cook can follow.",
      },
      {
        question: "How far ahead can I prep?",
        answer:
          "Appetizers and desserts can usually be made 1-2 days ahead. The plan marks each recipe with its make-ahead window so you can spread the work across the week.",
      },
      {
        question: "Can I accommodate guests with dietary restrictions?",
        answer:
          "Yes. Add any dietary restrictions during onboarding and all recipes adapt. You can also note specific restrictions for dinner party nights.",
      },
    ],
    relatedSlugs: [
      "thanksgiving-meal-plan",
      "christmas-meal-plan",
      "super-bowl-meal-plan",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },

  {
    slug: "camping-meal-plan",
    type: "diet",
    title: "Camping Meal Plan",
    metaDescription:
      "Get a camping meal plan with outdoor cooking recipes, no-fridge meals, and a packing list. Easy campfire and camp stove meals for your next trip.",
    h1: "Camping Meal Plan with Easy Outdoor Cooking Recipes",
    intro:
      "Eating well while camping shouldn't mean living on hot dogs and trail mix. A camping meal plan gives you satisfying breakfasts, packable lunches, and campfire dinners that work with limited equipment and no refrigeration. We plan meals around what travels well, what cooks over a fire or camp stove, and what doesn't require a fully stocked kitchen. Every recipe lists exactly what gear you need so there are no surprises at the campsite.",
    valueProps: [
      {
        heading: "No fridge required",
        description:
          "Meals are designed for cooler-friendly or shelf-stable ingredients. Nothing that spoils in four hours sitting in the sun.",
      },
      {
        heading: "Minimal gear, maximum flavor",
        description:
          "Every recipe lists the exact equipment needed — usually just a camp stove, skillet, and a pot. No kitchen gadgets, no oven, no blender.",
      },
      {
        heading: "Prep at home, cook at camp",
        description:
          "Pre-chop, pre-marinate, and pre-measure at home so campsite cooking is fast and cleanup is minimal.",
      },
    ],
    sampleMeals: [
      {
        name: "Campfire Skillet Hash",
        mealType: "breakfast",
        description:
          "Pre-diced potatoes and peppers cooked in a cast iron skillet over the fire, topped with eggs and hot sauce.",
        prepTime: "20 min",
        tags: ["campfire", "one-pan", "hearty"],
      },
      {
        name: "Foil Packet Lemon Herb Fish",
        mealType: "dinner",
        description:
          "White fish fillet with zucchini, tomatoes, and herbs sealed in a foil packet and cooked over coals.",
        prepTime: "25 min",
        tags: ["campfire", "no-cleanup", "healthy"],
      },
      {
        name: "Peanut Butter Tortilla Roll-Ups",
        mealType: "lunch",
        description:
          "Flour tortilla spread with peanut butter, drizzled with honey, and filled with banana slices and granola.",
        prepTime: "5 min",
        tags: ["no-cook", "portable", "energy"],
      },
      {
        name: "One-Pot Camp Chili",
        mealType: "dinner",
        description:
          "Hearty chili with ground beef, beans, tomatoes, and spices cooked in a single pot over the camp stove.",
        prepTime: "30 min",
        tags: ["one-pot", "campfire", "high-protein"],
      },
      {
        name: "Trail Mix Energy Bites",
        mealType: "snack",
        description:
          "No-bake balls made with oats, peanut butter, honey, chocolate chips, and dried cranberries. Made at home, packed for the trip.",
        prepTime: "15 min",
        tags: ["no-bake", "portable", "make-ahead"],
      },
    ],
    faqs: [
      {
        question: "Do I need a camp stove or just a campfire?",
        answer:
          "The plan works with either. Most recipes can be made over a campfire with a grate, or on a basic camp stove. Each recipe notes which heat source works best.",
      },
      {
        question: "How do I keep food safe without a fridge?",
        answer:
          "The plan prioritizes shelf-stable and cooler-friendly ingredients. Perishable items are scheduled for the first day or two when your cooler is coldest. We include food safety tips for each meal.",
      },
      {
        question: "Can I prep everything at home before the trip?",
        answer:
          "Yes, and we recommend it. The plan includes a home-prep checklist: pre-chop vegetables, pre-mix spices, pre-marinate proteins. At camp, you just cook and eat.",
      },
      {
        question: "How many days does the camping meal plan cover?",
        answer:
          "The plan covers a full week, but most campers use 3-4 days of it. Pick the meals that match your trip length. Everything is modular.",
      },
    ],
    relatedSlugs: [
      "road-trip-meal-plan",
      "bbq-summer-meal-plan",
      "summer-meal-plan",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },

  {
    slug: "road-trip-meal-plan",
    type: "diet",
    title: "Road Trip Meal Plan",
    metaDescription:
      "Get a road trip meal plan with car-friendly, no-cook meals and cooler-packed snacks. Save money and eat better than fast food on your next drive.",
    h1: "Road Trip Meal Plan That Beats Fast Food at Every Stop",
    intro:
      "Gas station hot dogs and drive-through burgers get old by hour three. A road trip meal plan gives you car-friendly meals that travel well, taste great at room temperature or cold from a cooler, and don't make a mess in the car. We plan everything from grab-and-go breakfasts to cooler-packed lunches and easy dinners you can make at a rest stop or hotel. Save money, eat better, and skip the fast food guilt.",
    valueProps: [
      {
        heading: "Car-friendly, mess-free meals",
        description:
          "Everything is designed to eat with one hand or from a container on your lap. No dripping, no crumbling, no sauce on the steering wheel.",
      },
      {
        heading: "Cooler and shelf-stable options",
        description:
          "A mix of cooler-packed fresh meals and shelf-stable snacks so you're covered whether you have ice or not.",
      },
      {
        heading: "Save serious money",
        description:
          "A family of four spends $40-60 per fast food stop. One grocery run before the trip covers 3-4 days of meals for a fraction of that.",
      },
    ],
    sampleMeals: [
      {
        name: "Make-Ahead Breakfast Egg Muffins",
        mealType: "breakfast",
        description:
          "Baked egg cups with cheese, spinach, and diced ham. Made at home, eaten cold or at room temp from a cooler.",
        prepTime: "25 min",
        tags: ["make-ahead", "portable", "high-protein"],
      },
      {
        name: "Italian Sub Pinwheels",
        mealType: "lunch",
        description:
          "Flour tortillas layered with salami, provolone, lettuce, and Italian dressing, rolled and sliced into pinwheels.",
        prepTime: "10 min",
        tags: ["no-cook", "portable", "car-friendly"],
      },
      {
        name: "Mason Jar Greek Salad",
        mealType: "lunch",
        description:
          "Layered jar with dressing on the bottom, then chickpeas, cucumber, tomato, olives, feta, and romaine on top.",
        prepTime: "10 min",
        tags: ["no-cook", "portable", "vegetarian"],
      },
      {
        name: "Rest Stop Quesadillas",
        mealType: "dinner",
        description:
          "Pre-assembled cheese and bean quesadillas warmed on a portable griddle or campfire at a rest stop.",
        prepTime: "10 min",
        tags: ["portable", "quick", "kid-friendly"],
      },
      {
        name: "Homemade Trail Mix",
        mealType: "snack",
        description:
          "Custom mix of almonds, cashews, dark chocolate chips, dried mango, and coconut flakes. Portioned into snack bags.",
        prepTime: "5 min",
        tags: ["no-cook", "shelf-stable", "energy"],
      },
    ],
    faqs: [
      {
        question: "How do I keep food cold in the car?",
        answer:
          "A standard cooler with ice packs works for 2-3 days. The plan schedules perishable meals early and shelf-stable options later. We include cooler packing tips to maximize cold time.",
      },
      {
        question: "Can kids eat these meals in the car?",
        answer:
          "Yes. Every meal is designed to be mess-free and easy to eat without utensils. Pinwheels, wraps, muffins, and snack boxes are all kid-tested formats.",
      },
      {
        question: "How much money will I save versus fast food?",
        answer:
          "Most families save 50-70% compared to eating out at every stop. One pre-trip grocery run for $40-60 replaces $100-200 in fast food for a 3-4 day trip.",
      },
      {
        question: "What if I'm staying at hotels with a mini fridge?",
        answer:
          "Even better. The plan includes hotel-friendly options like overnight oats and microwave meals for nights you have access to a fridge and microwave.",
      },
    ],
    relatedSlugs: [
      "camping-meal-plan",
      "budget-meal-plan",
      "meal-prep-plan",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
];
