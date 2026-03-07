import type { MealPlanPageData } from "./types";

export const COMBO_PAGES: MealPlanPageData[] = [
  {
    slug: "vegan-thai",
    type: "combo",
    title: "Weekly Vegan Thai Meal Plans",
    metaDescription:
      "Get weekly vegan Thai meal plans with coconut curries, pad thai, and fresh rolls. No animal products, all the bold Thai flavors you love.",
    h1: "Vegan Thai Meal Plans That Actually Taste Like Thailand",
    intro:
      "Thai cuisine is a natural fit for vegan eating — coconut milk, lemongrass, galangal, and fresh herbs do the heavy lifting. But navigating fish sauce, shrimp paste, and oyster sauce takes know-how. Our vegan Thai meal plans swap those out with smart substitutes while keeping every dish unmistakably Thai.",
    valueProps: [
      {
        heading: "Fish Sauce-Free, Flavor-Full",
        description:
          "Every recipe uses soy sauce, mushroom sauce, or seaweed-based alternatives so you get that umami depth without any fish products.",
      },
      {
        heading: "Coconut Milk Is Your Best Friend",
        description:
          "Thai curries, soups, and desserts naturally revolve around coconut milk — no dairy substitutions needed.",
      },
      {
        heading: "Protein-Rich Without Tofu Overload",
        description:
          "We rotate through tofu, tempeh, edamame, chickpeas, and mushrooms so your weekly plan never feels repetitive.",
      },
    ],
    sampleMeals: [
      {
        name: "Green Curry with Tofu and Thai Eggplant",
        mealType: "dinner",
        description:
          "Rich coconut green curry loaded with crispy tofu, Thai eggplant, bamboo shoots, and fresh basil over jasmine rice.",
        prepTime: "30 min",
        tags: ["vegan", "thai", "curry", "gluten-free"],
      },
      {
        name: "Vegan Pad Thai with Tamarind Sauce",
        mealType: "lunch",
        description:
          "Rice noodles tossed with pressed tofu, bean sprouts, scallions, and crushed peanuts in a tangy tamarind sauce.",
        prepTime: "25 min",
        tags: ["vegan", "thai", "noodles"],
      },
      {
        name: "Tom Kha Mushroom Soup",
        mealType: "dinner",
        description:
          "Creamy coconut soup with mixed mushrooms, galangal, lemongrass, kaffir lime leaves, and a squeeze of lime.",
        prepTime: "20 min",
        tags: ["vegan", "thai", "soup", "gluten-free"],
      },
      {
        name: "Thai Mango Sticky Rice",
        mealType: "breakfast",
        description:
          "Sweet sticky rice cooked in coconut milk, served with fresh mango slices and a drizzle of coconut cream.",
        prepTime: "35 min",
        tags: ["vegan", "thai", "dessert", "gluten-free"],
      },
      {
        name: "Fresh Vietnamese-Thai Spring Rolls",
        mealType: "lunch",
        description:
          "Rice paper rolls stuffed with vermicelli, mint, Thai basil, mango, and avocado with a sweet chili dipping sauce.",
        prepTime: "20 min",
        tags: ["vegan", "thai", "fresh", "gluten-free"],
      },
    ],
    faqs: [
      {
        question: "Is Thai food naturally vegan?",
        answer:
          "Many Thai dishes use coconut milk and vegetables as a base, which is great. However, most traditional Thai cooking relies on fish sauce, shrimp paste, and oyster sauce for umami. Vegan Thai cooking swaps these with soy sauce, mushroom sauce, or fermented bean paste to achieve the same depth of flavor.",
      },
      {
        question: "What replaces fish sauce in vegan Thai cooking?",
        answer:
          "The best substitutes are mushroom soy sauce, seaweed-infused soy sauce, or a mix of soy sauce with a dash of rice vinegar and a pinch of salt. Some cooks also use fermented soybean paste for that funky depth.",
      },
      {
        question: "Can I get enough protein from vegan Thai meals?",
        answer:
          "Absolutely. Thai cuisine features tofu, tempeh, edamame, peanuts, cashews, and a variety of legumes. A well-planned vegan Thai meal plan easily hits 50-70g of protein per day.",
      },
      {
        question: "Are vegan Thai meal plans good for weight loss?",
        answer:
          "Thai cuisine tends to be lighter than many Western diets, with lots of vegetables, herbs, and broth-based soups. Combined with a vegan approach, you naturally reduce calorie density while keeping meals satisfying and flavorful.",
      },
    ],
    relatedSlugs: ["vegan", "thai", "vegan-indian"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "vegan-indian",
    type: "combo",
    title: "Weekly Vegan Indian Meal Plans",
    metaDescription:
      "Weekly vegan Indian meal plans with dal, chana masala, and veggie curries. No dairy, no ghee — just authentic Indian flavors, 100% plant-based.",
    h1: "Vegan Indian Meal Plans — Bold Spices, Zero Dairy",
    intro:
      "Indian cuisine already has one of the richest vegetarian traditions on earth. Going fully vegan means swapping out ghee, paneer, and yogurt — but the spice-forward cooking style means you barely notice. Our vegan Indian meal plans draw from regional traditions across India to keep your week packed with flavor.",
    valueProps: [
      {
        heading: "Beyond Dal and Rice",
        description:
          "We pull from South Indian dosas, Punjabi chole, Rajasthani curries, and Bengali stews so your meals span the full breadth of Indian cooking.",
      },
      {
        heading: "Ghee-Free, Still Rich",
        description:
          "Coconut oil, mustard oil, and sesame oil replace ghee without losing that characteristic richness Indian food is known for.",
      },
      {
        heading: "Spice Blends That Do the Work",
        description:
          "Garam masala, chaat masala, and curry leaves create layers of flavor that make dairy completely unnecessary.",
      },
    ],
    sampleMeals: [
      {
        name: "Chana Masala with Basmati Rice",
        mealType: "dinner",
        description:
          "Chickpeas simmered in a spiced tomato-onion gravy with cumin, coriander, and garam masala, served over fluffy basmati.",
        prepTime: "35 min",
        tags: ["vegan", "indian", "legumes", "gluten-free"],
      },
      {
        name: "Masala Dosa with Coconut Chutney",
        mealType: "breakfast",
        description:
          "Crispy fermented rice-and-lentil crepe filled with spiced potato, served with coconut chutney and sambar.",
        prepTime: "40 min",
        tags: ["vegan", "indian", "south-indian", "gluten-free"],
      },
      {
        name: "Aloo Gobi with Roti",
        mealType: "lunch",
        description:
          "Dry-roasted cauliflower and potato with turmeric, cumin seeds, and fresh cilantro, paired with whole wheat roti.",
        prepTime: "30 min",
        tags: ["vegan", "indian", "vegetables"],
      },
      {
        name: "Dal Tadka",
        mealType: "dinner",
        description:
          "Yellow lentils slow-cooked with turmeric, then finished with a sizzling tempering of mustard seeds, cumin, garlic, and dried red chilies in oil.",
        prepTime: "30 min",
        tags: ["vegan", "indian", "lentils", "gluten-free"],
      },
      {
        name: "Vegetable Biryani",
        mealType: "lunch",
        description:
          "Fragrant basmati rice layered with spiced mixed vegetables, saffron, fried onions, and fresh mint, slow-cooked in a sealed pot.",
        prepTime: "50 min",
        tags: ["vegan", "indian", "rice", "gluten-free"],
      },
    ],
    faqs: [
      {
        question: "Is Indian food easy to make vegan?",
        answer:
          "Yes — Indian cuisine has the largest vegetarian tradition in the world. The main adjustments are replacing ghee with oil, skipping paneer, and using coconut cream instead of dairy cream. Most spice blends, lentil dishes, and vegetable curries are already naturally vegan.",
      },
      {
        question: "What replaces paneer in vegan Indian cooking?",
        answer:
          "Extra-firm tofu pressed and cubed works well in dishes like palak paneer (becomes palak tofu). Cashew-based paneer is another option. For texture, some cooks use chickpea flour blocks (Burmese tofu).",
      },
      {
        question: "How do I get enough protein on a vegan Indian diet?",
        answer:
          "Indian cuisine is naturally protein-rich thanks to lentils (dal), chickpeas (chole), kidney beans (rajma), black-eyed peas (lobia), and soy products. A typical day of Indian vegan eating can easily provide 60-80g of protein.",
      },
      {
        question: "Are vegan Indian meal plans budget-friendly?",
        answer:
          "Very much so. Lentils, rice, chickpeas, and seasonal vegetables are among the most affordable foods globally. Indian spices last for months, and a well-stocked spice cabinet means you can make dozens of different dishes from pantry staples.",
      },
    ],
    relatedSlugs: ["vegan", "indian", "vegetarian-indian"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "vegan-mediterranean",
    type: "combo",
    title: "Vegan Mediterranean Meal Plans",
    metaDescription:
      "Weekly vegan Mediterranean meal plans with hummus, falafel, grain bowls, and roasted vegetables. Heart-healthy, plant-based, and delicious.",
    h1: "Vegan Mediterranean Meal Plans — Sun-Soaked, Plant-Powered",
    intro:
      "The Mediterranean diet is already celebrated as one of the healthiest in the world. Remove the dairy and seafood, and you still have a treasure trove of olive oil, legumes, whole grains, nuts, and seasonal produce. Our vegan Mediterranean plans make every week feel like a slow lunch on the Amalfi Coast.",
    valueProps: [
      {
        heading: "Olive Oil Is the Star",
        description:
          "Heart-healthy fats from extra virgin olive oil, tahini, and nuts replace butter and cheese without any sacrifice in richness.",
      },
      {
        heading: "Legume-Powered Protein",
        description:
          "Chickpeas, lentils, cannellini beans, and fava beans are Mediterranean staples that keep you full and fueled.",
      },
      {
        heading: "Seasonal and Simple",
        description:
          "Mediterranean cooking celebrates ingredients at their peak — ripe tomatoes, fresh herbs, and quality olive oil do most of the work.",
      },
    ],
    sampleMeals: [
      {
        name: "Falafel Bowl with Tahini Dressing",
        mealType: "lunch",
        description:
          "Crispy baked falafel over mixed greens, cucumber, tomato, pickled red onion, and a generous drizzle of lemon-tahini dressing.",
        prepTime: "35 min",
        tags: ["vegan", "mediterranean", "legumes"],
      },
      {
        name: "Roasted Eggplant with Pomegranate and Mint",
        mealType: "dinner",
        description:
          "Slow-roasted eggplant halves topped with pomegranate seeds, toasted pine nuts, fresh mint, and a balsamic reduction.",
        prepTime: "40 min",
        tags: ["vegan", "mediterranean", "vegetables", "gluten-free"],
      },
      {
        name: "Shakshuka-Style Chickpeas (No Eggs)",
        mealType: "breakfast",
        description:
          "Chickpeas simmered in a spiced tomato sauce with cumin, paprika, and bell peppers, served with crusty sourdough.",
        prepTime: "25 min",
        tags: ["vegan", "mediterranean", "legumes"],
      },
      {
        name: "Greek-Style Grain Bowl",
        mealType: "lunch",
        description:
          "Farro topped with marinated white beans, cherry tomatoes, kalamata olives, cucumber, and oregano vinaigrette.",
        prepTime: "20 min",
        tags: ["vegan", "mediterranean", "grains"],
      },
      {
        name: "Lentil and Roasted Vegetable Soup",
        mealType: "dinner",
        description:
          "Red lentils simmered with roasted carrots, zucchini, garlic, and rosemary in a tomato broth, finished with olive oil.",
        prepTime: "35 min",
        tags: ["vegan", "mediterranean", "soup", "gluten-free"],
      },
    ],
    faqs: [
      {
        question: "Can you follow a Mediterranean diet as a vegan?",
        answer:
          "Absolutely. The Mediterranean diet is built on vegetables, legumes, whole grains, olive oil, nuts, and fruit — all plant-based. Fish and dairy are traditional but not essential. Many nutrition researchers consider a vegan Mediterranean diet one of the healthiest eating patterns possible.",
      },
      {
        question: "What do vegan Mediterranean meals use instead of cheese?",
        answer:
          "Nutritional yeast, cashew-based feta, and tofu ricotta are common swaps. But many Mediterranean dishes don't need cheese at all — tahini, olive oil, and fresh herbs provide plenty of richness and flavor.",
      },
      {
        question: "Is a vegan Mediterranean diet good for heart health?",
        answer:
          "Yes. The Mediterranean diet is the most-studied diet for cardiovascular health, and removing animal products further reduces saturated fat intake. The emphasis on olive oil, nuts, legumes, and whole grains supports healthy cholesterol and blood pressure.",
      },
      {
        question: "How much does a vegan Mediterranean meal plan cost per week?",
        answer:
          "It is one of the most affordable healthy diets. Staples like lentils, chickpeas, rice, seasonal vegetables, and olive oil are inexpensive. A week of vegan Mediterranean eating typically costs $40-60 for one person.",
      },
    ],
    relatedSlugs: ["vegan", "mediterranean", "vegetarian-mediterranean"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "keto-mediterranean",
    type: "combo",
    title: "Keto Mediterranean Meal Plans",
    metaDescription:
      "Weekly keto Mediterranean meal plans combining healthy fats, fresh vegetables, and low-carb recipes. Olive oil-rich, grain-free, and satisfying.",
    h1: "Keto Mediterranean Meal Plans — Healthy Fats, Zero Grains",
    intro:
      "The Mediterranean diet and keto share a love of healthy fats — olive oil, avocado, nuts, and fatty fish. The main adjustment is dropping bread, pasta, and grains. What remains is arguably the most nutritious version of keto: rich in omega-3s, antioxidants, and flavor without the typical keto reliance on processed meats and cheese.",
    valueProps: [
      {
        heading: "The Healthiest Version of Keto",
        description:
          "Instead of bacon-and-butter keto, you get olive oil, fresh fish, leafy greens, and nuts — all the fats your body actually thrives on.",
      },
      {
        heading: "Naturally Low-Carb Staples",
        description:
          "Grilled fish, roasted vegetables, olives, and nuts are already keto-friendly without any modification.",
      },
      {
        heading: "Sustainable Long-Term",
        description:
          "This combination avoids the burnout of strict keto by keeping meals varied, fresh, and genuinely enjoyable.",
      },
    ],
    sampleMeals: [
      {
        name: "Grilled Salmon with Olive Tapenade",
        mealType: "dinner",
        description:
          "Pan-seared salmon fillet topped with a kalamata olive and caper tapenade, served with roasted asparagus drizzled in olive oil.",
        prepTime: "25 min",
        tags: ["keto", "mediterranean", "seafood", "gluten-free"],
      },
      {
        name: "Greek Salad with Grilled Halloumi",
        mealType: "lunch",
        description:
          "Crispy grilled halloumi over cucumber, tomato, red onion, and olives with a red wine vinaigrette and dried oregano.",
        prepTime: "15 min",
        tags: ["keto", "mediterranean", "salad", "gluten-free"],
      },
      {
        name: "Eggs Baked in Tomato Sauce (Shakshuka)",
        mealType: "breakfast",
        description:
          "Two eggs poached in a spiced tomato and bell pepper sauce with cumin, paprika, and crumbled feta.",
        prepTime: "20 min",
        tags: ["keto", "mediterranean", "eggs", "gluten-free"],
      },
      {
        name: "Lamb Kofta with Tzatziki",
        mealType: "dinner",
        description:
          "Spiced ground lamb skewers with cumin and mint, served with a cucumber-yogurt tzatziki and a side of grilled zucchini.",
        prepTime: "30 min",
        tags: ["keto", "mediterranean", "meat", "gluten-free"],
      },
      {
        name: "Stuffed Bell Peppers with Ground Turkey and Feta",
        mealType: "lunch",
        description:
          "Bell peppers filled with seasoned ground turkey, sun-dried tomatoes, spinach, and feta, baked until golden.",
        prepTime: "40 min",
        tags: ["keto", "mediterranean", "gluten-free"],
      },
    ],
    faqs: [
      {
        question: "Can you combine keto and Mediterranean diets?",
        answer:
          "Yes, and many nutritionists consider it the ideal combination. Both diets emphasize healthy fats, and the Mediterranean approach adds variety, vegetables, and fish that typical keto plans often lack. You just skip the bread, pasta, rice, and legumes.",
      },
      {
        question: "What carbs do you cut on a keto Mediterranean diet?",
        answer:
          "Bread, pasta, rice, couscous, potatoes, and legumes (chickpeas, lentils) are removed. You keep low-carb vegetables like leafy greens, zucchini, bell peppers, tomatoes, and eggplant, plus nuts and seeds.",
      },
      {
        question: "Is keto Mediterranean better than regular keto?",
        answer:
          "For most people, yes. Regular keto can lean heavily on processed meats, cheese, and butter. Keto Mediterranean emphasizes olive oil, fish, and vegetables, which research links to better heart health and more sustainable weight loss.",
      },
      {
        question: "How many carbs per day on a keto Mediterranean plan?",
        answer:
          "Typically 20-30g net carbs per day, which is standard keto. The difference is that your carbs come from nutrient-dense vegetables, olives, and nuts rather than from processed low-carb products.",
      },
    ],
    relatedSlugs: ["keto", "mediterranean", "keto-asian"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "keto-asian",
    type: "combo",
    title: "Weekly Keto Asian Meal Plans",
    metaDescription:
      "Weekly keto Asian meal plans with stir-fries, soups, and grilled meats. No rice or noodles — all the umami, none of the carbs.",
    h1: "Keto Asian Meal Plans — All the Umami, None of the Rice",
    intro:
      "Asian cuisine is built on bold flavors — soy, ginger, garlic, sesame, chili — that work perfectly without carbs. The challenge is replacing rice, noodles, and sweet sauces. Our keto Asian meal plans use cauliflower rice, shirataki noodles, and sugar-free sauces to keep every meal under 30g net carbs while tasting authentically Asian.",
    valueProps: [
      {
        heading: "Smart Rice and Noodle Swaps",
        description:
          "Cauliflower rice, shirataki noodles, and zucchini noodles replace traditional starches without changing the dish's identity.",
      },
      {
        heading: "Naturally Keto Ingredients",
        description:
          "Fatty cuts of meat, coconut milk, sesame oil, and egg-based dishes are already staples in Asian cooking and fit keto perfectly.",
      },
      {
        heading: "Hidden Sugar Alerts",
        description:
          "We flag and fix the hidden sugars in hoisin, teriyaki, and sweet chili sauces so you stay in ketosis without bland food.",
      },
    ],
    sampleMeals: [
      {
        name: "Beef and Broccoli Stir-Fry",
        mealType: "dinner",
        description:
          "Thinly sliced beef stir-fried with broccoli florets in a garlic-ginger soy sauce, served over cauliflower rice.",
        prepTime: "20 min",
        tags: ["keto", "asian", "chinese", "gluten-free"],
      },
      {
        name: "Egg Drop Soup with Sesame",
        mealType: "lunch",
        description:
          "Silky chicken broth with ribbons of beaten egg, white pepper, scallions, and a drizzle of toasted sesame oil.",
        prepTime: "10 min",
        tags: ["keto", "asian", "chinese", "soup", "gluten-free"],
      },
      {
        name: "Korean Lettuce Wraps with Bulgogi",
        mealType: "dinner",
        description:
          "Sugar-free marinated beef bulgogi wrapped in crisp butter lettuce with kimchi, sesame seeds, and gochugaru.",
        prepTime: "25 min",
        tags: ["keto", "asian", "korean", "gluten-free"],
      },
      {
        name: "Thai Coconut Chicken Soup (Tom Kha Gai)",
        mealType: "lunch",
        description:
          "Chicken simmered in coconut milk with galangal, lemongrass, mushrooms, and lime juice — naturally low-carb.",
        prepTime: "25 min",
        tags: ["keto", "asian", "thai", "soup", "gluten-free"],
      },
      {
        name: "Japanese Tamagoyaki (Rolled Omelette)",
        mealType: "breakfast",
        description:
          "Sweet-savory rolled omelette made with eggs, dashi, and a touch of mirin substitute, sliced into rounds.",
        prepTime: "15 min",
        tags: ["keto", "asian", "japanese", "eggs", "gluten-free"],
      },
    ],
    faqs: [
      {
        question: "Can you eat Asian food on keto?",
        answer:
          "Yes, with some modifications. The flavors of Asian cooking — soy, ginger, garlic, chili, sesame — are all zero or very low carb. The challenge is replacing rice, noodles, and sugary sauces. Cauliflower rice, shirataki noodles, and sugar-free sauce alternatives solve this.",
      },
      {
        question: "Is soy sauce keto-friendly?",
        answer:
          "Regular soy sauce has about 1g carb per tablespoon, so it is keto-friendly in normal amounts. Tamari (gluten-free soy sauce) and coconut aminos are also good options, though coconut aminos has slightly more sugar.",
      },
      {
        question: "What Asian dishes are naturally keto?",
        answer:
          "Many Asian dishes are naturally low-carb: sashimi, egg drop soup, stir-fried vegetables with meat, grilled satay, Thai coconut soups, and Korean BBQ lettuce wraps. Just skip the rice on the side.",
      },
      {
        question: "How do I replace rice in Asian keto meals?",
        answer:
          "Cauliflower rice is the most popular swap — it absorbs sauces well and has the right texture. You can also use finely diced mushrooms, hemp hearts, or simply serve dishes over a bed of stir-fried cabbage.",
      },
    ],
    relatedSlugs: ["keto", "asian", "keto-mediterranean"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "keto-mexican",
    type: "combo",
    title: "Weekly Keto Mexican Meal Plans",
    metaDescription:
      "Weekly keto Mexican meal plans without tortillas or beans. Enjoy fajitas, carne asada, and guacamole while staying under 30g carbs daily.",
    h1: "Keto Mexican Meal Plans — Bold Flavors, No Tortillas Needed",
    intro:
      "Mexican cuisine brings heat, depth, and soul to every meal — and most of that magic comes from chiles, lime, cilantro, and slow-cooked meats, not from the tortillas wrapping them. Our keto Mexican meal plans strip out the corn, beans, and rice while keeping the flavors that make Mexican food one of the most beloved cuisines on earth.",
    valueProps: [
      {
        heading: "Lettuce Wraps and Cheese Shells",
        description:
          "Crispy cheese taco shells and butter lettuce cups replace tortillas, giving you the handheld experience without the carbs.",
      },
      {
        heading: "Fat-Rich by Nature",
        description:
          "Avocado, sour cream, cheese, and slow-braised meats make Mexican cuisine one of the easiest to adapt to keto.",
      },
      {
        heading: "Spice Without Sugar",
        description:
          "Authentic Mexican spice blends — cumin, chili powder, oregano, smoked paprika — are naturally sugar-free and keto-perfect.",
      },
    ],
    sampleMeals: [
      {
        name: "Carne Asada with Guacamole and Grilled Peppers",
        mealType: "dinner",
        description:
          "Marinated and grilled flank steak sliced thin, served with fresh guacamole, charred poblano peppers, and lime wedges.",
        prepTime: "30 min",
        tags: ["keto", "mexican", "meat", "gluten-free"],
      },
      {
        name: "Cheese Shell Tacos with Carnitas",
        mealType: "lunch",
        description:
          "Crispy baked cheddar shells filled with slow-cooked pulled pork, pickled red onion, cilantro, and a squeeze of lime.",
        prepTime: "25 min",
        tags: ["keto", "mexican", "pork", "gluten-free"],
      },
      {
        name: "Huevos Rancheros (No Tortilla)",
        mealType: "breakfast",
        description:
          "Fried eggs over a bed of ranchero salsa with avocado slices, cotija cheese, and a side of Mexican-style sauteed greens.",
        prepTime: "15 min",
        tags: ["keto", "mexican", "eggs", "gluten-free"],
      },
      {
        name: "Chicken Fajita Lettuce Wraps",
        mealType: "dinner",
        description:
          "Sizzling chicken breast with bell peppers and onions, wrapped in butter lettuce with sour cream and pico de gallo.",
        prepTime: "20 min",
        tags: ["keto", "mexican", "chicken", "gluten-free"],
      },
      {
        name: "Chorizo and Egg Scramble",
        mealType: "breakfast",
        description:
          "Crumbled Mexican chorizo scrambled with eggs, jalapenos, and queso fresco, served with sliced avocado.",
        prepTime: "15 min",
        tags: ["keto", "mexican", "eggs", "gluten-free"],
      },
    ],
    faqs: [
      {
        question: "Can you eat Mexican food on keto?",
        answer:
          "Yes. The core flavors of Mexican cuisine — chiles, cumin, lime, cilantro, garlic — are all zero-carb. The main adjustments are removing tortillas, rice, and beans. Cheese shell tacos, lettuce wraps, and cauliflower rice make great substitutes.",
      },
      {
        question: "Are beans keto-friendly?",
        answer:
          "Traditional beans (black, pinto, kidney) are too high in carbs for strict keto — about 20-25g net carbs per half cup. Small amounts can fit a more liberal low-carb approach, but our keto Mexican plans use alternatives or skip them.",
      },
      {
        question: "What Mexican sauces are keto-safe?",
        answer:
          "Salsa verde, pico de gallo, guacamole, and most hot sauces are naturally low-carb. Watch out for mole (contains sugar and chocolate), sweetened marinades, and store-bought salsas with added sugar.",
      },
      {
        question: "How do I make keto tortillas?",
        answer:
          "The most popular options are almond flour tortillas, cheese crisps (baked shredded cheese), and coconut flour wraps. For a zero-effort swap, large butter lettuce leaves work perfectly as taco shells.",
      },
    ],
    relatedSlugs: ["keto", "mexican", "gluten-free-mexican"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "vegetarian-italian",
    type: "combo",
    title: "Vegetarian Italian Meal Plans",
    metaDescription:
      "Weekly vegetarian Italian meal plans with pasta, risotto, and caprese. Classic Italian comfort food without the meat, planned for you.",
    h1: "Vegetarian Italian Meal Plans — La Dolce Vita, Meat-Free",
    intro:
      "Italian cooking has always celebrated vegetables, cheese, pasta, and olive oil. Some of the most iconic Italian dishes — margherita pizza, cacio e pepe, risotto — are already vegetarian. Our meal plans lean into this tradition, giving you a week of Italian comfort food that never feels like it is missing anything.",
    valueProps: [
      {
        heading: "Pasta Done Right",
        description:
          "From aglio e olio to penne arrabbiata, Italian pasta is at its best when it lets simple ingredients shine — no meat required.",
      },
      {
        heading: "Cheese as a Main Event",
        description:
          "Mozzarella, parmesan, ricotta, and burrata take center stage in dishes designed around their flavors and textures.",
      },
      {
        heading: "Seasonal Italian Tradition",
        description:
          "Italian nonnas have been cooking vegetarian for centuries — we follow their lead with recipes rooted in regional tradition.",
      },
    ],
    sampleMeals: [
      {
        name: "Mushroom Risotto with Truffle Oil",
        mealType: "dinner",
        description:
          "Creamy arborio rice slowly stirred with porcini and cremini mushrooms, finished with parmesan and a drizzle of truffle oil.",
        prepTime: "40 min",
        tags: ["vegetarian", "italian", "rice", "gluten-free"],
      },
      {
        name: "Caprese Panini with Pesto",
        mealType: "lunch",
        description:
          "Fresh mozzarella, ripe tomato slices, and basil pesto pressed in ciabatta until golden and melty.",
        prepTime: "15 min",
        tags: ["vegetarian", "italian", "sandwich"],
      },
      {
        name: "Spinach and Ricotta Stuffed Shells",
        mealType: "dinner",
        description:
          "Jumbo pasta shells filled with ricotta, spinach, and nutmeg, baked in marinara sauce and topped with melted mozzarella.",
        prepTime: "45 min",
        tags: ["vegetarian", "italian", "pasta"],
      },
      {
        name: "Italian Frittata with Zucchini and Herbs",
        mealType: "breakfast",
        description:
          "Eggs baked with sliced zucchini, fresh basil, sun-dried tomatoes, and pecorino cheese until set and golden.",
        prepTime: "25 min",
        tags: ["vegetarian", "italian", "eggs", "gluten-free"],
      },
      {
        name: "Penne Arrabbiata",
        mealType: "lunch",
        description:
          "Penne pasta tossed in a fiery tomato sauce with garlic, red chili flakes, and fresh parsley.",
        prepTime: "20 min",
        tags: ["vegetarian", "italian", "pasta", "vegan"],
      },
    ],
    faqs: [
      {
        question: "Is Italian food good for vegetarians?",
        answer:
          "Italian cuisine is one of the most vegetarian-friendly in the world. Pasta, risotto, pizza, bruschetta, minestrone, and countless antipasti are traditionally meatless. Many Italian regions have deep vegetable-forward cooking traditions.",
      },
      {
        question: "What protein sources are in vegetarian Italian cooking?",
        answer:
          "Eggs, cheese (parmesan, ricotta, mozzarella), beans (cannellini, borlotti), lentils, and nuts. Italian cuisine also uses chickpea flour (farinata) and plenty of legume-based soups.",
      },
      {
        question: "Is parmesan cheese vegetarian?",
        answer:
          "Traditional Parmigiano-Reggiano uses animal rennet and is not technically vegetarian. However, many brands make vegetarian parmesan with microbial rennet. Our recipes work with either — just check the label if this matters to you.",
      },
      {
        question: "Can vegetarian Italian food be healthy?",
        answer:
          "Absolutely. While pasta and cheese can be heavy, Italian cooking also features grilled vegetables, bean soups, fresh salads, and olive oil-based dishes. A balanced vegetarian Italian plan includes both comfort classics and lighter fare.",
      },
    ],
    relatedSlugs: ["vegetarian", "italian", "gluten-free-italian"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "vegetarian-indian",
    type: "combo",
    title: "Vegetarian Indian Meal Plans",
    metaDescription:
      "Weekly vegetarian Indian meal plans with paneer, dal, and veggie curries. Authentic Indian recipes planned for your whole week, no meat needed.",
    h1: "Vegetarian Indian Meal Plans — A Tradition Centuries Deep",
    intro:
      "India is home to the world's largest vegetarian population, and its cuisine reflects centuries of meatless innovation. From creamy paneer dishes to fiery lentil dals and crispy dosas, vegetarian Indian food is never an afterthought — it is the main event. Our weekly plans draw from North, South, East, and West Indian traditions.",
    valueProps: [
      {
        heading: "Paneer, Dal, and Beyond",
        description:
          "Rich paneer curries, hearty lentil dals, and crispy snacks like samosas and pakoras keep your week exciting and filling.",
      },
      {
        heading: "Regional Diversity",
        description:
          "We rotate through Punjabi, South Indian, Gujarati, Bengali, and Rajasthani cooking so you experience the full spectrum of Indian vegetarian food.",
      },
      {
        heading: "Spice Knowledge Built In",
        description:
          "Each recipe includes exact spice measurements and toasting tips so you build confidence with Indian spice blends.",
      },
    ],
    sampleMeals: [
      {
        name: "Palak Paneer with Naan",
        mealType: "dinner",
        description:
          "Cubes of paneer in a creamy spinach sauce with garlic, ginger, and garam masala, served with warm garlic naan.",
        prepTime: "35 min",
        tags: ["vegetarian", "indian", "paneer"],
      },
      {
        name: "Idli with Sambar and Chutney",
        mealType: "breakfast",
        description:
          "Steamed rice-and-lentil cakes served with a spiced vegetable sambar and coconut chutney.",
        prepTime: "30 min",
        tags: ["vegetarian", "indian", "south-indian", "gluten-free"],
      },
      {
        name: "Rajma Curry (Kidney Bean Stew)",
        mealType: "lunch",
        description:
          "Red kidney beans slow-cooked in a thick tomato-onion gravy with cumin, coriander, and kashmiri chili, served over rice.",
        prepTime: "40 min",
        tags: ["vegetarian", "indian", "legumes", "gluten-free"],
      },
      {
        name: "Paneer Tikka Masala",
        mealType: "dinner",
        description:
          "Charred paneer cubes in a rich, creamy tomato-cashew sauce with fenugreek leaves, served with jeera rice.",
        prepTime: "35 min",
        tags: ["vegetarian", "indian", "paneer", "gluten-free"],
      },
      {
        name: "Gujarati Dal with Rice",
        mealType: "lunch",
        description:
          "Sweet-and-sour toor dal with jaggery and tamarind, tempered with mustard seeds and curry leaves, over steamed rice.",
        prepTime: "30 min",
        tags: ["vegetarian", "indian", "lentils", "gluten-free"],
      },
    ],
    faqs: [
      {
        question: "Is most Indian food vegetarian?",
        answer:
          "A significant portion is. Around 30-40% of India's population is vegetarian, and Indian cuisine has the world's most developed vegetarian cooking tradition. Most Indian restaurants offer extensive vegetarian menus, and many regional cuisines are predominantly meatless.",
      },
      {
        question: "What are the best protein sources in vegetarian Indian food?",
        answer:
          "Paneer (Indian cottage cheese), lentils (dal), chickpeas, kidney beans, yogurt, and milk-based sweets. Indian cuisine uses a wide variety of legumes — toor, moong, masoor, chana, urad — each with distinct flavors and textures.",
      },
      {
        question: "Is vegetarian Indian food spicy?",
        answer:
          "It ranges widely. South Indian food tends to be spicier, while Gujarati and Bengali cuisines are milder and often sweet. Our meal plans indicate spice levels and always include instructions for adjusting heat up or down.",
      },
      {
        question: "Can I meal prep Indian food for the week?",
        answer:
          "Absolutely. Dals, curries, and rice dishes reheat beautifully and often taste better the next day as flavors develop. Roti and paratha can be made in batches and frozen. Indian food is one of the best cuisines for meal prepping.",
      },
    ],
    relatedSlugs: ["vegetarian", "indian", "vegan-indian"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "vegetarian-mediterranean",
    type: "combo",
    title: "Vegetarian Mediterranean Meal Plans",
    metaDescription:
      "Weekly vegetarian Mediterranean meal plans with feta, hummus, grain bowls, and roasted vegetables. Heart-healthy eating without the meat.",
    h1: "Vegetarian Mediterranean Meal Plans — Fresh, Simple, Satisfying",
    intro:
      "The Mediterranean diet already puts vegetables, grains, and legumes at its center — removing meat just brings those ingredients further into the spotlight. Our vegetarian Mediterranean plans pair eggs, cheese, and yogurt with the olive oil, fresh herbs, and seasonal produce that define this world-renowned eating style.",
    valueProps: [
      {
        heading: "Eggs and Cheese Add Richness",
        description:
          "Feta, halloumi, ricotta, and eggs provide satisfying protein and flavor that keep vegetarian Mediterranean meals from feeling light on substance.",
      },
      {
        heading: "Grain Bowls and Salads That Fill You Up",
        description:
          "Farro, quinoa, bulgur, and freekeh make hearty bases that keep you full, paired with roasted vegetables and tangy dressings.",
      },
      {
        heading: "Heart-Healthy by Design",
        description:
          "The Mediterranean eating pattern is the most-studied diet for cardiovascular health, and the vegetarian version amplifies those benefits.",
      },
    ],
    sampleMeals: [
      {
        name: "Spanakopita (Greek Spinach Pie)",
        mealType: "lunch",
        description:
          "Flaky phyllo dough filled with spinach, feta, dill, and scallions, baked until golden and crispy.",
        prepTime: "45 min",
        tags: ["vegetarian", "mediterranean", "greek"],
      },
      {
        name: "Shakshuka with Crusty Bread",
        mealType: "breakfast",
        description:
          "Eggs poached in a spiced tomato and pepper sauce with cumin, paprika, and a crumble of feta, served with sourdough.",
        prepTime: "25 min",
        tags: ["vegetarian", "mediterranean", "eggs"],
      },
      {
        name: "Grilled Halloumi and Roasted Vegetable Platter",
        mealType: "dinner",
        description:
          "Slabs of grilled halloumi alongside roasted eggplant, zucchini, bell peppers, and cherry tomatoes with a lemon-herb drizzle.",
        prepTime: "30 min",
        tags: ["vegetarian", "mediterranean", "cheese", "gluten-free"],
      },
      {
        name: "Freekeh Tabbouleh with Pomegranate",
        mealType: "lunch",
        description:
          "Smoky freekeh mixed with parsley, mint, tomato, cucumber, and pomegranate seeds in a lemon-olive oil dressing.",
        prepTime: "25 min",
        tags: ["vegetarian", "mediterranean", "grains"],
      },
      {
        name: "Stuffed Grape Leaves with Rice and Herbs",
        mealType: "dinner",
        description:
          "Tender grape leaves rolled around seasoned rice with dill, mint, and pine nuts, braised in olive oil and lemon juice.",
        prepTime: "50 min",
        tags: ["vegetarian", "mediterranean", "vegan"],
      },
    ],
    faqs: [
      {
        question: "Is the Mediterranean diet good for vegetarians?",
        answer:
          "It is one of the best diets for vegetarians. The Mediterranean eating pattern is already plant-forward, with vegetables, legumes, grains, and olive oil at its core. Adding eggs and dairy provides complete protein without relying on meat or processed substitutes.",
      },
      {
        question: "What do vegetarian Mediterranean meals look like for a week?",
        answer:
          "A typical week includes shakshuka for breakfast, grain bowls and salads for lunch, and dishes like spanakopita, stuffed peppers, or risotto for dinner. Snacks are hummus with vegetables, olives, nuts, and fresh fruit.",
      },
      {
        question: "Can I lose weight on a vegetarian Mediterranean diet?",
        answer:
          "Yes. The Mediterranean diet is associated with sustainable weight management. The emphasis on fiber-rich vegetables, whole grains, and healthy fats promotes satiety. Removing meat naturally reduces calorie-dense options.",
      },
      {
        question: "How is vegetarian Mediterranean different from vegan Mediterranean?",
        answer:
          "Vegetarian Mediterranean includes eggs, cheese (feta, halloumi, ricotta), yogurt, and honey. Vegan Mediterranean excludes all animal products. The vegetarian version is easier to follow for most people due to the added protein and flavor from dairy and eggs.",
      },
    ],
    relatedSlugs: ["vegetarian", "mediterranean", "vegan-mediterranean"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "gluten-free-asian",
    type: "combo",
    title: "Gluten-Free Asian Meal Plans",
    metaDescription:
      "Weekly gluten-free Asian meal plans with rice-based dishes, stir-fries, and soups. Navigate soy sauce traps and hidden gluten with confidence.",
    h1: "Gluten-Free Asian Meal Plans — Navigate Hidden Gluten Like a Pro",
    intro:
      "Asian cuisine offers incredible variety for gluten-free eaters — rice is the default starch in most of Asia, and many dishes are naturally wheat-free. The tricky part is soy sauce (which contains wheat), some noodles, and hidden thickeners. Our gluten-free Asian plans handle all of that, so you can enjoy bold Asian flavors without the worry.",
    valueProps: [
      {
        heading: "Soy Sauce Solved",
        description:
          "Every recipe uses tamari or coconut aminos instead of regular soy sauce, so you get the umami without any wheat.",
      },
      {
        heading: "Rice-Based by Default",
        description:
          "Most Asian cuisines center on rice, rice noodles, or rice paper — all naturally gluten-free. We lean into this advantage.",
      },
      {
        heading: "Hidden Gluten Flagged",
        description:
          "We call out and replace hidden gluten sources like oyster sauce, hoisin, and wheat-based dumpling wrappers.",
      },
    ],
    sampleMeals: [
      {
        name: "Chicken Pad See Ew with Rice Noodles",
        mealType: "dinner",
        description:
          "Wide rice noodles stir-fried with chicken, Chinese broccoli, egg, and a sweet-savory tamari-based sauce.",
        prepTime: "25 min",
        tags: ["gluten-free", "asian", "thai", "noodles"],
      },
      {
        name: "Vietnamese Pho with Beef",
        mealType: "lunch",
        description:
          "Rich beef bone broth ladled over rice noodles with thinly sliced beef, bean sprouts, Thai basil, and lime.",
        prepTime: "45 min",
        tags: ["gluten-free", "asian", "vietnamese", "soup"],
      },
      {
        name: "Japanese Onigiri (Rice Balls)",
        mealType: "breakfast",
        description:
          "Seasoned sushi rice shaped into triangles, filled with salmon and wrapped in nori, with tamari for dipping.",
        prepTime: "20 min",
        tags: ["gluten-free", "asian", "japanese", "rice"],
      },
      {
        name: "Korean Bibimbap",
        mealType: "dinner",
        description:
          "Rice bowl topped with seasoned vegetables, a fried egg, beef, and gochujang (verified gluten-free), mixed tableside.",
        prepTime: "35 min",
        tags: ["gluten-free", "asian", "korean", "rice"],
      },
      {
        name: "Thai Green Papaya Salad (Som Tum)",
        mealType: "lunch",
        description:
          "Shredded green papaya pounded with tomatoes, green beans, peanuts, lime, chili, and a tamari-based dressing.",
        prepTime: "15 min",
        tags: ["gluten-free", "asian", "thai", "salad"],
      },
    ],
    faqs: [
      {
        question: "Is Asian food gluten-free?",
        answer:
          "Many Asian dishes are naturally gluten-free since rice (not wheat) is the primary starch across most of Asia. However, soy sauce contains wheat, and many sauces, noodles, and coatings use wheat flour. The key is knowing what to swap and what to avoid.",
      },
      {
        question: "Is soy sauce gluten-free?",
        answer:
          "Regular soy sauce (like Kikkoman) contains wheat and is not gluten-free. Tamari is a Japanese soy sauce traditionally made without wheat — always check the label for 'gluten-free' certification. Coconut aminos are another safe alternative.",
      },
      {
        question: "What Asian noodles are gluten-free?",
        answer:
          "Rice noodles (pad thai, pho, rice vermicelli), glass noodles (mung bean), shirataki noodles (konjac), and sweet potato noodles (japchae) are all gluten-free. Avoid ramen, udon, soba (unless 100% buckwheat), and egg noodles.",
      },
      {
        question: "Can I eat sushi if I am gluten-free?",
        answer:
          "Yes, with precautions. Sushi rice, fish, and nori are gluten-free. Use tamari instead of soy sauce, avoid tempura rolls, and ask about imitation crab (which often contains wheat). Sashimi is the safest option.",
      },
    ],
    relatedSlugs: ["gluten-free", "asian", "gluten-free-italian"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "gluten-free-italian",
    type: "combo",
    title: "Gluten-Free Italian Meal Plans",
    metaDescription:
      "Weekly gluten-free Italian meal plans with GF pasta, risotto, and polenta. Enjoy Italian comfort food without wheat — every recipe tested.",
    h1: "Gluten-Free Italian Meal Plans — Yes, You Can Still Eat Pasta",
    intro:
      "Italian food and gluten seem inseparable — until you discover risotto, polenta, GF pasta, and the countless Italian dishes that never needed wheat in the first place. Our gluten-free Italian plans prove you can eat like you are in Rome without a single grain of wheat touching your plate.",
    valueProps: [
      {
        heading: "GF Pasta That Actually Works",
        description:
          "We use top-quality rice, corn, and legume-based pastas that hold their shape and sauce — no mushy disappointments.",
      },
      {
        heading: "Risotto and Polenta Are Your Friends",
        description:
          "Two of Italy's greatest comfort foods are naturally gluten-free. We feature them heavily so you never feel limited.",
      },
      {
        heading: "Beyond Pasta Substitutes",
        description:
          "Many iconic Italian dishes — osso buco, chicken cacciatore, caprese — never needed wheat. We highlight these hidden gems.",
      },
    ],
    sampleMeals: [
      {
        name: "GF Penne with Roasted Tomato and Basil Sauce",
        mealType: "dinner",
        description:
          "Brown rice penne tossed with slow-roasted cherry tomatoes, garlic, fresh basil, and a glug of extra virgin olive oil.",
        prepTime: "30 min",
        tags: ["gluten-free", "italian", "pasta"],
      },
      {
        name: "Creamy Polenta with Mushroom Ragu",
        mealType: "dinner",
        description:
          "Soft, buttery polenta topped with a slow-simmered mushroom and tomato ragu with rosemary and thyme.",
        prepTime: "40 min",
        tags: ["gluten-free", "italian", "polenta", "vegetarian"],
      },
      {
        name: "Italian Egg Muffins with Sun-Dried Tomato",
        mealType: "breakfast",
        description:
          "Baked egg cups with sun-dried tomatoes, mozzarella, and fresh basil — portable and perfectly Italian.",
        prepTime: "25 min",
        tags: ["gluten-free", "italian", "eggs"],
      },
      {
        name: "Caprese Salad with Burrata",
        mealType: "lunch",
        description:
          "Creamy burrata over heirloom tomatoes with fresh basil, flaky salt, cracked pepper, and aged balsamic.",
        prepTime: "10 min",
        tags: ["gluten-free", "italian", "salad", "vegetarian"],
      },
      {
        name: "Chicken Piccata with Lemon-Caper Sauce",
        mealType: "lunch",
        description:
          "Pan-seared chicken cutlets dredged in rice flour, finished with a bright lemon, butter, and caper pan sauce.",
        prepTime: "25 min",
        tags: ["gluten-free", "italian", "chicken"],
      },
    ],
    faqs: [
      {
        question: "Can you eat Italian food if you are gluten-free?",
        answer:
          "Absolutely. While pasta and bread are Italian staples, the cuisine also offers risotto, polenta, grilled meats, seafood, salads, and vegetable dishes that are naturally gluten-free. Plus, high-quality GF pasta has gotten remarkably good.",
      },
      {
        question: "What is the best gluten-free pasta for Italian recipes?",
        answer:
          "Brown rice pasta and corn-rice blends hold up best. Brands like Jovial, Barilla GF, and Banza (chickpea) are widely available. The key is cooking al dente and rinsing briefly — overcooking is the main reason GF pasta turns mushy.",
      },
      {
        question: "Is risotto gluten-free?",
        answer:
          "Yes. Risotto is made with arborio or carnaroli rice, broth, butter, and parmesan — all naturally gluten-free. Just ensure your broth is GF (some commercial broths contain wheat-based additives).",
      },
      {
        question: "Is Italian bread available gluten-free?",
        answer:
          "GF focaccia and ciabatta are available from specialty bakeries and can be made at home with rice flour and tapioca starch. They are not identical to wheat bread but pair well with soups, salads, and dipping oils.",
      },
    ],
    relatedSlugs: ["gluten-free", "italian", "vegetarian-italian"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "gluten-free-mexican",
    type: "combo",
    title: "Gluten-Free Mexican Meal Plans",
    metaDescription:
      "Weekly gluten-free Mexican meal plans with corn tortillas, tacos, and fresh salsas. Authentic Mexican flavors, naturally free from wheat.",
    h1: "Gluten-Free Mexican Meal Plans — Corn Is King",
    intro:
      "Here is the good news: traditional Mexican cuisine is built on corn, not wheat. Corn tortillas, tamales, tostadas, and sopes are all naturally gluten-free. The pitfalls are flour tortillas, beer-battered items, and some store-bought spice mixes. Our plans stick to authentic corn-based Mexican cooking and flag every hidden gluten source.",
    valueProps: [
      {
        heading: "Corn Tortillas Are the Real Deal",
        description:
          "Authentic Mexican food uses corn masa, not wheat flour. Our plans center on corn tortillas, tostadas, and tamales — the way it was always meant to be.",
      },
      {
        heading: "Naturally GF Cuisine",
        description:
          "Rice, beans, grilled meats, salsas, guacamole, and most Mexican staples are inherently wheat-free. Very few swaps needed.",
      },
      {
        heading: "Cross-Contamination Awareness",
        description:
          "We flag common sources of hidden gluten in Mexican cooking: flour tortillas at taquerias, beer batters, and packaged seasoning mixes.",
      },
    ],
    sampleMeals: [
      {
        name: "Street-Style Corn Tortilla Tacos",
        mealType: "dinner",
        description:
          "Double-stacked corn tortillas with grilled chicken, diced white onion, cilantro, lime, and salsa verde.",
        prepTime: "25 min",
        tags: ["gluten-free", "mexican", "tacos"],
      },
      {
        name: "Chilaquiles with Fried Eggs",
        mealType: "breakfast",
        description:
          "Crispy corn tortilla chips simmered in red salsa, topped with fried eggs, crema, queso fresco, and sliced avocado.",
        prepTime: "20 min",
        tags: ["gluten-free", "mexican", "eggs"],
      },
      {
        name: "Black Bean and Sweet Potato Enchiladas",
        mealType: "dinner",
        description:
          "Corn tortillas rolled with mashed black beans and roasted sweet potato, covered in enchilada sauce and melted cheese.",
        prepTime: "40 min",
        tags: ["gluten-free", "mexican", "vegetarian"],
      },
      {
        name: "Ceviche Tostadas",
        mealType: "lunch",
        description:
          "Crispy corn tostadas topped with lime-cured shrimp, avocado, red onion, cucumber, and serrano chili.",
        prepTime: "30 min",
        tags: ["gluten-free", "mexican", "seafood"],
      },
      {
        name: "Mexican Rice and Bean Bowl",
        mealType: "lunch",
        description:
          "Cilantro-lime rice with seasoned pinto beans, grilled peppers, corn, pico de gallo, and a drizzle of crema.",
        prepTime: "25 min",
        tags: ["gluten-free", "mexican", "rice", "vegetarian"],
      },
    ],
    faqs: [
      {
        question: "Is Mexican food gluten-free?",
        answer:
          "Traditional Mexican food is largely gluten-free. Corn tortillas, rice, beans, salsas, and grilled meats are all wheat-free. The main items to avoid are flour tortillas, beer-battered items (like fish tacos with tempura), and some packaged seasonings that contain wheat fillers.",
      },
      {
        question: "Are corn tortillas always gluten-free?",
        answer:
          "Pure corn tortillas made from masa harina and water are gluten-free. However, some commercial brands add wheat flour for flexibility. Always check the label, or buy from a tortilleria that uses 100% corn masa.",
      },
      {
        question: "Is queso dip gluten-free?",
        answer:
          "Homemade queso made from melted cheese is naturally gluten-free. Restaurant and jarred versions sometimes use wheat flour as a thickener. Ask about ingredients or make your own with real cheese, peppers, and a splash of milk.",
      },
      {
        question: "Can celiacs eat at Mexican restaurants?",
        answer:
          "Yes, with caution. Stick to corn tortilla dishes, grilled meats, rice, beans, and fresh salsas. Ask about shared fryers (flour tortillas may be fried in the same oil) and confirm that no flour thickeners are used in sauces.",
      },
    ],
    relatedSlugs: ["gluten-free", "mexican", "keto-mexican"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "halal-mediterranean",
    type: "combo",
    title: "Halal Mediterranean Meal Plans",
    metaDescription:
      "Weekly halal Mediterranean meal plans with grilled meats, hummus, and fresh salads. Halal-certified recipes inspired by the Mediterranean coast.",
    h1: "Halal Mediterranean Meal Plans — From the Levant to Your Table",
    intro:
      "Mediterranean and halal cooking share deep roots — much of the eastern Mediterranean coast is historically Muslim, and dishes like shawarma, fattoush, and kibbeh are both Mediterranean and halal by nature. Our plans bring together the best of both worlds: heart-healthy Mediterranean eating with strict halal compliance.",
    valueProps: [
      {
        heading: "Naturally Halal Overlap",
        description:
          "Levantine, Turkish, and North African cuisines are simultaneously Mediterranean and halal — no awkward substitutions needed.",
      },
      {
        heading: "No Alcohol in Cooking",
        description:
          "We replace wine-based sauces and deglazing with pomegranate molasses, vinegar, and citrus for the same depth of flavor.",
      },
      {
        heading: "Halal Meat Done Right",
        description:
          "Our recipes specify cuts and preparation methods that work with halal butcher shops, including proper marination times for tougher cuts.",
      },
    ],
    sampleMeals: [
      {
        name: "Chicken Shawarma Plate",
        mealType: "dinner",
        description:
          "Thinly sliced halal chicken shawarma with garlic sauce, pickled turnips, hummus, and warm pita bread.",
        prepTime: "35 min",
        tags: ["halal", "mediterranean", "chicken"],
      },
      {
        name: "Lamb Kofta with Tabbouleh",
        mealType: "lunch",
        description:
          "Grilled halal lamb kofta skewers seasoned with cumin and parsley, served alongside fresh parsley-bulgur tabbouleh.",
        prepTime: "30 min",
        tags: ["halal", "mediterranean", "lamb"],
      },
      {
        name: "Ful Medames (Fava Bean Breakfast)",
        mealType: "breakfast",
        description:
          "Slow-cooked fava beans mashed with olive oil, lemon, cumin, and garlic, topped with a boiled egg and served with flatbread.",
        prepTime: "25 min",
        tags: ["halal", "mediterranean", "legumes"],
      },
      {
        name: "Grilled Sea Bass with Chermoula",
        mealType: "dinner",
        description:
          "Whole grilled sea bass marinated in a North African chermoula of cilantro, cumin, paprika, lemon, and olive oil.",
        prepTime: "30 min",
        tags: ["halal", "mediterranean", "seafood", "gluten-free"],
      },
      {
        name: "Fattoush Salad with Sumac Dressing",
        mealType: "lunch",
        description:
          "Crispy pita chips tossed with romaine, tomatoes, radishes, cucumber, and mint in a tangy sumac-lemon dressing.",
        prepTime: "15 min",
        tags: ["halal", "mediterranean", "salad"],
      },
    ],
    faqs: [
      {
        question: "Is Mediterranean food halal?",
        answer:
          "Much of it naturally is. Eastern Mediterranean cuisines (Lebanese, Turkish, Egyptian, Moroccan) are traditionally halal. Western Mediterranean food (Italian, French, Spanish) may include pork and alcohol in cooking, which need to be substituted.",
      },
      {
        question: "What replaces wine in halal Mediterranean cooking?",
        answer:
          "Pomegranate molasses, red grape juice, balsamic vinegar, and lemon juice are excellent substitutes. For deglazing pans, chicken broth with a splash of vinegar works perfectly.",
      },
      {
        question: "Where do I find halal meat for Mediterranean recipes?",
        answer:
          "Halal butcher shops, many Middle Eastern grocery stores, and online halal meat delivery services carry the cuts you need. Lamb, chicken, and beef are most common. Look for halal certification labels.",
      },
      {
        question: "Is hummus halal?",
        answer:
          "Yes. Hummus is made from chickpeas, tahini, olive oil, lemon, and garlic — all plant-based and inherently halal. It is a staple in halal Mediterranean eating.",
      },
    ],
    relatedSlugs: ["halal", "mediterranean", "halal-middle-eastern"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "halal-indian",
    type: "combo",
    title: "Weekly Halal Indian Meal Plans",
    metaDescription:
      "Weekly halal Indian meal plans with biryani, butter chicken, and kebabs. Authentic Indian flavors with halal-certified meat in every recipe.",
    h1: "Halal Indian Meal Plans — Mughlai Feasts, Everyday Ease",
    intro:
      "India has one of the world's largest Muslim populations, and its halal culinary tradition is extraordinary — from Lucknowi biryani to Hyderabadi haleem, from Mughlai kebabs to Kerala fish curry. Our halal Indian meal plans draw from these rich traditions, using halal meat and avoiding alcohol-based ingredients entirely.",
    valueProps: [
      {
        heading: "Mughlai and Hyderabadi Specialties",
        description:
          "Rich biryanis, creamy kormas, and charcoal-grilled kebabs from India's most celebrated halal cooking traditions.",
      },
      {
        heading: "Halal Meat, Indian Spices",
        description:
          "Every recipe is built for halal-certified chicken, lamb, goat, and beef, with marinades and spice blends that maximize flavor.",
      },
      {
        heading: "No Alcohol, Full Flavor",
        description:
          "Indian cooking rarely uses alcohol anyway, making it one of the easiest cuisines to keep fully halal without any compromises.",
      },
    ],
    sampleMeals: [
      {
        name: "Chicken Biryani",
        mealType: "dinner",
        description:
          "Layers of saffron-scented basmati rice and spiced halal chicken, slow-cooked in a sealed pot with fried onions, mint, and whole spices.",
        prepTime: "60 min",
        tags: ["halal", "indian", "rice", "gluten-free"],
      },
      {
        name: "Seekh Kebab with Mint Chutney",
        mealType: "lunch",
        description:
          "Grilled halal lamb mince kebabs seasoned with ginger, green chili, and garam masala, served with fresh mint-cilantro chutney.",
        prepTime: "30 min",
        tags: ["halal", "indian", "lamb", "gluten-free"],
      },
      {
        name: "Haleem (Wheat and Meat Porridge)",
        mealType: "dinner",
        description:
          "Slow-cooked halal beef with cracked wheat, lentils, and aromatic spices, garnished with fried onions, lime, and ginger.",
        prepTime: "90 min",
        tags: ["halal", "indian", "beef"],
      },
      {
        name: "Egg Paratha",
        mealType: "breakfast",
        description:
          "Flaky whole wheat flatbread stuffed with spiced scrambled egg, pan-fried until golden, served with yogurt and pickle.",
        prepTime: "20 min",
        tags: ["halal", "indian", "eggs", "bread"],
      },
      {
        name: "Butter Chicken with Naan",
        mealType: "lunch",
        description:
          "Tandoori-marinated halal chicken pieces in a velvety tomato-cream sauce with fenugreek, served with warm naan.",
        prepTime: "40 min",
        tags: ["halal", "indian", "chicken"],
      },
    ],
    faqs: [
      {
        question: "Is Indian food halal?",
        answer:
          "Much of Indian cuisine is naturally halal or vegetarian. Indian Muslim cooking traditions (Mughlai, Hyderabadi, Lucknowi, Malabar) are inherently halal. The key is ensuring meat is halal-certified and avoiding dishes cooked with alcohol (rare in Indian cuisine).",
      },
      {
        question: "What is the difference between halal Indian and regular Indian food?",
        answer:
          "The main difference is the meat sourcing — halal Indian food uses halal-slaughtered meat. Indian cooking rarely uses alcohol or pork, so most spice blends, cooking methods, and vegetable dishes are identical.",
      },
      {
        question: "Where can I buy halal Indian spices?",
        answer:
          "All common Indian spices (cumin, coriander, turmeric, garam masala, etc.) are inherently halal — they are plant-based. You can buy them at any Indian grocery store, spice shop, or online retailer.",
      },
      {
        question: "Is ghee halal?",
        answer:
          "Yes. Ghee is clarified butter made from cow's milk and is halal. It is a staple fat in Indian cooking and is used in both halal and vegetarian Indian traditions.",
      },
    ],
    relatedSlugs: ["halal", "indian", "halal-mediterranean"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "halal-middle-eastern",
    type: "combo",
    title: "Halal Middle Eastern Meal Plans",
    metaDescription:
      "Weekly halal Middle Eastern meal plans with shawarma, mansaf, and mezze. Authentic Arab cuisine that is halal by tradition and designed for busy weeks.",
    h1: "Halal Middle Eastern Meal Plans — Tradition Meets Your Weekly Menu",
    intro:
      "Middle Eastern cuisine is halal at its core — these recipes have been passed down through generations of Muslim families across the Levant, Arabian Peninsula, and North Africa. Our meal plans bring that heritage to your kitchen with authentic recipes for shawarma, mansaf, maqluba, and the mezze spreads that make Middle Eastern dining legendary.",
    valueProps: [
      {
        heading: "Halal by Heritage",
        description:
          "Unlike cuisines that need halal adaptation, Middle Eastern food is traditionally prepared halal — these are recipes passed down through Muslim households for centuries.",
      },
      {
        heading: "Mezze Culture Built In",
        description:
          "Hummus, baba ganoush, tabbouleh, and labneh give you built-in variety and make entertaining effortless.",
      },
      {
        heading: "Weeknight-Friendly Classics",
        description:
          "We streamline traditional recipes that usually take hours into 30-45 minute versions without sacrificing authenticity.",
      },
    ],
    sampleMeals: [
      {
        name: "Chicken Mansaf",
        mealType: "dinner",
        description:
          "Halal chicken braised in a tangy jameed (dried yogurt) sauce, served over spiced rice with toasted almonds and pine nuts.",
        prepTime: "50 min",
        tags: ["halal", "middle-eastern", "chicken", "gluten-free"],
      },
      {
        name: "Foul Mudammas with Olive Oil",
        mealType: "breakfast",
        description:
          "Mashed fava beans with garlic, lemon juice, cumin, and a generous pour of olive oil, served with warm pita.",
        prepTime: "15 min",
        tags: ["halal", "middle-eastern", "legumes"],
      },
      {
        name: "Lamb Shawarma Wrap",
        mealType: "lunch",
        description:
          "Thinly sliced halal lamb shawarma in warm pita with tahini, pickled vegetables, tomato, and fresh parsley.",
        prepTime: "30 min",
        tags: ["halal", "middle-eastern", "lamb"],
      },
      {
        name: "Maqluba (Upside-Down Rice and Chicken)",
        mealType: "dinner",
        description:
          "Layers of spiced halal chicken, fried eggplant, and basmati rice cooked in one pot and dramatically flipped onto a platter.",
        prepTime: "55 min",
        tags: ["halal", "middle-eastern", "chicken", "rice"],
      },
      {
        name: "Fattoush with Grilled Halloumi",
        mealType: "lunch",
        description:
          "Crispy pita chip salad with mixed greens, radishes, sumac dressing, and slabs of grilled halloumi cheese.",
        prepTime: "15 min",
        tags: ["halal", "middle-eastern", "salad", "vegetarian"],
      },
    ],
    faqs: [
      {
        question: "Is all Middle Eastern food halal?",
        answer:
          "The vast majority of traditional Middle Eastern recipes are halal, as the cuisine developed within Muslim cultures. Pork is not used, and alcohol in cooking is extremely rare. The main consideration is ensuring meat is sourced from a halal-certified supplier.",
      },
      {
        question: "What meats are used in halal Middle Eastern cooking?",
        answer:
          "Lamb, chicken, beef, and goat are the primary meats. Lamb is the most traditional and prized. Seafood is also widely used, especially in coastal regions. All meat should be halal-certified.",
      },
      {
        question: "What is a typical Middle Eastern meal structure?",
        answer:
          "A traditional meal starts with mezze (hummus, baba ganoush, salads, pickles), followed by a main dish of grilled or braised meat with rice, and often ends with fresh fruit, baklava, or knafeh. Tea is served throughout.",
      },
      {
        question: "Can I meal prep Middle Eastern food?",
        answer:
          "Absolutely. Hummus, baba ganoush, and dips keep for 5+ days. Rice dishes and stews reheat beautifully. Marinated meats can be prepped days ahead. Mezze-style meals are among the most meal-prep-friendly formats.",
      },
    ],
    relatedSlugs: ["halal", "middle-eastern", "halal-mediterranean"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "pescatarian-japanese",
    type: "combo",
    title: "Pescatarian Japanese Meal Plans",
    metaDescription:
      "Weekly pescatarian Japanese meal plans with sushi, miso soup, and grilled fish. Experience authentic Japanese cuisine centered on seafood and vegetables.",
    h1: "Pescatarian Japanese Meal Plans — An Island Nation's Natural Diet",
    intro:
      "Japan is an island nation, and its cuisine reflects that — seafood and vegetables have always been at the heart of Japanese cooking. A pescatarian Japanese diet is barely a restriction at all; it is closer to how most Japanese people actually eat. Our weekly plans cover sushi, ramen, donburi, and izakaya favorites, all centered on fish and plant-based ingredients.",
    valueProps: [
      {
        heading: "Seafood Is the Default",
        description:
          "Japanese cuisine uses more varieties of seafood than almost any other — salmon, tuna, mackerel, shrimp, squid, seaweed, and dozens more.",
      },
      {
        heading: "Umami Without Meat",
        description:
          "Dashi (kelp and bonito broth), miso, soy sauce, and fermented foods provide deep umami flavors without any land-animal products.",
      },
      {
        heading: "Balanced and Light",
        description:
          "Japanese meals follow the ichiju-sansai structure — one soup, three sides — which naturally creates balanced, portion-controlled eating.",
      },
    ],
    sampleMeals: [
      {
        name: "Salmon Donburi (Rice Bowl)",
        mealType: "lunch",
        description:
          "Sushi rice topped with fresh salmon sashimi, avocado, edamame, pickled ginger, and a soy-sesame dressing.",
        prepTime: "20 min",
        tags: ["pescatarian", "japanese", "seafood", "rice"],
      },
      {
        name: "Miso Soup with Tofu and Wakame",
        mealType: "breakfast",
        description:
          "Classic dashi-based miso soup with silken tofu, wakame seaweed, and thinly sliced scallions.",
        prepTime: "10 min",
        tags: ["pescatarian", "japanese", "soup", "gluten-free"],
      },
      {
        name: "Grilled Mackerel (Saba Shioyaki)",
        mealType: "dinner",
        description:
          "Salt-grilled mackerel fillet served with steamed rice, pickled daikon, and a side of blanched spinach with sesame.",
        prepTime: "20 min",
        tags: ["pescatarian", "japanese", "fish", "gluten-free"],
      },
      {
        name: "Vegetable Tempura with Dipping Sauce",
        mealType: "dinner",
        description:
          "Lightly battered and fried sweet potato, shiso leaf, lotus root, and shrimp served with tentsuyu dipping sauce.",
        prepTime: "30 min",
        tags: ["pescatarian", "japanese", "fried"],
      },
      {
        name: "Hand-Rolled Sushi (Temaki)",
        mealType: "lunch",
        description:
          "DIY nori cones filled with sushi rice, fresh tuna, cucumber, avocado, and spicy mayo — fun and interactive.",
        prepTime: "25 min",
        tags: ["pescatarian", "japanese", "sushi"],
      },
    ],
    faqs: [
      {
        question: "Is Japanese food good for pescatarians?",
        answer:
          "Japanese cuisine is arguably the best cuisine in the world for pescatarians. Seafood is the primary protein, and the traditional diet is built on fish, rice, vegetables, tofu, and fermented foods. Meat-heavy dishes are a relatively modern addition to Japanese cooking.",
      },
      {
        question: "What Japanese dishes are naturally pescatarian?",
        answer:
          "Sushi, sashimi, miso soup, tempura (vegetable and shrimp), donburi with seafood, ramen with seafood broth, edamame, agedashi tofu, and most izakaya small plates. The majority of traditional Japanese food is already pescatarian.",
      },
      {
        question: "Is dashi broth pescatarian?",
        answer:
          "Traditional dashi is made from kombu (kelp) and katsuobushi (dried bonito fish flakes), making it pescatarian but not vegetarian. Kombu-only dashi is available for vegetarians.",
      },
      {
        question: "How healthy is a pescatarian Japanese diet?",
        answer:
          "Extremely healthy. Japan has one of the highest life expectancies in the world, attributed partly to a diet rich in fish, vegetables, fermented foods, and minimal processed ingredients. The combination of omega-3 fatty acids from fish and antioxidants from green tea and vegetables is hard to beat.",
      },
    ],
    relatedSlugs: ["pescatarian", "japanese", "pescatarian-mediterranean"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "pescatarian-mediterranean",
    type: "combo",
    title: "Pescatarian Mediterranean Plans",
    metaDescription:
      "Weekly pescatarian Mediterranean meal plans with grilled fish, seafood pasta, and fresh salads. The heart-healthy Mediterranean diet at its finest.",
    h1: "Pescatarian Mediterranean Meal Plans — The Way the Coast Eats",
    intro:
      "The traditional Mediterranean diet was always a pescatarian diet — coastal communities in Greece, Italy, Spain, and North Africa ate fish daily and meat rarely. Our pescatarian Mediterranean plans return to those roots with grilled fish, seafood stews, olive oil, fresh vegetables, and the simple preparations that make this eating style the gold standard for health.",
    valueProps: [
      {
        heading: "The Original Mediterranean Diet",
        description:
          "Before the modern interpretation added chicken and red meat, the Mediterranean diet was fish, vegetables, olive oil, and wine. We return to that original vision.",
      },
      {
        heading: "Omega-3 Rich Every Day",
        description:
          "Salmon, sardines, mackerel, and anchovies provide the omega-3 fatty acids that make the Mediterranean diet famous for heart and brain health.",
      },
      {
        heading: "Coastal Recipes from Five Countries",
        description:
          "We draw from Greek, Italian, Spanish, Turkish, and Moroccan coastal cooking traditions for maximum variety.",
      },
    ],
    sampleMeals: [
      {
        name: "Grilled Branzino with Lemon and Herbs",
        mealType: "dinner",
        description:
          "Whole branzino stuffed with lemon slices, rosemary, and thyme, grilled until the skin is crispy, served with roasted potatoes.",
        prepTime: "30 min",
        tags: ["pescatarian", "mediterranean", "fish", "gluten-free"],
      },
      {
        name: "Shrimp and White Bean Stew",
        mealType: "dinner",
        description:
          "Shrimp sauteed with garlic, cherry tomatoes, and cannellini beans in a white wine and olive oil broth with crusty bread.",
        prepTime: "25 min",
        tags: ["pescatarian", "mediterranean", "seafood"],
      },
      {
        name: "Greek Yogurt with Honey, Walnuts, and Figs",
        mealType: "breakfast",
        description:
          "Thick Greek yogurt drizzled with raw honey, topped with toasted walnuts and sliced fresh figs.",
        prepTime: "5 min",
        tags: ["pescatarian", "mediterranean", "breakfast", "gluten-free"],
      },
      {
        name: "Sardine and Arugula Toast",
        mealType: "lunch",
        description:
          "Whole sardines on toasted sourdough with peppery arugula, shaved parmesan, lemon zest, and a drizzle of olive oil.",
        prepTime: "10 min",
        tags: ["pescatarian", "mediterranean", "fish"],
      },
      {
        name: "Seafood Paella",
        mealType: "lunch",
        description:
          "Saffron-infused rice with shrimp, mussels, calamari, peas, and roasted red peppers, cooked in a wide pan for a crispy socarrat.",
        prepTime: "45 min",
        tags: ["pescatarian", "mediterranean", "spanish", "gluten-free"],
      },
    ],
    faqs: [
      {
        question: "Is the Mediterranean diet pescatarian?",
        answer:
          "The traditional Mediterranean diet is very close to pescatarian. Coastal populations in Greece, Italy, and Spain historically ate fish several times per week and red meat only a few times per month. The modern version includes more meat, but the original is fish-forward.",
      },
      {
        question: "What fish is best for a Mediterranean diet?",
        answer:
          "Fatty fish like salmon, sardines, mackerel, and anchovies are ideal for their omega-3 content. White fish like branzino, sea bass, and cod are also staples. The key is variety — eating different types of seafood throughout the week.",
      },
      {
        question: "How much fish should I eat per week on this plan?",
        answer:
          "Our plans include fish or seafood 4-5 times per week, with the remaining meals being vegetarian (eggs, cheese, legumes). This aligns with recommendations from cardiologists and the original Mediterranean diet research.",
      },
      {
        question: "Is canned fish okay for Mediterranean cooking?",
        answer:
          "Absolutely. Canned sardines, tuna, and anchovies are Mediterranean pantry staples. They are affordable, convenient, and nutritionally equivalent to fresh. Look for fish packed in olive oil for the most authentic flavor.",
      },
    ],
    relatedSlugs: ["pescatarian", "mediterranean", "pescatarian-japanese"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "dairy-free-thai",
    type: "combo",
    title: "Dairy-Free Thai Meal Plans",
    metaDescription:
      "Weekly dairy-free Thai meal plans with curries, stir-fries, and noodle dishes. Thai cuisine is naturally dairy-free — we keep it that way.",
    h1: "Dairy-Free Thai Meal Plans — Naturally Dairy-Free, Effortlessly Delicious",
    intro:
      "Thai cuisine is one of the most naturally dairy-free cuisines on the planet. Coconut milk replaces cream, fish sauce replaces butter, and the bold flavors of lemongrass, galangal, and chili mean you never miss cheese for a second. Our dairy-free Thai plans require almost zero substitutions — this is how Thai food was always meant to be eaten.",
    valueProps: [
      {
        heading: "Zero Substitutions Needed",
        description:
          "Unlike adapting Western cuisines, Thai food is already dairy-free by tradition. Coconut milk, coconut cream, and oils are the natural fats.",
      },
      {
        heading: "Coconut Milk Does Everything",
        description:
          "Curries, soups, desserts, and drinks all use coconut milk as their creamy base — it is more versatile than dairy ever was.",
      },
      {
        heading: "Bold Flavors, No Blandness",
        description:
          "Thai cooking relies on aromatics (lemongrass, galangal, kaffir lime), not dairy, for flavor — so removing dairy changes nothing.",
      },
    ],
    sampleMeals: [
      {
        name: "Massaman Curry with Potatoes and Peanuts",
        mealType: "dinner",
        description:
          "Rich coconut milk curry with tender chicken, potatoes, onions, and roasted peanuts in a warm spice blend of cinnamon and cardamom.",
        prepTime: "40 min",
        tags: ["dairy-free", "thai", "curry", "gluten-free"],
      },
      {
        name: "Pad Thai with Shrimp",
        mealType: "lunch",
        description:
          "Classic rice noodles stir-fried with shrimp, egg, bean sprouts, and crushed peanuts in a tamarind-palm sugar sauce.",
        prepTime: "25 min",
        tags: ["dairy-free", "thai", "noodles", "gluten-free"],
      },
      {
        name: "Thai Basil Chicken (Pad Krapow Gai)",
        mealType: "dinner",
        description:
          "Ground chicken stir-fried with holy basil, garlic, chilies, and fish sauce, served over jasmine rice with a fried egg.",
        prepTime: "15 min",
        tags: ["dairy-free", "thai", "chicken", "gluten-free"],
      },
      {
        name: "Congee with Ginger and Scallions",
        mealType: "breakfast",
        description:
          "Silky rice porridge slow-cooked with ginger, topped with a soft-boiled egg, crispy shallots, and a splash of soy sauce.",
        prepTime: "30 min",
        tags: ["dairy-free", "thai", "rice", "gluten-free"],
      },
      {
        name: "Green Papaya Salad with Dried Shrimp",
        mealType: "lunch",
        description:
          "Crunchy shredded green papaya with dried shrimp, tomatoes, long beans, peanuts, lime, and bird's eye chili.",
        prepTime: "15 min",
        tags: ["dairy-free", "thai", "salad", "gluten-free"],
      },
    ],
    faqs: [
      {
        question: "Is Thai food dairy-free?",
        answer:
          "Yes, traditional Thai food is almost entirely dairy-free. Thai cuisine uses coconut milk instead of cream, and butter and cheese are not part of the cooking tradition. The only exception is some modern Thai-fusion restaurants that add butter or cream to sauces.",
      },
      {
        question: "Does Thai curry contain dairy?",
        answer:
          "Authentic Thai curries use coconut milk, not dairy cream. Green, red, yellow, massaman, and panang curries are all made with coconut milk and curry paste. Always check at restaurants, as some Western-adapted versions may add cream.",
      },
      {
        question: "Is coconut milk a good dairy substitute?",
        answer:
          "For Thai cooking, coconut milk is not a substitute — it is the original ingredient. It provides richness, body, and a subtle sweetness that complements Thai spices perfectly. Full-fat coconut milk works best for curries and soups.",
      },
      {
        question: "What about Thai iced tea — is it dairy-free?",
        answer:
          "Traditional Thai iced tea is made with condensed milk or evaporated milk, which contains dairy. For a dairy-free version, use coconut cream or oat milk. Many Thai restaurants now offer dairy-free options if you ask.",
      },
    ],
    relatedSlugs: ["dairy-free", "thai", "vegan-thai"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "dairy-free-mexican",
    type: "combo",
    title: "Dairy-Free Mexican Meal Plans",
    metaDescription:
      "Weekly dairy-free Mexican meal plans with tacos, salsas, and grilled meats. Enjoy bold Mexican flavors without cheese, sour cream, or butter.",
    h1: "Dairy-Free Mexican Meal Plans — All the Flavor, Hold the Queso",
    intro:
      "Mexican food without cheese sounds like a sacrifice — until you realize that the soul of Mexican cooking lives in chiles, lime, cilantro, cumin, and slow-cooked meats, not in the queso on top. Traditional pre-colonial Mexican cuisine was entirely dairy-free. Our plans return to those roots while keeping all the bold, satisfying flavors you crave.",
    valueProps: [
      {
        heading: "Salsa Is the Real Star",
        description:
          "Fresh salsas, guacamole, and chile sauces provide all the moisture, flavor, and richness that cheese and sour cream usually offer.",
      },
      {
        heading: "Pre-Colonial Inspiration",
        description:
          "Before Spanish colonization, Mexican food had no dairy at all. We draw from that indigenous tradition of corn, beans, chiles, and squash.",
      },
      {
        heading: "Smart Swaps When You Want Them",
        description:
          "Cashew crema, nutritional yeast, and avocado-based sauces are available when a recipe truly benefits from a creamy element.",
      },
    ],
    sampleMeals: [
      {
        name: "Carnitas Tacos with Salsa Verde",
        mealType: "dinner",
        description:
          "Slow-braised pork shoulder pulled into tender shreds, served on corn tortillas with tomatillo salsa verde, onion, and cilantro.",
        prepTime: "35 min",
        tags: ["dairy-free", "mexican", "pork", "gluten-free"],
      },
      {
        name: "Black Bean and Avocado Tostadas",
        mealType: "lunch",
        description:
          "Crispy corn tostadas spread with mashed black beans, topped with sliced avocado, pickled red onion, and a drizzle of lime crema (cashew-based).",
        prepTime: "20 min",
        tags: ["dairy-free", "mexican", "vegetarian", "gluten-free"],
      },
      {
        name: "Huevos a la Mexicana",
        mealType: "breakfast",
        description:
          "Scrambled eggs with diced tomato, onion, and serrano pepper, served with warm corn tortillas and refried beans (made with oil, not lard).",
        prepTime: "15 min",
        tags: ["dairy-free", "mexican", "eggs", "gluten-free"],
      },
      {
        name: "Pozole Rojo",
        mealType: "dinner",
        description:
          "Traditional hominy soup in a rich ancho and guajillo chile broth with shredded chicken, topped with shredded cabbage, radish, and oregano.",
        prepTime: "45 min",
        tags: ["dairy-free", "mexican", "soup", "gluten-free"],
      },
      {
        name: "Grilled Fish Tacos with Mango Salsa",
        mealType: "lunch",
        description:
          "Grilled white fish on corn tortillas with fresh mango-habanero salsa, shredded cabbage, and a squeeze of lime.",
        prepTime: "25 min",
        tags: ["dairy-free", "mexican", "seafood", "gluten-free"],
      },
    ],
    faqs: [
      {
        question: "Can you eat Mexican food without dairy?",
        answer:
          "Absolutely. Traditional Mexican cuisine predates the introduction of dairy by Spanish colonizers. Corn tortillas, beans, rice, salsas, grilled meats, and guacamole are all naturally dairy-free. Cheese and sour cream are toppings, not foundations.",
      },
      {
        question: "What replaces sour cream in dairy-free Mexican food?",
        answer:
          "Cashew crema (soaked cashews blended with lime and salt) is the best substitute. Avocado also provides the same cooling, creamy contrast. Some people use coconut yogurt, though it adds a slight sweetness.",
      },
      {
        question: "Are refried beans dairy-free?",
        answer:
          "Homemade refried beans made with oil are dairy-free. However, many restaurant and canned versions use lard (which is dairy-free but not vegetarian) or butter. Check labels or make your own with vegetable oil or avocado oil.",
      },
      {
        question: "Is Mexican cheese easy to replace?",
        answer:
          "For dishes where cheese is a topping (tacos, tostadas), simply skip it — the salsa, guacamole, and other toppings carry the flavor. For dishes where cheese is central (quesadillas, queso fundido), cashew-based cheese or nutritional yeast can work, but we prefer to feature naturally dairy-free Mexican dishes instead.",
      },
    ],
    relatedSlugs: ["dairy-free", "mexican", "gluten-free-mexican"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
  {
    slug: "low-carb-southern",
    type: "combo",
    title: "Low-Carb Southern Meal Plans",
    metaDescription:
      "Weekly low-carb Southern meal plans with BBQ, collard greens, and comfort food. Real Southern flavor without the biscuits, grits, and sweet tea.",
    h1: "Low-Carb Southern Meal Plans — Comfort Food Without the Carb Crash",
    intro:
      "Southern food is legendary for its bold flavors, generous portions, and warming comfort — but also for its heavy reliance on cornbread, biscuits, grits, and sweet tea. Our low-carb Southern plans keep the soul of Southern cooking intact: slow-smoked meats, braised greens, spice rubs, and cast-iron techniques, while swapping out the starches that weigh you down.",
    valueProps: [
      {
        heading: "Smoke and Spice Do the Work",
        description:
          "Southern BBQ rubs, Cajun seasoning, and slow-cooking methods create incredible flavor that has nothing to do with carbs.",
      },
      {
        heading: "Greens Are Already Southern Royalty",
        description:
          "Collard greens, turnip greens, green beans, and okra are low-carb vegetables that are already central to Southern cooking.",
      },
      {
        heading: "Cast-Iron Confidence",
        description:
          "Many Southern classics — blackened fish, seared pork chops, skillet chicken — are naturally low-carb when you skip the breading and biscuit side.",
      },
    ],
    sampleMeals: [
      {
        name: "Blackened Catfish with Collard Greens",
        mealType: "dinner",
        description:
          "Catfish fillets coated in Cajun spice and seared in a cast-iron skillet, served with slow-braised collard greens and pot liquor.",
        prepTime: "25 min",
        tags: ["low-carb", "southern", "seafood", "gluten-free"],
      },
      {
        name: "Pulled Pork Lettuce Wraps",
        mealType: "lunch",
        description:
          "Slow-smoked pulled pork in a sugar-free BBQ sauce, wrapped in butter lettuce with pickled jalapenos and coleslaw (no sugar dressing).",
        prepTime: "20 min",
        tags: ["low-carb", "southern", "pork", "gluten-free"],
      },
      {
        name: "Shrimp and Cauliflower Grits",
        mealType: "dinner",
        description:
          "Classic shrimp and grits reimagined with cauliflower mash standing in for grits, topped with sauteed shrimp, andouille, and a smoky gravy.",
        prepTime: "30 min",
        tags: ["low-carb", "southern", "seafood", "gluten-free"],
      },
      {
        name: "Country Breakfast Scramble",
        mealType: "breakfast",
        description:
          "Scrambled eggs with crumbled breakfast sausage, bell peppers, onions, and cheddar cheese — all the diner flavor, no toast needed.",
        prepTime: "15 min",
        tags: ["low-carb", "southern", "eggs", "gluten-free"],
      },
      {
        name: "Smoked Chicken Thighs with Green Beans",
        mealType: "lunch",
        description:
          "Bone-in chicken thighs rubbed with paprika and garlic, slow-smoked, served with Southern-style green beans simmered with bacon.",
        prepTime: "35 min",
        tags: ["low-carb", "southern", "chicken", "gluten-free"],
      },
    ],
    faqs: [
      {
        question: "Can Southern food be low-carb?",
        answer:
          "Yes. The soul of Southern cooking — slow-smoked meats, braised greens, cast-iron seared fish, and bold spice rubs — is already low-carb. The carbs come from sides like cornbread, biscuits, grits, mac and cheese, and sweet tea, which are easy to swap or skip.",
      },
      {
        question: "What replaces grits in a low-carb Southern diet?",
        answer:
          "Cauliflower mash is the most popular swap — when seasoned with butter, salt, and pepper, it has a similar creamy texture. Some people also use riced cauliflower or mashed turnips for a slightly different take.",
      },
      {
        question: "Is BBQ sauce low-carb?",
        answer:
          "Most store-bought BBQ sauce is loaded with sugar — some brands have 15g of sugar per serving. Sugar-free BBQ sauces are available, or you can make your own with tomato paste, vinegar, smoked paprika, and a sugar substitute like erythritol.",
      },
      {
        question: "What about fried chicken — can it be low-carb?",
        answer:
          "Traditional fried chicken uses flour breading, which is high-carb. Low-carb versions use almond flour, pork rind crumbs, or a mix of both for a crunchy coating with minimal carbs. Air frying or pan-frying in avocado oil keeps it crispy.",
      },
    ],
    relatedSlugs: ["low-carb", "southern", "keto-mexican"],
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
  },
];
