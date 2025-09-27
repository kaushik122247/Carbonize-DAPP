"use client";

import React from 'react';

export const QuickActions = () => {
  const actions = [
    { title: "Buy Carbon Credits", onClick: () => {} },
    { title: "Mint New NFTs", onClick: () => {} },
    { title: "Retire Credits", onClick: () => {} },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {actions.map((action) => (
        <button
          key={action.title}
          onClick={action.onClick}
          className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-semibold"
        >
          {action.title}
        </button>
      ))}
    </div>
  );
};