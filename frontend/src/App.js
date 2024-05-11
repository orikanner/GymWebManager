import { AuthProvider } from "./context/AuthContext";
import { Navbar } from "./componentes/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./componentes/Home";
import { Login } from "./componentes/Login";
import { RequireAuth } from "./componentes/RequireAuth";
import { Workouts } from "./componentes/Workouts";
import { Nutrition } from "./componentes/Nutrition";
import { Goals } from "./componentes/Goals";

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
