import "./App.css";
import Landing from "./pages/Landing.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard.jsx";


function App() {
  // Check token validity before rendering the app
  const token = localStorage.getItem("token");


  return (
    <Routes>
      {/* Redirect to Landing if no token, otherwise to UserDashboard */}
      <Route
        path="/"
        element={!token ? <Navigate to="/dashboard" replace /> : <Navigate to="/landing" replace />}
      />
      <Route path="/landing" element={<Landing />} />
      <Route path="/dashboard/*" element={<UserDashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
