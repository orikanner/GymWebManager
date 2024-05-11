import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation,Navigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const redirectPath = location.state?.path || '/';
  if(auth.user){
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }
  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true }); //replace like delets history kind off
  };
  return (
    <div className="componenet">
      <label>
        Username:{" "}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
