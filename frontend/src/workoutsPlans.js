export const workoutsData = [
    {
      level:"Beginner",
      description: "Familiarization with gym equipment and building foundational strength.",
      days: [
        {
          title: "Day 1: Full Body Workout",
          warmup: "10 minutes on the treadmill or elliptical",
          exercises: [
            { name: "Leg Press", sets: 3, reps: 12 },
            { name: "Chest Press", sets: 3, reps: 12 },
            { name: "Lat Pulldown", sets: 3, reps: 12 },
            { name: "Dumbbell Shoulder Press", sets: 3, reps: 10 }
          ],
          cooldown: "Stretch major muscle groups"
        },
        {
          title: "Day 2: Cardio & Core",
          warmup: "5 minutes on a stationary bike",
          exercises: [
            { name: "Treadmill Interval Training", duration: "20 minutes" },
            { name: "Crunches", sets: 3, reps: 15 },
            { name: "Russian Twists", sets: 3, reps: 15 },
            { name: "Leg Raises", sets: 3, reps: 15 }
          ],
          cooldown: "Stretch and foam roll"
        }
      ]
    },
     {
      level:"Intermediate",
      description: "Increased intensity and introduction to compound movements.",
      days: [
        {
          title: "Day 1: Upper Body",
          warmup: "Rowing machine for 10 minutes",
          exercises: [
            { name: "Bench Press", sets: 4, reps: 10 },
            { name: "Barbell Row", sets: 4, reps: 10 },
            { name: "Overhead Press", sets: 4, reps: 8 },
            { name: "Bicep Curls", sets: 3, reps: 12 }
          ],
          cooldown: "Stretch arms and shoulders"
        },
        {
          title: "Day 2: Lower Body",
          warmup: "Dynamic leg stretches",
          exercises: [
            { name: "Squats", sets: 4, reps: 10 },
            { name: "Deadlifts", sets: 4, reps: 10 },
            { name: "Leg Curls", sets: 4, reps: 12 },
            { name: "Calf Raises", sets: 4, reps: 15 }
          ],
          cooldown: "Stretch and foam roll legs"
        },
        {
          title: "Day 3: Core & Cardio",
          warmup: "10 minutes jogging",
          exercises: [
            { name: "Planks", sets: 3, duration: "1 min hold" },
            { name: "Bicycle Crunches", sets: 3, reps: 15 },
            { name: "Treadmill Interval Training", duration: "25 minutes" }
          ],
          cooldown: "Full body stretching"
        }
      ]
    },
    {
      level:"Professional",
      description: "High-intensity workouts with focus on specific muscle groups each day.",
      days: [
        {
          title: "Day 1: Chest & Triceps",
          exercises: [
            { name: "Bench Press", sets: 4, reps: 12 },
            { name: "Incline Dumbbell Press", sets: 4, reps: 12 },
            { name: "Tricep Dips", sets: 4, reps: 15 },
            { name: "Tricep Pulldowns", sets: 4, reps: 15 }
          ],
          cooldown: "Stretch chest and triceps"
        },
        {
          title: "Day 2: Back & Biceps",
          exercises: [
            { name: "Pull-Ups", sets: 4, reps: 10 },
            { name: "Barbell Rows", sets: 4, reps: 12 },
            { name: "Lat Pulldowns", sets: 4, reps: 8 },
            { name: "Hammer Curls", sets: 4, reps: 12 }
          ],
          cooldown: "Stretch back and biceps"
        },
        {
          title: "Day 3: Legs & Shoulders",
          exercises: [
            { name: "Squats", sets: 4, reps: 10 },
            { name: "Leg Press", sets: 4, reps: 10 },
            { name: "Military Press", sets: 4, reps: 10 },
            { name: "Lateral Raises", sets: 3, reps: 12 }
          ],
          cooldown: "Stretch legs and shoulders"
        },
        {
          title: "Day 4: Core & Cardio",
          exercises: [
            { name: "HIIT on Treadmill", duration: "20 minutes" },
            { name: "Planks", sets: 3, duration: "1 min" },
            { name: "Hanging Leg Raises", sets: 3, reps: 15 }
          ],
          cooldown: "Full body stretching"
        },
        {
          title: "Day 5: Full Body",
          exercises: [
            { name: "Deadlifts", sets: 4, reps: 8 },
            { name: "Clean and Press", sets: 4, reps: 10 },
            { name: "Farmer's Walk", distance: "30/40 meters" },
            { name: "Kettlebell Swing", reps: 40 }
          ],
          cooldown: "Full body stretching"
        },
        {
          title: "Day 6: Active Recovery",
          exercises: [
            { name: "Light Cardio", sets: "30 minutes" },
            { name: "Swimming or Pilates", sets: "30 minutes" }
          ],
          cooldown: "Stretching and foam rolling"
        }
      ]
    }
  ];
  
  // Function to get workout by level
  export function getWorkout(level) {
    return workoutsData[level];
  }
  
  // Example of fetching a beginner workout
  console.log(getWorkout("beginner"));
  