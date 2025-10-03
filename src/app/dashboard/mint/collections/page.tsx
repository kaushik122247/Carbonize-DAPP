"use client";

import React from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';

// Sample data for collections
const collections = [
  {
    id: 1,
    name: "Amazon Carbon Credits",
    address: "0x1234...5678",
    mintedNFTs: 150,
    maxSupply: 1000
  },
  {
    id: 2,
    name: "Wind Farm Series",
    address: "0x8765...4321",
    mintedNFTs: 75,
    maxSupply: 500
  },
  {
    id: 3,
    name: "Solar Project Credits",
    address: "0x9876...1234",
    mintedNFTs: 300,
    maxSupply: 1000
  }
];

export default function MyCollectionsPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0B1220] text-white p-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">My Collections</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => window.location.href = '/dashboard/mint'}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200"
            >
              Mint Page
            </button>
            <button
              onClick={() => window.location.href = '/dashboard/mint/collections'}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200"
            >
              My Collections
            </button>
            <button
              onClick={() => window.location.href = '/dashboard/mint/create'}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200"
            >
              Create Collection
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-8">
          A list of the collections created under the current contract.
        </p>

        {/* Collections Table */}
        <div className="bg-[#0D1522] border border-gray-800 rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 p-6 border-b border-gray-800 bg-[#0C1015]">
            <div className="text-gray-400 font-medium">Collection</div>
            <div className="text-gray-400 font-medium">Collection Address</div>
            <div className="text-gray-400 font-medium">Minted NFTs</div>
            <div className="text-gray-400 font-medium">Max Supply</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-800">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="grid grid-cols-4 gap-4 p-6 hover:bg-[#0C1015] transition-colors cursor-pointer"
              >
                <div className="font-medium text-white">{collection.name}</div>
                <div className="text-gray-400 font-mono">{collection.address}</div>
                <div className="text-gray-400">
                  {collection.mintedNFTs.toLocaleString()}
                </div>
                <div className="text-gray-400">
                  {collection.maxSupply.toLocaleString()}
                </div>
              </div>
            ))}

            {/* Empty State */}
            {collections.length === 0 && (
              <div className="p-6 text-center text-gray-400">
                No collections found. Create your first collection to get started.
              </div>
            )}
          </div>
        </div>

        {/* Pagination or Load More (if needed) */}
        {collections.length > 0 && (
          <div className="mt-6 flex justify-center">
            <button className="px-4 py-2 bg-[#0D1522] text-gray-400 border border-gray-800 rounded-lg hover:border-green-500 transition-all duration-200">
              Load More
            </button>
          </div>
        )}

        {/* Quick Action */}
        {collections.length === 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => window.location.href = '/dashboard/mint/create'}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200"
            >
              Create Your First Collection
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}