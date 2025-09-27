"use client";

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  // Sample data for the last 30 days
  ...Array.from({ length: 30 }, (_, i) => ({
    date: `${i + 1}`,
    value: Math.floor(Math.random() * 1000) + 500
  }))
];

export const PortfolioValueCard = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-6">
      <h2 className="text-xl font-semibold text-white mb-4">Your Portfolio Value</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="date" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
              labelStyle={{ color: '#9CA3AF' }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#10B981" 
              fill="#059669" 
              fillOpacity={0.2} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};