"use client";

import { useState } from "react";

export default function Submit() {
  const [category, setCategory] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const submitCase = async () => {
    const res = await fetch("http://localhost:5000/cases/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category,
        department,
        location,
        description,
        severity: "High",
        anonymous: true,
      }),
    });

    const data = await res.json();
    alert("Complaint Submitted! Tracking ID: " + data.trackingId);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white shadow-xl rounded-xl p-10 w-[450px]">

        <h2 className="text-2xl font-bold mb-6">
          Submit Complaint
        </h2>

        <div className="flex flex-col gap-4">

          <input
            className="border p-2 rounded"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            className="border p-2 rounded"
            placeholder="Department"
            onChange={(e) => setDepartment(e.target.value)}
          />

          <input
            className="border p-2 rounded"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />

          <textarea
            className="border p-2 rounded"
            placeholder="Description"
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            onClick={submitCase}
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Complaint
          </button>

        </div>

      </div>

    </div>
  );
}