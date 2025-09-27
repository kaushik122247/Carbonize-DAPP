"use client";

import React from 'react';
import { DashboardSidebar } from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <DashboardSidebar />
      <main className="flex-1 p-8 ml-64">
        {children}
      </main>
    </div>
  );
};