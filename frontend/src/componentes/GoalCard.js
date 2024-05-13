import { Checkbox, Button } from "@mui/material";
import React, { useState } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

export const GoalCard = ({ goal, onDelete, onIsCompletedChanged }) => {
  const { _id, title, type, isCompleted, createdAt, createdBy } = goal;

  const [isCompletedHook, setIsCompletedHook] = useState(isCompleted);

  const isCompletedStyle = isCompletedHook
    ? "goalCard-isCompleted-true"
    : "goalCard-isCompleted-false";

  return (
    <div className={`goalCard ${isCompletedStyle}`}>
      <p>{title}</p>
      <p>{type}</p>
      <Checkbox
        checked={isCompletedHook}
        onChange={() => {
          console.log("last value",isCompleted);
          onIsCompletedChanged(_id,!isCompleted)
          setIsCompletedHook((prev) => !prev);
        }}
      />
      <Button onClick={onDelete}>
        <DeleteForeverOutlinedIcon sx={{ color: "#ed0800" }} />
      </Button>
    </div>
  );
};
