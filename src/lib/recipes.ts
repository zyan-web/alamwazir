import heroPasta from "@/assets/hero-pasta.jpg";
import salad from "@/assets/recipe-salad.jpg";
import pancakes from "@/assets/recipe-pancakes.jpg";
import tagine from "@/assets/recipe-tagine.jpg";
import cake from "@/assets/recipe-cake.jpg";
import risotto from "@/assets/recipe-risotto.jpg";
import tart from "@/assets/recipe-tart.jpg";

export type Recipe = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  cuisine: string;
  diet: string[];
  time: number; // minutes
  difficulty: "Easy" | "Medium" | "Hard";
  servings: number;
  calories: number;
  author: string;
  category: "Breakfast" | "Mains" | "Sides" | "Desserts" | "Drinks";
  ingredients: { name: string; amount: string }[];
  steps: string[];
  story: string;
};

export const recipes: Recipe[] = [
  {
    slug: "sage-butter-spaghetti",
    title: "Sage Butter Spaghetti al Pomodoro",
    tagline: "A 20-minute weeknight pasta with crispy sage and slow-blistered tomato sauce.",
    image: heroPasta,
    cuisine: "Italian",
    diet: ["Vegetarian"],
    time: 25,
    difficulty: "Easy",
    servings: 2,
    calories: 540,
    author: "Sofia Reyes",
    category: "Mains",
    story:
      "Inspired by late summers in Puglia — a bowl that tastes like a sun-warmed terracotta tile and a breeze through olive trees.",
    ingredients: [
      { name: "Spaghetti", amount: "200 g" },
      { name: "San Marzano tomatoes", amount: "400 g" },
      { name: "Fresh sage leaves", amount: "12" },
      { name: "Unsalted butter", amount: "3 tbsp" },
      { name: "Garlic, smashed", amount: "2 cloves" },
      { name: "Parmesan, grated", amount: "40 g" },
      { name: "Sea salt & black pepper", amount: "to taste" },
    ],
    steps: [
      "Bring a large pot of well-salted water to a rolling boil.",
      "Melt butter in a wide skillet over medium heat. Add sage and garlic; fry until sage is crisp, about 2 minutes.",
      "Crush tomatoes by hand into the pan. Simmer 8 minutes, mashing into a chunky sauce.",
      "Cook spaghetti until 1 minute shy of al dente. Reserve a mug of pasta water.",
      "Toss pasta into the sauce with a splash of water. Stir vigorously to emulsify.",
      "Finish with parmesan, a crack of pepper, and the crispy sage on top.",
    ],
  },
  {
    slug: "pomegranate-grain-bowl",
    title: "Pomegranate & Roast Squash Grain Bowl",
    tagline: "Bright, jewelled and built for meal prep — a bowl that holds up all week.",
    image: salad,
    cuisine: "Mediterranean",
    diet: ["Vegan", "Gluten-free option"],
    time: 35,
    difficulty: "Easy",
    servings: 4,
    calories: 420,
    author: "Noor El-Amin",
    category: "Mains",
    story: "A bowl that tastes like late autumn light, all warm spice and bright pop.",
    ingredients: [
      { name: "Farro or freekeh", amount: "1 cup" },
      { name: "Butternut squash, cubed", amount: "500 g" },
      { name: "Olive oil", amount: "3 tbsp" },
      { name: "Pomegranate seeds", amount: "1 cup" },
      { name: "Mint & parsley, chopped", amount: "½ cup" },
      { name: "Lemon", amount: "1" },
      { name: "Cumin, salt", amount: "to taste" },
    ],
    steps: [
      "Roast squash with olive oil, cumin and salt at 220°C for 25 minutes.",
      "Cook farro in salted water until tender, about 20 minutes. Drain.",
      "Whisk lemon juice, olive oil and a pinch of salt for dressing.",
      "Toss grains with squash, herbs, pomegranate and dressing. Serve warm or chilled.",
    ],
  },
  {
    slug: "buttermilk-pancakes",
    title: "Slow Sunday Buttermilk Pancakes",
    tagline: "Cloud-soft, deeply golden, and stacked with maple and forest berries.",
    image: pancakes,
    cuisine: "American",
    diet: ["Vegetarian"],
    time: 20,
    difficulty: "Easy",
    servings: 3,
    calories: 380,
    author: "Marcus Hill",
    category: "Breakfast",
    story: "The pancakes that turn a slow morning into a small ritual.",
    ingredients: [
      { name: "All-purpose flour", amount: "1½ cups" },
      { name: "Buttermilk", amount: "1¼ cups" },
      { name: "Eggs", amount: "2" },
      { name: "Melted butter", amount: "3 tbsp" },
      { name: "Sugar", amount: "2 tbsp" },
      { name: "Baking powder & soda", amount: "1 tsp each" },
      { name: "Maple syrup, berries", amount: "to serve" },
    ],
    steps: [
      "Whisk dry ingredients in one bowl, wet in another. Combine gently — lumps are good.",
      "Rest the batter 5 minutes while the pan warms over medium heat.",
      "Ladle ¼ cup portions; flip when bubbles form and edges set, about 2 minutes.",
      "Stack tall, pour syrup, crown with berries.",
    ],
  },
  {
    slug: "lemon-olive-tagine",
    title: "Preserved Lemon & Olive Chicken Tagine",
    tagline: "A slow-braised North African classic, perfumed with saffron and ras el hanout.",
    image: tagine,
    cuisine: "Moroccan",
    diet: ["Gluten-free"],
    time: 90,
    difficulty: "Medium",
    servings: 4,
    calories: 610,
    author: "Yasmine Boudia",
    category: "Mains",
    story: "Cooked low until the chicken slides off the bone and the broth turns gold.",
    ingredients: [
      { name: "Chicken thighs, bone-in", amount: "8" },
      { name: "Preserved lemons, quartered", amount: "2" },
      { name: "Green olives", amount: "1 cup" },
      { name: "Onion, sliced", amount: "1 large" },
      { name: "Garlic", amount: "4 cloves" },
      { name: "Saffron, ras el hanout", amount: "1 tsp each" },
      { name: "Cilantro & parsley", amount: "1 bunch" },
    ],
    steps: [
      "Marinate chicken with spices, garlic and herbs for at least 30 minutes.",
      "Sear chicken in a tagine or heavy pot until golden. Remove.",
      "Soften onion, return chicken with 1 cup water, lemons and olives.",
      "Cover and simmer gently 60 minutes until chicken is fall-apart tender.",
      "Reduce sauce 5 minutes uncovered. Shower with herbs and serve with bread.",
    ],
  },
  {
    slug: "chocolate-olive-oil-cake",
    title: "Dark Chocolate Olive Oil Cake",
    tagline: "One bowl, no mixer, deeply fudgy with a whisper of sea salt.",
    image: cake,
    cuisine: "Italian",
    diet: ["Vegetarian"],
    time: 50,
    difficulty: "Easy",
    servings: 8,
    calories: 320,
    author: "Sofia Reyes",
    category: "Desserts",
    story: "The cake you bake on a Tuesday and serve on a Saturday.",
    ingredients: [
      { name: "Dark chocolate (70%)", amount: "200 g" },
      { name: "Extra virgin olive oil", amount: "¾ cup" },
      { name: "Eggs", amount: "3" },
      { name: "Sugar", amount: "¾ cup" },
      { name: "Flour", amount: "½ cup" },
      { name: "Cocoa powder", amount: "¼ cup" },
      { name: "Flaky salt", amount: "to finish" },
    ],
    steps: [
      "Heat oven to 175°C. Line a 20cm round tin.",
      "Melt chocolate; whisk in olive oil. Cool slightly.",
      "Beat eggs and sugar until pale; fold into chocolate.",
      "Sift in flour and cocoa; fold gently. Pour into tin.",
      "Bake 28–32 minutes until set with a fudgy centre. Cool, dust, salt.",
    ],
  },
  {
    slug: "wild-mushroom-risotto",
    title: "Wild Mushroom & Thyme Risotto",
    tagline: "Patient stirring, woodsy mushrooms, a glossy spoonful of comfort.",
    image: risotto,
    cuisine: "Italian",
    diet: ["Vegetarian", "Gluten-free"],
    time: 45,
    difficulty: "Medium",
    servings: 4,
    calories: 520,
    author: "Marco Bellini",
    category: "Mains",
    story: "A meditative dish — twenty minutes of stirring becomes a kind of quiet.",
    ingredients: [
      { name: "Arborio rice", amount: "1½ cups" },
      { name: "Mixed mushrooms", amount: "400 g" },
      { name: "Vegetable stock, hot", amount: "5 cups" },
      { name: "Shallot, minced", amount: "1" },
      { name: "Dry white wine", amount: "½ cup" },
      { name: "Butter, parmesan", amount: "to finish" },
      { name: "Thyme", amount: "a few sprigs" },
    ],
    steps: [
      "Sauté mushrooms in butter until deeply browned. Set aside.",
      "Soften shallot in butter; toast rice 2 minutes.",
      "Deglaze with wine. Add hot stock a ladle at a time, stirring.",
      "After 18 minutes, fold in mushrooms, butter and parmesan.",
      "Rest 2 minutes off heat. Serve with thyme and pepper.",
    ],
  },
  {
    slug: "heirloom-tomato-tart",
    title: "Heirloom Tomato & Whipped Ricotta Tart",
    tagline: "A flaky, free-form galette that turns peak tomatoes into a centerpiece.",
    image: tart,
    cuisine: "French",
    diet: ["Vegetarian"],
    time: 60,
    difficulty: "Medium",
    servings: 6,
    calories: 410,
    author: "Camille Laurent",
    category: "Mains",
    story: "Built for August lunches outside, with chilled rosé and good company.",
    ingredients: [
      { name: "Puff or shortcrust pastry", amount: "1 sheet" },
      { name: "Heirloom tomatoes, sliced", amount: "500 g" },
      { name: "Ricotta", amount: "1 cup" },
      { name: "Lemon zest, olive oil", amount: "to taste" },
      { name: "Fresh basil", amount: "1 bunch" },
      { name: "Sea salt, pepper", amount: "to taste" },
    ],
    steps: [
      "Salt tomato slices and drain on paper towels for 15 minutes.",
      "Whip ricotta with lemon zest, olive oil and salt until creamy.",
      "Spread ricotta on pastry leaving a 3cm border. Layer tomatoes.",
      "Fold edges over; brush with egg wash. Bake at 200°C for 30 minutes.",
      "Top with basil, a drizzle of olive oil and flaky salt.",
    ],
  },
];

export const getRecipe = (slug: string) => recipes.find((r) => r.slug === slug);

export const cuisines = ["All", "Italian", "Mediterranean", "Moroccan", "American", "French"];
export const categories = ["All", "Breakfast", "Mains", "Sides", "Desserts", "Drinks"];
export const diets = ["All", "Vegetarian", "Vegan", "Gluten-free"];
