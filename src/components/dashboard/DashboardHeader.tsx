"use client";

import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
          Connect Wallet
        </button>
        <UserCircleIcon className="w-8 h-8 text-gray-300 cursor-pointer hover:text-white transition-colors" />
      </div>
    </div>
  );
};