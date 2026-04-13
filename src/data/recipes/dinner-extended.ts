import type { FullRecipe } from "./types";

export const dinnerExtendedRecipes: FullRecipe[] = [
  {
    slug: "chicken-alfredo",
    name: "Chicken Alfredo",
    emoji: "\u{1F35D}",
    description:
      "Tender pan-seared chicken breast over fettuccine in a rich, velvety Parmesan cream sauce. A crowd-pleasing Italian-American classic that comes together in 30 minutes.",
    cuisine: "Italian-American",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 4,
    ingredients: [
      { name: "fettuccine", amount: "1", unit: "lb" },
      { name: "boneless skinless chicken breasts", amount: "2", unit: "large" },
      { name: "unsalted butter", amount: "4", unit: "tbsp" },
      { name: "heavy cream", amount: "1.5", unit: "cups" },
      { name: "Parmesan cheese, freshly grated", amount: "1.5", unit: "cups" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "fresh parsley, chopped", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Season chicken breasts with salt and pepper. Heat olive oil in a large skillet over medium-high heat and cook chicken for 6-7 minutes per side until golden and cooked through (165F internal). Rest 5 minutes, then slice.",
      },
      {
        step: 2,
        instruction:
          "While chicken cooks, bring a large pot of salted water to a boil and cook fettuccine according to package directions. Reserve 1 cup pasta water before draining.",
      },
      {
        step: 3,
        instruction:
          "In the same skillet, melt butter over medium heat. Add garlic and cook 30 seconds. Pour in the heavy cream and bring to a gentle simmer.",
      },
      {
        step: 4,
        instruction:
          "Reduce heat to low and gradually stir in the Parmesan until melted and smooth. Season with salt and pepper.",
        tip: "Keep the heat low when adding cheese to prevent it from clumping. Stir constantly for a silky sauce.",
      },
      {
        step: 5,
        instruction:
          "Add the drained fettuccine to the sauce and toss to coat, adding pasta water a splash at a time until the sauce clings to the noodles. Top with sliced chicken and fresh parsley.",
      },
    ],
    nutrition: { calories: 680, protein: 42, carbs: 58, fat: 32, fiber: 3 },
    tags: ["comfort-food", "family-friendly", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["spaghetti-carbonara", "chicken-parmesan", "homemade-lasagna"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "beef-stroganoff",
    name: "Beef Stroganoff",
    emoji: "\u{1F969}",
    description:
      "Tender strips of beef in a rich, tangy sour cream and mushroom sauce served over egg noodles. A hearty Russian-inspired comfort dish perfect for cold evenings.",
    cuisine: "Russian",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 4,
    ingredients: [
      { name: "beef sirloin, sliced into thin strips", amount: "1.5", unit: "lbs" },
      { name: "egg noodles", amount: "12", unit: "oz" },
      { name: "cremini mushrooms, sliced", amount: "8", unit: "oz" },
      { name: "yellow onion, diced", amount: "1", unit: "medium" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "beef broth", amount: "1", unit: "cup" },
      { name: "sour cream", amount: "3/4", unit: "cup" },
      { name: "Dijon mustard", amount: "1", unit: "tbsp" },
      { name: "Worcestershire sauce", amount: "1", unit: "tbsp" },
      { name: "all-purpose flour", amount: "2", unit: "tbsp" },
      { name: "unsalted butter", amount: "2", unit: "tbsp" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "fresh parsley, chopped", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Season beef strips with salt and pepper. Heat olive oil in a large skillet over high heat. Sear beef in batches for 1-2 minutes per side until browned. Remove to a plate.",
        tip: "Don't crowd the pan. Searing in batches ensures a good crust instead of steaming the meat.",
      },
      {
        step: 2,
        instruction:
          "Reduce heat to medium. Add butter, then cook mushrooms for 5 minutes until golden. Add onion and cook 3 more minutes. Add garlic and cook 30 seconds.",
      },
      {
        step: 3,
        instruction:
          "Sprinkle flour over the vegetables and stir for 1 minute. Pour in beef broth, Worcestershire, and Dijon mustard. Stir and bring to a simmer.",
      },
      {
        step: 4,
        instruction:
          "Cook egg noodles according to package directions. Drain and set aside.",
      },
      {
        step: 5,
        instruction:
          "Return beef and any juices to the skillet. Simmer 3 minutes. Remove from heat and stir in sour cream until smooth. Serve over egg noodles topped with parsley.",
        tip: "Add sour cream off the heat to prevent it from curdling.",
      },
    ],
    nutrition: { calories: 620, protein: 44, carbs: 52, fat: 24, fiber: 3 },
    tags: ["comfort-food", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["beef-stew", "swedish-meatballs", "mushroom-risotto"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "lamb-chops",
    name: "Lamb Chops",
    emoji: "\u{1F356}",
    description:
      "Pan-seared lamb chops with a garlic-rosemary butter, cooked to a perfect medium-rare with a beautiful crust. An elegant dinner that takes surprisingly little effort.",
    cuisine: "Mediterranean",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 4,
    ingredients: [
      { name: "lamb rib chops", amount: "8", unit: "chops" },
      { name: "unsalted butter", amount: "3", unit: "tbsp" },
      { name: "garlic cloves, crushed", amount: "4", unit: "cloves" },
      { name: "fresh rosemary sprigs", amount: "3", unit: "sprigs" },
      { name: "fresh thyme sprigs", amount: "3", unit: "sprigs" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "black pepper", amount: "1", unit: "tsp" },
      { name: "lemon wedges", amount: "4", unit: "wedges" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Take lamb chops out of the fridge 30 minutes before cooking to bring to room temperature. Season generously on both sides with salt and pepper.",
        tip: "Room temperature meat cooks more evenly. This is especially important for lamb.",
      },
      {
        step: 2,
        instruction:
          "Heat olive oil in a heavy skillet (cast iron is ideal) over high heat until smoking. Sear chops for 3-4 minutes per side for medium-rare (130F internal).",
      },
      {
        step: 3,
        instruction:
          "In the last minute of cooking, add butter, garlic, rosemary, and thyme to the pan. Tilt the pan and baste the chops with the foaming herb butter for 60 seconds.",
      },
      {
        step: 4,
        instruction:
          "Transfer chops to a plate and rest for 5 minutes. Spoon the pan butter over the chops and serve with lemon wedges.",
      },
    ],
    nutrition: { calories: 480, protein: 38, carbs: 1, fat: 36, fiber: 0 },
    tags: ["high-protein", "low-carb", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["lamb-gyros", "pork-tenderloin", "lemon-herb-roasted-chicken"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "teriyaki-chicken",
    name: "Teriyaki Chicken",
    emoji: "\u{1F357}",
    description:
      "Juicy chicken thighs glazed in a homemade teriyaki sauce with a perfect balance of sweet and savory. Served over steamed rice with sesame seeds and green onion.",
    cuisine: "Japanese",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 4,
    ingredients: [
      { name: "boneless skinless chicken thighs", amount: "2", unit: "lbs" },
      { name: "soy sauce", amount: "1/3", unit: "cup", group: "For the sauce" },
      { name: "mirin", amount: "3", unit: "tbsp", group: "For the sauce" },
      { name: "sake or dry white wine", amount: "2", unit: "tbsp", group: "For the sauce" },
      { name: "brown sugar", amount: "2", unit: "tbsp", group: "For the sauce" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves", group: "For the sauce" },
      { name: "fresh ginger, grated", amount: "1", unit: "tsp", group: "For the sauce" },
      { name: "cornstarch", amount: "1", unit: "tsp", group: "For the sauce" },
      { name: "vegetable oil", amount: "1", unit: "tbsp" },
      { name: "steamed white rice", amount: "3", unit: "cups" },
      { name: "sesame seeds", amount: "1", unit: "tsp" },
      { name: "green onions, sliced", amount: "2", unit: "stalks" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Whisk together soy sauce, mirin, sake, brown sugar, garlic, ginger, and cornstarch in a bowl. Set aside.",
      },
      {
        step: 2,
        instruction:
          "Heat vegetable oil in a large skillet over medium-high heat. Add chicken thighs and cook for 5-6 minutes per side until golden and cooked through. Remove to a plate.",
      },
      {
        step: 3,
        instruction:
          "Pour the sauce into the skillet and bring to a simmer. Cook for 2-3 minutes until thickened and glossy.",
        tip: "The sauce thickens quickly once it starts bubbling. Keep stirring to prevent burning.",
      },
      {
        step: 4,
        instruction:
          "Return chicken to the skillet and turn to coat in the glaze. Cook 1 minute more. Slice the chicken and serve over steamed rice, spooning extra sauce on top. Garnish with sesame seeds and green onions.",
      },
    ],
    nutrition: { calories: 520, protein: 40, carbs: 52, fat: 14, fiber: 1 },
    tags: ["high-protein", "dairy-free", "family-friendly"],
    youtubeVideoId: "6yJjSiAjgWk",
    relatedSlugs: ["chicken-katsu", "thai-basil-chicken", "chicken-fried-rice"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chicken-parmesan",
    name: "Chicken Parmesan",
    emoji: "\u{1F414}",
    description:
      "Crispy breaded chicken cutlets smothered in marinara sauce and melted mozzarella, served over spaghetti. The Italian-American classic done right.",
    cuisine: "Italian-American",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 25,
    totalTime: 45,
    servings: 4,
    ingredients: [
      { name: "boneless skinless chicken breasts", amount: "2", unit: "large" },
      { name: "all-purpose flour", amount: "1/2", unit: "cup", group: "For breading" },
      { name: "large eggs, beaten", amount: "2", unit: "whole", group: "For breading" },
      { name: "panko breadcrumbs", amount: "1", unit: "cup", group: "For breading" },
      { name: "Parmesan cheese, grated", amount: "1/2", unit: "cup", group: "For breading" },
      { name: "marinara sauce", amount: "2", unit: "cups" },
      { name: "mozzarella cheese, shredded", amount: "1.5", unit: "cups" },
      { name: "spaghetti", amount: "12", unit: "oz" },
      { name: "olive oil", amount: "3", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "fresh basil", amount: "4", unit: "leaves" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 425F. Slice each chicken breast horizontally to make 4 thin cutlets. Season with salt and pepper.",
      },
      {
        step: 2,
        instruction:
          "Set up three bowls: flour, beaten eggs, and panko mixed with Parmesan. Dredge each cutlet in flour, dip in egg, then press into the panko mixture.",
        tip: "Use one hand for dry ingredients and the other for wet to avoid clumpy fingers.",
      },
      {
        step: 3,
        instruction:
          "Heat olive oil in an oven-safe skillet over medium-high heat. Pan-fry cutlets for 3 minutes per side until golden. Pour marinara over each cutlet and top with mozzarella.",
      },
      {
        step: 4,
        instruction:
          "Transfer skillet to the oven and bake 10-12 minutes until cheese is melted and bubbly.",
      },
      {
        step: 5,
        instruction:
          "While chicken bakes, cook spaghetti according to package directions. Serve chicken over spaghetti with extra marinara and fresh basil.",
      },
    ],
    nutrition: { calories: 720, protein: 52, carbs: 60, fat: 28, fiber: 4 },
    tags: ["comfort-food", "family-friendly", "high-protein"],
    youtubeVideoId: "gwSOwAe_IVY",
    relatedSlugs: ["chicken-alfredo", "eggplant-parmesan", "homemade-lasagna"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "honey-garlic-shrimp",
    name: "Honey Garlic Shrimp",
    emoji: "\u{1F990}",
    description:
      "Plump shrimp seared in a sticky honey-garlic glaze with a hint of soy and ginger. Ready in 15 minutes, perfect over rice or alongside roasted vegetables.",
    cuisine: "Asian Fusion",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 8,
    totalTime: 18,
    servings: 4,
    ingredients: [
      { name: "large shrimp, peeled and deveined", amount: "1.5", unit: "lbs" },
      { name: "honey", amount: "3", unit: "tbsp", group: "For the sauce" },
      { name: "soy sauce", amount: "2", unit: "tbsp", group: "For the sauce" },
      { name: "garlic cloves, minced", amount: "5", unit: "cloves", group: "For the sauce" },
      { name: "fresh ginger, grated", amount: "1", unit: "tsp", group: "For the sauce" },
      { name: "rice vinegar", amount: "1", unit: "tbsp", group: "For the sauce" },
      { name: "red pepper flakes", amount: "1/4", unit: "tsp" },
      { name: "unsalted butter", amount: "2", unit: "tbsp" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "green onions, sliced", amount: "2", unit: "stalks" },
      { name: "sesame seeds", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Pat shrimp dry with paper towels. Mix honey, soy sauce, garlic, ginger, and rice vinegar in a small bowl.",
      },
      {
        step: 2,
        instruction:
          "Heat olive oil and butter in a large skillet over medium-high heat. Add shrimp in a single layer and cook for 2 minutes per side until pink and curled.",
        tip: "Pat the shrimp very dry for the best sear. Moisture is the enemy of caramelization.",
      },
      {
        step: 3,
        instruction:
          "Pour the honey-garlic sauce into the skillet. Toss shrimp to coat and cook for 1-2 minutes until the sauce is thick and glossy.",
      },
      {
        step: 4,
        instruction:
          "Garnish with green onions, sesame seeds, and red pepper flakes. Serve immediately over steamed rice.",
      },
    ],
    nutrition: { calories: 320, protein: 36, carbs: 18, fat: 12, fiber: 0 },
    tags: ["quick", "high-protein", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["coconut-shrimp", "lemon-butter-salmon", "shrimp-tacos-chipotle-crema"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "lemon-herb-roasted-chicken",
    name: "Lemon Herb Roasted Chicken",
    emoji: "\u{1F357}",
    description:
      "A whole roasted chicken rubbed with lemon, garlic, and fresh herbs, yielding crispy golden skin and incredibly juicy meat. The ultimate Sunday dinner centerpiece.",
    cuisine: "French",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 75,
    totalTime: 90,
    servings: 6,
    ingredients: [
      { name: "whole chicken", amount: "4", unit: "lbs" },
      { name: "lemons", amount: "2", unit: "whole" },
      { name: "garlic head, halved crosswise", amount: "1", unit: "whole" },
      { name: "unsalted butter, softened", amount: "3", unit: "tbsp" },
      { name: "fresh thyme sprigs", amount: "6", unit: "sprigs" },
      { name: "fresh rosemary sprigs", amount: "3", unit: "sprigs" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "2", unit: "tsp" },
      { name: "black pepper", amount: "1", unit: "tsp" },
      { name: "yellow onion, quartered", amount: "1", unit: "medium" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 425F. Pat chicken dry inside and out with paper towels. Season the cavity with salt and pepper.",
        tip: "Drying the skin thoroughly is the single most important step for crispy skin.",
      },
      {
        step: 2,
        instruction:
          "Mix softened butter with the zest of one lemon, chopped thyme leaves, and minced garlic from 2 cloves. Gently loosen the skin over the breast and rub the herb butter under the skin.",
      },
      {
        step: 3,
        instruction:
          "Stuff the cavity with the halved garlic head, quartered onion, remaining lemon halves, and herb sprigs. Truss the legs with kitchen twine.",
      },
      {
        step: 4,
        instruction:
          "Rub the outside with olive oil, salt, and pepper. Place breast-side up on a roasting rack in a pan. Roast for 1 hour 15 minutes until the thigh reaches 165F and juices run clear.",
      },
      {
        step: 5,
        instruction:
          "Rest the chicken for 15 minutes before carving. Spoon the pan juices over the carved meat. Serve with the roasted garlic cloves squeezed out of their skins.",
      },
    ],
    nutrition: { calories: 420, protein: 46, carbs: 4, fat: 24, fiber: 1 },
    tags: ["gluten-free", "high-protein", "family-friendly"],
    youtubeVideoId: null,
    relatedSlugs: ["chicken-marsala", "lamb-chops", "pork-tenderloin"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "pulled-pork-tacos",
    name: "Pulled Pork Tacos",
    emoji: "\u{1F32E}",
    description:
      "Slow-cooked pulled pork in a smoky chipotle sauce, piled into warm tortillas with pickled red onions, cilantro, and a squeeze of lime.",
    cuisine: "Mexican",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 240,
    totalTime: 255,
    servings: 8,
    ingredients: [
      { name: "pork shoulder (bone-in)", amount: "3", unit: "lbs" },
      { name: "chipotle peppers in adobo sauce", amount: "3", unit: "peppers" },
      { name: "orange juice", amount: "1/2", unit: "cup" },
      { name: "lime juice", amount: "2", unit: "tbsp" },
      { name: "ground cumin", amount: "1", unit: "tbsp" },
      { name: "smoked paprika", amount: "1", unit: "tbsp" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves" },
      { name: "salt", amount: "2", unit: "tsp" },
      { name: "corn tortillas", amount: "16", unit: "small" },
      { name: "red onion, thinly sliced", amount: "1", unit: "medium", group: "For topping" },
      { name: "fresh cilantro", amount: "1/2", unit: "cup", group: "For topping" },
      { name: "lime wedges", amount: "8", unit: "wedges", group: "For topping" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Blend chipotles, orange juice, lime juice, cumin, paprika, garlic, and salt into a paste. Rub all over the pork shoulder.",
      },
      {
        step: 2,
        instruction:
          "Place pork in a slow cooker, cover, and cook on low for 8 hours (or high for 4 hours) until the meat falls apart when pulled with two forks.",
        tip: "If you have time, sear the pork in a hot skillet first for deeper flavor. It adds 5 minutes but makes a noticeable difference.",
      },
      {
        step: 3,
        instruction:
          "Shred the pork with two forks, discarding any large pieces of fat. Toss the shredded meat in the cooking juices.",
      },
      {
        step: 4,
        instruction:
          "Quick-pickle the red onion: toss slices with 2 tbsp lime juice and a pinch of salt. Let sit 15 minutes.",
      },
      {
        step: 5,
        instruction:
          "Warm tortillas in a dry skillet. Fill with pulled pork, pickled onion, cilantro, and a squeeze of lime.",
      },
    ],
    nutrition: { calories: 380, protein: 32, carbs: 30, fat: 14, fiber: 4 },
    tags: ["dairy-free", "family-friendly", "meal-prep"],
    youtubeVideoId: null,
    relatedSlugs: ["beef-tacos", "birria-tacos", "chicken-fajitas"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chicken-fried-rice",
    name: "Chicken Fried Rice",
    emoji: "\u{1F35A}",
    description:
      "Better-than-takeout fried rice with tender chicken, scrambled eggs, vegetables, and a savory soy sauce glaze. The secret is day-old rice and a screaming hot wok.",
    cuisine: "Chinese",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 12,
    totalTime: 22,
    servings: 4,
    ingredients: [
      { name: "cooked white rice, day-old and cold", amount: "4", unit: "cups" },
      { name: "boneless skinless chicken breast, diced", amount: "1", unit: "large" },
      { name: "large eggs, beaten", amount: "3", unit: "whole" },
      { name: "frozen peas and carrots", amount: "1", unit: "cup" },
      { name: "soy sauce", amount: "3", unit: "tbsp" },
      { name: "sesame oil", amount: "1", unit: "tbsp" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "vegetable oil", amount: "2", unit: "tbsp" },
      { name: "green onions, sliced", amount: "3", unit: "stalks" },
      { name: "white pepper", amount: "1/4", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat 1 tbsp vegetable oil in a wok or large skillet over high heat. Cook diced chicken for 4-5 minutes until cooked through. Remove to a plate.",
      },
      {
        step: 2,
        instruction:
          "Add remaining oil. Pour in beaten eggs and scramble for 30 seconds until just set. Break into pieces and push to the side.",
      },
      {
        step: 3,
        instruction:
          "Add peas, carrots, and garlic. Stir-fry 1 minute. Add the cold rice, breaking up any clumps, and stir-fry for 3-4 minutes until the rice is hot and slightly crispy.",
        tip: "Day-old rice is essential. Fresh rice has too much moisture and will turn mushy. Spread leftovers on a sheet pan in the fridge overnight.",
      },
      {
        step: 4,
        instruction:
          "Return chicken to the wok. Add soy sauce, sesame oil, and white pepper. Toss everything together for 1 minute. Serve topped with green onions.",
      },
    ],
    nutrition: { calories: 440, protein: 28, carbs: 52, fat: 14, fiber: 3 },
    tags: ["quick", "family-friendly", "dairy-free", "meal-prep"],
    youtubeVideoId: "Zk2aJoFZIaY",
    relatedSlugs: ["kimchi-fried-rice", "teriyaki-chicken", "kung-pao-chicken"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "eggplant-parmesan",
    name: "Eggplant Parmesan",
    emoji: "\u{1F346}",
    description:
      "Layers of crispy breaded eggplant, rich marinara, and melted mozzarella baked until bubbly. A hearty vegetarian dinner that satisfies even the biggest appetites.",
    cuisine: "Italian",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 30,
    cookTime: 35,
    totalTime: 65,
    servings: 6,
    ingredients: [
      { name: "large eggplants, sliced 1/3-inch thick", amount: "2", unit: "large" },
      { name: "all-purpose flour", amount: "1/2", unit: "cup", group: "For breading" },
      { name: "large eggs, beaten", amount: "3", unit: "whole", group: "For breading" },
      { name: "Italian breadcrumbs", amount: "1.5", unit: "cups", group: "For breading" },
      { name: "Parmesan cheese, grated", amount: "3/4", unit: "cup" },
      { name: "marinara sauce", amount: "3", unit: "cups" },
      { name: "mozzarella cheese, shredded", amount: "2", unit: "cups" },
      { name: "olive oil", amount: "4", unit: "tbsp" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "fresh basil", amount: "8", unit: "leaves" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Salt both sides of the eggplant slices and lay on paper towels for 20 minutes to draw out moisture. Pat dry.",
        tip: "This salting step removes bitterness and excess water, which prevents soggy eggplant parm.",
      },
      {
        step: 2,
        instruction:
          "Preheat oven to 375F. Set up breading station: flour, beaten eggs, and breadcrumbs mixed with half the Parmesan. Dredge each eggplant slice through all three.",
      },
      {
        step: 3,
        instruction:
          "Heat olive oil in a large skillet over medium-high heat. Pan-fry eggplant slices for 2-3 minutes per side until golden. Drain on paper towels.",
      },
      {
        step: 4,
        instruction:
          "Spread 1 cup marinara in a 9x13 baking dish. Layer half the eggplant, 1 cup marinara, half the mozzarella, and remaining Parmesan. Repeat layers.",
      },
      {
        step: 5,
        instruction:
          "Cover with foil and bake 20 minutes. Remove foil and bake 15 minutes more until bubbly and golden. Rest 10 minutes, then top with fresh basil and serve.",
      },
    ],
    nutrition: { calories: 480, protein: 24, carbs: 38, fat: 26, fiber: 8 },
    tags: ["vegetarian", "comfort-food", "family-friendly"],
    youtubeVideoId: null,
    relatedSlugs: ["chicken-parmesan", "homemade-lasagna", "ratatouille"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "seafood-paella",
    name: "Seafood Paella",
    emoji: "\u{1F958}",
    description:
      "A vibrant Spanish rice dish loaded with shrimp, mussels, clams, and chorizo, flavored with saffron and smoked paprika. The prized socarrat (crispy rice bottom) is the best part.",
    cuisine: "Spanish",
    mealType: "dinner",
    difficulty: "Advanced",
    prepTime: 20,
    cookTime: 40,
    totalTime: 60,
    servings: 6,
    ingredients: [
      { name: "short-grain rice (Bomba or Calasparra)", amount: "2", unit: "cups" },
      { name: "large shrimp, shell-on", amount: "1", unit: "lb" },
      { name: "mussels, scrubbed and debearded", amount: "1", unit: "lb" },
      { name: "littleneck clams", amount: "12", unit: "whole" },
      { name: "Spanish chorizo, sliced", amount: "4", unit: "oz" },
      { name: "chicken broth", amount: "4", unit: "cups" },
      { name: "saffron threads", amount: "1/4", unit: "tsp" },
      { name: "smoked paprika", amount: "1", unit: "tsp" },
      { name: "yellow onion, diced", amount: "1", unit: "medium" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves" },
      { name: "canned diced tomatoes, drained", amount: "1", unit: "cup" },
      { name: "olive oil", amount: "3", unit: "tbsp" },
      { name: "frozen peas", amount: "1/2", unit: "cup" },
      { name: "lemon wedges", amount: "6", unit: "wedges" },
      { name: "salt", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Warm broth in a saucepan. Crumble in the saffron threads and let steep for 10 minutes.",
      },
      {
        step: 2,
        instruction:
          "Heat olive oil in a 14-inch paella pan (or wide, shallow skillet) over medium-high heat. Sear chorizo for 2 minutes. Add shrimp and cook 1 minute per side. Remove both to a plate.",
      },
      {
        step: 3,
        instruction:
          "In the same pan, cook onion for 4 minutes. Add garlic, tomatoes, and paprika. Cook 2 minutes. Add rice and stir to coat in the oil for 1 minute.",
      },
      {
        step: 4,
        instruction:
          "Pour in the saffron broth and salt. Stir once (and only once), then arrange clams and mussels into the rice. Bring to a boil, then reduce to medium-low. Cook uncovered for 18-20 minutes without stirring.",
        tip: "Resist the urge to stir. The undisturbed rice forms the socarrat, the prized crispy bottom layer.",
      },
      {
        step: 5,
        instruction:
          "Nestle shrimp and chorizo back in during the last 5 minutes. Scatter peas on top. When the liquid is absorbed and you hear a faint crackling, remove from heat. Cover loosely with foil and rest 5 minutes. Serve with lemon wedges.",
      },
    ],
    nutrition: { calories: 560, protein: 38, carbs: 58, fat: 18, fiber: 3 },
    tags: ["gluten-free", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["jambalaya", "miso-glazed-salmon", "lemon-butter-salmon"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "pork-chops-apple-sauce",
    name: "Pork Chops with Apple Sauce",
    emoji: "\u{1F437}",
    description:
      "Thick-cut bone-in pork chops pan-seared to a golden crust, served with a warm homemade cinnamon apple sauce. A classic pairing that never gets old.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    servings: 4,
    ingredients: [
      { name: "bone-in pork chops (1-inch thick)", amount: "4", unit: "chops" },
      { name: "Granny Smith apples, peeled and diced", amount: "3", unit: "medium", group: "For the sauce" },
      { name: "unsalted butter", amount: "2", unit: "tbsp", group: "For the sauce" },
      { name: "brown sugar", amount: "2", unit: "tbsp", group: "For the sauce" },
      { name: "ground cinnamon", amount: "1/2", unit: "tsp", group: "For the sauce" },
      { name: "water", amount: "1/4", unit: "cup", group: "For the sauce" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "fresh thyme", amount: "4", unit: "sprigs" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Start the apple sauce: melt butter in a saucepan over medium heat. Add diced apples, brown sugar, cinnamon, and water. Cover and cook for 15 minutes, stirring occasionally, until apples are soft. Mash to desired consistency.",
      },
      {
        step: 2,
        instruction:
          "While sauce cooks, pat pork chops dry and season generously with salt and pepper on both sides.",
      },
      {
        step: 3,
        instruction:
          "Heat olive oil in a large skillet over medium-high heat. Sear pork chops for 4-5 minutes per side until golden brown and internal temperature reaches 145F.",
        tip: "Let the chops rest for 5 minutes after cooking. The temperature will rise another 5 degrees and the juices redistribute.",
      },
      {
        step: 4,
        instruction:
          "Serve the pork chops with a generous spoonful of warm apple sauce and fresh thyme sprigs.",
      },
    ],
    nutrition: { calories: 440, protein: 36, carbs: 22, fat: 24, fiber: 3 },
    tags: ["gluten-free", "family-friendly", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["pork-tenderloin", "lemon-herb-roasted-chicken", "lamb-chops"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "beef-tacos",
    name: "Beef Tacos",
    emoji: "\u{1F32E}",
    description:
      "Seasoned ground beef in warm corn tortillas with fresh pico de gallo, shredded cheese, and a drizzle of crema. A weeknight staple the whole family loves.",
    cuisine: "Mexican",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 4,
    ingredients: [
      { name: "ground beef (80/20)", amount: "1.5", unit: "lbs" },
      { name: "chili powder", amount: "2", unit: "tsp" },
      { name: "ground cumin", amount: "1", unit: "tsp" },
      { name: "garlic powder", amount: "1", unit: "tsp" },
      { name: "smoked paprika", amount: "1/2", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "water", amount: "1/3", unit: "cup" },
      { name: "corn tortillas", amount: "12", unit: "small" },
      { name: "Roma tomatoes, diced", amount: "2", unit: "medium", group: "For pico de gallo" },
      { name: "white onion, finely diced", amount: "1/4", unit: "medium", group: "For pico de gallo" },
      { name: "fresh cilantro, chopped", amount: "3", unit: "tbsp", group: "For pico de gallo" },
      { name: "lime juice", amount: "1", unit: "tbsp", group: "For pico de gallo" },
      { name: "shredded Mexican cheese", amount: "1/2", unit: "cup" },
      { name: "Mexican crema or sour cream", amount: "4", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Make the pico de gallo: combine diced tomatoes, onion, cilantro, lime juice, and a pinch of salt. Set aside.",
      },
      {
        step: 2,
        instruction:
          "Brown the ground beef in a large skillet over medium-high heat, breaking it up with a spoon, for 6-8 minutes until fully cooked. Drain excess fat.",
      },
      {
        step: 3,
        instruction:
          "Add chili powder, cumin, garlic powder, paprika, salt, and water to the beef. Stir and simmer for 5 minutes until the sauce thickens and coats the meat.",
      },
      {
        step: 4,
        instruction:
          "Warm tortillas in a dry skillet for 30 seconds per side. Fill with seasoned beef, pico de gallo, shredded cheese, and a drizzle of crema. Serve with lime wedges.",
        tip: "Double up the corn tortillas (two per taco) to prevent them from falling apart.",
      },
    ],
    nutrition: { calories: 460, protein: 34, carbs: 32, fat: 22, fiber: 5 },
    tags: ["quick", "family-friendly", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["pulled-pork-tacos", "birria-tacos", "chicken-fajitas"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "thai-red-curry",
    name: "Thai Red Curry",
    emoji: "\u{1F35B}",
    description:
      "A fragrant coconut milk curry with chicken, bamboo shoots, bell peppers, and Thai basil. Rich, slightly spicy, and ready in under 30 minutes.",
    cuisine: "Thai",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 4,
    ingredients: [
      { name: "boneless skinless chicken thighs, sliced", amount: "1.5", unit: "lbs" },
      { name: "red curry paste", amount: "3", unit: "tbsp" },
      { name: "coconut milk (full-fat)", amount: "14", unit: "oz" },
      { name: "chicken broth", amount: "1/2", unit: "cup" },
      { name: "fish sauce", amount: "2", unit: "tbsp" },
      { name: "brown sugar", amount: "1", unit: "tbsp" },
      { name: "red bell pepper, sliced", amount: "1", unit: "large" },
      { name: "bamboo shoots, drained", amount: "1/2", unit: "cup" },
      { name: "Thai basil leaves", amount: "1/4", unit: "cup" },
      { name: "vegetable oil", amount: "1", unit: "tbsp" },
      { name: "steamed jasmine rice", amount: "3", unit: "cups" },
      { name: "lime juice", amount: "1", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat vegetable oil in a large saucepan or wok over medium-high heat. Add the red curry paste and fry for 1 minute until fragrant and darkened.",
        tip: "Frying the curry paste in oil first blooms the spices and develops a much deeper flavor than adding it directly to liquid.",
      },
      {
        step: 2,
        instruction:
          "Pour in half the coconut milk and stir until the paste is dissolved. Add the chicken and cook for 5 minutes.",
      },
      {
        step: 3,
        instruction:
          "Add remaining coconut milk, chicken broth, fish sauce, and brown sugar. Bring to a simmer. Add bell pepper and bamboo shoots. Cook 10 minutes until chicken is cooked through.",
      },
      {
        step: 4,
        instruction:
          "Stir in lime juice and Thai basil. Serve over steamed jasmine rice.",
      },
    ],
    nutrition: { calories: 520, protein: 36, carbs: 42, fat: 24, fiber: 2 },
    tags: ["dairy-free", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["green-curry", "thai-basil-chicken", "tom-yum-soup"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chicken-marsala",
    name: "Chicken Marsala",
    emoji: "\u{1F357}",
    description:
      "Tender chicken cutlets in a rich Marsala wine and mushroom sauce. An Italian restaurant classic that is surprisingly simple to make at home.",
    cuisine: "Italian",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    servings: 4,
    ingredients: [
      { name: "boneless skinless chicken breasts, halved horizontally", amount: "2", unit: "large" },
      { name: "cremini mushrooms, sliced", amount: "8", unit: "oz" },
      { name: "Marsala wine (dry)", amount: "3/4", unit: "cup" },
      { name: "chicken broth", amount: "1/2", unit: "cup" },
      { name: "all-purpose flour", amount: "1/3", unit: "cup" },
      { name: "unsalted butter", amount: "3", unit: "tbsp" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "shallot, minced", amount: "1", unit: "large" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "heavy cream", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "fresh parsley, chopped", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Season chicken cutlets with salt and pepper. Dredge in flour, shaking off excess.",
      },
      {
        step: 2,
        instruction:
          "Heat olive oil and 1 tbsp butter in a large skillet over medium-high heat. Cook chicken for 3-4 minutes per side until golden. Remove to a plate.",
      },
      {
        step: 3,
        instruction:
          "Add remaining butter, mushrooms, and shallot. Cook for 5 minutes until mushrooms are golden. Add garlic and cook 30 seconds.",
      },
      {
        step: 4,
        instruction:
          "Pour in the Marsala wine and scrape up any browned bits from the pan. Let it reduce by half, about 3 minutes. Add chicken broth and simmer 3 more minutes.",
        tip: "Use a dry Marsala, not sweet. The sauce already gets sweetness from the reduced wine.",
      },
      {
        step: 5,
        instruction:
          "Stir in the heavy cream. Return chicken to the pan and simmer for 3 minutes until heated through and the sauce coats the back of a spoon. Garnish with parsley.",
      },
    ],
    nutrition: { calories: 420, protein: 38, carbs: 18, fat: 20, fiber: 1 },
    tags: ["high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["chicken-alfredo", "mushroom-risotto", "lemon-herb-roasted-chicken"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "lemon-butter-salmon",
    name: "Lemon Butter Salmon",
    emoji: "\u{1F41F}",
    description:
      "Pan-seared salmon fillets with crispy skin, finished in a lemon-butter-caper sauce. Elegant enough for date night, easy enough for a Tuesday.",
    cuisine: "French",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 12,
    totalTime: 17,
    servings: 4,
    ingredients: [
      { name: "salmon fillets, skin-on", amount: "4", unit: "6-oz fillets" },
      { name: "unsalted butter", amount: "3", unit: "tbsp" },
      { name: "lemon juice", amount: "2", unit: "tbsp" },
      { name: "lemon zest", amount: "1", unit: "tsp" },
      { name: "capers, drained", amount: "1", unit: "tbsp" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "fresh dill", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Pat salmon dry and season skin-side and flesh with salt and pepper. Let sit at room temperature for 10 minutes.",
      },
      {
        step: 2,
        instruction:
          "Heat olive oil in a large skillet over medium-high heat. Place salmon skin-side down and press gently with a spatula for 30 seconds to prevent curling. Cook 4-5 minutes until skin is crispy.",
        tip: "Start skin-side down in a hot pan and don't move the fish. The skin will release naturally when it's crispy.",
      },
      {
        step: 3,
        instruction:
          "Flip and cook 2-3 minutes more for medium (still slightly pink in the center). Remove to plates.",
      },
      {
        step: 4,
        instruction:
          "Reduce heat to medium. Add butter, garlic, and capers to the pan. Cook 1 minute. Add lemon juice and zest, swirl to combine. Spoon the sauce over the salmon and garnish with fresh dill.",
      },
    ],
    nutrition: { calories: 380, protein: 36, carbs: 2, fat: 26, fiber: 0 },
    tags: ["quick", "high-protein", "low-carb", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["miso-glazed-salmon", "honey-garlic-shrimp", "herb-crusted-baked-cod"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "shepherds-pie",
    name: "Shepherd's Pie",
    emoji: "\u{1F969}",
    description:
      "A hearty British classic with seasoned ground lamb in a rich gravy, topped with creamy mashed potatoes and baked until golden. Pure comfort food.",
    cuisine: "British",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 35,
    totalTime: 55,
    servings: 6,
    ingredients: [
      { name: "ground lamb", amount: "1.5", unit: "lbs" },
      { name: "russet potatoes, peeled and cubed", amount: "2", unit: "lbs", group: "For the topping" },
      { name: "unsalted butter", amount: "4", unit: "tbsp", group: "For the topping" },
      { name: "milk", amount: "1/2", unit: "cup", group: "For the topping" },
      { name: "yellow onion, diced", amount: "1", unit: "medium" },
      { name: "carrots, diced", amount: "2", unit: "medium" },
      { name: "frozen peas", amount: "1", unit: "cup" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "tomato paste", amount: "2", unit: "tbsp" },
      { name: "beef broth", amount: "1", unit: "cup" },
      { name: "Worcestershire sauce", amount: "1", unit: "tbsp" },
      { name: "fresh thyme", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Boil potatoes in salted water for 15 minutes until tender. Drain, then mash with butter, milk, and 1/2 tsp salt until smooth.",
      },
      {
        step: 2,
        instruction:
          "While potatoes cook, brown the lamb in a large oven-safe skillet over medium-high heat for 6-8 minutes. Drain excess fat, leaving about 1 tbsp.",
      },
      {
        step: 3,
        instruction:
          "Add onion and carrots to the lamb. Cook 5 minutes. Add garlic and tomato paste, cook 1 minute. Pour in broth, Worcestershire, and thyme. Simmer 8 minutes until thickened. Stir in peas.",
      },
      {
        step: 4,
        instruction:
          "Preheat oven to 400F. Spread mashed potatoes over the lamb filling, creating peaks with a fork for extra crispiness.",
        tip: "Start from the edges and work inward to create a seal that prevents the filling from bubbling over.",
      },
      {
        step: 5,
        instruction:
          "Bake for 20-25 minutes until the top is golden and the filling is bubbling around the edges. Rest 10 minutes before serving.",
      },
    ],
    nutrition: { calories: 520, protein: 32, carbs: 42, fat: 24, fiber: 6 },
    tags: ["comfort-food", "family-friendly"],
    youtubeVideoId: null,
    relatedSlugs: ["beef-stew", "lamb-chops", "stuffed-bell-peppers"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chicken-fajitas",
    name: "Chicken Fajitas",
    emoji: "\u{1F32E}",
    description:
      "Sizzling strips of marinated chicken with charred bell peppers and onions, served with warm flour tortillas and all the fixings.",
    cuisine: "Tex-Mex",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    servings: 4,
    ingredients: [
      { name: "boneless skinless chicken breasts, sliced into strips", amount: "1.5", unit: "lbs" },
      { name: "bell peppers (mixed colors), sliced", amount: "3", unit: "medium" },
      { name: "yellow onion, sliced", amount: "1", unit: "large" },
      { name: "lime juice", amount: "3", unit: "tbsp", group: "For the marinade" },
      { name: "olive oil", amount: "3", unit: "tbsp", group: "For the marinade" },
      { name: "chili powder", amount: "1", unit: "tbsp" },
      { name: "ground cumin", amount: "1", unit: "tsp" },
      { name: "garlic powder", amount: "1", unit: "tsp" },
      { name: "smoked paprika", amount: "1/2", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "flour tortillas (8-inch)", amount: "8", unit: "whole" },
      { name: "sour cream", amount: "1/2", unit: "cup" },
      { name: "fresh cilantro", amount: "1/4", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Toss chicken strips with lime juice, 2 tbsp olive oil, chili powder, cumin, garlic powder, paprika, and salt. Marinate for at least 15 minutes (up to 2 hours in the fridge).",
      },
      {
        step: 2,
        instruction:
          "Heat remaining olive oil in a large skillet or cast iron over high heat. Cook chicken strips for 5-6 minutes, turning once, until charred and cooked through. Remove to a plate.",
        tip: "High heat is key for fajitas. You want a sear, not a steam. Don't overcrowd the pan.",
      },
      {
        step: 3,
        instruction:
          "In the same hot pan, add peppers and onion. Cook for 4-5 minutes until slightly charred but still crisp. Return chicken to the pan and toss together.",
      },
      {
        step: 4,
        instruction:
          "Warm tortillas in a dry skillet or directly over a gas flame. Serve the sizzling fajita mix with warm tortillas, sour cream, and cilantro.",
      },
    ],
    nutrition: { calories: 460, protein: 38, carbs: 38, fat: 18, fiber: 4 },
    tags: ["high-protein", "family-friendly", "quick"],
    youtubeVideoId: "g-LT0igt9lo",
    relatedSlugs: ["beef-tacos", "pulled-pork-tacos", "chicken-quesadilla"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "pork-tenderloin",
    name: "Pork Tenderloin",
    emoji: "\u{1F356}",
    description:
      "Herb-crusted pork tenderloin, seared and roasted to juicy perfection with a honey-mustard pan sauce. Lean, flavorful, and ready in 30 minutes.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 10,
    cookTime: 22,
    totalTime: 32,
    servings: 4,
    ingredients: [
      { name: "pork tenderloin", amount: "1.5", unit: "lbs" },
      { name: "Dijon mustard", amount: "2", unit: "tbsp" },
      { name: "honey", amount: "1", unit: "tbsp" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "fresh rosemary, chopped", amount: "1", unit: "tbsp" },
      { name: "fresh thyme, chopped", amount: "1", unit: "tsp" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "unsalted butter", amount: "2", unit: "tbsp" },
      { name: "chicken broth", amount: "1/3", unit: "cup" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 400F. Mix Dijon, honey, garlic, rosemary, and thyme. Season pork with salt and pepper, then spread the mustard mixture all over.",
      },
      {
        step: 2,
        instruction:
          "Heat olive oil in an oven-safe skillet over medium-high heat. Sear the tenderloin for 2 minutes on each side until browned all over.",
      },
      {
        step: 3,
        instruction:
          "Transfer the skillet to the oven and roast for 15-18 minutes until internal temperature reaches 145F. Remove and rest for 8 minutes before slicing.",
        tip: "Use an instant-read thermometer. Pork tenderloin goes from perfect to overcooked quickly.",
      },
      {
        step: 4,
        instruction:
          "While pork rests, add butter and chicken broth to the skillet over medium heat. Scrape up the browned bits and simmer for 2 minutes. Drizzle the pan sauce over sliced tenderloin.",
      },
    ],
    nutrition: { calories: 340, protein: 42, carbs: 6, fat: 16, fiber: 0 },
    tags: ["high-protein", "low-carb", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["pork-chops-apple-sauce", "lamb-chops", "lemon-herb-roasted-chicken"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "mongolian-beef",
    name: "Mongolian Beef",
    emoji: "\u{1F969}",
    description:
      "Crispy-coated beef strips in a sweet and savory ginger-garlic sauce, piled over steamed rice with green onions. Better than your favorite takeout spot.",
    cuisine: "Chinese-American",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    servings: 4,
    ingredients: [
      { name: "flank steak, sliced thin against the grain", amount: "1.5", unit: "lbs" },
      { name: "cornstarch", amount: "1/4", unit: "cup" },
      { name: "soy sauce", amount: "1/3", unit: "cup", group: "For the sauce" },
      { name: "brown sugar", amount: "1/3", unit: "cup", group: "For the sauce" },
      { name: "water", amount: "1/4", unit: "cup", group: "For the sauce" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves", group: "For the sauce" },
      { name: "fresh ginger, grated", amount: "1", unit: "tbsp", group: "For the sauce" },
      { name: "vegetable oil", amount: "3", unit: "tbsp" },
      { name: "green onions, cut into 2-inch pieces", amount: "5", unit: "stalks" },
      { name: "steamed white rice", amount: "3", unit: "cups" },
      { name: "red pepper flakes", amount: "1/4", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Toss the sliced beef in cornstarch until fully coated. Shake off excess.",
      },
      {
        step: 2,
        instruction:
          "Heat vegetable oil in a large wok or skillet over high heat. Fry the beef in batches for 2-3 minutes per batch until crispy on the edges. Remove to a plate.",
        tip: "Don't skip the high heat. The cornstarch coating needs high heat to get crispy. Low heat will just make it gummy.",
      },
      {
        step: 3,
        instruction:
          "Whisk together soy sauce, brown sugar, water, garlic, ginger, and red pepper flakes. Pour into the wok and bring to a boil. Cook 2 minutes until slightly thickened.",
      },
      {
        step: 4,
        instruction:
          "Return beef to the wok. Add green onions and toss for 1 minute until everything is coated. Serve immediately over steamed rice.",
      },
    ],
    nutrition: { calories: 520, protein: 38, carbs: 50, fat: 18, fiber: 1 },
    tags: ["dairy-free", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["beef-bulgogi", "kung-pao-chicken", "chicken-fried-rice"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chicken-adobo",
    name: "Chicken Adobo",
    emoji: "\u{1F357}",
    description:
      "The national dish of the Philippines. Chicken braised in a tangy vinegar, soy sauce, garlic, and bay leaf sauce until fall-off-the-bone tender. Simple ingredients, extraordinary flavor.",
    cuisine: "Filipino",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 35,
    totalTime: 45,
    servings: 4,
    ingredients: [
      { name: "chicken thighs, bone-in skin-on", amount: "3", unit: "lbs" },
      { name: "white vinegar", amount: "1/2", unit: "cup" },
      { name: "soy sauce", amount: "1/2", unit: "cup" },
      { name: "garlic cloves, crushed", amount: "8", unit: "cloves" },
      { name: "bay leaves", amount: "3", unit: "leaves" },
      { name: "whole black peppercorns", amount: "1", unit: "tsp" },
      { name: "brown sugar", amount: "1", unit: "tbsp" },
      { name: "vegetable oil", amount: "1", unit: "tbsp" },
      { name: "steamed white rice", amount: "3", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Combine vinegar, soy sauce, garlic, bay leaves, peppercorns, and brown sugar in a large bowl. Add chicken and marinate for at least 30 minutes (up to overnight in the fridge).",
      },
      {
        step: 2,
        instruction:
          "Heat vegetable oil in a large skillet or Dutch oven over medium-high heat. Remove chicken from the marinade (reserve it) and sear skin-side down for 3-4 minutes until golden.",
      },
      {
        step: 3,
        instruction:
          "Pour the reserved marinade into the pan. Bring to a boil, then reduce to low, cover, and simmer for 30 minutes until chicken is very tender.",
        tip: "Don't lift the lid during the first 20 minutes. The vinegar smell mellows as it cooks. Trust the process.",
      },
      {
        step: 4,
        instruction:
          "Uncover and increase heat to medium. Simmer 5 more minutes to thicken the sauce. Serve over rice with plenty of sauce spooned on top.",
      },
    ],
    nutrition: { calories: 460, protein: 40, carbs: 38, fat: 16, fiber: 0 },
    tags: ["dairy-free", "budget", "meal-prep"],
    youtubeVideoId: null,
    relatedSlugs: ["teriyaki-chicken", "jerk-chicken", "thai-basil-chicken"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "coconut-shrimp",
    name: "Coconut Shrimp",
    emoji: "\u{1F990}",
    description:
      "Crispy golden shrimp coated in sweet shredded coconut and panko, served with a tangy Thai sweet chili dipping sauce. A restaurant-quality appetizer turned dinner.",
    cuisine: "Caribbean",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 10,
    totalTime: 30,
    servings: 4,
    ingredients: [
      { name: "large shrimp, peeled and deveined (tail on)", amount: "1.5", unit: "lbs" },
      { name: "sweetened shredded coconut", amount: "1", unit: "cup", group: "For breading" },
      { name: "panko breadcrumbs", amount: "1/2", unit: "cup", group: "For breading" },
      { name: "all-purpose flour", amount: "1/2", unit: "cup", group: "For breading" },
      { name: "large eggs, beaten", amount: "2", unit: "whole", group: "For breading" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "vegetable oil (for frying)", amount: "2", unit: "cups" },
      { name: "Thai sweet chili sauce", amount: "1/2", unit: "cup", group: "For dipping" },
      { name: "lime wedges", amount: "4", unit: "wedges" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Set up three shallow bowls: flour seasoned with salt and pepper, beaten eggs, and coconut mixed with panko.",
      },
      {
        step: 2,
        instruction:
          "Hold each shrimp by the tail. Dredge in flour, dip in egg, then press firmly into the coconut-panko mixture to coat on all sides.",
        tip: "Press the coconut coating on firmly. A light coating will fall off during frying.",
      },
      {
        step: 3,
        instruction:
          "Heat vegetable oil to 350F in a deep skillet or Dutch oven. Fry shrimp in batches of 5-6 for 2-3 minutes, turning once, until golden brown. Drain on paper towels.",
      },
      {
        step: 4,
        instruction:
          "Serve immediately with Thai sweet chili sauce for dipping and lime wedges on the side.",
      },
    ],
    nutrition: { calories: 420, protein: 32, carbs: 34, fat: 18, fiber: 3 },
    tags: ["dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["honey-garlic-shrimp", "fish-and-chips", "shrimp-tacos-chipotle-crema"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "lamb-gyros",
    name: "Lamb Gyros",
    emoji: "\u{1F959}",
    description:
      "Spiced ground lamb formed into a loaf, sliced thin, and served in warm pita with tomatoes, red onion, and homemade tzatziki. A Greek street food favorite.",
    cuisine: "Greek",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 25,
    totalTime: 45,
    servings: 6,
    ingredients: [
      { name: "ground lamb", amount: "1.5", unit: "lbs" },
      { name: "yellow onion, grated and squeezed dry", amount: "1/2", unit: "medium" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves" },
      { name: "dried oregano", amount: "1", unit: "tbsp" },
      { name: "ground cumin", amount: "1", unit: "tsp" },
      { name: "ground coriander", amount: "1/2", unit: "tsp" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "plain Greek yogurt", amount: "1", unit: "cup", group: "For tzatziki" },
      { name: "English cucumber, grated and squeezed dry", amount: "1/2", unit: "medium", group: "For tzatziki" },
      { name: "lemon juice", amount: "1", unit: "tbsp", group: "For tzatziki" },
      { name: "garlic clove, minced", amount: "1", unit: "clove", group: "For tzatziki" },
      { name: "pita bread", amount: "6", unit: "rounds" },
      { name: "Roma tomatoes, sliced", amount: "2", unit: "medium" },
      { name: "red onion, thinly sliced", amount: "1/2", unit: "small" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 350F. Combine lamb, grated onion, garlic, oregano, cumin, coriander, salt, and pepper. Mix well and press into a compact loaf shape on a sheet pan lined with foil.",
      },
      {
        step: 2,
        instruction:
          "Bake for 25 minutes until the internal temperature is 160F. Let rest 10 minutes, then slice as thin as possible.",
        tip: "Packing the meat tightly and slicing thin mimics the texture of rotisserie gyro meat.",
      },
      {
        step: 3,
        instruction:
          "Make the tzatziki: combine Greek yogurt, grated cucumber, lemon juice, garlic, and a pinch of salt. Refrigerate until ready to serve.",
      },
      {
        step: 4,
        instruction:
          "Warm pita in a dry skillet or oven. Layer with sliced lamb, tomatoes, red onion, and a generous drizzle of tzatziki.",
      },
    ],
    nutrition: { calories: 480, protein: 34, carbs: 32, fat: 22, fiber: 2 },
    tags: ["high-protein", "mediterranean"],
    youtubeVideoId: null,
    relatedSlugs: ["lamb-chops", "falafel-bowl", "chicken-shawarma-plate"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "meatball-subs",
    name: "Meatball Subs",
    emoji: "\u{1F96A}",
    description:
      "Juicy Italian-seasoned meatballs smothered in marinara and melted mozzarella, stuffed into a toasted hoagie roll. Messy, cheesy, and absolutely worth it.",
    cuisine: "Italian-American",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 25,
    totalTime: 45,
    servings: 4,
    ingredients: [
      { name: "ground beef", amount: "1", unit: "lb", group: "For the meatballs" },
      { name: "Italian sausage, casings removed", amount: "1/2", unit: "lb", group: "For the meatballs" },
      { name: "Italian breadcrumbs", amount: "1/3", unit: "cup", group: "For the meatballs" },
      { name: "large egg", amount: "1", unit: "whole", group: "For the meatballs" },
      { name: "Parmesan cheese, grated", amount: "1/4", unit: "cup", group: "For the meatballs" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves", group: "For the meatballs" },
      { name: "dried Italian herbs", amount: "1", unit: "tsp", group: "For the meatballs" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "marinara sauce", amount: "2", unit: "cups" },
      { name: "mozzarella cheese, sliced", amount: "8", unit: "oz" },
      { name: "hoagie rolls", amount: "4", unit: "rolls" },
      { name: "unsalted butter", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 400F. Combine beef, sausage, breadcrumbs, egg, Parmesan, garlic, herbs, and salt in a bowl. Mix gently and form into 16 meatballs.",
        tip: "Don't overmix the meat. Handle it as little as possible for tender meatballs.",
      },
      {
        step: 2,
        instruction:
          "Place meatballs on a parchment-lined sheet pan and bake for 15 minutes until cooked through.",
      },
      {
        step: 3,
        instruction:
          "Heat marinara sauce in a saucepan. Add the baked meatballs and simmer for 5 minutes.",
      },
      {
        step: 4,
        instruction:
          "Split hoagie rolls, butter the insides, and toast cut-side down in a skillet until golden. Fill each roll with 4 meatballs, plenty of sauce, and sliced mozzarella. Broil for 2 minutes until cheese is melted and bubbly.",
      },
    ],
    nutrition: { calories: 680, protein: 42, carbs: 48, fat: 34, fiber: 4 },
    tags: ["comfort-food", "family-friendly", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["swedish-meatballs", "chicken-parmesan", "homemade-lasagna"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "gnocchi-brown-butter-sage",
    name: "Gnocchi with Brown Butter Sage",
    emoji: "\u{1F95F}",
    description:
      "Pillowy potato gnocchi tossed in nutty brown butter with crispy fried sage leaves and a shower of Parmesan. Five ingredients, ten minutes, restaurant-quality results.",
    cuisine: "Italian",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    servings: 4,
    ingredients: [
      { name: "potato gnocchi (store-bought)", amount: "1", unit: "lb" },
      { name: "unsalted butter", amount: "4", unit: "tbsp" },
      { name: "fresh sage leaves", amount: "12", unit: "leaves" },
      { name: "Parmesan cheese, grated", amount: "1/2", unit: "cup" },
      { name: "salt", amount: "1/2", unit: "tsp" },
      { name: "black pepper", amount: "1/4", unit: "tsp" },
      { name: "pine nuts (optional)", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Bring a large pot of salted water to a boil. Cook gnocchi according to package directions (usually 2-3 minutes, until they float). Drain, reserving 1/2 cup cooking water.",
      },
      {
        step: 2,
        instruction:
          "Melt butter in a large skillet over medium heat. Continue cooking, swirling the pan, for 3-4 minutes until the butter turns golden brown and smells nutty. Watch carefully; it goes from brown to burnt quickly.",
        tip: "Use a light-colored pan so you can see the butter change color. The milk solids will turn from white to golden to amber.",
      },
      {
        step: 3,
        instruction:
          "Add sage leaves to the brown butter and fry for 30 seconds until crispy. Add pine nuts if using and toast 30 seconds.",
      },
      {
        step: 4,
        instruction:
          "Add the drained gnocchi and toss gently to coat. Add a splash of cooking water if needed. Season with salt and pepper. Serve with a generous amount of grated Parmesan.",
      },
    ],
    nutrition: { calories: 420, protein: 14, carbs: 46, fat: 22, fiber: 2 },
    tags: ["vegetarian", "quick"],
    youtubeVideoId: null,
    relatedSlugs: ["cacio-e-pepe", "mushroom-risotto", "spaghetti-carbonara"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "jambalaya",
    name: "Jambalaya",
    emoji: "\u{1F372}",
    description:
      "A one-pot Cajun classic packed with andouille sausage, chicken, and shrimp in a spicy tomato-rice stew. Louisiana soul food at its finest.",
    cuisine: "Cajun",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 35,
    totalTime: 50,
    servings: 6,
    ingredients: [
      { name: "boneless skinless chicken thighs, cubed", amount: "1", unit: "lb" },
      { name: "andouille sausage, sliced", amount: "12", unit: "oz" },
      { name: "large shrimp, peeled and deveined", amount: "1/2", unit: "lb" },
      { name: "long-grain white rice", amount: "1.5", unit: "cups" },
      { name: "diced tomatoes (canned)", amount: "14", unit: "oz" },
      { name: "chicken broth", amount: "2.5", unit: "cups" },
      { name: "yellow onion, diced", amount: "1", unit: "large" },
      { name: "celery stalks, diced", amount: "2", unit: "stalks" },
      { name: "green bell pepper, diced", amount: "1", unit: "medium" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "Cajun seasoning", amount: "2", unit: "tbsp" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "bay leaves", amount: "2", unit: "leaves" },
      { name: "green onions, sliced", amount: "3", unit: "stalks" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat olive oil in a large Dutch oven over medium-high heat. Brown the chicken for 3 minutes per side. Remove to a plate. Brown the sausage for 2 minutes. Remove.",
      },
      {
        step: 2,
        instruction:
          "In the same pot, cook the 'holy trinity' (onion, celery, bell pepper) for 5 minutes. Add garlic and Cajun seasoning, cook 1 minute.",
      },
      {
        step: 3,
        instruction:
          "Add diced tomatoes, chicken broth, rice, bay leaves, and the browned chicken and sausage. Stir, bring to a boil, then reduce to low. Cover and cook for 20 minutes.",
        tip: "Don't peek or stir during the 20 minutes. The rice needs undisturbed steam to cook properly.",
      },
      {
        step: 4,
        instruction:
          "Nestle the shrimp into the rice, cover, and cook 5 more minutes until shrimp are pink and rice is tender. Fluff with a fork, remove bay leaves, and garnish with green onions.",
      },
    ],
    nutrition: { calories: 540, protein: 40, carbs: 48, fat: 20, fiber: 3 },
    tags: ["one-pan", "dairy-free", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["seafood-paella", "chicken-fried-rice", "jerk-chicken"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chicken-katsu",
    name: "Chicken Katsu",
    emoji: "\u{1F357}",
    description:
      "Japanese-style crispy panko-breaded chicken cutlets served with tonkatsu sauce, shredded cabbage, and steamed rice. Crunchy, juicy, and deeply satisfying.",
    cuisine: "Japanese",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    servings: 4,
    ingredients: [
      { name: "boneless skinless chicken breasts", amount: "2", unit: "large" },
      { name: "panko breadcrumbs", amount: "1.5", unit: "cups" },
      { name: "all-purpose flour", amount: "1/2", unit: "cup" },
      { name: "large eggs, beaten", amount: "2", unit: "whole" },
      { name: "vegetable oil (for frying)", amount: "1", unit: "cup" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "tonkatsu sauce", amount: "4", unit: "tbsp" },
      { name: "green cabbage, finely shredded", amount: "2", unit: "cups" },
      { name: "steamed white rice", amount: "3", unit: "cups" },
      { name: "lemon wedges", amount: "4", unit: "wedges" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Slice each chicken breast horizontally into 2 thin cutlets. Place between plastic wrap and pound to an even 1/2-inch thickness. Season with salt and pepper.",
      },
      {
        step: 2,
        instruction:
          "Set up three bowls: flour, beaten eggs, and panko. Coat each cutlet in flour, dip in egg, then press firmly into panko on both sides.",
        tip: "For extra crunch, let the breaded cutlets rest on a wire rack for 5 minutes before frying. The coating sets and stays crispier.",
      },
      {
        step: 3,
        instruction:
          "Heat vegetable oil in a deep skillet to 350F (about 1/2 inch deep). Fry cutlets for 3 minutes per side until deep golden brown and cooked through. Drain on a wire rack.",
      },
      {
        step: 4,
        instruction:
          "Slice katsu into strips. Serve over rice with shredded cabbage, tonkatsu sauce, and lemon wedges.",
      },
    ],
    nutrition: { calories: 520, protein: 38, carbs: 52, fat: 16, fiber: 3 },
    tags: ["family-friendly", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["teriyaki-chicken", "chicken-fried-rice", "japanese-curry-rice"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "swedish-meatballs",
    name: "Swedish Meatballs",
    emoji: "\u{1F9C6}",
    description:
      "Tender pork and beef meatballs in a creamy gravy with a hint of allspice, served over egg noodles with a dollop of lingonberry jam. IKEA eat your heart out.",
    cuisine: "Swedish",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 20,
    totalTime: 40,
    servings: 4,
    ingredients: [
      { name: "ground beef", amount: "1/2", unit: "lb", group: "For the meatballs" },
      { name: "ground pork", amount: "1/2", unit: "lb", group: "For the meatballs" },
      { name: "breadcrumbs", amount: "1/3", unit: "cup", group: "For the meatballs" },
      { name: "large egg", amount: "1", unit: "whole", group: "For the meatballs" },
      { name: "milk", amount: "1/4", unit: "cup", group: "For the meatballs" },
      { name: "yellow onion, finely grated", amount: "1/4", unit: "medium", group: "For the meatballs" },
      { name: "ground allspice", amount: "1/4", unit: "tsp", group: "For the meatballs" },
      { name: "ground nutmeg", amount: "1/8", unit: "tsp", group: "For the meatballs" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "unsalted butter", amount: "3", unit: "tbsp", group: "For the gravy" },
      { name: "all-purpose flour", amount: "2", unit: "tbsp", group: "For the gravy" },
      { name: "beef broth", amount: "1.5", unit: "cups", group: "For the gravy" },
      { name: "heavy cream", amount: "1/2", unit: "cup", group: "For the gravy" },
      { name: "soy sauce", amount: "1", unit: "tsp", group: "For the gravy" },
      { name: "egg noodles", amount: "12", unit: "oz" },
      { name: "lingonberry jam", amount: "4", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Soak breadcrumbs in milk for 5 minutes. Combine with beef, pork, egg, grated onion, allspice, nutmeg, and 1/2 tsp salt. Mix gently and form into 24 small meatballs.",
      },
      {
        step: 2,
        instruction:
          "Melt 1 tbsp butter in a large skillet over medium heat. Brown meatballs in batches for 3-4 minutes, turning to brown all sides. They don't need to be cooked through yet. Remove to a plate.",
      },
      {
        step: 3,
        instruction:
          "In the same skillet, melt remaining butter. Whisk in flour and cook for 1 minute. Gradually whisk in beef broth, then heavy cream and soy sauce. Bring to a simmer.",
        tip: "The soy sauce adds depth without making it taste Asian. It's the secret ingredient in many Swedish meatball recipes.",
      },
      {
        step: 4,
        instruction:
          "Return meatballs to the gravy. Simmer covered for 10 minutes until cooked through. Cook egg noodles according to package directions. Serve meatballs and gravy over noodles with a dollop of lingonberry jam.",
      },
    ],
    nutrition: { calories: 580, protein: 32, carbs: 52, fat: 26, fiber: 2 },
    tags: ["comfort-food", "family-friendly"],
    youtubeVideoId: null,
    relatedSlugs: ["beef-stroganoff", "meatball-subs", "shepherds-pie"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "pozole-rojo",
    name: "Pozole Rojo",
    emoji: "\u{1F372}",
    description:
      "A rich and hearty Mexican pork and hominy stew in a deep red chile broth, topped with shredded cabbage, radishes, oregano, and lime. Traditional celebration food.",
    cuisine: "Mexican",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 90,
    totalTime: 110,
    servings: 8,
    ingredients: [
      { name: "pork shoulder, cut into 2-inch chunks", amount: "2", unit: "lbs" },
      { name: "canned hominy, drained", amount: "29", unit: "oz" },
      { name: "dried guajillo chiles, stemmed and seeded", amount: "4", unit: "whole" },
      { name: "dried ancho chiles, stemmed and seeded", amount: "2", unit: "whole" },
      { name: "yellow onion, quartered", amount: "1", unit: "large" },
      { name: "garlic cloves", amount: "4", unit: "cloves" },
      { name: "chicken broth", amount: "6", unit: "cups" },
      { name: "dried Mexican oregano", amount: "1", unit: "tsp" },
      { name: "ground cumin", amount: "1", unit: "tsp" },
      { name: "salt", amount: "2", unit: "tsp" },
      { name: "green cabbage, shredded", amount: "2", unit: "cups", group: "For garnish" },
      { name: "radishes, thinly sliced", amount: "6", unit: "whole", group: "For garnish" },
      { name: "limes, quartered", amount: "3", unit: "whole", group: "For garnish" },
      { name: "dried oregano", amount: "1", unit: "tsp", group: "For garnish" },
      { name: "tostadas or tortilla chips", amount: "8", unit: "pieces", group: "For garnish" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Toast the dried chiles in a dry skillet for 1-2 minutes until fragrant and pliable. Soak in hot water for 15 minutes. Blend with 1 cup of the soaking liquid until smooth. Strain through a sieve.",
      },
      {
        step: 2,
        instruction:
          "In a large pot or Dutch oven, combine pork, quartered onion, garlic, chicken broth, cumin, and salt. Bring to a boil, then reduce to low and simmer for 1 hour, skimming any foam.",
        tip: "Low and slow is the key to tender pork. Don't rush it by increasing the heat.",
      },
      {
        step: 3,
        instruction:
          "Remove pork and shred with two forks. Strain the broth and return to the pot. Add the shredded pork, chile sauce, hominy, and oregano. Simmer 30 minutes.",
      },
      {
        step: 4,
        instruction:
          "Serve in deep bowls with shredded cabbage, sliced radishes, a squeeze of lime, dried oregano, and tostadas on the side.",
      },
    ],
    nutrition: { calories: 420, protein: 34, carbs: 32, fat: 16, fiber: 6 },
    tags: ["dairy-free", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["birria-tacos", "pulled-pork-tacos", "beef-stew"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "tom-yum-soup",
    name: "Tom Yum Soup",
    emoji: "\u{1F35C}",
    description:
      "A hot and sour Thai soup with shrimp, mushrooms, lemongrass, galangal, and kaffir lime leaves. Bright, aromatic, and deeply comforting with every spoonful.",
    cuisine: "Thai",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    servings: 4,
    ingredients: [
      { name: "large shrimp, peeled and deveined", amount: "1", unit: "lb" },
      { name: "chicken broth", amount: "4", unit: "cups" },
      { name: "lemongrass stalks, bruised and cut into 2-inch pieces", amount: "2", unit: "stalks" },
      { name: "galangal or ginger, sliced", amount: "5", unit: "slices" },
      { name: "kaffir lime leaves", amount: "4", unit: "leaves" },
      { name: "oyster mushrooms, torn", amount: "4", unit: "oz" },
      { name: "cherry tomatoes, halved", amount: "1", unit: "cup" },
      { name: "Thai bird chiles, bruised", amount: "3", unit: "whole" },
      { name: "fish sauce", amount: "3", unit: "tbsp" },
      { name: "lime juice", amount: "3", unit: "tbsp" },
      { name: "brown sugar", amount: "1", unit: "tsp" },
      { name: "nam prik pao (Thai chili paste)", amount: "2", unit: "tbsp" },
      { name: "fresh cilantro", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Bring chicken broth to a boil in a medium pot. Add lemongrass, galangal, kaffir lime leaves, and Thai chiles. Simmer for 5 minutes to infuse the aromatics.",
      },
      {
        step: 2,
        instruction:
          "Add mushrooms and tomatoes. Cook 3 minutes. Stir in nam prik pao and fish sauce.",
      },
      {
        step: 3,
        instruction:
          "Add shrimp and cook for 3-4 minutes until pink and curled. Remove from heat.",
        tip: "Add the lime juice off the heat to preserve its bright flavor. Cooking it dulls the acidity.",
      },
      {
        step: 4,
        instruction:
          "Stir in lime juice and sugar. Taste and adjust: more fish sauce for salt, more lime for sour, more sugar for sweet. Garnish with cilantro and serve hot.",
      },
    ],
    nutrition: { calories: 220, protein: 28, carbs: 12, fat: 6, fiber: 2 },
    tags: ["dairy-free", "gluten-free", "low-carb", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["thai-red-curry", "pad-thai", "green-curry"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
];
