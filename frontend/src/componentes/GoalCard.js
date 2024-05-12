import { Checkbox } from "@mui/material";
import React, { useState } from "react";


export const GoalCard = ({ goalCardProps }) => {
  
  const { title, type, isCompleted, createdAt, createdBy } = goalCardProps;

  const [isCompletedHook, setIsCompletedHook ] = useState(isCompleted);

  const isCompletedStyle = isCompletedHook?'goalCard-isCompleted-true' : 'goalCard-isCompleted-false';



  return (
    <div className= {`goalCard ${isCompletedStyle}`}>
      <p>{title}</p>
      <p>{type}</p>
      <Checkbox checked={isCompletedHook} onChange={()=>setIsCompletedHook(prev=>!prev)}/>
      {/* <input type="checkbox" className="isSelectedCheckbox" checked={isCompletedHook} onChange={()=>setIsCompletedHook(prev => !prev)} /> */}
    </div>
  );
};
