"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  HomeIcon, 
  CurrencyDollarIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  BuildingStorefrontIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Mint NFTs', href: '/dashboard/mint', icon: CurrencyDollarIcon },
  { name: 'Buy/Sell NFTs', href: '/dashboard/trade', icon: ShoppingCartIcon },
  { name: 'My Credits', href: '/dashboard/credits', icon: CreditCardIcon },
  { name: 'Marketplace', href: '/dashboard/marketplace', icon: BuildingStorefrontIcon },
  { name: 'Retirement', href: '/dashboard/retirement', icon: ArrowPathIcon },
];

export const DashboardSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 w-64 h-full bg-gray-800 text-white">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <Image
            src="/images/logo.png"
            alt="Carbonize Logo"
            width={48}
            height={48}
            className="rounded-lg"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Carbonize</span>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
