import React, { useState } from "react";
import { GoalCard } from "./GoalCard";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
// type goal = {
//   id:string;
//   title:String;
//   type:{"Fiteness" || "Nutrition"};
//   isCompleted : Boolean;
//   createdAt :timestamp;
//   createdBy :String;
// }

const goalsList = [
  {
    id: "id1",
    title: "MyGoal4",
    type: "Fiteness",
    isCompleted: true,
    createdAt: "22",
  },
  {
    id: "id2",
    title: "MyGoal1",
    type: "Fiteness",
    isCompleted: false,
    createdAt: "15",
  },
  {
    id: "id3",
    title: "MyGoal2",
    type: "Nutrition",
    isCompleted: true,
    createdAt: "12",
  },
  {
    id: "id4",
    title: "MyGoal3",
    type: "Nutrition",
    isCompleted: false,
    createdAt: "11",
  },
];
export const Goals = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [isCompleted, setIsCompleted] = useState(null);

  const handleNewGoal = () => {
    console.log("New Goal");
  };
  return (
    <div className="componenet goalsComponenet">
      <h1 className="screenTitle">Goals</h1>
      <div className="goalsCardsContainer">
        {/* <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}> */}
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

        {goalsList.map((item, index) => {
          return <GoalCard key={item.id} goalCardProps={item} />;
        })}
      </div>
    </div>
  );
};
