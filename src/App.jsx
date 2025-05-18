import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext.jsx";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tracker from "./pages/Tracker";
import GratitudeLog from "./pages/GratitudeLog";
import "./App.css";

export default function App() {
  return (
    <div className="bg-[#fdf6f0] min-h-screen font-sans text-gray-800">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/gratitude" element={<GratitudeLog />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}
