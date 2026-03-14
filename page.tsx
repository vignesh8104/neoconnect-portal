"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cases/all")
      .then((res) => res.json())
      .then((data) => setCases(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      
      <h1 className="text-3xl font-bold mb-6">Case Dashboard</h1>

      <div className="bg-white shadow-lg rounded-xl p-6">

        <table className="w-full border-collapse">
          
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Tracking ID</th>
              <th className="p-3">Department</th>
              <th className="p-3">Category</th>
              <th className="p-3">Status</th>
              <th className="p-3">Created</th>
            </tr>
          </thead>

          <tbody>
            {cases.map((c) => (
              <tr key={c._id} className="border-b hover:bg-gray-50">
                
                <td className="p-3 font-semibold">{c.trackingId}</td>
                <td className="p-3">{c.department}</td>
                <td className="p-3">{c.category}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      c.status === "New"
                        ? "bg-blue-100 text-blue-600"
                        : c.status === "Assigned"
                        ? "bg-yellow-100 text-yellow-600"
                        : c.status === "Resolved"
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>

                <td className="p-3">
                  {new Date(c.createdAt).toLocaleDateString()}
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}