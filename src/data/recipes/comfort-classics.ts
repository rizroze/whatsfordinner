import type { FullRecipe } from "./types";

export const comfortClassicsRecipes: FullRecipe[] = [
  {
    slug: "pot-roast",
    name: "Pot Roast",
    emoji: "\u{1F969}",
    description:
      "Fork-tender chuck roast braised low and slow with carrots, potatoes, and onions in a rich beef broth. The ultimate Sunday dinner that fills the whole house with incredible aroma.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 210,
    totalTime: 230,
    servings: 6,
    ingredients: [
      { name: "chuck roast", amount: "3", unit: "lb" },
      { name: "Yukon Gold potatoes, quartered", amount: "1.5", unit: "lb" },
      { name: "carrots, cut into 2-inch pieces", amount: "4", unit: "large" },
      { name: "yellow onion, quartered", amount: "1", unit: "large" },
      { name: "garlic cloves", amount: "4", unit: "cloves" },
      { name: "beef broth", amount: "2", unit: "cups" },
      { name: "tomato paste", amount: "2", unit: "tbsp" },
      { name: "Worcestershire sauce", amount: "1", unit: "tbsp" },
      { name: "fresh thyme sprigs", amount: "4", unit: "sprigs" },
      { name: "fresh rosemary sprig", amount: "1", unit: "sprig" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "2", unit: "tsp" },
      { name: "black pepper", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 325F. Pat the chuck roast dry with paper towels and season generously on all sides with salt and pepper.",
      },
      {
        step: 2,
        instruction:
          "Heat olive oil in a large Dutch oven over high heat. Sear the roast for 3-4 minutes per side until a deep brown crust forms. Remove to a plate.",
        tip: "Don't move the meat while searing. A good crust = deep flavor in the finished dish.",
      },
      {
        step: 3,
        instruction:
          "Lower heat to medium. Add the onion and garlic, cook 2 minutes. Stir in tomato paste and cook 1 minute. Pour in beef broth and Worcestershire, scraping up the browned bits from the bottom.",
      },
      {
        step: 4,
        instruction:
          "Return the roast to the pot. Add thyme and rosemary. Cover and transfer to the oven. Cook for 2 hours.",
      },
      {
        step: 5,
        instruction:
          "Add the potatoes and carrots around the roast. Cover and return to oven for 1 more hour, until the meat is fork-tender and the vegetables are soft.",
      },
      {
        step: 6,
        instruction:
          "Remove from oven. Let rest 10 minutes. Slice the roast against the grain and serve with vegetables and pan juices spooned over top.",
      },
    ],
    nutrition: { calories: 520, protein: 42, carbs: 32, fat: 24, fiber: 4 },
    tags: ["comfort-food", "family-friendly", "one-pot"],
    youtubeVideoId: null,
    relatedSlugs: ["beef-stew", "shepherds-pie", "beef-bourguignon"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chicken-noodle-soup",
    name: "Chicken Noodle Soup",
    emoji: "\u{1F372}",
    description:
      "The real deal made from scratch with a golden chicken broth, tender shredded chicken, egg noodles, and a rainbow of vegetables. The cure for everything.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 40,
    totalTime: 55,
    servings: 6,
    ingredients: [
      { name: "bone-in chicken thighs", amount: "1.5", unit: "lb" },
      { name: "egg noodles", amount: "8", unit: "oz" },
      { name: "carrots, diced", amount: "3", unit: "medium" },
      { name: "celery stalks, diced", amount: "3", unit: "stalks" },
      { name: "yellow onion, diced", amount: "1", unit: "medium" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "chicken broth", amount: "8", unit: "cups" },
      { name: "bay leaf", amount: "2", unit: "leaves" },
      { name: "fresh thyme", amount: "3", unit: "sprigs" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "fresh parsley, chopped", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat olive oil in a large pot over medium heat. Add the onion, carrots, and celery. Cook for 5 minutes until softened.",
      },
      {
        step: 2,
        instruction:
          "Add garlic and cook 30 seconds. Pour in the chicken broth. Add the chicken thighs, bay leaves, and thyme. Bring to a boil, then reduce to a simmer.",
      },
      {
        step: 3,
        instruction:
          "Simmer for 25 minutes until the chicken is cooked through. Remove chicken to a cutting board and shred with two forks, discarding bones and skin.",
        tip: "Bone-in thighs give the broth much more flavor than boneless breasts.",
      },
      {
        step: 4,
        instruction:
          "Remove the bay leaves and thyme stems. Add the egg noodles and cook for 6-8 minutes until tender.",
      },
      {
        step: 5,
        instruction:
          "Return the shredded chicken to the pot. Season with salt and pepper. Ladle into bowls and top with fresh parsley.",
      },
    ],
    nutrition: { calories: 380, protein: 30, carbs: 36, fat: 12, fiber: 3 },
    tags: ["comfort-food", "family-friendly", "one-pot"],
    youtubeVideoId: null,
    relatedSlugs: ["chicken-pot-pie", "potato-soup", "clam-chowder"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "dinner-grilled-cheese",
    name: "Grilled Cheese (Dinner Version)",
    emoji: "\u{1F9C0}",
    description:
      "An elevated grilled cheese with three cheeses, caramelized onions, and Dijon mustard on thick sourdough. Served with a side salad for a proper dinner.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 2,
    ingredients: [
      { name: "sourdough bread", amount: "4", unit: "thick slices" },
      { name: "sharp cheddar cheese, sliced", amount: "3", unit: "oz" },
      { name: "gruyere cheese, sliced", amount: "2", unit: "oz" },
      { name: "fontina cheese, sliced", amount: "2", unit: "oz" },
      { name: "yellow onion, thinly sliced", amount: "1", unit: "medium" },
      { name: "unsalted butter", amount: "3", unit: "tbsp" },
      { name: "Dijon mustard", amount: "2", unit: "tsp" },
      { name: "mayonnaise", amount: "1", unit: "tbsp" },
      { name: "mixed greens", amount: "2", unit: "cups" },
      { name: "balsamic vinaigrette", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Melt 1 tbsp butter in a skillet over medium-low heat. Add onion slices and cook for 12-15 minutes, stirring occasionally, until deeply caramelized and golden.",
        tip: "Low heat and patience are key. Don't rush the caramelization.",
      },
      {
        step: 2,
        instruction:
          "Spread a thin layer of Dijon mustard on the inside of each bread slice. Layer the three cheeses and caramelized onions between the slices.",
      },
      {
        step: 3,
        instruction:
          "Spread mayonnaise on the outside of each slice (this gives a crispier, more even golden crust than butter alone).",
      },
      {
        step: 4,
        instruction:
          "Cook in a skillet over medium heat for 3-4 minutes per side, pressing gently, until deeply golden and the cheese is fully melted.",
      },
      {
        step: 5,
        instruction:
          "Toss mixed greens with balsamic vinaigrette. Slice the sandwiches diagonally and serve with the salad on the side.",
      },
    ],
    nutrition: { calories: 580, protein: 26, carbs: 38, fat: 36, fiber: 3 },
    tags: ["comfort-food", "vegetarian", "family-friendly"],
    youtubeVideoId: null,
    relatedSlugs: ["grilled-cheese-tomato-soup-brunch", "tuna-casserole", "lobster-mac-and-cheese"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "meatloaf",
    name: "Meatloaf",
    emoji: "\u{1F356}",
    description:
      "A classic American meatloaf with a sweet and tangy ketchup glaze. Moist and flavorful inside, with a caramelized top that everyone fights over.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 60,
    totalTime: 75,
    servings: 6,
    ingredients: [
      { name: "ground beef (80/20)", amount: "2", unit: "lb" },
      { name: "breadcrumbs", amount: "3/4", unit: "cup" },
      { name: "whole milk", amount: "1/3", unit: "cup" },
      { name: "large eggs", amount: "2", unit: "whole" },
      { name: "yellow onion, finely diced", amount: "1", unit: "medium" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "Worcestershire sauce", amount: "1", unit: "tbsp" },
      { name: "Dijon mustard", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "ketchup", amount: "1/3", unit: "cup", group: "For the glaze" },
      { name: "brown sugar", amount: "2", unit: "tbsp", group: "For the glaze" },
      { name: "apple cider vinegar", amount: "1", unit: "tsp", group: "For the glaze" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 350F. Line a baking sheet with foil. Soak the breadcrumbs in milk for 5 minutes.",
      },
      {
        step: 2,
        instruction:
          "In a large bowl, combine the ground beef, soaked breadcrumbs, eggs, onion, garlic, Worcestershire, mustard, salt, and pepper. Mix gently with your hands until just combined.",
        tip: "Don't overmix or the meatloaf will be dense. Mix until the ingredients are evenly distributed, then stop.",
      },
      {
        step: 3,
        instruction:
          "Shape the mixture into a loaf on the prepared baking sheet, about 9x5 inches.",
      },
      {
        step: 4,
        instruction:
          "Mix the glaze ingredients together. Spread half the glaze over the top of the meatloaf.",
      },
      {
        step: 5,
        instruction:
          "Bake for 45 minutes. Spread remaining glaze on top and bake for 15 more minutes until internal temp reaches 160F.",
      },
      {
        step: 6,
        instruction:
          "Let rest 10 minutes before slicing. This helps it hold together and redistributes the juices.",
      },
    ],
    nutrition: { calories: 420, protein: 32, carbs: 22, fat: 24, fiber: 1 },
    tags: ["comfort-food", "family-friendly"],
    youtubeVideoId: null,
    relatedSlugs: ["pot-roast", "turkey-meatballs", "stuffed-bell-peppers"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chili-con-carne",
    name: "Chili Con Carne",
    emoji: "\u{1F336}",
    description:
      "A hearty, deeply spiced beef and bean chili with layers of flavor from dried chilis, cumin, and a secret hit of cocoa powder. Even better the next day.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 90,
    totalTime: 105,
    servings: 8,
    ingredients: [
      { name: "ground beef (80/20)", amount: "2", unit: "lb" },
      { name: "kidney beans, drained", amount: "30", unit: "oz" },
      { name: "crushed tomatoes", amount: "28", unit: "oz" },
      { name: "diced tomatoes", amount: "14", unit: "oz" },
      { name: "yellow onion, diced", amount: "1", unit: "large" },
      { name: "green bell pepper, diced", amount: "1", unit: "medium" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves" },
      { name: "chili powder", amount: "3", unit: "tbsp" },
      { name: "ground cumin", amount: "1", unit: "tbsp" },
      { name: "smoked paprika", amount: "1", unit: "tsp" },
      { name: "cocoa powder", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "sour cream", amount: "1/2", unit: "cup" },
      { name: "shredded cheddar", amount: "1/2", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Brown the ground beef in a large Dutch oven over medium-high heat, breaking it into small pieces. Drain excess fat, leaving about 1 tablespoon.",
      },
      {
        step: 2,
        instruction:
          "Add the onion and bell pepper. Cook 5 minutes until softened. Add garlic and cook 30 seconds.",
      },
      {
        step: 3,
        instruction:
          "Add chili powder, cumin, paprika, and cocoa powder. Stir and cook 1 minute until fragrant.",
        tip: "The cocoa powder adds depth without making it taste chocolatey. Trust the process.",
      },
      {
        step: 4,
        instruction:
          "Add crushed tomatoes, diced tomatoes, kidney beans, and salt. Stir well. Bring to a boil, then reduce to a low simmer.",
      },
      {
        step: 5,
        instruction:
          "Simmer uncovered for 1 hour, stirring occasionally, until thick and rich. Taste and adjust seasoning.",
      },
      {
        step: 6,
        instruction:
          "Ladle into bowls and top with shredded cheddar and a dollop of sour cream.",
      },
    ],
    nutrition: { calories: 440, protein: 34, carbs: 30, fat: 20, fiber: 8 },
    tags: ["comfort-food", "one-pot", "meal-prep", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["beef-stew", "red-beans-and-rice", "cornbread"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chicken-pot-pie",
    name: "Chicken Pot Pie",
    emoji: "\u{1F967}",
    description:
      "A golden, flaky puff pastry crust over a creamy filling loaded with chicken, peas, carrots, and celery. Pure comfort in every bite.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 25,
    cookTime: 45,
    totalTime: 70,
    servings: 6,
    ingredients: [
      { name: "cooked chicken, shredded", amount: "3", unit: "cups" },
      { name: "frozen puff pastry, thawed", amount: "1", unit: "sheet" },
      { name: "frozen peas and carrots", amount: "1", unit: "cup" },
      { name: "celery stalks, diced", amount: "2", unit: "stalks" },
      { name: "yellow onion, diced", amount: "1", unit: "medium" },
      { name: "unsalted butter", amount: "4", unit: "tbsp" },
      { name: "all-purpose flour", amount: "1/3", unit: "cup" },
      { name: "chicken broth", amount: "2", unit: "cups" },
      { name: "whole milk", amount: "1/2", unit: "cup" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "fresh thyme leaves", amount: "1", unit: "tsp" },
      { name: "egg, beaten (for egg wash)", amount: "1", unit: "whole" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 400F. Melt butter in a large saucepan over medium heat. Add onion and celery, cook 4 minutes until softened.",
      },
      {
        step: 2,
        instruction:
          "Sprinkle flour over the vegetables and stir constantly for 1 minute to cook the raw flour taste out.",
      },
      {
        step: 3,
        instruction:
          "Gradually whisk in the chicken broth and milk. Cook, stirring, until the sauce thickens (about 3-4 minutes).",
        tip: "Add the liquid slowly to avoid lumps. If lumps form, whisk vigorously.",
      },
      {
        step: 4,
        instruction:
          "Stir in the shredded chicken, peas and carrots, thyme, salt, and pepper. Pour into a 9-inch deep-dish pie plate or baking dish.",
      },
      {
        step: 5,
        instruction:
          "Roll the puff pastry to fit over the dish. Drape over the filling, crimp the edges, and cut 3 small slits for steam. Brush with beaten egg.",
      },
      {
        step: 6,
        instruction:
          "Bake for 30-35 minutes until the pastry is deeply golden and the filling is bubbling. Let cool 10 minutes before serving.",
      },
    ],
    nutrition: { calories: 480, protein: 28, carbs: 34, fat: 26, fiber: 3 },
    tags: ["comfort-food", "family-friendly"],
    youtubeVideoId: "W1XELWKaCi4",
    relatedSlugs: ["chicken-noodle-soup", "chicken-and-dumplings", "shepherds-pie"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "clam-chowder",
    name: "Clam Chowder",
    emoji: "\u{1F372}",
    description:
      "A thick and creamy New England-style clam chowder with tender potatoes, smoky bacon, and briny clams. Best served in a bread bowl if you are feeling bold.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 35,
    totalTime: 50,
    servings: 6,
    ingredients: [
      { name: "canned chopped clams with juice", amount: "20", unit: "oz" },
      { name: "thick-cut bacon, diced", amount: "4", unit: "slices" },
      { name: "Yukon Gold potatoes, diced", amount: "1", unit: "lb" },
      { name: "yellow onion, diced", amount: "1", unit: "medium" },
      { name: "celery stalks, diced", amount: "2", unit: "stalks" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "all-purpose flour", amount: "3", unit: "tbsp" },
      { name: "heavy cream", amount: "1", unit: "cup" },
      { name: "whole milk", amount: "1", unit: "cup" },
      { name: "bay leaf", amount: "1", unit: "leaf" },
      { name: "fresh thyme", amount: "2", unit: "sprigs" },
      { name: "salt", amount: "1/2", unit: "tsp" },
      { name: "white pepper", amount: "1/4", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Drain the clams, reserving the juice. You should have about 1 cup of clam juice. Set clams aside.",
      },
      {
        step: 2,
        instruction:
          "Cook the bacon in a large pot over medium heat until crispy, about 5 minutes. Remove bacon, leave the fat in the pot.",
      },
      {
        step: 3,
        instruction:
          "Add onion and celery to the bacon fat. Cook 4 minutes. Add garlic, cook 30 seconds. Sprinkle in flour and stir for 1 minute.",
      },
      {
        step: 4,
        instruction:
          "Slowly whisk in the reserved clam juice, milk, and enough water to just cover the potatoes (about 1 cup). Add potatoes, bay leaf, and thyme. Simmer for 15 minutes until potatoes are tender.",
        tip: "Don't boil aggressively or the dairy can curdle. Keep it at a gentle simmer.",
      },
      {
        step: 5,
        instruction:
          "Stir in the heavy cream and clams. Cook 3 more minutes. Remove bay leaf and thyme. Season with salt and white pepper.",
      },
      {
        step: 6,
        instruction:
          "Ladle into bowls and top with reserved crispy bacon.",
      },
    ],
    nutrition: { calories: 420, protein: 22, carbs: 28, fat: 24, fiber: 2 },
    tags: ["comfort-food", "one-pot"],
    youtubeVideoId: null,
    relatedSlugs: ["chicken-noodle-soup", "potato-soup", "cioppino"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "cornbread",
    name: "Cornbread",
    emoji: "\u{1F33D}",
    description:
      "Golden, slightly sweet cornbread baked in a cast-iron skillet for a crispy buttery edge. The perfect side for chili, BBQ, or just eaten warm with honey butter.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    servings: 8,
    ingredients: [
      { name: "yellow cornmeal", amount: "1", unit: "cup" },
      { name: "all-purpose flour", amount: "1", unit: "cup" },
      { name: "granulated sugar", amount: "1/4", unit: "cup" },
      { name: "baking powder", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1/2", unit: "tsp" },
      { name: "whole milk", amount: "1", unit: "cup" },
      { name: "large eggs", amount: "2", unit: "whole" },
      { name: "unsalted butter, melted", amount: "1/3", unit: "cup" },
      { name: "honey", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 400F. Place a 10-inch cast-iron skillet in the oven while it preheats.",
        tip: "Preheating the skillet is the secret to that crispy, golden bottom crust.",
      },
      {
        step: 2,
        instruction:
          "Whisk together cornmeal, flour, sugar, baking powder, and salt in a large bowl.",
      },
      {
        step: 3,
        instruction:
          "In a separate bowl, whisk the milk, eggs, melted butter (reserve 1 tbsp), and honey.",
      },
      {
        step: 4,
        instruction:
          "Pour the wet ingredients into the dry and stir until just combined. Do not overmix.",
      },
      {
        step: 5,
        instruction:
          "Carefully remove the hot skillet from the oven. Add the reserved tablespoon of butter and swirl to coat. Pour in the batter.",
      },
      {
        step: 6,
        instruction:
          "Bake for 20-25 minutes until golden on top and a toothpick comes out clean. Let cool 5 minutes in the skillet, then slice into wedges.",
      },
    ],
    nutrition: { calories: 220, protein: 5, carbs: 30, fat: 10, fiber: 1 },
    tags: ["comfort-food", "vegetarian", "family-friendly", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["chili-con-carne", "bbq-ribs", "gumbo"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "bbq-ribs",
    name: "BBQ Ribs",
    emoji: "\u{1F356}",
    description:
      "Fall-off-the-bone baby back ribs with a homemade dry rub and sticky BBQ glaze. Oven-baked low and slow, then finished under the broiler for charred, caramelized edges.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 180,
    totalTime: 200,
    servings: 4,
    ingredients: [
      { name: "baby back ribs", amount: "2", unit: "racks" },
      { name: "brown sugar", amount: "3", unit: "tbsp", group: "For the rub" },
      { name: "smoked paprika", amount: "2", unit: "tbsp", group: "For the rub" },
      { name: "garlic powder", amount: "1", unit: "tbsp", group: "For the rub" },
      { name: "onion powder", amount: "1", unit: "tsp", group: "For the rub" },
      { name: "chili powder", amount: "1", unit: "tsp", group: "For the rub" },
      { name: "salt", amount: "2", unit: "tsp", group: "For the rub" },
      { name: "black pepper", amount: "1", unit: "tsp", group: "For the rub" },
      { name: "BBQ sauce", amount: "1", unit: "cup", group: "For the glaze" },
      { name: "apple cider vinegar", amount: "2", unit: "tbsp", group: "For the glaze" },
      { name: "honey", amount: "1", unit: "tbsp", group: "For the glaze" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Remove the membrane from the back of each rack by sliding a butter knife under it and peeling it off with a paper towel for grip.",
        tip: "Removing the membrane is essential. It gets rubbery when cooked and prevents the rub from penetrating.",
      },
      {
        step: 2,
        instruction:
          "Mix all rub ingredients together. Coat the ribs generously on both sides. Let sit at room temperature for 30 minutes (or refrigerate overnight).",
      },
      {
        step: 3,
        instruction:
          "Preheat oven to 275F. Wrap each rack tightly in foil and place on a baking sheet. Bake for 2.5 hours.",
      },
      {
        step: 4,
        instruction:
          "Mix the BBQ sauce, vinegar, and honey for the glaze.",
      },
      {
        step: 5,
        instruction:
          "Unwrap the ribs and brush generously with the glaze. Turn the broiler to high and broil for 3-5 minutes, watching carefully, until the glaze is bubbly and charred in spots.",
      },
      {
        step: 6,
        instruction:
          "Let rest 5 minutes, then slice between the bones and serve with extra BBQ sauce on the side.",
      },
    ],
    nutrition: { calories: 580, protein: 38, carbs: 28, fat: 36, fiber: 1 },
    tags: ["comfort-food", "family-friendly"],
    youtubeVideoId: null,
    relatedSlugs: ["cornbread", "chili-con-carne", "gumbo"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "biscuits-and-gravy",
    name: "Biscuits and Gravy",
    emoji: "\u{1F95E}",
    description:
      "Warm, flaky buttermilk biscuits smothered in a creamy, peppery sausage gravy. A Southern breakfast classic that works just as well for dinner.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 4,
    ingredients: [
      { name: "all-purpose flour", amount: "2", unit: "cups", group: "For the biscuits" },
      { name: "baking powder", amount: "1", unit: "tbsp", group: "For the biscuits" },
      { name: "salt", amount: "1/2", unit: "tsp", group: "For the biscuits" },
      { name: "cold unsalted butter, cubed", amount: "6", unit: "tbsp", group: "For the biscuits" },
      { name: "buttermilk", amount: "3/4", unit: "cup", group: "For the biscuits" },
      { name: "breakfast sausage", amount: "1", unit: "lb", group: "For the gravy" },
      { name: "all-purpose flour", amount: "1/4", unit: "cup", group: "For the gravy" },
      { name: "whole milk", amount: "2.5", unit: "cups", group: "For the gravy" },
      { name: "salt", amount: "1/2", unit: "tsp", group: "For the gravy" },
      { name: "black pepper", amount: "1", unit: "tsp", group: "For the gravy" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 450F. Whisk together flour, baking powder, and salt. Cut in cold butter using a pastry cutter or your fingers until the mixture looks like coarse crumbs.",
      },
      {
        step: 2,
        instruction:
          "Pour in buttermilk and stir until a shaggy dough forms. Turn out onto a floured surface, pat to 1-inch thick, and cut into rounds. Place on a baking sheet and bake 12-14 minutes until golden.",
        tip: "Don't twist the cutter when cutting biscuits. Press straight down so they rise evenly.",
      },
      {
        step: 3,
        instruction:
          "While biscuits bake, brown the sausage in a large skillet over medium heat, breaking it into crumbles. Do not drain the fat.",
      },
      {
        step: 4,
        instruction:
          "Sprinkle flour over the sausage and stir for 1 minute. Slowly pour in the milk while stirring constantly.",
      },
      {
        step: 5,
        instruction:
          "Cook, stirring often, for 4-5 minutes until the gravy thickens. Season with salt and plenty of black pepper.",
      },
      {
        step: 6,
        instruction:
          "Split the biscuits and ladle the sausage gravy generously over top.",
      },
    ],
    nutrition: { calories: 520, protein: 22, carbs: 40, fat: 30, fiber: 1 },
    tags: ["comfort-food", "family-friendly"],
    youtubeVideoId: null,
    relatedSlugs: ["cornbread", "fried-chicken", "chicken-and-dumplings"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "fried-chicken",
    name: "Fried Chicken",
    emoji: "\u{1F357}",
    description:
      "Crispy, juicy Southern fried chicken with a shatteringly crunchy buttermilk-battered coating. Brined overnight for maximum flavor and moisture.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 30,
    cookTime: 30,
    totalTime: 60,
    servings: 4,
    ingredients: [
      { name: "chicken pieces (thighs and drumsticks)", amount: "3", unit: "lb" },
      { name: "buttermilk", amount: "2", unit: "cups", group: "For the marinade" },
      { name: "hot sauce", amount: "1", unit: "tbsp", group: "For the marinade" },
      { name: "salt", amount: "1", unit: "tbsp", group: "For the marinade" },
      { name: "all-purpose flour", amount: "2", unit: "cups", group: "For the dredge" },
      { name: "cornstarch", amount: "1/4", unit: "cup", group: "For the dredge" },
      { name: "garlic powder", amount: "1", unit: "tbsp", group: "For the dredge" },
      { name: "smoked paprika", amount: "1", unit: "tbsp", group: "For the dredge" },
      { name: "onion powder", amount: "1", unit: "tsp", group: "For the dredge" },
      { name: "cayenne pepper", amount: "1/2", unit: "tsp", group: "For the dredge" },
      { name: "black pepper", amount: "1", unit: "tsp", group: "For the dredge" },
      { name: "vegetable oil (for frying)", amount: "4", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Combine buttermilk, hot sauce, and salt in a large bowl. Add chicken pieces, cover, and refrigerate for at least 4 hours (overnight is best).",
        tip: "The buttermilk brine tenderizes the chicken and keeps it incredibly juicy during frying.",
      },
      {
        step: 2,
        instruction:
          "Whisk together flour, cornstarch, garlic powder, paprika, onion powder, cayenne, and black pepper in a large shallow dish.",
      },
      {
        step: 3,
        instruction:
          "Remove chicken from buttermilk, letting excess drip off. Dredge in the flour mixture, pressing firmly. Dip back in buttermilk briefly, then dredge again for a double coating.",
      },
      {
        step: 4,
        instruction:
          "Heat oil in a large heavy-bottomed pot or Dutch oven to 325F. Fry chicken in batches (don't crowd) for 12-15 minutes, turning once, until golden and internal temp reaches 165F.",
      },
      {
        step: 5,
        instruction:
          "Drain on a wire rack set over a baking sheet. Season with a pinch of salt immediately. Let rest 5 minutes before serving.",
      },
    ],
    nutrition: { calories: 480, protein: 36, carbs: 28, fat: 24, fiber: 1 },
    tags: ["comfort-food", "family-friendly"],
    youtubeVideoId: null,
    relatedSlugs: ["biscuits-and-gravy", "cornbread", "chicken-and-dumplings"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "potato-soup",
    name: "Potato Soup",
    emoji: "\u{1F954}",
    description:
      "Thick and creamy loaded potato soup topped with crispy bacon, cheddar cheese, sour cream, and chives. All the flavors of a loaded baked potato in a bowl.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 6,
    ingredients: [
      { name: "Russet potatoes, peeled and diced", amount: "2", unit: "lb" },
      { name: "thick-cut bacon, diced", amount: "4", unit: "slices" },
      { name: "yellow onion, diced", amount: "1", unit: "medium" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "chicken broth", amount: "4", unit: "cups" },
      { name: "heavy cream", amount: "1", unit: "cup" },
      { name: "unsalted butter", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "shredded cheddar cheese", amount: "1", unit: "cup" },
      { name: "sour cream", amount: "1/4", unit: "cup" },
      { name: "fresh chives, chopped", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Cook bacon in a large pot over medium heat until crispy. Remove and set aside. Leave the fat in the pot.",
      },
      {
        step: 2,
        instruction:
          "Add butter and onion to the pot. Cook 4 minutes until softened. Add garlic, cook 30 seconds.",
      },
      {
        step: 3,
        instruction:
          "Add potatoes and chicken broth. Bring to a boil, then reduce to a simmer. Cook 15 minutes until potatoes are tender.",
      },
      {
        step: 4,
        instruction:
          "Use a potato masher to mash about half the potatoes in the pot (this thickens the soup while keeping some chunks for texture).",
        tip: "For a smoother soup, use an immersion blender. For chunkier, mash less.",
      },
      {
        step: 5,
        instruction:
          "Stir in heavy cream, salt, and pepper. Cook 5 more minutes on low heat.",
      },
      {
        step: 6,
        instruction:
          "Ladle into bowls and top with cheddar, sour cream, crispy bacon, and chives.",
      },
    ],
    nutrition: { calories: 420, protein: 14, carbs: 34, fat: 26, fiber: 3 },
    tags: ["comfort-food", "one-pot", "family-friendly"],
    youtubeVideoId: null,
    relatedSlugs: ["clam-chowder", "chicken-noodle-soup", "cottage-pie"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "turkey-meatballs",
    name: "Turkey Meatballs",
    emoji: "\u{1F9C6}",
    description:
      "Tender, juicy turkey meatballs baked until golden and simmered in a rich marinara sauce. Lighter than beef but packed with Italian herb flavor.",
    cuisine: "Italian",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    ingredients: [
      { name: "ground turkey", amount: "1.5", unit: "lb" },
      { name: "breadcrumbs", amount: "1/2", unit: "cup" },
      { name: "Parmesan cheese, grated", amount: "1/3", unit: "cup" },
      { name: "large egg", amount: "1", unit: "whole" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "fresh parsley, chopped", amount: "2", unit: "tbsp" },
      { name: "dried Italian seasoning", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "marinara sauce", amount: "24", unit: "oz" },
      { name: "fresh mozzarella, sliced", amount: "4", unit: "oz" },
      { name: "fresh basil", amount: "6", unit: "leaves" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 400F. Line a baking sheet with parchment paper.",
      },
      {
        step: 2,
        instruction:
          "Combine turkey, breadcrumbs, Parmesan, egg, garlic, parsley, Italian seasoning, salt, and pepper in a bowl. Mix gently until just combined. Roll into 16 meatballs.",
        tip: "Slightly wet your hands before rolling to prevent sticking.",
      },
      {
        step: 3,
        instruction:
          "Place meatballs on the baking sheet. Bake for 18-20 minutes until golden and cooked through.",
      },
      {
        step: 4,
        instruction:
          "Pour marinara sauce into a large oven-safe skillet. Nestle the baked meatballs into the sauce. Top each with a slice of fresh mozzarella.",
      },
      {
        step: 5,
        instruction:
          "Return to oven for 5 minutes until the mozzarella melts. Garnish with fresh basil and serve with crusty bread or pasta.",
      },
    ],
    nutrition: { calories: 380, protein: 36, carbs: 18, fat: 18, fiber: 3 },
    tags: ["comfort-food", "high-protein", "family-friendly"],
    youtubeVideoId: null,
    relatedSlugs: ["meatloaf", "spaghetti-carbonara", "homemade-lasagna"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "tuna-casserole",
    name: "Tuna Casserole",
    emoji: "\u{1F41F}",
    description:
      "A nostalgic creamy tuna casserole with egg noodles, peas, mushrooms, and a golden breadcrumb topping. Updated with real ingredients, no canned soup needed.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 6,
    ingredients: [
      { name: "egg noodles", amount: "12", unit: "oz" },
      { name: "canned tuna, drained", amount: "10", unit: "oz" },
      { name: "frozen peas", amount: "1", unit: "cup" },
      { name: "cremini mushrooms, sliced", amount: "8", unit: "oz" },
      { name: "yellow onion, diced", amount: "1", unit: "medium" },
      { name: "unsalted butter", amount: "3", unit: "tbsp" },
      { name: "all-purpose flour", amount: "3", unit: "tbsp" },
      { name: "whole milk", amount: "2", unit: "cups" },
      { name: "shredded cheddar cheese", amount: "1", unit: "cup" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "panko breadcrumbs", amount: "1/2", unit: "cup" },
      { name: "melted butter (for topping)", amount: "1", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 375F. Cook egg noodles according to package directions until al dente. Drain.",
      },
      {
        step: 2,
        instruction:
          "Melt butter in a large oven-safe skillet over medium heat. Cook mushrooms and onion for 5 minutes until softened.",
      },
      {
        step: 3,
        instruction:
          "Sprinkle flour over the vegetables and stir for 1 minute. Gradually whisk in milk, stirring until thickened (3-4 minutes).",
      },
      {
        step: 4,
        instruction:
          "Remove from heat. Stir in cheddar until melted. Fold in the noodles, tuna, peas, salt, and pepper.",
      },
      {
        step: 5,
        instruction:
          "Toss panko with melted butter. Sprinkle over the casserole. Bake for 20 minutes until golden and bubbling.",
        tip: "For extra crunch, broil for the last 2 minutes. Watch closely so it doesn't burn.",
      },
    ],
    nutrition: { calories: 440, protein: 28, carbs: 42, fat: 18, fiber: 3 },
    tags: ["comfort-food", "family-friendly", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["one-pot-mac-and-cheese", "dinner-grilled-cheese", "chicken-pot-pie"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "beef-bourguignon",
    name: "Beef Bourguignon",
    emoji: "\u{1F377}",
    description:
      "Julia Child's famous French beef stew braised in red wine with bacon, mushrooms, pearl onions, and herbs. A dish that demands patience and rewards it generously.",
    cuisine: "French",
    mealType: "dinner",
    difficulty: "Advanced",
    prepTime: 30,
    cookTime: 180,
    totalTime: 210,
    servings: 6,
    ingredients: [
      { name: "beef chuck, cut into 2-inch cubes", amount: "3", unit: "lb" },
      { name: "dry red wine (Burgundy or Pinot Noir)", amount: "2", unit: "cups" },
      { name: "thick-cut bacon, diced", amount: "6", unit: "oz" },
      { name: "cremini mushrooms, quartered", amount: "10", unit: "oz" },
      { name: "pearl onions, peeled", amount: "1", unit: "cup" },
      { name: "carrots, cut into 1-inch pieces", amount: "3", unit: "medium" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "tomato paste", amount: "2", unit: "tbsp" },
      { name: "beef broth", amount: "1.5", unit: "cups" },
      { name: "all-purpose flour", amount: "2", unit: "tbsp" },
      { name: "fresh thyme sprigs", amount: "4", unit: "sprigs" },
      { name: "bay leaves", amount: "2", unit: "leaves" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "black pepper", amount: "1", unit: "tsp" },
      { name: "fresh parsley, chopped", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 325F. Cook bacon in a Dutch oven over medium heat until crispy. Remove bacon, leave fat. Pat beef cubes dry, season with salt and pepper.",
      },
      {
        step: 2,
        instruction:
          "Working in batches, sear the beef on all sides in the bacon fat until deeply browned (3-4 minutes per side). Remove to a plate.",
        tip: "Don't crowd the pan. Sear in small batches for proper browning, not steaming.",
      },
      {
        step: 3,
        instruction:
          "Add olive oil if needed. Saute carrots and pearl onions for 5 minutes. Add garlic and tomato paste, cook 1 minute. Sprinkle in flour and stir 1 minute.",
      },
      {
        step: 4,
        instruction:
          "Pour in the wine and beef broth, scraping up browned bits. Return the beef and bacon. Add thyme and bay leaves. Bring to a simmer.",
      },
      {
        step: 5,
        instruction:
          "Cover and transfer to the oven. Braise for 2 hours. Add mushrooms and cook for 30 more minutes until the beef is fork-tender.",
      },
      {
        step: 6,
        instruction:
          "Remove bay leaves and thyme stems. Taste and adjust seasoning. Serve garnished with parsley, alongside crusty bread or mashed potatoes.",
      },
    ],
    nutrition: { calories: 560, protein: 44, carbs: 18, fat: 28, fiber: 3 },
    tags: ["comfort-food", "one-pot"],
    youtubeVideoId: null,
    relatedSlugs: ["pot-roast", "coq-au-vin", "beef-stew"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "coq-au-vin",
    name: "Coq Au Vin",
    emoji: "\u{1F357}",
    description:
      "Chicken braised in red wine with mushrooms, bacon lardons, and pearl onions. A French bistro classic that turns humble chicken into something extraordinary.",
    cuisine: "French",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 25,
    cookTime: 75,
    totalTime: 100,
    servings: 4,
    ingredients: [
      { name: "bone-in chicken thighs and drumsticks", amount: "3", unit: "lb" },
      { name: "dry red wine", amount: "2", unit: "cups" },
      { name: "thick-cut bacon, diced", amount: "4", unit: "oz" },
      { name: "cremini mushrooms, halved", amount: "8", unit: "oz" },
      { name: "pearl onions, peeled", amount: "1", unit: "cup" },
      { name: "carrots, sliced", amount: "2", unit: "medium" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "tomato paste", amount: "1", unit: "tbsp" },
      { name: "chicken broth", amount: "1", unit: "cup" },
      { name: "all-purpose flour", amount: "2", unit: "tbsp" },
      { name: "fresh thyme sprigs", amount: "3", unit: "sprigs" },
      { name: "bay leaf", amount: "1", unit: "leaf" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "fresh parsley, chopped", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Season chicken generously with salt and pepper. Cook bacon in a Dutch oven over medium heat until crispy. Remove bacon, leaving fat.",
      },
      {
        step: 2,
        instruction:
          "Working in batches, brown the chicken skin-side down for 5 minutes, then flip and cook 3 more minutes. Remove to a plate.",
      },
      {
        step: 3,
        instruction:
          "Add pearl onions and carrots, cook 4 minutes. Add garlic and tomato paste, cook 1 minute. Dust with flour and stir 1 minute.",
      },
      {
        step: 4,
        instruction:
          "Pour in wine and broth, scraping up browned bits. Return chicken and bacon. Add thyme and bay leaf. Bring to a simmer.",
        tip: "Use a wine you'd drink. Cooking concentrates flavor, so bad wine = bad sauce.",
      },
      {
        step: 5,
        instruction:
          "Cover and simmer on low for 45 minutes. Add mushrooms and cook uncovered for 15 more minutes until chicken is tender and sauce has reduced.",
      },
      {
        step: 6,
        instruction:
          "Remove bay leaf and thyme. Garnish with parsley. Serve with mashed potatoes or crusty bread to soak up the sauce.",
      },
    ],
    nutrition: { calories: 480, protein: 38, carbs: 14, fat: 22, fiber: 2 },
    tags: ["comfort-food", "one-pot"],
    youtubeVideoId: null,
    relatedSlugs: ["beef-bourguignon", "chicken-pot-pie", "cassoulet"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "lobster-mac-and-cheese",
    name: "Lobster Mac and Cheese",
    emoji: "\u{1F99E}",
    description:
      "Ultra-creamy baked mac and cheese studded with chunks of sweet lobster meat, a blend of gruyere and sharp cheddar, and a golden panko crust.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 30,
    totalTime: 50,
    servings: 6,
    ingredients: [
      { name: "cavatappi or elbow pasta", amount: "1", unit: "lb" },
      { name: "cooked lobster meat, chopped", amount: "12", unit: "oz" },
      { name: "gruyere cheese, shredded", amount: "6", unit: "oz" },
      { name: "sharp cheddar cheese, shredded", amount: "4", unit: "oz" },
      { name: "unsalted butter", amount: "4", unit: "tbsp" },
      { name: "all-purpose flour", amount: "3", unit: "tbsp" },
      { name: "whole milk", amount: "3", unit: "cups" },
      { name: "dry mustard", amount: "1/2", unit: "tsp" },
      { name: "cayenne pepper", amount: "1/4", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "panko breadcrumbs", amount: "1/2", unit: "cup" },
      { name: "melted butter (for topping)", amount: "1", unit: "tbsp" },
      { name: "fresh chives, chopped", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 375F. Cook pasta until al dente (1 minute less than package directions). Drain.",
      },
      {
        step: 2,
        instruction:
          "Melt butter in a large saucepan over medium heat. Whisk in flour and cook 1 minute. Gradually whisk in milk. Cook, stirring, until thickened (4-5 minutes).",
      },
      {
        step: 3,
        instruction:
          "Remove from heat. Stir in both cheeses until melted. Add dry mustard, cayenne, and salt.",
        tip: "Reserve a handful of lobster pieces for topping so they stay visible and pretty.",
      },
      {
        step: 4,
        instruction:
          "Fold in the pasta and most of the lobster meat. Pour into a buttered 9x13 baking dish. Scatter remaining lobster on top.",
      },
      {
        step: 5,
        instruction:
          "Toss panko with melted butter and sprinkle over the top. Bake for 20-25 minutes until golden and bubbling. Garnish with chives.",
      },
    ],
    nutrition: { calories: 580, protein: 34, carbs: 48, fat: 28, fiber: 2 },
    tags: ["comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["one-pot-mac-and-cheese", "cioppino", "clam-chowder"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chicken-and-dumplings",
    name: "Chicken and Dumplings",
    emoji: "\u{1F372}",
    description:
      "Tender chicken in a thick, creamy herb broth topped with fluffy drop dumplings that steam right on top of the stew. Southern comfort in a bowl.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 40,
    totalTime: 60,
    servings: 6,
    ingredients: [
      { name: "bone-in chicken thighs", amount: "2", unit: "lb" },
      { name: "carrots, diced", amount: "3", unit: "medium" },
      { name: "celery stalks, diced", amount: "2", unit: "stalks" },
      { name: "yellow onion, diced", amount: "1", unit: "medium" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "chicken broth", amount: "6", unit: "cups" },
      { name: "heavy cream", amount: "1/2", unit: "cup" },
      { name: "fresh thyme", amount: "2", unit: "sprigs" },
      { name: "all-purpose flour", amount: "2", unit: "cups", group: "For the dumplings" },
      { name: "baking powder", amount: "1", unit: "tbsp", group: "For the dumplings" },
      { name: "salt", amount: "1", unit: "tsp", group: "For the dumplings" },
      { name: "cold butter, cubed", amount: "3", unit: "tbsp", group: "For the dumplings" },
      { name: "whole milk", amount: "3/4", unit: "cup", group: "For the dumplings" },
      { name: "fresh parsley, chopped", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Place chicken thighs, broth, and thyme in a large pot. Bring to a boil, then simmer for 20 minutes until chicken is cooked. Remove chicken, shred, and set aside. Discard thyme stems.",
      },
      {
        step: 2,
        instruction:
          "Add carrots, celery, onion, and garlic to the broth. Simmer for 10 minutes until vegetables begin to soften. Stir in heavy cream.",
      },
      {
        step: 3,
        instruction:
          "Make the dumplings: whisk flour, baking powder, and salt. Cut in cold butter. Stir in milk until a shaggy dough forms.",
        tip: "Don't overwork the dough. Lumpy and shaggy = light and fluffy dumplings.",
      },
      {
        step: 4,
        instruction:
          "Return shredded chicken to the pot. Drop spoonfuls of dumpling dough onto the surface (about 12 dumplings). Cover tightly and simmer for 15 minutes without lifting the lid.",
      },
      {
        step: 5,
        instruction:
          "Remove lid. The dumplings should be puffed and cooked through. Garnish with parsley and serve immediately.",
      },
    ],
    nutrition: { calories: 460, protein: 32, carbs: 36, fat: 20, fiber: 2 },
    tags: ["comfort-food", "one-pot", "family-friendly"],
    youtubeVideoId: null,
    relatedSlugs: ["chicken-noodle-soup", "chicken-pot-pie", "biscuits-and-gravy"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "gumbo",
    name: "Gumbo",
    emoji: "\u{1F372}",
    description:
      "A rich Louisiana gumbo with andouille sausage, shrimp, okra, and the holy trinity, all built on a dark chocolate-colored roux. Served over steamed white rice.",
    cuisine: "Cajun",
    mealType: "dinner",
    difficulty: "Advanced",
    prepTime: 30,
    cookTime: 90,
    totalTime: 120,
    servings: 8,
    ingredients: [
      { name: "andouille sausage, sliced", amount: "1", unit: "lb" },
      { name: "large shrimp, peeled and deveined", amount: "1", unit: "lb" },
      { name: "all-purpose flour", amount: "1/2", unit: "cup", group: "For the roux" },
      { name: "vegetable oil", amount: "1/2", unit: "cup", group: "For the roux" },
      { name: "yellow onion, diced", amount: "1", unit: "large" },
      { name: "green bell pepper, diced", amount: "1", unit: "large" },
      { name: "celery stalks, diced", amount: "3", unit: "stalks" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves" },
      { name: "okra, sliced", amount: "2", unit: "cups" },
      { name: "chicken broth", amount: "6", unit: "cups" },
      { name: "canned diced tomatoes", amount: "14", unit: "oz" },
      { name: "Cajun seasoning", amount: "2", unit: "tbsp" },
      { name: "bay leaves", amount: "2", unit: "leaves" },
      { name: "cooked white rice", amount: "4", unit: "cups" },
      { name: "green onions, sliced", amount: "4", unit: "stalks" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Make the roux: heat oil in a large Dutch oven over medium heat. Whisk in flour. Stir constantly for 20-25 minutes until the roux turns the color of dark chocolate.",
        tip: "This is the foundation. Never stop stirring and never walk away. If it burns, start over.",
      },
      {
        step: 2,
        instruction:
          "Add the onion, bell pepper, and celery to the roux (it will sizzle). Stir for 5 minutes until softened. Add garlic, cook 30 seconds.",
      },
      {
        step: 3,
        instruction:
          "Pour in chicken broth gradually, stirring to incorporate the roux. Add diced tomatoes, okra, Cajun seasoning, and bay leaves.",
      },
      {
        step: 4,
        instruction:
          "Bring to a boil, then reduce to a simmer. Add the sliced andouille sausage. Cook for 45 minutes, stirring occasionally.",
      },
      {
        step: 5,
        instruction:
          "Add the shrimp and cook for 5 more minutes until pink and curled. Remove bay leaves.",
      },
      {
        step: 6,
        instruction:
          "Ladle over steamed white rice in bowls. Garnish with sliced green onions.",
      },
    ],
    nutrition: { calories: 480, protein: 30, carbs: 38, fat: 22, fiber: 3 },
    tags: ["comfort-food", "one-pot"],
    youtubeVideoId: null,
    relatedSlugs: ["jambalaya", "red-beans-and-rice", "cornbread"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "red-beans-and-rice",
    name: "Red Beans and Rice",
    emoji: "\u{1F35B}",
    description:
      "Creamy Louisiana red beans slow-simmered with smoked sausage, the holy trinity, and Cajun spices, served over fluffy white rice. Monday night tradition.",
    cuisine: "Cajun",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 120,
    totalTime: 135,
    servings: 6,
    ingredients: [
      { name: "dried red kidney beans, soaked overnight", amount: "1", unit: "lb" },
      { name: "andouille sausage, sliced", amount: "12", unit: "oz" },
      { name: "yellow onion, diced", amount: "1", unit: "large" },
      { name: "green bell pepper, diced", amount: "1", unit: "medium" },
      { name: "celery stalks, diced", amount: "2", unit: "stalks" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves" },
      { name: "chicken broth", amount: "6", unit: "cups" },
      { name: "bay leaves", amount: "2", unit: "leaves" },
      { name: "dried thyme", amount: "1", unit: "tsp" },
      { name: "Cajun seasoning", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "hot sauce", amount: "1", unit: "tsp" },
      { name: "cooked white rice", amount: "4", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Drain and rinse the soaked beans. Place in a large pot with chicken broth, bay leaves, and thyme. Bring to a boil, then simmer.",
      },
      {
        step: 2,
        instruction:
          "In a separate skillet, brown the sausage for 3-4 minutes. Remove. In the same skillet, saute onion, bell pepper, celery, and garlic for 5 minutes.",
      },
      {
        step: 3,
        instruction:
          "Add the sausage and sauteed vegetables to the beans. Stir in Cajun seasoning. Simmer for 1.5-2 hours until beans are creamy.",
        tip: "Mash some beans against the side of the pot as they cook to make the broth thicker and creamier.",
      },
      {
        step: 4,
        instruction:
          "Season with salt and hot sauce. Remove bay leaves. Serve over steamed white rice.",
      },
    ],
    nutrition: { calories: 420, protein: 24, carbs: 50, fat: 14, fiber: 10 },
    tags: ["comfort-food", "one-pot", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["gumbo", "jambalaya", "chili-con-carne"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "bangers-and-mash",
    name: "Bangers and Mash",
    emoji: "\u{1F356}",
    description:
      "Plump pork sausages on a bed of buttery mashed potatoes, smothered in rich onion gravy. A British pub classic that is impossible not to love.",
    cuisine: "British",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 35,
    totalTime: 45,
    servings: 4,
    ingredients: [
      { name: "pork sausages (bangers)", amount: "8", unit: "links" },
      { name: "Russet potatoes, peeled and cubed", amount: "2", unit: "lb" },
      { name: "unsalted butter", amount: "4", unit: "tbsp" },
      { name: "whole milk, warmed", amount: "1/2", unit: "cup" },
      { name: "yellow onion, thinly sliced", amount: "2", unit: "large", group: "For the gravy" },
      { name: "beef broth", amount: "1.5", unit: "cups", group: "For the gravy" },
      { name: "all-purpose flour", amount: "1", unit: "tbsp", group: "For the gravy" },
      { name: "Worcestershire sauce", amount: "1", unit: "tbsp", group: "For the gravy" },
      { name: "butter", amount: "2", unit: "tbsp", group: "For the gravy" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Boil the potatoes in salted water for 15-18 minutes until fork-tender. Drain well.",
      },
      {
        step: 2,
        instruction:
          "While potatoes cook, brown the sausages in a skillet over medium heat, turning occasionally, for 12-15 minutes until cooked through and golden. Remove and keep warm.",
      },
      {
        step: 3,
        instruction:
          "In the same skillet, melt 2 tbsp butter. Add the sliced onions and cook over medium-low heat for 15 minutes until deeply caramelized.",
      },
      {
        step: 4,
        instruction:
          "Sprinkle flour over the onions and stir 1 minute. Add beef broth and Worcestershire. Simmer for 5 minutes until the gravy thickens.",
      },
      {
        step: 5,
        instruction:
          "Mash the potatoes with 4 tbsp butter and warm milk until smooth and creamy. Season with salt and pepper.",
        tip: "Warm the milk first. Cold milk makes gluey mash.",
      },
      {
        step: 6,
        instruction:
          "Pile mash on plates, top with sausages, and ladle the onion gravy over everything.",
      },
    ],
    nutrition: { calories: 560, protein: 24, carbs: 42, fat: 34, fiber: 3 },
    tags: ["comfort-food", "family-friendly"],
    youtubeVideoId: null,
    relatedSlugs: ["cottage-pie", "pot-roast", "biscuits-and-gravy"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "cottage-pie",
    name: "Cottage Pie",
    emoji: "\u{1F954}",
    description:
      "Savory ground beef and vegetables in a rich gravy, topped with creamy mashed potatoes and baked until golden and bubbling. The British answer to leftovers.",
    cuisine: "British",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 45,
    totalTime: 65,
    servings: 6,
    ingredients: [
      { name: "ground beef", amount: "1.5", unit: "lb" },
      { name: "Russet potatoes, peeled and cubed", amount: "2", unit: "lb", group: "For the topping" },
      { name: "unsalted butter", amount: "4", unit: "tbsp", group: "For the topping" },
      { name: "whole milk", amount: "1/2", unit: "cup", group: "For the topping" },
      { name: "yellow onion, diced", amount: "1", unit: "medium" },
      { name: "carrots, diced", amount: "2", unit: "medium" },
      { name: "frozen peas", amount: "1", unit: "cup" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "tomato paste", amount: "2", unit: "tbsp" },
      { name: "Worcestershire sauce", amount: "1", unit: "tbsp" },
      { name: "beef broth", amount: "1", unit: "cup" },
      { name: "all-purpose flour", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Boil potatoes in salted water for 15 minutes until tender. Drain, mash with butter and milk, season with salt and pepper. Set aside.",
      },
      {
        step: 2,
        instruction:
          "Preheat oven to 400F. Brown the ground beef in a large oven-safe skillet, breaking into small pieces. Drain excess fat.",
      },
      {
        step: 3,
        instruction:
          "Add onion and carrots, cook 5 minutes. Add garlic, cook 30 seconds. Stir in tomato paste and flour, cook 1 minute.",
      },
      {
        step: 4,
        instruction:
          "Add beef broth and Worcestershire. Simmer for 10 minutes until thickened. Stir in peas. Season with salt and pepper.",
      },
      {
        step: 5,
        instruction:
          "Spread the mashed potatoes over the beef filling. Score the top with a fork for texture. Dot with a little extra butter.",
        tip: "Roughing up the potato surface creates more crispy edges during baking.",
      },
      {
        step: 6,
        instruction:
          "Bake for 25 minutes until the potato topping is golden and the filling is bubbling around the edges.",
      },
    ],
    nutrition: { calories: 480, protein: 28, carbs: 38, fat: 24, fiber: 4 },
    tags: ["comfort-food", "family-friendly"],
    youtubeVideoId: null,
    relatedSlugs: ["bangers-and-mash", "shepherds-pie", "pot-roast"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "arroz-con-pollo",
    name: "Arroz Con Pollo",
    emoji: "\u{1F357}",
    description:
      "One-pot Latin chicken and rice cooked in a fragrant tomato-sofrito base with olives, capers, and sweet peppers. Every culture has a chicken-and-rice dish, and this is one of the best.",
    cuisine: "Latin American",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 45,
    totalTime: 65,
    servings: 6,
    ingredients: [
      { name: "bone-in chicken thighs", amount: "2", unit: "lb" },
      { name: "long-grain white rice", amount: "2", unit: "cups" },
      { name: "chicken broth", amount: "2.5", unit: "cups" },
      { name: "sofrito (or diced onion, pepper, garlic)", amount: "1/2", unit: "cup" },
      { name: "tomato sauce", amount: "8", unit: "oz" },
      { name: "green olives, pitted", amount: "1/3", unit: "cup" },
      { name: "capers", amount: "1", unit: "tbsp" },
      { name: "roasted red pepper, sliced", amount: "1/2", unit: "cup" },
      { name: "ground cumin", amount: "1", unit: "tsp" },
      { name: "dried oregano", amount: "1", unit: "tsp" },
      { name: "saffron or annatto powder", amount: "1/4", unit: "tsp" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "fresh cilantro, chopped", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Season chicken thighs with salt, cumin, and oregano. Heat olive oil in a large Dutch oven over medium-high heat. Sear chicken skin-side down for 5 minutes until golden. Flip and cook 3 minutes. Remove to a plate.",
      },
      {
        step: 2,
        instruction:
          "Add sofrito to the pot and cook 3 minutes. Stir in tomato sauce and saffron. Cook 2 minutes.",
      },
      {
        step: 3,
        instruction:
          "Add the rice and stir to coat in the sauce. Pour in chicken broth. Nestle the chicken pieces on top (skin-side up). Add olives and capers.",
        tip: "Don't stir after adding the chicken. Let the rice absorb the liquid undisturbed for the best texture.",
      },
      {
        step: 4,
        instruction:
          "Bring to a boil, then reduce to low. Cover tightly and cook for 25-30 minutes until rice is tender and liquid is absorbed.",
      },
      {
        step: 5,
        instruction:
          "Remove from heat. Let rest covered for 5 minutes. Garnish with roasted red peppers and cilantro.",
      },
    ],
    nutrition: { calories: 520, protein: 32, carbs: 52, fat: 18, fiber: 2 },
    tags: ["comfort-food", "one-pot", "family-friendly"],
    youtubeVideoId: null,
    relatedSlugs: ["chicken-fried-rice", "jambalaya", "red-beans-and-rice"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "cioppino",
    name: "Cioppino",
    emoji: "\u{1F99E}",
    description:
      "San Francisco's legendary seafood stew with shrimp, clams, mussels, and white fish simmered in a garlicky tomato-wine broth. Serve with sourdough for dipping.",
    cuisine: "Italian-American",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 35,
    totalTime: 55,
    servings: 6,
    ingredients: [
      { name: "large shrimp, peeled and deveined", amount: "1", unit: "lb" },
      { name: "littleneck clams, scrubbed", amount: "12", unit: "clams" },
      { name: "mussels, scrubbed and debearded", amount: "12", unit: "mussels" },
      { name: "firm white fish (halibut or cod), cubed", amount: "1", unit: "lb" },
      { name: "crushed tomatoes", amount: "28", unit: "oz" },
      { name: "dry white wine", amount: "1", unit: "cup" },
      { name: "fish or chicken broth", amount: "1", unit: "cup" },
      { name: "yellow onion, diced", amount: "1", unit: "large" },
      { name: "fennel bulb, diced", amount: "1/2", unit: "bulb" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves" },
      { name: "olive oil", amount: "3", unit: "tbsp" },
      { name: "red pepper flakes", amount: "1/2", unit: "tsp" },
      { name: "dried oregano", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "fresh parsley, chopped", amount: "3", unit: "tbsp" },
      { name: "crusty sourdough bread", amount: "6", unit: "slices" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat olive oil in a large Dutch oven over medium heat. Cook onion and fennel for 5 minutes until softened. Add garlic, red pepper flakes, and oregano. Cook 1 minute.",
      },
      {
        step: 2,
        instruction:
          "Pour in the white wine and simmer for 2 minutes to reduce slightly. Add crushed tomatoes and broth. Season with salt. Bring to a simmer and cook 15 minutes.",
        tip: "Build the broth first without the seafood. A flavorful broth is 90% of a great cioppino.",
      },
      {
        step: 3,
        instruction:
          "Add the clams and mussels first (they take longest). Cover and cook 5 minutes.",
      },
      {
        step: 4,
        instruction:
          "Add the fish and shrimp. Cover and cook 5 more minutes until the clams and mussels have opened and the shrimp are pink. Discard any that haven't opened.",
      },
      {
        step: 5,
        instruction:
          "Ladle into large bowls, making sure each gets a mix of all the seafood. Garnish with parsley and serve with crusty sourdough.",
      },
    ],
    nutrition: { calories: 380, protein: 40, carbs: 22, fat: 12, fiber: 3 },
    tags: ["comfort-food", "one-pot"],
    youtubeVideoId: null,
    relatedSlugs: ["clam-chowder", "lobster-mac-and-cheese", "seafood-paella"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "cassoulet",
    name: "Cassoulet",
    emoji: "\u{1F372}",
    description:
      "A rustic French casserole of white beans slow-baked with duck confit, pork sausage, and a golden breadcrumb crust. Worth every minute of the long cook time.",
    cuisine: "French",
    mealType: "dinner",
    difficulty: "Advanced",
    prepTime: 30,
    cookTime: 150,
    totalTime: 180,
    servings: 8,
    ingredients: [
      { name: "dried white beans (Great Northern), soaked overnight", amount: "1", unit: "lb" },
      { name: "duck confit legs", amount: "4", unit: "legs" },
      { name: "pork sausage (Toulouse or garlic sausage)", amount: "1", unit: "lb" },
      { name: "thick-cut bacon, diced", amount: "6", unit: "oz" },
      { name: "yellow onion, diced", amount: "1", unit: "large" },
      { name: "carrots, diced", amount: "2", unit: "medium" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves" },
      { name: "tomato paste", amount: "2", unit: "tbsp" },
      { name: "chicken broth", amount: "4", unit: "cups" },
      { name: "fresh thyme sprigs", amount: "4", unit: "sprigs" },
      { name: "bay leaves", amount: "2", unit: "leaves" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "breadcrumbs", amount: "1", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 325F. Drain and rinse soaked beans. Cook bacon in a Dutch oven until crispy. Remove. Brown sausage in the same pot, cut into chunks, remove.",
      },
      {
        step: 2,
        instruction:
          "Saute onion and carrots in the fat for 5 minutes. Add garlic and tomato paste, cook 1 minute.",
      },
      {
        step: 3,
        instruction:
          "Add the beans, chicken broth, thyme, bay leaves, salt, and pepper. Nestle in the duck legs and scatter the sausage and bacon throughout.",
        tip: "The fat from the duck and bacon enriches the beans as it cooks. Don't remove it.",
      },
      {
        step: 4,
        instruction:
          "Bring to a simmer. Cover and transfer to the oven. Bake for 1.5 hours until the beans are tender.",
      },
      {
        step: 5,
        instruction:
          "Remove the lid. Sprinkle breadcrumbs over the top. Increase oven to 375F and bake uncovered for 30 minutes until a golden crust forms on top.",
      },
      {
        step: 6,
        instruction:
          "Let rest 15 minutes before serving. The texture improves as it sits. Serve with a simple green salad.",
      },
    ],
    nutrition: { calories: 620, protein: 42, carbs: 40, fat: 32, fiber: 8 },
    tags: ["comfort-food", "one-pot"],
    youtubeVideoId: null,
    relatedSlugs: ["coq-au-vin", "beef-bourguignon", "gumbo"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
];
