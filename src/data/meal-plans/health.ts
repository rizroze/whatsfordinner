import type { MealPlanPageData } from "./types";

export const healthPages: MealPlanPageData[] = [
  {
    slug: "ibs-meal-plan",
    type: "diet",
    title: "IBS Meal Plan - Low FODMAP Weekly Meals",
    metaDescription:
      "Get a personalized low FODMAP meal plan for IBS with recipes and grocery lists. Reduce bloating, cramping, and flare-ups with meals designed around trigger avoidance. Try free.",
    h1: "A Low FODMAP Meal Plan That Takes the Guesswork Out of IBS",
    intro:
      "Living with IBS means every meal is a gamble -- will this be the one that ruins your afternoon? The low FODMAP approach is clinically proven to reduce symptoms in up to 75% of IBS sufferers, but figuring out what you can actually eat is exhausting. We build you a fresh low FODMAP meal plan every week with safe, flavorful recipes so you can eat confidently without spending hours cross-referencing ingredient lists.",
    valueProps: [
      {
        heading: "Low FODMAP by default",
        description:
          "Every recipe avoids high FODMAP triggers like garlic, onion, wheat, and excess lactose. We use garlic-infused oil, green onion tops, and other low FODMAP swaps so you get flavor without the pain.",
      },
      {
        heading: "Designed for the elimination phase",
        description:
          "Our base plans follow strict elimination-phase guidelines. As you identify your personal triggers, you can update your preferences and we'll adjust your meals to match your reintroduction progress.",
      },
      {
        heading: "Gut-friendly without being boring",
        description:
          "Low FODMAP doesn't mean plain chicken and rice every night. We use herbs, citrus, ginger, maple syrup, and other safe flavor builders to keep meals interesting and satisfying.",
      },
    ],
    sampleMeals: [
      {
        name: "Overnight Oats with Blueberries & Maple",
        mealType: "breakfast",
        description:
          "Rolled oats soaked in lactose-free milk with chia seeds, fresh blueberries, and a drizzle of maple syrup. Gentle on the gut, ready when you wake up.",
        prepTime: "5 min",
        tags: ["low-fodmap", "no-cook"],
      },
      {
        name: "Chicken & Rice Paper Rolls with Peanut Sauce",
        mealType: "lunch",
        description:
          "Fresh rice paper rolls filled with poached chicken, carrots, cucumber, and mint, served with a ginger-peanut dipping sauce made without garlic or onion.",
        prepTime: "20 min",
        tags: ["low-fodmap", "no-cook"],
      },
      {
        name: "Pan-Seared Salmon with Lemon-Dill Potatoes",
        mealType: "dinner",
        description:
          "Skin-on salmon fillet with roasted baby potatoes tossed in garlic-infused olive oil, fresh dill, and lemon zest. Served with steamed green beans.",
        prepTime: "30 min",
        tags: ["low-fodmap", "high-protein"],
      },
      {
        name: "Ginger-Soy Chicken Stir-Fry with Bok Choy",
        mealType: "dinner",
        description:
          "Sliced chicken breast stir-fried with bok choy, bell peppers, and bean sprouts in a ginger-soy-sesame sauce over jasmine rice. No onion, no garlic.",
        prepTime: "25 min",
        tags: ["low-fodmap", "quick"],
      },
      {
        name: "Rice Cakes with Peanut Butter & Banana",
        mealType: "snack",
        description:
          "Two plain rice cakes topped with natural peanut butter and sliced firm banana (1/3 medium, within FODMAP limits). Crunchy, satisfying, and safe.",
        prepTime: "3 min",
        tags: ["low-fodmap", "quick"],
      },
    ],
    faqs: [
      {
        question: "What foods should I avoid on a low FODMAP meal plan?",
        answer:
          "High FODMAP foods include garlic, onion, wheat, rye, apples, pears, watermelon, honey, milk, yogurt, legumes, and cauliflower. Our meal plans automatically exclude these and use low FODMAP substitutes -- like garlic-infused oil instead of garlic cloves, and firm banana instead of ripe -- so you don't have to memorize the lists.",
      },
      {
        question: "How long should I follow a low FODMAP diet for IBS?",
        answer:
          "The strict elimination phase typically lasts 2-6 weeks, followed by a structured reintroduction phase where you test one FODMAP group at a time. Our plans start with strict elimination. Most people find they only need to avoid 1-2 specific FODMAP groups long-term, not all of them.",
      },
      {
        question: "Can a low FODMAP diet actually reduce IBS symptoms?",
        answer:
          "Yes. Research from Monash University shows that a low FODMAP diet reduces symptoms like bloating, gas, cramping, and diarrhea in about 75% of people with IBS. It's currently the most evidence-based dietary approach for IBS management and is recommended by most gastroenterologists.",
      },
      {
        question: "Will I get enough fiber on a low FODMAP plan?",
        answer:
          "Absolutely. Many low FODMAP foods are excellent fiber sources: oats, quinoa, chia seeds, oranges, strawberries, carrots, potatoes, and kale are all safe and fiber-rich. Our plans are designed to include adequate fiber because IBS management shouldn't come at the expense of overall gut health.",
      },
      {
        question:
          "Can I follow a low FODMAP plan if I'm vegetarian or vegan?",
        answer:
          "Yes, though it requires more planning since many plant proteins (lentils, chickpeas, kidney beans) are high FODMAP. We use canned and rinsed lentils in small portions, firm tofu (which is low FODMAP), tempeh, and nuts to ensure you hit protein targets. Set your dietary preferences and we'll build plans that work within both constraints.",
      },
    ],
    relatedSlugs: [
      "gluten-free",
      "dairy-free",
      "gut-health-meal-plan",
      "anti-inflammatory-meal-plan",
    ],
    datePublished: "2026-03-11",
    dateModified: "2026-03-11",
  },
  {
    slug: "pcos-meal-plan",
    type: "diet",
    title: "PCOS Meal Plan - Anti-Inflammatory & Blood Sugar Friendly",
    metaDescription:
      "Get a personalized weekly PCOS meal plan with anti-inflammatory recipes and grocery lists. Manage insulin resistance and hormonal balance through food. Try free.",
    h1: "A PCOS Meal Plan Built Around Insulin Resistance, Not Just Calories",
    intro:
      "PCOS isn't just a reproductive issue -- it's a metabolic one, and what you eat has a direct impact on insulin levels, inflammation, and hormone balance. The frustrating part is that generic \"healthy eating\" advice doesn't cut it when your body processes carbs differently. We build PCOS-specific meal plans every week that prioritize blood sugar stability, anti-inflammatory ingredients, and balanced macros without making food feel like medicine.",
    valueProps: [
      {
        heading: "Blood sugar stability at every meal",
        description:
          "Every meal pairs complex carbs with protein and healthy fats to prevent insulin spikes. We use low-glycemic grains, limit refined sugars, and time carbs strategically so your blood sugar stays steady throughout the day.",
      },
      {
        heading: "Anti-inflammatory by design",
        description:
          "Chronic low-grade inflammation drives PCOS symptoms. Our plans emphasize omega-3 rich fish, turmeric, leafy greens, berries, and extra-virgin olive oil while minimizing processed foods, refined oils, and excess sugar.",
      },
      {
        heading: "Sustainable, not restrictive",
        description:
          "We don't put you on a 1,200-calorie crash diet. PCOS responds better to adequate nutrition with the right macros than to restriction. Our plans are filling, varied, and designed for long-term adherence.",
      },
    ],
    sampleMeals: [
      {
        name: "Spinach & Feta Egg Muffins",
        mealType: "breakfast",
        description:
          "Baked egg cups with fresh spinach, crumbled feta, and sun-dried tomatoes. High protein, low glycemic, and make-ahead friendly for busy mornings.",
        prepTime: "25 min",
        tags: ["high-protein", "meal-prep"],
      },
      {
        name: "Salmon Quinoa Bowl with Avocado",
        mealType: "lunch",
        description:
          "Wild salmon over quinoa with sliced avocado, cucumber, edamame, and a turmeric-tahini dressing. Omega-3s and anti-inflammatory spices in one bowl.",
        prepTime: "30 min",
        tags: ["anti-inflammatory", "high-protein"],
      },
      {
        name: "Turkey & Lentil Stuffed Bell Peppers",
        mealType: "dinner",
        description:
          "Bell peppers filled with ground turkey, green lentils, diced tomatoes, and cumin, topped with a sprinkle of cheddar. Balanced protein and slow-digesting carbs.",
        prepTime: "40 min",
        tags: ["high-protein", "high-fiber"],
      },
      {
        name: "Turmeric Chicken with Roasted Broccoli & Sweet Potato",
        mealType: "dinner",
        description:
          "Chicken thighs rubbed with turmeric, black pepper, and olive oil, roasted alongside broccoli florets and sweet potato wedges. Anti-inflammatory and deeply satisfying.",
        prepTime: "35 min",
        tags: ["anti-inflammatory", "one-pan"],
      },
      {
        name: "Cinnamon Almond Energy Bites",
        mealType: "snack",
        description:
          "No-bake bites made with almond butter, oats, flaxseed, cinnamon, and a touch of dark chocolate. Cinnamon helps with insulin sensitivity and these satisfy sweet cravings.",
        prepTime: "10 min",
        tags: ["no-cook", "meal-prep"],
      },
    ],
    faqs: [
      {
        question: "What should I eat to manage PCOS symptoms?",
        answer:
          "Focus on anti-inflammatory foods (fatty fish, leafy greens, berries, turmeric), complex carbs (quinoa, sweet potatoes, oats), lean proteins, and healthy fats (avocado, olive oil, nuts). The key is pairing carbs with protein and fat to slow glucose absorption. Our plans do this automatically at every meal so you don't have to think about it.",
      },
      {
        question: "Should I go low-carb for PCOS?",
        answer:
          "Not necessarily. While reducing refined carbs helps with insulin resistance, going very low-carb can stress the adrenals and worsen symptoms for some women. Research shows moderate carb intake (about 40% of calories) from whole food sources works well for most people with PCOS. Our plans use this balanced approach rather than extreme restriction.",
      },
      {
        question: "Can diet alone help with PCOS weight management?",
        answer:
          "Diet is the single most impactful lever for PCOS weight management. Studies show that even a 5-10% reduction in body weight can restore ovulation and improve insulin sensitivity. Our plans focus on steady, sustainable nutrition rather than crash dieting, which can actually worsen hormonal imbalances in PCOS.",
      },
      {
        question: "Are there foods that make PCOS worse?",
        answer:
          "Refined sugars, white bread, sugary drinks, processed snacks, and excessive dairy can worsen insulin resistance and inflammation. Trans fats and highly processed vegetable oils are also inflammatory. Our plans minimize all of these while still including satisfying meals -- you won't feel like you're on a restrictive medical diet.",
      },
      {
        question: "How does this PCOS meal plan handle cravings?",
        answer:
          "Cravings in PCOS are often driven by blood sugar crashes, not willpower failure. By keeping your blood sugar stable with balanced meals and strategic snacks, cravings naturally decrease. We also include healthy versions of comfort foods -- dark chocolate, cinnamon-spiced treats, and savory dishes -- so you don't feel deprived.",
      },
    ],
    relatedSlugs: [
      "anti-inflammatory-meal-plan",
      "low-carb",
      "meal-plan-for-weight-loss",
      "meal-plan-for-diabetes",
    ],
    datePublished: "2026-03-11",
    dateModified: "2026-03-11",
  },
  {
    slug: "gerd-meal-plan",
    type: "diet",
    title: "GERD Meal Plan - Acid Reflux Friendly Recipes",
    metaDescription:
      "Get a personalized weekly meal plan for GERD and acid reflux with trigger-free recipes and grocery lists. Eat well without the burn. Try free today.",
    h1: "A Meal Plan for Acid Reflux That Doesn't Taste Like a Punishment",
    intro:
      "When you have GERD, eating becomes a minefield. Tomato sauce, citrus, coffee, chocolate, spicy food -- suddenly all the good stuff is off limits. The result is most people end up eating the same three \"safe\" meals on repeat. We build weekly meal plans that avoid common GERD triggers while still delivering genuinely enjoyable food, so you can eat without dreading what comes next.",
    valueProps: [
      {
        heading: "Trigger-free by default",
        description:
          "Every recipe avoids the big GERD triggers: tomatoes, citrus, chocolate, mint, raw onion, spicy peppers, and excessive fat. We build flavor with herbs, ginger, fennel, and roasting techniques instead.",
      },
      {
        heading: "Smaller, more frequent meals",
        description:
          "Large meals increase stomach pressure and worsen reflux. Our plans distribute calories across 3 meals and 2 snacks to keep portions moderate and prevent the overfull feeling that triggers symptoms.",
      },
      {
        heading: "Evening meals designed for sleep",
        description:
          "Dinners are lighter and lower in fat to reduce nighttime reflux. We schedule the heaviest meal at lunch and keep dinner at least 3 hours before typical bedtime, because nothing ruins sleep like acid creeping up at 2 AM.",
      },
    ],
    sampleMeals: [
      {
        name: "Banana Oatmeal with Almond Butter",
        mealType: "breakfast",
        description:
          "Creamy rolled oats topped with sliced banana, a drizzle of almond butter, and a pinch of cinnamon. Alkaline-forming, gentle on the stomach, and genuinely filling.",
        prepTime: "10 min",
        tags: ["gentle", "quick"],
      },
      {
        name: "Herb-Roasted Chicken Wrap with Cucumber Yogurt",
        mealType: "lunch",
        description:
          "Sliced roasted chicken breast in a whole wheat wrap with shredded lettuce, cucumber, and a dill-yogurt sauce. No tomato, no spice, all flavor.",
        prepTime: "15 min",
        tags: ["quick", "high-protein"],
      },
      {
        name: "Baked Cod with Fennel & Roasted Potatoes",
        mealType: "dinner",
        description:
          "Mild white cod baked with sliced fennel, baby potatoes, and fresh thyme in olive oil. Fennel is a natural digestive soother and pairs beautifully with fish.",
        prepTime: "35 min",
        tags: ["gentle", "one-pan"],
      },
      {
        name: "Turkey Meatballs with Zucchini Noodles & Basil Pesto",
        mealType: "dinner",
        description:
          "Baked turkey meatballs served over spiralized zucchini with a basil-pine nut pesto (no tomato sauce). Lighter than traditional pasta but just as satisfying.",
        prepTime: "30 min",
        tags: ["high-protein", "low-acid"],
      },
      {
        name: "Melon & Cottage Cheese Bowl",
        mealType: "snack",
        description:
          "Cubed cantaloupe and honeydew with low-fat cottage cheese. Melons are among the most alkaline fruits, and cottage cheese adds protein without the fat load.",
        prepTime: "5 min",
        tags: ["quick", "no-cook"],
      },
    ],
    faqs: [
      {
        question: "What foods should I avoid with GERD?",
        answer:
          "The most common GERD triggers are tomatoes and tomato-based sauces, citrus fruits, chocolate, coffee, carbonated drinks, mint, raw onions, spicy foods, and high-fat fried foods. Alcohol -- especially red wine -- is also a major trigger. Our meal plans exclude all of these by default and use creative alternatives for flavor.",
      },
      {
        question: "Can I still enjoy flavorful food with acid reflux?",
        answer:
          "Absolutely. GERD-friendly cooking relies on herbs (basil, thyme, rosemary, dill), ginger, fennel, roasting and caramelizing techniques, and umami-rich ingredients like mushrooms and parmesan. You lose tomato sauce and hot peppers, but gain a whole world of flavor that doesn't fight back.",
      },
      {
        question: "Does meal timing matter for GERD?",
        answer:
          "Yes, significantly. Eating large meals or eating within 2-3 hours of lying down are two of the biggest reflux triggers. Our plans keep dinner portions moderate, schedule the highest-calorie meal at lunch, and include strategic snacks so you're never eating a huge meal close to bedtime.",
      },
      {
        question: "Will losing weight help my acid reflux?",
        answer:
          "For many people, yes. Excess abdominal weight increases pressure on the stomach and weakens the lower esophageal sphincter. Studies show that even modest weight loss of 10-15 pounds can significantly reduce GERD symptoms. Our plans can be tailored for weight loss while staying GERD-friendly.",
      },
    ],
    relatedSlugs: [
      "dairy-free",
      "gluten-free",
      "meal-plan-for-weight-loss",
      "gut-health-meal-plan",
    ],
    datePublished: "2026-03-11",
    dateModified: "2026-03-11",
  },
  {
    slug: "gut-health-meal-plan",
    type: "diet",
    title: "Gut Health Meal Plan - Probiotics, Fiber & Fermented Foods",
    metaDescription:
      "Get a personalized weekly gut health meal plan with prebiotic, probiotic, and fiber-rich recipes plus grocery lists. Build a healthier microbiome. Try free.",
    h1: "A Gut Health Meal Plan That Actually Feeds Your Microbiome",
    intro:
      "Your gut microbiome influences everything from digestion and immunity to mood and energy. But \"eat more fiber\" is vague advice when you're standing in a grocery store. We build weekly meal plans specifically designed to diversify your gut bacteria -- with prebiotic fiber, fermented foods, polyphenol-rich plants, and minimal ultra-processed ingredients -- so you can stop guessing and start feeding your gut what it actually needs.",
    valueProps: [
      {
        heading: "30+ plant foods per week",
        description:
          "Research from the American Gut Project shows that eating 30+ different plant foods weekly produces the most diverse microbiome. Our plans are intentionally varied, rotating through different vegetables, fruits, grains, legumes, nuts, and seeds each week.",
      },
      {
        heading: "Fermented foods at every opportunity",
        description:
          "Kimchi, sauerkraut, yogurt, kefir, miso, and tempeh are woven naturally into meals -- not as afterthoughts. These live-culture foods introduce beneficial bacteria directly and make meals more interesting.",
      },
      {
        heading: "Prebiotic fiber built in",
        description:
          "Prebiotics feed the good bacteria already in your gut. We include garlic, onions, leeks, asparagus, bananas, oats, and flaxseed throughout the week to keep your existing microbiome thriving.",
      },
    ],
    sampleMeals: [
      {
        name: "Kefir Smoothie Bowl with Berries & Flaxseed",
        mealType: "breakfast",
        description:
          "Thick kefir blended with frozen mixed berries and topped with ground flaxseed, sliced almonds, and raw honey. Probiotics, prebiotics, and polyphenols in one bowl.",
        prepTime: "5 min",
        tags: ["probiotic", "quick"],
      },
      {
        name: "Miso Salmon Bowl with Pickled Vegetables",
        mealType: "lunch",
        description:
          "Miso-glazed baked salmon over brown rice with quick-pickled radishes, cucumber, edamame, and a sesame-ginger drizzle. Fermented miso adds umami and beneficial cultures.",
        prepTime: "30 min",
        tags: ["probiotic", "high-protein"],
      },
      {
        name: "Lentil & Roasted Vegetable Bowl with Sauerkraut",
        mealType: "dinner",
        description:
          "Puy lentils with roasted sweet potato, beetroot, and kale, topped with a generous scoop of raw sauerkraut and a tahini dressing. Prebiotic fiber meets live cultures.",
        prepTime: "35 min",
        tags: ["high-fiber", "probiotic"],
      },
      {
        name: "Chicken & Kimchi Fried Rice",
        mealType: "dinner",
        description:
          "Day-old brown rice stir-fried with shredded chicken, kimchi, garlic, ginger, and a fried egg on top. Comfort food that happens to be a gut health powerhouse.",
        prepTime: "20 min",
        tags: ["probiotic", "quick"],
      },
      {
        name: "Apple Slices with Almond Butter & Chia Seeds",
        mealType: "snack",
        description:
          "Crisp apple slices with almond butter and a sprinkle of chia seeds. Apples provide pectin (a prebiotic fiber) and chia adds omega-3s and soluble fiber.",
        prepTime: "3 min",
        tags: ["prebiotic", "no-cook"],
      },
    ],
    faqs: [
      {
        question: "How long does it take to improve gut health through diet?",
        answer:
          "Your gut microbiome begins shifting within 24 hours of dietary changes, but meaningful, lasting changes take 2-4 weeks of consistent eating. Studies show significant increases in microbial diversity after 30 days of a fiber-rich, plant-diverse diet. Our weekly plans are designed for sustained improvement, not a one-week fix.",
      },
      {
        question: "Do I need to take probiotics if I eat fermented foods?",
        answer:
          "For most people, a diet rich in varied fermented foods provides a broader range of beneficial bacteria than any single probiotic supplement. Our plans include different fermented foods throughout the week -- yogurt, kefir, kimchi, sauerkraut, miso, tempeh -- which collectively deliver more diverse strains than a capsule. Supplements can be helpful for specific conditions, but food-first is the better long-term strategy.",
      },
      {
        question: "What's the difference between probiotics and prebiotics?",
        answer:
          "Probiotics are live beneficial bacteria (found in fermented foods like yogurt and kimchi). Prebiotics are types of fiber that feed those bacteria (found in garlic, onions, oats, bananas, and asparagus). You need both for a healthy gut. Our plans include generous amounts of each so your microbiome gets both the new residents and the food to keep them alive.",
      },
      {
        question:
          "Can improving gut health help with bloating and digestive issues?",
        answer:
          "Yes. A diverse, well-fed microbiome produces enzymes that aid digestion and reduces the gas-producing fermentation that causes bloating. However, if you're not used to high-fiber foods, increasing too quickly can temporarily worsen bloating. Our plans ramp up fiber gradually and pair it with fermented foods to ease the transition.",
      },
      {
        question: "Is a gut health meal plan good for immunity?",
        answer:
          "About 70% of your immune system resides in your gut. A diverse microbiome helps regulate immune responses, reduce inflammation, and protect against pathogens. The fiber, fermented foods, and polyphenol-rich plants in our plans all support immune function through the gut-immune axis.",
      },
    ],
    relatedSlugs: [
      "anti-inflammatory-meal-plan",
      "vegetarian",
      "ibs-meal-plan",
      "mediterranean",
    ],
    datePublished: "2026-03-11",
    dateModified: "2026-03-11",
  },
  {
    slug: "high-cholesterol-meal-plan",
    type: "diet",
    title: "High Cholesterol Meal Plan - Heart-Healthy Recipes",
    metaDescription:
      "Get a personalized weekly meal plan for high cholesterol with heart-healthy recipes and grocery lists. Lower LDL naturally with the right foods. Try free.",
    h1: "A Meal Plan for High Cholesterol That Goes Beyond \"Eat Less Fat\"",
    intro:
      "High cholesterol doesn't mean a lifetime of dry salads and tasteless food. The science is clear: specific foods can actively lower LDL cholesterol -- soluble fiber, omega-3 fatty acids, plant sterols, and nuts can reduce LDL by 20-30% when combined consistently. We build weekly meal plans that pack these cholesterol-lowering foods into every day so you're actively improving your numbers with every meal, not just avoiding the bad stuff.",
    valueProps: [
      {
        heading: "Soluble fiber at every meal",
        description:
          "Oats, beans, lentils, apples, and flaxseed are cholesterol-lowering powerhouses. Our plans include 10-25g of soluble fiber daily -- the range shown to meaningfully reduce LDL -- spread across meals so it's easy to hit without supplements.",
      },
      {
        heading: "Smart fats, not low fat",
        description:
          "Cutting all fat isn't the answer. We replace saturated fats with monounsaturated fats from olive oil, avocado, and almonds, and include omega-3 rich fish 2-3 times per week. This approach lowers LDL while raising protective HDL.",
      },
      {
        heading: "Based on the Portfolio Diet",
        description:
          "Our plans incorporate elements of the Portfolio Diet -- the most evidence-based dietary approach for cholesterol reduction -- combining plant protein, viscous fiber, nuts, and plant sterols in a way that's actually enjoyable to eat daily.",
      },
    ],
    sampleMeals: [
      {
        name: "Steel-Cut Oats with Walnuts & Blueberries",
        mealType: "breakfast",
        description:
          "Steel-cut oats (the most soluble fiber-dense form) topped with walnuts, fresh blueberries, and a drizzle of honey. 6g of soluble fiber before you leave the house.",
        prepTime: "15 min",
        tags: ["heart-healthy", "high-fiber"],
      },
      {
        name: "Mediterranean White Bean & Tuna Salad",
        mealType: "lunch",
        description:
          "Cannellini beans with albacore tuna, cucumber, red onion, kalamata olives, and a lemon-olive oil dressing over mixed greens. Fiber from beans, omega-3s from tuna.",
        prepTime: "15 min",
        tags: ["heart-healthy", "no-cook"],
      },
      {
        name: "Baked Salmon with Lentils & Roasted Beets",
        mealType: "dinner",
        description:
          "Omega-3 rich salmon fillet over French green lentils with roasted beets, arugula, and a Dijon vinaigrette. Every component on this plate actively fights high cholesterol.",
        prepTime: "40 min",
        tags: ["heart-healthy", "high-fiber"],
      },
      {
        name: "Chicken & Black Bean Soup",
        mealType: "dinner",
        description:
          "Hearty soup with shredded chicken, black beans, corn, cumin, and cilantro. Black beans deliver 4g of soluble fiber per serving and make this soup incredibly filling.",
        prepTime: "35 min",
        tags: ["high-fiber", "meal-prep"],
      },
      {
        name: "Handful of Almonds & an Apple",
        mealType: "snack",
        description:
          "A 1-oz portion of raw almonds with a medium apple. Studies show 1oz of almonds daily can lower LDL by 3-5%, and apples add pectin -- a soluble fiber that binds cholesterol.",
        prepTime: "1 min",
        tags: ["heart-healthy", "no-cook"],
      },
    ],
    faqs: [
      {
        question: "Can diet alone lower high cholesterol?",
        answer:
          "For many people, yes. The Portfolio Diet has been shown to lower LDL cholesterol by 20-30% -- comparable to statin drugs for some patients. The key is consistency: regularly eating soluble fiber, plant protein, nuts, and omega-3 rich foods. Our plans make this easy by building these foods into every day without you having to track anything.",
      },
      {
        question: "What are the best foods for lowering LDL cholesterol?",
        answer:
          "The strongest evidence supports: oats and barley (beta-glucan fiber), beans and lentils (soluble fiber), almonds and walnuts (plant sterols and healthy fats), fatty fish like salmon and mackerel (omega-3s), olive oil (monounsaturated fat), and soy protein. Our meal plans incorporate all of these throughout the week.",
      },
      {
        question: "Should I avoid all saturated fat with high cholesterol?",
        answer:
          "You don't need to eliminate saturated fat entirely, but reducing it makes a real difference. The biggest sources to cut are processed meats, full-fat cheese, butter, and fried foods. Our plans use olive oil instead of butter, lean poultry instead of red meat, and moderate portions of cheese when included. Small swaps add up to big changes in your lipid panel.",
      },
      {
        question: "How quickly can diet changes improve cholesterol numbers?",
        answer:
          "Dietary changes can begin lowering LDL cholesterol within 2-3 weeks, with significant improvements typically seen at the 6-8 week mark. That's why most doctors recommend trying diet and lifestyle changes for 3 months before considering medication. Our weekly plans give you a structured, consistent approach for that critical window.",
      },
      {
        question: "Are eggs bad for high cholesterol?",
        answer:
          "Current research shows that dietary cholesterol from eggs has a much smaller impact on blood cholesterol than saturated fat does. Most health organizations say 1 egg per day is fine for most people, even with high cholesterol. Our plans include eggs in moderation, focusing more on reducing saturated fat and increasing soluble fiber, which have a much larger effect on your numbers.",
      },
    ],
    relatedSlugs: [
      "meal-plan-for-heart-health",
      "mediterranean",
      "pescatarian",
      "anti-inflammatory-meal-plan",
    ],
    datePublished: "2026-03-11",
    dateModified: "2026-03-11",
  },
  {
    slug: "hypothyroid-meal-plan",
    type: "diet",
    title: "Hypothyroidism Meal Plan - Thyroid-Supporting Recipes",
    metaDescription:
      "Get a personalized weekly meal plan for hypothyroidism with selenium, iodine, and zinc-rich recipes plus grocery lists. Support thyroid function through food. Try free.",
    h1: "A Meal Plan for Hypothyroidism That Supports Your Thyroid From the Inside Out",
    intro:
      "When your thyroid is underactive, your metabolism slows and everything feels harder -- losing weight, staying warm, keeping energy up. While medication manages hormone levels, the right nutrition can support thyroid function, reduce inflammation, and address nutrient deficiencies that make symptoms worse. We build weekly meal plans rich in selenium, iodine, zinc, and anti-inflammatory foods while being mindful of goitrogens and nutrient interactions that can interfere with your medication.",
    valueProps: [
      {
        heading: "Thyroid-essential nutrients in every meal",
        description:
          "Selenium (Brazil nuts, fish, eggs), iodine (seafood, dairy, seaweed), and zinc (meat, pumpkin seeds, chickpeas) are critical for thyroid hormone production. Our plans ensure you're hitting optimal levels of all three without needing to track micronutrients.",
      },
      {
        heading: "Smart about goitrogens",
        description:
          "Raw cruciferous vegetables (broccoli, kale, cauliflower) can interfere with iodine uptake in large amounts. We don't eliminate these nutrient-dense foods -- instead, we cook them, which significantly reduces goitrogenic compounds while preserving their benefits.",
      },
      {
        heading: "Metabolism-supportive, not crash-diet",
        description:
          "Hypothyroidism already slows your metabolism. Severe calorie restriction makes it worse. Our plans provide adequate calories with metabolism-supporting nutrients so your body has what it needs to produce and convert thyroid hormones efficiently.",
      },
    ],
    sampleMeals: [
      {
        name: "Scrambled Eggs with Smoked Salmon & Sourdough",
        mealType: "breakfast",
        description:
          "Two eggs scrambled with flaked smoked salmon on toasted sourdough. Eggs provide selenium and iodine, salmon adds omega-3s, and this combination supports morning thyroid hormone conversion.",
        prepTime: "10 min",
        tags: ["thyroid-supporting", "quick"],
      },
      {
        name: "Shrimp & Avocado Grain Bowl",
        mealType: "lunch",
        description:
          "Sauteed shrimp (rich in iodine and selenium) over farro with avocado, roasted sweet potato, spinach, and a lemon-herb dressing. Nutrient-dense and satisfying.",
        prepTime: "25 min",
        tags: ["thyroid-supporting", "high-protein"],
      },
      {
        name: "Herb-Crusted Chicken with Roasted Broccoli & Quinoa",
        mealType: "dinner",
        description:
          "Chicken breast with a parsley-walnut crust, served with roasted broccoli (cooking neutralizes goitrogens) and fluffy quinoa. Zinc from chicken, selenium from walnuts.",
        prepTime: "35 min",
        tags: ["thyroid-supporting", "high-protein"],
      },
      {
        name: "Beef & Mushroom Stew with Root Vegetables",
        mealType: "dinner",
        description:
          "Slow-simmered beef chuck with cremini mushrooms, carrots, parsnips, and thyme. Beef is one of the richest sources of zinc, and mushrooms add selenium and vitamin D.",
        prepTime: "45 min",
        tags: ["thyroid-supporting", "meal-prep"],
      },
      {
        name: "Brazil Nuts & Dark Chocolate",
        mealType: "snack",
        description:
          "Two Brazil nuts (providing your entire daily selenium requirement) with two squares of dark chocolate. The simplest thyroid-supporting snack that exists.",
        prepTime: "1 min",
        tags: ["thyroid-supporting", "no-cook"],
      },
    ],
    faqs: [
      {
        question:
          "What nutrients are most important for hypothyroidism?",
        answer:
          "Selenium, iodine, and zinc are the three most critical nutrients for thyroid function. Selenium is needed to convert T4 to active T3 (the hormone your cells use). Iodine is a building block of thyroid hormones. Zinc supports TSH production. Our plans are designed to provide optimal amounts of all three through food sources like Brazil nuts, seafood, eggs, and lean meats.",
      },
      {
        question: "Should I avoid broccoli and kale with hypothyroidism?",
        answer:
          "No -- this is one of the most common myths. Cruciferous vegetables contain goitrogens that can theoretically interfere with iodine uptake, but this only matters if you eat very large amounts raw AND have iodine deficiency. Cooking these vegetables reduces goitrogenic compounds by 80-90%. Our plans always cook cruciferous vegetables and pair them with iodine-rich foods, so you get the fiber and nutrient benefits safely.",
      },
      {
        question:
          "Why is it so hard to lose weight with hypothyroidism?",
        answer:
          "Hypothyroidism slows your basal metabolic rate, meaning you burn fewer calories at rest. It can also cause water retention and fatigue that reduces activity levels. The solution isn't extreme calorie cutting (which further slows metabolism) but rather adequate nutrition with thyroid-supporting nutrients, consistent protein intake, and anti-inflammatory foods. Our plans target a moderate, sustainable deficit if weight loss is your goal.",
      },
      {
        question:
          "Can certain foods interfere with thyroid medication?",
        answer:
          "Yes. Take levothyroxine on an empty stomach, 30-60 minutes before eating. Calcium-rich foods, soy products, high-fiber foods, and coffee can all reduce medication absorption if consumed too close to your dose. Our meal plans are designed with breakfast timing in mind -- no calcium-heavy or soy-based breakfasts that would interfere with morning medication.",
      },
      {
        question: "Is soy bad for thyroid function?",
        answer:
          "Moderate soy intake is fine for most people with hypothyroidism, especially if your iodine levels are adequate. The concern is that soy isoflavones can interfere with thyroid hormone production and medication absorption in large amounts. Our plans use soy in moderation (edamame, occasional tofu) rather than as a primary protein source, and never at breakfast when you'd be taking medication.",
      },
    ],
    relatedSlugs: [
      "anti-inflammatory-meal-plan",
      "gluten-free",
      "meal-plan-for-weight-loss",
      "high-protein-meal-plan",
    ],
    datePublished: "2026-03-11",
    dateModified: "2026-03-11",
  },
];
