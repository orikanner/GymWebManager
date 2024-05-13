import { Divider } from "@mui/material";
import React from "react";

export const NutritionPlan = ({ nutritionPlan }) => {
  
  const { goal, description, dailyIntake, meals, hydration } = nutritionPlan;
  return (
    <div>
      <h2>Goal: {goal}</h2>
      <h3>Description: {description}</h3>
      <div>
        <h4>Daily Intake</h4>
        <ul style={{listStyleType:"none"}}>
          {dailyIntake.calorieDeficit && (
            <li>Calorie Deficit: {dailyIntake.calorieDeficit}</li>
          )}
          {dailyIntake.calorieSurplus && (
            <li>Calorie Surplus: {dailyIntake.calorieSurplus}</li>
          )}
          <li>Protein per Kg: {dailyIntake.proteinPerKg}</li>
          <li>Fats: {dailyIntake.fats}</li>
          <li>Carbohydrates: {dailyIntake.carbohydrates}</li>
        </ul>
      </div>
      <Divider orientation="horizontal"/>
      <div>
        <h4>Meals</h4>
        {meals.map((meal, index) => (
          <div key={index}>
            <h5>{meal.meal}</h5>
            <p style={{textAlign:"center"}}>{meal.description}</p>
          </div>
        ))}
      </div>

      <div>
        <h4>Hydration</h4>
        <p>{hydration}</p>
      </div>
    </div>
  );
};
