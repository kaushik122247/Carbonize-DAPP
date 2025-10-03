"use client";

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/solid';

type NFTType = {
  id: string;
  name: string;
  vintage: string;
  certification: string;
  icon: string;
  isRetired?: boolean;
};

const nftData: NFTType[] = [
  {
    id: "1",
    name: "Andes Mountain Reforestation Project",
    vintage: "2023",
    certification: "Verra Verified",
    icon: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "2",
    name: "Offshore Wind Farm",
    vintage: "2022",
    certification: "Verra Verified",
    icon: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "3",
    name: "Direct Farm Expansion (Texas)",
    vintage: "2023",
    certification: "Verra Verified",
    icon: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=400&fit=crop&crop=center"
  }
];

export default function MyCreditsPage() {
  const [activeTab, setActiveTab] = useState<'owned' | 'retired'>('owned');
  const [sortBy, setSortBy] = useState<string>("Newest, Verra Verified");

  const NFTCard = ({ nft }: { nft: NFTType }) => (
    <div className="bg-[#0C1015] rounded-lg p-6 mb-4 border border-gray-800">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <div className="relative w-12 h-12">
            <Image
              src={nft.icon}
              alt={nft.name}
              fill
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">{nft.name}</h3>
            <div className="space-y-1">
              <p className="text-gray-400">Vintage: {nft.vintage}</p>
              <p className="text-gray-400">Certification: {nft.certification}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <span className="text-gray-400">Vintage: {nft.vintage}</span>
          <button className="text-blue-400 hover:text-blue-300 transition-colors">
            View Details
          </button>
          {activeTab === 'owned' && (
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors flex items-center gap-2">
              <CheckIcon className="w-4 h-4" />
              Retire Credits
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-white mb-8">My Carbon Credit NFTs</h1>

        {/* Tabs and Sort Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <button
              onClick={() => setActiveTab('owned')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'owned'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Owned NFTs
            </button>
            <button
              onClick={() => setActiveTab('retired')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'retired'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Retired NFTs
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#0C1015] text-gray-300 border border-gray-800 rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
            >
              <option>Newest, Verra Verified</option>
              <option>Oldest</option>
              <option>Highest Value</option>
            </select>
          </div>
        </div>

        {/* NFTs List */}
        <div className="space-y-4">
          {nftData.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}