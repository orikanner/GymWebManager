import { AuthProvider } from "./context/AuthContext";
import { Navbar } from "./componenets/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./componenets/Home";
import { Login } from "./componenets/Login";
import { RequireAuth } from "./componenets/RequireAuth";
import { Workouts } from "./componenets/Workouts";
import { Nutrition } from "./componenets/Nutrition";
import { Goals } from "./componenets/Goals";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route
          path="workouts"
          element={
            <RequireAuth>
              <Workouts />
            </RequireAuth>
          }
        />
        <Route
          path="nutrition"
          element={
            <RequireAuth>
              <Nutrition />
            </RequireAuth>
          }
        />
        <Route
          path="goals"
          element={
            <RequireAuth>
              <Goals />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
