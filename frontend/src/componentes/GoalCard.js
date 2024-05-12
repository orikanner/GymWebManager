import { Checkbox, Button } from "@mui/material";
import React, { useState } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

export const GoalCard = ({ goal, onDelete }) => {
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
        onChange={() => setIsCompletedHook((prev) => !prev)}
      />
      <Button onClick={onDelete}>
        <DeleteForeverOutlinedIcon sx={{ color: "#ed0800" }} />
      </Button>
    </div>
  );
};
