// routes.js or within your Express app setup
const express = require('express');
const router = express.Router();
const goalController = require('../controllers/goalContoller');
const authMiddleware = require('../middleware/authMiddleware');

// Get all goals for a specific user
router.get('/goals',authMiddleware.verifyToken, goalController.getGoalsOfUser);
// Create a new goal
router.post('/goals',authMiddleware.verifyToken, goalController.createGoal);
//Delete goal
router.delete('/goals/:id',authMiddleware.verifyToken, goalController.deleteGoal);
// Change goal status
router.put('/goals/:id',authMiddleware.verifyToken, goalController.changeGoalStatus);


module.exports = router;
