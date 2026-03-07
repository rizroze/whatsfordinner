import type { MealPlanPageData } from "./types";

export const DIET_PAGES: MealPlanPageData[] = [
  {
    slug: "vegetarian",
    type: "diet",
    title: "Vegetarian Meal Plans — Weekly Meatless Meals & Recipes",
    metaDescription:
      "Get personalized weekly vegetarian meal plans with grocery lists. High-protein, balanced meatless meals planned for you automatically. Try it free today.",
    h1: "Vegetarian Meal Plans That Actually Keep You Full",
    intro:
      "Eating vegetarian shouldn't mean surviving on pasta and cheese. The real challenge is hitting your protein goals and keeping meals exciting week after week without falling into a rut. We build you a fresh vegetarian meal plan every week with balanced macros, diverse cuisines, and a ready-to-go grocery list so you never have to wonder what's for dinner.",
    valueProps: [
      {
        heading: "Protein-balanced by default",
        description:
          "Every meal plan is designed to hit adequate protein through legumes, tofu, tempeh, eggs, and dairy so you never have to second-guess your nutrition.",
      },
      {
        heading: "Beyond salads and stir-fry",
        description:
          "Our plans pull from global cuisines — Indian dals, Mexican bean bowls, Japanese egg dishes — so meatless eating stays genuinely exciting.",
      },
      {
        heading: "Family-friendly options",
        description:
          "Meals that satisfy meat-eaters at the table too, with hearty textures and bold flavors that nobody will call boring.",
      },
    ],
    sampleMeals: [
      {
        name: "Crispy Chickpea Shakshuka",
        mealType: "breakfast",
        description:
          "Eggs poached in spiced tomato sauce with roasted chickpeas, providing 28g protein per serving.",
        prepTime: "25 min",
        tags: ["high-protein", "one-pan"],
      },
      {
        name: "Thai Peanut Tofu Buddha Bowl",
        mealType: "lunch",
        description:
          "Crispy baked tofu over brown rice with shredded vegetables and a creamy peanut-lime dressing, 22g protein.",
        prepTime: "30 min",
        tags: ["meal-prep", "high-protein"],
      },
      {
        name: "Black Bean & Sweet Potato Enchiladas",
        mealType: "dinner",
        description:
          "Corn tortillas stuffed with spiced black beans and roasted sweet potato, topped with enchilada sauce and melted cheese.",
        prepTime: "40 min",
        tags: ["comfort-food", "freezer-friendly"],
      },
      {
        name: "Mushroom & Gruyere Quiche",
        mealType: "dinner",
        description:
          "Buttery pastry filled with sauteed mixed mushrooms, caramelized onions, and nutty Gruyere cheese.",
        prepTime: "50 min",
        tags: ["batch-cook", "elegant"],
      },
      {
        name: "Spiced Roasted Edamame",
        mealType: "snack",
        description:
          "Oven-roasted edamame tossed with smoked paprika and garlic powder, packing 14g protein per cup.",
        prepTime: "15 min",
        tags: ["high-protein", "quick"],
      },
    ],
    faqs: [
      {
        question: "How do I get enough protein on a vegetarian meal plan?",
        answer:
          "Our vegetarian plans are designed to include protein-rich ingredients at every meal — think lentils, chickpeas, eggs, Greek yogurt, tofu, and cheese. Most plans deliver 60-90g of protein daily without any supplements. We also vary your protein sources throughout the week so you get a complete amino acid profile.",
      },
      {
        question: "Are vegetarian meal plans good for weight loss?",
        answer:
          "Vegetarian diets can be excellent for weight loss when properly planned. Our meal plans focus on whole foods, fiber-rich legumes, and plenty of vegetables that keep you satiated on fewer calories. You can set a calorie goal in your preferences and we'll tailor portions accordingly.",
      },
      {
        question: "Can I make these vegetarian meals kid-friendly?",
        answer:
          "Absolutely. Many of our vegetarian meals are naturally kid-friendly — think cheesy quesadillas, pasta with veggie sauce, and crispy baked falafel. You can mark 'family-friendly' in your preferences and we'll prioritize meals with familiar flavors and textures that younger eaters enjoy.",
      },
      {
        question: "What if my family still eats meat — can I use this?",
        answer:
          "Yes, and many of our users do exactly that. The meals are hearty and flavorful enough that meat-eaters enjoy them too. Some families use our vegetarian plans for weeknight dinners and add meat on weekends. The grocery lists make it easy to add a protein on the side if someone wants it.",
      },
    ],
    relatedSlugs: ["vegan", "pescatarian", "dairy-free"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "vegan",
    type: "diet",
    title: "Vegan Meal Plans — Plant-Based Weekly Meals & Groceries",
    metaDescription:
      "Personalized weekly vegan meal plans with complete grocery lists. Nutrient-dense, flavorful plant-based meals delivered to your inbox. Start your free plan.",
    h1: "Vegan Meal Plans That Don't Sacrifice Flavor or Nutrition",
    intro:
      "Going fully plant-based means navigating B12, iron, and protein without relying on the same three recipes forever. Meal planning as a vegan takes real effort — checking labels, balancing nutrients, and finding meals the whole household will eat. We handle all of that for you with weekly vegan plans built around whole foods, smart nutrition, and genuinely delicious cooking.",
    valueProps: [
      {
        heading: "Nutrient gap coverage",
        description:
          "Plans are built to maximize iron, calcium, and omega-3 intake from whole food sources like leafy greens, seeds, fortified foods, and legumes.",
      },
      {
        heading: "No fake-meat dependency",
        description:
          "While we include plant-based products when they make sense, most meals center on real whole foods — beans, grains, nuts, vegetables — not processed substitutes.",
      },
      {
        heading: "Batch-cook friendly",
        description:
          "Grain bases, sauces, and legume batches are reused across the week so you cook smarter, not more often.",
      },
    ],
    sampleMeals: [
      {
        name: "Turmeric Chickpea Scramble",
        mealType: "breakfast",
        description:
          "Mashed chickpeas sauteed with turmeric, black salt, spinach, and cherry tomatoes for an egg-free scramble with 18g protein.",
        prepTime: "15 min",
        tags: ["quick", "high-protein"],
      },
      {
        name: "Mediterranean Lentil & Quinoa Bowl",
        mealType: "lunch",
        description:
          "Red lentils and quinoa topped with roasted red pepper, cucumber, olives, and a tahini-lemon dressing, 24g protein per bowl.",
        prepTime: "25 min",
        tags: ["meal-prep", "high-protein"],
      },
      {
        name: "Coconut Curry with Tofu & Sweet Potato",
        mealType: "dinner",
        description:
          "Creamy coconut milk curry loaded with crispy tofu cubes, sweet potato chunks, and fresh Thai basil over jasmine rice.",
        prepTime: "35 min",
        tags: ["comfort-food", "one-pot"],
      },
      {
        name: "Stuffed Poblano Peppers with Black Beans",
        mealType: "dinner",
        description:
          "Roasted poblanos filled with seasoned black beans, corn, rice, and avocado crema made from cashews.",
        prepTime: "40 min",
        tags: ["mexican-inspired", "whole-foods"],
      },
      {
        name: "Chocolate Chia Pudding",
        mealType: "snack",
        description:
          "Chia seeds soaked overnight in oat milk with cacao powder and maple syrup, topped with fresh berries and hemp hearts.",
        prepTime: "5 min + overnight",
        tags: ["make-ahead", "no-cook"],
      },
    ],
    faqs: [
      {
        question: "Is a vegan meal plan nutritionally complete?",
        answer:
          "Our vegan plans are designed with nutritional completeness in mind, covering protein, iron, calcium, zinc, and omega-3s through strategic food combinations. We pair vitamin-C-rich foods with iron sources for better absorption and include omega-3-rich seeds daily. We do recommend a B12 supplement since it's the one nutrient that's difficult to get from plants alone.",
      },
      {
        question: "How much does a weekly vegan meal plan cost in groceries?",
        answer:
          "Vegan meal plans built around whole foods like beans, rice, lentils, and seasonal vegetables are often cheaper than omnivore diets. Most of our users report spending $50-80 per week for one person. The grocery list groups items efficiently so you buy only what you need with minimal waste.",
      },
      {
        question: "Can I build muscle on a vegan meal plan?",
        answer:
          "Yes. Our plans can be configured for higher protein targets using tofu, tempeh, seitan, legumes, and protein-rich grains like quinoa. Many users aiming for muscle gain hit 100g+ of plant protein daily. Set your nutrition goal to 'high protein' in preferences and we'll adjust accordingly.",
      },
      {
        question: "What if I'm vegan but also gluten-free?",
        answer:
          "You can combine dietary restrictions in your profile. Our system will generate plans that respect both — no animal products and no gluten. We have a dedicated vegan gluten-free combo page with meal ideas too. Common staples include rice, quinoa, potatoes, corn tortillas, and gluten-free oats.",
      },
    ],
    relatedSlugs: ["vegetarian", "gluten-free", "vegan-gluten-free"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "gluten-free",
    type: "diet",
    title: "Gluten-Free Meal Plans — Safe Weekly Meals & Grocery Lists",
    metaDescription:
      "Personalized gluten-free meal plans built for celiac and sensitivity needs. No cross-contamination guesswork — just safe, delicious weekly meals. Try free.",
    h1: "Gluten-Free Meal Plans Without the Guesswork",
    intro:
      "Living gluten-free means more than just skipping bread — it's reading every label, worrying about hidden gluten in sauces and seasonings, and constantly adapting recipes. Whether you have celiac disease or gluten sensitivity, the mental load of safe meal planning is exhausting. We generate fully gluten-free weekly plans using naturally safe ingredients so you can stop stressing and start cooking.",
    valueProps: [
      {
        heading: "Naturally gluten-free focus",
        description:
          "We prioritize ingredients that are inherently gluten-free — rice, potatoes, corn, quinoa — rather than relying on expensive specialty substitutes.",
      },
      {
        heading: "Hidden gluten eliminated",
        description:
          "No soy sauce, malt vinegar, or sneaky gluten sources — every recipe is vetted for common hidden gluten traps that catch people off guard.",
      },
      {
        heading: "Whole food, not processed GF",
        description:
          "Instead of swapping in gluten-free packaged foods that are often high in sugar and starch, our meals are built around real, nutrient-dense ingredients.",
      },
    ],
    sampleMeals: [
      {
        name: "Sweet Potato & Sausage Hash",
        mealType: "breakfast",
        description:
          "Diced sweet potato and GF breakfast sausage with bell peppers and a fried egg, providing a hearty 32g protein start to the day.",
        prepTime: "20 min",
        tags: ["one-pan", "high-protein"],
      },
      {
        name: "Vietnamese Rice Noodle Salad",
        mealType: "lunch",
        description:
          "Cold rice vermicelli with shredded chicken, fresh herbs, pickled carrots, and a tamari-lime dressing.",
        prepTime: "20 min",
        tags: ["no-cook", "light"],
      },
      {
        name: "Herb-Crusted Salmon with Roasted Vegetables",
        mealType: "dinner",
        description:
          "Wild salmon with a Dijon-herb crust served alongside roasted broccoli, carrots, and baby potatoes.",
        prepTime: "30 min",
        tags: ["omega-3", "sheet-pan"],
      },
      {
        name: "Chicken Tikka Masala with Basmati Rice",
        mealType: "dinner",
        description:
          "Tender chicken in a rich tomato-cream spice sauce, naturally gluten-free and served over fluffy basmati rice.",
        prepTime: "35 min",
        tags: ["comfort-food", "naturally-gf"],
      },
      {
        name: "Almond Butter Energy Bites",
        mealType: "snack",
        description:
          "Rolled oats (certified GF), almond butter, honey, and dark chocolate chips formed into no-bake bites with 8g protein each.",
        prepTime: "10 min",
        tags: ["no-bake", "portable"],
      },
    ],
    faqs: [
      {
        question: "Are these meal plans safe for celiac disease?",
        answer:
          "Our gluten-free plans use only ingredients that are naturally free of gluten or certified gluten-free. We avoid all wheat, barley, rye, and common cross-contamination sources like regular oats and soy sauce. However, we always recommend checking specific product labels in your area, as manufacturing practices vary.",
      },
      {
        question: "Is gluten-free meal planning more expensive?",
        answer:
          "It doesn't have to be. Our plans focus on naturally gluten-free staples — rice, potatoes, corn, beans, meat, fish, and vegetables — which are affordable pantry basics. We minimize the need for specialty GF products like bread and pasta, which is where costs typically spike.",
      },
      {
        question: "Can I do gluten-free and dairy-free at the same time?",
        answer:
          "Yes, you can combine restrictions in your profile. We'll generate plans that avoid both gluten and dairy. This is a common combination, especially for people with autoimmune conditions. Meals lean into naturally safe staples like rice bowls, grilled proteins, and vegetable-forward dishes.",
      },
      {
        question: "What grains can I eat on a gluten-free diet?",
        answer:
          "Our plans regularly feature rice, quinoa, millet, buckwheat (despite the name, it's GF), amaranth, corn, and certified gluten-free oats. These grains provide fiber, B vitamins, and variety so your meals never feel limited. We rotate them throughout the week to keep things interesting.",
      },
    ],
    relatedSlugs: ["dairy-free", "vegan", "keto"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "dairy-free",
    type: "diet",
    title: "Dairy-Free Meal Plans — Creamy Meals Without the Dairy",
    metaDescription:
      "Weekly dairy-free meal plans with rich, satisfying meals and organized grocery lists. No lactose, no compromise on flavor. Get your free plan today.",
    h1: "Dairy-Free Meal Plans That Never Feel Like They're Missing Something",
    intro:
      "Cutting dairy means rethinking everything from your morning coffee to weeknight pasta. The hardest part isn't avoiding milk — it's finding meals that still feel rich, creamy, and satisfying without cheese and butter as a crutch. Our dairy-free meal plans use smart substitutions and naturally dairy-free cuisines to build weeks of meals you'll genuinely look forward to.",
    valueProps: [
      {
        heading: "Calcium without the cow",
        description:
          "Plans include calcium-rich foods like fortified plant milk, leafy greens, almonds, and sesame seeds to keep your bones strong without dairy.",
      },
      {
        heading: "Creamy without cream",
        description:
          "We use cashew cream, coconut milk, avocado, and nutritional yeast to create rich, satisfying dishes that don't taste like they're missing anything.",
      },
      {
        heading: "Hidden dairy flagged",
        description:
          "No whey, casein, or lactose hiding in recipes — we avoid all dairy derivatives, not just the obvious milk and cheese.",
      },
    ],
    sampleMeals: [
      {
        name: "Coconut Yogurt Parfait with Granola",
        mealType: "breakfast",
        description:
          "Thick coconut yogurt layered with house-style granola, mixed berries, and a drizzle of maple syrup.",
        prepTime: "5 min",
        tags: ["quick", "no-cook"],
      },
      {
        name: "Avocado Chicken Caesar Wrap",
        mealType: "lunch",
        description:
          "Grilled chicken with avocado-based Caesar dressing, romaine, and shaved almonds in a whole wheat tortilla.",
        prepTime: "15 min",
        tags: ["portable", "high-protein"],
      },
      {
        name: "Cashew Cream Pasta Primavera",
        mealType: "dinner",
        description:
          "Penne tossed in a silky cashew cream sauce with roasted zucchini, cherry tomatoes, and fresh basil.",
        prepTime: "25 min",
        tags: ["comfort-food", "crowd-pleaser"],
      },
      {
        name: "Korean Beef Bibimbap",
        mealType: "dinner",
        description:
          "Seasoned ground beef over rice with sauteed vegetables, kimchi, and a gochujang sauce — naturally dairy-free Korean comfort food.",
        prepTime: "30 min",
        tags: ["naturally-df", "bowl-meal"],
      },
      {
        name: "Dark Chocolate Avocado Mousse",
        mealType: "snack",
        description:
          "Blended avocado with melted dark chocolate and a pinch of sea salt for a rich, creamy dessert with healthy fats.",
        prepTime: "10 min",
        tags: ["dessert", "whole-foods"],
      },
    ],
    faqs: [
      {
        question: "How do I get enough calcium without dairy?",
        answer:
          "Our dairy-free plans strategically include calcium-rich foods throughout the day — fortified plant milks, kale, broccoli, almonds, tahini, and chia seeds. A well-planned dairy-free diet can meet the recommended 1000mg daily calcium intake. We also pair calcium sources with vitamin D-rich foods to improve absorption.",
      },
      {
        question: "What's the best milk substitute for cooking?",
        answer:
          "It depends on the dish. Our recipes specify which plant milk works best — oat milk for creamy sauces, coconut milk for curries, and almond milk for baking. Full-fat coconut milk is the closest to heavy cream in richness. We test substitutions so you don't have to experiment.",
      },
      {
        question: "Is dairy-free the same as lactose-free?",
        answer:
          "No. Lactose-free products still contain milk proteins (casein, whey) — they just have the lactose sugar removed. Our dairy-free plans avoid all milk-derived ingredients entirely, making them safe for milk allergies and people who avoid dairy for ethical or health reasons, not just lactose intolerance.",
      },
      {
        question: "Will my kids notice the meals are dairy-free?",
        answer:
          "Most of our dairy-free meals are naturally without dairy rather than substitution-heavy, so they taste like normal food. Dishes like stir-fries, tacos, rice bowls, and grilled meats are inherently dairy-free. For comfort foods like mac and cheese, we use cashew-based sauces that even picky eaters tend to enjoy.",
      },
    ],
    relatedSlugs: ["gluten-free", "vegan", "vegetarian"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "keto",
    type: "diet",
    title: "Keto Meal Plans — Weekly Low-Carb Meals & Grocery Lists",
    metaDescription:
      "Personalized weekly keto meal plans that keep you under 30g net carbs. Macro-calculated meals with full grocery lists. Start your free keto plan now.",
    h1: "Keto Meal Plans That Make Low-Carb Living Simple",
    intro:
      "Keto sounds simple — cut the carbs, eat more fat — but in practice, it's a daily math problem. Tracking net carbs, avoiding hidden sugars in sauces, and keeping meals interesting beyond bacon and eggs takes serious planning. We generate keto meal plans that hit your macro targets automatically, with variety that keeps you in ketosis and out of the kitchen rut.",
    valueProps: [
      {
        heading: "Macros pre-calculated",
        description:
          "Every meal plan is built to keep daily net carbs under 30g while hitting your fat and protein ratios — no manual tracking needed.",
      },
      {
        heading: "Hidden carb protection",
        description:
          "We flag and avoid sneaky carb sources like certain condiments, starchy vegetables, and 'low-carb' products that can kick you out of ketosis.",
      },
      {
        heading: "Beyond the basics",
        description:
          "Our plans go way past steak and eggs — think Thai coconut soups, fathead pizza, and zucchini lasagna that make keto sustainable long-term.",
      },
    ],
    sampleMeals: [
      {
        name: "Bacon & Avocado Egg Cups",
        mealType: "breakfast",
        description:
          "Eggs baked in bacon-lined muffin cups with avocado and chives, 2g net carbs and 24g protein per serving.",
        prepTime: "20 min",
        tags: ["low-carb", "meal-prep"],
      },
      {
        name: "Grilled Chicken Greek Salad",
        mealType: "lunch",
        description:
          "Herb-marinated chicken thighs over romaine with feta, olives, cucumber, and a lemon-olive oil dressing, 5g net carbs.",
        prepTime: "15 min",
        tags: ["quick", "high-protein"],
      },
      {
        name: "Garlic Butter Shrimp with Zucchini Noodles",
        mealType: "dinner",
        description:
          "Jumbo shrimp sauteed in garlic butter and white wine over spiralized zucchini, just 4g net carbs per plate.",
        prepTime: "15 min",
        tags: ["quick", "seafood"],
      },
      {
        name: "Slow Cooker Pork Carnitas Lettuce Wraps",
        mealType: "dinner",
        description:
          "Tender pulled pork with lime crema, pickled onions, and cilantro in crisp butter lettuce cups, 3g net carbs.",
        prepTime: "15 min active + 6 hr slow cook",
        tags: ["slow-cooker", "batch-cook"],
      },
      {
        name: "Fat Bomb Peanut Butter Cups",
        mealType: "snack",
        description:
          "Dark chocolate shells filled with peanut butter and coconut oil, 2g net carbs each with 14g healthy fats.",
        prepTime: "10 min + chill",
        tags: ["sweet-treat", "make-ahead"],
      },
    ],
    faqs: [
      {
        question: "How many carbs per day on a keto meal plan?",
        answer:
          "Our standard keto plans target under 30g net carbs per day, which is the threshold most people need to stay in ketosis. Net carbs are total carbs minus fiber and sugar alcohols. You can adjust this target in your preferences if your doctor recommends a different range.",
      },
      {
        question: "Will I get the keto flu from these meal plans?",
        answer:
          "Keto flu symptoms like fatigue and headaches are usually caused by electrolyte imbalances during the transition. Our plans include electrolyte-rich foods — avocados for potassium, bone broth for sodium, and nuts for magnesium — to minimize these effects. Most symptoms resolve within the first week.",
      },
      {
        question: "Can I do keto on a budget?",
        answer:
          "Yes. Our plans use affordable keto staples like eggs, ground beef, chicken thighs, cabbage, and canned tuna alongside premium items. The grocery list is optimized to reduce waste, and batch-cooking components like pulled pork or hard-boiled eggs stretches ingredients across multiple meals.",
      },
      {
        question: "Is keto safe long-term?",
        answer:
          "Many people follow keto successfully for months or years, but it's best discussed with your healthcare provider. Our plans prioritize whole food fats (avocado, olive oil, nuts) over processed options and include plenty of low-carb vegetables for fiber and micronutrients. We also support cycling in and out of keto if that's your preference.",
      },
    ],
    relatedSlugs: ["low-carb", "gluten-free", "dairy-free"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "low-carb",
    type: "diet",
    title: "Low-Carb Meal Plans — Balanced Weekly Meals Under 100g Carbs",
    metaDescription:
      "Weekly low-carb meal plans with flexible carb targets and full grocery lists. Not keto-strict, just smart carb choices. Get your personalized plan free.",
    h1: "Low-Carb Meal Plans for People Who Don't Want to Go Full Keto",
    intro:
      "You want to cut carbs, but you don't want to give up fruit, sweet potatoes, or the occasional piece of toast. Low-carb eating is the flexible middle ground — fewer refined carbs, more protein and healthy fats, without the rigid rules of keto. Our low-carb plans keep you in the 50-100g carb range with balanced, satisfying meals that don't feel restrictive.",
    valueProps: [
      {
        heading: "Flexible carb targets",
        description:
          "Set your own daily carb range between 50-150g and we'll build meals that fit — strict enough to see results, flexible enough to enjoy your food.",
      },
      {
        heading: "Smart carb choices",
        description:
          "When carbs are included, they're the good kind — sweet potatoes, quinoa, berries, and legumes instead of white bread and sugary snacks.",
      },
      {
        heading: "Sustainable, not extreme",
        description:
          "Plans are designed for long-term adherence with enough variety and satisfaction that you won't rebound into a carb binge on Friday night.",
      },
    ],
    sampleMeals: [
      {
        name: "Smoked Salmon & Cream Cheese Roll-Ups",
        mealType: "breakfast",
        description:
          "Wild smoked salmon wrapped around herbed cream cheese with capers and arugula, 4g carbs and 20g protein.",
        prepTime: "5 min",
        tags: ["no-cook", "quick"],
      },
      {
        name: "Turkey Taco Lettuce Boats",
        mealType: "lunch",
        description:
          "Seasoned ground turkey with black beans, pico de gallo, and avocado in crisp romaine leaves, 12g carbs.",
        prepTime: "15 min",
        tags: ["quick", "high-protein"],
      },
      {
        name: "Lemon Herb Chicken with Cauliflower Mash",
        mealType: "dinner",
        description:
          "Pan-seared chicken breast with a lemon-herb pan sauce served over creamy garlic cauliflower mash, 8g net carbs.",
        prepTime: "25 min",
        tags: ["comfort-food", "classic"],
      },
      {
        name: "Seared Ahi Tuna with Sesame Cucumber Salad",
        mealType: "dinner",
        description:
          "Rare-seared ahi tuna steaks sliced over a crunchy sesame, cucumber, and edamame salad with ponzu dressing.",
        prepTime: "15 min",
        tags: ["seafood", "light"],
      },
      {
        name: "Celery with Everything Bagel Cream Cheese",
        mealType: "snack",
        description:
          "Crisp celery sticks loaded with cream cheese mixed with everything bagel seasoning, 3g carbs per serving.",
        prepTime: "5 min",
        tags: ["quick", "no-cook"],
      },
    ],
    faqs: [
      {
        question: "What's the difference between low-carb and keto?",
        answer:
          "Keto typically restricts carbs to under 30g per day to achieve ketosis, a metabolic state where your body burns fat for fuel. Low-carb is more flexible, usually allowing 50-150g of carbs daily. You still get benefits like reduced blood sugar spikes and better satiety, but you can include fruit, some grains, and starchy vegetables that keto doesn't allow.",
      },
      {
        question: "How many carbs should I eat per day to lose weight?",
        answer:
          "There's no single magic number — it depends on your activity level, metabolism, and goals. Our plans default to 75-100g net carbs per day, which is a sweet spot for most people looking to manage weight without feeling deprived. You can adjust your target in preferences and we'll rebuild your plan to match.",
      },
      {
        question: "Can I eat fruit on a low-carb diet?",
        answer:
          "Yes, and our plans include fruit regularly. Berries are the most low-carb-friendly — a cup of strawberries has just 8g net carbs. We also include small portions of apples, citrus, and stone fruits. The key is pairing fruit with protein or fat (like berries with Greek yogurt) to blunt blood sugar impact.",
      },
      {
        question: "Will I feel tired on a low-carb diet?",
        answer:
          "Some people experience an adjustment period in the first few days, but it's much milder than keto since you're still eating moderate carbs. Our plans time higher-carb meals around when you need energy most and include plenty of healthy fats and protein for sustained fuel throughout the day.",
      },
    ],
    relatedSlugs: ["keto", "gluten-free", "pescatarian"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "pescatarian",
    type: "diet",
    title: "Pescatarian Meal Plans — Fish & Veggie Meals Weekly",
    metaDescription:
      "Personalized pescatarian meal plans with seafood and plant-based meals every week. Omega-3-rich, sustainable, and delicious. Try your free plan today.",
    h1: "Pescatarian Meal Plans Packed with Omega-3s and Flavor",
    intro:
      "Pescatarian eating gives you the best of both worlds — the nutrition of seafood with the variety of plant-based cooking. But without a plan, it's easy to default to the same salmon-and-rice combo every night or overspend on fresh fish. We build weekly pescatarian plans that rotate affordable and premium seafood with hearty vegetarian meals, complete with a budget-conscious grocery list.",
    valueProps: [
      {
        heading: "Omega-3 optimized",
        description:
          "Plans include fatty fish like salmon, sardines, and mackerel 2-3 times per week to hit optimal omega-3 intake for heart and brain health.",
      },
      {
        heading: "Budget-smart seafood mix",
        description:
          "We balance premium fish with affordable options like canned tuna, frozen shrimp, and sardines so your grocery bill stays reasonable.",
      },
      {
        heading: "Sustainability focused",
        description:
          "Recipes favor sustainably sourced seafood and seasonal catches, with notes on which fish choices have the lowest environmental impact.",
      },
    ],
    sampleMeals: [
      {
        name: "Smoked Trout & Scrambled Eggs on Sourdough",
        mealType: "breakfast",
        description:
          "Soft scrambled eggs topped with flaked smoked trout, chives, and a squeeze of lemon on toasted sourdough.",
        prepTime: "10 min",
        tags: ["quick", "omega-3"],
      },
      {
        name: "Spicy Tuna Poke Bowl",
        mealType: "lunch",
        description:
          "Sushi-grade tuna cubed with soy, sesame, and sriracha over sushi rice with avocado, edamame, and pickled ginger.",
        prepTime: "15 min",
        tags: ["no-cook", "high-protein"],
      },
      {
        name: "Miso-Glazed Cod with Bok Choy",
        mealType: "dinner",
        description:
          "White cod fillets marinated in sweet white miso and broiled until caramelized, served with sauteed baby bok choy and steamed rice.",
        prepTime: "25 min",
        tags: ["elegant", "japanese-inspired"],
      },
      {
        name: "Shrimp & Vegetable Paella",
        mealType: "dinner",
        description:
          "Saffron-infused rice with jumbo shrimp, bell peppers, peas, and artichoke hearts in a traditional one-pan Spanish preparation.",
        prepTime: "40 min",
        tags: ["one-pan", "crowd-pleaser"],
      },
      {
        name: "Sardines on Crackers with Lemon & Herbs",
        mealType: "snack",
        description:
          "Canned sardines on whole grain crackers with a squeeze of lemon, fresh dill, and a drizzle of olive oil — 15g protein per serving.",
        prepTime: "5 min",
        tags: ["quick", "budget-friendly"],
      },
    ],
    faqs: [
      {
        question: "How often should I eat fish on a pescatarian diet?",
        answer:
          "We recommend 3-4 servings of fish or seafood per week, with the remaining meals being vegetarian. This aligns with dietary guidelines for omega-3 intake while keeping your diet varied. Our plans alternate between fish days and plant-based days so you get the best of both worlds.",
      },
      {
        question: "What about mercury in fish — is it safe to eat this much?",
        answer:
          "Our plans are designed with mercury awareness in mind. We limit high-mercury fish like tuna and swordfish to once per week and emphasize lower-mercury options like salmon, sardines, shrimp, and cod. Pregnant users can flag this in preferences for even stricter mercury limits.",
      },
      {
        question: "Is pescatarian eating expensive?",
        answer:
          "It can be if you're buying fresh salmon every night, but our plans are built to be budget-conscious. We mix in frozen seafood, canned fish, and affordable shellfish alongside premium options. Most users spend about the same as a typical omnivore grocery budget since the vegetarian meals offset the seafood costs.",
      },
      {
        question: "Can I be pescatarian and dairy-free?",
        answer:
          "Absolutely. Many of our users combine pescatarian with dairy-free, especially those following an anti-inflammatory diet. Set both preferences in your profile and we'll generate plans that include seafood and plant-based meals without any dairy products. Coconut milk-based seafood curries and fish tacos with avocado crema are plan favorites.",
      },
    ],
    relatedSlugs: ["vegetarian", "low-carb", "dairy-free"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "halal",
    type: "diet",
    title: "Halal Meal Plans — Weekly Halal-Compliant Meals & Recipes",
    metaDescription:
      "Personalized weekly halal meal plans with permissible ingredients only. No guesswork about compliance — just delicious, halal-certified meals. Start free.",
    h1: "Halal Meal Plans That Take the Stress Out of Permissible Eating",
    intro:
      "Planning halal meals goes beyond avoiding pork — it means checking every sauce, seasoning, and processed ingredient for hidden non-halal components like alcohol-based extracts or animal-derived gelatin. When you're cooking for a family, the constant vigilance is exhausting. Our halal meal plans use only permissible ingredients from the ground up, so you can focus on cooking, not label-reading.",
    valueProps: [
      {
        heading: "Fully compliant recipes",
        description:
          "Every recipe avoids pork, alcohol, and non-halal animal derivatives including gelatin, lard, and vanilla extract with alcohol — no hidden haram ingredients.",
      },
      {
        heading: "Global halal cuisine",
        description:
          "Plans draw from Middle Eastern, South Asian, North African, and Southeast Asian traditions where halal cooking is the natural default.",
      },
      {
        heading: "Family-sized portions",
        description:
          "Recipes are scaled for families with leftovers in mind, because halal household cooking is often communal and generous.",
      },
    ],
    sampleMeals: [
      {
        name: "Shakshuka with Za'atar Flatbread",
        mealType: "breakfast",
        description:
          "Eggs simmered in spiced tomato sauce with bell peppers and onions, served with warm za'atar-seasoned flatbread for dipping.",
        prepTime: "20 min",
        tags: ["middle-eastern", "one-pan"],
      },
      {
        name: "Chicken Shawarma Rice Bowl",
        mealType: "lunch",
        description:
          "Halal chicken thighs marinated in shawarma spices, grilled and sliced over basmati rice with tahini, pickled turnips, and fresh herbs.",
        prepTime: "25 min",
        tags: ["high-protein", "meal-prep"],
      },
      {
        name: "Lamb Kofta with Herbed Couscous",
        mealType: "dinner",
        description:
          "Grilled spiced lamb kofta kebabs served alongside fluffy herbed couscous, roasted vegetables, and a cool cucumber-yogurt sauce.",
        prepTime: "35 min",
        tags: ["grilling", "crowd-pleaser"],
      },
      {
        name: "Chicken Biryani",
        mealType: "dinner",
        description:
          "Fragrant layered rice dish with halal chicken, caramelized onions, saffron, and whole spices — a centerpiece meal for the whole family.",
        prepTime: "50 min",
        tags: ["south-asian", "batch-cook"],
      },
      {
        name: "Date & Walnut Energy Balls",
        mealType: "snack",
        description:
          "Medjool dates blended with walnuts, cocoa powder, and shredded coconut — naturally sweet, no added sugar, halal-compliant.",
        prepTime: "10 min",
        tags: ["no-bake", "portable"],
      },
    ],
    faqs: [
      {
        question: "How do you ensure meal plans are fully halal?",
        answer:
          "Our recipes are built from the ground up with halal compliance. We avoid all pork products, alcohol (including cooking wine and alcohol-based extracts), and non-halal animal derivatives. Ingredients like vanilla are specified as alcohol-free, and gelatin is replaced with agar-agar. The grocery list calls for halal-certified meat specifically.",
      },
      {
        question: "Can I use these meal plans during Ramadan?",
        answer:
          "Yes. During Ramadan, you can adjust your meal preferences to focus on suhoor (pre-dawn) and iftar (post-sunset) meals. We recommend energy-sustaining suhoor meals with complex carbs and protein, and balanced iftar meals that replenish without overwhelming your system. Set your eating schedule in preferences.",
      },
      {
        question: "Do the grocery lists specify halal meat brands?",
        answer:
          "Our grocery lists call for 'halal chicken,' 'halal ground beef,' etc., indicating that you should source from a halal butcher or look for halal-certified brands at your grocery store. Since halal meat availability varies by location, we don't specify brands but make it clear which items need halal certification.",
      },
      {
        question: "Are the vegetarian options in halal plans also halal?",
        answer:
          "Yes, all recipes in our halal plans are fully compliant — including vegetarian ones. We verify that cheeses don't contain animal rennet, that seasonings are alcohol-free, and that no non-halal additives are present. Vegetarian meals in your halal plan follow the same strict ingredient vetting as meat-based ones.",
      },
    ],
    relatedSlugs: ["dairy-free", "low-carb", "gluten-free"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "kosher",
    type: "diet",
    title: "Kosher Meal Plans — Weekly Kosher Meals & Grocery Lists",
    metaDescription:
      "Personalized weekly kosher meal plans that respect kashrut laws. Meat and dairy separation built in, with organized grocery lists. Try your free plan.",
    h1: "Kosher Meal Plans That Respect Kashrut and Your Time",
    intro:
      "Kosher meal planning isn't just about what you eat — it's about how ingredients combine. Keeping meat and dairy separate across meals, avoiding forbidden mixtures, and planning around Shabbat adds layers of complexity that generic meal planners completely ignore. Our kosher plans are built with kashrut rules at the foundation, properly separating meat and dairy meals and using only permissible ingredients.",
    valueProps: [
      {
        heading: "Meat-dairy separation built in",
        description:
          "Meal plans clearly designate each meal as meat (fleishig), dairy (milchig), or neutral (pareve) with proper spacing between meat and dairy meals.",
      },
      {
        heading: "Shabbat-ready meals",
        description:
          "Friday dinner and Saturday lunch options are designed as make-ahead dishes that can be prepared before Shabbat and served without cooking.",
      },
      {
        heading: "Pareve versatility",
        description:
          "Neutral meals that pair with either meat or dairy dishes, giving you maximum flexibility in how you structure your day.",
      },
    ],
    sampleMeals: [
      {
        name: "Smoked Salmon Bagel Board (Dairy)",
        mealType: "breakfast",
        description:
          "Everything bagels with cream cheese, lox, capers, red onion, and fresh dill — a classic dairy breakfast spread.",
        prepTime: "10 min",
        tags: ["dairy-meal", "no-cook"],
      },
      {
        name: "Falafel & Hummus Pita (Pareve)",
        mealType: "lunch",
        description:
          "Crispy baked falafel in warm pita with creamy hummus, Israeli salad, and tahini sauce — naturally pareve and protein-rich.",
        prepTime: "30 min",
        tags: ["pareve", "high-protein"],
      },
      {
        name: "Slow-Roasted Chicken with Root Vegetables (Meat)",
        mealType: "dinner",
        description:
          "Paprika-rubbed whole chicken roasted over carrots, potatoes, and onions — a classic fleishig Shabbat dinner centerpiece.",
        prepTime: "20 min active + 2 hr roast",
        tags: ["meat-meal", "shabbat"],
      },
      {
        name: "Brisket with Tzimmes (Meat)",
        mealType: "dinner",
        description:
          "Braised beef brisket with sweet carrots, dried apricots, and honey — a traditional holiday-worthy meat meal that feeds a crowd.",
        prepTime: "30 min active + 3 hr braise",
        tags: ["meat-meal", "holiday"],
      },
      {
        name: "Apple & Honey Cake (Pareve)",
        mealType: "snack",
        description:
          "Moist apple cake made with oil instead of butter, sweetened with honey and warm spices — pareve so it pairs with any meal.",
        prepTime: "15 min + 45 min bake",
        tags: ["pareve", "baking"],
      },
    ],
    faqs: [
      {
        question: "How do kosher meal plans handle meat and dairy separation?",
        answer:
          "Each meal is clearly labeled as meat (fleishig), dairy (milchig), or neutral (pareve). We schedule dairy and meat meals with appropriate time gaps — typically dairy meals at breakfast or lunch and meat meals at dinner. This way you naturally maintain separation without having to think about it.",
      },
      {
        question: "Do these plans work for Shabbat meals?",
        answer:
          "Yes. Friday dinner recipes are designed as make-ahead dishes you can prepare before sundown. Saturday lunch options include foods that taste great at room temperature or can be kept warm from before Shabbat. We include traditional options like cholent as well as modern dishes that follow the same make-ahead principle.",
      },
      {
        question: "Do I need to buy special kosher-certified products?",
        answer:
          "Our plans are designed with kosher compliance in mind, but you'll need to ensure your specific products carry appropriate hechsher (kosher certification). The grocery list indicates which items need certification — primarily processed foods, dairy products, and meat. Whole fruits, vegetables, and grains are naturally kosher and don't require certification.",
      },
      {
        question: "Can I customize for different levels of kashrut observance?",
        answer:
          "Our plans follow standard kashrut principles that work for most observant households. If you follow stricter standards like Cholov Yisrael for dairy or Glatt for meat, you can note this in your preferences. The recipes themselves are adaptable — it's primarily a matter of sourcing ingredients with the appropriate certification level.",
      },
    ],
    relatedSlugs: ["halal", "vegetarian", "dairy-free"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "no-meat-fridays",
    type: "diet",
    title: "No-Meat Friday Meal Plans — Meatless Friday Dinner Ideas",
    metaDescription:
      "Weekly meal plans with meatless Friday dinners for Lent and year-round observance. Fish, seafood, and vegetarian Friday meals your family will love.",
    h1: "Meatless Friday Meal Plans Your Whole Family Will Actually Enjoy",
    intro:
      "Whether you observe Lent, follow the Friday abstinence tradition year-round, or just want a structured meatless day, planning a satisfying Friday dinner without meat can feel like the hardest meal of the week. It's especially tough when you're feeding a family that expects a 'real dinner.' Our plans build your entire week with Friday as a meatless anchor — seafood, eggs, or fully vegetarian — so it feels intentional, not like a compromise.",
    valueProps: [
      {
        heading: "Friday-focused planning",
        description:
          "Your Friday dinner is the hero of the week — a genuinely exciting meatless meal, not an afterthought or a sad salad.",
      },
      {
        heading: "Fish and beyond",
        description:
          "Friday options range from seafood feasts to hearty vegetarian dishes, so you're not eating fish sticks every week out of desperation.",
      },
      {
        heading: "Lent-ready seasonal plans",
        description:
          "During Lent, plans can extend meatless meals to Ash Wednesday and all Fridays with appropriate fasting-day modifications.",
      },
    ],
    sampleMeals: [
      {
        name: "Veggie-Loaded Frittata",
        mealType: "breakfast",
        description:
          "Fluffy egg frittata with roasted bell peppers, spinach, mushrooms, and goat cheese — a protein-packed meatless morning.",
        prepTime: "25 min",
        tags: ["vegetarian", "one-pan"],
      },
      {
        name: "New England Clam Chowder",
        mealType: "lunch",
        description:
          "Creamy potato-based chowder loaded with tender clams, celery, and herbs — a hearty, comforting meatless-Friday classic.",
        prepTime: "35 min",
        tags: ["seafood", "comfort-food"],
      },
      {
        name: "Beer-Battered Fish & Chips",
        mealType: "dinner",
        description:
          "Crispy beer-battered cod fillets with thick-cut oven fries, tartar sauce, and a side of mushy peas — the ultimate Friday dinner.",
        prepTime: "30 min",
        tags: ["friday-dinner", "crowd-pleaser"],
      },
      {
        name: "Eggplant Parmesan",
        mealType: "dinner",
        description:
          "Breaded and baked eggplant slices layered with marinara sauce and melted mozzarella — a meatless Italian classic that satisfies like the real thing.",
        prepTime: "45 min",
        tags: ["vegetarian", "italian"],
      },
      {
        name: "Caprese Bruschetta",
        mealType: "snack",
        description:
          "Toasted baguette slices topped with fresh mozzarella, ripe tomatoes, basil, and a balsamic glaze — a simple meatless bite.",
        prepTime: "10 min",
        tags: ["vegetarian", "quick"],
      },
    ],
    faqs: [
      {
        question: "What can you eat on no-meat Fridays?",
        answer:
          "On meatless Fridays, you can eat fish, shellfish, eggs, dairy, and all plant-based foods. The abstinence is specifically from the meat of warm-blooded animals — beef, chicken, pork, and lamb. Our plans take full advantage of this range with seafood dinners, egg-based dishes, and hearty vegetarian options.",
      },
      {
        question: "Do I need to observe meatless Fridays only during Lent?",
        answer:
          "Many Catholics observe meatless Fridays year-round as a form of penance, not just during Lent. Our plans support both approaches — you can set it as a permanent Friday preference or activate it seasonally during the Lenten period. Either way, your Friday meals will be meatless and genuinely satisfying.",
      },
      {
        question:
          "How do I make meatless Friday dinners filling enough for my family?",
        answer:
          "The key is building meals with substance — hearty fish like salmon or cod, rich pasta dishes, cheesy casseroles, or protein-packed bean stews. Our Friday dinners are designed to be the most satisfying meal of the week, not a sacrifice. Kids especially love fish tacos, cheesy baked ziti, and shrimp quesadillas.",
      },
      {
        question: "Can I get meal plans just for Fridays during Lent?",
        answer:
          "Our plans cover the full week, but during Lent you can enable the meatless Friday setting and we'll also offer Ash Wednesday as meatless. The rest of the week follows your normal preferences. This way you get a complete plan with the Friday abstinence built right in rather than scrambling for one-off ideas each week.",
      },
    ],
    relatedSlugs: ["pescatarian", "vegetarian", "dairy-free"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
];
