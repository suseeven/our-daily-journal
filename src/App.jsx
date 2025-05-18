import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Tracker from "./pages/Tracker.jsx";
import GratitudeLog from "./pages/GratitudeLog.jsx";
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
