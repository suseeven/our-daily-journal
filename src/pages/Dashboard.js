import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Daily Journal 💖</h1>
      <p className="mb-6">Start tracking your gratitude, grievances, and shared goals!</p>
      <div className="space-x-4">
        <Link to="/gratitude" className="bg-pink-500 text-white px-4 py-2 rounded">Gratitude Log</Link>
        <Link to="/tracker" className="bg-purple-500 text-white px-4 py-2 rounded">Activity Tracker</Link>
      </div>
    </div>
  );
}