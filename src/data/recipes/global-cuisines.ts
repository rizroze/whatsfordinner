import type { FullRecipe } from "./types";

export const globalCuisineRecipes: FullRecipe[] = [
  {
    slug: "pho",
    name: "Pho",
    emoji: "\uD83C\uDF5C",
    description:
      "Aromatic Vietnamese beef noodle soup with a deeply flavored broth built from charred onions, star anise, and cinnamon. Served with rice noodles, tender beef, and a mountain of fresh herbs.",
    cuisine: "Vietnamese",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 60,
    totalTime: 80,
    servings: 4,
    ingredients: [
      { name: "beef broth", amount: "8", unit: "cups" },
      { name: "beef bones or oxtail", amount: "1", unit: "lb" },
      { name: "yellow onion, halved", amount: "1", unit: "large" },
      { name: "fresh ginger, halved lengthwise", amount: "3", unit: "inch" },
      { name: "star anise", amount: "3", unit: "whole" },
      { name: "cinnamon stick", amount: "1", unit: "whole" },
      { name: "whole cloves", amount: "3", unit: "whole" },
      { name: "fish sauce", amount: "2", unit: "tbsp" },
      { name: "sugar", amount: "1", unit: "tsp" },
      { name: "dried flat rice noodles", amount: "8", unit: "oz" },
      { name: "sirloin steak, sliced paper-thin", amount: "8", unit: "oz" },
      { name: "bean sprouts", amount: "1", unit: "cup", group: "Garnishes" },
      { name: "fresh Thai basil", amount: "1/2", unit: "cup", group: "Garnishes" },
      { name: "fresh cilantro", amount: "1/4", unit: "cup", group: "Garnishes" },
      { name: "lime wedges", amount: "4", unit: "wedges", group: "Garnishes" },
      { name: "jalape\u00f1o, sliced", amount: "1", unit: "whole", group: "Garnishes" },
      { name: "hoisin sauce", amount: "2", unit: "tbsp", group: "Garnishes" },
      { name: "sriracha", amount: "2", unit: "tbsp", group: "Garnishes" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Char the onion and ginger under a broiler or directly over a gas flame until blackened in spots, about 5 minutes. This builds deep flavor in the broth.",
      },
      {
        step: 2,
        instruction:
          "In a large pot, combine the broth, bones, charred onion and ginger, star anise, cinnamon stick, and cloves. Bring to a boil, then reduce to a gentle simmer. Skim any foam. Simmer for 45-60 minutes.",
        tip: "A clear broth is the goal. Skim the foam diligently in the first 15 minutes. Never let it boil vigorously or it'll turn cloudy.",
      },
      {
        step: 3,
        instruction:
          "Strain the broth through a fine mesh strainer. Season with fish sauce and sugar. Keep hot.",
      },
      {
        step: 4,
        instruction:
          "Cook the rice noodles according to the package directions. Drain and divide between four large bowls.",
      },
      {
        step: 5,
        instruction:
          "Arrange the raw sliced sirloin over the noodles. Ladle the boiling hot broth over the beef (the heat cooks the thin slices instantly). Serve with bean sprouts, basil, cilantro, lime, jalape\u00f1o, hoisin, and sriracha on the side.",
      },
    ],
    nutrition: { calories: 420, protein: 30, carbs: 48, fat: 10, fiber: 2 },
    tags: ["dairy-free", "comfort-food", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["ramen", "laksa", "khao-soi"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "bao-buns",
    name: "Bao Buns",
    emoji: "\uD83E\uDD5F",
    description:
      "Pillowy soft steamed buns filled with sweet and sticky braised pork belly, pickled cucumbers, and a drizzle of hoisin. Fluffy, savory, and irresistible.",
    cuisine: "Chinese",
    mealType: "dinner",
    difficulty: "Advanced",
    prepTime: 30,
    cookTime: 45,
    totalTime: 75,
    servings: 8,
    ingredients: [
      { name: "all-purpose flour", amount: "2", unit: "cups", group: "For the buns" },
      { name: "sugar", amount: "2", unit: "tbsp", group: "For the buns" },
      { name: "instant yeast", amount: "1", unit: "tsp", group: "For the buns" },
      { name: "baking powder", amount: "1/2", unit: "tsp", group: "For the buns" },
      { name: "warm water", amount: "3/4", unit: "cup", group: "For the buns" },
      { name: "vegetable oil", amount: "1", unit: "tbsp", group: "For the buns" },
      { name: "pork belly, cut into thick slices", amount: "1", unit: "lb", group: "For the filling" },
      { name: "soy sauce", amount: "3", unit: "tbsp", group: "For the filling" },
      { name: "hoisin sauce", amount: "2", unit: "tbsp", group: "For the filling" },
      { name: "brown sugar", amount: "2", unit: "tbsp", group: "For the filling" },
      { name: "rice vinegar", amount: "1", unit: "tbsp", group: "For the filling" },
      { name: "fresh ginger, grated", amount: "1", unit: "tsp", group: "For the filling" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves", group: "For the filling" },
      { name: "cucumber, thinly sliced", amount: "1/2", unit: "medium", group: "Garnishes" },
      { name: "green onions, sliced", amount: "2", unit: "stalks", group: "Garnishes" },
      { name: "sesame seeds", amount: "1", unit: "tsp", group: "Garnishes" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Make the dough: combine flour, sugar, yeast, and baking powder. Add warm water and oil, and mix until a smooth dough forms. Knead for 5 minutes, cover, and let rise for 1 hour until doubled.",
      },
      {
        step: 2,
        instruction:
          "Braise the pork belly: combine the pork, soy sauce, hoisin, brown sugar, rice vinegar, ginger, and garlic in a saucepan. Cover and simmer over low heat for 35-40 minutes until tender and glazed, turning once.",
        tip: "Slice the pork belly while cold for cleaner cuts. It braises more evenly in thick slices than thin ones.",
      },
      {
        step: 3,
        instruction:
          "Divide the dough into 8 pieces. Roll each into an oval, brush lightly with oil, fold in half, and place on a small square of parchment paper. Let rest 20 minutes.",
      },
      {
        step: 4,
        instruction:
          "Steam the buns in a bamboo steamer over boiling water for 10-12 minutes until puffy and cooked through.",
      },
      {
        step: 5,
        instruction:
          "Open each bun and fill with sliced pork belly, cucumber, green onions, and a drizzle of the braising sauce. Sprinkle with sesame seeds.",
      },
    ],
    nutrition: { calories: 340, protein: 14, carbs: 32, fat: 18, fiber: 1 },
    tags: ["comfort-food", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["dumplings", "peking-duck-pancakes", "crispy-pork-belly"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "moussaka",
    name: "Moussaka",
    emoji: "\uD83C\uDDEC\uD83C\uDDF7",
    description:
      "Layers of silky roasted eggplant, spiced lamb and tomato sauce, and a golden bechamel topping baked until bubbly. The crown jewel of Greek comfort food.",
    cuisine: "Greek",
    mealType: "dinner",
    difficulty: "Advanced",
    prepTime: 30,
    cookTime: 60,
    totalTime: 90,
    servings: 6,
    ingredients: [
      { name: "large eggplants, sliced 1/4-inch thick", amount: "2", unit: "large" },
      { name: "ground lamb", amount: "1", unit: "lb" },
      { name: "yellow onion, diced", amount: "1", unit: "medium" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "canned crushed tomatoes", amount: "1", unit: "cup" },
      { name: "red wine", amount: "1/4", unit: "cup" },
      { name: "ground cinnamon", amount: "1/2", unit: "tsp" },
      { name: "ground allspice", amount: "1/4", unit: "tsp" },
      { name: "olive oil", amount: "3", unit: "tbsp" },
      { name: "unsalted butter", amount: "3", unit: "tbsp", group: "For the bechamel" },
      { name: "all-purpose flour", amount: "3", unit: "tbsp", group: "For the bechamel" },
      { name: "whole milk", amount: "2", unit: "cups", group: "For the bechamel" },
      { name: "egg yolk", amount: "1", unit: "whole", group: "For the bechamel" },
      { name: "nutmeg", amount: "1/4", unit: "tsp", group: "For the bechamel" },
      { name: "salt and pepper", amount: "to taste", unit: "" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Salt the eggplant slices and let them sit for 20 minutes to draw out moisture. Pat dry. Brush with olive oil and roast at 400F for 20 minutes until golden.",
        tip: "Salting the eggplant removes bitterness and excess moisture, so it doesn't make the dish watery.",
      },
      {
        step: 2,
        instruction:
          "Brown the lamb in a skillet over medium-high heat, breaking it up. Add onion and garlic, cook 3 minutes. Add crushed tomatoes, wine, cinnamon, and allspice. Simmer 15 minutes until thick.",
      },
      {
        step: 3,
        instruction:
          "Make the bechamel: melt butter, whisk in flour for 1 minute, gradually add milk while whisking. Cook until thick, about 5 minutes. Remove from heat, whisk in egg yolk and nutmeg.",
      },
      {
        step: 4,
        instruction:
          "Layer in a 9x13 baking dish: eggplant, then meat sauce, then eggplant again, then pour the bechamel over the top. Spread evenly.",
      },
      {
        step: 5,
        instruction:
          "Bake at 375F for 35-40 minutes until the top is golden brown and bubbling. Let rest for 15 minutes before cutting (this is critical for clean slices).",
      },
    ],
    nutrition: { calories: 440, protein: 24, carbs: 22, fat: 28, fiber: 5 },
    tags: ["comfort-food", "mediterranean", "meal-prep"],
    youtubeVideoId: null,
    relatedSlugs: ["homemade-lasagna", "ratatouille", "chicken-souvlaki"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "ceviche",
    name: "Ceviche",
    emoji: "\uD83E\uDD90",
    description:
      "Fresh white fish 'cooked' in citrus juice with red onion, cilantro, jalape\u00f1o, and juicy tomatoes. Light, bright, and refreshing. Served with crispy tortilla chips or tostadas.",
    cuisine: "Peruvian",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 20,
    cookTime: 0,
    totalTime: 20,
    servings: 4,
    ingredients: [
      { name: "fresh white fish (sea bass or tilapia), diced", amount: "1", unit: "lb" },
      { name: "fresh lime juice", amount: "3/4", unit: "cup" },
      { name: "fresh lemon juice", amount: "1/4", unit: "cup" },
      { name: "red onion, thinly sliced", amount: "1/2", unit: "small" },
      { name: "Roma tomatoes, seeded and diced", amount: "2", unit: "medium" },
      { name: "jalape\u00f1o, seeded and minced", amount: "1", unit: "small" },
      { name: "fresh cilantro, chopped", amount: "1/4", unit: "cup" },
      { name: "ripe avocado, diced", amount: "1", unit: "medium" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "tortilla chips or tostadas", amount: "4", unit: "oz" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Place the diced fish in a non-reactive bowl. Pour the lime and lemon juice over the fish, making sure all pieces are submerged. Cover and refrigerate for 15-25 minutes until the fish turns opaque.",
        tip: "Use the freshest fish possible since it's essentially raw. The acid 'cooks' the outside but doesn't reach safe temperatures, so quality matters.",
      },
      {
        step: 2,
        instruction:
          "While the fish cures, soak the sliced red onion in cold water for 5 minutes to mellow its bite. Drain well.",
      },
      {
        step: 3,
        instruction:
          "Drain most of the citrus juice from the fish (leave a little). Gently fold in the red onion, tomatoes, jalape\u00f1o, cilantro, and salt.",
      },
      {
        step: 4,
        instruction:
          "Top with diced avocado. Serve immediately with tortilla chips or on tostadas.",
      },
    ],
    nutrition: { calories: 260, protein: 26, carbs: 18, fat: 10, fiber: 5 },
    tags: ["gluten-free", "dairy-free", "no-cook", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["salmon-poke-bowl", "shrimp-tacos-chipotle-crema", "vietnamese-spring-rolls"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "empanadas",
    name: "Empanadas",
    emoji: "\uD83E\uDD5F",
    description:
      "Flaky, golden pastry pockets stuffed with seasoned beef, onions, olives, and hard-boiled egg. Baked until crispy and perfect for sharing or meal prep.",
    cuisine: "Argentine",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 30,
    cookTime: 25,
    totalTime: 55,
    servings: 12,
    ingredients: [
      { name: "all-purpose flour", amount: "3", unit: "cups", group: "For the dough" },
      { name: "cold unsalted butter, cubed", amount: "1/2", unit: "cup", group: "For the dough" },
      { name: "ice water", amount: "1/2", unit: "cup", group: "For the dough" },
      { name: "salt", amount: "1", unit: "tsp", group: "For the dough" },
      { name: "ground beef", amount: "1", unit: "lb", group: "For the filling" },
      { name: "yellow onion, finely diced", amount: "1", unit: "medium", group: "For the filling" },
      { name: "ground cumin", amount: "1", unit: "tsp", group: "For the filling" },
      { name: "smoked paprika", amount: "1", unit: "tsp", group: "For the filling" },
      { name: "green olives, chopped", amount: "1/4", unit: "cup", group: "For the filling" },
      { name: "hard-boiled egg, chopped", amount: "2", unit: "whole", group: "For the filling" },
      { name: "egg, beaten (for egg wash)", amount: "1", unit: "whole" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Make the dough: pulse flour, salt, and butter in a food processor until it resembles coarse sand. Add ice water and pulse until the dough just comes together. Wrap in plastic and refrigerate for 30 minutes.",
      },
      {
        step: 2,
        instruction:
          "Cook the filling: brown the beef in a skillet, drain excess fat. Add onion and cook 3 minutes. Stir in cumin and paprika. Let cool completely, then fold in olives and chopped egg.",
        tip: "Always cool the filling completely before assembling. Hot filling melts the dough and makes it soggy.",
      },
      {
        step: 3,
        instruction:
          "Roll out the dough and cut into 5-inch circles. Place 2 tablespoons of filling on one half of each circle. Fold over and crimp the edges with a fork or fold into a rope pattern.",
      },
      {
        step: 4,
        instruction:
          "Place on a parchment-lined baking sheet. Brush with beaten egg. Bake at 400F for 20-25 minutes until golden brown.",
      },
    ],
    nutrition: { calories: 280, protein: 14, carbs: 24, fat: 14, fiber: 1 },
    tags: ["meal-prep", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["tamales", "arepas", "carne-asada"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "pierogi",
    name: "Pierogi",
    emoji: "\uD83E\uDD5F",
    description:
      "Tender potato and cheese-filled dumplings, pan-fried in butter until golden, served with caramelized onions and a dollop of sour cream. Polish soul food at its finest.",
    cuisine: "Polish",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 45,
    cookTime: 20,
    totalTime: 65,
    servings: 6,
    ingredients: [
      { name: "all-purpose flour", amount: "2.5", unit: "cups", group: "For the dough" },
      { name: "large egg", amount: "1", unit: "whole", group: "For the dough" },
      { name: "sour cream", amount: "1/2", unit: "cup", group: "For the dough" },
      { name: "warm water", amount: "1/4", unit: "cup", group: "For the dough" },
      { name: "salt", amount: "1/2", unit: "tsp", group: "For the dough" },
      { name: "russet potatoes, peeled and cubed", amount: "2", unit: "large", group: "For the filling" },
      { name: "sharp cheddar, shredded", amount: "1", unit: "cup", group: "For the filling" },
      { name: "salt and white pepper", amount: "to taste", unit: "", group: "For the filling" },
      { name: "unsalted butter", amount: "3", unit: "tbsp" },
      { name: "yellow onion, thinly sliced", amount: "1", unit: "large" },
      { name: "sour cream, for serving", amount: "1/2", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Make the dough: mix flour and salt, then stir in egg, sour cream, and warm water until a soft dough forms. Knead for 5 minutes until smooth. Wrap and rest 30 minutes.",
      },
      {
        step: 2,
        instruction:
          "Make the filling: boil potatoes until tender, 15 minutes. Drain and mash. Stir in cheese, salt, and white pepper while hot so the cheese melts.",
      },
      {
        step: 3,
        instruction:
          "Roll dough to 1/8-inch thickness. Cut 3-inch circles. Place a tablespoon of filling in each, fold in half, and pinch edges firmly to seal.",
        tip: "Make sure there's no air trapped inside and the edges are sealed well, or they'll open during boiling.",
      },
      {
        step: 4,
        instruction:
          "Boil the pierogi in salted water for 3-4 minutes. They're done when they float. Drain well.",
      },
      {
        step: 5,
        instruction:
          "Melt butter in a large skillet. Saute the sliced onion until caramelized, 10 minutes. Add the boiled pierogi and cook 2-3 minutes per side until golden. Serve with sour cream and caramelized onions.",
      },
    ],
    nutrition: { calories: 380, protein: 14, carbs: 44, fat: 18, fiber: 3 },
    tags: ["vegetarian", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["dumplings", "goulash", "stuffed-bell-peppers"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "arepas",
    name: "Arepas",
    emoji: "\uD83C\uDF3D",
    description:
      "Crispy-on-the-outside, soft-on-the-inside cornmeal cakes stuffed with shredded chicken, black beans, avocado, and queso fresco. A Venezuelan staple you can fill with anything.",
    cuisine: "Venezuelan",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 4,
    ingredients: [
      { name: "pre-cooked white cornmeal (masarepa)", amount: "2", unit: "cups" },
      { name: "warm water", amount: "2.5", unit: "cups" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "vegetable oil", amount: "2", unit: "tbsp" },
      { name: "shredded cooked chicken", amount: "1", unit: "cup", group: "For the filling" },
      { name: "black beans, drained", amount: "1/2", unit: "cup", group: "For the filling" },
      { name: "ripe avocado, sliced", amount: "1", unit: "medium", group: "For the filling" },
      { name: "queso fresco, crumbled", amount: "1/4", unit: "cup", group: "For the filling" },
      { name: "hot sauce", amount: "to taste", unit: "", group: "For the filling" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Mix the cornmeal, warm water, and salt in a bowl. Let it rest for 5 minutes, then knead briefly. The dough should be moist but not sticky (add water or flour as needed). Divide into 4 balls and flatten into discs about 1/2-inch thick.",
      },
      {
        step: 2,
        instruction:
          "Heat oil in a skillet over medium heat. Cook the arepas for 5-6 minutes per side until a golden crust forms. Transfer to a 350F oven for 10 minutes to cook through.",
        tip: "The arepa should sound hollow when you tap it. That means the inside is cooked and ready to be split open.",
      },
      {
        step: 3,
        instruction:
          "Slice each arepa open like a pita pocket. Stuff with shredded chicken, black beans, avocado, queso fresco, and hot sauce.",
      },
    ],
    nutrition: { calories: 380, protein: 22, carbs: 42, fat: 14, fiber: 6 },
    tags: ["gluten-free", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["empanadas", "carne-asada", "tamales"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "ramen",
    name: "Ramen",
    emoji: "\uD83C\uDF5C",
    description:
      "Rich, creamy tonkotsu-style ramen with springy noodles, chashu pork, a jammy soft-boiled egg, nori, and green onions. A labor of love with a deeply satisfying payoff.",
    cuisine: "Japanese",
    mealType: "dinner",
    difficulty: "Advanced",
    prepTime: 20,
    cookTime: 90,
    totalTime: 110,
    servings: 4,
    ingredients: [
      { name: "pork broth or chicken broth", amount: "8", unit: "cups" },
      { name: "pork belly, whole piece", amount: "12", unit: "oz" },
      { name: "soy sauce", amount: "1/4", unit: "cup" },
      { name: "mirin", amount: "2", unit: "tbsp" },
      { name: "sake", amount: "2", unit: "tbsp" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves" },
      { name: "fresh ginger, sliced", amount: "2", unit: "inch" },
      { name: "sesame oil", amount: "1", unit: "tbsp" },
      { name: "fresh ramen noodles", amount: "14", unit: "oz" },
      { name: "large eggs", amount: "4", unit: "whole" },
      { name: "nori sheets", amount: "4", unit: "sheets" },
      { name: "green onions, sliced", amount: "4", unit: "stalks" },
      { name: "corn kernels", amount: "1/2", unit: "cup" },
      { name: "white pepper", amount: "1/4", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Make the chashu: sear the pork belly in a pot until browned on all sides. Add soy sauce, mirin, sake, 2 cloves garlic, and 1 cup water. Cover and braise on low for 60-75 minutes until very tender. Remove and slice when cool enough to handle. Reserve the braising liquid.",
      },
      {
        step: 2,
        instruction:
          "Make the ramen eggs: boil eggs for 6.5 minutes, then ice bath. Peel and marinate in the reserved braising liquid for at least 30 minutes (or overnight).",
        tip: "The 6.5-minute egg is the sweet spot for a jammy, slightly runny yolk. Even 30 seconds too long and the yolk sets completely.",
      },
      {
        step: 3,
        instruction:
          "Build the broth: saute remaining garlic, ginger, and sesame oil in a large pot for 1 minute. Add broth and white pepper. Simmer for 15 minutes. Strain out the solids.",
      },
      {
        step: 4,
        instruction:
          "Cook the ramen noodles according to the package (usually 2-3 minutes). Drain and divide between bowls.",
      },
      {
        step: 5,
        instruction:
          "Ladle the hot broth over the noodles. Top each bowl with sliced chashu pork, a halved marinated egg, nori, green onions, and corn. Serve immediately while piping hot.",
      },
    ],
    nutrition: { calories: 520, protein: 32, carbs: 48, fat: 22, fiber: 2 },
    tags: ["comfort-food", "dairy-free", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["pho", "dan-dan-noodles", "laksa"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "dumplings",
    name: "Dumplings",
    emoji: "\uD83E\uDD5F",
    description:
      "Juicy pork and chive dumplings with thin, delicate wrappers, pan-fried until the bottoms are golden and crispy. Served with a soy-vinegar-chili dipping sauce.",
    cuisine: "Chinese",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 40,
    cookTime: 15,
    totalTime: 55,
    servings: 4,
    ingredients: [
      { name: "ground pork", amount: "1", unit: "lb" },
      { name: "napa cabbage, finely chopped", amount: "1", unit: "cup" },
      { name: "garlic chives or green onions, chopped", amount: "1/4", unit: "cup" },
      { name: "soy sauce", amount: "2", unit: "tbsp" },
      { name: "sesame oil", amount: "1", unit: "tbsp" },
      { name: "fresh ginger, grated", amount: "1", unit: "tsp" },
      { name: "white pepper", amount: "1/4", unit: "tsp" },
      { name: "round dumpling wrappers", amount: "40", unit: "wrappers" },
      { name: "vegetable oil", amount: "2", unit: "tbsp" },
      { name: "water (for steaming)", amount: "1/3", unit: "cup" },
      { name: "soy sauce", amount: "2", unit: "tbsp", group: "For the dipping sauce" },
      { name: "rice vinegar", amount: "1", unit: "tbsp", group: "For the dipping sauce" },
      { name: "chili oil", amount: "1", unit: "tsp", group: "For the dipping sauce" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Salt the chopped cabbage and let sit 10 minutes, then squeeze out all excess water. Combine with pork, chives, soy sauce, sesame oil, ginger, and white pepper. Mix in one direction until the filling becomes sticky and cohesive.",
      },
      {
        step: 2,
        instruction:
          "Place a heaping teaspoon of filling in the center of each wrapper. Moisten the edges with water and fold into half-moons, pleating one side to seal.",
        tip: "Don't overfill. The filling expands when cooked, and overstuffed dumplings burst open.",
      },
      {
        step: 3,
        instruction:
          "Heat oil in a large non-stick skillet over medium-high heat. Place dumplings flat-side down in a single layer. Cook for 2 minutes until the bottoms are golden.",
      },
      {
        step: 4,
        instruction:
          "Add 1/3 cup water to the skillet and immediately cover. Steam for 6-7 minutes until the water evaporates and the filling is cooked through. Remove the lid and cook 1 more minute to re-crisp the bottoms.",
      },
      {
        step: 5,
        instruction:
          "Mix the dipping sauce: soy sauce, rice vinegar, and chili oil. Serve the dumplings with the sauce.",
      },
    ],
    nutrition: { calories: 360, protein: 22, carbs: 36, fat: 14, fiber: 2 },
    tags: ["dairy-free", "meal-prep"],
    youtubeVideoId: null,
    relatedSlugs: ["bao-buns", "pierogi", "okonomiyaki"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "nasi-goreng",
    name: "Nasi Goreng",
    emoji: "\uD83C\uDF5B",
    description:
      "Indonesia's beloved fried rice, rich with sweet soy sauce, shrimp paste, and sambal. Topped with a crispy fried egg, prawn crackers, and sliced cucumber.",
    cuisine: "Indonesian",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 2,
    ingredients: [
      { name: "day-old cooked rice", amount: "3", unit: "cups" },
      { name: "chicken breast, diced small", amount: "6", unit: "oz" },
      { name: "large eggs", amount: "2", unit: "whole" },
      { name: "kecap manis (sweet soy sauce)", amount: "2", unit: "tbsp" },
      { name: "sambal oelek", amount: "1", unit: "tbsp" },
      { name: "shrimp paste (optional)", amount: "1/2", unit: "tsp" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "shallot, thinly sliced", amount: "1", unit: "small" },
      { name: "vegetable oil", amount: "2", unit: "tbsp" },
      { name: "cucumber slices", amount: "1/2", unit: "cup", group: "Garnishes" },
      { name: "green onions, sliced", amount: "2", unit: "stalks", group: "Garnishes" },
      { name: "prawn crackers", amount: "8", unit: "pieces", group: "Garnishes" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat 1 tbsp oil in a wok over high heat. Cook the diced chicken until golden, about 4 minutes. Remove and set aside.",
      },
      {
        step: 2,
        instruction:
          "Add remaining oil. Fry the shallot and garlic for 30 seconds. Add shrimp paste (if using) and sambal oelek, cook 15 seconds.",
      },
      {
        step: 3,
        instruction:
          "Add the cold rice and stir-fry over high heat for 3-4 minutes, breaking up any clumps. Add kecap manis and toss until the rice is evenly coated and slightly caramelized.",
        tip: "Day-old rice is essential. Fresh rice is too moist and will turn into a sticky mess. Spread leftover rice on a sheet pan in the fridge to dry it out.",
      },
      {
        step: 4,
        instruction:
          "Return the chicken to the wok. Toss to combine. Meanwhile, fry the eggs sunny-side up in a separate pan.",
      },
      {
        step: 5,
        instruction:
          "Mound the rice on plates. Top each with a fried egg, cucumber slices, green onions, and prawn crackers on the side.",
      },
    ],
    nutrition: { calories: 480, protein: 28, carbs: 56, fat: 16, fiber: 2 },
    tags: ["quick", "dairy-free", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["kimchi-fried-rice", "pad-thai", "thai-basil-chicken"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "tagine",
    name: "Tagine",
    emoji: "\uD83C\uDDF2\uD83C\uDDE6",
    description:
      "Tender chicken thighs braised with preserved lemons, green olives, saffron, and warm spices. A fragrant Moroccan stew served over fluffy couscous.",
    cuisine: "Moroccan",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 50,
    totalTime: 65,
    servings: 4,
    ingredients: [
      { name: "bone-in chicken thighs", amount: "8", unit: "pieces" },
      { name: "preserved lemon, rind only, chopped", amount: "2", unit: "tbsp" },
      { name: "green olives, pitted", amount: "1/2", unit: "cup" },
      { name: "yellow onion, grated", amount: "1", unit: "large" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "fresh cilantro, chopped", amount: "1/4", unit: "cup" },
      { name: "ground ginger", amount: "1", unit: "tsp" },
      { name: "ground cumin", amount: "1", unit: "tsp" },
      { name: "ground turmeric", amount: "1/2", unit: "tsp" },
      { name: "saffron threads", amount: "1/4", unit: "tsp" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "chicken broth", amount: "1", unit: "cup" },
      { name: "couscous", amount: "1.5", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Season chicken with salt, ginger, cumin, and turmeric. Heat olive oil in a tagine or Dutch oven over medium-high heat. Brown the chicken on both sides, about 3 minutes per side. Remove.",
      },
      {
        step: 2,
        instruction:
          "In the same pot, cook the grated onion and garlic for 5 minutes until softened. Add saffron and broth, stirring to scrape up brown bits.",
      },
      {
        step: 3,
        instruction:
          "Return the chicken to the pot. Add preserved lemon and olives. Cover and simmer on low for 40 minutes until the chicken is falling off the bone.",
        tip: "If you can't find preserved lemons, use lemon zest plus a tablespoon of fresh lemon juice stirred in at the end.",
      },
      {
        step: 4,
        instruction:
          "Prepare couscous according to the package directions. Fluff with a fork. Serve the tagine over the couscous, garnished with fresh cilantro.",
      },
    ],
    nutrition: { calories: 480, protein: 36, carbs: 34, fat: 22, fiber: 3 },
    tags: ["dairy-free", "gluten-free", "meal-prep"],
    youtubeVideoId: null,
    relatedSlugs: ["butter-chicken", "jollof-rice", "chicken-souvlaki"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "injera-with-wat",
    name: "Injera with Wat",
    emoji: "\uD83C\uDDEA\uD83C\uDDF9",
    description:
      "Spongy, tangy injera bread served with Doro Wat, a deeply spiced Ethiopian chicken stew made with berbere, caramelized onions, and hard-boiled eggs.",
    cuisine: "Ethiopian",
    mealType: "dinner",
    difficulty: "Advanced",
    prepTime: 20,
    cookTime: 90,
    totalTime: 110,
    servings: 4,
    ingredients: [
      { name: "chicken drumsticks and thighs", amount: "2", unit: "lbs" },
      { name: "red onions, finely diced", amount: "4", unit: "large" },
      { name: "berbere spice blend", amount: "3", unit: "tbsp" },
      { name: "niter kibbeh (spiced butter) or regular butter", amount: "3", unit: "tbsp" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves" },
      { name: "fresh ginger, grated", amount: "1", unit: "tbsp" },
      { name: "tomato paste", amount: "2", unit: "tbsp" },
      { name: "chicken broth", amount: "1", unit: "cup" },
      { name: "hard-boiled eggs, peeled", amount: "4", unit: "whole" },
      { name: "lemon juice", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "injera bread (store-bought or homemade)", amount: "4", unit: "rounds" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Dry-cook the diced onions in a large pot over medium heat (no oil) for 15-20 minutes, stirring frequently, until they caramelize and turn deeply golden. This is the flavor base of the entire dish.",
        tip: "Patience with the onions is everything. Don't rush this step or add oil. The dry caramelization creates the unique flavor that defines Ethiopian cooking.",
      },
      {
        step: 2,
        instruction:
          "Add the niter kibbeh and berbere. Cook for 2 minutes until fragrant. Add garlic, ginger, and tomato paste. Cook another 3 minutes.",
      },
      {
        step: 3,
        instruction:
          "Add the chicken pieces and broth. Cover and simmer on low for 45-60 minutes until the chicken is very tender and the sauce has thickened.",
      },
      {
        step: 4,
        instruction:
          "Score the hard-boiled eggs with a few shallow cuts (this lets the sauce penetrate). Nestle them into the stew for the last 10 minutes. Season with lemon juice and salt.",
      },
      {
        step: 5,
        instruction:
          "Serve on a large plate lined with injera. Spoon the stew with eggs on top. Use torn pieces of injera to scoop up the food.",
      },
    ],
    nutrition: { calories: 520, protein: 40, carbs: 28, fat: 26, fiber: 4 },
    tags: ["high-protein", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["tagine", "jollof-rice", "butter-chicken"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "goulash",
    name: "Goulash",
    emoji: "\uD83C\uDDED\uD83C\uDDFA",
    description:
      "A rich Hungarian beef stew swimming with sweet paprika, tender chunks of beef, potatoes, and peppers. Slow-simmered until the meat melts in your mouth.",
    cuisine: "Hungarian",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 120,
    totalTime: 140,
    servings: 6,
    ingredients: [
      { name: "beef chuck, cut into 1-inch cubes", amount: "2", unit: "lbs" },
      { name: "yellow onions, diced", amount: "3", unit: "large" },
      { name: "Hungarian sweet paprika", amount: "3", unit: "tbsp" },
      { name: "smoked paprika", amount: "1", unit: "tsp" },
      { name: "caraway seeds", amount: "1", unit: "tsp" },
      { name: "red bell peppers, diced", amount: "2", unit: "medium" },
      { name: "Yukon Gold potatoes, cubed", amount: "2", unit: "medium" },
      { name: "canned diced tomatoes", amount: "1", unit: "cup" },
      { name: "beef broth", amount: "3", unit: "cups" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "vegetable oil", amount: "2", unit: "tbsp" },
      { name: "sour cream, for serving", amount: "1/4", unit: "cup" },
      { name: "salt", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat oil in a Dutch oven over medium-high heat. Brown the beef in batches (don't crowd the pot). Remove and set aside.",
      },
      {
        step: 2,
        instruction:
          "Reduce heat to medium. Add the onions and cook for 8-10 minutes until very soft and golden. Remove from heat and stir in both paprikas and caraway seeds.",
        tip: "Add the paprika off the heat. Paprika burns easily and turns bitter. The residual heat is enough to bloom the spices.",
      },
      {
        step: 3,
        instruction:
          "Return beef to the pot. Add garlic, tomatoes, bell peppers, and broth. Bring to a boil, then cover and simmer on low for 1.5 hours.",
      },
      {
        step: 4,
        instruction:
          "Add the potatoes and continue simmering for 30 minutes until the potatoes and beef are tender. Season with salt.",
      },
      {
        step: 5,
        instruction:
          "Serve in deep bowls with a dollop of sour cream. Crusty bread on the side is essential.",
      },
    ],
    nutrition: { calories: 440, protein: 36, carbs: 28, fat: 20, fiber: 5 },
    tags: ["comfort-food", "meal-prep", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["beef-stew", "pierogi", "moussaka"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "peking-duck-pancakes",
    name: "Peking Duck Pancakes",
    emoji: "\uD83E\uDD86",
    description:
      "Crispy-skinned roasted duck wrapped in thin Mandarin pancakes with hoisin sauce, cucumber batons, and scallions. A simplified version of Beijing's most famous dish.",
    cuisine: "Chinese",
    mealType: "dinner",
    difficulty: "Advanced",
    prepTime: 30,
    cookTime: 90,
    totalTime: 120,
    servings: 4,
    ingredients: [
      { name: "whole duck", amount: "4", unit: "lb" },
      { name: "five-spice powder", amount: "1", unit: "tsp" },
      { name: "honey", amount: "2", unit: "tbsp" },
      { name: "soy sauce", amount: "2", unit: "tbsp" },
      { name: "rice vinegar", amount: "1", unit: "tbsp" },
      { name: "Mandarin pancakes (store-bought)", amount: "16", unit: "pieces" },
      { name: "hoisin sauce", amount: "1/4", unit: "cup" },
      { name: "cucumber, cut into matchsticks", amount: "1", unit: "medium" },
      { name: "green onions, cut into strips", amount: "6", unit: "stalks" },
      { name: "salt", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Pat the duck very dry inside and out. Rub with five-spice powder and salt. Mix honey, soy sauce, and rice vinegar, then brush all over the duck. Place uncovered on a rack in the fridge for at least 4 hours (overnight is best).",
        tip: "The overnight air-drying in the fridge is what gives you crackling crispy skin. Don't skip this step.",
      },
      {
        step: 2,
        instruction:
          "Preheat oven to 350F. Place the duck breast-side up on a rack over a roasting pan. Roast for 75-90 minutes until the skin is deep mahogany and crispy. The internal temperature should reach 165F.",
      },
      {
        step: 3,
        instruction:
          "Rest the duck for 15 minutes. Carve the skin and meat into thin slices.",
      },
      {
        step: 4,
        instruction:
          "Warm the pancakes according to the package directions (usually steamed for 2 minutes). Spread each pancake with hoisin sauce, add duck slices, cucumber, and scallion strips. Roll up and serve.",
      },
    ],
    nutrition: { calories: 480, protein: 28, carbs: 32, fat: 26, fiber: 1 },
    tags: ["dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["bao-buns", "crispy-pork-belly", "dumplings"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "rendang",
    name: "Rendang",
    emoji: "\uD83C\uDDEE\uD83C\uDDE9",
    description:
      "Indonesian dry beef curry slow-cooked in coconut milk with lemongrass, galangal, and chili until the sauce reduces into an intensely flavored coating. Often called the world's most delicious food.",
    cuisine: "Indonesian",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 150,
    totalTime: 170,
    servings: 6,
    ingredients: [
      { name: "beef chuck, cut into 2-inch cubes", amount: "2", unit: "lbs" },
      { name: "coconut milk", amount: "2", unit: "cans (14 oz)" },
      { name: "lemongrass stalks, bruised", amount: "2", unit: "stalks" },
      { name: "galangal or ginger, sliced", amount: "2", unit: "inch" },
      { name: "red chilies, seeded", amount: "6", unit: "whole" },
      { name: "shallots", amount: "4", unit: "medium" },
      { name: "garlic cloves", amount: "4", unit: "cloves" },
      { name: "turmeric powder", amount: "1", unit: "tsp" },
      { name: "ground coriander", amount: "1", unit: "tsp" },
      { name: "toasted coconut flakes", amount: "1/4", unit: "cup" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "steamed rice, for serving", amount: "3", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Blend the chilies, shallots, garlic, turmeric, and coriander into a smooth paste with a splash of coconut milk.",
      },
      {
        step: 2,
        instruction:
          "In a large, heavy-bottomed pot, combine the paste, remaining coconut milk, lemongrass, galangal, and toasted coconut. Bring to a simmer over medium heat.",
      },
      {
        step: 3,
        instruction:
          "Add the beef and salt. Bring to a boil, then reduce to a very low simmer, uncovered. Cook for 2-2.5 hours, stirring every 20 minutes.",
        tip: "The magic happens when the coconut milk reduces and the oil separates out. The beef fries in its own coconut oil at the end, which creates the dark, caramelized coating.",
      },
      {
        step: 4,
        instruction:
          "The rendang is done when the sauce has reduced completely, the meat is dark and tender, and the oil has separated. The beef should be coated in a thick, dry paste. Serve over steamed rice.",
      },
    ],
    nutrition: { calories: 480, protein: 34, carbs: 8, fat: 36, fiber: 2 },
    tags: ["gluten-free", "dairy-free", "meal-prep"],
    youtubeVideoId: null,
    relatedSlugs: ["massaman-curry", "green-curry", "nasi-goreng"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "katsu-curry",
    name: "Katsu Curry",
    emoji: "\uD83C\uDF5B",
    description:
      "Crispy panko-breaded chicken cutlet served over fluffy rice with a mild, sweet Japanese curry sauce. The satisfying crunch against velvety curry is pure comfort.",
    cuisine: "Japanese",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 30,
    totalTime: 50,
    servings: 4,
    ingredients: [
      { name: "boneless chicken breasts, pounded thin", amount: "4", unit: "pieces" },
      { name: "all-purpose flour", amount: "1/2", unit: "cup" },
      { name: "large eggs, beaten", amount: "2", unit: "whole" },
      { name: "panko breadcrumbs", amount: "1.5", unit: "cups" },
      { name: "vegetable oil, for frying", amount: "1", unit: "cup" },
      { name: "yellow onion, diced", amount: "1", unit: "large", group: "For the curry sauce" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves", group: "For the curry sauce" },
      { name: "fresh ginger, grated", amount: "1", unit: "tsp", group: "For the curry sauce" },
      { name: "curry powder", amount: "2", unit: "tbsp", group: "For the curry sauce" },
      { name: "honey", amount: "1", unit: "tbsp", group: "For the curry sauce" },
      { name: "soy sauce", amount: "2", unit: "tbsp", group: "For the curry sauce" },
      { name: "chicken broth", amount: "2", unit: "cups", group: "For the curry sauce" },
      { name: "all-purpose flour (for roux)", amount: "2", unit: "tbsp", group: "For the curry sauce" },
      { name: "steamed rice", amount: "3", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Make the curry sauce: saute onion in a tablespoon of oil until soft, 5 minutes. Add garlic and ginger, cook 1 minute. Stir in curry powder and flour, cook 1 minute. Gradually add broth, soy sauce, and honey. Simmer 15 minutes until thickened. Blend until smooth if desired.",
      },
      {
        step: 2,
        instruction:
          "Set up a breading station: flour, beaten eggs, and panko in three shallow dishes. Season the chicken with salt and pepper. Dredge in flour, dip in egg, then press into panko.",
        tip: "Press the panko firmly into the chicken. Use one hand for dry ingredients and one for wet to avoid clumpy fingers.",
      },
      {
        step: 3,
        instruction:
          "Heat oil to 350F in a large skillet. Fry the chicken cutlets for 3-4 minutes per side until golden brown and cooked through (165F internal). Drain on a wire rack.",
      },
      {
        step: 4,
        instruction:
          "Slice the katsu into strips. Serve over rice and ladle the curry sauce over one side, leaving the other side crispy.",
      },
    ],
    nutrition: { calories: 560, protein: 38, carbs: 52, fat: 22, fiber: 3 },
    tags: ["comfort-food", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["japanese-curry-rice", "chicken-korma", "ramen"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "laksa",
    name: "Laksa",
    emoji: "\uD83C\uDF5C",
    description:
      "A spicy coconut curry noodle soup from Malaysia and Singapore, loaded with shrimp, tofu puffs, and rice noodles in a rich, aromatic broth that's both creamy and fiery.",
    cuisine: "Malaysian",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    ingredients: [
      { name: "rice vermicelli noodles", amount: "8", unit: "oz" },
      { name: "large shrimp, peeled", amount: "12", unit: "oz" },
      { name: "coconut milk", amount: "1", unit: "can (14 oz)" },
      { name: "chicken broth", amount: "3", unit: "cups" },
      { name: "laksa paste (store-bought)", amount: "4", unit: "tbsp" },
      { name: "tofu puffs, halved", amount: "8", unit: "pieces" },
      { name: "fish sauce", amount: "2", unit: "tbsp" },
      { name: "sugar", amount: "1", unit: "tsp" },
      { name: "bean sprouts", amount: "1", unit: "cup", group: "Garnishes" },
      { name: "fresh cilantro", amount: "1/4", unit: "cup", group: "Garnishes" },
      { name: "laksa leaf or Vietnamese mint", amount: "8", unit: "leaves", group: "Garnishes" },
      { name: "lime wedges", amount: "4", unit: "wedges", group: "Garnishes" },
      { name: "sambal oelek", amount: "1", unit: "tbsp", group: "Garnishes" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Cook the laksa paste in a large pot over medium heat for 2 minutes until fragrant. Add the chicken broth and coconut milk. Bring to a simmer.",
      },
      {
        step: 2,
        instruction:
          "Season with fish sauce and sugar. Add the tofu puffs and simmer for 10 minutes to let them absorb the broth.",
      },
      {
        step: 3,
        instruction:
          "Add the shrimp and cook for 3-4 minutes until pink and curled. Cook the vermicelli noodles according to the package and drain.",
        tip: "If you can't find laksa paste, blend together: 4 dried chilies, 2 lemongrass stalks, 1 inch galangal, 3 shallots, 2 garlic cloves, and 1 tsp shrimp paste.",
      },
      {
        step: 4,
        instruction:
          "Divide noodles between bowls. Ladle the curry broth over with shrimp and tofu puffs. Top with bean sprouts, cilantro, laksa leaf, a squeeze of lime, and sambal on the side.",
      },
    ],
    nutrition: { calories: 440, protein: 28, carbs: 42, fat: 18, fiber: 2 },
    tags: ["dairy-free", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["pho", "ramen", "khao-soi"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "butter-garlic-naan",
    name: "Butter Garlic Naan",
    emoji: "\uD83E\uDD68",
    description:
      "Soft, pillowy naan bread blistered in a hot skillet, brushed with garlic butter, and sprinkled with cilantro. Better than any restaurant version and surprisingly easy to make.",
    cuisine: "Indian",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    servings: 6,
    ingredients: [
      { name: "all-purpose flour", amount: "2.5", unit: "cups" },
      { name: "plain yogurt", amount: "1/2", unit: "cup" },
      { name: "warm water", amount: "1/4", unit: "cup" },
      { name: "instant yeast", amount: "1", unit: "tsp" },
      { name: "sugar", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "baking powder", amount: "1/2", unit: "tsp" },
      { name: "unsalted butter, melted", amount: "3", unit: "tbsp", group: "For the garlic butter" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves", group: "For the garlic butter" },
      { name: "fresh cilantro, chopped", amount: "2", unit: "tbsp", group: "For the garlic butter" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Mix warm water, yeast, and sugar. Let sit 5 minutes until foamy. Combine flour, salt, and baking powder in a bowl. Add the yeast mixture and yogurt. Knead for 5 minutes until smooth and elastic. Cover and let rise 1 hour.",
      },
      {
        step: 2,
        instruction:
          "Divide the dough into 6 pieces. Roll each into an oval about 1/4-inch thick.",
      },
      {
        step: 3,
        instruction:
          "Heat a cast iron skillet over high heat until smoking. Cook each naan for 1-2 minutes per side until puffed and charred in spots.",
        tip: "Get the skillet screaming hot. The high heat is what creates the characteristic bubbles and char. Don't be afraid of a little smoke.",
      },
      {
        step: 4,
        instruction:
          "Mix the melted butter with minced garlic. Brush each hot naan generously with garlic butter and sprinkle with cilantro.",
      },
    ],
    nutrition: { calories: 240, protein: 7, carbs: 38, fat: 7, fiber: 2 },
    tags: ["vegetarian", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["butter-chicken", "palak-paneer", "dal-makhani"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "palak-paneer",
    name: "Palak Paneer",
    emoji: "\uD83E\uDD6C",
    description:
      "Cubes of soft paneer cheese in a vibrant, creamy spinach sauce spiced with cumin, garam masala, and a touch of cream. The most popular vegetarian curry in Indian cuisine.",
    cuisine: "Indian",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    servings: 4,
    ingredients: [
      { name: "paneer cheese, cubed", amount: "12", unit: "oz" },
      { name: "fresh spinach", amount: "10", unit: "oz" },
      { name: "yellow onion, diced", amount: "1", unit: "medium" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "fresh ginger, grated", amount: "1", unit: "tsp" },
      { name: "green chili, slit", amount: "1", unit: "whole" },
      { name: "ground cumin", amount: "1", unit: "tsp" },
      { name: "garam masala", amount: "1", unit: "tsp" },
      { name: "ground turmeric", amount: "1/2", unit: "tsp" },
      { name: "heavy cream", amount: "2", unit: "tbsp" },
      { name: "ghee or vegetable oil", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "steamed basmati rice", amount: "2", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Blanch the spinach in boiling water for 2 minutes. Drain and immediately transfer to ice water. Squeeze out excess water and blend into a smooth puree.",
      },
      {
        step: 2,
        instruction:
          "Heat ghee in a pan over medium heat. Fry the paneer cubes until lightly golden on all sides, about 2 minutes. Remove and set aside.",
      },
      {
        step: 3,
        instruction:
          "In the same pan, cook the onion for 5 minutes. Add garlic, ginger, and green chili. Cook 1 minute. Add cumin, garam masala, and turmeric. Cook 30 seconds.",
        tip: "Don't skip blanching the spinach in ice water. It preserves the vibrant green color. Without it, the dish turns an unappetizing dark green.",
      },
      {
        step: 4,
        instruction:
          "Add the spinach puree and salt. Simmer 5 minutes. Stir in the cream and paneer. Cook 3 more minutes until the paneer is heated through. Serve with basmati rice or naan.",
      },
    ],
    nutrition: { calories: 340, protein: 18, carbs: 12, fat: 26, fiber: 4 },
    tags: ["vegetarian", "gluten-free", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["butter-chicken", "chana-masala", "dal-makhani"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "carne-asada",
    name: "Carne Asada",
    emoji: "\uD83E\uDD69",
    description:
      "Charred, juicy skirt steak marinated in lime juice, garlic, cumin, and cilantro, sliced thin against the grain. Serve with warm tortillas, grilled onions, and all the fixings.",
    cuisine: "Mexican",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 4,
    ingredients: [
      { name: "skirt or flank steak", amount: "1.5", unit: "lbs" },
      { name: "lime juice", amount: "1/4", unit: "cup" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves" },
      { name: "ground cumin", amount: "1", unit: "tsp" },
      { name: "chili powder", amount: "1", unit: "tsp" },
      { name: "fresh cilantro, chopped", amount: "1/4", unit: "cup" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "flour tortillas", amount: "8", unit: "small" },
      { name: "grilled onion, sliced", amount: "1", unit: "medium" },
      { name: "salsa verde", amount: "1/2", unit: "cup" },
      { name: "lime wedges", amount: "4", unit: "wedges" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Combine lime juice, olive oil, garlic, cumin, chili powder, cilantro, and salt. Marinate the steak for at least 30 minutes (up to 4 hours in the fridge).",
        tip: "Don't marinate longer than 4 hours. The acid in lime juice will start to break down the meat fibers and make it mushy.",
      },
      {
        step: 2,
        instruction:
          "Heat a grill or cast iron skillet to very high heat. Pat the steak dry. Sear for 3-4 minutes per side for medium-rare. The char is important.",
      },
      {
        step: 3,
        instruction:
          "Rest the steak for 5 minutes, then slice thin against the grain. Grill the onion slices and warm the tortillas.",
      },
      {
        step: 4,
        instruction:
          "Serve the sliced steak on warm tortillas with grilled onions, salsa verde, and lime wedges.",
      },
    ],
    nutrition: { calories: 420, protein: 36, carbs: 28, fat: 18, fiber: 2 },
    tags: ["high-protein", "quick", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["birria-tacos", "empanadas", "arepas"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chicken-souvlaki",
    name: "Chicken Souvlaki",
    emoji: "\uD83C\uDDEC\uD83C\uDDF7",
    description:
      "Tender chicken skewers marinated in lemon, oregano, and garlic, grilled until charred and juicy. Served in warm pita with tzatziki, tomatoes, red onion, and crisp lettuce.",
    cuisine: "Greek",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    servings: 4,
    ingredients: [
      { name: "boneless chicken thighs, cubed", amount: "1.5", unit: "lbs" },
      { name: "olive oil", amount: "3", unit: "tbsp" },
      { name: "lemon juice", amount: "2", unit: "tbsp" },
      { name: "dried oregano", amount: "1", unit: "tbsp" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "pita bread", amount: "4", unit: "rounds" },
      { name: "tzatziki sauce", amount: "1/2", unit: "cup" },
      { name: "Roma tomato, diced", amount: "1", unit: "medium" },
      { name: "red onion, thinly sliced", amount: "1/4", unit: "small" },
      { name: "lettuce, shredded", amount: "1", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Combine olive oil, lemon juice, oregano, garlic, and salt. Toss with the chicken. Marinate at least 30 minutes. Thread onto skewers.",
      },
      {
        step: 2,
        instruction:
          "Grill or pan-sear over medium-high heat for 10-12 minutes, turning occasionally, until charred and cooked through (165F).",
        tip: "Use chicken thighs, not breasts. Thighs stay juicy on the grill. Breasts dry out too easily at high heat.",
      },
      {
        step: 3,
        instruction:
          "Warm the pita on the grill for 30 seconds per side. Slide the chicken off the skewers onto the pita.",
      },
      {
        step: 4,
        instruction:
          "Top with tzatziki, tomato, red onion, and shredded lettuce. Roll up and serve.",
      },
    ],
    nutrition: { calories: 440, protein: 36, carbs: 32, fat: 18, fiber: 2 },
    tags: ["high-protein", "mediterranean", "quick"],
    youtubeVideoId: null,
    relatedSlugs: ["moussaka", "falafel-bowl", "chicken-shawarma-plate"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "banh-xeo",
    name: "B\u00e1nh X\u00e8o",
    emoji: "\uD83E\uDD5E",
    description:
      "Crispy, golden Vietnamese crepes made with coconut milk and turmeric, stuffed with shrimp, pork, and bean sprouts. Wrapped in lettuce with fresh herbs and dipped in nuoc cham.",
    cuisine: "Vietnamese",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 20,
    totalTime: 40,
    servings: 4,
    ingredients: [
      { name: "rice flour", amount: "1", unit: "cup" },
      { name: "coconut milk", amount: "1/2", unit: "cup" },
      { name: "water", amount: "1", unit: "cup" },
      { name: "turmeric powder", amount: "1/2", unit: "tsp" },
      { name: "salt", amount: "1/2", unit: "tsp" },
      { name: "shrimp, peeled and halved", amount: "8", unit: "oz" },
      { name: "pork belly, thinly sliced", amount: "4", unit: "oz" },
      { name: "yellow onion, thinly sliced", amount: "1/2", unit: "medium" },
      { name: "bean sprouts", amount: "2", unit: "cups" },
      { name: "vegetable oil", amount: "3", unit: "tbsp" },
      { name: "butter lettuce leaves", amount: "12", unit: "leaves", group: "For serving" },
      { name: "fresh mint", amount: "1/2", unit: "cup", group: "For serving" },
      { name: "fresh cilantro", amount: "1/2", unit: "cup", group: "For serving" },
      { name: "fish sauce", amount: "2", unit: "tbsp", group: "For the nuoc cham" },
      { name: "lime juice", amount: "2", unit: "tbsp", group: "For the nuoc cham" },
      { name: "sugar", amount: "1", unit: "tbsp", group: "For the nuoc cham" },
      { name: "garlic, minced", amount: "1", unit: "clove", group: "For the nuoc cham" },
      { name: "Thai chili, sliced", amount: "1", unit: "whole", group: "For the nuoc cham" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Whisk together rice flour, coconut milk, water, turmeric, and salt until smooth. Let the batter rest for 15 minutes.",
      },
      {
        step: 2,
        instruction:
          "Make the nuoc cham: stir together fish sauce, lime juice, sugar, garlic, chili, and 2 tbsp warm water until the sugar dissolves.",
      },
      {
        step: 3,
        instruction:
          "Heat oil in a non-stick skillet over high heat. Add some pork and shrimp, cook 1 minute. Add onion slices. Pour in a thin layer of batter, swirling to coat the pan. Add bean sprouts to one half.",
        tip: "The pan needs to be very hot when you add the batter. The sizzling sound (xeo!) is what gives this dish its name. If it doesn't sizzle, the pan isn't hot enough.",
      },
      {
        step: 4,
        instruction:
          "Cover and cook for 2-3 minutes until the edges are crispy and pull away from the pan. Fold in half like an omelet. Repeat with remaining batter and filling.",
      },
      {
        step: 5,
        instruction:
          "To eat: tear off a piece of crepe, wrap it in a lettuce leaf with herbs, and dip in nuoc cham.",
      },
    ],
    nutrition: { calories: 360, protein: 22, carbs: 32, fat: 16, fiber: 2 },
    tags: ["gluten-free", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["vietnamese-spring-rolls", "pho", "pad-thai"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "khao-soi",
    name: "Khao Soi",
    emoji: "\uD83C\uDF5C",
    description:
      "Northern Thai coconut curry noodle soup topped with crispy fried noodles, pickled mustard greens, shallots, and a squeeze of lime. Creamy, spicy, crunchy, and tangy in every bite.",
    cuisine: "Thai",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    ingredients: [
      { name: "bone-in chicken thighs", amount: "1.5", unit: "lbs" },
      { name: "coconut milk", amount: "1", unit: "can (14 oz)" },
      { name: "chicken broth", amount: "2", unit: "cups" },
      { name: "red curry paste", amount: "3", unit: "tbsp" },
      { name: "curry powder", amount: "1", unit: "tbsp" },
      { name: "fish sauce", amount: "2", unit: "tbsp" },
      { name: "palm sugar or brown sugar", amount: "1", unit: "tbsp" },
      { name: "egg noodles", amount: "12", unit: "oz" },
      { name: "vegetable oil", amount: "1", unit: "cup", group: "For frying noodles" },
      { name: "shallots, sliced", amount: "2", unit: "small", group: "Garnishes" },
      { name: "pickled mustard greens", amount: "1/4", unit: "cup", group: "Garnishes" },
      { name: "lime wedges", amount: "4", unit: "wedges", group: "Garnishes" },
      { name: "fresh cilantro", amount: "1/4", unit: "cup", group: "Garnishes" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Reserve a small handful of dry egg noodles. Fry them in hot oil until crispy and golden, about 30 seconds. Drain on paper towels. Cook the rest of the noodles per package instructions.",
      },
      {
        step: 2,
        instruction:
          "Skim the thick cream off the top of the coconut milk. Cook it in a pot over medium-high heat until it splits and the oil separates, about 3 minutes. Add curry paste and curry powder, fry for 1 minute.",
        tip: "Frying the curry paste in the coconut cream before adding liquid is the Thai technique that builds deep, layered flavor.",
      },
      {
        step: 3,
        instruction:
          "Add the remaining coconut milk, broth, fish sauce, and sugar. Add the chicken thighs. Simmer for 25 minutes until the chicken is cooked through and tender.",
      },
      {
        step: 4,
        instruction:
          "Remove the chicken, shred the meat, and return it to the broth. Divide cooked noodles between bowls, ladle the curry over top, and garnish with crispy noodles, shallots, pickled greens, cilantro, and a lime wedge.",
      },
    ],
    nutrition: { calories: 480, protein: 30, carbs: 40, fat: 22, fiber: 2 },
    tags: ["comfort-food", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["laksa", "green-curry", "massaman-curry"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chana-masala",
    name: "Chana Masala",
    emoji: "\uD83E\uDED8",
    description:
      "Chickpeas simmered in a bold, tangy tomato sauce with ginger, garlic, and warm spices. A North Indian staple that's hearty, satisfying, and completely plant-based.",
    cuisine: "Indian",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 30,
    totalTime: 40,
    servings: 4,
    ingredients: [
      { name: "canned chickpeas, drained", amount: "2", unit: "cans (15 oz)" },
      { name: "yellow onion, diced", amount: "1", unit: "large" },
      { name: "canned crushed tomatoes", amount: "1", unit: "cup" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves" },
      { name: "fresh ginger, grated", amount: "1", unit: "tbsp" },
      { name: "ground cumin", amount: "1", unit: "tsp" },
      { name: "ground coriander", amount: "1", unit: "tsp" },
      { name: "garam masala", amount: "1", unit: "tsp" },
      { name: "turmeric", amount: "1/2", unit: "tsp" },
      { name: "cayenne pepper", amount: "1/4", unit: "tsp" },
      { name: "vegetable oil", amount: "2", unit: "tbsp" },
      { name: "lemon juice", amount: "1", unit: "tbsp" },
      { name: "fresh cilantro", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "steamed basmati rice", amount: "2", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat oil in a large pan over medium heat. Cook the onion for 6-7 minutes until golden. Add garlic and ginger, cook 1 minute.",
      },
      {
        step: 2,
        instruction:
          "Add cumin, coriander, garam masala, turmeric, and cayenne. Stir for 30 seconds until fragrant.",
      },
      {
        step: 3,
        instruction:
          "Add the crushed tomatoes and cook for 5 minutes until thickened. Add the chickpeas and 1/2 cup water. Simmer for 20 minutes, stirring occasionally.",
        tip: "For creamier chana masala, mash about a quarter of the chickpeas against the side of the pot. This thickens the sauce naturally.",
      },
      {
        step: 4,
        instruction:
          "Finish with lemon juice, salt, and fresh cilantro. Serve over basmati rice or with naan.",
      },
    ],
    nutrition: { calories: 320, protein: 14, carbs: 48, fat: 10, fiber: 12 },
    tags: ["vegan", "gluten-free", "budget", "meal-prep"],
    youtubeVideoId: null,
    relatedSlugs: ["palak-paneer", "dal-makhani", "butter-chicken"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "massaman-curry",
    name: "Massaman Curry",
    emoji: "\uD83C\uDF5B",
    description:
      "A mild, fragrant Thai curry with falling-apart beef, potatoes, and peanuts in a rich coconut sauce perfumed with cinnamon, cardamom, and star anise.",
    cuisine: "Thai",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 60,
    totalTime: 75,
    servings: 4,
    ingredients: [
      { name: "beef chuck, cubed", amount: "1.5", unit: "lbs" },
      { name: "coconut milk", amount: "1", unit: "can (14 oz)" },
      { name: "massaman curry paste", amount: "3", unit: "tbsp" },
      { name: "Yukon Gold potatoes, cubed", amount: "2", unit: "medium" },
      { name: "yellow onion, quartered", amount: "1", unit: "medium" },
      { name: "roasted peanuts", amount: "1/4", unit: "cup" },
      { name: "fish sauce", amount: "2", unit: "tbsp" },
      { name: "palm sugar or brown sugar", amount: "1", unit: "tbsp" },
      { name: "tamarind paste", amount: "1", unit: "tbsp" },
      { name: "cinnamon stick", amount: "1", unit: "whole" },
      { name: "cardamom pods", amount: "3", unit: "whole" },
      { name: "star anise", amount: "1", unit: "whole" },
      { name: "steamed jasmine rice", amount: "3", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Scoop the thick cream from the top of the coconut milk. Cook it in a heavy pot over medium heat until the oil separates. Add the massaman paste and fry for 2 minutes until fragrant.",
      },
      {
        step: 2,
        instruction:
          "Add the beef and sear until browned on all sides. Add the remaining coconut milk, cinnamon stick, cardamom, and star anise. Bring to a simmer.",
      },
      {
        step: 3,
        instruction:
          "Cover and simmer on low for 40 minutes. Add the potatoes and onion. Continue cooking for 20 minutes until the potatoes are tender and the beef is falling apart.",
        tip: "Low and slow is the key. Don't rush this with high heat or the beef will be tough. The sauce should be barely bubbling.",
      },
      {
        step: 4,
        instruction:
          "Stir in fish sauce, sugar, tamarind paste, and peanuts. Remove the whole spices. Serve over jasmine rice.",
      },
    ],
    nutrition: { calories: 520, protein: 34, carbs: 38, fat: 26, fiber: 4 },
    tags: ["comfort-food", "dairy-free", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["green-curry", "rendang", "khao-soi"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "black-pepper-tofu",
    name: "Black Pepper Tofu",
    emoji: "\uD83C\uDF36\uFE0F",
    description:
      "Crispy fried tofu tossed in a bold, peppery sauce with sweet onions, garlic, and fresh chilies. A Yotam Ottolenghi classic that converts even tofu skeptics.",
    cuisine: "Asian Fusion",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    servings: 4,
    ingredients: [
      { name: "extra-firm tofu, drained and cubed", amount: "14", unit: "oz" },
      { name: "cornstarch", amount: "3", unit: "tbsp" },
      { name: "vegetable oil", amount: "3", unit: "tbsp" },
      { name: "unsalted butter", amount: "2", unit: "tbsp" },
      { name: "shallots, thinly sliced", amount: "4", unit: "medium" },
      { name: "garlic cloves, minced", amount: "6", unit: "cloves" },
      { name: "red chili, sliced", amount: "2", unit: "whole" },
      { name: "coarsely ground black pepper", amount: "1.5", unit: "tbsp" },
      { name: "soy sauce", amount: "3", unit: "tbsp" },
      { name: "sweet soy sauce or kecap manis", amount: "1", unit: "tbsp" },
      { name: "sugar", amount: "2", unit: "tsp" },
      { name: "steamed rice", amount: "2", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Press the tofu for 10 minutes, then cut into 1-inch cubes. Toss in cornstarch.",
      },
      {
        step: 2,
        instruction:
          "Heat oil in a large skillet over high heat. Fry the tofu in batches until crispy and golden on all sides, 6-8 minutes total. Remove to a plate.",
      },
      {
        step: 3,
        instruction:
          "In the same pan, melt the butter. Add shallots and cook for 5 minutes until soft and golden. Add garlic and chilies, cook 1 minute. Add the black pepper and cook 30 seconds.",
        tip: "The amount of black pepper seems extreme, but that's the point. It mellows when cooked in butter and becomes aromatic rather than just spicy.",
      },
      {
        step: 4,
        instruction:
          "Add soy sauce, sweet soy sauce, and sugar. Return the tofu to the pan and toss until coated and glossy. Serve immediately over rice.",
      },
    ],
    nutrition: { calories: 320, protein: 16, carbs: 24, fat: 20, fiber: 3 },
    tags: ["vegetarian", "quick"],
    youtubeVideoId: null,
    relatedSlugs: ["crispy-tofu-stir-fry", "mapo-tofu", "nasi-goreng"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "jollof-rice",
    name: "Jollof Rice",
    emoji: "\uD83C\uDF5A",
    description:
      "West Africa's beloved one-pot rice dish cooked in a smoky, spiced tomato sauce with onions, peppers, and fragrant bay leaves. Every grain is stained red and packed with flavor.",
    cuisine: "West African",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 45,
    totalTime: 60,
    servings: 6,
    ingredients: [
      { name: "long grain parboiled rice", amount: "2", unit: "cups" },
      { name: "Roma tomatoes", amount: "6", unit: "medium" },
      { name: "red bell pepper", amount: "1", unit: "large" },
      { name: "scotch bonnet pepper (habanero)", amount: "1", unit: "whole" },
      { name: "yellow onion, diced", amount: "1", unit: "large" },
      { name: "tomato paste", amount: "3", unit: "tbsp" },
      { name: "chicken broth", amount: "2", unit: "cups" },
      { name: "vegetable oil", amount: "1/4", unit: "cup" },
      { name: "dried thyme", amount: "1", unit: "tsp" },
      { name: "curry powder", amount: "1", unit: "tsp" },
      { name: "bay leaves", amount: "2", unit: "whole" },
      { name: "salt", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Blend the tomatoes, red bell pepper, and scotch bonnet into a smooth puree. Set aside.",
      },
      {
        step: 2,
        instruction:
          "Heat oil in a heavy-bottomed pot over medium heat. Cook the onion for 5 minutes. Add tomato paste and fry for 3 minutes until darkened. Pour in the tomato-pepper puree. Cook uncovered for 15-20 minutes until the mixture reduces and the oil floats on top.",
        tip: "The tomato base must be cooked down until most of the water evaporates. This concentrated base is what gives jollof its intense flavor.",
      },
      {
        step: 3,
        instruction:
          "Rinse the rice and add it to the pot. Add broth, thyme, curry powder, bay leaves, and salt. Stir once, then cover tightly (seal with foil under the lid if needed).",
      },
      {
        step: 4,
        instruction:
          "Cook on very low heat for 30 minutes without lifting the lid. The rice steams in the tomato broth. Remove from heat and let rest 10 minutes. Fluff with a fork and remove bay leaves.",
      },
    ],
    nutrition: { calories: 360, protein: 8, carbs: 60, fat: 10, fiber: 3 },
    tags: ["vegan", "gluten-free", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["injera-with-wat", "nasi-goreng", "tagine"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "kofte",
    name: "K\u00f6fte",
    emoji: "\uD83E\uDDC6",
    description:
      "Juicy, spiced Turkish meatballs made with lamb and beef, seasoned with cumin, paprika, and fresh parsley. Pan-seared until caramelized and served with yogurt and warm pita.",
    cuisine: "Turkish",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    servings: 4,
    ingredients: [
      { name: "ground lamb", amount: "1/2", unit: "lb" },
      { name: "ground beef", amount: "1/2", unit: "lb" },
      { name: "yellow onion, grated", amount: "1/2", unit: "medium" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "fresh parsley, finely chopped", amount: "1/4", unit: "cup" },
      { name: "ground cumin", amount: "1", unit: "tsp" },
      { name: "smoked paprika", amount: "1", unit: "tsp" },
      { name: "red pepper flakes", amount: "1/2", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "plain yogurt", amount: "1/2", unit: "cup" },
      { name: "pita bread", amount: "4", unit: "rounds" },
      { name: "sumac (optional)", amount: "1/2", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Combine lamb, beef, grated onion, garlic, parsley, cumin, paprika, red pepper flakes, and salt. Mix with your hands until well combined. Shape into small oval patties, about 2 inches long.",
        tip: "Grate the onion rather than dicing it. The onion juice mixes into the meat and keeps the kofte incredibly moist.",
      },
      {
        step: 2,
        instruction:
          "Heat olive oil in a skillet over medium-high heat. Cook the kofte for 3-4 minutes per side until well-browned and cooked through.",
      },
      {
        step: 3,
        instruction:
          "Warm the pita bread. Serve the kofte with yogurt, a sprinkle of sumac, and warm pita. A simple tomato-cucumber salad on the side is traditional.",
      },
    ],
    nutrition: { calories: 380, protein: 28, carbs: 22, fat: 20, fiber: 1 },
    tags: ["high-protein", "quick", "mediterranean"],
    youtubeVideoId: null,
    relatedSlugs: ["chicken-souvlaki", "falafel-bowl", "tagine"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "crispy-pork-belly",
    name: "Crispy Pork Belly",
    emoji: "\uD83D\uDC37",
    description:
      "Slow-roasted pork belly with shatteringly crispy crackling on top and meltingly tender meat below. Seasoned simply with salt and five-spice, the way the best versions are done.",
    cuisine: "Chinese",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 120,
    totalTime: 135,
    servings: 6,
    ingredients: [
      { name: "skin-on pork belly", amount: "2", unit: "lbs" },
      { name: "five-spice powder", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tbsp" },
      { name: "white pepper", amount: "1/2", unit: "tsp" },
      { name: "white vinegar", amount: "1", unit: "tbsp" },
      { name: "baking soda", amount: "1/2", unit: "tsp" },
      { name: "steamed rice", amount: "3", unit: "cups" },
      { name: "hoisin sauce", amount: "2", unit: "tbsp" },
      { name: "cucumber, sliced", amount: "1", unit: "medium" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Score the skin of the pork belly in a crosshatch pattern, being careful not to cut into the meat. Poke holes all over the skin with a fork or skewer.",
      },
      {
        step: 2,
        instruction:
          "Flip over and season the meat side with five-spice powder, white pepper, and half the salt. Rub the skin side with vinegar and baking soda, then coat generously with remaining salt. Place uncovered on a rack in the fridge overnight.",
        tip: "The overnight air-dry is the secret to crackling. The baking soda helps dehydrate the skin and the vinegar promotes blistering.",
      },
      {
        step: 3,
        instruction:
          "Roast at 350F skin-side up for 90 minutes on a rack over a pan. Then increase to 450F for 20-30 minutes until the skin puffs and crackles. Watch carefully to prevent burning.",
      },
      {
        step: 4,
        instruction:
          "Rest for 10 minutes. Slice into thick pieces. The skin should shatter when you cut it. Serve with steamed rice, hoisin sauce, and cucumber slices.",
      },
    ],
    nutrition: { calories: 480, protein: 22, carbs: 4, fat: 42, fiber: 0 },
    tags: ["gluten-free", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["bao-buns", "peking-duck-pancakes", "ramen"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "okonomiyaki",
    name: "Okonomiyaki",
    emoji: "\uD83E\uDD5E",
    description:
      "A savory Japanese cabbage pancake loaded with your choice of toppings, drizzled with okonomiyaki sauce, Kewpie mayo, bonito flakes, and nori. The ultimate street food.",
    cuisine: "Japanese",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    servings: 2,
    ingredients: [
      { name: "all-purpose flour", amount: "3/4", unit: "cup" },
      { name: "dashi stock or water", amount: "1/2", unit: "cup" },
      { name: "large eggs", amount: "2", unit: "whole" },
      { name: "green cabbage, thinly shredded", amount: "3", unit: "cups" },
      { name: "green onions, sliced", amount: "3", unit: "stalks" },
      { name: "bacon or pork belly slices", amount: "4", unit: "slices" },
      { name: "vegetable oil", amount: "1", unit: "tbsp" },
      { name: "okonomiyaki sauce or tonkatsu sauce", amount: "2", unit: "tbsp", group: "Toppings" },
      { name: "Kewpie mayonnaise", amount: "2", unit: "tbsp", group: "Toppings" },
      { name: "bonito flakes", amount: "1/4", unit: "cup", group: "Toppings" },
      { name: "nori flakes", amount: "1", unit: "tsp", group: "Toppings" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Whisk flour, dashi, and eggs into a thick batter. Fold in the shredded cabbage and green onions. The batter should barely hold the cabbage together.",
      },
      {
        step: 2,
        instruction:
          "Heat oil in a large non-stick skillet over medium heat. Pour half the batter into the pan and shape into a round disc about 1-inch thick. Lay 2 slices of bacon on top.",
      },
      {
        step: 3,
        instruction:
          "Cook for 4-5 minutes until the bottom is golden. Flip carefully (use a plate to help). Cook another 4-5 minutes until cooked through.",
        tip: "Don't press down on the pancake. You want it thick and fluffy, not flat. Be patient with the flip. If it's not golden enough on the bottom, it's not ready to flip.",
      },
      {
        step: 4,
        instruction:
          "Top with okonomiyaki sauce, mayo (drizzled in zigzag lines), bonito flakes, and nori. The bonito flakes will dance from the heat. Serve immediately.",
      },
    ],
    nutrition: { calories: 380, protein: 18, carbs: 36, fat: 18, fiber: 4 },
    tags: ["comfort-food", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["dumplings", "ramen", "katsu-curry"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chicken-korma",
    name: "Chicken Korma",
    emoji: "\uD83C\uDF5B",
    description:
      "Tender chicken in a creamy, mildly spiced sauce made with yogurt, ground almonds, and aromatic cardamom. The gentlest of all Indian curries and a crowd favorite.",
    cuisine: "Indian",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    ingredients: [
      { name: "boneless chicken thighs, cubed", amount: "1.5", unit: "lbs" },
      { name: "plain yogurt", amount: "1/2", unit: "cup" },
      { name: "ground almonds (almond flour)", amount: "1/4", unit: "cup" },
      { name: "yellow onion, finely diced", amount: "1", unit: "large" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "fresh ginger, grated", amount: "1", unit: "tsp" },
      { name: "garam masala", amount: "1.5", unit: "tsp" },
      { name: "ground cardamom", amount: "1/2", unit: "tsp" },
      { name: "ground turmeric", amount: "1/2", unit: "tsp" },
      { name: "heavy cream", amount: "1/4", unit: "cup" },
      { name: "ghee or butter", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "fresh cilantro", amount: "2", unit: "tbsp" },
      { name: "steamed basmati rice", amount: "3", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat ghee in a large pan over medium heat. Cook the onion for 8 minutes until soft and golden. Add garlic and ginger, cook 1 minute.",
      },
      {
        step: 2,
        instruction:
          "Add garam masala, cardamom, and turmeric. Stir for 30 seconds. Add the chicken and cook for 5 minutes, turning to coat in the spices.",
      },
      {
        step: 3,
        instruction:
          "Reduce heat to low. Stir in yogurt one spoonful at a time (to prevent curdling), then add ground almonds and salt. Cover and simmer for 20 minutes until the chicken is tender.",
        tip: "Adding yogurt gradually and on low heat prevents it from splitting. Stir each spoonful in completely before adding the next.",
      },
      {
        step: 4,
        instruction:
          "Stir in the cream. Simmer uncovered for 2 more minutes. Garnish with cilantro and serve over basmati rice.",
      },
    ],
    nutrition: { calories: 440, protein: 34, carbs: 14, fat: 28, fiber: 2 },
    tags: ["gluten-free", "high-protein", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["butter-chicken", "chicken-tikka-masala", "palak-paneer"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "tamales",
    name: "Tamales",
    emoji: "\uD83E\uDED4",
    description:
      "Corn masa dough filled with tender pork in red chile sauce, wrapped in corn husks and steamed until pillowy soft. A labor-intensive Mexican tradition that rewards every minute of effort.",
    cuisine: "Mexican",
    mealType: "dinner",
    difficulty: "Advanced",
    prepTime: 60,
    cookTime: 90,
    totalTime: 150,
    servings: 12,
    ingredients: [
      { name: "dried corn husks", amount: "24", unit: "husks" },
      { name: "masa harina", amount: "3", unit: "cups", group: "For the masa" },
      { name: "lard or vegetable shortening", amount: "1", unit: "cup", group: "For the masa" },
      { name: "chicken broth, warm", amount: "2", unit: "cups", group: "For the masa" },
      { name: "baking powder", amount: "1.5", unit: "tsp", group: "For the masa" },
      { name: "salt", amount: "1.5", unit: "tsp", group: "For the masa" },
      { name: "pork shoulder, cubed", amount: "2", unit: "lbs", group: "For the filling" },
      { name: "dried guajillo chiles, seeded", amount: "6", unit: "whole", group: "For the filling" },
      { name: "garlic cloves", amount: "3", unit: "cloves", group: "For the filling" },
      { name: "ground cumin", amount: "1", unit: "tsp", group: "For the filling" },
      { name: "dried oregano", amount: "1", unit: "tsp", group: "For the filling" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Soak the corn husks in warm water for 1 hour. Boil the pork in salted water until very tender, about 60 minutes. Shred with two forks. Reserve the broth.",
      },
      {
        step: 2,
        instruction:
          "Toast the guajillo chiles in a dry skillet for 30 seconds per side. Soak in hot water for 15 minutes. Blend with garlic, cumin, oregano, and 1/2 cup cooking broth. Simmer the sauce for 10 minutes, then toss with the shredded pork.",
      },
      {
        step: 3,
        instruction:
          "Beat the lard with an electric mixer until fluffy, 3-4 minutes. Gradually add masa harina, baking powder, salt, and warm broth. Beat until a small ball of masa floats in water.",
        tip: "The float test tells you the masa has enough air beaten in. If it sinks, keep whipping. Well-whipped masa makes light, fluffy tamales.",
      },
      {
        step: 4,
        instruction:
          "Spread 2-3 tablespoons of masa on each corn husk. Add a spoonful of pork filling down the center. Fold the sides of the husk over, then fold up the bottom. Stand upright in a steamer.",
      },
      {
        step: 5,
        instruction:
          "Steam for 60-75 minutes until the masa pulls away cleanly from the husk. Let rest 10 minutes before serving.",
      },
    ],
    nutrition: { calories: 340, protein: 18, carbs: 24, fat: 20, fiber: 3 },
    tags: ["gluten-free", "dairy-free", "meal-prep"],
    youtubeVideoId: null,
    relatedSlugs: ["empanadas", "arepas", "carne-asada"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "dal-makhani",
    name: "Dal Makhani",
    emoji: "\uD83E\uDED8",
    description:
      "Black lentils and kidney beans simmered for hours in a rich, creamy tomato sauce with butter and cream. The queen of all dals, served at every special occasion in North India.",
    cuisine: "Indian",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 10,
    cookTime: 90,
    totalTime: 100,
    servings: 6,
    ingredients: [
      { name: "whole black lentils (urad dal)", amount: "1", unit: "cup" },
      { name: "kidney beans (rajma)", amount: "1/4", unit: "cup" },
      { name: "unsalted butter", amount: "3", unit: "tbsp" },
      { name: "heavy cream", amount: "1/4", unit: "cup" },
      { name: "yellow onion, finely diced", amount: "1", unit: "large" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves" },
      { name: "fresh ginger, grated", amount: "1", unit: "tbsp" },
      { name: "canned crushed tomatoes", amount: "1", unit: "cup" },
      { name: "Kashmiri red chili powder", amount: "1", unit: "tsp" },
      { name: "garam masala", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "water", amount: "5", unit: "cups" },
      { name: "steamed basmati rice", amount: "3", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Soak the black lentils and kidney beans overnight (at least 8 hours). Drain and rinse.",
      },
      {
        step: 2,
        instruction:
          "Add the lentils and beans to a pot with 5 cups of water. Bring to a boil, then simmer for 45-60 minutes until the lentils are very soft and starting to break down.",
      },
      {
        step: 3,
        instruction:
          "In a separate pan, melt the butter. Cook the onion for 8 minutes until deeply golden. Add garlic and ginger, cook 1 minute. Add crushed tomatoes and chili powder. Cook 5 minutes until thick.",
        tip: "The magic of dal makhani is the slow cooking. Restaurant versions simmer for 12+ hours. At home, 90 minutes with occasional mashing gives you most of that flavor.",
      },
      {
        step: 4,
        instruction:
          "Add the tomato-onion mixture to the lentils. Add garam masala and salt. Simmer on low for 30 more minutes, stirring and mashing occasionally. The dal should be thick and creamy.",
      },
      {
        step: 5,
        instruction:
          "Stir in the cream and an extra tablespoon of butter. Serve over basmati rice or with butter garlic naan.",
      },
    ],
    nutrition: { calories: 340, protein: 16, carbs: 40, fat: 14, fiber: 10 },
    tags: ["vegetarian", "comfort-food", "meal-prep"],
    youtubeVideoId: null,
    relatedSlugs: ["chana-masala", "palak-paneer", "butter-garlic-naan"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "mapo-tofu",
    name: "Mapo Tofu",
    emoji: "\uD83C\uDF36\uFE0F",
    description:
      "Silky soft tofu in a fiery, numbing sauce of doubanjiang, Sichuan peppercorns, ground pork, and fermented black beans. The dish that defines Sichuan cuisine.",
    cuisine: "Chinese",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 4,
    ingredients: [
      { name: "soft or silken tofu, cubed", amount: "14", unit: "oz" },
      { name: "ground pork", amount: "6", unit: "oz" },
      { name: "doubanjiang (fermented chili bean paste)", amount: "2", unit: "tbsp" },
      { name: "fermented black beans, rinsed and chopped", amount: "1", unit: "tbsp" },
      { name: "Sichuan peppercorns, ground", amount: "1", unit: "tsp" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "fresh ginger, grated", amount: "1", unit: "tsp" },
      { name: "soy sauce", amount: "1", unit: "tbsp" },
      { name: "chicken broth", amount: "3/4", unit: "cup" },
      { name: "cornstarch mixed with 2 tbsp water", amount: "1", unit: "tbsp" },
      { name: "vegetable oil", amount: "2", unit: "tbsp" },
      { name: "green onions, sliced", amount: "2", unit: "stalks" },
      { name: "steamed rice", amount: "3", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Gently poach the tofu cubes in salted simmering water for 2 minutes. This firms them up so they don't crumble. Drain carefully.",
      },
      {
        step: 2,
        instruction:
          "Heat oil in a wok over high heat. Add the pork and cook until browned, breaking it into small pieces. Add the doubanjiang and fermented black beans. Cook for 1 minute until fragrant and the oil turns red.",
        tip: "Doubanjiang is the soul of this dish. Don't substitute with regular chili paste. The fermented flavor is irreplaceable.",
      },
      {
        step: 3,
        instruction:
          "Add garlic and ginger, cook 30 seconds. Pour in the broth and soy sauce. Bring to a simmer.",
      },
      {
        step: 4,
        instruction:
          "Gently slide the tofu into the sauce. Simmer for 5 minutes. Stir the cornstarch slurry and add it to the wok. Cook until the sauce thickens and coats the tofu, about 1 minute.",
      },
      {
        step: 5,
        instruction:
          "Sprinkle with ground Sichuan peppercorn and green onions. Serve over steamed rice.",
      },
    ],
    nutrition: { calories: 320, protein: 22, carbs: 14, fat: 20, fiber: 2 },
    tags: ["quick", "dairy-free", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["kung-pao-chicken", "black-pepper-tofu", "dan-dan-noodles"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "beef-rendang",
    name: "Beef Rendang",
    emoji: "\uD83E\uDD69",
    description:
      "A rich, slow-braised Minangkabau dry curry where beef simmers in coconut milk and an aromatic spice paste until the sauce caramelizes into a dark, intensely flavored coating. Traditionally served at celebrations.",
    cuisine: "Malaysian",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 25,
    cookTime: 150,
    totalTime: 175,
    servings: 6,
    ingredients: [
      { name: "beef chuck, cut into 2-inch cubes", amount: "2", unit: "lbs" },
      { name: "coconut milk", amount: "2", unit: "cans (14 oz)" },
      { name: "lemongrass stalks, bruised", amount: "3", unit: "stalks" },
      { name: "kaffir lime leaves", amount: "4", unit: "leaves" },
      { name: "dried red chilies, soaked", amount: "8", unit: "whole", group: "For the spice paste" },
      { name: "shallots", amount: "6", unit: "medium", group: "For the spice paste" },
      { name: "garlic cloves", amount: "5", unit: "cloves", group: "For the spice paste" },
      { name: "galangal, sliced", amount: "1", unit: "inch", group: "For the spice paste" },
      { name: "fresh ginger, sliced", amount: "1", unit: "inch", group: "For the spice paste" },
      { name: "fresh turmeric or 1 tsp powder", amount: "1", unit: "inch", group: "For the spice paste" },
      { name: "toasted desiccated coconut (kerisik)", amount: "1/3", unit: "cup" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "sugar", amount: "1", unit: "tbsp" },
      { name: "steamed rice, for serving", amount: "3", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Toast the desiccated coconut in a dry pan over medium heat, stirring constantly, until golden brown. Grind to a paste in a mortar or food processor. This is kerisik, the thickening agent.",
      },
      {
        step: 2,
        instruction:
          "Blend all spice paste ingredients with a splash of water into a smooth paste. Cook the paste in a heavy pot over medium heat for 5 minutes until fragrant and the oil separates.",
      },
      {
        step: 3,
        instruction:
          "Add the beef, coconut milk, lemongrass, and kaffir lime leaves. Bring to a boil, then reduce to a low simmer. Cook uncovered for 2-2.5 hours, stirring every 15-20 minutes.",
        tip: "Malaysian rendang differs from Indonesian rendang in its spice paste and the addition of kerisik. Both are dry curries, but the flavor profiles are distinct.",
      },
      {
        step: 4,
        instruction:
          "When the sauce has reduced significantly, add the kerisik, salt, and sugar. Continue cooking and stirring frequently for another 15-20 minutes until the meat is dark, tender, and coated in a thick, dry paste. Serve with steamed rice.",
      },
    ],
    nutrition: { calories: 500, protein: 36, carbs: 10, fat: 38, fiber: 3 },
    tags: ["gluten-free", "dairy-free", "meal-prep"],
    youtubeVideoId: null,
    relatedSlugs: ["rendang", "massaman-curry", "nasi-goreng"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
];
