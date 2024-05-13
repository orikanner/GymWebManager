// utils.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/goals";

export const fetchGoals = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/goals`);
    return response.data; // Return the data directly
  } catch (error) {
    console.error("Failed to fetch goals:", error);
    throw error; // Rethrow to handle it in the component
  }
};

export const createGoal = async (title, type) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/goals`, { title, type });
    return response.data;
  } catch (error) {
    console.error("Failed to create goal:", error);
    throw error;
  }
};

export const deleteGoal = async (goalId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/goals/${goalId}`);
    return response.data; // This might return some status or confirmation
  } catch (error) {
    console.error("Failed to delete goal:", error);
    throw error; // Rethrow to handle it in the component
  }
};

export const updateIsCompleted = async (goalId, newStatus) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/goals/${goalId}`, {
      isCompleted: newStatus,
    });
    return response.data; // This might return some status or confirmation
  } catch (error) {
    console.error("Failed to update goal:", error);
    throw error; // Rethrow to handle it in the component
  }
};
