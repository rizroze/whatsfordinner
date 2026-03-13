import type { MealPlanPageData } from "./types";

export const cuisinesExtendedPages: MealPlanPageData[] = [
  {
    slug: "vegan-japanese-meal-plan",
    type: "combo",
    title: "Vegan Japanese Meal Plan — Plant-Based Japanese Recipes Weekly",
    metaDescription:
      "Get a weekly vegan Japanese meal plan with tofu, miso soup, edamame rice bowls, and veggie sushi. All the umami, zero animal products.",
    h1: "Vegan Japanese Meal Plans Built Around Umami, Not Meat",
    intro:
      "Japanese cooking already revolves around tofu, miso, seaweed, and fermented flavors — making it one of the most naturally vegan-friendly cuisines on the planet. The challenge is avoiding dashi (fish stock) and bonito that hide in seemingly plant-based dishes. Our vegan Japanese meal plans handle those swaps for you, so every bowl of ramen, every plate of gyoza, and every miso soup is 100% plant-based without losing an ounce of depth.",
    valueProps: [
      {
        heading: "Dashi-Free, Umami-Rich",
        description:
          "Every recipe uses kombu and shiitake-based dashi instead of bonito flakes, giving you that signature Japanese umami without any fish products.",
      },
      {
        heading: "Beyond Tofu and Rice",
        description:
          "We rotate through edamame, tempeh, mushrooms, natto, and plant-based proteins so your weekly plan stays interesting and nutritionally complete.",
      },
      {
        heading: "Meal Prep-Friendly Japanese Staples",
        description:
          "Rice, pickled vegetables, and miso paste keep for days. Most meals come together in under 30 minutes with a stocked Japanese pantry.",
      },
    ],
    sampleMeals: [
      {
        name: "Miso Ramen with Crispy Tofu and Corn",
        mealType: "dinner",
        description:
          "Rich miso broth with pan-fried tofu, sweet corn, scallions, nori, and ramen noodles topped with sesame seeds and chili oil.",
        prepTime: "30 min",
        tags: ["vegan", "japanese", "ramen", "soup"],
      },
      {
        name: "Edamame and Avocado Sushi Bowls",
        mealType: "lunch",
        description:
          "Sushi rice topped with shelled edamame, sliced avocado, cucumber, pickled ginger, and a soy-sesame dressing.",
        prepTime: "20 min",
        tags: ["vegan", "japanese", "bowl", "gluten-free"],
      },
      {
        name: "Vegetable Tempura with Tentsuyu Dipping Sauce",
        mealType: "dinner",
        description:
          "Lightly battered sweet potato, kabocha, shiso leaves, and green beans served with a kombu-based dipping sauce.",
        prepTime: "35 min",
        tags: ["vegan", "japanese", "tempura"],
      },
      {
        name: "Japanese Sweet Potato and Miso Oatmeal",
        mealType: "breakfast",
        description:
          "Savory oatmeal with roasted Japanese sweet potato, white miso, furikake, and a drizzle of toasted sesame oil.",
        prepTime: "15 min",
        tags: ["vegan", "japanese", "breakfast"],
      },
      {
        name: "Teriyaki Mushroom Onigiri",
        mealType: "lunch",
        description:
          "Seasoned rice balls stuffed with teriyaki-glazed shiitake mushrooms, wrapped in crispy nori sheets.",
        prepTime: "25 min",
        tags: ["vegan", "japanese", "rice", "snack"],
      },
    ],
    faqs: [
      {
        question: "Is Japanese food naturally vegan?",
        answer:
          "Many Japanese staples like rice, tofu, miso, and pickled vegetables are naturally vegan. However, traditional dashi (soup stock) uses bonito flakes (dried fish), and many sauces contain fish-based ingredients. Vegan Japanese cooking swaps to kombu and shiitake dashi, which delivers the same umami depth.",
      },
      {
        question: "How do I get enough protein on a vegan Japanese diet?",
        answer:
          "Japanese cuisine offers excellent plant protein sources: tofu (firm, silken, fried), edamame, natto (fermented soybeans), tempeh, and various mushrooms. A well-planned vegan Japanese meal plan easily hits 50-70g of protein per day.",
      },
      {
        question: "What Japanese pantry staples do I need?",
        answer:
          "Stock up on white miso paste, soy sauce (or tamari for gluten-free), rice vinegar, mirin, toasted sesame oil, nori sheets, kombu, and dried shiitake mushrooms. These last for months and form the backbone of most recipes.",
      },
      {
        question: "Can I meal prep Japanese food for the week?",
        answer:
          "Absolutely. Rice keeps well for 3-4 days, miso soup reheats beautifully, pickled vegetables improve with time, and sauces like teriyaki and ponzu store for weeks. Prep your rice and proteins on Sunday, then assemble meals in minutes.",
      },
    ],
    relatedSlugs: ["japanese", "vegan", "vegan-thai", "pescatarian-japanese"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "keto-indian-meal-plan",
    type: "combo",
    title: "Keto Indian Meal Plan — Low-Carb Indian Recipes Weekly",
    metaDescription:
      "Get a weekly keto Indian meal plan with paneer tikka, coconut curries, and cauliflower rice. Rich Indian flavors, under 30g net carbs daily.",
    h1: "Keto Indian Meal Plans That Keep the Spice, Drop the Carbs",
    intro:
      "Indian food and keto might sound like opposites — rice, naan, and lentils are staples, after all. But Indian cooking also has an incredible tradition of rich, fat-forward dishes: paneer in cream sauces, coconut-based curries, ghee-roasted vegetables, and spice blends that make cauliflower rice taste better than the real thing. Our keto Indian meal plans lean into that tradition, keeping you under 30g net carbs while delivering restaurant-quality flavor at home.",
    valueProps: [
      {
        heading: "Paneer Is Your Keto Superstar",
        description:
          "High in fat, moderate in protein, and zero carbs — paneer is the perfect keto protein. We use it in tikka, saag, and grilled preparations throughout the week.",
      },
      {
        heading: "Coconut-Based Curries, Not Cream Bombs",
        description:
          "While heavy cream works for keto, we mix in coconut milk and coconut cream for variety, keeping your palate and your macros happy.",
      },
      {
        heading: "Cauliflower Rice That Actually Works",
        description:
          "Spiced cauliflower rice with turmeric, cumin, and ghee is one of the few cauliflower rice preparations that genuinely rivals the original.",
      },
    ],
    sampleMeals: [
      {
        name: "Paneer Tikka Masala with Cauliflower Rice",
        mealType: "dinner",
        description:
          "Charred paneer cubes in a rich tomato-cream sauce with garam masala, served over turmeric cauliflower rice.",
        prepTime: "35 min",
        tags: ["keto", "indian", "low-carb", "gluten-free"],
      },
      {
        name: "Coconut Chicken Korma",
        mealType: "dinner",
        description:
          "Tender chicken thighs simmered in a creamy coconut-cashew sauce with cardamom, cinnamon, and a pinch of saffron.",
        prepTime: "40 min",
        tags: ["keto", "indian", "curry", "gluten-free"],
      },
      {
        name: "Keto Egg Bhurji (Indian Scrambled Eggs)",
        mealType: "breakfast",
        description:
          "Spiced scrambled eggs with onions, tomatoes, green chilies, and cilantro cooked in ghee. Protein-packed and under 5g carbs.",
        prepTime: "10 min",
        tags: ["keto", "indian", "breakfast", "gluten-free"],
      },
      {
        name: "Saag Paneer with Almond Flour Roti",
        mealType: "lunch",
        description:
          "Creamy spinach curry with golden-fried paneer cubes, served with a low-carb almond flour flatbread.",
        prepTime: "30 min",
        tags: ["keto", "indian", "vegetarian"],
      },
      {
        name: "Tandoori Chicken Salad",
        mealType: "lunch",
        description:
          "Yogurt-marinated tandoori chicken over mixed greens with cucumber raita, red onion, and a squeeze of lemon.",
        prepTime: "25 min",
        tags: ["keto", "indian", "salad", "gluten-free"],
      },
    ],
    faqs: [
      {
        question: "Can you really eat Indian food on keto?",
        answer:
          "Yes — you just need to skip the rice, naan, and lentil-heavy dishes. Indian cuisine has a wealth of keto-friendly options: paneer dishes, meat curries with coconut or cream bases, egg preparations, and vegetable dishes cooked in ghee. The spice game actually gets better on keto because fat carries flavor.",
      },
      {
        question: "What Indian dishes should I avoid on keto?",
        answer:
          "Skip rice, naan, roti, dal (lentils), samosas, and dishes with potato or chickpeas. Also watch for hidden sugars in store-bought curry pastes and sauces. Our meal plans handle all of this for you.",
      },
      {
        question: "Is ghee good for keto?",
        answer:
          "Ghee is one of the best keto fats — it's pure butterfat with the milk solids removed, meaning it's lactose-free, high in fat-soluble vitamins, and has a high smoke point for cooking. It's a staple in both Indian cooking and ketogenic diets.",
      },
      {
        question: "How many carbs are in a typical Indian keto meal?",
        answer:
          "Our Indian keto meals average 5-10g net carbs each, keeping your daily total under 30g. Most of the carbs come from vegetables, tomatoes, and onions used in curry bases — all nutrient-dense sources.",
      },
    ],
    relatedSlugs: ["indian", "keto", "keto-mediterranean", "vegetarian-indian"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "gluten-free-korean-meal-plan",
    type: "combo",
    title: "Gluten-Free Korean Meal Plan — Korean Recipes Without Gluten",
    metaDescription:
      "Get a weekly gluten-free Korean meal plan with bibimbap, kimchi, and rice-based dishes. All the bold Korean flavors using tamari instead of soy sauce.",
    h1: "Gluten-Free Korean Meal Plans — All the Flavor, None of the Wheat",
    intro:
      "Korean food is packed with naturally gluten-free ingredients: rice, vegetables, fermented kimchi, sesame oil, and gochugaru (chili flakes). The tricky part is soy sauce — it's in nearly everything, and regular soy sauce contains wheat. Our gluten-free Korean meal plans swap to tamari or coconut aminos across the board, and flag every hidden gluten source so you can enjoy bibimbap, bulgogi, and jjigae without worry.",
    valueProps: [
      {
        heading: "Tamari Swaps, Same Bold Flavor",
        description:
          "Every recipe uses tamari or coconut aminos instead of regular soy sauce. You get identical depth of flavor without any wheat exposure.",
      },
      {
        heading: "Rice-Based Everything",
        description:
          "Korean cuisine naturally centers on rice — not bread or pasta. Most traditional dishes only need a soy sauce swap to become fully gluten-free.",
      },
      {
        heading: "Fermented Foods for Gut Health",
        description:
          "Kimchi, doenjang, and gochujang (verified wheat-free versions) deliver probiotics and complex flavors that make Korean food uniquely satisfying.",
      },
    ],
    sampleMeals: [
      {
        name: "Bibimbap with Gochujang Sauce",
        mealType: "dinner",
        description:
          "Warm rice topped with seasoned spinach, bean sprouts, carrots, a fried egg, and spicy gochujang sauce (verified gluten-free).",
        prepTime: "30 min",
        tags: ["gluten-free", "korean", "bowl"],
      },
      {
        name: "Bulgogi Lettuce Wraps",
        mealType: "lunch",
        description:
          "Thinly sliced beef marinated in tamari, sesame oil, garlic, and pear, wrapped in butter lettuce with pickled daikon.",
        prepTime: "25 min",
        tags: ["gluten-free", "korean", "low-carb"],
      },
      {
        name: "Kimchi Jjigae (Kimchi Stew)",
        mealType: "dinner",
        description:
          "Hearty stew with aged kimchi, tofu, pork belly, and scallions simmered in a spicy, tangy broth. Naturally gluten-free with tamari.",
        prepTime: "35 min",
        tags: ["gluten-free", "korean", "stew", "spicy"],
      },
      {
        name: "Korean Sweet Potato and Egg Breakfast",
        mealType: "breakfast",
        description:
          "Roasted Korean sweet potato with a soft-boiled egg, kimchi, sesame seeds, and a drizzle of sesame oil.",
        prepTime: "20 min",
        tags: ["gluten-free", "korean", "breakfast"],
      },
      {
        name: "Japchae (Glass Noodle Stir-Fry)",
        mealType: "lunch",
        description:
          "Sweet potato glass noodles tossed with sesame oil, tamari, spinach, mushrooms, and julienned carrots.",
        prepTime: "25 min",
        tags: ["gluten-free", "korean", "noodles"],
      },
    ],
    faqs: [
      {
        question: "Is Korean food naturally gluten-free?",
        answer:
          "Many Korean dishes are naturally gluten-free since rice is the primary grain. However, regular soy sauce (ganjang) contains wheat, and some fermented pastes like gochujang and doenjang may include wheat flour. Always check labels or use verified gluten-free versions of these condiments.",
      },
      {
        question: "What replaces soy sauce in gluten-free Korean cooking?",
        answer:
          "Tamari (a Japanese soy sauce made without wheat) is the closest 1:1 substitute. Coconut aminos work too if you prefer a slightly sweeter, lower-sodium option. Both deliver the salty umami that Korean recipes need.",
      },
      {
        question: "Is kimchi gluten-free?",
        answer:
          "Traditional kimchi is naturally gluten-free — it's fermented cabbage, salt, garlic, ginger, and gochugaru. However, some commercial brands add wheat-containing soy sauce or fish sauce with wheat. Check labels or make your own to be safe.",
      },
      {
        question: "Can I eat Korean BBQ on a gluten-free diet?",
        answer:
          "Yes, but watch the marinades and dipping sauces. Plain grilled meats are fine. For marinades, swap regular soy sauce with tamari. Skip any battered or breaded items like fried chicken (unless using a rice flour batter).",
      },
    ],
    relatedSlugs: ["korean", "gluten-free", "gluten-free-asian", "gluten-free-meal-plan-for-beginners"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "vegetarian-mexican-meal-plan",
    type: "combo",
    title: "Vegetarian Mexican Meal Plan — Meatless Mexican Recipes Weekly",
    metaDescription:
      "Get a weekly vegetarian Mexican meal plan with bean tacos, veggie enchiladas, and elote. Bold Mexican flavors, completely meat-free.",
    h1: "Vegetarian Mexican Meal Plans Packed With Bold, Meatless Flavor",
    intro:
      "Mexican cuisine has been doing vegetarian right for centuries — beans, corn, rice, chiles, avocado, and cheese form the backbone of countless regional dishes. You don't need to substitute or fake anything. Our vegetarian Mexican meal plans highlight these ingredients with proper technique: slow-cooked black beans, fire-roasted salsas, handmade tortillas, and cheese that melts exactly the way it should. No sad bean burritos here.",
    valueProps: [
      {
        heading: "Beans Done Right",
        description:
          "Black beans, pinto beans, and refried beans are protein powerhouses. We season and slow-cook them properly so they're the star of the plate, not a filler.",
      },
      {
        heading: "Cheese and Crema as Accents",
        description:
          "Queso fresco, cotija, and Mexican crema add richness without overwhelming. We use them as finishing touches, not the main event.",
      },
      {
        heading: "Produce-Forward Preparations",
        description:
          "Roasted poblanos, charred corn, grilled nopales, and fresh salsas keep every meal vibrant and satisfying without relying on meat substitutes.",
      },
    ],
    sampleMeals: [
      {
        name: "Black Bean and Sweet Potato Tacos",
        mealType: "dinner",
        description:
          "Spiced black beans and roasted sweet potato in warm corn tortillas with pickled red onion, cilantro, and avocado crema.",
        prepTime: "30 min",
        tags: ["vegetarian", "mexican", "tacos"],
      },
      {
        name: "Veggie Enchiladas Verdes",
        mealType: "dinner",
        description:
          "Corn tortillas stuffed with sauteed zucchini, corn, and black beans, smothered in tangy tomatillo salsa verde and melted queso Oaxaca.",
        prepTime: "40 min",
        tags: ["vegetarian", "mexican", "enchiladas"],
      },
      {
        name: "Elote Bowl with Cotija and Lime",
        mealType: "lunch",
        description:
          "Charred corn kernels tossed with mayo, chili powder, cotija cheese, and lime juice over cilantro rice.",
        prepTime: "20 min",
        tags: ["vegetarian", "mexican", "bowl", "gluten-free"],
      },
      {
        name: "Chilaquiles with Fried Eggs",
        mealType: "breakfast",
        description:
          "Crispy tortilla chips simmered in red salsa, topped with two fried eggs, crumbled queso fresco, and sliced avocado.",
        prepTime: "15 min",
        tags: ["vegetarian", "mexican", "breakfast"],
      },
      {
        name: "Stuffed Poblano Peppers",
        mealType: "lunch",
        description:
          "Roasted poblano peppers filled with Mexican rice, black beans, corn, and melted Monterey Jack, topped with chipotle cream sauce.",
        prepTime: "35 min",
        tags: ["vegetarian", "mexican", "stuffed peppers", "gluten-free"],
      },
    ],
    faqs: [
      {
        question: "Is Mexican food good for vegetarians?",
        answer:
          "Mexican cuisine is one of the most vegetarian-friendly in the world. Beans, corn, rice, chiles, avocado, cheese, and an incredible variety of vegetables and fruits form the core of Mexican cooking. Many traditional dishes are already meatless — you're not substituting, you're eating the cuisine as it naturally exists.",
      },
      {
        question: "How do I get enough protein from vegetarian Mexican food?",
        answer:
          "Black beans and pinto beans are excellent protein sources (about 15g per cup). Add cheese, eggs, and pepitas (pumpkin seeds) throughout the week, and you'll easily hit your protein needs without any supplements or fake meats.",
      },
      {
        question: "Are corn tortillas better than flour for vegetarians?",
        answer:
          "Nutritionally, corn tortillas are lower in calories and naturally gluten-free. They also have a more complex flavor that pairs beautifully with vegetable fillings. Flour tortillas work great for burritos, but we lean toward corn for tacos and enchiladas.",
      },
      {
        question: "What are nopales and how do I use them?",
        answer:
          "Nopales are cactus paddles — a traditional Mexican ingredient that's high in fiber and has a mild, slightly tart flavor similar to green beans. Grill or sautee them for tacos, dice them into salads, or add them to scrambled eggs. They're available at most Mexican grocery stores.",
      },
    ],
    relatedSlugs: ["mexican", "vegetarian", "gluten-free-mexican", "vegetarian-mediterranean"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "halal-asian-meal-plan",
    type: "combo",
    title: "Halal Asian Meal Plan — Halal Asian Recipes Weekly",
    metaDescription:
      "Get a weekly halal Asian meal plan with halal chicken stir-fries, beef rendang, and noodle soups. Bold Asian flavors, 100% halal certified.",
    h1: "Halal Asian Meal Plans With Big Flavors and Zero Compromises",
    intro:
      "Asian cuisine spans an incredible range — but for halal eaters, navigating menus can be exhausting. Is the soy sauce alcohol-free? Is the oyster sauce halal? What about mirin? Our halal Asian meal plans remove the guesswork entirely. Every recipe uses halal-certified meats, alcohol-free sauces, and verified ingredients so you can enjoy the full spectrum of Asian cooking — from Thai basil chicken to beef rendang to ramen — with complete peace of mind.",
    valueProps: [
      {
        heading: "Halal Meats, Asian Techniques",
        description:
          "Every protein is halal-certified. We pair them with proper wok technique, marinades, and spice blends from across Asia — no flavor compromises.",
      },
      {
        heading: "Alcohol-Free Sauces and Marinades",
        description:
          "Mirin, rice wine, and cooking sake are replaced with halal-friendly alternatives like rice vinegar with honey, or halal-certified mirin substitutes.",
      },
      {
        heading: "Southeast Asian Classics Included",
        description:
          "Malaysian, Indonesian, and Thai cuisines have strong halal traditions. Our plans draw heavily from these cuisines where halal eating is the norm.",
      },
    ],
    sampleMeals: [
      {
        name: "Halal Chicken Pad Thai",
        mealType: "dinner",
        description:
          "Rice noodles wok-fried with halal chicken breast, bean sprouts, egg, and crushed peanuts in a tamarind-lime sauce (alcohol-free).",
        prepTime: "25 min",
        tags: ["halal", "asian", "thai", "noodles"],
      },
      {
        name: "Beef Rendang with Coconut Rice",
        mealType: "dinner",
        description:
          "Slow-braised halal beef in a rich coconut-lemongrass-galangal sauce, served with fragrant coconut rice.",
        prepTime: "2 hours",
        tags: ["halal", "asian", "malaysian", "gluten-free"],
      },
      {
        name: "Nasi Goreng (Indonesian Fried Rice)",
        mealType: "lunch",
        description:
          "Wok-fried rice with halal chicken, shrimp paste, sweet soy sauce, fried egg, and fresh cucumber-tomato salad.",
        prepTime: "20 min",
        tags: ["halal", "asian", "indonesian", "rice"],
      },
      {
        name: "Congee with Ginger and Halal Chicken",
        mealType: "breakfast",
        description:
          "Silky rice porridge slow-cooked with shredded halal chicken, fresh ginger, scallions, and a drizzle of sesame oil.",
        prepTime: "45 min",
        tags: ["halal", "asian", "chinese", "breakfast"],
      },
      {
        name: "Miso Chicken Ramen",
        mealType: "lunch",
        description:
          "Rich miso broth with halal chicken slices, ramen noodles, soft-boiled egg, corn, and nori. No pork, no alcohol.",
        prepTime: "30 min",
        tags: ["halal", "asian", "japanese", "ramen"],
      },
    ],
    faqs: [
      {
        question: "What makes Asian food halal or not halal?",
        answer:
          "The main concerns are: non-halal meats (pork is common in Chinese and Korean cooking), alcohol in sauces (mirin, rice wine, cooking sake), and cross-contamination in restaurants. At home with halal ingredients and alcohol-free sauce alternatives, you have full control.",
      },
      {
        question: "Is soy sauce halal?",
        answer:
          "Most naturally brewed soy sauces contain trace amounts of alcohol from fermentation, but the majority of Islamic scholars consider this permissible since it's a natural byproduct, not an intoxicant. If you prefer to avoid it entirely, look for halal-certified soy sauce brands.",
      },
      {
        question: "Which Asian cuisines are most halal-friendly?",
        answer:
          "Malaysian, Indonesian, and Turkish cuisines are the most naturally halal-friendly since they come from Muslim-majority countries. Thai and Indian cuisines also adapt easily. Chinese, Japanese, and Korean cuisines need more ingredient swaps due to pork and alcohol usage.",
      },
      {
        question: "What replaces mirin in halal cooking?",
        answer:
          "Mix rice vinegar with a small amount of honey or sugar for a similar sweet-tangy effect. Some brands also make halal-certified mirin substitutes. For recipes where mirin adds subtle sweetness, a splash of apple juice works surprisingly well.",
      },
    ],
    relatedSlugs: ["halal", "asian", "halal-mediterranean", "halal-indian"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "paleo-mediterranean-meal-plan",
    type: "combo",
    title: "Paleo Mediterranean Meal Plan — Grain-Free Mediterranean Recipes",
    metaDescription:
      "Get a weekly paleo Mediterranean meal plan with grilled seafood, olive oil veggies, and herb-roasted meats. No grains, no dairy, all flavor.",
    h1: "Paleo Mediterranean Meal Plans — Ancient Diet Meets Ancient Cuisine",
    intro:
      "The paleo diet and Mediterranean eating share a surprising amount of DNA: both emphasize whole foods, healthy fats, fresh vegetables, and quality proteins. The difference? Paleo drops the grains, legumes, and dairy that Mediterranean diets include. Our paleo Mediterranean meal plans keep the olive oil, the seafood, the herbs, and the sun-soaked produce — just without the pasta, bread, and feta. It's the best of both worlds for people who want clean eating with incredible flavor.",
    valueProps: [
      {
        heading: "Olive Oil as Your Primary Fat",
        description:
          "Mediterranean cooking revolves around extra-virgin olive oil — one of the most paleo-approved fats. It's the base for dressings, cooking, and finishing every dish.",
      },
      {
        heading: "Seafood-Forward Protein",
        description:
          "Wild-caught fish, shrimp, and shellfish are both paleo-perfect and quintessentially Mediterranean. Expect grilled branzino, herb-crusted salmon, and garlic shrimp regularly.",
      },
      {
        heading: "Vegetables Are the Main Course",
        description:
          "Roasted eggplant, grilled zucchini, marinated artichokes, and sun-dried tomatoes — Mediterranean vegetables are so flavorful they don't need grains to fill the plate.",
      },
    ],
    sampleMeals: [
      {
        name: "Herb-Crusted Salmon with Roasted Vegetables",
        mealType: "dinner",
        description:
          "Wild salmon with a Dijon-herb crust, roasted alongside cherry tomatoes, zucchini, and red onion with EVOO and lemon.",
        prepTime: "30 min",
        tags: ["paleo", "mediterranean", "seafood", "gluten-free"],
      },
      {
        name: "Greek Chicken Skewers with Tzatziki (Dairy-Free)",
        mealType: "lunch",
        description:
          "Marinated chicken thigh skewers with oregano and lemon, served with a coconut yogurt tzatziki and cucumber-tomato salad.",
        prepTime: "25 min",
        tags: ["paleo", "mediterranean", "greek", "dairy-free"],
      },
      {
        name: "Shakshuka (Eggs in Tomato Sauce)",
        mealType: "breakfast",
        description:
          "Poached eggs in a spiced tomato-pepper sauce with cumin, paprika, and fresh herbs. Served with roasted sweet potato wedges instead of bread.",
        prepTime: "20 min",
        tags: ["paleo", "mediterranean", "breakfast", "gluten-free"],
      },
      {
        name: "Grilled Shrimp over Cauliflower Tabbouleh",
        mealType: "lunch",
        description:
          "Lemon-garlic shrimp over a cauliflower rice tabbouleh with parsley, mint, cucumber, and tomatoes dressed in EVOO and lemon.",
        prepTime: "20 min",
        tags: ["paleo", "mediterranean", "seafood", "low-carb"],
      },
      {
        name: "Lamb Kofta with Roasted Eggplant",
        mealType: "dinner",
        description:
          "Spiced ground lamb shaped into kofta, grilled and served over smoky roasted eggplant with tahini drizzle and pomegranate seeds.",
        prepTime: "35 min",
        tags: ["paleo", "mediterranean", "lamb", "gluten-free"],
      },
    ],
    faqs: [
      {
        question: "How is paleo Mediterranean different from regular Mediterranean?",
        answer:
          "Both emphasize whole foods, healthy fats, and produce. The key difference is that paleo Mediterranean removes grains (pasta, bread, couscous), legumes (chickpeas, lentils), and dairy (feta, yogurt). You keep the olive oil, seafood, herbs, and vegetables — just skip the bread basket.",
      },
      {
        question: "Can I eat hummus on a paleo Mediterranean diet?",
        answer:
          "Traditional hummus uses chickpeas, which aren't paleo. However, you can make excellent paleo alternatives using roasted cauliflower, zucchini, or roasted beet as the base, blended with tahini, lemon, and garlic for a similar texture and flavor.",
      },
      {
        question: "What replaces pasta in paleo Mediterranean cooking?",
        answer:
          "Zucchini noodles (zoodles), spaghetti squash, and cauliflower rice are the most common swaps. For heartier dishes, roasted eggplant slices or sweet potato rounds work as a base instead of bread or grains.",
      },
      {
        question: "Is this diet sustainable long-term?",
        answer:
          "Many people find paleo Mediterranean highly sustainable because of the flavor variety. Mediterranean cooking techniques and ingredients make paleo restrictions feel less restrictive. The emphasis on olive oil, seafood, and seasonal produce means you're never bored.",
      },
    ],
    relatedSlugs: ["mediterranean", "paleo-meal-plan", "keto-mediterranean", "pescatarian-mediterranean"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "low-carb-italian-meal-plan",
    type: "combo",
    title: "Low-Carb Italian Meal Plan — Italian Recipes Without the Pasta",
    metaDescription:
      "Get a weekly low-carb Italian meal plan with zucchini noodles, eggplant parm, and grilled proteins. Classic Italian flavors under 50g carbs daily.",
    h1: "Low-Carb Italian Meal Plans That Don't Miss the Pasta",
    intro:
      "Italian food without carbs sounds impossible — but Italian cooking is about so much more than pasta and bread. It's about perfectly seared proteins, slow-simmered sauces, fresh herbs, quality olive oil, and vegetables prepared with care. Our low-carb Italian meal plans focus on the parts of Italian cuisine that were always low-carb: chicken piccata, eggplant parmesan, caprese salads, and osso buco. The pasta was just a vehicle — the sauce was always the star.",
    valueProps: [
      {
        heading: "Zoodles That Actually Work",
        description:
          "When you top zucchini noodles with a slow-simmered Bolognese or a proper pesto, the pasta shape genuinely doesn't matter. The sauce does the talking.",
      },
      {
        heading: "Italian Proteins Are Naturally Low-Carb",
        description:
          "Chicken parm, veal piccata, grilled branzino, prosciutto-wrapped anything — Italian protein preparations are already low-carb by nature.",
      },
      {
        heading: "Antipasto Is Your Best Friend",
        description:
          "Italian antipasto platters (cured meats, cheeses, olives, roasted peppers, marinated artichokes) are essentially a low-carb dream meal.",
      },
    ],
    sampleMeals: [
      {
        name: "Eggplant Parmesan (No Breadcrumbs)",
        mealType: "dinner",
        description:
          "Sliced eggplant baked with almond flour coating, marinara sauce, fresh mozzarella, and basil. All the comfort, fraction of the carbs.",
        prepTime: "45 min",
        tags: ["low-carb", "italian", "vegetarian"],
      },
      {
        name: "Zucchini Noodles with Bolognese",
        mealType: "dinner",
        description:
          "Spiralized zucchini topped with a slow-simmered meat sauce of ground beef, San Marzano tomatoes, garlic, and fresh oregano.",
        prepTime: "40 min",
        tags: ["low-carb", "italian", "zoodles", "gluten-free"],
      },
      {
        name: "Prosciutto and Melon Caprese Salad",
        mealType: "lunch",
        description:
          "Thin prosciutto slices with cantaloupe, fresh mozzarella, arugula, and a balsamic reduction drizzle.",
        prepTime: "10 min",
        tags: ["low-carb", "italian", "salad", "gluten-free"],
      },
      {
        name: "Italian Frittata with Roasted Peppers",
        mealType: "breakfast",
        description:
          "Fluffy egg frittata loaded with roasted red peppers, sun-dried tomatoes, fresh basil, and Parmesan cheese.",
        prepTime: "20 min",
        tags: ["low-carb", "italian", "breakfast", "gluten-free"],
      },
      {
        name: "Chicken Piccata with Lemon-Caper Sauce",
        mealType: "lunch",
        description:
          "Pan-seared chicken cutlets in a bright lemon-butter-caper sauce, served with sauteed broccolini instead of pasta.",
        prepTime: "25 min",
        tags: ["low-carb", "italian", "chicken", "gluten-free"],
      },
    ],
    faqs: [
      {
        question: "Can you eat Italian food on a low-carb diet?",
        answer:
          "Absolutely. Italian cuisine is much more than pasta — think grilled meats, seafood, salads, antipasto, and vegetable-forward dishes. The Mediterranean foundation of olive oil, herbs, and quality ingredients translates perfectly to low-carb eating.",
      },
      {
        question: "What replaces pasta in low-carb Italian cooking?",
        answer:
          "Zucchini noodles (zoodles) are the most popular swap. Spaghetti squash works great for baked dishes. For lasagna, thinly sliced eggplant or zucchini sheets replace the noodle layers beautifully.",
      },
      {
        question: "Is Italian bread essential to Italian meals?",
        answer:
          "In Italy, bread is used to soak up sauces — it's functional, not decorative. On a low-carb plan, you can skip it entirely because our recipes are designed to be satisfying on their own. If you miss the crunch, almond flour focaccia is a solid substitute.",
      },
      {
        question: "How many carbs are in a typical low-carb Italian meal?",
        answer:
          "Our Italian low-carb meals average 8-15g net carbs each, keeping your daily total well under 50g. Most carbs come from tomato sauces, vegetables, and the occasional almond flour coating.",
      },
    ],
    relatedSlugs: ["italian", "low-carb", "gluten-free-italian", "vegetarian-italian"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "dairy-free-indian-meal-plan",
    type: "combo",
    title: "Dairy-Free Indian Meal Plan — Indian Recipes Without Dairy",
    metaDescription:
      "Get a weekly dairy-free Indian meal plan with coconut cream curries, tofu tikka, and cashew-based sauces. Rich Indian flavors, completely dairy-free.",
    h1: "Dairy-Free Indian Meal Plans That Don't Sacrifice Richness",
    intro:
      "Indian cooking leans heavily on ghee, paneer, yogurt, and cream — which can make dairy-free eating feel like a dealbreaker. But here's the thing: huge regions of India cook with coconut milk, coconut oil, and cashew cream as their primary fats. South Indian, Keralan, and many vegan Jain recipes are naturally dairy-free and absolutely delicious. Our meal plans draw from these traditions while also showing you how to make North Indian favorites creamy without a drop of dairy.",
    valueProps: [
      {
        heading: "Coconut Cream Is the Secret Weapon",
        description:
          "Full-fat coconut cream creates the same rich, silky texture as heavy cream in curries. South Indian cooking has been doing this for centuries.",
      },
      {
        heading: "Cashew Cream for North Indian Classics",
        description:
          "Soaked and blended cashews replicate the creaminess of paneer-based sauces. Cashew tikka masala is indistinguishable from the original.",
      },
      {
        heading: "Ghee Swaps That Actually Work",
        description:
          "Coconut oil for South Indian dishes and neutral oil with a pinch of turmeric for North Indian recipes gives you ghee's richness and color.",
      },
    ],
    sampleMeals: [
      {
        name: "Coconut Chickpea Curry (Chana Masala)",
        mealType: "dinner",
        description:
          "Chickpeas simmered in a spiced coconut-tomato sauce with garam masala, turmeric, and cilantro over basmati rice.",
        prepTime: "30 min",
        tags: ["dairy-free", "indian", "vegan", "gluten-free"],
      },
      {
        name: "Tofu Tikka Masala",
        mealType: "dinner",
        description:
          "Crispy baked tofu in a rich cashew cream-tomato sauce with fenugreek, cumin, and a squeeze of lemon.",
        prepTime: "40 min",
        tags: ["dairy-free", "indian", "vegan"],
      },
      {
        name: "Keralan Coconut Fish Curry",
        mealType: "lunch",
        description:
          "White fish fillets simmered in a tangy coconut-tamarind sauce with curry leaves, mustard seeds, and green chilies.",
        prepTime: "25 min",
        tags: ["dairy-free", "indian", "seafood", "gluten-free"],
      },
      {
        name: "Masala Dosa with Coconut Chutney",
        mealType: "breakfast",
        description:
          "Crispy fermented rice-lentil crepe filled with spiced potato masala, served with fresh coconut chutney and sambar.",
        prepTime: "30 min",
        tags: ["dairy-free", "indian", "breakfast", "vegan"],
      },
      {
        name: "Aloo Gobi (Cauliflower and Potato Curry)",
        mealType: "lunch",
        description:
          "Dry-roasted cauliflower and potatoes with turmeric, cumin, coriander, and fresh ginger. Naturally dairy-free and deeply satisfying.",
        prepTime: "25 min",
        tags: ["dairy-free", "indian", "vegan", "gluten-free"],
      },
    ],
    faqs: [
      {
        question: "Can Indian food be made without dairy?",
        answer:
          "Yes — and it's easier than you think. South Indian cuisine is largely dairy-free by tradition, using coconut oil and coconut milk instead of ghee and cream. North Indian dishes can be adapted with cashew cream, coconut cream, and dairy-free yogurt alternatives.",
      },
      {
        question: "What replaces paneer in dairy-free Indian cooking?",
        answer:
          "Extra-firm tofu is the most common substitute — it has a similar texture and absorbs marinades and sauces well. Press it thoroughly and pan-fry for the best results. Chickpea tofu (made from chickpea flour) is another option.",
      },
      {
        question: "Is naan bread dairy-free?",
        answer:
          "Traditional naan contains yogurt and sometimes butter. For dairy-free Indian bread, choose roti/chapati (just flour, water, and salt) or make naan with coconut yogurt and brush with oil instead of butter.",
      },
      {
        question: "Will dairy-free Indian food taste the same?",
        answer:
          "The spice blends do most of the flavor heavy lifting in Indian cooking — not the dairy. When you use coconut cream or cashew cream as your fat base, the spices shine through just as strongly. Many people can't tell the difference in a blind taste test.",
      },
    ],
    relatedSlugs: ["indian", "dairy-free", "dairy-free-thai", "vegan-indian"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "pescatarian-korean-meal-plan",
    type: "combo",
    title: "Pescatarian Korean Meal Plan — Korean Seafood Recipes Weekly",
    metaDescription:
      "Get a weekly pescatarian Korean meal plan with seafood jjigae, sashimi bowls, and seaweed sides. Ocean-fresh Korean flavors, no meat needed.",
    h1: "Pescatarian Korean Meal Plans Built on Seafood and Fermented Flavors",
    intro:
      "Korea is a peninsula surrounded by water — seafood has always been central to Korean cooking. From haemul pajeon (seafood pancakes) to raw fish bibimbap to anchovy-based broths, the ocean is deeply woven into Korean food culture. Our pescatarian Korean meal plans lean into this tradition, combining fresh seafood with Korea's incredible fermented flavors (kimchi, doenjang, gochujang) for meals that are bold, warming, and completely meat-free.",
    valueProps: [
      {
        heading: "Korea's Seafood Tradition Runs Deep",
        description:
          "Korean coastal cuisine offers an enormous variety: grilled fish, raw preparations, seafood stews, dried anchovies, and seaweed dishes that you won't find in standard Korean restaurants abroad.",
      },
      {
        heading: "Fermented Flavors Elevate Everything",
        description:
          "Kimchi, gochujang, doenjang, and jeotgal (fermented seafood) create layers of umami that make simple fish dishes taste incredibly complex.",
      },
      {
        heading: "Banchan (Side Dishes) Are Naturally Pescatarian",
        description:
          "Most Korean side dishes — seasoned spinach, bean sprouts, pickled radish, seaweed salad — are naturally meat-free and round out every meal.",
      },
    ],
    sampleMeals: [
      {
        name: "Haemul Sundubu Jjigae (Seafood Soft Tofu Stew)",
        mealType: "dinner",
        description:
          "Spicy stew with silken tofu, shrimp, clams, zucchini, and egg in a gochugaru-anchovy broth. Served bubbling hot with rice.",
        prepTime: "25 min",
        tags: ["pescatarian", "korean", "stew", "spicy"],
      },
      {
        name: "Hoe Dupbap (Korean Sashimi Rice Bowl)",
        mealType: "lunch",
        description:
          "Fresh raw fish over warm rice with shredded lettuce, cucumber, sesame oil, and spicy gochujang sauce.",
        prepTime: "15 min",
        tags: ["pescatarian", "korean", "sashimi", "bowl"],
      },
      {
        name: "Haemul Pajeon (Seafood Scallion Pancake)",
        mealType: "dinner",
        description:
          "Crispy Korean pancake loaded with squid, shrimp, and scallions, served with a soy-vinegar dipping sauce.",
        prepTime: "20 min",
        tags: ["pescatarian", "korean", "pancake"],
      },
      {
        name: "Miyeokguk (Seaweed Soup) with Clams",
        mealType: "breakfast",
        description:
          "Nourishing seaweed soup with tender clams in a light anchovy broth. A traditional Korean birthday soup, now your Tuesday breakfast.",
        prepTime: "20 min",
        tags: ["pescatarian", "korean", "soup", "gluten-free"],
      },
      {
        name: "Grilled Mackerel with Banchan Spread",
        mealType: "lunch",
        description:
          "Salt-grilled mackerel served with rice and a spread of banchan: kimchi, seasoned spinach, pickled radish, and soy-braised tofu.",
        prepTime: "25 min",
        tags: ["pescatarian", "korean", "grilled fish", "gluten-free"],
      },
    ],
    faqs: [
      {
        question: "Is Korean food good for pescatarians?",
        answer:
          "Korean food is excellent for pescatarians. Coastal Korean cooking has centuries of seafood tradition — from raw fish preparations to seafood stews to dried anchovy broths. Many Korean soups and stews use anchovy or kelp-based broth rather than meat-based stock.",
      },
      {
        question: "What Korean dishes use seafood instead of meat?",
        answer:
          "Haemul jjigae (seafood stew), haemul pajeon (seafood pancake), grilled mackerel or squid, jjamppong (spicy seafood noodle soup), raw fish bibimbap, and myeokguk (seaweed soup with clams or mussels) are all traditional Korean seafood dishes.",
      },
      {
        question: "What is banchan and is it pescatarian-friendly?",
        answer:
          "Banchan are the small side dishes served with every Korean meal. Most are naturally vegetarian or pescatarian: kimchi, seasoned vegetables, pickled radish, seaweed salad, and dried anchovies. A few may contain meat-based seasonings, but our meal plans specify pescatarian-safe versions.",
      },
      {
        question: "Is kimchi pescatarian?",
        answer:
          "Traditional kimchi often contains fermented shrimp paste (saeujeot) or fish sauce, which is fine for pescatarians. If you're strictly vegetarian, you'd need a vegan kimchi. But for pescatarian eating, standard kimchi is perfectly appropriate.",
      },
    ],
    relatedSlugs: ["korean", "pescatarian", "pescatarian-japanese", "pescatarian-mediterranean"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "vegan-soul-food-meal-plan",
    type: "combo",
    title: "Vegan Soul Food Meal Plan — Plant-Based Soul Food Recipes Weekly",
    metaDescription:
      "Get a weekly vegan soul food meal plan with collard greens, black-eyed peas, cornbread, and BBQ jackfruit. Southern comfort, 100% plant-based.",
    h1: "Vegan Soul Food Meal Plans — Southern Comfort, Completely Plant-Based",
    intro:
      "Soul food is about warmth, tradition, and flavor that fills your whole body. And despite what people think, a huge portion of traditional soul food is already plant-based — collard greens, black-eyed peas, candied yams, cornbread, and okra have always been at the heart of the table. Our vegan soul food meal plans honor that tradition while reimagining the proteins: BBQ jackfruit instead of pulled pork, smoky mushroom \"ribs,\" and seasoned black-eyed pea patties that hold their own at any cookout.",
    valueProps: [
      {
        heading: "Southern Vegetables Are the Foundation",
        description:
          "Collard greens, black-eyed peas, sweet potatoes, okra, and corn have always been soul food staples. We cook them with smoked paprika and liquid smoke instead of ham hocks.",
      },
      {
        heading: "BBQ Jackfruit That Pulls Like Pork",
        description:
          "Young green jackfruit has a stringy, meat-like texture that shreds perfectly for BBQ sandwiches, tacos, and bowls with all the smoky-sweet flavor you crave.",
      },
      {
        heading: "Cornbread and Biscuits, Still on the Menu",
        description:
          "Vegan cornbread (with flax eggs and plant milk) and flaky biscuits keep the bread basket full. Some things are non-negotiable.",
      },
    ],
    sampleMeals: [
      {
        name: "BBQ Jackfruit Sandwich with Coleslaw",
        mealType: "lunch",
        description:
          "Shredded jackfruit slow-cooked in smoky BBQ sauce, piled on a toasted bun with tangy vinegar coleslaw.",
        prepTime: "35 min",
        tags: ["vegan", "soul food", "BBQ", "sandwich"],
      },
      {
        name: "Smoky Collard Greens with Black-Eyed Peas",
        mealType: "dinner",
        description:
          "Low-and-slow collard greens braised with smoked paprika, liquid smoke, garlic, and apple cider vinegar alongside stewed black-eyed peas over rice.",
        prepTime: "45 min",
        tags: ["vegan", "soul food", "southern", "gluten-free"],
      },
      {
        name: "Vegan Mac and Cheese",
        mealType: "dinner",
        description:
          "Creamy cashew-butternut squash cheese sauce baked over elbow pasta with a breadcrumb crust. Rich, gooey, and completely dairy-free.",
        prepTime: "40 min",
        tags: ["vegan", "soul food", "comfort food"],
      },
      {
        name: "Sweet Potato and Pecan Waffles",
        mealType: "breakfast",
        description:
          "Fluffy waffles made with mashed sweet potato and topped with toasted pecans, maple syrup, and a pinch of cinnamon.",
        prepTime: "20 min",
        tags: ["vegan", "soul food", "breakfast", "brunch"],
      },
      {
        name: "Fried Okra with Remoulade Dipping Sauce",
        mealType: "lunch",
        description:
          "Cornmeal-crusted okra fried until golden and crispy, served with a creamy vegan remoulade sauce.",
        prepTime: "20 min",
        tags: ["vegan", "soul food", "fried", "southern"],
      },
    ],
    faqs: [
      {
        question: "Can soul food be vegan?",
        answer:
          "Absolutely. Many soul food staples are already plant-based: collard greens, black-eyed peas, candied yams, cornbread, rice, okra, and stewed tomatoes. The main adjustment is swapping ham hocks, bacon, and lard for smoked paprika, liquid smoke, and plant-based fats. The seasoning tradition is what makes soul food — not the meat.",
      },
      {
        question: "What replaces meat in vegan soul food?",
        answer:
          "BBQ jackfruit is the most popular pulled pork substitute. Smoked mushrooms work great for \"ribs.\" Black-eyed pea patties or seasoned lentil loaf can replace meatloaf. For fried \"chicken,\" marinated cauliflower steaks with a crispy batter deliver the crunch and satisfaction.",
      },
      {
        question: "Is cornbread vegan?",
        answer:
          "Traditional cornbread uses eggs, butter, and buttermilk. Vegan cornbread swaps to flax eggs, plant butter, and plant milk — and honestly, the difference is minimal. Cornmeal does the heavy lifting for flavor and texture. Add a little sugar if you like it sweet, or keep it savory.",
      },
      {
        question: "How do you make collard greens flavorful without ham hocks?",
        answer:
          "The secret trio: smoked paprika, liquid smoke, and apple cider vinegar. Add garlic, onion, a pinch of red pepper flakes, and slow-cook them low and long. The greens develop deep, complex flavor that rivals any traditional preparation.",
      },
    ],
    relatedSlugs: ["vegan", "southern", "low-carb-southern", "plant-based-meal-plan"],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
];
