"use client";

import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

export const CarbonOffsetCard = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-6">
      <h2 className="text-xl font-semibold text-white mb-4">Total Carbon Offset</h2>
      <div className="flex items-center justify-between">
        <div className="relative w-32 h-32">
          {/* Circular progress bar */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-700 stroke-current"
              strokeWidth="10"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
            />
            <circle
              className="text-green-500 stroke-current"
              strokeWidth="10"
              strokeLinecap="round"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
              style={{
                strokeDasharray: `${2 * Math.PI * 45}`,
                strokeDashoffset: `${2 * Math.PI * 45 * (1 - 0.23)}`,
                transform: 'rotate(-90deg)',
                transformOrigin: '50% 50%',
              }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-white">23%</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-3xl font-bold text-white">1,358.0k</div>
          <div className="flex items-center text-green-500">
            <ArrowUpIcon className="w-4 h-4 mr-1" />
            <span>+12.5%</span>
          </div>
        </div>
      </div>
    </div>
  );
};