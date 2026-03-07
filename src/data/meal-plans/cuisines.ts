import type { MealPlanPageData } from "./types";

export const CUISINE_PAGES: MealPlanPageData[] = [
  {
    slug: "american",
    type: "cuisine",
    title: "American Meal Plans — Weekly Recipes & Grocery Lists",
    metaDescription:
      "Get weekly American meal plans with classic comfort food recipes and organized grocery lists. Save time and eat well with dishes your whole family will love.",
    h1: "Classic American Meal Plans for Busy Families",
    intro:
      "From hearty burgers and BBQ to wholesome casseroles and Sunday roasts, American cuisine is all about bold flavors and satisfying portions. Our AI-powered meal planner builds you a weekly lineup of classic American dishes, complete with a grocery list so you can skip the guesswork and get cooking. Whether you're feeding a family of four or meal-prepping solo, these plans make weeknight dinners effortless.",
    valueProps: [
      {
        heading: "Comfort Food Done Right",
        description:
          "Every plan features beloved American staples — think meatloaf, mac and cheese, and slow-cooker chili — with balanced sides so comfort food doesn't mean cutting corners on nutrition.",
      },
      {
        heading: "Budget-Friendly Ingredients",
        description:
          "American classics rely on pantry staples and affordable proteins, so your weekly grocery bill stays manageable without sacrificing flavor.",
      },
      {
        heading: "Family-Tested Portions",
        description:
          "Recipes are scaled for real households with built-in leftover strategies, so Monday's roast chicken becomes Tuesday's chicken salad.",
      },
    ],
    sampleMeals: [
      {
        name: "Smoked Paprika BBQ Pulled Pork Sandwiches",
        mealType: "dinner",
        description:
          "Slow-cooker pork shoulder rubbed with smoked paprika and brown sugar, shredded and piled on brioche buns with tangy coleslaw.",
        prepTime: "20 min + 8 hr slow cook",
        tags: ["slow-cooker", "crowd-pleaser", "high-protein"],
      },
      {
        name: "Buttermilk Pancakes with Maple Berry Compote",
        mealType: "breakfast",
        description:
          "Fluffy buttermilk pancakes stacked tall and topped with a warm blueberry-maple compote made from scratch in five minutes.",
        prepTime: "20 min",
        tags: ["weekend-brunch", "kid-friendly"],
      },
      {
        name: "Classic Cobb Salad with Ranch Dressing",
        mealType: "lunch",
        description:
          "Rows of grilled chicken, avocado, bacon, hard-boiled egg, tomato, and blue cheese over crisp romaine with creamy homemade ranch.",
        prepTime: "25 min",
        tags: ["high-protein", "gluten-free"],
      },
      {
        name: "One-Pot Beef Chili with Cornbread",
        mealType: "dinner",
        description:
          "A thick, smoky beef and kidney bean chili simmered with cumin, chili powder, and fire-roasted tomatoes, served alongside golden skillet cornbread.",
        prepTime: "45 min",
        tags: ["one-pot", "meal-prep", "freezer-friendly"],
      },
      {
        name: "Turkey Club Wrap with Avocado",
        mealType: "lunch",
        description:
          "Sliced turkey breast, crispy bacon, avocado, lettuce, and tomato rolled in a flour tortilla with a swipe of chipotle mayo.",
        prepTime: "10 min",
        tags: ["quick", "lunchbox"],
      },
    ],
    faqs: [
      {
        question: "What is included in a weekly American meal plan?",
        answer:
          "Each plan includes 7 days of breakfast, lunch, and dinner recipes featuring classic American dishes. You also get an organized grocery list grouped by store section, so shopping takes minutes instead of an hour. Recipes range from quick 15-minute meals to slow-cooker dinners you can set and forget.",
      },
      {
        question: "Are American meal plans good for picky eaters?",
        answer:
          "Absolutely. American comfort food is familiar and crowd-pleasing by nature — think grilled cheese, chicken tenders, and pasta bakes. Our planner lets you set preferences so it avoids ingredients your family won't touch, and every recipe includes simple swap suggestions.",
      },
      {
        question: "How do I keep American meal plans healthy?",
        answer:
          "Our AI balances each week with lean proteins, vegetables, and whole grains alongside the comfort classics. You can set a nutrition goal like high-protein or balanced, and the planner adjusts portions and sides accordingly. You'll still get your favorites — just smarter versions.",
      },
      {
        question: "Can I meal prep with American recipes?",
        answer:
          "Most American staples are perfect for batch cooking. Chili, casseroles, soups, and grain bowls all store well for 3-4 days. The planner intentionally sequences recipes so that ingredients overlap — buy one rotisserie chicken and use it across three different meals during the week.",
      },
    ],
    relatedSlugs: ["southern", "mexican", "mediterranean"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "italian",
    type: "cuisine",
    title: "Italian Meal Plans — Weekly Pasta, Pizza & More",
    metaDescription:
      "Plan a week of authentic Italian meals with handpicked recipes and auto-generated grocery lists. From fresh pasta to risotto, dinner is handled every night.",
    h1: "Italian Meal Plans That Bring the Trattoria Home",
    intro:
      "Italian cooking is built on simplicity — great ingredients, honest technique, and meals meant to be shared. Our weekly Italian meal plans give you a curated lineup of pastas, risottos, grilled proteins, and rustic salads that taste like they came from a Roman trattoria. Every plan comes with a consolidated grocery list so you can grab your San Marzano tomatoes and fresh basil in one trip.",
    valueProps: [
      {
        heading: "Authentic Regional Recipes",
        description:
          "Plans rotate through Italian regions — Tuscan ribollita one night, Sicilian caponata the next — so you explore the full depth of Italian cooking without repeating the same red sauce.",
      },
      {
        heading: "Pantry-Friendly Staples",
        description:
          "Italian cuisine revolves around olive oil, canned tomatoes, dried pasta, and Parmigiano — stock your pantry once and you're set for weeks of delicious meals.",
      },
      {
        heading: "Quick Weeknight Pastas",
        description:
          "Most Italian pasta dishes come together in under 30 minutes, making them ideal for busy weeknights when you still want a real, satisfying dinner.",
      },
    ],
    sampleMeals: [
      {
        name: "Cacio e Pepe",
        mealType: "dinner",
        description:
          "Tonnarelli pasta tossed in a silky emulsion of Pecorino Romano and cracked black pepper — just three ingredients done perfectly.",
        prepTime: "20 min",
        tags: ["quick", "vegetarian", "classic"],
      },
      {
        name: "Shakshuka-Style Eggs in Purgatory",
        mealType: "breakfast",
        description:
          "Eggs poached in a spicy tomato sauce with garlic, chili flakes, and torn basil, served with crusty ciabatta for dipping.",
        prepTime: "15 min",
        tags: ["vegetarian", "one-pan"],
      },
      {
        name: "Panzanella Salad with Burrata",
        mealType: "lunch",
        description:
          "A Tuscan bread salad of toasted ciabatta cubes, ripe tomatoes, red onion, and cucumber crowned with creamy burrata and a red wine vinaigrette.",
        prepTime: "15 min",
        tags: ["no-cook", "vegetarian", "summer"],
      },
      {
        name: "Chicken Milanese with Arugula Salad",
        mealType: "dinner",
        description:
          "Thin-pounded chicken breast coated in seasoned breadcrumbs and pan-fried until golden, topped with a lemon-dressed arugula and shaved Parmesan salad.",
        prepTime: "25 min",
        tags: ["high-protein", "kid-friendly"],
      },
      {
        name: "Mushroom Risotto",
        mealType: "dinner",
        description:
          "Arborio rice slowly stirred with a mix of cremini and porcini mushrooms, white wine, and finished with butter and Parmigiano for a velvety texture.",
        prepTime: "35 min",
        tags: ["vegetarian", "gluten-free", "comfort-food"],
      },
    ],
    faqs: [
      {
        question: "What does a weekly Italian meal plan include?",
        answer:
          "You get 7 days of Italian-inspired breakfasts, lunches, and dinners — everything from quick aglio e olio to slow-simmered ragu. Each plan includes a consolidated grocery list organized by section, so you shop once and cook all week. Recipes range from 15-minute pastas to weekend projects like fresh lasagna.",
      },
      {
        question: "Is Italian food expensive to cook at home?",
        answer:
          "Italian home cooking is one of the most budget-friendly cuisines out there. The foundation is dried pasta, canned tomatoes, olive oil, garlic, and hard cheese — all inexpensive pantry staples. Our plans minimize waste by reusing ingredients across meals, so a block of Parmesan serves three different recipes.",
      },
      {
        question: "Can I make Italian meal plans gluten-free?",
        answer:
          "Yes. Set your dietary preference to gluten-free and the planner swaps in risottos, polentas, grilled proteins, and gluten-free pasta where needed. Italian cuisine has plenty of naturally gluten-free dishes like ossobuco, caprese salad, and frittatas, so you won't feel limited.",
      },
      {
        question: "How long do Italian meals take to prepare?",
        answer:
          "Most weeknight Italian recipes in our plans take 20-30 minutes. Pastas like carbonara or puttanesca are famously fast. Longer-cooking dishes like ragu or lasagna are scheduled on weekends or designed as batch-cook recipes that yield leftovers for the week ahead.",
      },
    ],
    relatedSlugs: ["mediterranean", "french", "american"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "mexican",
    type: "cuisine",
    title: "Mexican Meal Plans — Weekly Recipes & Grocery Lists",
    metaDescription:
      "Discover weekly Mexican meal plans with authentic recipes from tacos to tamales. Get organized grocery lists and bring bold, vibrant flavors to every meal.",
    h1: "Bold Mexican Meal Plans for Every Night of the Week",
    intro:
      "Mexican cuisine goes far beyond tacos — it's a rich tapestry of moles, salsas, braises, and fresh ceviches shaped by centuries of tradition. Our AI meal planner delivers a week of authentic Mexican recipes with the right balance of heat, acid, and richness. Every plan comes with a grocery list so you know exactly which chiles, limes, and spices to grab.",
    valueProps: [
      {
        heading: "Beyond Taco Tuesday",
        description:
          "Plans feature the full range of Mexican cooking — enchiladas suizas, pozole, chile rellenos, and more — so every night brings something different and genuinely exciting.",
      },
      {
        heading: "Scalable for Crowds",
        description:
          "Mexican food is built for sharing, and most recipes scale up effortlessly for family dinners, potlucks, or weekend entertaining without extra complexity.",
      },
      {
        heading: "Fresh, Bright Flavors",
        description:
          "Every meal is loaded with cilantro, lime, roasted peppers, and fresh salsas — vibrant flavors that make healthy eating feel indulgent.",
      },
    ],
    sampleMeals: [
      {
        name: "Carnitas Tacos with Pickled Red Onion",
        mealType: "dinner",
        description:
          "Crispy-edged slow-cooked pork shoulder served in warm corn tortillas with pickled red onion, fresh cilantro, and a squeeze of lime.",
        prepTime: "20 min + 3 hr slow cook",
        tags: ["slow-cooker", "gluten-free", "crowd-pleaser"],
      },
      {
        name: "Chilaquiles Verdes with Fried Eggs",
        mealType: "breakfast",
        description:
          "Crispy tortilla chips simmered in tangy tomatillo salsa verde, topped with fried eggs, crema, queso fresco, and sliced avocado.",
        prepTime: "20 min",
        tags: ["vegetarian-option", "gluten-free"],
      },
      {
        name: "Black Bean and Roasted Corn Tostadas",
        mealType: "lunch",
        description:
          "Crunchy tostada shells layered with seasoned black beans, charred corn, cotija cheese, shredded cabbage, and chipotle crema.",
        prepTime: "15 min",
        tags: ["vegetarian", "quick"],
      },
      {
        name: "Chicken Enchiladas with Salsa Roja",
        mealType: "dinner",
        description:
          "Corn tortillas rolled around shredded chicken and cheese, drenched in a smoky guajillo-tomato salsa roja, and baked until bubbling.",
        prepTime: "40 min",
        tags: ["gluten-free", "batch-cook"],
      },
      {
        name: "Shrimp Aguachile",
        mealType: "lunch",
        description:
          "Raw shrimp cured in a fiery lime-serrano chile marinade with cucumber, red onion, and served ice-cold with tostadas on the side.",
        prepTime: "15 min + 30 min curing",
        tags: ["no-cook", "high-protein", "spicy"],
      },
    ],
    faqs: [
      {
        question: "What's in a weekly Mexican meal plan?",
        answer:
          "Each plan covers 7 days of meals with authentic Mexican recipes — from breakfast chilaquiles to dinner enchiladas. You get a single grocery list covering all ingredients, organized by produce, proteins, dairy, and pantry items. Plans balance quick meals with slow-cooked dishes for variety.",
      },
      {
        question: "Is Mexican food hard to cook at home?",
        answer:
          "Not at all. Many Mexican dishes are one-pan or one-pot meals that rely on a few key techniques — toasting chiles, building salsas, and braising meats. Our recipes break each step down clearly, and most weeknight meals are ready in 30 minutes or less. The hardest part is keeping your tortillas warm.",
      },
      {
        question: "Can I adjust the spice level in Mexican meal plans?",
        answer:
          "Yes. Set your heat preference in your profile and the planner adjusts chile quantities and suggests milder swaps like ancho for habanero. Every recipe also includes a note on how to dial the heat up or down, so the whole family can eat the same meal at their comfort level.",
      },
      {
        question: "Are Mexican meal plans good for meal prepping?",
        answer:
          "Mexican cuisine is one of the best for meal prep. Rice, beans, braised meats, and salsas all keep well for days. The planner builds in batch-cooking sessions — make a big pot of carnitas Sunday and use it for tacos, burrito bowls, and quesadillas through Wednesday.",
      },
    ],
    relatedSlugs: ["american", "southern", "korean"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "asian",
    type: "cuisine",
    title: "Asian Meal Plans — Weekly Stir-Fry, Noodle & Rice Bowls",
    metaDescription:
      "Plan your week with flavorful Asian-inspired meals. Get stir-fries, noodle soups, and rice bowls with auto-generated grocery lists. Quick, healthy, and delicious.",
    h1: "Asian-Inspired Meal Plans Packed with Flavor",
    intro:
      "Asian cuisine spans an incredible range — from the wok-fired intensity of Chinese stir-fries to the clean, herbaceous bowls of Vietnamese pho. Our Asian meal plans draw from across the continent to build a week of vibrant, well-balanced meals. Each plan includes a grocery list so you can stock up on soy sauce, sesame oil, rice noodles, and fresh aromatics in a single trip.",
    valueProps: [
      {
        heading: "Wok-to-Table Speed",
        description:
          "Stir-fries, fried rice, and noodle dishes are some of the fastest dinners you can make — most are ready in 15-20 minutes once your ingredients are prepped.",
      },
      {
        heading: "Naturally Balanced Meals",
        description:
          "Asian cooking emphasizes vegetables, lean proteins, and complex carbs in every dish, so your meals are nutritionally balanced without feeling like diet food.",
      },
      {
        heading: "Bold Umami Depth",
        description:
          "Soy sauce, fish sauce, miso, and sesame bring deep savory flavors that make every bite satisfying — even simple rice bowls taste like a restaurant meal.",
      },
    ],
    sampleMeals: [
      {
        name: "Beef and Broccoli Stir-Fry",
        mealType: "dinner",
        description:
          "Thinly sliced flank steak and broccoli florets tossed in a glossy garlic-ginger soy glaze, served over steamed jasmine rice.",
        prepTime: "20 min",
        tags: ["quick", "high-protein", "wok"],
      },
      {
        name: "Congee with Soft-Boiled Egg and Scallions",
        mealType: "breakfast",
        description:
          "Silky rice porridge slow-simmered until creamy, topped with a jammy soft-boiled egg, crispy fried shallots, and a drizzle of sesame oil.",
        prepTime: "10 min + 1 hr simmer",
        tags: ["comfort-food", "gluten-free"],
      },
      {
        name: "Vietnamese Banh Mi Sandwich",
        mealType: "lunch",
        description:
          "A crispy baguette stuffed with lemongrass-marinated pork, pickled daikon and carrots, fresh cilantro, jalapeno, and sriracha mayo.",
        prepTime: "25 min",
        tags: ["high-protein", "bold-flavor"],
      },
      {
        name: "Vegetable Pad See Ew",
        mealType: "dinner",
        description:
          "Wide rice noodles stir-fried with Chinese broccoli, egg, garlic, and a sweet-savory dark soy sauce in a screaming-hot wok.",
        prepTime: "15 min",
        tags: ["vegetarian", "quick", "wok"],
      },
      {
        name: "Miso Salmon with Steamed Bok Choy",
        mealType: "dinner",
        description:
          "Salmon fillets glazed with white miso, mirin, and a touch of brown sugar, broiled until caramelized, and served alongside tender steamed bok choy.",
        prepTime: "25 min",
        tags: ["high-protein", "gluten-free", "omega-3"],
      },
    ],
    faqs: [
      {
        question: "What types of Asian food are in the meal plans?",
        answer:
          "Our Asian plans pull from Chinese, Japanese, Vietnamese, Thai, and Korean traditions. You'll find stir-fries, noodle soups, rice bowls, dumplings, and curries across each week. The planner rotates styles so you don't eat the same flavor profile two nights in a row.",
      },
      {
        question: "Do I need special ingredients for Asian cooking?",
        answer:
          "A few pantry staples go a long way: soy sauce, sesame oil, rice vinegar, fish sauce, and sriracha. Most are available at any grocery store. Our grocery list flags anything that might require an Asian market, and always suggests a substitute if you can't find it.",
      },
      {
        question: "Are Asian meal plans good for weight loss?",
        answer:
          "Asian cuisine naturally emphasizes vegetables, lean proteins, and portion control. Dishes like pho, stir-fries, and sashimi bowls are nutrient-dense without being calorie-heavy. Set a calorie or nutrition goal in your profile and the planner adjusts portions and ingredient ratios automatically.",
      },
      {
        question: "How do I meal prep Asian food without it getting soggy?",
        answer:
          "The key is storing components separately — keep rice, protein, and sauce in different containers and assemble at mealtime. Our plans account for this by scheduling dishes that reheat well (curries, braised meats) on prep days and fresh dishes (salads, quick stir-fries) on days you have more time.",
      },
    ],
    relatedSlugs: ["japanese", "thai", "korean"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "mediterranean",
    type: "cuisine",
    title: "Mediterranean Meal Plans — Healthy Weekly Recipes",
    metaDescription:
      "Eat the Mediterranean way with weekly meal plans full of fresh vegetables, olive oil, and lean proteins. Auto-generated grocery lists make healthy eating effortless.",
    h1: "Mediterranean Meal Plans for a Healthier Week",
    intro:
      "The Mediterranean diet is consistently ranked as the world's healthiest way to eat — and for good reason. Built on olive oil, fresh vegetables, whole grains, fish, and legumes, it's as delicious as it is nutritious. Our weekly plans curate the best of Greek, Spanish, Lebanese, and Italian coastal cooking into a practical meal schedule with a ready-to-go grocery list.",
    valueProps: [
      {
        heading: "Heart-Healthy by Design",
        description:
          "Every plan is built around the principles that make the Mediterranean diet the gold standard — healthy fats, fiber-rich grains, and omega-3-packed seafood.",
      },
      {
        heading: "Seasonal and Fresh",
        description:
          "Recipes emphasize seasonal produce, herbs, and simple preparations that let quality ingredients shine without heavy sauces or frying.",
      },
      {
        heading: "Proven Long-Term Benefits",
        description:
          "This isn't a fad diet — it's a lifestyle backed by decades of research linking it to better heart health, reduced inflammation, and sustained energy.",
      },
    ],
    sampleMeals: [
      {
        name: "Greek Chicken Souvlaki Bowls",
        mealType: "dinner",
        description:
          "Lemon-oregano marinated chicken skewers served over fluffy rice with tzatziki, cucumber-tomato salad, and warm pita wedges.",
        prepTime: "30 min",
        tags: ["high-protein", "gluten-free-option"],
      },
      {
        name: "Shakshuka with Feta and Herbs",
        mealType: "breakfast",
        description:
          "Eggs gently poached in a spiced tomato and red pepper sauce, topped with crumbled feta and fresh dill, served with crusty sourdough.",
        prepTime: "20 min",
        tags: ["vegetarian", "one-pan"],
      },
      {
        name: "Fattoush Salad with Grilled Halloumi",
        mealType: "lunch",
        description:
          "Crispy pita chips tossed with romaine, radishes, tomatoes, and sumac dressing, topped with golden pan-seared halloumi cheese.",
        prepTime: "20 min",
        tags: ["vegetarian", "fresh"],
      },
      {
        name: "Baked Lemon Herb Salmon with Roasted Vegetables",
        mealType: "dinner",
        description:
          "Wild salmon fillets baked with lemon slices, dill, and capers on a sheet pan alongside roasted zucchini, bell peppers, and cherry tomatoes.",
        prepTime: "30 min",
        tags: ["sheet-pan", "omega-3", "gluten-free"],
      },
      {
        name: "Hummus and Veggie Mezze Plate",
        mealType: "lunch",
        description:
          "Creamy homemade hummus served with warm pita, marinated olives, roasted red peppers, tabbouleh, and crisp cucumber spears.",
        prepTime: "15 min",
        tags: ["vegan", "shareable"],
      },
    ],
    faqs: [
      {
        question: "What is a Mediterranean meal plan?",
        answer:
          "A Mediterranean meal plan follows the principles of the Mediterranean diet — plenty of vegetables, olive oil, whole grains, legumes, fish, and moderate dairy. Our plans translate this into a practical week of meals with specific recipes and a consolidated grocery list. It's not about restriction — it's about eating well.",
      },
      {
        question: "Is the Mediterranean diet good for losing weight?",
        answer:
          "Yes, and it's one of the most sustainable approaches because it doesn't feel like a diet. Meals are satisfying and flavorful, built around healthy fats and fiber that keep you full. Studies consistently show it supports weight management without the yo-yo effect of restrictive diets.",
      },
      {
        question:
          "Can I follow a Mediterranean meal plan on a budget?",
        answer:
          "Absolutely. Beans, lentils, eggs, seasonal vegetables, and whole grains are the backbone of Mediterranean cooking, and they're among the cheapest foods at the store. Our plans keep seafood to 2-3 times a week and use affordable options like sardines and frozen shrimp alongside the occasional salmon.",
      },
      {
        question:
          "What's the difference between Mediterranean and Greek meal plans?",
        answer:
          "Greek cuisine is one part of the Mediterranean food world. Our Mediterranean plans pull from Greek, Italian, Spanish, Turkish, and Lebanese traditions for more variety. If you want to focus specifically on Greek dishes, you can note that preference and the planner will lean heavily into that direction.",
      },
    ],
    relatedSlugs: ["italian", "middle-eastern", "french"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "indian",
    type: "cuisine",
    title: "Indian Meal Plans — Weekly Curry, Dal & Rice Recipes",
    metaDescription:
      "Plan a week of authentic Indian meals with rich curries, fragrant dals, and fluffy naan. Auto-generated grocery lists with every spice you need. Try it free.",
    h1: "Indian Meal Plans Bursting with Spice and Flavor",
    intro:
      "Indian cuisine is a universe of flavor — from the creamy butter chickens of Punjab to the coconut-laced curries of Kerala. Our AI planner builds you a balanced week of Indian meals that cover the full spectrum of spice, texture, and regional tradition. Each plan includes a spice-by-spice grocery list so you know exactly what to stock, whether you're a seasoned cook or trying Indian recipes for the first time.",
    valueProps: [
      {
        heading: "Spice Cabinet Mastery",
        description:
          "Plans build your spice collection gradually — each week introduces 2-3 new spices while reusing what you already have, so nothing goes to waste.",
      },
      {
        heading: "Vegetarian Powerhouse",
        description:
          "Indian cuisine offers the world's richest vegetarian tradition — dal, paneer, chana masala, and dozens of vegetable dishes that are hearty, protein-rich, and deeply satisfying.",
      },
      {
        heading: "One-Pot Curry Simplicity",
        description:
          "Most Indian curries are one-pot meals that simmer on their own after initial prep, making them ideal for hands-off weeknight cooking.",
      },
    ],
    sampleMeals: [
      {
        name: "Butter Chicken with Garlic Naan",
        mealType: "dinner",
        description:
          "Tender chicken pieces simmered in a velvety tomato-cream sauce spiced with garam masala, fenugreek, and a finish of butter, served with pillowy garlic naan.",
        prepTime: "40 min",
        tags: ["classic", "crowd-pleaser"],
      },
      {
        name: "Masala Dosa with Coconut Chutney",
        mealType: "breakfast",
        description:
          "Crispy fermented rice-and-lentil crepes filled with spiced potato masala, served alongside fresh coconut chutney and sambar for dipping.",
        prepTime: "30 min + overnight ferment",
        tags: ["vegan", "south-indian", "gluten-free"],
      },
      {
        name: "Chana Masala with Basmati Rice",
        mealType: "lunch",
        description:
          "Chickpeas braised in a deeply spiced tomato-onion gravy with cumin, coriander, and amchur, served over fragrant basmati rice.",
        prepTime: "30 min",
        tags: ["vegan", "high-fiber", "budget"],
      },
      {
        name: "Lamb Rogan Josh",
        mealType: "dinner",
        description:
          "Kashmiri-style lamb curry slow-braised with yogurt, whole spices, and Kashmiri chili for a deep red color and complex, warming heat.",
        prepTime: "30 min + 1.5 hr simmer",
        tags: ["slow-cook", "gluten-free", "special-occasion"],
      },
      {
        name: "Aloo Gobi with Roti",
        mealType: "dinner",
        description:
          "Cauliflower and potatoes dry-roasted with turmeric, cumin seeds, and fresh ginger until golden and tender, served with warm whole wheat roti.",
        prepTime: "25 min",
        tags: ["vegan", "budget", "comfort-food"],
      },
    ],
    faqs: [
      {
        question: "What spices do I need for Indian meal plans?",
        answer:
          "Start with the essentials: cumin, coriander, turmeric, garam masala, and chili powder. These five cover about 80% of Indian recipes. Our grocery list tells you exactly what you need each week, and since spices last months, your collection grows naturally without a big upfront investment.",
      },
      {
        question: "Are Indian meal plans vegetarian-friendly?",
        answer:
          "Indian cuisine is arguably the best in the world for vegetarians. About half of India's population is vegetarian, so the cuisine has centuries of protein-rich meat-free dishes — dal, paneer, legume curries, and stuffed breads. You can run a fully vegetarian Indian plan without repeating a single dish for weeks.",
      },
      {
        question: "Is Indian food hard to cook at home?",
        answer:
          "It's easier than most people think. The majority of Indian home cooking involves sauteing aromatics, adding spices, and simmering — no special equipment needed beyond a heavy-bottomed pot. Our recipes teach you the foundational techniques like blooming spices in oil, which unlocks hundreds of dishes once you learn it.",
      },
      {
        question: "Can I make Indian meal plans less spicy?",
        answer:
          "Of course. Indian food is deeply flavored, but heat is just one dimension. Set your spice tolerance in your profile and the planner reduces chili quantities while keeping all the aromatic spices that give Indian food its character. Yogurt-based raitas and cooling chutneys are also included to balance heat naturally.",
      },
    ],
    relatedSlugs: ["thai", "middle-eastern", "asian"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "thai",
    type: "cuisine",
    title: "Thai Meal Plans — Weekly Curry, Stir-Fry & Noodles",
    metaDescription:
      "Get weekly Thai meal plans with authentic curries, pad thai, and stir-fries. Organized grocery lists included. Bring Bangkok street food flavors to your kitchen.",
    h1: "Thai Meal Plans That Hit Every Flavor Note",
    intro:
      "Thai cooking is a masterclass in balance — sweet, sour, salty, and spicy in every bite. From aromatic green curries to tangy som tum salads, it's one of the most exciting cuisines to cook at home. Our weekly Thai meal plans walk you through restaurant-quality dishes with clear instructions and a grocery list that covers everything from lemongrass to Thai basil.",
    valueProps: [
      {
        heading: "Perfect Flavor Balance",
        description:
          "Every Thai recipe is calibrated for the signature balance of sweet, sour, salty, and spicy — the four pillars that make Thai food irresistibly craveable.",
      },
      {
        heading: "Street Food at Home",
        description:
          "Plans include simplified versions of Bangkok street food favorites like pad thai, khao soi, and mango sticky rice that you can pull off in your own kitchen.",
      },
      {
        heading: "Fresh Herb Forward",
        description:
          "Thai cooking relies on fresh aromatics — lemongrass, galangal, kaffir lime leaves, and Thai basil — that add incredible fragrance without heavy calories.",
      },
    ],
    sampleMeals: [
      {
        name: "Green Curry with Chicken and Thai Eggplant",
        mealType: "dinner",
        description:
          "Chicken thighs simmered in a coconut milk green curry with Thai eggplant, bamboo shoots, and fresh Thai basil, served over jasmine rice.",
        prepTime: "30 min",
        tags: ["gluten-free", "one-pot"],
      },
      {
        name: "Thai Omelette with Jasmine Rice (Khai Jiao)",
        mealType: "breakfast",
        description:
          "A puffy, crispy-edged omelette made with fish sauce and white pepper, deep-fried until golden and served over steamed jasmine rice with sriracha.",
        prepTime: "10 min",
        tags: ["quick", "gluten-free", "budget"],
      },
      {
        name: "Som Tum Green Papaya Salad",
        mealType: "lunch",
        description:
          "Shredded green papaya pounded with tomatoes, long beans, peanuts, dried shrimp, and a fiery lime-fish sauce-chili dressing.",
        prepTime: "15 min",
        tags: ["gluten-free", "spicy", "fresh"],
      },
      {
        name: "Pad Thai with Shrimp",
        mealType: "dinner",
        description:
          "Rice noodles wok-tossed with shrimp, scrambled egg, bean sprouts, and chopped peanuts in a tamarind-palm sugar sauce, finished with a lime wedge.",
        prepTime: "25 min",
        tags: ["classic", "wok", "gluten-free"],
      },
      {
        name: "Massaman Curry with Beef and Potatoes",
        mealType: "dinner",
        description:
          "A rich, slow-simmered Southern Thai curry with tender beef chunks, potatoes, roasted peanuts, and warm spices like cinnamon and star anise in coconut milk.",
        prepTime: "25 min + 1.5 hr simmer",
        tags: ["slow-cook", "comfort-food", "gluten-free"],
      },
    ],
    faqs: [
      {
        question: "What Thai ingredients do I need to get started?",
        answer:
          "Stock fish sauce, coconut milk, Thai curry paste (green and red), rice noodles, and sriracha or Thai chili. Fresh items like lemongrass, Thai basil, and limes are used weekly. Our grocery list specifies exactly what you need, and most items are available at regular supermarkets these days.",
      },
      {
        question: "Is Thai food healthy?",
        answer:
          "Thai cuisine is naturally rich in vegetables, lean proteins, and fresh herbs. Coconut milk adds healthy fats, and the heavy use of aromatics means flavor comes from herbs and spices rather than butter or cream. Our plans balance richer curries with lighter salads and stir-fries throughout the week.",
      },
      {
        question: "Can I make Thai food without a wok?",
        answer:
          "Yes. A large, heavy skillet works for stir-fries — the key is getting it very hot before adding ingredients. Curries are just one-pot simmers. A wok is nice to have but absolutely not required. Our recipes include tips for adapting techniques to standard kitchen equipment.",
      },
      {
        question: "How spicy are Thai meal plans?",
        answer:
          "Thai food can range from mild to volcanic — it's up to you. Set your spice preference and the planner adjusts chili quantities accordingly. Every recipe includes guidance on dialing heat up or down. Some dishes like massaman curry are naturally milder, while others like som tum are built to be fiery.",
      },
    ],
    relatedSlugs: ["asian", "japanese", "indian"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "japanese",
    type: "cuisine",
    title: "Japanese Meal Plans — Weekly Ramen, Sushi & Bento Ideas",
    metaDescription:
      "Plan a week of Japanese meals from ramen to teriyaki with auto-generated grocery lists. Simple, elegant recipes that bring Japanese home cooking to your table.",
    h1: "Japanese Meal Plans for Clean, Elegant Eating",
    intro:
      "Japanese home cooking is a world away from what most people imagine — it's not all sushi and ramen. It's miso soup for breakfast, grilled fish with pickled vegetables, and simmered one-pot nabe on cold nights. Our weekly Japanese meal plans bring this elegant simplicity to your kitchen with practical recipes and a grocery list that covers your dashi, miso, mirin, and everything else you need.",
    valueProps: [
      {
        heading: "Ichiju Sansai Philosophy",
        description:
          "Plans follow the traditional Japanese structure of one soup and three sides, creating naturally balanced meals with variety in every sitting.",
      },
      {
        heading: "Clean, Minimal Ingredients",
        description:
          "Japanese cooking celebrates the natural flavor of quality ingredients with minimal manipulation — fewer ingredients per dish means less shopping and less waste.",
      },
      {
        heading: "Built-In Portion Control",
        description:
          "The Japanese approach to plating and portioning naturally supports healthy eating — multiple small dishes satisfy without overeating.",
      },
    ],
    sampleMeals: [
      {
        name: "Chicken Katsu Curry with Steamed Rice",
        mealType: "dinner",
        description:
          "Crispy panko-breaded chicken cutlet served over Japanese short-grain rice and smothered in a savory-sweet golden curry sauce with carrots and potatoes.",
        prepTime: "35 min",
        tags: ["comfort-food", "kid-friendly"],
      },
      {
        name: "Tamagoyaki with Miso Soup and Rice",
        mealType: "breakfast",
        description:
          "A sweet-savory rolled Japanese omelette served alongside a bowl of dashi-based miso soup with tofu and wakame, plus a scoop of steamed rice.",
        prepTime: "20 min",
        tags: ["traditional", "high-protein"],
      },
      {
        name: "Spicy Tuna Onigiri",
        mealType: "lunch",
        description:
          "Triangular rice balls stuffed with spicy mayo-tossed tuna and wrapped in crispy nori — the ultimate portable Japanese lunch.",
        prepTime: "15 min",
        tags: ["meal-prep", "portable", "quick"],
      },
      {
        name: "Salmon Teriyaki with Sesame Spinach",
        mealType: "dinner",
        description:
          "Pan-seared salmon glazed with a homemade teriyaki sauce of soy, mirin, and sake, paired with blanched spinach dressed in sesame and soy.",
        prepTime: "20 min",
        tags: ["quick", "omega-3", "gluten-free-option"],
      },
      {
        name: "Tonkotsu-Style Ramen",
        mealType: "dinner",
        description:
          "A rich, milky pork bone broth ladled over thin ramen noodles and topped with chashu pork slices, a soft-boiled marinated egg, nori, and scallions.",
        prepTime: "30 min + 4 hr broth",
        tags: ["weekend-project", "comfort-food"],
      },
    ],
    faqs: [
      {
        question: "What pantry items do I need for Japanese cooking?",
        answer:
          "The core four are soy sauce, mirin, rice vinegar, and dashi (powder or kombu + bonito). Add miso paste and sesame oil and you can make the vast majority of Japanese home recipes. These keep for months and are available at most grocery stores. Our list tells you exactly which brands and quantities to buy.",
      },
      {
        question: "Is Japanese food good for weight loss?",
        answer:
          "Japanese cuisine is one of the most naturally weight-friendly in the world. Small portions, high vegetable content, lean proteins like fish and tofu, and minimal added fats are baked into the tradition. Our plans follow these principles while keeping meals satisfying and flavorful.",
      },
      {
        question: "Can I make sushi at home with these meal plans?",
        answer:
          "Yes, though we focus on approachable styles like chirashi bowls (scattered sushi), hand rolls, and onigiri rather than restaurant-style nigiri. These are how Japanese families actually eat sushi at home — much easier and just as delicious. Weekend plans occasionally include a fun sushi-making session.",
      },
      {
        question: "Are Japanese meal plans kid-friendly?",
        answer:
          "Very much so. Japanese home cooking includes many kid favorites — chicken katsu, gyoza, fried rice, and udon noodle soup are staples. The flavors are savory and mild rather than spicy, and the bento-style presentation with multiple small items appeals to kids who like variety on their plate.",
      },
    ],
    relatedSlugs: ["asian", "korean", "thai"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "french",
    type: "cuisine",
    title: "French Meal Plans — Weekly Bistro-Style Recipes",
    metaDescription:
      "Bring French bistro cooking home with weekly meal plans. Classic techniques made approachable, from coq au vin to croque monsieur. Grocery lists included.",
    h1: "French Meal Plans for Everyday Bistro Cooking",
    intro:
      "French cooking has an intimidating reputation, but the reality of everyday French home cooking is simple, seasonal, and deeply satisfying. Think golden quiches, hearty stews, and perfect vinaigrettes — not Michelin-star complexity. Our weekly plans bring bistro-style French meals to your kitchen with straightforward instructions and a grocery list that skips the fuss.",
    valueProps: [
      {
        heading: "Technique That Transfers",
        description:
          "French cooking teaches foundational skills — making a roux, braising meat, building sauces — that level up your cooking across every cuisine.",
      },
      {
        heading: "Seasonal Market Style",
        description:
          "Plans emphasize seasonal produce and simple preparations, following the French philosophy that great cooking starts at the market, not with complicated recipes.",
      },
      {
        heading: "Elegant but Practical",
        description:
          "Every recipe looks and tastes impressive but uses practical techniques — no specialized equipment, no hard-to-find ingredients, just solid cooking.",
      },
    ],
    sampleMeals: [
      {
        name: "Coq au Vin",
        mealType: "dinner",
        description:
          "Chicken braised in red wine with pearl onions, mushrooms, and lardons until fork-tender, served with buttery mashed potatoes.",
        prepTime: "30 min + 1.5 hr braise",
        tags: ["classic", "slow-cook", "date-night"],
      },
      {
        name: "Croque Monsieur",
        mealType: "breakfast",
        description:
          "A golden, oven-baked ham and Gruyere sandwich topped with creamy bechamel sauce and broiled until bubbling and browned.",
        prepTime: "20 min",
        tags: ["classic", "comfort-food"],
      },
      {
        name: "Nicoise Salad",
        mealType: "lunch",
        description:
          "A composed platter of seared tuna, green beans, boiled potatoes, hard-boiled eggs, Nicoise olives, and tomatoes dressed with a sharp Dijon vinaigrette.",
        prepTime: "25 min",
        tags: ["high-protein", "gluten-free", "fresh"],
      },
      {
        name: "Duck Breast with Cherry Sauce",
        mealType: "dinner",
        description:
          "Pan-seared duck breast with crispy skin and a ruby-red cherry-port reduction, served alongside roasted fingerling potatoes and haricots verts.",
        prepTime: "30 min",
        tags: ["special-occasion", "gluten-free"],
      },
      {
        name: "French Onion Soup",
        mealType: "lunch",
        description:
          "Deeply caramelized onions simmered in rich beef broth with thyme, ladled into oven-safe crocks, topped with a crusty bread round and melted Gruyere.",
        prepTime: "1 hr",
        tags: ["comfort-food", "classic", "winter"],
      },
    ],
    faqs: [
      {
        question: "Is French cooking hard to do at home?",
        answer:
          "Everyday French home cooking is actually quite simple. Dishes like omelets, roast chicken, ratatouille, and quiche are French staples that anyone can master. Our plans focus on this practical, bistro-style cooking — not restaurant techniques. The key is good ingredients and a little patience.",
      },
      {
        question: "Are French meal plans expensive?",
        answer:
          "Not if you cook the way French home cooks actually do. They use seasonal vegetables, cheaper cuts of meat for braises, eggs, and cheese as protein sources. Our plans follow this approach — a whole roast chicken one night becomes chicken salad the next. Butter and cream are used strategically, not lavishly.",
      },
      {
        question: "Can French meal plans be healthy?",
        answer:
          "The French approach to eating is inherently balanced — smaller portions, more courses, and an emphasis on fresh ingredients over processed foods. Our plans include plenty of salads, vegetable-forward dishes, and lean proteins alongside the occasional indulgence. It's about quality over quantity.",
      },
      {
        question:
          "What wines pair well with French meal plan recipes?",
        answer:
          "Each recipe in the plan includes a simple wine pairing suggestion. As a rule of thumb: Burgundy or Pinot Noir with chicken and mushroom dishes, Bordeaux with red meats, and Sauvignon Blanc or Chablis with fish and salads. But the best wine is whatever you enjoy drinking.",
      },
    ],
    relatedSlugs: ["italian", "mediterranean", "american"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "middle-eastern",
    type: "cuisine",
    title: "Middle Eastern Meal Plans — Weekly Recipes & Grocery Lists",
    metaDescription:
      "Plan a week of Middle Eastern meals with shawarma, falafel, and grain bowls. Auto-generated grocery lists make cooking with za'atar and sumac effortless.",
    h1: "Middle Eastern Meal Plans Full of Warmth and Spice",
    intro:
      "Middle Eastern cuisine is one of the world's great comfort food traditions — generous, aromatic, and built for sharing. From Lebanese mezze spreads to Persian rice dishes and Israeli salads, these flavors are warm, herbaceous, and deeply satisfying. Our weekly plans bring this hospitality to your table with organized recipes and a grocery list covering every spice, grain, and fresh herb you'll need.",
    valueProps: [
      {
        heading: "Mezze-Style Variety",
        description:
          "Plans include multiple small dishes per meal in the mezze tradition, so dinner feels like a spread — hummus, tabbouleh, grilled meats, and pickles all on one table.",
      },
      {
        heading: "Spice Blends That Transform",
        description:
          "Za'atar, sumac, baharat, and ras el hanout do the heavy lifting — a single spice blend can turn plain chicken or roasted vegetables into something extraordinary.",
      },
      {
        heading: "Plant-Forward Tradition",
        description:
          "Chickpeas, lentils, eggplant, and grains are centerpiece ingredients in Middle Eastern cooking, making it naturally rich in fiber and plant protein.",
      },
    ],
    sampleMeals: [
      {
        name: "Chicken Shawarma Plates with Garlic Sauce",
        mealType: "dinner",
        description:
          "Thinly sliced chicken thigh marinated in cumin, turmeric, and paprika, pan-seared until crispy and served with rice, pickled turnips, and toum garlic sauce.",
        prepTime: "30 min",
        tags: ["high-protein", "gluten-free"],
      },
      {
        name: "Ful Medames with Pita",
        mealType: "breakfast",
        description:
          "Slow-simmered fava beans mashed with garlic, lemon juice, and cumin, topped with olive oil, chopped tomatoes, and fresh parsley, scooped with warm pita.",
        prepTime: "15 min",
        tags: ["vegan", "high-fiber", "traditional"],
      },
      {
        name: "Falafel Wrap with Tahini Sauce",
        mealType: "lunch",
        description:
          "Crispy baked falafel packed into warm pita with shredded cabbage, pickled vegetables, tomato, and a drizzle of creamy tahini-lemon sauce.",
        prepTime: "35 min",
        tags: ["vegan", "high-protein"],
      },
      {
        name: "Lamb Kofta with Baba Ganoush",
        mealType: "dinner",
        description:
          "Grilled spiced lamb skewers served alongside smoky baba ganoush, fluffy couscous, and a bright chopped salad with sumac dressing.",
        prepTime: "30 min",
        tags: ["high-protein", "grilled"],
      },
      {
        name: "Mujaddara (Lentils and Rice with Crispy Onions)",
        mealType: "dinner",
        description:
          "Green lentils and basmati rice cooked with cumin and cinnamon, topped with a crown of deeply caramelized, crispy fried onions and served with yogurt.",
        prepTime: "40 min",
        tags: ["vegan", "budget", "comfort-food"],
      },
    ],
    faqs: [
      {
        question: "What spices do I need for Middle Eastern cooking?",
        answer:
          "Start with cumin, sumac, za'atar blend, paprika, and cinnamon — these five cover most recipes. Tahini (sesame paste) is also essential for sauces and dips. All are widely available at regular grocery stores. Our list builds your spice collection week by week so you're never buying a dozen things at once.",
      },
      {
        question: "Is Middle Eastern food healthy?",
        answer:
          "Very. It's one of the most naturally balanced cuisines, with heavy emphasis on legumes, vegetables, olive oil, whole grains, and lean grilled meats. Dishes like hummus, tabbouleh, and grilled kebabs are high in protein and fiber while being relatively low in processed ingredients. It aligns closely with the Mediterranean diet.",
      },
      {
        question: "Can I make a Middle Eastern meal plan vegetarian?",
        answer:
          "Middle Eastern cuisine is exceptional for vegetarians. Falafel, hummus, mujaddara, stuffed grape leaves, fattoush, baba ganoush, and shakshuka are all vegetarian staples that are hearty and protein-rich. Set your dietary preference and the planner builds a complete week without any meat.",
      },
      {
        question:
          "How long does it take to cook Middle Eastern meals?",
        answer:
          "Most weeknight Middle Eastern meals come together in 25-35 minutes. Shawarma, kebabs, and grain bowls are quick once you've marinated your protein. Slower dishes like stews and stuffed vegetables are scheduled on weekends. Mezze-style dinners are actually faster since each component is small and simple.",
      },
    ],
    relatedSlugs: ["mediterranean", "indian", "italian"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "korean",
    type: "cuisine",
    title: "Korean Meal Plans — Weekly Bibimbap, BBQ & More",
    metaDescription:
      "Plan a week of Korean meals with bibimbap, bulgogi, and kimchi jjigae. Auto-generated grocery lists make Korean home cooking approachable and delicious.",
    h1: "Korean Meal Plans for Bold, Craveable Home Cooking",
    intro:
      "Korean food has taken the world by storm, and for good reason — it's bold, fermented, fiery, and endlessly craveable. But Korean home cooking is more than just BBQ and fried chicken. It's banchan-laden tables, bubbling stews, and nourishing rice bowls. Our weekly plans bring this depth to your kitchen with recipes that range from quick weeknight bibimbap to slow-simmered jjigae, plus a grocery list covering your gochujang, sesame oil, and everything in between.",
    valueProps: [
      {
        heading: "Banchan Game Strong",
        description:
          "Plans include easy banchan (side dishes) like quick-pickled cucumbers, seasoned spinach, and kongnamul that transform a simple main into a full Korean table spread.",
      },
      {
        heading: "Fermented Flavor Boost",
        description:
          "Kimchi, doenjang, and gochujang are probiotic-rich umami bombs that add incredible depth of flavor — and gut health benefits — to everyday meals.",
      },
      {
        heading: "Meal Prep Champion",
        description:
          "Korean cooking is built for batch preparation — marinated meats, banchan, and rice all keep well for days, making it one of the most meal-prep-friendly cuisines.",
      },
    ],
    sampleMeals: [
      {
        name: "Bulgogi with Steamed Rice and Banchan",
        mealType: "dinner",
        description:
          "Thinly sliced beef marinated in soy sauce, pear juice, garlic, and sesame, seared in a hot skillet and served with rice and three simple banchan.",
        prepTime: "25 min + 2 hr marinade",
        tags: ["classic", "high-protein", "gluten-free-option"],
      },
      {
        name: "Gyeran-bap (Egg Rice Bowl)",
        mealType: "breakfast",
        description:
          "A steaming bowl of short-grain rice topped with a fried egg, toasted sesame oil, soy sauce, and crispy gim seaweed — Korean comfort in five minutes.",
        prepTime: "5 min",
        tags: ["quick", "budget", "gluten-free"],
      },
      {
        name: "Japchae Glass Noodle Stir-Fry",
        mealType: "lunch",
        description:
          "Sweet potato glass noodles stir-fried with spinach, carrots, mushrooms, and beef in a sesame-soy sauce, served warm or at room temperature.",
        prepTime: "25 min",
        tags: ["gluten-free", "meal-prep"],
      },
      {
        name: "Kimchi Jjigae (Kimchi Stew)",
        mealType: "dinner",
        description:
          "A fiery, bubbling stew of aged kimchi, pork belly, tofu, and scallions simmered in anchovy-kelp broth — the ultimate Korean comfort food on a cold night.",
        prepTime: "30 min",
        tags: ["comfort-food", "spicy", "one-pot"],
      },
      {
        name: "Bibimbap with Gochujang Sauce",
        mealType: "dinner",
        description:
          "A colorful rice bowl topped with sauteed spinach, bean sprouts, carrots, zucchini, a fried egg, and beef, mixed tableside with spicy gochujang sauce.",
        prepTime: "35 min",
        tags: ["classic", "balanced", "colorful"],
      },
    ],
    faqs: [
      {
        question: "What Korean ingredients do I need to start?",
        answer:
          "The essential five are gochujang (red pepper paste), gochugaru (red pepper flakes), soy sauce, sesame oil, and rice vinegar. Add a jar of kimchi and you can make dozens of Korean dishes. These are available at most supermarkets now, and our grocery list includes specific brand recommendations.",
      },
      {
        question: "Is Korean food very spicy?",
        answer:
          "Some dishes are fiery (kimchi jjigae, tteokbokki), but many are mild — bulgogi, japchae, and galbi are savory-sweet without much heat. Our planner balances spicy and non-spicy dishes throughout the week and lets you set your heat preference. You can always reduce gochugaru or skip the chili flakes.",
      },
      {
        question: "How do I make banchan (Korean side dishes)?",
        answer:
          "Banchan are designed to be simple and batch-made. Seasoned spinach takes 5 minutes, pickled radish takes 10, and kimchi lasts weeks in the fridge. Our plans include 2-3 banchan per week with a batch-cook session — make them on Sunday and they're ready for every dinner.",
      },
      {
        question: "Can I meal prep Korean food for the whole week?",
        answer:
          "Korean cuisine might be the single best cuisine for meal prep. Marinated meats keep 3-5 days in the fridge and actually improve as they sit. Banchan are designed to last a week. Rice freezes perfectly. The planner builds in a prep session that sets up components you'll mix and match all week.",
      },
    ],
    relatedSlugs: ["japanese", "asian", "thai"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "southern",
    type: "cuisine",
    title: "Southern Meal Plans — Weekly Comfort Food Recipes",
    metaDescription:
      "Get weekly Southern meal plans with fried chicken, biscuits, and classic comfort food. Organized grocery lists make home-cooked Southern dinners easy any night.",
    h1: "Southern Meal Plans for Real Home-Cooked Comfort",
    intro:
      "Southern cooking is the definition of soul food — dishes passed down through generations, built on cast-iron skillets, slow braises, and a whole lot of love. From fluffy buttermilk biscuits to smoky collard greens and crispy fried chicken, these are the meals that bring people to the table. Our weekly plans deliver that warmth and tradition with organized recipes and a grocery list so you can focus on cooking, not planning.",
    valueProps: [
      {
        heading: "Cast-Iron Classics",
        description:
          "Plans are built around the one tool every Southern cook swears by — your cast-iron skillet — for cornbread, fried chicken, and pan-seared pork chops with crackly crust.",
      },
      {
        heading: "Low and Slow Staples",
        description:
          "Southern cooking excels at slow braises and smoky meats that fill the house with aroma — pulled pork, braised short ribs, and stewed greens that taste better the longer they cook.",
      },
      {
        heading: "Sides That Steal the Show",
        description:
          "In Southern cooking, sides aren't an afterthought — mac and cheese, coleslaw, baked beans, and cornbread are the reason people come back for seconds.",
      },
    ],
    sampleMeals: [
      {
        name: "Buttermilk Fried Chicken with Honey Drizzle",
        mealType: "dinner",
        description:
          "Bone-in chicken pieces soaked in seasoned buttermilk, dredged in seasoned flour, and fried until shatteringly crispy, finished with a light honey-hot sauce drizzle.",
        prepTime: "30 min + 4 hr brine",
        tags: ["classic", "crowd-pleaser"],
      },
      {
        name: "Biscuits and Sausage Gravy",
        mealType: "breakfast",
        description:
          "Flaky, buttery buttermilk biscuits split open and smothered in a creamy, peppery sausage gravy made from scratch in one skillet.",
        prepTime: "25 min",
        tags: ["comfort-food", "cast-iron"],
      },
      {
        name: "Pimento Cheese Sandwich with Pickled Okra",
        mealType: "lunch",
        description:
          "Tangy homemade pimento cheese spread thick on soft white bread with crisp lettuce, served alongside crunchy pickled okra spears.",
        prepTime: "10 min",
        tags: ["quick", "no-cook", "vegetarian"],
      },
      {
        name: "Shrimp and Grits",
        mealType: "dinner",
        description:
          "Plump Gulf shrimp sauteed with andouille sausage, bell pepper, and a splash of chicken stock, ladled over creamy stone-ground cheddar grits.",
        prepTime: "30 min",
        tags: ["gluten-free", "classic", "date-night"],
      },
      {
        name: "Smoked Pork Ribs with Coleslaw and Cornbread",
        mealType: "dinner",
        description:
          "Fall-off-the-bone pork ribs rubbed with brown sugar and smoked paprika, slow-roasted until glazed, served with tangy vinegar coleslaw and skillet cornbread.",
        prepTime: "20 min + 3 hr oven",
        tags: ["slow-cook", "crowd-pleaser", "weekend"],
      },
    ],
    faqs: [
      {
        question: "What makes Southern cooking different from American cooking?",
        answer:
          "Southern cooking is a regional tradition within American cuisine with its own distinct identity — it's rooted in African American, Creole, Cajun, and Appalachian food traditions. The techniques (frying, braising, smoking), ingredients (buttermilk, cornmeal, collard greens), and philosophy (generous, communal, slow) set it apart from broader American cooking.",
      },
      {
        question: "Can Southern meal plans be made healthier?",
        answer:
          "Absolutely. Our plans balance indulgent classics with lighter preparations — oven-fried chicken instead of deep-fried, collard greens with smoked turkey instead of ham hocks, and cauliflower mash alongside the mac and cheese. The soul stays the same, but the nutritional profile gets a modern update.",
      },
      {
        question: "Do I need special equipment for Southern cooking?",
        answer:
          "A 10-inch cast-iron skillet is the only essential — it handles cornbread, fried chicken, and pan sauces all in one. A Dutch oven helps for stews and braises. Our recipes are designed for standard home kitchens and don't require a smoker, deep fryer, or any specialty equipment.",
      },
      {
        question: "Is Southern food good for meal prepping?",
        answer:
          "Southern food was built for leftovers. Stews, braises, and beans all taste better the next day. Fried chicken is excellent cold. Cornbread freezes well. Our plans strategically schedule big-batch cooking days — a Sunday pot of red beans and rice feeds you through Tuesday, and weekend ribs become Monday's BBQ sandwiches.",
      },
    ],
    relatedSlugs: ["american", "mexican", "french"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
];
