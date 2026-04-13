import type { FullRecipe } from "./types";

export const dinnerRecipes: FullRecipe[] = [
  {
    slug: "spaghetti-carbonara",
    name: "Spaghetti Carbonara",
    emoji: "\u{1F35D}",
    description:
      "The authentic Roman pasta with a silky sauce made from eggs, Pecorino Romano, guanciale, and black pepper. No cream needed when you nail the technique.",
    cuisine: "Italian",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 4,
    ingredients: [
      { name: "spaghetti", amount: "1", unit: "lb" },
      { name: "guanciale or pancetta, diced", amount: "6", unit: "oz" },
      { name: "large egg yolks", amount: "4", unit: "whole" },
      { name: "large whole egg", amount: "1", unit: "whole" },
      { name: "Pecorino Romano, finely grated", amount: "1", unit: "cup" },
      { name: "freshly cracked black pepper", amount: "1", unit: "tsp" },
      { name: "salt (for pasta water)", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Bring a large pot of water to a boil and season heavily with salt. It should taste like the sea.",
      },
      {
        step: 2,
        instruction:
          "While water heats, cook the guanciale in a cold skillet over medium heat, stirring occasionally, for 6-8 minutes until crispy and the fat has rendered. Remove from heat.",
      },
      {
        step: 3,
        instruction:
          "In a bowl, whisk together the egg yolks, whole egg, grated Pecorino, and black pepper until smooth.",
        tip: "Use room-temperature eggs for a smoother sauce. Cold eggs can shock and scramble on contact with hot pasta.",
      },
      {
        step: 4,
        instruction:
          "Cook the spaghetti 1 minute less than the package directions (al dente). Reserve 1 cup of starchy pasta water before draining.",
      },
      {
        step: 5,
        instruction:
          "Add the drained pasta to the skillet with the guanciale (off the heat). Toss to coat in the rendered fat.",
      },
      {
        step: 6,
        instruction:
          "Pour the egg-cheese mixture over the pasta and toss vigorously for 60 seconds, adding splashes of pasta water until you get a creamy, glossy sauce that coats each strand.",
        tip: "The skillet must be OFF the heat when you add the egg mixture. The residual heat is enough. Direct heat will scramble the eggs.",
      },
      {
        step: 7,
        instruction:
          "Serve immediately with extra grated Pecorino and black pepper on top.",
      },
    ],
    nutrition: { calories: 560, protein: 26, carbs: 62, fat: 22, fiber: 3 },
    tags: ["comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["cacio-e-pepe", "one-pot-mac-and-cheese", "homemade-lasagna"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "cacio-e-pepe",
    name: "Cacio e Pepe",
    emoji: "\u{1F9C0}",
    description:
      "Rome's simplest and most elegant pasta. Just three ingredients: pasta, Pecorino Romano, and black pepper, combined into a creamy, peppery masterpiece.",
    cuisine: "Italian",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 5,
    cookTime: 15,
    totalTime: 20,
    servings: 2,
    ingredients: [
      { name: "tonnarelli or spaghetti", amount: "8", unit: "oz" },
      { name: "Pecorino Romano, finely grated", amount: "1.5", unit: "cups" },
      { name: "freshly cracked black pepper", amount: "1.5", unit: "tsp" },
      { name: "salt (for pasta water)", amount: "1", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Toast the black pepper in a large dry skillet over medium heat for 1-2 minutes until fragrant. Add a ladle of pasta water (once boiling) and let it simmer.",
      },
      {
        step: 2,
        instruction:
          "Bring a pot of water to a boil with salt. Cook the pasta 2 minutes less than package directions.",
      },
      {
        step: 3,
        instruction:
          "Meanwhile, place the grated Pecorino in a bowl. Add 2-3 tablespoons of warm (not hot) pasta water and stir vigorously to form a thick paste.",
        tip: "The water must be warm, not boiling. Boiling water will cause the cheese to clump into a ball instead of forming a cream.",
      },
      {
        step: 4,
        instruction:
          "Transfer the pasta directly from the pot to the pepper skillet using tongs (bringing starchy water with it). Toss over medium-low heat for 1 minute.",
      },
      {
        step: 5,
        instruction:
          "Remove from heat. Add the cheese paste and toss aggressively, adding small splashes of pasta water, until you have a glossy, creamy coating on every strand.",
      },
      {
        step: 6,
        instruction: "Serve immediately with extra Pecorino and pepper on top.",
      },
    ],
    nutrition: { calories: 480, protein: 22, carbs: 56, fat: 18, fiber: 2 },
    tags: ["vegetarian", "quick"],
    youtubeVideoId: null,
    relatedSlugs: ["spaghetti-carbonara", "one-pot-mac-and-cheese", "mushroom-risotto"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "one-pot-mac-and-cheese",
    name: "One-Pot Mac and Cheese",
    emoji: "\u{1F9C0}",
    description:
      "Impossibly creamy stovetop mac and cheese made in a single pot. Sharp cheddar and Gruyere melted into a velvety sauce that clings to every noodle.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 20,
    totalTime: 25,
    servings: 4,
    ingredients: [
      { name: "elbow macaroni", amount: "1", unit: "lb" },
      { name: "whole milk", amount: "3", unit: "cups" },
      { name: "water", amount: "1", unit: "cup" },
      { name: "sharp cheddar cheese, shredded", amount: "8", unit: "oz" },
      { name: "Gruyere cheese, shredded", amount: "4", unit: "oz" },
      { name: "unsalted butter", amount: "2", unit: "tbsp" },
      { name: "Dijon mustard", amount: "1", unit: "tsp" },
      { name: "garlic powder", amount: "1/2", unit: "tsp" },
      { name: "smoked paprika", amount: "1/4", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Combine the macaroni, milk, water, butter, and salt in a large pot. Bring to a boil over medium-high heat, stirring frequently to prevent sticking.",
      },
      {
        step: 2,
        instruction:
          "Reduce heat to medium-low. Simmer uncovered, stirring every 2 minutes, for 10-12 minutes until the pasta is cooked and the liquid has reduced to a thick, starchy sauce.",
        tip: "Stir frequently. The milk will scorch on the bottom if left unattended.",
      },
      {
        step: 3,
        instruction:
          "Remove from heat. Add the shredded cheddar and Gruyere in handfuls, stirring after each addition until fully melted and smooth.",
      },
      {
        step: 4,
        instruction:
          "Stir in the Dijon mustard, garlic powder, smoked paprika, and pepper. The sauce will thicken as it sits.",
      },
      {
        step: 5,
        instruction:
          "Let rest for 3-4 minutes before serving. The sauce will continue to thicken to the perfect consistency.",
      },
    ],
    nutrition: { calories: 580, protein: 28, carbs: 56, fat: 26, fiber: 2 },
    tags: ["comfort-food", "one-pan", "family-friendly", "vegetarian"],
    youtubeVideoId: null,
    relatedSlugs: ["spaghetti-carbonara", "cacio-e-pepe", "homemade-lasagna"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "butter-chicken",
    name: "Butter Chicken",
    emoji: "\u{1F35B}",
    description:
      "Tender chicken pieces simmered in a rich, mildly spiced tomato-butter sauce with a hint of cream. The most beloved dish in Indian cuisine for good reason.",
    cuisine: "Indian",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    ingredients: [
      { name: "boneless skinless chicken thighs, cubed", amount: "1.5", unit: "lbs", group: "For the chicken" },
      { name: "plain yogurt", amount: "1/2", unit: "cup", group: "For the chicken" },
      { name: "garam masala", amount: "1", unit: "tsp", group: "For the chicken" },
      { name: "ground turmeric", amount: "1/2", unit: "tsp", group: "For the chicken" },
      { name: "canned crushed tomatoes", amount: "14", unit: "oz", group: "For the sauce" },
      { name: "unsalted butter", amount: "3", unit: "tbsp", group: "For the sauce" },
      { name: "heavy cream", amount: "1/2", unit: "cup", group: "For the sauce" },
      { name: "yellow onion, diced", amount: "1", unit: "medium", group: "For the sauce" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves", group: "For the sauce" },
      { name: "fresh ginger, grated", amount: "1", unit: "tbsp", group: "For the sauce" },
      { name: "ground cumin", amount: "1", unit: "tsp", group: "For the sauce" },
      { name: "chili powder", amount: "1/2", unit: "tsp", group: "For the sauce" },
      { name: "sugar", amount: "1", unit: "tsp", group: "For the sauce" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "fresh cilantro for garnish", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Marinate the chicken cubes in yogurt, garam masala, turmeric, and 1/2 tsp salt for at least 15 minutes.",
      },
      {
        step: 2,
        instruction:
          "Melt 1 tbsp butter in a large skillet over medium-high heat. Sear the chicken pieces for 3-4 minutes until browned on all sides (they don't need to be cooked through). Remove and set aside.",
      },
      {
        step: 3,
        instruction:
          "In the same skillet, melt the remaining butter. Saute the onion for 4-5 minutes until softened. Add garlic, ginger, cumin, and chili powder. Cook for 1 minute.",
      },
      {
        step: 4,
        instruction:
          "Add the crushed tomatoes, sugar, and remaining salt. Simmer for 10 minutes until the sauce thickens.",
      },
      {
        step: 5,
        instruction:
          "Blend the sauce with an immersion blender until smooth (or leave chunky if preferred). Stir in the heavy cream.",
      },
      {
        step: 6,
        instruction:
          "Return the chicken to the sauce. Simmer on low for 10 minutes until the chicken is cooked through and tender.",
      },
      {
        step: 7,
        instruction:
          "Garnish with fresh cilantro. Serve over basmati rice or with warm naan bread.",
      },
    ],
    nutrition: { calories: 480, protein: 36, carbs: 16, fat: 30, fiber: 3 },
    tags: ["comfort-food", "high-protein", "gluten-free", "spicy"],
    youtubeVideoId: "mrDJ2K3JXsA",
    relatedSlugs: ["chicken-tikka-masala", "green-curry", "japanese-curry-rice"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chicken-tikka-masala",
    name: "Chicken Tikka Masala",
    emoji: "\u{1F356}",
    description:
      "Charred yogurt-marinated chicken pieces in a creamy, spiced tomato sauce. A British-Indian classic that delivers deep flavor without being too heavy on the heat.",
    cuisine: "Indian",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 30,
    totalTime: 50,
    servings: 4,
    ingredients: [
      { name: "boneless skinless chicken breasts, cubed", amount: "1.5", unit: "lbs", group: "For the tikka" },
      { name: "plain yogurt", amount: "1/2", unit: "cup", group: "For the tikka" },
      { name: "lemon juice", amount: "1", unit: "tbsp", group: "For the tikka" },
      { name: "ground cumin", amount: "1", unit: "tsp", group: "For the tikka" },
      { name: "garam masala", amount: "1.5", unit: "tsp", group: "For the tikka" },
      { name: "smoked paprika", amount: "1", unit: "tsp", group: "For the tikka" },
      { name: "canned crushed tomatoes", amount: "14", unit: "oz", group: "For the sauce" },
      { name: "heavy cream", amount: "1/2", unit: "cup", group: "For the sauce" },
      { name: "unsalted butter", amount: "2", unit: "tbsp", group: "For the sauce" },
      { name: "yellow onion, finely diced", amount: "1", unit: "medium", group: "For the sauce" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves", group: "For the sauce" },
      { name: "fresh ginger, grated", amount: "1", unit: "tbsp", group: "For the sauce" },
      { name: "ground coriander", amount: "1", unit: "tsp", group: "For the sauce" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "basmati rice", amount: "1.5", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Combine the chicken with yogurt, lemon juice, cumin, 1 tsp garam masala, paprika, and 1/2 tsp salt. Marinate for at least 20 minutes (or up to overnight in the fridge).",
      },
      {
        step: 2,
        instruction:
          "Preheat your broiler to high. Spread the chicken on a foil-lined baking sheet and broil for 4-5 minutes per side until charred in spots. Set aside.",
        tip: "Watch the broiler closely. The difference between perfectly charred and burnt is about 30 seconds.",
      },
      {
        step: 3,
        instruction:
          "Melt butter in a large pan over medium heat. Saute the onion for 5 minutes. Add garlic, ginger, coriander, and remaining garam masala. Cook 1 minute.",
      },
      {
        step: 4,
        instruction:
          "Add crushed tomatoes and remaining salt. Simmer for 15 minutes, stirring occasionally, until thickened.",
      },
      {
        step: 5,
        instruction:
          "Stir in the heavy cream and add the broiled chicken pieces. Simmer for 5 more minutes until everything is heated through.",
      },
      {
        step: 6,
        instruction:
          "Serve over steamed basmati rice with warm naan on the side.",
      },
    ],
    nutrition: { calories: 520, protein: 40, carbs: 38, fat: 22, fiber: 3 },
    tags: ["high-protein", "comfort-food", "spicy"],
    youtubeVideoId: null,
    relatedSlugs: ["butter-chicken", "green-curry", "chicken-shawarma-plate"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "beef-stew",
    name: "Beef Stew",
    emoji: "\u{1F372}",
    description:
      "A hearty, slow-simmered stew with tender chunks of beef, potatoes, carrots, and celery in a rich, savory broth. The kind of meal that fills the house with incredible aroma.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 120,
    totalTime: 140,
    servings: 6,
    ingredients: [
      { name: "beef chuck, cut into 1.5-inch cubes", amount: "2", unit: "lbs" },
      { name: "all-purpose flour", amount: "3", unit: "tbsp" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "yellow onion, diced", amount: "1", unit: "large" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves" },
      { name: "carrots, cut into 1-inch chunks", amount: "3", unit: "large" },
      { name: "Yukon Gold potatoes, quartered", amount: "1.5", unit: "lbs" },
      { name: "celery stalks, sliced", amount: "2", unit: "stalks" },
      { name: "beef broth", amount: "4", unit: "cups" },
      { name: "tomato paste", amount: "2", unit: "tbsp" },
      { name: "Worcestershire sauce", amount: "1", unit: "tbsp" },
      { name: "dried thyme", amount: "1", unit: "tsp" },
      { name: "bay leaves", amount: "2", unit: "whole" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "black pepper", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Pat the beef cubes dry with paper towels. Season with salt and pepper, then toss in flour to coat evenly.",
        tip: "Dry beef sears better. Wet beef steams instead of browning, which means less flavor.",
      },
      {
        step: 2,
        instruction:
          "Heat olive oil in a large Dutch oven over medium-high heat. Sear the beef in batches (don't crowd the pot) for 2-3 minutes per side until deeply browned. Remove and set aside.",
      },
      {
        step: 3,
        instruction:
          "In the same pot, saute the onion for 3-4 minutes. Add garlic and tomato paste, cook for 1 minute. Deglaze with a splash of beef broth, scraping up the browned bits from the bottom.",
      },
      {
        step: 4,
        instruction:
          "Return the beef to the pot. Add the remaining broth, Worcestershire, thyme, and bay leaves. Bring to a boil, then reduce to a low simmer. Cover and cook for 1 hour.",
      },
      {
        step: 5,
        instruction:
          "Add the potatoes, carrots, and celery. Continue simmering covered for another 45-60 minutes until the beef and vegetables are fork-tender.",
      },
      {
        step: 6,
        instruction:
          "Remove the bay leaves. Taste and adjust seasoning. The stew should be thick and rich. If too thin, simmer uncovered for 10 more minutes.",
      },
    ],
    nutrition: { calories: 440, protein: 36, carbs: 34, fat: 18, fiber: 5 },
    tags: ["comfort-food", "meal-prep", "dairy-free", "high-protein"],
    youtubeVideoId: "dE2wx6Mv_ik",
    relatedSlugs: ["homemade-lasagna", "ratatouille", "stuffed-bell-peppers"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "mushroom-risotto",
    name: "Mushroom Risotto",
    emoji: "\u{1F344}",
    description:
      "Creamy Arborio rice slowly cooked with a mix of wild mushrooms, white wine, and finished with Parmesan and butter. The epitome of Italian comfort cooking.",
    cuisine: "Italian",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 10,
    cookTime: 35,
    totalTime: 45,
    servings: 4,
    ingredients: [
      { name: "Arborio rice", amount: "1.5", unit: "cups" },
      { name: "mixed mushrooms (cremini, shiitake, oyster), sliced", amount: "12", unit: "oz" },
      { name: "vegetable or chicken broth, warmed", amount: "5", unit: "cups" },
      { name: "dry white wine", amount: "1/2", unit: "cup" },
      { name: "yellow onion, finely diced", amount: "1", unit: "small" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "unsalted butter", amount: "3", unit: "tbsp" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "Parmesan cheese, grated", amount: "3/4", unit: "cup" },
      { name: "fresh thyme leaves", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat olive oil and 1 tbsp butter in a large heavy-bottomed pan over medium-high heat. Saute the mushrooms for 5-6 minutes until golden brown and all moisture has evaporated. Season with salt and remove to a plate.",
      },
      {
        step: 2,
        instruction:
          "In the same pan, add 1 tbsp butter. Saute the onion for 3-4 minutes until translucent. Add garlic and cook 30 seconds.",
      },
      {
        step: 3,
        instruction:
          "Add the Arborio rice and stir for 1-2 minutes until the edges become slightly translucent. Pour in the white wine and stir until fully absorbed.",
      },
      {
        step: 4,
        instruction:
          "Add the warm broth one ladle at a time (about 3/4 cup), stirring frequently. Wait until each addition is mostly absorbed before adding the next. This takes about 18-20 minutes total.",
        tip: "The broth must be warm. Cold broth shocks the rice and slows cooking, leading to a gummy texture.",
      },
      {
        step: 5,
        instruction:
          "When the rice is creamy and al dente (tender with a slight bite in the center), remove from heat. Fold in the mushrooms, remaining butter, Parmesan, and thyme.",
      },
      {
        step: 6,
        instruction:
          "Let rest for 2 minutes. The risotto should spread slowly when plated, not sit in a stiff mound. Adjust with a splash of broth if too thick. Season with pepper and serve.",
      },
    ],
    nutrition: { calories: 460, protein: 14, carbs: 56, fat: 18, fiber: 3 },
    tags: ["vegetarian", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["cacio-e-pepe", "ratatouille", "spaghetti-carbonara"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "homemade-lasagna",
    name: "Homemade Lasagna",
    emoji: "\u{1F9C1}",
    description:
      "Layers of tender pasta, rich meat sauce, creamy ricotta, and melted mozzarella baked until bubbly and golden. A labor of love that feeds a crowd.",
    cuisine: "Italian",
    mealType: "dinner",
    difficulty: "Advanced",
    prepTime: 30,
    cookTime: 60,
    totalTime: 90,
    servings: 8,
    ingredients: [
      { name: "lasagna noodles", amount: "12", unit: "sheets" },
      { name: "ground beef", amount: "1", unit: "lb", group: "For the meat sauce" },
      { name: "Italian sausage, casings removed", amount: "1/2", unit: "lb", group: "For the meat sauce" },
      { name: "canned crushed tomatoes", amount: "28", unit: "oz", group: "For the meat sauce" },
      { name: "tomato paste", amount: "2", unit: "tbsp", group: "For the meat sauce" },
      { name: "yellow onion, diced", amount: "1", unit: "medium", group: "For the meat sauce" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves", group: "For the meat sauce" },
      { name: "dried oregano", amount: "1", unit: "tsp", group: "For the meat sauce" },
      { name: "ricotta cheese", amount: "15", unit: "oz", group: "For the filling" },
      { name: "large egg", amount: "1", unit: "whole", group: "For the filling" },
      { name: "fresh basil, chopped", amount: "2", unit: "tbsp", group: "For the filling" },
      { name: "mozzarella cheese, shredded", amount: "1", unit: "lb" },
      { name: "Parmesan cheese, grated", amount: "1/2", unit: "cup" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Cook the lasagna noodles according to package directions. Drain, toss lightly with olive oil to prevent sticking, and lay flat on a sheet pan.",
      },
      {
        step: 2,
        instruction:
          "Heat olive oil in a large pot over medium-high heat. Brown the ground beef and sausage, breaking it up, for 6-8 minutes. Drain excess fat.",
      },
      {
        step: 3,
        instruction:
          "Add the onion and cook 4 minutes. Add garlic, tomato paste, and oregano, cook 1 minute. Pour in crushed tomatoes and salt. Simmer for 20 minutes.",
      },
      {
        step: 4,
        instruction:
          "In a bowl, mix the ricotta, egg, and basil until smooth.",
      },
      {
        step: 5,
        instruction:
          "Preheat oven to 375F. In a 9x13 baking dish, spread 1/2 cup of meat sauce on the bottom. Layer: 3 noodles, 1/3 of ricotta mixture, 1/3 of remaining meat sauce, 1/4 of the mozzarella. Repeat layers twice more. Top with remaining noodles and mozzarella, and sprinkle with Parmesan.",
        tip: "Make sure each layer goes edge to edge. Gaps create dry spots.",
      },
      {
        step: 6,
        instruction:
          "Cover tightly with foil and bake for 25 minutes. Remove foil and bake for another 20-25 minutes until bubbly and golden on top.",
      },
      {
        step: 7,
        instruction:
          "Let the lasagna rest for 15 minutes before cutting. This is critical. It allows the layers to set so the slices hold together.",
      },
    ],
    nutrition: { calories: 520, protein: 34, carbs: 38, fat: 26, fiber: 4 },
    tags: ["comfort-food", "family-friendly", "meal-prep"],
    youtubeVideoId: "fVDsTP-pTXs",
    relatedSlugs: ["spaghetti-carbonara", "one-pot-mac-and-cheese", "beef-stew"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "miso-glazed-salmon",
    name: "Miso Glazed Salmon",
    emoji: "\u{1F3A3}",
    description:
      "Salmon fillets glazed with sweet white miso, mirin, and a touch of brown sugar, then broiled until caramelized. Served over steamed rice with roasted broccolini.",
    cuisine: "Japanese",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 12,
    totalTime: 22,
    servings: 2,
    ingredients: [
      { name: "salmon fillets, skin-on", amount: "2", unit: "6-oz fillets", group: "For the salmon" },
      { name: "white miso paste", amount: "2", unit: "tbsp", group: "For the glaze" },
      { name: "mirin", amount: "1", unit: "tbsp", group: "For the glaze" },
      { name: "soy sauce", amount: "1", unit: "tsp", group: "For the glaze" },
      { name: "brown sugar", amount: "1", unit: "tbsp", group: "For the glaze" },
      { name: "rice vinegar", amount: "1", unit: "tsp", group: "For the glaze" },
      { name: "steamed white rice", amount: "2", unit: "cups" },
      { name: "broccolini", amount: "6", unit: "oz" },
      { name: "sesame oil", amount: "1", unit: "tsp" },
      { name: "sesame seeds", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Whisk together the miso paste, mirin, soy sauce, brown sugar, and rice vinegar until smooth. Coat the salmon fillets with the glaze and let sit for at least 10 minutes.",
      },
      {
        step: 2,
        instruction:
          "Preheat your broiler to high. Line a baking sheet with foil and lightly oil it.",
      },
      {
        step: 3,
        instruction:
          "Toss the broccolini with sesame oil, salt, and place on one side of the baking sheet. Place the glazed salmon skin-side down on the other side.",
      },
      {
        step: 4,
        instruction:
          "Broil for 8-10 minutes, watching carefully, until the glaze is caramelized and bubbly and the salmon flakes easily with a fork.",
        tip: "If the glaze starts to burn before the salmon is done, move the rack down one position.",
      },
      {
        step: 5,
        instruction:
          "Serve the salmon and broccolini over steamed rice. Sprinkle with sesame seeds.",
      },
    ],
    nutrition: { calories: 480, protein: 36, carbs: 48, fat: 14, fiber: 3 },
    tags: ["high-protein", "quick", "dairy-free"],
    youtubeVideoId: "I0i64bbXBvc",
    relatedSlugs: ["herb-crusted-baked-cod", "salmon-poke-bowl", "japanese-curry-rice"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "ratatouille",
    name: "Ratatouille",
    emoji: "\u{1F346}",
    description:
      "A beautiful Provencal vegetable dish with thinly sliced zucchini, eggplant, and tomatoes layered over a roasted pepper sauce and baked until meltingly tender.",
    cuisine: "French",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 25,
    cookTime: 50,
    totalTime: 75,
    servings: 4,
    ingredients: [
      { name: "zucchini", amount: "2", unit: "medium" },
      { name: "yellow squash", amount: "1", unit: "medium" },
      { name: "Japanese eggplant", amount: "2", unit: "medium" },
      { name: "Roma tomatoes", amount: "4", unit: "medium" },
      { name: "canned crushed tomatoes", amount: "14", unit: "oz", group: "For the sauce" },
      { name: "red bell pepper, diced", amount: "1", unit: "large", group: "For the sauce" },
      { name: "yellow onion, diced", amount: "1", unit: "small", group: "For the sauce" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves", group: "For the sauce" },
      { name: "olive oil", amount: "3", unit: "tbsp" },
      { name: "fresh thyme sprigs", amount: "4", unit: "sprigs" },
      { name: "fresh basil", amount: "6", unit: "leaves" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 375F. Heat 1 tbsp olive oil in a skillet. Saute the onion and bell pepper for 5 minutes. Add garlic, cook 1 minute. Stir in crushed tomatoes and salt. Simmer for 5 minutes, then spread evenly in the bottom of a round baking dish.",
      },
      {
        step: 2,
        instruction:
          "Slice the zucchini, yellow squash, eggplant, and Roma tomatoes into 1/8-inch rounds.",
        tip: "Use a mandoline if you have one for perfectly even slices. Consistency is key for even cooking.",
      },
      {
        step: 3,
        instruction:
          "Arrange the vegetable slices in an alternating pattern (zucchini, eggplant, tomato, squash) in a tight spiral on top of the sauce, standing the slices upright.",
      },
      {
        step: 4,
        instruction:
          "Drizzle with remaining olive oil, season with salt and pepper, and tuck thyme sprigs between the vegetables.",
      },
      {
        step: 5,
        instruction:
          "Cover tightly with foil and bake for 40 minutes. Remove foil and bake for 10 more minutes until the vegetables are tender and lightly browned.",
      },
      {
        step: 6,
        instruction:
          "Garnish with fresh basil. Serve as a main course with crusty bread or as a side dish.",
      },
    ],
    nutrition: { calories: 180, protein: 5, carbs: 24, fat: 9, fiber: 8 },
    tags: ["vegan", "gluten-free", "mediterranean", "low-carb"],
    youtubeVideoId: "maV7qfJIE9k",
    relatedSlugs: ["stuffed-bell-peppers", "mushroom-risotto", "zucchini-noodle-primavera"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "herb-crusted-baked-cod",
    name: "Herb-Crusted Baked Cod",
    emoji: "\u{1F41F}",
    description:
      "Flaky cod fillets topped with a golden crust of panko breadcrumbs, fresh herbs, and lemon zest. A light, elegant dinner ready in under 25 minutes.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 2,
    ingredients: [
      { name: "cod fillets", amount: "2", unit: "6-oz fillets" },
      { name: "panko breadcrumbs", amount: "1/2", unit: "cup" },
      { name: "fresh parsley, chopped", amount: "2", unit: "tbsp" },
      { name: "lemon zest", amount: "1", unit: "tsp" },
      { name: "garlic clove, minced", amount: "1", unit: "clove" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "Dijon mustard", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1/2", unit: "tsp" },
      { name: "black pepper", amount: "1/4", unit: "tsp" },
      { name: "lemon wedges", amount: "2", unit: "wedges" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 425F. Line a baking sheet with parchment paper.",
      },
      {
        step: 2,
        instruction:
          "In a small bowl, mix the panko, parsley, lemon zest, garlic, olive oil, salt, and pepper until combined.",
      },
      {
        step: 3,
        instruction:
          "Pat the cod fillets dry. Brush the top of each fillet with a thin layer of Dijon mustard.",
        tip: "The mustard acts as both flavoring and glue for the breadcrumb crust.",
      },
      {
        step: 4,
        instruction:
          "Press the panko mixture firmly onto the top of each fillet. Place on the baking sheet.",
      },
      {
        step: 5,
        instruction:
          "Bake for 12-15 minutes until the crust is golden and the fish flakes easily with a fork (internal temp 145F).",
      },
      {
        step: 6,
        instruction:
          "Serve with lemon wedges. Pairs well with roasted asparagus or a simple green salad.",
      },
    ],
    nutrition: { calories: 300, protein: 32, carbs: 14, fat: 12, fiber: 1 },
    tags: ["high-protein", "quick", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["miso-glazed-salmon", "fish-and-chips", "shrimp-tacos-chipotle-crema"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "thai-basil-chicken",
    name: "Thai Basil Chicken",
    emoji: "\u{1F33F}",
    description:
      "Pad Krapao Gai. Ground chicken stir-fried with Thai holy basil, garlic, chili, and a savory-sweet sauce. Served over jasmine rice with a fried egg on top.",
    cuisine: "Thai",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 10,
    totalTime: 20,
    servings: 2,
    ingredients: [
      { name: "ground chicken", amount: "1", unit: "lb" },
      { name: "Thai basil leaves", amount: "1", unit: "cup" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves" },
      { name: "Thai bird's eye chili, sliced", amount: "2", unit: "whole" },
      { name: "soy sauce", amount: "2", unit: "tbsp" },
      { name: "oyster sauce", amount: "1", unit: "tbsp" },
      { name: "fish sauce", amount: "1", unit: "tbsp" },
      { name: "brown sugar", amount: "1", unit: "tsp" },
      { name: "vegetable oil", amount: "2", unit: "tbsp" },
      { name: "large eggs", amount: "2", unit: "whole" },
      { name: "cooked jasmine rice", amount: "2", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Mix the soy sauce, oyster sauce, fish sauce, and brown sugar in a small bowl. Set aside.",
      },
      {
        step: 2,
        instruction:
          "Heat 1 tbsp oil in a wok or large skillet over high heat until smoking. Add the garlic and chilies, stir for 15 seconds.",
        tip: "Adjust the number of chilies to your heat preference. Remove seeds for less heat, or skip them entirely for a mild version.",
      },
      {
        step: 3,
        instruction:
          "Add the ground chicken and stir-fry, breaking it into small pieces, for 4-5 minutes until cooked through and starting to brown.",
      },
      {
        step: 4,
        instruction:
          "Pour in the sauce mixture and stir-fry for 1 minute. Remove from heat and fold in the Thai basil until just wilted.",
      },
      {
        step: 5,
        instruction:
          "In a separate skillet, fry the eggs in the remaining oil until the edges are crispy and the yolk is still runny.",
      },
      {
        step: 6,
        instruction:
          "Serve the chicken over jasmine rice, topped with a fried egg.",
      },
    ],
    nutrition: { calories: 520, protein: 36, carbs: 46, fat: 20, fiber: 2 },
    tags: ["quick", "dairy-free", "high-protein", "spicy"],
    youtubeVideoId: null,
    relatedSlugs: ["kung-pao-chicken", "green-curry", "pad-thai"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "kung-pao-chicken",
    name: "Kung Pao Chicken",
    emoji: "\u{1F336}",
    description:
      "A Sichuan classic of tender diced chicken, roasted peanuts, and dried chilies stir-fried in a tangy, slightly sweet sauce with the signature numbing Sichuan pepper.",
    cuisine: "Chinese",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 2,
    ingredients: [
      { name: "boneless skinless chicken thighs, diced", amount: "1", unit: "lb", group: "For the chicken" },
      { name: "soy sauce", amount: "1", unit: "tbsp", group: "For the chicken" },
      { name: "cornstarch", amount: "1", unit: "tbsp", group: "For the chicken" },
      { name: "soy sauce", amount: "2", unit: "tbsp", group: "For the sauce" },
      { name: "Chinese black vinegar (or balsamic)", amount: "1", unit: "tbsp", group: "For the sauce" },
      { name: "sugar", amount: "2", unit: "tsp", group: "For the sauce" },
      { name: "sesame oil", amount: "1", unit: "tsp", group: "For the sauce" },
      { name: "cornstarch mixed with 1 tbsp water", amount: "1", unit: "tsp", group: "For the sauce" },
      { name: "dried red chilies", amount: "8", unit: "whole" },
      { name: "Sichuan peppercorns", amount: "1", unit: "tsp" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "fresh ginger, minced", amount: "1", unit: "tsp" },
      { name: "roasted peanuts", amount: "1/3", unit: "cup" },
      { name: "green onions, sliced", amount: "3", unit: "stalks" },
      { name: "vegetable oil", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Toss the diced chicken with 1 tbsp soy sauce and cornstarch. Let sit 10 minutes.",
      },
      {
        step: 2,
        instruction:
          "Mix the sauce ingredients (2 tbsp soy sauce, vinegar, sugar, sesame oil, cornstarch slurry) in a small bowl.",
      },
      {
        step: 3,
        instruction:
          "Heat oil in a wok over high heat. Add the dried chilies and Sichuan peppercorns, stir for 20 seconds until fragrant and slightly darkened.",
        tip: "Don't let the chilies turn black or the sauce will taste bitter. They should just darken slightly.",
      },
      {
        step: 4,
        instruction:
          "Add the chicken in a single layer and sear without stirring for 2 minutes. Stir-fry for another 2-3 minutes until cooked through.",
      },
      {
        step: 5,
        instruction:
          "Add garlic and ginger, stir for 15 seconds. Pour in the sauce and toss until it thickens and coats the chicken (about 30 seconds).",
      },
      {
        step: 6,
        instruction:
          "Toss in the peanuts and green onions. Serve immediately over steamed rice.",
      },
    ],
    nutrition: { calories: 440, protein: 34, carbs: 18, fat: 26, fiber: 3 },
    tags: ["high-protein", "dairy-free", "spicy"],
    youtubeVideoId: "n4W2g_IUY3I",
    relatedSlugs: ["thai-basil-chicken", "dan-dan-noodles", "beef-bulgogi"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "shrimp-tacos-chipotle-crema",
    name: "Shrimp Tacos with Chipotle Crema",
    emoji: "\u{1F32E}",
    description:
      "Chili-lime seared shrimp in warm corn tortillas with crunchy cabbage slaw and a smoky chipotle crema. Ready in 20 minutes, tastes like a taco truck gem.",
    cuisine: "Mexican",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 8,
    totalTime: 18,
    servings: 2,
    ingredients: [
      { name: "large shrimp, peeled and deveined", amount: "12", unit: "oz", group: "For the shrimp" },
      { name: "chili powder", amount: "1", unit: "tsp", group: "For the shrimp" },
      { name: "ground cumin", amount: "1/2", unit: "tsp", group: "For the shrimp" },
      { name: "lime juice", amount: "1", unit: "tbsp", group: "For the shrimp" },
      { name: "olive oil", amount: "1", unit: "tbsp", group: "For the shrimp" },
      { name: "corn tortillas (6-inch)", amount: "6", unit: "whole" },
      { name: "red cabbage, shredded", amount: "1.5", unit: "cups", group: "For the slaw" },
      { name: "lime juice", amount: "1", unit: "tbsp", group: "For the slaw" },
      { name: "sour cream", amount: "3", unit: "tbsp", group: "For the crema" },
      { name: "chipotle pepper in adobo, minced", amount: "1", unit: "pepper", group: "For the crema" },
      { name: "adobo sauce (from the can)", amount: "1", unit: "tsp", group: "For the crema" },
      { name: "fresh cilantro", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "1/2", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Toss the shrimp with chili powder, cumin, lime juice, and salt. Let sit 5 minutes.",
      },
      {
        step: 2,
        instruction:
          "Make the chipotle crema by mixing sour cream, minced chipotle, and adobo sauce. Toss the shredded cabbage with lime juice and a pinch of salt.",
      },
      {
        step: 3,
        instruction:
          "Heat olive oil in a skillet over high heat. Cook the shrimp for 1-2 minutes per side until pink and slightly charred.",
      },
      {
        step: 4,
        instruction:
          "Warm the corn tortillas in a dry skillet or over an open flame for 15-20 seconds per side.",
      },
      {
        step: 5,
        instruction:
          "Assemble the tacos: cabbage slaw on the bottom, shrimp on top, drizzle of chipotle crema, and a sprinkle of fresh cilantro. Serve with lime wedges.",
      },
    ],
    nutrition: { calories: 380, protein: 30, carbs: 36, fat: 14, fiber: 5 },
    tags: ["quick", "high-protein", "spicy"],
    youtubeVideoId: "bREqF9H8Img",
    relatedSlugs: ["birria-tacos", "chicken-quesadilla", "shrimp-lettuce-wraps"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "dan-dan-noodles",
    name: "Dan Dan Noodles",
    emoji: "\u{1F35C}",
    description:
      "Sichuan street food noodles tossed in a bold, nutty chili oil sauce with savory pork mince, preserved mustard greens, and crushed peanuts.",
    cuisine: "Chinese",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 2,
    ingredients: [
      { name: "dried Chinese noodles or spaghetti", amount: "8", unit: "oz" },
      { name: "ground pork", amount: "6", unit: "oz" },
      { name: "Chinese chili oil", amount: "2", unit: "tbsp", group: "For the sauce" },
      { name: "soy sauce", amount: "2", unit: "tbsp", group: "For the sauce" },
      { name: "Chinese sesame paste or tahini", amount: "2", unit: "tbsp", group: "For the sauce" },
      { name: "Chinese black vinegar", amount: "1", unit: "tbsp", group: "For the sauce" },
      { name: "sugar", amount: "1", unit: "tsp", group: "For the sauce" },
      { name: "Sichuan peppercorn powder", amount: "1/2", unit: "tsp", group: "For the sauce" },
      { name: "preserved mustard greens (ya cai), minced", amount: "2", unit: "tbsp" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "vegetable oil", amount: "1", unit: "tbsp" },
      { name: "roasted peanuts, crushed", amount: "2", unit: "tbsp" },
      { name: "green onions, sliced", amount: "2", unit: "stalks" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Cook the noodles according to package directions. Reserve 1/2 cup cooking water, then drain.",
      },
      {
        step: 2,
        instruction:
          "Mix all the sauce ingredients (chili oil, soy sauce, sesame paste, vinegar, sugar, Sichuan peppercorn) in a bowl. Thin with a splash of noodle cooking water until pourable.",
      },
      {
        step: 3,
        instruction:
          "Heat vegetable oil in a skillet over high heat. Brown the ground pork, breaking it into small crumbles, for 4-5 minutes until crispy.",
      },
      {
        step: 4,
        instruction:
          "Add garlic and preserved mustard greens to the pork. Stir-fry for 1 minute.",
      },
      {
        step: 5,
        instruction:
          "Divide the sauce between two bowls. Add the drained noodles and top with the pork mixture, crushed peanuts, and green onions. Toss everything together before eating.",
        tip: "The magic is in the mix. Toss the noodles thoroughly so every strand is coated in the sauce.",
      },
    ],
    nutrition: { calories: 540, protein: 26, carbs: 54, fat: 26, fiber: 3 },
    tags: ["spicy", "dairy-free", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["kung-pao-chicken", "pad-thai", "kimchi-fried-rice"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "jerk-chicken",
    name: "Jerk Chicken",
    emoji: "\u{1F357}",
    description:
      "Jamaican jerk chicken marinated in a fiery blend of scotch bonnet peppers, allspice, thyme, and garlic, then grilled until charred and juicy. Served with rice and peas.",
    cuisine: "Jamaican",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 35,
    totalTime: 55,
    servings: 4,
    ingredients: [
      { name: "bone-in chicken thighs and drumsticks", amount: "2.5", unit: "lbs", group: "For the chicken" },
      { name: "scotch bonnet pepper, seeded and chopped", amount: "1", unit: "whole", group: "For the marinade" },
      { name: "green onions, roughly chopped", amount: "4", unit: "stalks", group: "For the marinade" },
      { name: "garlic cloves", amount: "4", unit: "cloves", group: "For the marinade" },
      { name: "fresh thyme leaves", amount: "1", unit: "tbsp", group: "For the marinade" },
      { name: "ground allspice", amount: "1", unit: "tbsp", group: "For the marinade" },
      { name: "soy sauce", amount: "2", unit: "tbsp", group: "For the marinade" },
      { name: "lime juice", amount: "2", unit: "tbsp", group: "For the marinade" },
      { name: "brown sugar", amount: "1", unit: "tbsp", group: "For the marinade" },
      { name: "vegetable oil", amount: "2", unit: "tbsp", group: "For the marinade" },
      { name: "ground cinnamon", amount: "1/2", unit: "tsp", group: "For the marinade" },
      { name: "ground nutmeg", amount: "1/4", unit: "tsp", group: "For the marinade" },
      { name: "salt", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Blend all marinade ingredients (scotch bonnet, green onions, garlic, thyme, allspice, soy sauce, lime juice, brown sugar, oil, cinnamon, nutmeg, salt) into a paste using a food processor.",
        tip: "Wear gloves when handling scotch bonnet peppers. The capsaicin will burn your skin and eyes for hours.",
      },
      {
        step: 2,
        instruction:
          "Score the chicken pieces with a knife (2-3 cuts per piece). Rub the marinade all over, getting it into the cuts. Marinate for at least 2 hours, preferably overnight.",
      },
      {
        step: 3,
        instruction:
          "Preheat grill to medium heat (350F). If using an oven, preheat to 400F.",
      },
      {
        step: 4,
        instruction:
          "Grill the chicken for 30-35 minutes, turning every 8-10 minutes, until charred on the outside and cooked through (165F internal). For oven, bake on a wire rack for 35-40 minutes, then broil for 2-3 minutes for char.",
      },
      {
        step: 5,
        instruction:
          "Let rest for 5 minutes. Serve with rice and peas, fried plantains, or a simple coleslaw.",
      },
    ],
    nutrition: { calories: 420, protein: 38, carbs: 8, fat: 26, fiber: 1 },
    tags: ["high-protein", "gluten-free", "dairy-free", "spicy"],
    youtubeVideoId: null,
    relatedSlugs: ["chicken-shawarma-plate", "beef-bulgogi", "birria-tacos"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "green-curry",
    name: "Green Curry",
    emoji: "\u{1F35B}",
    description:
      "A fragrant Thai green curry with chicken, bamboo shoots, Thai eggplant, and basil in a rich coconut milk sauce. Aromatic, creamy, and vibrant with fresh herbs.",
    cuisine: "Thai",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 4,
    ingredients: [
      { name: "boneless skinless chicken thighs, sliced", amount: "1", unit: "lb" },
      { name: "coconut milk (full-fat)", amount: "14", unit: "oz" },
      { name: "green curry paste", amount: "3", unit: "tbsp" },
      { name: "bamboo shoots, drained", amount: "1/2", unit: "cup" },
      { name: "Thai eggplant or regular eggplant, cubed", amount: "1", unit: "cup" },
      { name: "red bell pepper, sliced", amount: "1/2", unit: "medium" },
      { name: "fish sauce", amount: "2", unit: "tbsp" },
      { name: "brown sugar or palm sugar", amount: "1", unit: "tbsp" },
      { name: "Thai basil leaves", amount: "1/2", unit: "cup" },
      { name: "kaffir lime leaves", amount: "3", unit: "leaves" },
      { name: "vegetable oil", amount: "1", unit: "tbsp" },
      { name: "jasmine rice", amount: "2", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat oil in a large pan or wok over medium heat. Add the green curry paste and stir for 1 minute until fragrant.",
      },
      {
        step: 2,
        instruction:
          "Pour in half the coconut milk and stir to combine with the paste. Cook for 2-3 minutes until the oil starts to separate on the surface.",
        tip: "This step blooms the curry paste in the coconut cream. Skipping it makes for a less complex, watery curry.",
      },
      {
        step: 3,
        instruction:
          "Add the chicken and cook for 3-4 minutes until the outside is white. Add the remaining coconut milk, eggplant, bamboo shoots, and kaffir lime leaves.",
      },
      {
        step: 4,
        instruction:
          "Simmer for 10-12 minutes until the chicken is cooked through and the eggplant is tender. Stir in the fish sauce and sugar.",
      },
      {
        step: 5,
        instruction:
          "Add the bell pepper and cook for 2 more minutes. Remove from heat and stir in the Thai basil.",
      },
      {
        step: 6,
        instruction:
          "Serve over steamed jasmine rice.",
      },
    ],
    nutrition: { calories: 480, protein: 28, carbs: 30, fat: 28, fiber: 4 },
    tags: ["gluten-free", "dairy-free", "spicy"],
    youtubeVideoId: null,
    relatedSlugs: ["thai-basil-chicken", "butter-chicken", "japanese-curry-rice"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "birria-tacos",
    name: "Birria Tacos",
    emoji: "\u{1F32E}",
    description:
      "Slow-braised beef in a rich, chile-spiced consomme. The tortillas are dipped in the flavorful fat and griddled until crispy, then stuffed with tender meat, onion, and cilantro.",
    cuisine: "Mexican",
    mealType: "dinner",
    difficulty: "Advanced",
    prepTime: 30,
    cookTime: 180,
    totalTime: 210,
    servings: 6,
    ingredients: [
      { name: "beef chuck roast", amount: "3", unit: "lbs", group: "For the birria" },
      { name: "dried guajillo chiles", amount: "4", unit: "whole", group: "For the birria" },
      { name: "dried ancho chiles", amount: "2", unit: "whole", group: "For the birria" },
      { name: "Roma tomatoes", amount: "3", unit: "medium", group: "For the birria" },
      { name: "yellow onion, quartered", amount: "1", unit: "large", group: "For the birria" },
      { name: "garlic cloves", amount: "5", unit: "cloves", group: "For the birria" },
      { name: "beef broth", amount: "4", unit: "cups", group: "For the birria" },
      { name: "apple cider vinegar", amount: "2", unit: "tbsp", group: "For the birria" },
      { name: "ground cumin", amount: "1", unit: "tsp", group: "For the birria" },
      { name: "dried oregano", amount: "1", unit: "tsp", group: "For the birria" },
      { name: "ground cloves", amount: "1/4", unit: "tsp", group: "For the birria" },
      { name: "bay leaves", amount: "2", unit: "whole", group: "For the birria" },
      { name: "corn tortillas", amount: "18", unit: "whole", group: "For the tacos" },
      { name: "shredded Oaxaca or mozzarella cheese", amount: "2", unit: "cups", group: "For the tacos" },
      { name: "white onion, finely diced", amount: "1/2", unit: "medium" },
      { name: "fresh cilantro, chopped", amount: "1/4", unit: "cup" },
      { name: "salt", amount: "2", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Toast the dried chiles in a dry skillet for 1-2 minutes per side. Remove stems and seeds. Soak in hot water for 15 minutes until softened.",
      },
      {
        step: 2,
        instruction:
          "Blend the soaked chiles with tomatoes, garlic, vinegar, cumin, oregano, cloves, and 1 cup of the soaking liquid until smooth.",
      },
      {
        step: 3,
        instruction:
          "Cut the beef into large chunks (about 3-inch pieces). Season with salt. Sear in a Dutch oven over high heat until browned on all sides, about 6-8 minutes.",
      },
      {
        step: 4,
        instruction:
          "Pour the chile sauce and beef broth over the meat. Add the quartered onion and bay leaves. Bring to a boil, then reduce to a low simmer. Cover and cook for 2.5-3 hours until the meat shreds easily with a fork.",
        tip: "Low and slow is key. A hard simmer will make the meat tough. It should barely bubble.",
      },
      {
        step: 5,
        instruction:
          "Remove the meat and shred with two forks. Strain the consomme and skim excess fat (reserve the fat for dipping tortillas).",
      },
      {
        step: 6,
        instruction:
          "To make the tacos: dip a corn tortilla into the skimmed fat/consomme. Place it on a hot griddle, add cheese and shredded meat. Fold in half and cook for 2-3 minutes per side until crispy.",
      },
      {
        step: 7,
        instruction:
          "Serve the tacos topped with diced onion and cilantro, with a small bowl of warm consomme for dipping.",
      },
    ],
    nutrition: { calories: 520, protein: 42, carbs: 34, fat: 24, fiber: 4 },
    tags: ["comfort-food", "high-protein", "spicy"],
    youtubeVideoId: "pU0LYyyJnBA",
    relatedSlugs: ["shrimp-tacos-chipotle-crema", "beef-stew", "jerk-chicken"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "fish-and-chips",
    name: "Fish and Chips",
    emoji: "\u{1F35F}",
    description:
      "Crispy beer-battered cod with golden thick-cut fries, served with malt vinegar and tartar sauce. A British pub classic done right at home.",
    cuisine: "British",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 25,
    totalTime: 45,
    servings: 2,
    ingredients: [
      { name: "cod fillets", amount: "2", unit: "8-oz fillets", group: "For the fish" },
      { name: "all-purpose flour", amount: "1", unit: "cup", group: "For the batter" },
      { name: "cornstarch", amount: "2", unit: "tbsp", group: "For the batter" },
      { name: "baking powder", amount: "1", unit: "tsp", group: "For the batter" },
      { name: "cold beer (lager)", amount: "3/4", unit: "cup", group: "For the batter" },
      { name: "salt", amount: "1", unit: "tsp", group: "For the batter" },
      { name: "Russet potatoes", amount: "2", unit: "large", group: "For the chips" },
      { name: "vegetable oil for frying", amount: "4", unit: "cups" },
      { name: "malt vinegar", amount: "2", unit: "tbsp" },
      { name: "mayonnaise", amount: "2", unit: "tbsp", group: "For tartar sauce" },
      { name: "cornichons, minced", amount: "2", unit: "tbsp", group: "For tartar sauce" },
      { name: "capers, minced", amount: "1", unit: "tsp", group: "For tartar sauce" },
      { name: "lemon juice", amount: "1", unit: "tsp", group: "For tartar sauce" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Cut the potatoes into 1/2-inch thick fries. Soak in cold water for 30 minutes to remove excess starch. Drain and pat completely dry.",
      },
      {
        step: 2,
        instruction:
          "Heat oil to 325F in a heavy pot or Dutch oven. Fry the chips for 5-6 minutes until cooked through but not browned. Remove and drain on paper towels.",
        tip: "This double-fry method is the secret to perfect chips: the first fry cooks the inside, the second crisps the outside.",
      },
      {
        step: 3,
        instruction:
          "Increase oil temperature to 375F. Fry the chips again for 3-4 minutes until golden and crispy. Season with salt immediately.",
      },
      {
        step: 4,
        instruction:
          "Make the batter: whisk flour, cornstarch, baking powder, and salt. Pour in the cold beer and stir until just combined (lumps are fine).",
      },
      {
        step: 5,
        instruction:
          "Pat the cod fillets dry and dust lightly with flour. Dip into the batter, letting excess drip off. Carefully lower into the 375F oil. Fry for 5-6 minutes until golden and crispy.",
      },
      {
        step: 6,
        instruction:
          "Mix the tartar sauce ingredients. Serve the fish and chips on paper-lined plates with tartar sauce, malt vinegar, and lemon wedges.",
      },
    ],
    nutrition: { calories: 620, protein: 34, carbs: 62, fat: 26, fiber: 4 },
    tags: ["comfort-food", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["herb-crusted-baked-cod", "miso-glazed-salmon", "shrimp-tacos-chipotle-crema"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "stuffed-bell-peppers",
    name: "Stuffed Bell Peppers",
    emoji: "\u{1FAD1}",
    description:
      "Colorful bell peppers stuffed with a savory mix of seasoned ground turkey, rice, tomatoes, and melted cheese, then baked until tender.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 35,
    totalTime: 50,
    servings: 4,
    ingredients: [
      { name: "large bell peppers (any color)", amount: "4", unit: "whole" },
      { name: "ground turkey", amount: "1", unit: "lb" },
      { name: "cooked white rice", amount: "1", unit: "cup" },
      { name: "canned diced tomatoes, drained", amount: "14", unit: "oz" },
      { name: "yellow onion, diced", amount: "1", unit: "small" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "ground cumin", amount: "1", unit: "tsp" },
      { name: "chili powder", amount: "1/2", unit: "tsp" },
      { name: "shredded cheddar cheese", amount: "1", unit: "cup" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 375F. Cut the tops off the bell peppers and remove seeds and membranes. Place cut-side up in a baking dish.",
      },
      {
        step: 2,
        instruction:
          "Heat olive oil in a skillet over medium heat. Saute the onion for 3 minutes, add garlic, cook 30 seconds. Add ground turkey, cumin, chili powder, salt, and pepper. Cook until browned, about 5-6 minutes.",
      },
      {
        step: 3,
        instruction:
          "Remove from heat and stir in the cooked rice, diced tomatoes, and half the cheese.",
      },
      {
        step: 4,
        instruction:
          "Stuff each pepper generously with the filling, mounding it on top. Top with remaining cheese.",
      },
      {
        step: 5,
        instruction:
          "Add 1/4 cup water to the bottom of the baking dish. Cover with foil and bake for 25 minutes. Remove foil and bake 10 more minutes until the cheese is bubbly and the peppers are tender.",
        tip: "The water in the bottom creates steam that helps cook the peppers evenly from the outside.",
      },
    ],
    nutrition: { calories: 380, protein: 30, carbs: 28, fat: 16, fiber: 5 },
    tags: ["high-protein", "gluten-free", "family-friendly", "meal-prep"],
    youtubeVideoId: "FErWYjbiUGc",
    relatedSlugs: ["ratatouille", "beef-stew", "one-pot-mac-and-cheese"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "japanese-curry-rice",
    name: "Japanese Curry Rice",
    emoji: "\u{1F35B}",
    description:
      "A comforting, mildly sweet Japanese-style curry with tender chicken, potatoes, and carrots in a thick, savory sauce. A weeknight staple in Japanese households.",
    cuisine: "Japanese",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 35,
    totalTime: 50,
    servings: 4,
    ingredients: [
      { name: "boneless skinless chicken thighs, cubed", amount: "1", unit: "lb" },
      { name: "Japanese curry roux blocks", amount: "4", unit: "oz" },
      { name: "Yukon Gold potatoes, cubed", amount: "2", unit: "medium" },
      { name: "carrots, sliced into half-moons", amount: "2", unit: "medium" },
      { name: "yellow onion, sliced", amount: "1", unit: "large" },
      { name: "water", amount: "3", unit: "cups" },
      { name: "vegetable oil", amount: "1", unit: "tbsp" },
      { name: "soy sauce", amount: "1", unit: "tsp" },
      { name: "honey", amount: "1", unit: "tsp" },
      { name: "steamed short-grain rice", amount: "3", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat oil in a large pot over medium-high heat. Saute the onion for 4-5 minutes until softened and starting to caramelize.",
      },
      {
        step: 2,
        instruction:
          "Add the chicken and cook for 3-4 minutes until the outside is white. Add the carrots and potatoes, stir for 1 minute.",
      },
      {
        step: 3,
        instruction:
          "Pour in the water and bring to a boil. Reduce to a simmer, cover, and cook for 15-20 minutes until the vegetables are fork-tender.",
      },
      {
        step: 4,
        instruction:
          "Turn off the heat. Break the curry roux blocks into pieces and add to the pot. Stir until completely dissolved.",
        tip: "The roux dissolves best when the liquid is off the heat. Adding it to boiling liquid can cause clumps.",
      },
      {
        step: 5,
        instruction:
          "Return to low heat and simmer for 5-8 minutes, stirring frequently, until the curry thickens. Stir in soy sauce and honey.",
      },
      {
        step: 6,
        instruction:
          "Serve the curry over steamed rice. It tastes even better the next day as the flavors develop.",
      },
    ],
    nutrition: { calories: 480, protein: 28, carbs: 62, fat: 14, fiber: 4 },
    tags: ["comfort-food", "family-friendly", "dairy-free", "meal-prep"],
    youtubeVideoId: null,
    relatedSlugs: ["butter-chicken", "green-curry", "beef-stew"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "beef-bulgogi",
    name: "Beef Bulgogi",
    emoji: "\u{1F969}",
    description:
      "Thinly sliced beef marinated in a sweet and savory soy-pear sauce, then grilled or pan-seared until caramelized. A cornerstone of Korean BBQ, served with rice and banchan.",
    cuisine: "Korean",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 20,
    cookTime: 8,
    totalTime: 28,
    servings: 4,
    ingredients: [
      { name: "beef sirloin or rib-eye, thinly sliced", amount: "1.5", unit: "lbs", group: "For the beef" },
      { name: "Asian pear (or apple), grated", amount: "1/2", unit: "medium", group: "For the marinade" },
      { name: "soy sauce", amount: "3", unit: "tbsp", group: "For the marinade" },
      { name: "sesame oil", amount: "1", unit: "tbsp", group: "For the marinade" },
      { name: "brown sugar", amount: "1", unit: "tbsp", group: "For the marinade" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves", group: "For the marinade" },
      { name: "fresh ginger, grated", amount: "1", unit: "tsp", group: "For the marinade" },
      { name: "black pepper", amount: "1/2", unit: "tsp", group: "For the marinade" },
      { name: "yellow onion, thinly sliced", amount: "1", unit: "medium" },
      { name: "green onions, cut into 2-inch pieces", amount: "4", unit: "stalks" },
      { name: "sesame seeds", amount: "1", unit: "tbsp" },
      { name: "vegetable oil", amount: "1", unit: "tbsp" },
      { name: "steamed white rice", amount: "3", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Combine all marinade ingredients (grated pear, soy sauce, sesame oil, brown sugar, garlic, ginger, pepper) in a bowl. Add the sliced beef and onion, toss to coat. Marinate for at least 30 minutes (up to overnight).",
        tip: "The pear is a natural meat tenderizer. If you can't find Asian pear, use half a grated apple.",
      },
      {
        step: 2,
        instruction:
          "Heat a large skillet or grill pan over high heat until smoking. Add oil.",
      },
      {
        step: 3,
        instruction:
          "Cook the beef in batches (don't crowd the pan) for 2-3 minutes per side until caramelized and slightly charred. Remove to a plate.",
      },
      {
        step: 4,
        instruction:
          "In the same pan, quickly saute the green onions for 30 seconds. Add back the beef and toss together.",
      },
      {
        step: 5,
        instruction:
          "Sprinkle with sesame seeds and serve immediately over steamed rice.",
      },
    ],
    nutrition: { calories: 460, protein: 38, carbs: 34, fat: 20, fiber: 2 },
    tags: ["high-protein", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["bibimbap", "kung-pao-chicken", "chicken-shawarma-plate"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
];
