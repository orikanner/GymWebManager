import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  
  const login = async (userName, password) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/signin",
        { userName, password }
      );
      
      setUser(response.data);
      sessionStorage.setItem("token", response.data.token); // Assuming the server responds with a token
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      window.location.reload();
      return response.data;
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    window.location.reload();
  };

  async function register(userName, password) {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/signup",
        { userName, password }
      );

      // Assuming the response.data.data contains the user details and token
      const { userId, token } = response.data;
      // Create a user object that includes the necessary details
      const user = {
        userId,
        userName,
        token,
      };
      setUser(user); // Set the current user with the user object
      sessionStorage.setItem("token", token); // Store the token in sessionStorage
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; // Set the authorization header for subsequent requests
      window.location.reload();
      return response.data; // Return the full response data for further processing if needed
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response ? error.response.data : error.message
      );
      throw error; // Re-throw the error for handling in UI components
    }
  }

  async function loadUserFromToken() {
    const token = sessionStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const response = await axios.get("http://localhost:8080/api/users/me");
        setUser(response.data.user);
      } catch (error) {
        console.error("Failed to load user from token:", error);
        logout();
      } finally {
      }
    } else {
    }
  }

  useEffect(() => {
    loadUserFromToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user,register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
