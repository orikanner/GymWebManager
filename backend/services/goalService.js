// goalService.js
const Goal = require("../models/goal"); // Assuming your goal model is in 'models/goal'

const createGoal = async (goalData) => {
  const goal = new Goal(goalData);
  return goal.save();
};

const deleteGoal = async (goalId, userId) => {
  const goal = await Goal.findOneAndDelete({ _id: goalId, createdBy: userId });
  return goal; // This will return null if no document matches the filter
};

const updateGoalStatus = async (userId, goalId, isCompleted) => {
  return Goal.findOneAndUpdate(
    {
      _id: goalId,
      createdBy: userId, // Ensure the user is the creator of the goal
    },
    {
      isCompleted,
    },
    { new: true }
  );
};

const getGoalsByUser = async (userId) => {
  return Goal.find({ createdBy: userId }).sort({ createdAt: -1 });
};

module.exports = {
  createGoal,
  deleteGoal,
  updateGoalStatus,
  getGoalsByUser,
};
