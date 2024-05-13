import React, { useState, useEffect } from "react";
import { nutritionPlans } from "../nutritionPlans";
import { Button } from "@mui/material";
import { NutritionPlan } from "./NutritionPlan";

export const NutritionTab = () => {
  //massGain || cutting
  const [activeNutritionPlan, setActiveNutritionPlan] = useState(null);
  const handleButtonClick = (newNutritionPlan) => {
    if (newNutritionPlan === activeNutritionPlan) {
      setActiveNutritionPlan(null);
    } else {
      setActiveNutritionPlan(newNutritionPlan);
    }
  };
  useEffect(() => {
    console.log(activeNutritionPlan);
  }, [activeNutritionPlan]);
  return (
    <div className="componenet">
      <div className="nutritionPlansContianer">
        <h1>Nutrition</h1>
        <div className="nutritionPlansButtonsContianer">
          {nutritionPlans.map((nutritionPlan, index) => (
            <Button
              key={nutritionPlan.type}
              onClick={() => handleButtonClick(nutritionPlan.type)}
            >
              {nutritionPlan.type}
            </Button>
          ))}
        </div>
        {activeNutritionPlan && (
          <NutritionPlan
            nutritionPlan={nutritionPlans.find(
              (item) => item.type === activeNutritionPlan
            )}
          />
        )}
      </div>
    </div>
  );
};
