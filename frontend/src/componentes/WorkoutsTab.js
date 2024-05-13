import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { workoutsData } from "../workoutsPlans";
import { Workout } from "./Workout";
export const WorkoutsTab = () => {
  const [activeWorkout, setActiveWorkout] = useState(null);

  const handleButtonClick = (newActiveWorkout) => {
    if (newActiveWorkout === activeWorkout) {
      setActiveWorkout(null);
    } else {
      setActiveWorkout(newActiveWorkout);
    }
  };
  useEffect(() => {
    console.log(activeWorkout);
  }, [activeWorkout]);
  return (
    <div className="componenet">
      <div className="workoutsPlansContianer">
        <h1>Workouts</h1>
        <div className="workoutsPlansButtonsContianer">
          {workoutsData.map((item, index) => (
            <Button
              key={item.level}
              onClick={() => handleButtonClick(item.level)}
            >
              {item.level}
            </Button>
          ))}
        </div>
        {activeWorkout && (
          <Workout
            workout={workoutsData.find((item) => item.level === activeWorkout)}
          />
        )}
      </div>
    </div>
  );
};
