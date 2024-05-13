import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";
  if (auth.user) {
    // if the user is logedIn this blocks this screen
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }

  const handleLogin = async () => {
    console.log("login");
    try {
      await auth.login(userName, password);
      navigate(redirectPath, { replace: true }); //replace like delets history kind off
    } catch (e) {
      alert("Try Again");
    }
  };

  const handleRegister = async () => {
    console.log("handleRegister");
    try {
      await auth.register(userName, password);
      navigate(redirectPath, { replace: true }); //replace like delets history kind off
    } catch (e) {
      alert("Try Again");
    }
  };

  return (
    <div className="componenet">
      <div
        style={{
          display: "grid",
          gridTemplateRows: "auto auto", // Adjust this based on your needs
          alignItems: "center",
          gap: "10px",
          justifyItems: "center",
        }}
      >
        <TextField
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div
        style={{
          marginTop: "10px",
          display: "grid",
          gridTemplateRows: "auto auto", // Adjust this based on your needs
          alignItems: "center",
          gap: "10px",
          justifyItems: "center",
        }}
      >
        <Button variant="contained" onClick={handleRegister}>
          Register
        </Button>
        <Button variant="outlined" onClick={handleLogin}>
          Already have an account? logIn
        </Button>
      </div>
    </div>
  );
};
