"use client";

import React from 'react';
import { ArrowUpIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import * as Tooltip from '@radix-ui/react-tooltip';

interface CarbonData {
  total: string;
  percentage: number;
  change: number;
  target: string;
}

export const CarbonOffsetCard = () => {
  const data: CarbonData = {
    total: '1,358.0k',
    percentage: 23,
    change: 12.5,
    target: '5,900.0k'
  };

  const circumference = 2 * Math.PI * 45;

  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Total Carbon Offset</h2>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button className="text-gray-400 hover:text-white transition-colors">
                <InformationCircleIcon className="w-5 h-5" />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl text-sm max-w-xs"
                sideOffset={5}
              >
                <div className="space-y-2">
                  <p>Current Progress: {data.total} CO₂e</p>
                  <p>Target: {data.target} CO₂e</p>
                  <p>Change: +{data.change}% from last month</p>
                </div>
                <Tooltip.Arrow className="fill-gray-900" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 cursor-help">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-700 stroke-current"
                    strokeWidth="8"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className="text-green-500 stroke-current"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                    style={{
                      strokeDasharray: circumference,
                      strokeDashoffset: circumference * (1 - data.percentage / 100),
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-4xl md:text-5xl font-bold text-white">{data.percentage}%</span>
                  <span className="text-gray-400 text-sm mt-1">of target</span>
                </div>
              </div>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl"
                sideOffset={5}
              >
                {data.total} out of {data.target} CO₂e offset
                <Tooltip.Arrow className="fill-gray-900" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>

        <div className="flex flex-col items-center md:items-end">
          <div className="text-4xl md:text-5xl font-bold text-white">{data.total}</div>
          <div className="text-gray-400 mt-1 mb-2">Total CO₂e Offset</div>
          <div className="flex items-center text-green-500 text-lg">
            <ArrowUpIcon className="w-5 h-5 mr-1" />
            <span>+{data.change}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};