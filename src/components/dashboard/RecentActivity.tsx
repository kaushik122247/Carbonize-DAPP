"use client";

import React from 'react';

const recentActivities = [
  {
    tekertum: "Buy Carbon Credits",
    sender: "0x1234...5678",
    recertum: "2025-09-27 14:30",
    sepaler: "0xabc...def",
  },
  {
    tekertum: "Mint NFT",
    sender: "0x8765...4321",
    recertum: "2025-09-27 13:15",
    sepaler: "0xfed...cba",
  },
  // Add more activities as needed
];

export const RecentActivity = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-6">
      <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-left">
              <th className="pb-4">Tekertum Rastion</th>
              <th className="pb-4">Sender</th>
              <th className="pb-4">Recertum Ractieh</th>
              <th className="pb-4">Sepaler</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            {recentActivities.map((activity, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="py-4">{activity.tekertum}</td>
                <td className="py-4">{activity.sender}</td>
                <td className="py-4">{activity.recertum}</td>
                <td className="py-4">{activity.sepaler}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};