"use client";

import React from 'react';

export const QuickActions = () => {
  const actions = [
    { title: "Buy Carbon Credits", onClick: () => {} },
    { title: "Mint New NFTs", onClick: () => {} },
    { title: "Retire Credits", onClick: () => {} },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      {actions.map((action) => (
        <button
          key={action.title}
          onClick={action.onClick}
          className="px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors text-base font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {action.title}
        </button>
      ))}
    </div>
  );
};