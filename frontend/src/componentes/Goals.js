import React, { useEffect, useState } from "react";
import { GoalCard } from "./GoalCard";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { createGoal, deleteGoal, fetchGoals } from "../utils/goals";
/* type goal = {
  _id:string;
  title:String;
  type:{"Fiteness" || "Nutrition"};
  isCompleted : Boolean;
  createdAt :timestamp;
  createdBy :String;
}
*/

export const Goals = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Nutrition");
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const getGoals = async () => {
      try {
        const goalsData = await fetchGoals();
        setGoals(goalsData);
      } catch (error) {
        console.error("Error fetching goals:", error);
      }
    };
    getGoals();
  }, []);

  const handleNewGoal = async () => {
    try {
      const newGoal = await createGoal(title, type);
      setGoals((prevGoals) => [newGoal, ...prevGoals]);
    } catch (error) {
      console.error("Error creating new goal:", error);
    }
  };

  const handleDeleteGoal = async (goalId) => {
    try {
      await deleteGoal(goalId);
      setGoals((currentGoals) =>
        currentGoals.filter((goal) => goal._id !== goalId)
      );
    } catch (error) {
      console.error("Error deleting goal:", error);
    }
  };

  return (
    <div className="componenet goalsComponenet">
      <h1 className="screenTitle">Goals</h1>
      <div className="goalsCardsContainer">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto", // Adjust this based on your needs
            alignItems: "center",
            gap: "10px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            onChange={(e) => setTitle(e.target.value)}
          />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Nutrition"
            name="radio-buttons-group"
            onChange={(e) => console.log(e.target.value)}
          >
            <FormControlLabel
              value="Nutrition"
              control={<Radio />}
              label="Nutrition"
            />
            <FormControlLabel
              value="Fitness"
              control={<Radio />}
              label="Fitness"
            />
          </RadioGroup>
          <Button variant="outlined" onClick={handleNewGoal}>
            Create New Goal
          </Button>
        </div>

        {goals.map((item, index) => {
          return (
            <GoalCard
              key={item._id}
              goal={item}
              onDelete={() => handleDeleteGoal(item._id)}
            />
          );
        })}
      </div>
    </div>
  );
};
