"use client";

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

// Sample data for carbon credits
const carbonCredits = [
  {
    id: 1,
    name: "Amazon Reforestation Project",
    volume: "1,000 tCO2e",
    price: "2.8 APT/Credit",
    vintage: "2023",
    certification: "Gold Standard",
    icon: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "Wind Farm Expansion (Texas / Iceland)",
    volume: "2,500 tCO2e",
    price: "2.3 APT/Credit",
    vintage: "2024",
    certification: "Gold Standard",
    icon: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=100&h=100&fit=crop&crop=center"
  },
  {
    id: 3,
    name: "Direct Farm Capture Facility (Iceland)",
    volume: "3,200 tCO2e",
    price: "2.2 APT/Credit",
    vintage: "2024",
    certification: "Verra - Gold Standard",
    icon: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=100&h=100&fit=crop&crop=center"
  },
  {
    id: 4,
    name: "Solar Energy Initiative (California)",
    volume: "1,800 tCO2e",
    price: "2.6 APT/Credit",
    vintage: "2023",
    certification: "Gold Standard",
    icon: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=100&h=100&fit=crop&crop=center"
  },
  {
    id: 5,
    name: "Ocean Conservation Project",
    volume: "950 tCO2e",
    price: "3.3 APT/Credit",
    vintage: "2024",
    certification: "Verra Verified",
    icon: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=100&h=100&fit=crop&crop=center"
  },
  {
    id: 6,
    name: "Mountain Forest Protection",
    volume: "2,100 tCO2e",
    price: "3.0 APT/Credit",
    vintage: "2023",
    certification: "Gold Standard",
    icon: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop&crop=center"
  }
];

const filters = {
  category: ["Renewable Energy", "Forestry", "Agriculture", "Industrial"],
  vintage: ["2024", "2023", "2022"],
  priceRange: ["0-2 APT", "2-3 APT", "3-4 APT", "4+ APT"],
  certification: ["Gold Standard", "Verra", "Others"]
};

export default function MarketplacePage() {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    category: [],
    vintage: [],
    priceRange: [],
    certification: []
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = carbonCredits.slice(startIndex, endIndex);
  const totalPages = Math.ceil(carbonCredits.length / itemsPerPage);

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0B1220] text-white p-8">
        {/* Header with Search */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Carbon Credits Marketplace</h1>
          <div className="flex items-center space-x-4 bg-[#0D1522] rounded-lg border border-gray-800 px-4 py-2">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search credits..."
              className="bg-transparent border-none focus:outline-none text-white w-64"
            />
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Sort by:</span>
              <select className="bg-[#0D1522] border border-gray-800 rounded px-3 py-1 focus:outline-none text-white focus:border-green-500 transition-colors">
                <option value="newest" className="bg-[#0D1522] text-white">Newest</option>
                <option value="oldest" className="bg-[#0D1522] text-white">Oldest</option>
                <option value="price-low" className="bg-[#0D1522] text-white">Price: Low to High</option>
                <option value="price-high" className="bg-[#0D1522] text-white">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Panel */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-[#0D1522] border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Filters</h2>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-gray-400 mb-3">Category</h3>
                <div className="space-y-2">
                  {filters.category.map((item) => (
                    <label key={item} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.category.includes(item)}
                        onChange={() => toggleFilter('category', item)}
                        className="form-checkbox h-4 w-4 text-green-500 rounded border-gray-700 bg-transparent focus:ring-0"
                      />
                      <span className="text-sm">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Vintage Filter */}
              <div className="mb-6">
                <h3 className="text-gray-400 mb-3">Vintage</h3>
                <div className="space-y-2">
                  {filters.vintage.map((item) => (
                    <label key={item} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.vintage.includes(item)}
                        onChange={() => toggleFilter('vintage', item)}
                        className="form-checkbox h-4 w-4 text-green-500 rounded border-gray-700 bg-transparent focus:ring-0"
                      />
                      <span className="text-sm">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="text-gray-400 mb-3">Price Range</h3>
                <div className="space-y-2">
                  {filters.priceRange.map((item) => (
                    <label key={item} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.priceRange.includes(item)}
                        onChange={() => toggleFilter('priceRange', item)}
                        className="form-checkbox h-4 w-4 text-green-500 rounded border-gray-700 bg-transparent focus:ring-0"
                      />
                      <span className="text-sm">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Certification Filter */}
              <div>
                <h3 className="text-gray-400 mb-3">Certification</h3>
                <div className="space-y-2">
                  {filters.certification.map((item) => (
                    <label key={item} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.certification.includes(item)}
                        onChange={() => toggleFilter('certification', item)}
                        className="form-checkbox h-4 w-4 text-green-500 rounded border-gray-700 bg-transparent focus:ring-0"
                      />
                      <span className="text-sm">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Credits Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {currentProjects.map((credit) => (
                <div key={credit.id} className="bg-[#0D1522] border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 transform hover:-translate-y-1">
                  {/* Large Image Header */}
                  <div className="relative w-full h-48">
                    <Image
                      src={credit.icon.replace('w=100&h=100', 'w=400&h=300')}
                      alt={credit.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-bold text-xl text-white mb-1">{credit.name}</h3>
                      <p className="text-gray-200 text-sm">Volume: {credit.volume}</p>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-green-400">{credit.price}</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                          {credit.certification}
                        </span>
                      </div>
                      <p className="text-gray-400">Vintage: <span className="text-white">{credit.vintage}</span></p>
                    </div>
                    <button className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-green-500/25">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                disabled={currentPage === 1}
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-green-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                disabled={currentPage === totalPages}
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}