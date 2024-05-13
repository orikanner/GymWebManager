import React from "react";

export const Workout = ({ workout }) => {
  return (
    <div>
      <h2>{workout.description}</h2>
      <div>
        {workout.days.map((dailyTraining, index) => (
          <>
            <h3>{dailyTraining.title}</h3>
            <p>{dailyTraining.warmup}</p>
            {dailyTraining.exercises.map((exe, index) => (
              <div className="exeRow">
                <p>{exe.name}</p>
                <p>{exe.sets}</p>
                <p>{exe.reps}</p>
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};
