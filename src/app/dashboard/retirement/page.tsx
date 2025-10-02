"use client";

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

// Sample data for carbon credit NFTs
const carbonProjects = [
  {
    id: 1,
    name: "Amazon Reforeestation Project",
    certification: "Baage Mnrld Verified",
    vintage: "2023",
    icon: "/images/forest-icon.png"
  },
  {
    id: 2,
    name: "Offshire Wind Farm",
    certification: "Verra Verified",
    vintage: "2023",
    icon: "/images/wind-icon.png"
  },
  {
    id: 3,
    name: "Offshe Refostation Project",
    certification: "Verra Verified",
    vintage: "2024",
    icon: "/images/forest-icon.png"
  },
  {
    id: 4,
    name: "Amazon Reforestation Project",
    certification: "Verra Verified",
    vintage: "2024",
    icon: "/images/forest-icon.png"
  },
  {
    id: 5,
    name: "Offsh Wind Farm",
    certification: "Verra Verified",
    vintage: "2024",
    icon: "/images/wind-icon.png"
  },
  {
    id: 6,
    name: "Offtner Setaed Dealitin",
    certification: "Verra Verified",
    vintage: "2024",
    icon: "/images/forest-icon.png"
  }
];

export default function RetirementPage() {
  const [selectedNFTs, setSelectedNFTs] = useState<number[]>([]);

  const toggleNFTSelection = (id: number) => {
    setSelectedNFTs(prev =>
      prev.includes(id)
        ? prev.filter(nftId => nftId !== id)
        : [...prev, id]
    );
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0B1220] text-white p-8">
        <h1 className="text-4xl font-bold mb-8">Retire Your Carbon Credits</h1>

        {/* Selection Section */}
        <div className="mb-8">
          <h2 className="text-xl text-gray-300 mb-4">Select NFTs to Retire</h2>
          <p className="text-gray-400 mb-8">
            Choose the carbon credits you wish to permanently retire.
          </p>

          {/* NFT Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carbonProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => toggleNFTSelection(project.id)}
                className={`relative bg-[#0D1522] border ${
                  selectedNFTs.includes(project.id)
                    ? 'border-green-500'
                    : 'border-gray-800'
                } rounded-lg p-6 cursor-pointer transition-all duration-200 hover:border-gray-700`}
              >
                <div className="flex items-start space-x-4">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={project.icon}
                      alt={project.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                    <div className="space-y-1 text-gray-400">
                      <p>Certification: {project.certification}</p>
                      <p>Vintage: {project.vintage}</p>
                    </div>
                  </div>
                  {selectedNFTs.includes(project.id) && (
                    <CheckCircleIcon className="h-6 w-6 text-green-500 absolute top-4 right-4" />
                  )}
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle view details logic
                  }}
                  className="mt-4 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => {
              // Handle retirement confirmation
              console.log('Selected NFTs for retirement:', selectedNFTs);
            }}
            disabled={selectedNFTs.length === 0}
            className={`px-8 py-3 rounded-lg text-white text-lg font-medium transition-all
              ${selectedNFTs.length === 0
                ? 'bg-gray-600 cursor-not-allowed opacity-50'
                : 'bg-green-500 hover:bg-green-600 transform hover:-translate-y-0.5'
              }`}
          >
            Review & Confirm Retirement
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-gray-400 text-sm text-center mt-6 max-w-2xl mx-auto">
          Please note that retiring carbon credits is a permanent action. Once retired, these credits cannot be traded or transferred.
        </p>
      </div>
    </DashboardLayout>
  );
}