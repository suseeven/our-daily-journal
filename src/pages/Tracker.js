import React, { useState } from "react";
import { format, addDays, startOfWeek, addWeeks, subWeeks } from "date-fns";

const messages = [
  "You did it! Keep going 🌟",
  "One step closer to your goals 🏆",
  "Small wins are still wins 💪",
  "I see you showing up — proud of you 💖"
];

const activities = ["Workout", "Read", "Meditate"];
const users = ["Sus", "Abi"];

export default function Tracker() {
  const [tracker, setTracker] = useState({});
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));

  const days = Array.from({ length: 7 }, (_, i) => addDays(currentWeekStart, i));

  const toggleCheck = (user, activity, date) => {
    const key = `${user}_${activity}_${format(date, "yyyy-MM-dd")}`;
    setTracker((prev) => ({ ...prev, [key]: !prev[key] }));
    const msg = messages[Math.floor(Math.random() * messages.length)];
    setPopupMessage(msg);
    setShowPopup(true);
  };

  const weekLabel = `${format(currentWeekStart, "MMM d")} - ${format(addDays(currentWeekStart, 6), "MMM d")}`;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Weekly Tracker: {weekLabel}</h2>

      <div className="mb-4 flex gap-2">
        <button onClick={() => setCurrentWeekStart(subWeeks(currentWeekStart, 1))} className="px-3 py-1 bg-gray-200 rounded">← Previous</button>
        <button onClick={() => setCurrentWeekStart(startOfWeek(new Date(), { weekStartsOn: 1 }))} className="px-3 py-1 bg-gray-200 rounded">This Week</button>
        <button onClick={() => setCurrentWeekStart(addWeeks(currentWeekStart, 1))} className="px-3 py-1 bg-gray-200 rounded">Next →</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Activity</th>
              {days.map((date, idx) => (
                <th key={idx} className="p-2 border text-sm">
                  {format(date, "EEE")}<br />{format(date, "MM/dd")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) =>
              users.map((user) => (
                <tr key={`${user}-${activity}`} className="border-b">
                  <td className="p-2 border font-semibold">{activity} ({user})</td>
                  {days.map((date) => {
                    const key = `${user}_${activity}_${format(date, "yyyy-MM-dd")}`;
                    return (
                      <td key={key} className="p-2 border text-center">
                        <input
                          type="checkbox"
                          checked={!!tracker[key]}
                          onChange={() => toggleCheck(user, activity, date)}
                        />
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showPopup && (
        <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded relative">
          <button onClick={() => setShowPopup(false)} className="absolute top-1 right-2 text-xl">×</button>
          {popupMessage}
        </div>
      )}
    </div>
  );
}