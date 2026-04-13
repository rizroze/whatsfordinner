import type { FullRecipe } from "./types";

export const dessertRecipes: FullRecipe[] = [
  {
    slug: "chocolate-chip-cookies",
    name: "Chocolate Chip Cookies",
    emoji: "\u{1F36A}",
    description:
      "Perfectly chewy chocolate chip cookies with crispy edges, a gooey center, and pools of melted chocolate in every bite. Brown butter takes them to the next level.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    servings: 24,
    ingredients: [
      { name: "unsalted butter, browned and cooled", amount: "1", unit: "cup" },
      { name: "brown sugar", amount: "3/4", unit: "cup" },
      { name: "granulated sugar", amount: "1/4", unit: "cup" },
      { name: "large eggs", amount: "2", unit: "whole" },
      { name: "vanilla extract", amount: "2", unit: "tsp" },
      { name: "all-purpose flour", amount: "2 1/4", unit: "cups" },
      { name: "baking soda", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "semi-sweet chocolate chips", amount: "2", unit: "cups" },
      { name: "flaky sea salt", amount: "1/4", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Brown the butter in a saucepan over medium heat, swirling occasionally, until it smells nutty and has golden-brown specks at the bottom. Pour into a bowl and let cool for 10 minutes.",
        tip: "Brown butter adds a deep, toffee-like flavor that sets these apart from every other recipe. Don't skip this step.",
      },
      {
        step: 2,
        instruction:
          "Whisk both sugars into the cooled brown butter until smooth. Add eggs one at a time, then vanilla, whisking until the mixture is thick and slightly pale.",
      },
      {
        step: 3,
        instruction:
          "Stir in flour, baking soda, and salt until just combined. Fold in chocolate chips. Don't overmix.",
      },
      {
        step: 4,
        instruction:
          "Scoop dough into balls (about 2 tablespoons each) onto parchment-lined baking sheets. Chill for 30 minutes if possible.",
      },
      {
        step: 5,
        instruction:
          "Bake at 375F for 10-12 minutes until the edges are golden but the centers still look slightly underdone. Sprinkle with flaky salt. Cool on the pan for 5 minutes.",
      },
    ],
    nutrition: { calories: 180, protein: 2, carbs: 24, fat: 9, fiber: 1 },
    tags: ["vegetarian", "comfort-food", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["brownies", "blueberry-muffins", "banana-bread"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "banana-bread",
    name: "Banana Bread",
    emoji: "\u{1F34C}",
    description:
      "Incredibly moist banana bread with a golden crust and deep banana flavor. Uses overripe bananas, a touch of brown sugar, and a hint of cinnamon.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 55,
    totalTime: 65,
    servings: 10,
    ingredients: [
      { name: "overripe bananas, mashed", amount: "3", unit: "large" },
      { name: "unsalted butter, melted", amount: "1/3", unit: "cup" },
      { name: "brown sugar", amount: "3/4", unit: "cup" },
      { name: "egg", amount: "1", unit: "large" },
      { name: "vanilla extract", amount: "1", unit: "tsp" },
      { name: "all-purpose flour", amount: "1 1/2", unit: "cups" },
      { name: "baking soda", amount: "1", unit: "tsp" },
      { name: "cinnamon", amount: "1/2", unit: "tsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "walnuts, chopped (optional)", amount: "1/2", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 350F. Grease a 9x5 loaf pan. Mash the bananas in a large bowl until mostly smooth with a few small chunks remaining.",
        tip: "The blacker the bananas, the better the bread. They should be almost entirely brown/black for the sweetest, most intense flavor.",
      },
      {
        step: 2,
        instruction:
          "Stir in melted butter, brown sugar, egg, and vanilla until combined.",
      },
      {
        step: 3,
        instruction:
          "Add flour, baking soda, cinnamon, and salt. Stir until just combined. Fold in walnuts if using.",
      },
      {
        step: 4,
        instruction:
          "Pour into the prepared pan. Bake for 50-55 minutes until a toothpick inserted in the center comes out clean. Cool in the pan for 10 minutes, then turn out onto a wire rack.",
      },
    ],
    nutrition: { calories: 210, protein: 3, carbs: 34, fat: 8, fiber: 2 },
    tags: ["vegetarian", "comfort-food", "budget"],
    youtubeVideoId: "qUmDpPfY_h0",
    relatedSlugs: ["blueberry-muffins", "chocolate-chip-cookies", "cinnamon-rolls"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "brownies",
    name: "Brownies",
    emoji: "\u{1F36B}",
    description:
      "Fudgy, dense, intensely chocolatey brownies with a crackly top and a gooey center. Made with both cocoa powder and melted chocolate for maximum richness.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 12,
    ingredients: [
      { name: "unsalted butter", amount: "1/2", unit: "cup" },
      { name: "semi-sweet chocolate, chopped", amount: "4", unit: "oz" },
      { name: "granulated sugar", amount: "1", unit: "cup" },
      { name: "eggs", amount: "2", unit: "large" },
      { name: "vanilla extract", amount: "1", unit: "tsp" },
      { name: "cocoa powder", amount: "1/3", unit: "cup" },
      { name: "all-purpose flour", amount: "1/2", unit: "cup" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "chocolate chips", amount: "1/2", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 350F. Line an 8x8 baking pan with parchment paper. Melt butter and chopped chocolate together in a saucepan over low heat, stirring constantly. Let cool slightly.",
      },
      {
        step: 2,
        instruction:
          "Whisk sugar and eggs together for 2 full minutes until thick and ribbon-like. This creates the signature crackly top.",
        tip: "The key to fudgy brownies with that paper-thin crackle crust is beating the sugar and eggs vigorously. Time yourself.",
      },
      {
        step: 3,
        instruction:
          "Fold the melted chocolate mixture into the egg mixture. Add vanilla, then fold in cocoa powder, flour, and salt until just combined. Stir in chocolate chips.",
      },
      {
        step: 4,
        instruction:
          "Pour into the prepared pan and bake for 22-25 minutes. The center should be slightly jiggly. Cool completely in the pan before cutting. They firm up as they cool.",
      },
    ],
    nutrition: { calories: 220, protein: 3, carbs: 28, fat: 12, fiber: 2 },
    tags: ["vegetarian", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["chocolate-chip-cookies", "chocolate-lava-cake", "banana-bread"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "tiramisu",
    name: "Tiramisu",
    emoji: "\u{2615}",
    description:
      "Classic Italian tiramisu with layers of espresso-soaked ladyfingers and a luscious mascarpone cream, dusted with cocoa powder. No baking required.",
    cuisine: "Italian",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 30,
    cookTime: 0,
    totalTime: 270,
    servings: 8,
    ingredients: [
      { name: "egg yolks", amount: "4", unit: "large" },
      { name: "granulated sugar", amount: "1/2", unit: "cup" },
      { name: "mascarpone cheese", amount: "16", unit: "oz" },
      { name: "heavy cream", amount: "1 1/2", unit: "cups" },
      { name: "vanilla extract", amount: "1", unit: "tsp" },
      { name: "strong brewed espresso, cooled", amount: "1 1/2", unit: "cups" },
      { name: "coffee liqueur (optional)", amount: "2", unit: "tbsp" },
      { name: "ladyfinger cookies (savoiardi)", amount: "30", unit: "whole" },
      { name: "unsweetened cocoa powder", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Whisk egg yolks and sugar in a heatproof bowl set over a pot of simmering water for 5-8 minutes until thick, pale, and the sugar is dissolved. Remove from heat and let cool for 5 minutes.",
        tip: "The double boiler method gently cooks the yolks while keeping them safe. The mixture should reach 160F.",
      },
      {
        step: 2,
        instruction:
          "Fold the mascarpone into the cooled egg mixture until smooth. In a separate bowl, whip the heavy cream and vanilla to stiff peaks. Gently fold the whipped cream into the mascarpone mixture.",
      },
      {
        step: 3,
        instruction:
          "Mix espresso with coffee liqueur if using. Quickly dip each ladyfinger in the espresso (1-2 seconds per side, no more). Arrange a single layer in a 9x13 dish. Spread half the cream on top. Repeat with a second layer.",
      },
      {
        step: 4,
        instruction:
          "Cover and refrigerate for at least 4 hours, ideally overnight. Dust generously with cocoa powder just before serving.",
      },
    ],
    nutrition: { calories: 340, protein: 7, carbs: 30, fat: 22, fiber: 0 },
    tags: ["no-cook", "party"],
    youtubeVideoId: "uNowLq9fm9I",
    relatedSlugs: ["panna-cotta", "creme-brulee", "affogato"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "creme-brulee",
    name: "Creme Brulee",
    emoji: "\u{1F36E}",
    description:
      "Silky vanilla custard with a thin, crackling caramelized sugar top. The contrast between the cold, creamy custard and the warm, crispy crust is unbeatable.",
    cuisine: "French",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 45,
    totalTime: 300,
    servings: 4,
    ingredients: [
      { name: "heavy cream", amount: "2", unit: "cups" },
      { name: "egg yolks", amount: "5", unit: "large" },
      { name: "granulated sugar", amount: "1/2", unit: "cup" },
      { name: "vanilla bean (or 2 tsp extract)", amount: "1", unit: "whole" },
      { name: "pinch of salt", amount: "1", unit: "pinch" },
      { name: "superfine sugar, for topping", amount: "4", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 325F. Heat cream with the scraped vanilla bean seeds (or extract) until it just starts to simmer. Don't let it boil.",
      },
      {
        step: 2,
        instruction:
          "Whisk egg yolks and sugar until pale. Very slowly pour the hot cream into the yolks while whisking constantly to temper them. Strain through a fine mesh sieve.",
        tip: "Pour the cream in a thin stream. Too fast and you'll scramble the eggs.",
      },
      {
        step: 3,
        instruction:
          "Divide among 4 ramekins placed in a deep baking dish. Pour hot water into the dish until it comes halfway up the sides of the ramekins. Bake 40-45 minutes until the custard is set but still jiggles slightly in the center.",
      },
      {
        step: 4,
        instruction:
          "Cool to room temperature, then refrigerate at least 4 hours. When ready to serve, sprinkle 1 tbsp superfine sugar on each. Torch with a kitchen torch until caramelized and crackling.",
      },
    ],
    nutrition: { calories: 380, protein: 5, carbs: 28, fat: 28, fiber: 0 },
    tags: ["gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["panna-cotta", "tiramisu", "flan"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "apple-pie",
    name: "Apple Pie",
    emoji: "\u{1F34E}",
    description:
      "Classic double-crust apple pie with tender cinnamon-spiced apples and a flaky, buttery crust. Served warm with a scoop of vanilla ice cream.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 30,
    cookTime: 50,
    totalTime: 80,
    servings: 8,
    ingredients: [
      { name: "Granny Smith apples, peeled, cored, sliced", amount: "6", unit: "medium" },
      { name: "granulated sugar", amount: "3/4", unit: "cup" },
      { name: "all-purpose flour", amount: "2", unit: "tbsp" },
      { name: "cinnamon", amount: "1", unit: "tsp" },
      { name: "nutmeg", amount: "1/4", unit: "tsp" },
      { name: "lemon juice", amount: "1", unit: "tbsp" },
      { name: "unsalted butter, diced", amount: "2", unit: "tbsp" },
      { name: "prepared pie crust (2 rounds)", amount: "1", unit: "package" },
      { name: "egg, beaten (for egg wash)", amount: "1", unit: "whole" },
      { name: "coarse sugar, for sprinkling", amount: "1", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 425F. Toss sliced apples with sugar, flour, cinnamon, nutmeg, and lemon juice.",
      },
      {
        step: 2,
        instruction:
          "Fit one pie crust into a 9-inch pie plate. Add the apple filling and dot the top with butter.",
        tip: "Mix firm and soft apple varieties. Granny Smith hold their shape, while Honeycrisp break down slightly for a jammy filling.",
      },
      {
        step: 3,
        instruction:
          "Place the second crust on top. Trim, fold, and crimp the edges. Cut 4-5 slits in the top for steam to escape. Brush with beaten egg and sprinkle with coarse sugar.",
      },
      {
        step: 4,
        instruction:
          "Bake at 425F for 15 minutes, then reduce to 375F and bake 35-40 more minutes until the crust is golden and juices are bubbling. Cool for at least 1 hour before slicing.",
      },
    ],
    nutrition: { calories: 320, protein: 3, carbs: 48, fat: 14, fiber: 3 },
    tags: ["vegetarian", "comfort-food"],
    youtubeVideoId: "KbyahTnzbKA",
    relatedSlugs: ["pecan-pie", "fruit-tart", "cinnamon-rolls"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "cheesecake",
    name: "Cheesecake",
    emoji: "\u{1F370}",
    description:
      "Rich, creamy New York-style cheesecake with a buttery graham cracker crust. Dense and velvety with a tangy finish, this is the gold standard.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 60,
    totalTime: 380,
    servings: 12,
    ingredients: [
      { name: "graham cracker crumbs", amount: "1 1/2", unit: "cups", group: "For the crust" },
      { name: "unsalted butter, melted", amount: "5", unit: "tbsp", group: "For the crust" },
      { name: "granulated sugar", amount: "2", unit: "tbsp", group: "For the crust" },
      { name: "cream cheese, softened", amount: "32", unit: "oz", group: "For the filling" },
      { name: "granulated sugar", amount: "1", unit: "cup", group: "For the filling" },
      { name: "sour cream", amount: "1/2", unit: "cup", group: "For the filling" },
      { name: "eggs", amount: "4", unit: "large", group: "For the filling" },
      { name: "vanilla extract", amount: "2", unit: "tsp", group: "For the filling" },
      { name: "all-purpose flour", amount: "2", unit: "tbsp", group: "For the filling" },
      { name: "lemon zest", amount: "1", unit: "tsp", group: "For the filling" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 325F. Mix graham cracker crumbs, melted butter, and sugar. Press firmly into the bottom of a 9-inch springform pan. Bake for 10 minutes. Let cool.",
      },
      {
        step: 2,
        instruction:
          "Beat cream cheese on medium speed until perfectly smooth (no lumps). Add sugar and beat until combined. Add sour cream, vanilla, lemon zest, and flour. Mix on low.",
        tip: "Every ingredient must be room temperature. Cold cream cheese = lumpy cheesecake. Let it sit out for at least 1 hour.",
      },
      {
        step: 3,
        instruction:
          "Add eggs one at a time, mixing on low speed just until each is incorporated. Don't overbeat after adding eggs, or the cheesecake will crack.",
      },
      {
        step: 4,
        instruction:
          "Pour filling over the crust. Wrap the outside of the pan in foil. Place in a roasting pan and add hot water halfway up the sides. Bake for 55-60 minutes until the edges are set but the center jiggles slightly.",
      },
      {
        step: 5,
        instruction:
          "Turn off the oven and crack the door open. Let the cheesecake cool in the oven for 1 hour. Then refrigerate for at least 4 hours (overnight is best) before unmolding.",
      },
    ],
    nutrition: { calories: 380, protein: 7, carbs: 30, fat: 26, fiber: 0 },
    tags: ["party"],
    youtubeVideoId: "nNBMFxY1whk",
    relatedSlugs: ["tiramisu", "creme-brulee", "red-velvet-cupcakes"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "panna-cotta",
    name: "Panna Cotta",
    emoji: "\u{1F95B}",
    description:
      "Silky Italian cream dessert set with just enough gelatin to hold its shape, served with a fresh berry compote. Deceptively simple, impossibly elegant.",
    cuisine: "Italian",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 5,
    totalTime: 255,
    servings: 4,
    ingredients: [
      { name: "heavy cream", amount: "2", unit: "cups" },
      { name: "granulated sugar", amount: "1/4", unit: "cup" },
      { name: "vanilla extract", amount: "1", unit: "tsp" },
      { name: "unflavored gelatin", amount: "1", unit: "packet (2 1/4 tsp)" },
      { name: "cold water", amount: "2", unit: "tbsp" },
      { name: "mixed berries", amount: "1", unit: "cup", group: "For the compote" },
      { name: "sugar", amount: "2", unit: "tbsp", group: "For the compote" },
      { name: "lemon juice", amount: "1", unit: "tsp", group: "For the compote" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Sprinkle gelatin over cold water in a small bowl. Let it bloom for 5 minutes until it absorbs the water and becomes spongy.",
      },
      {
        step: 2,
        instruction:
          "Heat cream and sugar in a saucepan over medium heat, stirring until the sugar dissolves and the cream just begins to simmer. Remove from heat.",
        tip: "Don't let it boil. Boiling cream changes the texture and can make the panna cotta grainy.",
      },
      {
        step: 3,
        instruction:
          "Stir the bloomed gelatin into the hot cream until fully dissolved. Add vanilla. Pour into 4 ramekins or glasses. Refrigerate for at least 4 hours until set.",
      },
      {
        step: 4,
        instruction:
          "Make the compote: cook berries, sugar, and lemon juice in a small pan over medium heat for 5 minutes until the berries break down. Cool. Spoon over the panna cotta before serving.",
      },
    ],
    nutrition: { calories: 320, protein: 3, carbs: 22, fat: 26, fiber: 1 },
    tags: ["gluten-free", "party"],
    youtubeVideoId: null,
    relatedSlugs: ["creme-brulee", "tiramisu", "flan"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "mochi",
    name: "Mochi",
    emoji: "\u{1F361}",
    description:
      "Soft, chewy Japanese mochi filled with sweet red bean paste. Made with glutinous rice flour and steamed until pillowy and stretchy.",
    cuisine: "Japanese",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    servings: 12,
    ingredients: [
      { name: "glutinous rice flour (mochiko)", amount: "1", unit: "cup" },
      { name: "sugar", amount: "1/4", unit: "cup" },
      { name: "water", amount: "3/4", unit: "cup" },
      { name: "sweet red bean paste (anko)", amount: "3/4", unit: "cup" },
      { name: "cornstarch or potato starch, for dusting", amount: "1/4", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Portion the red bean paste into 12 small balls (about 1 tablespoon each). Place on a plate and freeze for 15 minutes so they're easier to wrap.",
      },
      {
        step: 2,
        instruction:
          "Mix rice flour, sugar, and water in a microwave-safe bowl until smooth. Cover with plastic wrap and microwave for 2 minutes. Stir, then microwave 1 more minute until the dough is translucent and sticky.",
        tip: "The dough should look translucent and glossy, not white and chalky. If it's still opaque, give it another 30 seconds.",
      },
      {
        step: 3,
        instruction:
          "Dust a work surface generously with cornstarch. Turn out the hot mochi dough and dust the top. Divide into 12 pieces using a bench scraper or scissors dusted with starch.",
      },
      {
        step: 4,
        instruction:
          "Flatten each piece into a circle, place a frozen bean paste ball in the center, and pinch the edges closed. Roll smooth and dust with more starch. Serve at room temperature.",
      },
    ],
    nutrition: { calories: 90, protein: 2, carbs: 20, fat: 0, fiber: 1 },
    tags: ["vegan", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["mango-sticky-rice", "matcha-ice-cream", "rice-pudding"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "churros",
    name: "Churros",
    emoji: "\u{1F36C}",
    description:
      "Crispy, ridged churros fried until golden and tossed in cinnamon sugar, served with a rich warm chocolate dipping sauce.",
    cuisine: "Spanish",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    servings: 6,
    ingredients: [
      { name: "water", amount: "1", unit: "cup" },
      { name: "unsalted butter", amount: "3", unit: "tbsp" },
      { name: "granulated sugar", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "all-purpose flour", amount: "1", unit: "cup" },
      { name: "eggs", amount: "2", unit: "large" },
      { name: "vanilla extract", amount: "1", unit: "tsp" },
      { name: "cinnamon sugar (1/2 cup sugar + 1 tsp cinnamon)", amount: "1/2", unit: "cup" },
      { name: "vegetable oil, for frying", amount: "4", unit: "cups" },
      { name: "chocolate sauce, warmed", amount: "1/2", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Bring water, butter, sugar, and salt to a boil. Remove from heat and add flour all at once. Stir vigorously until a smooth dough forms and pulls away from the sides of the pan.",
      },
      {
        step: 2,
        instruction:
          "Let cool for 2 minutes, then beat in eggs one at a time and vanilla until smooth. Transfer the dough to a piping bag fitted with a large star tip.",
        tip: "The star tip is essential. It creates the ridges that make churros crispy. A round tip won't give you the same texture.",
      },
      {
        step: 3,
        instruction:
          "Heat oil to 375F. Pipe 6-inch lengths of dough directly into the oil, cutting with scissors. Fry in batches for 2-3 minutes per side until deep golden brown.",
      },
      {
        step: 4,
        instruction:
          "Drain on paper towels for 30 seconds, then toss immediately in cinnamon sugar. Serve warm with chocolate dipping sauce.",
      },
    ],
    nutrition: { calories: 240, protein: 4, carbs: 30, fat: 12, fiber: 1 },
    tags: ["vegetarian", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["cinnamon-rolls", "chocolate-chip-cookies", "crepes"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "baklava",
    name: "Baklava",
    emoji: "\u{1F36F}",
    description:
      "Flaky layers of phyllo dough filled with chopped walnuts and pistachios, baked until golden, then soaked in a fragrant honey-lemon syrup.",
    cuisine: "Middle Eastern",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 30,
    cookTime: 45,
    totalTime: 75,
    servings: 24,
    ingredients: [
      { name: "phyllo dough, thawed", amount: "1", unit: "package (16 oz)" },
      { name: "walnuts, finely chopped", amount: "1", unit: "cup" },
      { name: "pistachios, finely chopped", amount: "1", unit: "cup" },
      { name: "cinnamon", amount: "1", unit: "tsp" },
      { name: "unsalted butter, melted", amount: "1", unit: "cup" },
      { name: "water", amount: "1", unit: "cup", group: "For the syrup" },
      { name: "granulated sugar", amount: "1", unit: "cup", group: "For the syrup" },
      { name: "honey", amount: "1/2", unit: "cup", group: "For the syrup" },
      { name: "lemon juice", amount: "1", unit: "tbsp", group: "For the syrup" },
      { name: "vanilla extract", amount: "1", unit: "tsp", group: "For the syrup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 350F. Mix chopped walnuts, pistachios, and cinnamon. Brush a 9x13 baking pan with melted butter.",
      },
      {
        step: 2,
        instruction:
          "Layer 8 sheets of phyllo in the pan, brushing each sheet with melted butter. Spread 1/3 of the nut mixture on top. Repeat with 6 more sheets and butter, another layer of nuts, 6 more sheets and butter, the last nuts, and finish with 8 sheets of buttered phyllo on top.",
        tip: "Keep unused phyllo covered with a damp towel. It dries out and cracks within minutes of being exposed to air.",
      },
      {
        step: 3,
        instruction:
          "Using a sharp knife, cut into diamond shapes before baking (you must cut before baking or it will shatter). Bake for 40-45 minutes until golden and crispy.",
      },
      {
        step: 4,
        instruction:
          "While baking, make the syrup: boil water, sugar, and honey. Reduce heat and simmer 10 minutes. Add lemon juice and vanilla. Pour the hot syrup over the hot baklava as soon as it comes out of the oven. Let cool completely (at least 4 hours) before serving.",
      },
    ],
    nutrition: { calories: 210, protein: 3, carbs: 24, fat: 12, fiber: 1 },
    tags: ["vegetarian", "party"],
    youtubeVideoId: null,
    relatedSlugs: ["mochi", "churros", "profiteroles"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "tres-leches-cake",
    name: "Tres Leches Cake",
    emoji: "\u{1F370}",
    description:
      "A light sponge cake soaked in three milks (evaporated, condensed, and heavy cream), topped with pillowy whipped cream. Impossibly moist and sweet.",
    cuisine: "Mexican",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 25,
    totalTime: 285,
    servings: 12,
    ingredients: [
      { name: "all-purpose flour", amount: "1", unit: "cup" },
      { name: "baking powder", amount: "1 1/2", unit: "tsp" },
      { name: "eggs, separated", amount: "5", unit: "large" },
      { name: "granulated sugar", amount: "1", unit: "cup" },
      { name: "whole milk", amount: "1/3", unit: "cup" },
      { name: "vanilla extract", amount: "1", unit: "tsp" },
      { name: "evaporated milk", amount: "12", unit: "oz", group: "For the soak" },
      { name: "sweetened condensed milk", amount: "14", unit: "oz", group: "For the soak" },
      { name: "heavy cream", amount: "1/2", unit: "cup", group: "For the soak" },
      { name: "heavy cream", amount: "2", unit: "cups", group: "For the topping" },
      { name: "powdered sugar", amount: "3", unit: "tbsp", group: "For the topping" },
      { name: "cinnamon", amount: "1/4", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 350F. Grease a 9x13 pan. Beat egg whites to stiff peaks. In another bowl, beat yolks with sugar until thick. Fold in milk and vanilla, then flour and baking powder. Gently fold in egg whites.",
      },
      {
        step: 2,
        instruction:
          "Pour batter into the pan and bake 22-25 minutes until a toothpick comes out clean. Let cool completely.",
      },
      {
        step: 3,
        instruction:
          "Mix the three milks together. Poke holes all over the cake with a fork. Slowly pour the milk mixture over the cake. Cover and refrigerate for at least 4 hours (overnight is best).",
        tip: "The cake will look like it's swimming in milk at first. It absorbs everything. Be patient and let it soak.",
      },
      {
        step: 4,
        instruction:
          "Whip the heavy cream with powdered sugar to stiff peaks. Spread over the soaked cake. Dust with cinnamon. Serve cold.",
      },
    ],
    nutrition: { calories: 340, protein: 8, carbs: 42, fat: 16, fiber: 0 },
    tags: ["party"],
    youtubeVideoId: null,
    relatedSlugs: ["flan", "cheesecake", "carrot-cake"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "pavlova",
    name: "Pavlova",
    emoji: "\u{1F353}",
    description:
      "A crispy meringue shell with a soft, marshmallowy center, topped with whipped cream and fresh seasonal fruit. Light, ethereal, and stunning.",
    cuisine: "Australian",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 60,
    totalTime: 200,
    servings: 8,
    ingredients: [
      { name: "egg whites, room temperature", amount: "4", unit: "large" },
      { name: "superfine sugar", amount: "1", unit: "cup" },
      { name: "white vinegar", amount: "1", unit: "tsp" },
      { name: "cornstarch", amount: "2", unit: "tsp" },
      { name: "vanilla extract", amount: "1", unit: "tsp" },
      { name: "heavy cream", amount: "1 1/2", unit: "cups" },
      { name: "powdered sugar", amount: "2", unit: "tbsp" },
      { name: "mixed fresh fruit (strawberries, kiwi, passion fruit)", amount: "2", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 250F. Line a baking sheet with parchment and draw an 8-inch circle as a guide. Beat egg whites until soft peaks form, then gradually add sugar a tablespoon at a time, beating until stiff and glossy.",
        tip: "Add the sugar slowly. Rushing this step means grainy meringue. Each addition should be fully dissolved before the next.",
      },
      {
        step: 2,
        instruction:
          "Fold in vinegar, cornstarch, and vanilla. Mound the meringue onto the parchment circle, creating a slight well in the center and building up the edges.",
      },
      {
        step: 3,
        instruction:
          "Bake for 1 hour until the outside is dry and firm. Turn off the oven and leave the pavlova inside with the door cracked for 2 hours to cool slowly. This prevents cracking.",
      },
      {
        step: 4,
        instruction:
          "Whip cream with powdered sugar. Pile onto the cooled meringue and top with fresh fruit. Serve immediately.",
      },
    ],
    nutrition: { calories: 250, protein: 3, carbs: 34, fat: 12, fiber: 1 },
    tags: ["gluten-free", "party"],
    youtubeVideoId: null,
    relatedSlugs: ["fruit-tart", "panna-cotta", "macarons"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chocolate-lava-cake",
    name: "Chocolate Lava Cake",
    emoji: "\u{1F36B}",
    description:
      "Individual chocolate cakes with a molten, gooey center that flows out when you cut in. Rich, decadent, and impressive with just 20 minutes of effort.",
    cuisine: "French",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 10,
    cookTime: 14,
    totalTime: 24,
    servings: 4,
    ingredients: [
      { name: "semi-sweet chocolate, chopped", amount: "6", unit: "oz" },
      { name: "unsalted butter", amount: "6", unit: "tbsp" },
      { name: "eggs", amount: "2", unit: "large" },
      { name: "egg yolks", amount: "2", unit: "large" },
      { name: "granulated sugar", amount: "1/4", unit: "cup" },
      { name: "all-purpose flour", amount: "2", unit: "tbsp" },
      { name: "pinch of salt", amount: "1", unit: "pinch" },
      { name: "powdered sugar, for dusting", amount: "1", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 425F. Butter and lightly flour 4 ramekins. Melt chocolate and butter together in a double boiler or microwave in 30-second bursts, stirring between each.",
      },
      {
        step: 2,
        instruction:
          "Whisk eggs, egg yolks, and sugar together until thick and slightly pale. Fold in the melted chocolate mixture, then fold in flour and salt.",
        tip: "The batter can be made ahead and refrigerated for up to 24 hours. Add 2 extra minutes to the bake time if cold.",
      },
      {
        step: 3,
        instruction:
          "Divide batter among the prepared ramekins. Bake for exactly 12-14 minutes until the edges are firm but the center is still soft and jiggly.",
      },
      {
        step: 4,
        instruction:
          "Let rest for 1 minute, then invert onto plates. Tap the bottom of the ramekin and lift. The cake should slide out. Dust with powdered sugar and serve immediately.",
      },
    ],
    nutrition: { calories: 380, protein: 6, carbs: 26, fat: 28, fiber: 2 },
    tags: ["party", "quick"],
    youtubeVideoId: null,
    relatedSlugs: ["brownies", "tiramisu", "creme-brulee"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "mango-sticky-rice",
    name: "Mango Sticky Rice",
    emoji: "\u{1F96D}",
    description:
      "Sweet Thai sticky rice steamed until tender and soaked in warm coconut cream, served alongside slices of ripe mango. Simple, tropical, and perfect.",
    cuisine: "Thai",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 25,
    totalTime: 280,
    servings: 4,
    ingredients: [
      { name: "glutinous (sticky) rice", amount: "1 1/2", unit: "cups" },
      { name: "coconut milk", amount: "14", unit: "oz" },
      { name: "granulated sugar", amount: "1/3", unit: "cup" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "ripe mangoes, peeled and sliced", amount: "2", unit: "large" },
      { name: "toasted sesame seeds", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Soak the sticky rice in water for at least 4 hours or overnight. Drain completely.",
        tip: "Don't skip the soaking. Unsoaked sticky rice will be crunchy and won't achieve the right chewy texture.",
      },
      {
        step: 2,
        instruction:
          "Steam the rice in a steamer basket lined with cheesecloth for 20-25 minutes until tender and translucent.",
      },
      {
        step: 3,
        instruction:
          "While rice steams, heat coconut milk, sugar, and salt until the sugar dissolves. Reserve 3 tbsp for drizzling. Pour the rest over the hot steamed rice and stir gently. Cover and let absorb for 10 minutes.",
      },
      {
        step: 4,
        instruction:
          "Serve the rice alongside sliced mango. Drizzle the reserved coconut cream on top and sprinkle with sesame seeds.",
      },
    ],
    nutrition: { calories: 340, protein: 5, carbs: 56, fat: 12, fiber: 2 },
    tags: ["vegan", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["mochi", "rice-pudding", "matcha-ice-cream"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "cinnamon-rolls",
    name: "Cinnamon Rolls",
    emoji: "\u{1F35E}",
    description:
      "Soft, fluffy cinnamon rolls swirled with brown sugar and cinnamon butter, baked until golden, then drizzled with a tangy cream cheese glaze.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Advanced",
    prepTime: 30,
    cookTime: 25,
    totalTime: 145,
    servings: 12,
    ingredients: [
      { name: "warm milk", amount: "3/4", unit: "cup", group: "For the dough" },
      { name: "active dry yeast", amount: "2 1/4", unit: "tsp", group: "For the dough" },
      { name: "granulated sugar", amount: "1/4", unit: "cup", group: "For the dough" },
      { name: "unsalted butter, melted", amount: "1/4", unit: "cup", group: "For the dough" },
      { name: "egg", amount: "1", unit: "large", group: "For the dough" },
      { name: "all-purpose flour", amount: "3", unit: "cups", group: "For the dough" },
      { name: "salt", amount: "3/4", unit: "tsp", group: "For the dough" },
      { name: "softened butter", amount: "3", unit: "tbsp", group: "For the filling" },
      { name: "brown sugar", amount: "1/2", unit: "cup", group: "For the filling" },
      { name: "cinnamon", amount: "2", unit: "tbsp", group: "For the filling" },
      { name: "cream cheese, softened", amount: "2", unit: "oz", group: "For the glaze" },
      { name: "powdered sugar", amount: "1", unit: "cup", group: "For the glaze" },
      { name: "milk", amount: "2", unit: "tbsp", group: "For the glaze" },
      { name: "vanilla extract", amount: "1/2", unit: "tsp", group: "For the glaze" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Warm the milk to 110F. Stir in yeast and a pinch of sugar. Let sit 5 minutes until foamy. Mix in remaining sugar, melted butter, and egg. Add flour and salt, knead for 5 minutes until smooth. Let rise in a covered bowl for 1 hour.",
      },
      {
        step: 2,
        instruction:
          "Roll dough into a 16x12-inch rectangle. Spread with softened butter, then sprinkle evenly with brown sugar and cinnamon.",
        tip: "Roll tightly from the long side. A tight roll means defined swirls. A loose roll means flat, sad spirals.",
      },
      {
        step: 3,
        instruction:
          "Roll up tightly from the long side. Cut into 12 equal pieces using dental floss or a sharp knife. Place cut-side up in a greased 9x13 pan. Cover and let rise 30 minutes.",
      },
      {
        step: 4,
        instruction:
          "Preheat oven to 375F. Bake for 22-25 minutes until golden brown. While they bake, beat cream cheese, powdered sugar, milk, and vanilla until smooth. Drizzle glaze over the warm rolls.",
      },
    ],
    nutrition: { calories: 280, protein: 5, carbs: 44, fat: 10, fiber: 1 },
    tags: ["vegetarian", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["banana-bread", "blueberry-muffins", "churros"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "blueberry-muffins",
    name: "Blueberry Muffins",
    emoji: "\u{1FAD0}",
    description:
      "Bakery-style blueberry muffins with tall, domed tops and a crunchy sugar crust. Bursting with juicy blueberries in every bite.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    servings: 12,
    ingredients: [
      { name: "all-purpose flour", amount: "2 1/2", unit: "cups" },
      { name: "granulated sugar", amount: "3/4", unit: "cup" },
      { name: "baking powder", amount: "2", unit: "tsp" },
      { name: "salt", amount: "1/2", unit: "tsp" },
      { name: "vegetable oil", amount: "1/3", unit: "cup" },
      { name: "eggs", amount: "2", unit: "large" },
      { name: "milk", amount: "1/2", unit: "cup" },
      { name: "sour cream", amount: "1/2", unit: "cup" },
      { name: "vanilla extract", amount: "1", unit: "tsp" },
      { name: "fresh blueberries", amount: "1 1/2", unit: "cups" },
      { name: "coarse sugar, for topping", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 425F. Line a muffin tin with paper liners. Whisk flour, sugar, baking powder, and salt in a large bowl.",
      },
      {
        step: 2,
        instruction:
          "In a separate bowl, whisk oil, eggs, milk, sour cream, and vanilla. Pour wet into dry and fold until just combined (a few lumps are fine). Gently fold in blueberries.",
        tip: "Overmixing develops gluten, which makes muffins tough and dense. Stop folding the moment the flour disappears.",
      },
      {
        step: 3,
        instruction:
          "Fill each liner to the very top (overfilling is how you get the tall dome). Sprinkle with coarse sugar.",
      },
      {
        step: 4,
        instruction:
          "Bake at 425F for 5 minutes (this burst of heat creates the dome), then reduce to 375F and bake 18-20 more minutes until golden and a toothpick comes out clean.",
      },
    ],
    nutrition: { calories: 220, protein: 4, carbs: 34, fat: 8, fiber: 1 },
    tags: ["vegetarian", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["banana-bread", "cinnamon-rolls", "lemon-bars"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "lemon-bars",
    name: "Lemon Bars",
    emoji: "\u{1F34B}",
    description:
      "Tangy, bright lemon curd set on a buttery shortbread crust and dusted with powdered sugar. The perfect balance of sweet and sour.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 40,
    totalTime: 115,
    servings: 16,
    ingredients: [
      { name: "unsalted butter, softened", amount: "1/2", unit: "cup", group: "For the crust" },
      { name: "powdered sugar", amount: "1/4", unit: "cup", group: "For the crust" },
      { name: "all-purpose flour", amount: "1", unit: "cup", group: "For the crust" },
      { name: "pinch of salt", amount: "1", unit: "pinch", group: "For the crust" },
      { name: "eggs", amount: "3", unit: "large", group: "For the filling" },
      { name: "granulated sugar", amount: "1 1/2", unit: "cups", group: "For the filling" },
      { name: "all-purpose flour", amount: "3", unit: "tbsp", group: "For the filling" },
      { name: "fresh lemon juice", amount: "1/2", unit: "cup", group: "For the filling" },
      { name: "lemon zest", amount: "1", unit: "tbsp", group: "For the filling" },
      { name: "powdered sugar, for dusting", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 350F. Line an 8x8 pan with parchment. Mix butter, powdered sugar, flour, and salt until crumbly. Press into the pan and bake 18-20 minutes until the edges are just golden.",
      },
      {
        step: 2,
        instruction:
          "Whisk together eggs, sugar, flour, lemon juice, and lemon zest until smooth.",
        tip: "Use fresh lemon juice, never bottled. The difference in flavor is enormous.",
      },
      {
        step: 3,
        instruction:
          "Pour the lemon filling over the hot crust (pouring onto a hot crust helps it set evenly). Bake for 18-22 minutes until the filling is set and no longer jiggles.",
      },
      {
        step: 4,
        instruction:
          "Cool completely, then refrigerate for at least 1 hour. Dust generously with powdered sugar before cutting into squares.",
      },
    ],
    nutrition: { calories: 170, protein: 2, carbs: 28, fat: 6, fiber: 0 },
    tags: ["vegetarian"],
    youtubeVideoId: "JnT0hSGik1A",
    relatedSlugs: ["brownies", "blueberry-muffins", "fruit-tart"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "matcha-ice-cream",
    name: "Matcha Ice Cream",
    emoji: "\u{1F375}",
    description:
      "Creamy, vibrant matcha green tea ice cream made with a rich custard base. Earthy, subtly sweet, and impossibly smooth without an ice cream machine.",
    cuisine: "Japanese",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 10,
    totalTime: 385,
    servings: 6,
    ingredients: [
      { name: "heavy cream", amount: "2", unit: "cups" },
      { name: "sweetened condensed milk", amount: "14", unit: "oz" },
      { name: "matcha powder", amount: "2", unit: "tbsp" },
      { name: "vanilla extract", amount: "1", unit: "tsp" },
      { name: "hot water", amount: "2", unit: "tbsp" },
      { name: "pinch of salt", amount: "1", unit: "pinch" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Dissolve the matcha powder in hot water, whisking vigorously with a small whisk or fork until completely smooth and free of lumps.",
        tip: "Sift the matcha first. Matcha clumps are nearly impossible to dissolve once mixed into cream.",
      },
      {
        step: 2,
        instruction:
          "Whip the heavy cream to stiff peaks. In a separate bowl, mix condensed milk with the matcha paste, vanilla, and salt.",
      },
      {
        step: 3,
        instruction:
          "Fold 1/3 of the whipped cream into the matcha mixture to lighten it, then gently fold in the remaining whipped cream until evenly green with no white streaks.",
      },
      {
        step: 4,
        instruction:
          "Pour into a loaf pan or freezer-safe container. Cover with plastic wrap pressed directly onto the surface (prevents ice crystals). Freeze for at least 6 hours or overnight.",
      },
    ],
    nutrition: { calories: 340, protein: 6, carbs: 32, fat: 22, fiber: 0 },
    tags: ["gluten-free", "no-cook"],
    youtubeVideoId: null,
    relatedSlugs: ["mochi", "mango-sticky-rice", "affogato"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "fruit-tart",
    name: "Fruit Tart",
    emoji: "\u{1F353}",
    description:
      "A buttery shortcrust shell filled with silky vanilla pastry cream and topped with an artful arrangement of fresh seasonal fruit, glazed to a shine.",
    cuisine: "French",
    mealType: "snack",
    difficulty: "Advanced",
    prepTime: 30,
    cookTime: 25,
    totalTime: 175,
    servings: 8,
    ingredients: [
      { name: "unsalted butter, cold and cubed", amount: "1/2", unit: "cup", group: "For the crust" },
      { name: "powdered sugar", amount: "1/3", unit: "cup", group: "For the crust" },
      { name: "all-purpose flour", amount: "1 1/4", unit: "cups", group: "For the crust" },
      { name: "egg yolk", amount: "1", unit: "large", group: "For the crust" },
      { name: "cold water", amount: "1", unit: "tbsp", group: "For the crust" },
      { name: "whole milk", amount: "1 1/2", unit: "cups", group: "For the pastry cream" },
      { name: "egg yolks", amount: "3", unit: "large", group: "For the pastry cream" },
      { name: "granulated sugar", amount: "1/3", unit: "cup", group: "For the pastry cream" },
      { name: "cornstarch", amount: "3", unit: "tbsp", group: "For the pastry cream" },
      { name: "vanilla extract", amount: "1", unit: "tsp", group: "For the pastry cream" },
      { name: "unsalted butter", amount: "1", unit: "tbsp", group: "For the pastry cream" },
      { name: "assorted fresh fruit (berries, kiwi, grapes)", amount: "2", unit: "cups" },
      { name: "apricot jam, warmed", amount: "3", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Pulse butter, powdered sugar, and flour in a food processor until sandy. Add egg yolk and water, pulse until the dough just comes together. Wrap and chill for 30 minutes.",
      },
      {
        step: 2,
        instruction:
          "Roll out the dough and press into a 9-inch tart pan with a removable bottom. Prick the base with a fork. Line with parchment and fill with pie weights. Blind bake at 375F for 15 minutes, remove weights, and bake 8-10 more minutes until golden. Cool completely.",
      },
      {
        step: 3,
        instruction:
          "Make the pastry cream: heat milk until steaming. Whisk yolks, sugar, and cornstarch. Slowly pour in hot milk while whisking. Return to the pan and cook over medium heat, stirring constantly, until thick. Off heat, stir in vanilla and butter. Press plastic wrap onto the surface and chill at least 1 hour.",
        tip: "Cook the pastry cream until it's quite thick and holds its shape on a spoon. It should coat the back of a spoon heavily.",
      },
      {
        step: 4,
        instruction:
          "Spread cooled pastry cream into the cooled tart shell. Arrange fresh fruit on top in concentric circles. Brush with warm apricot jam for a glossy finish.",
      },
    ],
    nutrition: { calories: 280, protein: 5, carbs: 36, fat: 14, fiber: 2 },
    tags: ["vegetarian", "party"],
    youtubeVideoId: null,
    relatedSlugs: ["pavlova", "lemon-bars", "crepes"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "rice-pudding",
    name: "Rice Pudding",
    emoji: "\u{1F35A}",
    description:
      "Creamy, comforting stovetop rice pudding made with Arborio rice, whole milk, vanilla, and a touch of cinnamon. Like a warm hug in a bowl.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 35,
    totalTime: 40,
    servings: 6,
    ingredients: [
      { name: "Arborio rice", amount: "3/4", unit: "cup" },
      { name: "whole milk", amount: "3", unit: "cups" },
      { name: "granulated sugar", amount: "1/3", unit: "cup" },
      { name: "vanilla extract", amount: "1", unit: "tsp" },
      { name: "cinnamon", amount: "1/2", unit: "tsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "raisins (optional)", amount: "1/4", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Combine rice, milk, sugar, and salt in a medium saucepan. Bring to a gentle simmer over medium heat, stirring frequently.",
      },
      {
        step: 2,
        instruction:
          "Reduce heat to low and cook for 30-35 minutes, stirring often, until the rice is tender and the mixture is thick and creamy.",
        tip: "Stir frequently to prevent the bottom from scorching. Arborio rice releases starch as it cooks, creating the creamiest texture.",
      },
      {
        step: 3,
        instruction:
          "Remove from heat. Stir in vanilla, cinnamon, and raisins if using. The pudding will thicken more as it cools.",
      },
      {
        step: 4,
        instruction:
          "Serve warm or cold, with an extra sprinkle of cinnamon on top.",
      },
    ],
    nutrition: { calories: 200, protein: 5, carbs: 36, fat: 4, fiber: 0 },
    tags: ["vegetarian", "gluten-free", "comfort-food", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["mango-sticky-rice", "chia-pudding", "bread-pudding"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "crepes",
    name: "Crepes",
    emoji: "\u{1F95E}",
    description:
      "Thin, delicate French crepes filled with Nutella and fresh strawberries, dusted with powdered sugar. Equally good for breakfast or dessert.",
    cuisine: "French",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 8,
    ingredients: [
      { name: "all-purpose flour", amount: "1", unit: "cup" },
      { name: "eggs", amount: "2", unit: "large" },
      { name: "whole milk", amount: "1", unit: "cup" },
      { name: "water", amount: "1/4", unit: "cup" },
      { name: "unsalted butter, melted", amount: "2", unit: "tbsp" },
      { name: "sugar", amount: "1", unit: "tbsp" },
      { name: "vanilla extract", amount: "1", unit: "tsp" },
      { name: "pinch of salt", amount: "1", unit: "pinch" },
      { name: "Nutella", amount: "1/2", unit: "cup" },
      { name: "fresh strawberries, sliced", amount: "1", unit: "cup" },
      { name: "powdered sugar", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Blend flour, eggs, milk, water, melted butter, sugar, vanilla, and salt until perfectly smooth. Let the batter rest for 15 minutes.",
        tip: "Resting the batter lets the gluten relax and the flour fully hydrate. This makes tender, tear-free crepes.",
      },
      {
        step: 2,
        instruction:
          "Heat a non-stick skillet or crepe pan over medium heat. Lightly butter the pan. Pour about 3 tablespoons of batter and immediately tilt the pan in a circular motion to spread the batter into a thin, even circle.",
      },
      {
        step: 3,
        instruction:
          "Cook for about 1 minute until the bottom is lightly golden and the edges start to lift. Flip and cook 30 seconds more. Stack on a plate.",
      },
      {
        step: 4,
        instruction:
          "Spread Nutella on each crepe, add sliced strawberries, fold into quarters, and dust with powdered sugar.",
      },
    ],
    nutrition: { calories: 200, protein: 5, carbs: 28, fat: 8, fiber: 1 },
    tags: ["vegetarian", "quick"],
    youtubeVideoId: null,
    relatedSlugs: ["banana-bread", "french-toast", "churros"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "flan",
    name: "Flan",
    emoji: "\u{1F36E}",
    description:
      "Silky smooth Mexican flan with a deep amber caramel sauce that pools around the custard when unmolded. Rich with eggs, vanilla, and condensed milk.",
    cuisine: "Mexican",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 55,
    totalTime: 310,
    servings: 8,
    ingredients: [
      { name: "granulated sugar", amount: "3/4", unit: "cup", group: "For the caramel" },
      { name: "water", amount: "2", unit: "tbsp", group: "For the caramel" },
      { name: "sweetened condensed milk", amount: "14", unit: "oz", group: "For the custard" },
      { name: "evaporated milk", amount: "12", unit: "oz", group: "For the custard" },
      { name: "eggs", amount: "5", unit: "large", group: "For the custard" },
      { name: "vanilla extract", amount: "2", unit: "tsp", group: "For the custard" },
      { name: "cream cheese, softened", amount: "4", unit: "oz", group: "For the custard" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Make the caramel: heat sugar and water in a saucepan over medium heat without stirring. Swirl the pan occasionally until the sugar turns a deep amber color. Immediately pour into a 9-inch round pan, tilting to coat the bottom.",
        tip: "Don't stir caramel while it cooks or it will crystallize. Once it starts to color, it goes from golden to burnt in seconds. Stay vigilant.",
      },
      {
        step: 2,
        instruction:
          "Preheat oven to 350F. Blend condensed milk, evaporated milk, eggs, vanilla, and cream cheese in a blender until completely smooth. Pour through a strainer over the caramel.",
      },
      {
        step: 3,
        instruction:
          "Place the pan in a larger roasting pan. Add hot water to the roasting pan until it reaches halfway up the sides. Bake for 50-55 minutes until the edges are set but the center still jiggles slightly.",
      },
      {
        step: 4,
        instruction:
          "Cool to room temperature, then refrigerate for at least 4 hours (overnight is best). To unmold, run a knife around the edges, place a plate on top, and flip. The caramel will pool around the flan.",
      },
    ],
    nutrition: { calories: 320, protein: 10, carbs: 42, fat: 13, fiber: 0 },
    tags: ["gluten-free", "party"],
    youtubeVideoId: null,
    relatedSlugs: ["creme-brulee", "tres-leches-cake", "panna-cotta"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "carrot-cake",
    name: "Carrot Cake",
    emoji: "\u{1F955}",
    description:
      "Moist, spiced carrot cake loaded with walnuts and topped with a tangy cream cheese frosting. Warmly spiced with cinnamon, nutmeg, and ginger.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 35,
    totalTime: 55,
    servings: 12,
    ingredients: [
      { name: "all-purpose flour", amount: "2", unit: "cups" },
      { name: "granulated sugar", amount: "1 1/2", unit: "cups" },
      { name: "vegetable oil", amount: "1", unit: "cup" },
      { name: "eggs", amount: "3", unit: "large" },
      { name: "carrots, finely grated", amount: "2", unit: "cups" },
      { name: "baking soda", amount: "2", unit: "tsp" },
      { name: "cinnamon", amount: "2", unit: "tsp" },
      { name: "nutmeg", amount: "1/2", unit: "tsp" },
      { name: "ground ginger", amount: "1/4", unit: "tsp" },
      { name: "salt", amount: "1/2", unit: "tsp" },
      { name: "walnuts, chopped", amount: "1/2", unit: "cup" },
      { name: "cream cheese, softened", amount: "8", unit: "oz", group: "For the frosting" },
      { name: "unsalted butter, softened", amount: "1/4", unit: "cup", group: "For the frosting" },
      { name: "powdered sugar", amount: "2", unit: "cups", group: "For the frosting" },
      { name: "vanilla extract", amount: "1", unit: "tsp", group: "For the frosting" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 350F. Grease and flour two 9-inch round cake pans. Whisk flour, sugar, baking soda, cinnamon, nutmeg, ginger, and salt.",
      },
      {
        step: 2,
        instruction:
          "Add oil and eggs, mix until combined. Fold in grated carrots and walnuts.",
        tip: "Finely grate the carrots. Large shreds won't break down during baking and create an unpleasant texture.",
      },
      {
        step: 3,
        instruction:
          "Divide batter between the pans. Bake 30-35 minutes until a toothpick comes out clean. Cool in pans for 10 minutes, then turn out onto racks to cool completely.",
      },
      {
        step: 4,
        instruction:
          "Beat cream cheese, butter, powdered sugar, and vanilla until fluffy. Frost the top of one layer, stack the second layer on top, and frost the top and sides. Refrigerate 30 minutes before serving.",
      },
    ],
    nutrition: { calories: 420, protein: 5, carbs: 52, fat: 22, fiber: 2 },
    tags: ["vegetarian", "party"],
    youtubeVideoId: "EB0jyeTN1jw",
    relatedSlugs: ["red-velvet-cupcakes", "banana-bread", "cinnamon-rolls"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "red-velvet-cupcakes",
    name: "Red Velvet Cupcakes",
    emoji: "\u{1F9C1}",
    description:
      "Tender, moist red velvet cupcakes with a subtle cocoa flavor topped with swirls of tangy cream cheese frosting. A Southern classic in miniature.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 12,
    ingredients: [
      { name: "all-purpose flour", amount: "1 1/2", unit: "cups" },
      { name: "granulated sugar", amount: "1", unit: "cup" },
      { name: "cocoa powder", amount: "1", unit: "tbsp" },
      { name: "baking soda", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1/2", unit: "tsp" },
      { name: "vegetable oil", amount: "1/2", unit: "cup" },
      { name: "buttermilk", amount: "1", unit: "cup" },
      { name: "eggs", amount: "2", unit: "large" },
      { name: "red food coloring", amount: "2", unit: "tbsp" },
      { name: "vanilla extract", amount: "1", unit: "tsp" },
      { name: "white vinegar", amount: "1", unit: "tsp" },
      { name: "cream cheese, softened", amount: "8", unit: "oz", group: "For the frosting" },
      { name: "unsalted butter, softened", amount: "1/4", unit: "cup", group: "For the frosting" },
      { name: "powdered sugar", amount: "2", unit: "cups", group: "For the frosting" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 350F. Line a muffin tin with cupcake liners. Whisk flour, sugar, cocoa, baking soda, and salt.",
      },
      {
        step: 2,
        instruction:
          "In a separate bowl, whisk oil, buttermilk, eggs, food coloring, vanilla, and vinegar. Pour wet ingredients into dry and mix until just combined.",
        tip: "The vinegar reacts with baking soda to give the cupcakes an extra-tender crumb. Don't leave it out.",
      },
      {
        step: 3,
        instruction:
          "Fill liners 2/3 full. Bake 18-20 minutes until a toothpick comes out clean. Cool completely before frosting.",
      },
      {
        step: 4,
        instruction:
          "Beat cream cheese, butter, and powdered sugar until fluffy and smooth. Pipe or spread frosting onto the cooled cupcakes.",
      },
    ],
    nutrition: { calories: 300, protein: 4, carbs: 40, fat: 14, fiber: 0 },
    tags: ["vegetarian", "party"],
    youtubeVideoId: null,
    relatedSlugs: ["carrot-cake", "cheesecake", "brownies"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "pecan-pie",
    name: "Pecan Pie",
    emoji: "\u{1F330}",
    description:
      "Classic Southern pecan pie with a rich, caramel-like filling studded with toasted pecans in a flaky butter crust. Sweet, nutty, and deeply satisfying.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 55,
    totalTime: 130,
    servings: 8,
    ingredients: [
      { name: "prepared pie crust", amount: "1", unit: "round" },
      { name: "pecan halves", amount: "1 1/2", unit: "cups" },
      { name: "corn syrup", amount: "1", unit: "cup" },
      { name: "brown sugar", amount: "1/2", unit: "cup" },
      { name: "eggs", amount: "3", unit: "large" },
      { name: "unsalted butter, melted", amount: "3", unit: "tbsp" },
      { name: "vanilla extract", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 350F. Fit the pie crust into a 9-inch pie plate. Toast the pecans in a dry skillet over medium heat for 3-4 minutes until fragrant. Arrange in the crust.",
        tip: "Toasting the pecans first gives the whole pie a deeper, nuttier flavor and prevents the pecans from getting soggy in the filling.",
      },
      {
        step: 2,
        instruction:
          "Whisk corn syrup, brown sugar, eggs, melted butter, vanilla, and salt until smooth.",
      },
      {
        step: 3,
        instruction:
          "Pour the filling over the pecans. The pecans will float to the top and create a beautiful layer.",
      },
      {
        step: 4,
        instruction:
          "Bake for 50-55 minutes until the filling is set and the center doesn't jiggle when you tap the pie. If the crust edges are browning too fast, cover with foil. Cool at least 1 hour before slicing.",
      },
    ],
    nutrition: { calories: 400, protein: 5, carbs: 48, fat: 22, fiber: 2 },
    tags: ["party"],
    youtubeVideoId: null,
    relatedSlugs: ["apple-pie", "brownies", "cheesecake"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "macarons",
    name: "Macarons",
    emoji: "\u{1F36C}",
    description:
      "Delicate French almond meringue cookies with smooth tops, ruffled feet, and a luscious buttercream filling. The ultimate baking challenge, conquered.",
    cuisine: "French",
    mealType: "snack",
    difficulty: "Advanced",
    prepTime: 30,
    cookTime: 15,
    totalTime: 105,
    servings: 24,
    ingredients: [
      { name: "almond flour", amount: "1 1/2", unit: "cups" },
      { name: "powdered sugar", amount: "1 1/2", unit: "cups" },
      { name: "egg whites, aged at room temperature", amount: "3", unit: "large" },
      { name: "granulated sugar", amount: "1/4", unit: "cup" },
      { name: "cream of tartar", amount: "1/4", unit: "tsp" },
      { name: "vanilla extract", amount: "1/2", unit: "tsp" },
      { name: "gel food coloring (optional)", amount: "1/4", unit: "tsp" },
      { name: "unsalted butter, softened", amount: "1/4", unit: "cup", group: "For the filling" },
      { name: "powdered sugar", amount: "1", unit: "cup", group: "For the filling" },
      { name: "heavy cream", amount: "1", unit: "tbsp", group: "For the filling" },
      { name: "vanilla extract", amount: "1/2", unit: "tsp", group: "For the filling" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Sift almond flour and powdered sugar together twice to remove any lumps. This is essential for smooth-topped macarons.",
      },
      {
        step: 2,
        instruction:
          "Beat egg whites with cream of tartar until foamy. Gradually add granulated sugar and beat to stiff, glossy peaks. Add vanilla and food coloring if using.",
        tip: "Age your egg whites in the fridge overnight, then bring to room temp. Aged whites are more stable and produce better meringue.",
      },
      {
        step: 3,
        instruction:
          "Fold the almond flour mixture into the meringue using the macaronage technique: press the batter against the side of the bowl with a spatula, then fold. Repeat 40-50 times until the batter flows like lava and falls in a ribbon that dissolves in 10 seconds.",
      },
      {
        step: 4,
        instruction:
          "Pipe 1.5-inch circles onto parchment-lined baking sheets. Tap the sheets firmly on the counter 3 times to release air bubbles. Let rest at room temperature for 30-60 minutes until they form a dry skin (not tacky to touch).",
      },
      {
        step: 5,
        instruction:
          "Bake at 300F for 14-16 minutes until the shells are firm and don't wobble when tapped. Cool completely. Beat the filling ingredients until smooth and sandwich the shells together. Refrigerate overnight before eating for the best texture.",
      },
    ],
    nutrition: { calories: 110, protein: 2, carbs: 16, fat: 5, fiber: 1 },
    tags: ["gluten-free", "party"],
    youtubeVideoId: null,
    relatedSlugs: ["pavlova", "profiteroles", "creme-brulee"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "affogato",
    name: "Affogato",
    emoji: "\u{2615}",
    description:
      "A single scoop of vanilla gelato drowned in a shot of hot espresso. The simplest, most perfect Italian dessert. Two ingredients, infinite satisfaction.",
    cuisine: "Italian",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 0,
    totalTime: 5,
    servings: 1,
    ingredients: [
      { name: "vanilla gelato or ice cream", amount: "1", unit: "scoop" },
      { name: "hot espresso", amount: "1", unit: "shot (2 oz)" },
      { name: "amaretti cookie (optional)", amount: "1", unit: "whole" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Place a scoop of vanilla gelato into a small glass or espresso cup.",
      },
      {
        step: 2,
        instruction:
          "Pull a fresh shot of espresso (or use a stovetop moka pot for strong coffee).",
        tip: "The espresso must be hot and the gelato must be frozen solid. The temperature contrast is the entire point of this dessert.",
      },
      {
        step: 3,
        instruction:
          "Pour the hot espresso directly over the gelato. Serve immediately with a spoon and an optional amaretti cookie on the side.",
      },
    ],
    nutrition: { calories: 180, protein: 3, carbs: 22, fat: 8, fiber: 0 },
    tags: ["quick", "gluten-free", "no-cook"],
    youtubeVideoId: null,
    relatedSlugs: ["tiramisu", "matcha-ice-cream", "panna-cotta"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "profiteroles",
    name: "Profiteroles",
    emoji: "\u{1F36B}",
    description:
      "Light, airy choux pastry puffs filled with vanilla ice cream and drizzled with warm dark chocolate sauce. A French patisserie classic.",
    cuisine: "French",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 30,
    totalTime: 50,
    servings: 8,
    ingredients: [
      { name: "water", amount: "1/2", unit: "cup" },
      { name: "unsalted butter", amount: "4", unit: "tbsp" },
      { name: "all-purpose flour", amount: "1/2", unit: "cup" },
      { name: "eggs", amount: "2", unit: "large" },
      { name: "sugar", amount: "1", unit: "tsp" },
      { name: "pinch of salt", amount: "1", unit: "pinch" },
      { name: "vanilla ice cream", amount: "2", unit: "cups" },
      { name: "dark chocolate, chopped", amount: "4", unit: "oz", group: "For the sauce" },
      { name: "heavy cream", amount: "1/4", unit: "cup", group: "For the sauce" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 425F. Bring water, butter, sugar, and salt to a boil. Remove from heat and add flour all at once. Stir vigorously until a smooth dough forms and pulls away from the sides.",
      },
      {
        step: 2,
        instruction:
          "Let cool 3 minutes, then beat in eggs one at a time until smooth, shiny, and thick enough to hold a V-shape when the spoon is lifted.",
        tip: "The dough should be glossy and hold its shape when piped. If it's too stiff, beat an extra half-egg in.",
      },
      {
        step: 3,
        instruction:
          "Pipe or spoon 16 mounds onto a parchment-lined baking sheet. Bake at 425F for 10 minutes, reduce to 375F, and bake 18-20 more minutes until golden and hollow-sounding. Pierce each puff with a skewer to release steam. Cool completely.",
      },
      {
        step: 4,
        instruction:
          "Heat cream and pour over chopped chocolate. Stir until smooth. Split the puffs, fill with ice cream, and drizzle generously with warm chocolate sauce.",
      },
    ],
    nutrition: { calories: 260, protein: 5, carbs: 24, fat: 16, fiber: 1 },
    tags: ["party"],
    youtubeVideoId: null,
    relatedSlugs: ["churros", "chocolate-lava-cake", "macarons"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "bread-pudding",
    name: "Bread Pudding",
    emoji: "\u{1F35E}",
    description:
      "Custardy, golden bread pudding made with day-old bread soaked in a rich vanilla-cinnamon egg custard, baked until set, and drizzled with a warm bourbon caramel sauce.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 45,
    totalTime: 60,
    servings: 8,
    ingredients: [
      { name: "day-old bread, cubed", amount: "6", unit: "cups" },
      { name: "whole milk", amount: "2", unit: "cups" },
      { name: "eggs", amount: "3", unit: "large" },
      { name: "granulated sugar", amount: "3/4", unit: "cup" },
      { name: "vanilla extract", amount: "2", unit: "tsp" },
      { name: "cinnamon", amount: "1", unit: "tsp" },
      { name: "nutmeg", amount: "1/4", unit: "tsp" },
      { name: "unsalted butter, melted", amount: "3", unit: "tbsp" },
      { name: "raisins", amount: "1/3", unit: "cup" },
      { name: "brown sugar", amount: "1/4", unit: "cup", group: "For the sauce" },
      { name: "unsalted butter", amount: "3", unit: "tbsp", group: "For the sauce" },
      { name: "heavy cream", amount: "1/4", unit: "cup", group: "For the sauce" },
      { name: "vanilla extract", amount: "1/2", unit: "tsp", group: "For the sauce" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 350F. Grease a 9x9 baking dish. Place bread cubes in the dish and scatter raisins throughout.",
        tip: "Stale bread is better than fresh here. It absorbs the custard without turning to mush. Leave fresh bread out overnight or dry it in a 250F oven for 10 minutes.",
      },
      {
        step: 2,
        instruction:
          "Whisk together milk, eggs, sugar, melted butter, vanilla, cinnamon, and nutmeg. Pour over the bread. Press the bread down gently so it soaks up the custard. Let sit for 10 minutes.",
      },
      {
        step: 3,
        instruction:
          "Bake for 40-45 minutes until the top is golden and the custard is set (a knife inserted in the center should come out clean).",
      },
      {
        step: 4,
        instruction:
          "Make the sauce: melt butter and brown sugar together in a small pan. Add cream and vanilla, simmer for 2 minutes until smooth. Drizzle over the warm bread pudding and serve.",
      },
    ],
    nutrition: { calories: 320, protein: 7, carbs: 44, fat: 14, fiber: 1 },
    tags: ["vegetarian", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["rice-pudding", "cinnamon-rolls", "banana-bread"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
];
