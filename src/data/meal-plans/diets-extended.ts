import type { MealPlanPageData } from "./types";

export const dietsExtendedPages: MealPlanPageData[] = [
  {
    slug: "whole30-meal-plan",
    type: "diet",
    title: "Whole30 Meal Plan",
    metaDescription:
      "Get a personalized Whole30 meal plan with compliant recipes and a grocery list. No sugar, grains, dairy, or legumes. 30-day reset made simple. Try free.",
    h1: "Your Whole30 Meal Plan, Without the Meal Prep Meltdown",
    intro:
      "The Whole30 rules are simple but planning 30 days of compliant meals is anything but. No added sugar, no grains, no dairy, no legumes, no alcohol — and every ingredient needs checking. We handle the planning so you can focus on how incredible you feel by day 15. Each week brings a fresh set of recipes built around whole proteins, vegetables, healthy fats, and fruit.",
    valueProps: [
      {
        heading: "100% Whole30 compliant",
        description:
          "Every recipe is checked against Whole30 rules — no sneaky soy sauce, no hidden sugar, no technically-off-plan ingredients. Just clean, real food.",
      },
      {
        heading: "Variety that prevents burnout",
        description:
          "The biggest reason people quit Whole30 is boredom. Our plans rotate cuisines and cooking methods so you're not eating plain chicken and sweet potatoes every night.",
      },
      {
        heading: "Grocery list included",
        description:
          "A consolidated weekly grocery list means one trip to the store with zero guesswork about what's compliant and what's not.",
      },
    ],
    sampleMeals: [
      {
        name: "Sweet Potato Hash with Poached Eggs & Avocado",
        mealType: "breakfast",
        description:
          "Crispy cubed sweet potato with bell peppers and onions, topped with perfectly poached eggs and sliced avocado. Seasoned with smoked paprika.",
        prepTime: "20 min",
        tags: ["whole30", "egg-free option", "high-protein"],
      },
      {
        name: "Thai Coconut Chicken Soup",
        mealType: "lunch",
        description:
          "Creamy coconut milk broth with shredded chicken, mushrooms, zucchini noodles, and fresh lime. Warming and deeply satisfying without any non-compliant ingredients.",
        prepTime: "25 min",
        tags: ["whole30", "dairy-free", "soup"],
      },
      {
        name: "Grilled Salmon with Mango Salsa & Roasted Asparagus",
        mealType: "dinner",
        description:
          "Wild-caught salmon fillet with a bright mango-jalapeno salsa and tender roasted asparagus drizzled with ghee.",
        prepTime: "25 min",
        tags: ["whole30", "omega-3", "gluten-free"],
      },
      {
        name: "Prosciutto-Wrapped Dates with Almond Butter",
        mealType: "snack",
        description:
          "Medjool dates stuffed with almond butter, wrapped in prosciutto, and baked until crispy. Sweet, salty, and completely compliant.",
        prepTime: "10 min",
        tags: ["whole30", "quick", "no-cook filling"],
      },
      {
        name: "Carnitas Lettuce Wraps with Pineapple Slaw",
        mealType: "dinner",
        description:
          "Slow-cooked pork shoulder with cumin and oregano, served in butter lettuce cups with a tangy pineapple and cabbage slaw.",
        prepTime: "35 min",
        tags: ["whole30", "grain-free", "family-friendly"],
      },
    ],
    faqs: [
      {
        question: "Are your Whole30 meal plans strictly compliant?",
        answer:
          "Yes. Every recipe is built from Whole30-approved ingredients only — no added sugar, grains, dairy, legumes, soy, or alcohol. We also avoid common gotchas like carrageenan and sulfites.",
      },
      {
        question: "Can I use this meal plan for all 30 days?",
        answer:
          "Absolutely. Our plans regenerate weekly, so you get four consecutive weeks of fresh Whole30-compliant meals. Each week is different to keep things interesting through your full reset.",
      },
      {
        question: "What happens after my Whole30 is done?",
        answer:
          "You can switch to any of our other meal plan styles for the reintroduction phase. Many members transition to our anti-inflammatory or paleo plans after completing their Whole30.",
      },
      {
        question: "Should I talk to my doctor before starting Whole30?",
        answer:
          "We always recommend consulting your healthcare provider before starting any elimination diet, especially if you have existing health conditions or take medications. Our plans are for informational purposes and don't constitute medical advice.",
      },
    ],
    relatedSlugs: [
      "anti-inflammatory-meal-plan",
      "dairy-free",
      "gluten-free",
      "paleo-meal-plan",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "paleo-meal-plan",
    type: "diet",
    title: "Paleo Meal Plan",
    metaDescription:
      "Get a personalized paleo meal plan with whole-food recipes and a grocery list. No grains, no processed foods, just real ingredients. Try free today.",
    h1: "A Paleo Meal Plan That Feels Modern, Not Caveman",
    intro:
      "Paleo isn't about gnawing on a drumstick in a loincloth — it's about eating whole, unprocessed foods that your body thrives on. Quality meats, wild-caught fish, vegetables, fruits, nuts, and seeds. We plan your paleo week with meals that are flavorful, filling, and free from grains, dairy, refined sugar, and processed oils.",
    valueProps: [
      {
        heading: "Whole foods, zero junk",
        description:
          "Every recipe uses real ingredients you can pronounce. No seed oils, no refined sugar, no artificial anything. Just nutrient-dense meals built around quality protein and produce.",
      },
      {
        heading: "Not just meat and salad",
        description:
          "Our paleo plans draw from global cuisines — think Thai curries with coconut milk, Mexican cauliflower rice bowls, and Mediterranean herb-crusted lamb. Variety is non-negotiable.",
      },
      {
        heading: "Flexible for your version of paleo",
        description:
          "Whether you include ghee, white rice, or the occasional legume, our plans stick to strict paleo foundations while respecting that everyone's template is slightly different.",
      },
    ],
    sampleMeals: [
      {
        name: "Banana Pancakes with Almond Butter & Blueberries",
        mealType: "breakfast",
        description:
          "Two-ingredient pancakes made from eggs and ripe banana, served with a drizzle of almond butter and fresh blueberries. Simple, grain-free, and genuinely delicious.",
        prepTime: "15 min",
        tags: ["paleo", "grain-free", "kid-friendly"],
      },
      {
        name: "Mediterranean Lamb Burger Lettuce Wraps",
        mealType: "lunch",
        description:
          "Seasoned ground lamb patties with sun-dried tomatoes and fresh herbs, wrapped in crisp romaine with a tahini-lemon drizzle.",
        prepTime: "20 min",
        tags: ["paleo", "high-protein", "no-bun"],
      },
      {
        name: "Garlic Butter Shrimp with Zucchini Noodles",
        mealType: "dinner",
        description:
          "Jumbo shrimp sauteed in ghee with garlic, cherry tomatoes, and fresh basil, tossed with spiralized zucchini noodles.",
        prepTime: "20 min",
        tags: ["paleo", "low-carb", "quick"],
      },
      {
        name: "Apple Slices with Cinnamon Cashew Butter",
        mealType: "snack",
        description:
          "Crisp apple slices dipped in homemade cashew butter with a pinch of cinnamon and sea salt. Sweet, crunchy, and perfectly portable.",
        prepTime: "5 min",
        tags: ["paleo", "no-cook", "portable"],
      },
      {
        name: "Herb-Crusted Pork Tenderloin with Roasted Root Vegetables",
        mealType: "dinner",
        description:
          "Dijon and rosemary crusted pork tenderloin with a medley of roasted carrots, parsnips, and beets. Hearty comfort food, fully paleo.",
        prepTime: "35 min",
        tags: ["paleo", "whole30-compatible", "meal-prep"],
      },
    ],
    faqs: [
      {
        question: "What's the difference between paleo and Whole30?",
        answer:
          "Whole30 is a strict 30-day elimination protocol — no treats, no recreations of off-plan foods. Paleo is a long-term dietary framework that's more flexible. Many paleo eaters allow honey, dark chocolate, and paleo-friendly baked goods that Whole30 doesn't permit.",
      },
      {
        question: "Is paleo good for weight loss?",
        answer:
          "Many people lose weight on paleo because it naturally eliminates processed foods and added sugars. However, individual results vary. Our plans focus on nutrient density and satiety rather than strict calorie counting.",
      },
      {
        question: "Can I do paleo if I'm on a budget?",
        answer:
          "Absolutely. While grass-fed and organic are ideal, conventional meats, frozen vegetables, and seasonal produce all work perfectly within a paleo framework. Our grocery lists help you shop efficiently.",
      },
      {
        question: "Should I consult a doctor before going paleo?",
        answer:
          "It's always wise to check with your healthcare provider before making significant dietary changes, particularly if you have chronic health conditions, nutrient deficiencies, or take medications affected by diet.",
      },
    ],
    relatedSlugs: [
      "whole30-meal-plan",
      "keto",
      "gluten-free",
      "meal-plan-for-weight-loss",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "fodmap-meal-plan",
    type: "diet",
    title: "Low FODMAP Meal Plan",
    metaDescription:
      "Get a personalized low FODMAP meal plan with IBS-friendly recipes and a grocery list. Avoid trigger foods without sacrificing flavor. Try free today.",
    h1: "A Low FODMAP Meal Plan That Doesn't Taste Like a Restriction",
    intro:
      "If you're managing IBS or digestive sensitivity, you already know the frustration of not knowing what's safe to eat. FODMAPs — fermentable carbohydrates found in everyday foods like garlic, onions, and wheat — can wreak havoc on a sensitive gut. Our low FODMAP meal plans eliminate common triggers while keeping meals flavorful, satisfying, and nutritionally complete.",
    valueProps: [
      {
        heading: "Elimination phase made easy",
        description:
          "The hardest part of low FODMAP is the initial elimination phase. Our plans handle the research and ingredient checking so you can focus on feeling better, not decoding food labels.",
      },
      {
        heading: "Flavor without the triggers",
        description:
          "No garlic or onion doesn't mean no flavor. We use garlic-infused oil, chives, ginger, lemongrass, and other low FODMAP aromatics to keep meals delicious.",
      },
      {
        heading: "Dietitian-informed portions",
        description:
          "FODMAP is about thresholds, not just ingredients. We keep serving sizes within Monash University guidelines so even moderate-FODMAP foods stay in the safe zone.",
      },
    ],
    sampleMeals: [
      {
        name: "Overnight Oats with Maple, Walnuts & Strawberries",
        mealType: "breakfast",
        description:
          "Rolled oats soaked in lactose-free milk with pure maple syrup, chopped walnuts, and sliced strawberries. Creamy, sweet, and gentle on the gut.",
        prepTime: "5 min + overnight",
        tags: ["low-fodmap", "meal-prep", "no-cook"],
      },
      {
        name: "Chicken & Rice Paper Rolls with Peanut Dipping Sauce",
        mealType: "lunch",
        description:
          "Fresh rice paper rolls filled with poached chicken, carrots, cucumber, and mint. Served with a low FODMAP peanut sauce using garlic-infused oil.",
        prepTime: "25 min",
        tags: ["low-fodmap", "gluten-free", "light"],
      },
      {
        name: "Pan-Seared Cod with Lemon Butter & Sauteed Bok Choy",
        mealType: "dinner",
        description:
          "Flaky cod fillets in a lemon-butter sauce with tender baby bok choy sauteed in garlic-infused olive oil. Simple, elegant, and stomach-friendly.",
        prepTime: "20 min",
        tags: ["low-fodmap", "omega-3", "quick"],
      },
      {
        name: "Rice Cakes with Cheddar & Cucumber",
        mealType: "snack",
        description:
          "Plain rice cakes topped with aged cheddar (naturally low lactose) and thinly sliced cucumber with a crack of black pepper.",
        prepTime: "5 min",
        tags: ["low-fodmap", "no-cook", "portable"],
      },
      {
        name: "Ginger-Soy Glazed Salmon with Jasmine Rice & Green Beans",
        mealType: "dinner",
        description:
          "Salmon fillet glazed with fresh ginger, tamari, and a touch of brown sugar, served over jasmine rice with steamed green beans.",
        prepTime: "25 min",
        tags: ["low-fodmap", "gluten-free", "high-protein"],
      },
    ],
    faqs: [
      {
        question: "Is this meal plan suitable for the FODMAP elimination phase?",
        answer:
          "Yes. Our low FODMAP plans are designed for the elimination phase, avoiding high FODMAP ingredients entirely. For the reintroduction and personalization phases, we recommend working with a registered dietitian.",
      },
      {
        question: "Can I follow low FODMAP long-term?",
        answer:
          "The elimination phase is meant to be temporary (2-6 weeks). Long-term restriction can reduce gut bacteria diversity. Our plans are ideal for the initial phase, and we encourage reintroduction with professional guidance afterward.",
      },
      {
        question: "Do you follow Monash University FODMAP guidelines?",
        answer:
          "Our recipes are informed by Monash University's FODMAP research, including serving size thresholds. However, individual tolerances vary, so we always recommend keeping a food diary and consulting a FODMAP-trained dietitian.",
      },
      {
        question: "Should I see a doctor before starting a low FODMAP diet?",
        answer:
          "Yes — it's important to rule out other conditions like celiac disease or inflammatory bowel disease before starting an elimination diet. A gastroenterologist or registered dietitian can help determine if low FODMAP is right for you.",
      },
    ],
    relatedSlugs: [
      "ibs-meal-plan",
      "gut-health-meal-plan",
      "gluten-free",
      "dairy-free",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "dash-diet-meal-plan",
    type: "diet",
    title: "DASH Diet Meal Plan",
    metaDescription:
      "Get a personalized DASH diet meal plan with heart-healthy recipes and a grocery list. Lower blood pressure with delicious, balanced meals. Try free today.",
    h1: "A DASH Diet Meal Plan That's Good for Your Heart and Your Taste Buds",
    intro:
      "The DASH diet (Dietary Approaches to Stop Hypertension) is one of the most doctor-recommended eating patterns in the world — and for good reason. It's rich in fruits, vegetables, whole grains, and lean protein while keeping sodium, saturated fat, and added sugar low. We turn those clinical guidelines into weekly meal plans with recipes you'll actually look forward to eating.",
    valueProps: [
      {
        heading: "Clinically backed, kitchen tested",
        description:
          "DASH has decades of research behind it for lowering blood pressure and supporting heart health. Our recipes translate those guidelines into meals that taste like they were made by a chef, not a lab.",
      },
      {
        heading: "Low sodium, full flavor",
        description:
          "Cutting salt doesn't mean cutting taste. We lean on herbs, spices, citrus, and umami-rich ingredients like tomatoes and mushrooms to build depth of flavor in every dish.",
      },
      {
        heading: "Balanced for the whole day",
        description:
          "Each day hits the DASH targets: plenty of potassium, calcium, magnesium, and fiber from whole food sources. No supplements needed, just good meals.",
      },
    ],
    sampleMeals: [
      {
        name: "Spinach & Mushroom Egg White Frittata",
        mealType: "breakfast",
        description:
          "Fluffy egg whites baked with fresh spinach, mushrooms, and a sprinkle of feta. High in protein, low in sodium, and ready in minutes.",
        prepTime: "20 min",
        tags: ["dash", "low-sodium", "high-protein"],
      },
      {
        name: "Quinoa Bowl with Chickpeas, Cucumber & Lemon-Herb Dressing",
        mealType: "lunch",
        description:
          "Fluffy quinoa with chickpeas, diced cucumber, cherry tomatoes, and fresh parsley in a bright lemon and olive oil dressing.",
        prepTime: "20 min",
        tags: ["dash", "high-fiber", "plant-based"],
      },
      {
        name: "Herb-Baked Chicken Breast with Sweet Potato & Steamed Broccoli",
        mealType: "dinner",
        description:
          "Tender chicken breast seasoned with rosemary and thyme, served alongside a baked sweet potato and perfectly steamed broccoli. Classic, wholesome, done right.",
        prepTime: "30 min",
        tags: ["dash", "low-sodium", "meal-prep"],
      },
      {
        name: "Banana with a Handful of Unsalted Almonds",
        mealType: "snack",
        description:
          "A ripe banana paired with a small handful of unsalted almonds. The potassium and magnesium combo is exactly what DASH recommends.",
        prepTime: "2 min",
        tags: ["dash", "no-cook", "potassium-rich"],
      },
      {
        name: "Lemon-Garlic Tilapia with Brown Rice & Roasted Zucchini",
        mealType: "dinner",
        description:
          "Mild tilapia baked with lemon, garlic, and a touch of olive oil, served with nutty brown rice and tender roasted zucchini.",
        prepTime: "25 min",
        tags: ["dash", "heart-healthy", "low-fat"],
      },
    ],
    faqs: [
      {
        question: "Will the DASH diet actually lower my blood pressure?",
        answer:
          "Clinical studies consistently show that the DASH diet can lower blood pressure within a few weeks, especially when combined with reduced sodium intake. However, results vary by individual, and you should work with your doctor to monitor your progress.",
      },
      {
        question: "Is DASH just for people with high blood pressure?",
        answer:
          "Not at all. DASH is a balanced, nutrient-rich eating pattern that supports overall health. It's recommended by the American Heart Association for general heart health, weight management, and diabetes prevention.",
      },
      {
        question: "How much sodium do your DASH meals contain?",
        answer:
          "Our DASH recipes aim for the standard DASH target of around 2,300mg of sodium per day, with most meals well under 600mg each. For the lower-sodium DASH variation (1,500mg/day), consult your physician.",
      },
      {
        question: "Should I check with my doctor before starting DASH?",
        answer:
          "While DASH is considered safe for most people, we recommend talking to your healthcare provider before making dietary changes, especially if you take blood pressure medication or have kidney disease.",
      },
    ],
    relatedSlugs: [
      "meal-plan-for-heart-health",
      "high-cholesterol-meal-plan",
      "meal-plan-for-weight-loss",
      "anti-inflammatory-meal-plan",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "carnivore-meal-plan",
    type: "diet",
    title: "Carnivore Diet Meal Plan",
    metaDescription:
      "Get a personalized carnivore diet meal plan with all-meat recipes and a grocery list. Beef, eggs, fish, and organs — planned for you weekly. Try free.",
    h1: "A Carnivore Meal Plan for People Who Are Done Counting Macros",
    intro:
      "The carnivore diet is the ultimate simplification: eat animal foods, skip everything else. Meat, fish, eggs, and animal fats form the foundation. No grains, no vegetables, no seed oils, no sugar. Whether you're doing carnivore for an elimination protocol, autoimmune support, or just because you feel incredible on it, we plan your week so every meal is satisfying and varied within the framework.",
    valueProps: [
      {
        heading: "More than just steak",
        description:
          "Carnivore doesn't have to be boring. Our plans include beef, pork, lamb, poultry, fish, shellfish, eggs, and organ meats — prepared in different ways each day so you never feel stuck in a rut.",
      },
      {
        heading: "Nose-to-tail nutrition",
        description:
          "We incorporate organ meats and nutrient-dense cuts alongside muscle meat to ensure you're getting a broad spectrum of vitamins and minerals from animal sources alone.",
      },
      {
        heading: "Shopping made simple",
        description:
          "Your weekly grocery list is refreshingly short. Quality meat, eggs, butter, and salt — that's about it. We help you plan quantities so nothing goes to waste.",
      },
    ],
    sampleMeals: [
      {
        name: "Three-Egg Omelette with Cheddar & Crispy Bacon",
        mealType: "breakfast",
        description:
          "A classic three-egg omelette filled with melted aged cheddar and served alongside four strips of thick-cut crispy bacon.",
        prepTime: "10 min",
        tags: ["carnivore", "high-protein", "zero-carb"],
      },
      {
        name: "Smoked Salmon with Cream Cheese Roll-Ups",
        mealType: "lunch",
        description:
          "Wild-caught smoked salmon spread with cream cheese, rolled up and sliced. Rich in omega-3s and incredibly satisfying.",
        prepTime: "5 min",
        tags: ["carnivore", "no-cook", "omega-3"],
      },
      {
        name: "Reverse-Seared Ribeye with Bone Marrow Butter",
        mealType: "dinner",
        description:
          "Thick-cut ribeye steak reverse-seared to a perfect medium-rare, topped with a spoonful of roasted bone marrow butter. The king of carnivore dinners.",
        prepTime: "30 min",
        tags: ["carnivore", "nose-to-tail", "high-fat"],
      },
      {
        name: "Beef Jerky & Hard-Boiled Eggs",
        mealType: "snack",
        description:
          "Sugar-free beef jerky with two hard-boiled eggs. Portable, protein-dense, and zero-carb.",
        prepTime: "5 min",
        tags: ["carnivore", "portable", "meal-prep"],
      },
      {
        name: "Pan-Fried Chicken Thighs with Butter & Sea Salt",
        mealType: "dinner",
        description:
          "Skin-on chicken thighs pan-fried in butter until the skin is shatteringly crispy, finished with flaky sea salt. Simple, primal, delicious.",
        prepTime: "25 min",
        tags: ["carnivore", "crispy-skin", "budget-friendly"],
      },
    ],
    faqs: [
      {
        question: "Is the carnivore diet safe long-term?",
        answer:
          "The carnivore diet is controversial in mainstream nutrition. Some people report significant improvements in autoimmune symptoms, digestion, and mental clarity. However, long-term research is limited. We strongly recommend working with a healthcare provider who can monitor your bloodwork and overall health.",
      },
      {
        question: "Won't I miss out on vitamins without vegetables?",
        answer:
          "Animal foods contain many essential nutrients including B12, iron, zinc, and fat-soluble vitamins. Organ meats in particular are among the most nutrient-dense foods on earth. That said, individual needs vary — regular bloodwork is the best way to catch any gaps.",
      },
      {
        question: "Can I include dairy on carnivore?",
        answer:
          "It depends on your approach. Strict carnivore excludes dairy, while 'animal-based' versions allow butter, ghee, aged cheese, and heavy cream. Our plans default to including some dairy but can be adjusted.",
      },
      {
        question: "Should I talk to a doctor before starting carnivore?",
        answer:
          "Absolutely. The carnivore diet is a significant departure from conventional eating patterns. Get baseline bloodwork before starting and schedule follow-up labs at 30, 60, and 90 days. This is especially important if you have kidney disease, gout, or cardiovascular concerns.",
      },
    ],
    relatedSlugs: [
      "keto",
      "high-protein-meal-plan",
      "aip-meal-plan",
      "whole30-meal-plan",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "aip-meal-plan",
    type: "diet",
    title: "AIP Meal Plan",
    metaDescription:
      "Get a personalized AIP (autoimmune protocol) meal plan with elimination-phase recipes and a grocery list. Reduce inflammation naturally. Try free today.",
    h1: "An AIP Meal Plan That Makes the Elimination Phase Actually Doable",
    intro:
      "The Autoimmune Protocol is one of the most restrictive elimination diets out there — no grains, dairy, eggs, nuts, seeds, nightshades, legumes, or refined sugar. It's a lot to navigate alone. Our AIP meal plans take the guesswork out of the elimination phase, giving you compliant recipes that are genuinely nourishing and satisfying while your body heals.",
    valueProps: [
      {
        heading: "Strict AIP elimination phase",
        description:
          "Every recipe excludes all AIP-eliminated foods including nightshades (tomatoes, peppers, potatoes), eggs, nuts, seeds, and all grains. No exceptions, no gray areas.",
      },
      {
        heading: "Nutrient density is the priority",
        description:
          "AIP isn't just about what you remove — it's about flooding your body with nutrients. Our plans emphasize organ meats, bone broth, fermented foods, and a rainbow of non-nightshade vegetables.",
      },
      {
        heading: "Designed for the healing phase",
        description:
          "We know you're doing AIP because something isn't right. Our plans are built to reduce your cognitive load around food so you can focus on rest, stress management, and recovery.",
      },
    ],
    sampleMeals: [
      {
        name: "Coconut Yogurt Bowl with Blueberries & Tiger Nut Granola",
        mealType: "breakfast",
        description:
          "Creamy coconut yogurt topped with fresh blueberries, toasted coconut flakes, and crunchy tiger nut granola. AIP-compliant and naturally sweet.",
        prepTime: "10 min",
        tags: ["aip", "nut-free", "egg-free"],
      },
      {
        name: "Turkey & Avocado Collard Green Wraps",
        mealType: "lunch",
        description:
          "Sliced roasted turkey breast with avocado, shredded carrots, and fresh herbs wrapped in large collard green leaves. Light, fresh, and portable.",
        prepTime: "15 min",
        tags: ["aip", "grain-free", "no-cook"],
      },
      {
        name: "Braised Short Ribs with Parsnip Mash & Sauteed Kale",
        mealType: "dinner",
        description:
          "Fall-apart tender beef short ribs braised in bone broth with herbs, served over silky parsnip mash with garlicky sauteed kale.",
        prepTime: "40 min",
        tags: ["aip", "bone-broth", "comfort-food"],
      },
      {
        name: "Plantain Chips with Avocado Dip",
        mealType: "snack",
        description:
          "Thinly sliced green plantains baked until crispy, served with a simple mashed avocado dip seasoned with lime and sea salt.",
        prepTime: "15 min",
        tags: ["aip", "nightshade-free", "crunchy"],
      },
      {
        name: "Lemon-Herb Roasted Whole Chicken with Root Vegetables",
        mealType: "dinner",
        description:
          "A whole chicken roasted with lemon, thyme, and rosemary on a bed of carrots, turnips, and sweet potatoes. Sunday dinner energy, AIP approved.",
        prepTime: "45 min",
        tags: ["aip", "family-size", "meal-prep"],
      },
    ],
    faqs: [
      {
        question: "What autoimmune conditions is AIP designed for?",
        answer:
          "AIP was developed for conditions like Hashimoto's, rheumatoid arthritis, lupus, psoriasis, and inflammatory bowel disease. It aims to reduce systemic inflammation by removing potential dietary triggers. Always work with your rheumatologist or specialist alongside dietary changes.",
      },
      {
        question: "How long should I stay in the elimination phase?",
        answer:
          "Most AIP practitioners recommend 30-90 days in strict elimination before beginning systematic reintroduction. The timeline depends on your symptoms and your healthcare provider's guidance. Our plans support you through the full elimination phase.",
      },
      {
        question: "Is AIP the same as paleo?",
        answer:
          "AIP is a stricter version of paleo. While paleo removes grains, dairy, and legumes, AIP also eliminates eggs, nuts, seeds, nightshades, coffee, and alcohol. Think of it as paleo's more focused sibling, specifically designed for autoimmune support.",
      },
      {
        question: "Should I do AIP without medical supervision?",
        answer:
          "We strongly recommend working with a functional medicine practitioner or registered dietitian experienced in AIP. The protocol is restrictive, and professional guidance helps ensure nutritional adequacy, proper reintroduction, and appropriate monitoring of your condition.",
      },
    ],
    relatedSlugs: [
      "anti-inflammatory-meal-plan",
      "whole30-meal-plan",
      "paleo-meal-plan",
      "gut-health-meal-plan",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "plant-based-meal-plan",
    type: "diet",
    title: "Plant-Based Meal Plan",
    metaDescription:
      "Get a personalized plant-based meal plan with whole-food recipes and a grocery list. Mostly plants, flexible approach, maximum nutrition. Try free today.",
    h1: "A Plant-Based Meal Plan for People Who Don't Want to Be 100% Vegan",
    intro:
      "Plant-based doesn't mean you'll never see an egg again. It means plants are the star of every plate — vegetables, fruits, whole grains, legumes, nuts, and seeds — with animal products playing a supporting role when you want them. No dogma, no guilt, just a flexible way of eating that's better for your health, your wallet, and the planet.",
    valueProps: [
      {
        heading: "Plants first, not plants only",
        description:
          "Unlike strict vegan plans, our plant-based meals may include eggs, dairy, or fish in small amounts. The focus is on making vegetables, legumes, and whole grains the foundation — not the afterthought.",
      },
      {
        heading: "Protein without the stress",
        description:
          "The 'but where do you get your protein?' question is answered in every meal. Lentils, chickpeas, tofu, tempeh, quinoa, and strategic combinations keep your protein intake solid.",
      },
      {
        heading: "Meals the whole family will eat",
        description:
          "These aren't weird health food experiments. Think creamy pasta, hearty soups, loaded tacos, and stir-fries that happen to be mostly plants. Nobody feels like they're missing out.",
      },
    ],
    sampleMeals: [
      {
        name: "Avocado Toast with Everything Bagel Seasoning & a Soft Egg",
        mealType: "breakfast",
        description:
          "Smashed avocado on sourdough toast with a six-minute jammy egg, everything bagel seasoning, red pepper flakes, and a squeeze of lemon.",
        prepTime: "10 min",
        tags: ["plant-based", "vegetarian", "quick"],
      },
      {
        name: "Spiced Lentil Soup with Crusty Bread",
        mealType: "lunch",
        description:
          "A thick, warming red lentil soup with cumin, turmeric, and a squeeze of lemon. Served with a chunk of crusty whole grain bread for dipping.",
        prepTime: "25 min",
        tags: ["plant-based", "vegan", "high-fiber"],
      },
      {
        name: "Black Bean Tacos with Mango Slaw & Lime Crema",
        mealType: "dinner",
        description:
          "Seasoned black beans in warm corn tortillas topped with a bright mango-cabbage slaw and a drizzle of lime cashew crema.",
        prepTime: "20 min",
        tags: ["plant-based", "vegan-option", "family-friendly"],
      },
      {
        name: "Hummus & Veggie Sticks with Whole Grain Crackers",
        mealType: "snack",
        description:
          "Creamy homemade hummus with carrot sticks, cucumber rounds, and bell pepper strips alongside whole grain crackers.",
        prepTime: "5 min",
        tags: ["plant-based", "vegan", "no-cook"],
      },
      {
        name: "Mushroom & Spinach Risotto with Parmesan",
        mealType: "dinner",
        description:
          "Creamy arborio rice with mixed mushrooms, baby spinach, and a generous grating of Parmigiano-Reggiano. Comfort food that happens to be mostly plants.",
        prepTime: "30 min",
        tags: ["plant-based", "vegetarian", "comfort-food"],
      },
    ],
    faqs: [
      {
        question: "What's the difference between plant-based and vegan?",
        answer:
          "Vegan excludes all animal products completely. Plant-based means plants make up the majority of your diet, but you may still include small amounts of eggs, dairy, fish, or even occasional meat. It's a spectrum, not a strict rule.",
      },
      {
        question: "Will I get enough protein on a plant-based diet?",
        answer:
          "Yes. Our plans combine legumes, whole grains, tofu, tempeh, nuts, and seeds to meet protein needs without relying heavily on animal sources. Most adults need less protein than they think, and plants deliver plenty when meals are well-planned.",
      },
      {
        question: "Is plant-based eating more expensive?",
        answer:
          "It's usually cheaper. Beans, lentils, rice, and seasonal vegetables are among the most affordable foods available. You'll likely spend less on groceries while eating a wider variety of whole foods.",
      },
      {
        question: "Should I take supplements on a plant-based diet?",
        answer:
          "If you're eating mostly plants, consider B12 supplementation and possibly vitamin D, depending on your sun exposure. An annual blood panel can identify any gaps. Talk to your doctor about what's right for your situation.",
      },
    ],
    relatedSlugs: [
      "vegetarian",
      "vegan",
      "anti-inflammatory-meal-plan",
      "meal-plan-on-a-budget",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
  {
    slug: "intermittent-fasting-meal-plan",
    type: "diet",
    title: "Intermittent Fasting Meal Plan",
    metaDescription:
      "Get a personalized intermittent fasting meal plan with nutrient-dense recipes and a grocery list. Optimized for 16:8 and 18:6 eating windows. Try free.",
    h1: "An Intermittent Fasting Meal Plan That Makes Your Eating Window Count",
    intro:
      "Intermittent fasting is about when you eat, but what you eat during your window matters just as much. With only two or three meals to work with, every plate needs to deliver real nutrition — enough protein, healthy fats, fiber, and micronutrients to fuel you through the fast. Our IF meal plans are designed to maximize satiety and nutrition within your eating window, whether that's 16:8, 18:6, or OMAD.",
    valueProps: [
      {
        heading: "Optimized for shorter eating windows",
        description:
          "Each meal is calorie-appropriate and nutrient-dense so you can hit your daily needs in 2-3 meals without feeling stuffed or deprived. No filler, no empty calories.",
      },
      {
        heading: "Built to keep you full through the fast",
        description:
          "Strategic use of protein, healthy fats, and fiber in your last meal helps you sail through the fasting period without white-knuckling it. We plan meals that sustain, not just satisfy.",
      },
      {
        heading: "Flexible for any fasting schedule",
        description:
          "Whether you skip breakfast (16:8), eat a late lunch and early dinner (18:6), or eat one large meal (OMAD), our plans adapt to your preferred window.",
      },
    ],
    sampleMeals: [
      {
        name: "Loaded Greek Salad with Grilled Chicken & Tahini Dressing",
        mealType: "lunch",
        description:
          "A massive salad with grilled chicken breast, cucumber, tomatoes, olives, red onion, and feta, dressed in a creamy tahini-lemon dressing. The perfect window-opener.",
        prepTime: "20 min",
        tags: ["intermittent-fasting", "high-protein", "first-meal"],
      },
      {
        name: "Salmon & Avocado Power Bowl",
        mealType: "lunch",
        description:
          "Baked salmon over brown rice with avocado, edamame, pickled ginger, shredded carrots, and a sesame-soy drizzle. Packed with omega-3s and fiber.",
        prepTime: "25 min",
        tags: ["intermittent-fasting", "omega-3", "nutrient-dense"],
      },
      {
        name: "Beef & Broccoli Stir-Fry with Cauliflower Rice",
        mealType: "dinner",
        description:
          "Tender sliced beef with broccoli florets in a savory ginger-garlic sauce, served over cauliflower rice for a low-carb, high-protein final meal.",
        prepTime: "20 min",
        tags: ["intermittent-fasting", "low-carb", "last-meal"],
      },
      {
        name: "Dark Chocolate & Mixed Nut Trail Mix",
        mealType: "snack",
        description:
          "A small handful of almonds, walnuts, and dark chocolate chips. Calorie-dense, satisfying, and perfect for extending satiety before your window closes.",
        prepTime: "2 min",
        tags: ["intermittent-fasting", "healthy-fats", "portable"],
      },
      {
        name: "Herb-Crusted Lamb Chops with Roasted Mediterranean Vegetables",
        mealType: "dinner",
        description:
          "Rosemary and thyme crusted lamb chops with roasted eggplant, zucchini, and bell peppers. A nutrient-dense final meal that carries you through the fast.",
        prepTime: "30 min",
        tags: ["intermittent-fasting", "high-protein", "Mediterranean"],
      },
    ],
    faqs: [
      {
        question: "What eating window do your IF meal plans use?",
        answer:
          "Our plans default to a 16:8 schedule (eating window from noon to 8 PM) but work equally well for 18:6 or other windows. Simply adjust the timing of your first and last meals to match your preferred schedule.",
      },
      {
        question: "Can I drink coffee during the fasting period?",
        answer:
          "Black coffee, plain tea, and water are generally considered fine during fasting periods as they don't trigger a significant insulin response. Avoid adding sugar, cream, or milk during the fast.",
      },
      {
        question: "Will I lose muscle on intermittent fasting?",
        answer:
          "Not if you eat enough protein during your eating window. Our IF meal plans prioritize protein in every meal (aiming for 25-40g per meal) and pair well with a resistance training program. Muscle loss is more about total protein and training stimulus than meal timing.",
      },
      {
        question: "Is intermittent fasting safe for everyone?",
        answer:
          "IF is not recommended for pregnant or breastfeeding women, people with a history of eating disorders, or those with blood sugar regulation issues. Always consult your doctor before starting any fasting protocol, especially if you take medications.",
      },
    ],
    relatedSlugs: [
      "meal-plan-for-weight-loss",
      "high-protein-meal-plan",
      "keto",
      "low-carb",
    ],
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
  },
];
