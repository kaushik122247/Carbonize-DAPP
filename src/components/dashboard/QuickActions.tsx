"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export const QuickActions = () => {
  const router = useRouter();

  const actions = [
    { 
      title: "Buy Carbon Credits", 
      onClick: () => router.push('/dashboard/marketplace'),
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700'
    },
    { 
      title: "Mint New NFTs", 
      onClick: () => router.push('/dashboard/mint'),
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700'
    },
    { 
      title: "Retire Credits", 
      onClick: () => router.push('/dashboard/retirement'),
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
      {actions.map((action) => (
        <button
          key={action.title}
          onClick={action.onClick}
          className={`px-6 py-4 ${action.bgColor} ${action.hoverColor} text-white rounded-xl 
            transition-all duration-200 text-base font-semibold shadow-lg hover:shadow-xl 
            transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-md`}
        >
          {action.title}
        </button>
      ))}
    </div>
  );
};