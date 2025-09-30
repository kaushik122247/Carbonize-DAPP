"use client";

import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Dashboard</h1>
      <div className="flex items-center gap-4">
        <UserCircleIcon className="w-8 h-8 text-gray-300 cursor-pointer hover:text-white transition-colors" />
      </div>
    </div>
  );
};