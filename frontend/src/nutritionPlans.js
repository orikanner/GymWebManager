export const nutritionPlans = [
  {
    type: "cutting",
    goal: "Reduce body fat while maintaining muscle mass.",
    description: "Focus on a calorie deficit and high protein intake.",
    dailyIntake: {
      calorieDeficit: "20-30%",
      proteinPerKg: "1.5-2.0 grams",
      fats: "moderate",
      carbohydrates: "low",
    },
    meals: [
      {
        meal: "Breakfast",
        description:
          "Omelette made with 3 egg whites and 1 whole egg, spinach, mushrooms, and a side of grapefruit.",
      },
      {
        meal: "Lunch",
        description:
          "Grilled chicken breast with a large salad (mixed greens, cherry tomatoes, cucumbers, and balsamic vinegar dressing).",
      },
      {
        meal: "Snack",
        description: "Greek yogurt with a handful of almonds.",
      },
      {
        meal: "Dinner",
        description: "Baked salmon with steamed broccoli and quinoa.",
      },
      {
        meal: "Pre/Post Workout",
        description: "Protein shake with water.",
      },
    ],
    hydration:
      "At least 3 liters of water throughout the day to support metabolism and reduce hunger.",
  },
  {
    type: "massGain",
    goal: "Increase muscle mass.",
    description:
      "Focus on a calorie surplus with balanced macronutrients to support muscle growth and recovery.",
    dailyIntake: {
      calorieSurplus: "10-20%",
      proteinPerKg: "1.5-2.5 grams",
      carbohydrates: "higher",
      fats: "moderate",
    },
    meals: [
      {
        meal: "Breakfast",
        description:
          "Smoothie with whey protein, banana, oats, peanut butter, and whole milk.",
      },
      {
        meal: "Mid-Morning Snack",
        description:
          "Cottage cheese with pineapple or berries and a handful of walnuts.",
      },
      {
        meal: "Lunch",
        description:
          "Turkey breast sandwich on whole grain bread with avocado, cheese, lettuce, and tomato. Serve with a side of sweet potato fries.",
      },
      {
        meal: "Snack",
        description: "A protein bar and a piece of fruit.",
      },
      {
        meal: "Dinner",
        description: "Steak with mashed potatoes and green beans.",
      },
      {
        meal: "Pre/Post Workout",
        description:
          "Protein shake with banana and oatmeal mixed in whole milk.",
      },
    ],
    hydration:
      "Ensure adequate fluid intake, about 3-4 liters per day, to help facilitate nutrient transport and muscle recovery.",
  },
];

// Function to get nutrition plan by type
export function getNutritionPlan(type) {
  return nutritionPlans[type];
}

// Example of fetching the cutting nutrition plan
console.log(getNutritionPlan("cutting"));
