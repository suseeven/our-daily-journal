import React, { useState } from "react";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../components/AuthContext";
import { format } from "date-fns";

const messages = [
  "You're doing great, keep it up 💛",
  "Storms make trees take deeper roots 🌳",
  "One step at a time 🐾",
  "Your growth is showing 🌼"
];

export default function GratitudeLog() {
  const [gratitude, setGratitude] = useState("");
  const [grievance, setGrievance] = useState("");
  const [popup, setPopup] = useState("");
  const { currentUser } = useAuth();

  const today = format(new Date(), "yyyy-MM-dd");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    const ref = doc(db, "logs", `${currentUser.uid}_${today}`);
    await setDoc(ref, {
      gratitude,
      grievance,
      user: currentUser.uid,
      date: today
    });

    const msg = messages[Math.floor(Math.random() * messages.length)];
    setPopup(msg);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Today’s Reflection ({today})</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea placeholder="Gratitude: What are you thankful for today?" className="w-full p-2 border rounded" value={gratitude} onChange={(e) => setGratitude(e.target.value)} required />
        <textarea placeholder="Grievance: Anything that upset or bothered you?" className="w-full p-2 border rounded" value={grievance} onChange={(e) => setGrievance(e.target.value)} />
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded">Save Entry</button>
      </form>
      {popup && (
        <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 rounded">{popup}</div>
      )}
    </div>
  );
}