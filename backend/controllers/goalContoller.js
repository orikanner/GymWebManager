// goalController.js
const goalService = require("../services/goalService");

const createGoal = async (req, res) => {
  try {
    const goalData = {
      title: req.body.title,
      type: req.body.type,
      createdBy: req.user.id, // Ensure this is passed correctly, usually from authenticated user
    };
    console.log(goalData);
    const goal = await goalService.createGoal(goalData);
    res.status(201).json(goal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteGoal = async (req, res) => {
  try {
    const goalId = req.params.id; // Assuming you pass the goal ID in the URL parameters
    const userId = req.user.id; // Authenticated user's ID
    console.log(goalId);
    console.log(userId);
    const goal = await goalService.deleteGoal(goalId, userId);
    if (!goal) {
      return res.status(404).json({ message: "Goal not found or user not authorized to delete this goal." });
    }
    res.status(200).json({ message: "Goal successfully deleted." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const changeGoalStatus = async (req, res) => {
  try {
    const userId = req.user.id;
    const goalId = req.params.id;
    const isCompleted = req.body.isCompleted;
    const goal = await goalService.updateGoalStatus(
      userId,
      goalId,
      isCompleted
    );
    if (!goal) {
      return res.status(404).json({ message: "Goal not found" });
    }
    res.status(200).json(goal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getGoalsOfUser = async (req, res) => {
  try {
    const userId = req.user.id; // Now pulling from `req.user` set by middleware
    const goals = await goalService.getGoalsByUser(userId);
    res.status(200).json(goals);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createGoal,
  deleteGoal,
  changeGoalStatus,
  getGoalsOfUser,
};
