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
    volume: "1,500 tCO2e",
    price: "100 APT",
    vintage: "2023",
    certification: "Gold Standard",
    icon: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "Wind Farm Expansion (Texas)",
    volume: "2,200 tCO2e",
    price: "150 APT",
    vintage: "2024",
    certification: "Gold Standard",
    icon: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: 3,
    name: "Direct Air Capture Facility (Iceland)",
    volume: "800 tCO2e",
    price: "90 APT",
    vintage: "2024",
    certification: "Verra",
    icon: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: 4,
    name: "Solar Farm Initiative (California)",
    volume: "3,000 tCO2e",
    price: "120 APT",
    vintage: "2024",
    certification: "Gold Standard",
    icon: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: 5,
    name: "Mangrove Restoration (Philippines)",
    volume: "1,200 tCO2e",
    price: "85 APT",
    vintage: "2023",
    certification: "Verra",
    icon: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: 6,
    name: "Biogas Plant (India)",
    volume: "950 tCO2e",
    price: "75 APT",
    vintage: "2023",
    certification: "Gold Standard",
    icon: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: 7,
    name: "Ocean Carbon Sequestration",
    volume: "2,500 tCO2e",
    price: "200 APT",
    vintage: "2024",
    certification: "Blue Carbon",
    icon: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: 8,
    name: "Sustainable Agriculture (Brazil)",
    volume: "1,800 tCO2e",
    price: "110 APT",
    vintage: "2023",
    certification: "Verra",
    icon: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: 9,
    name: "Geothermal Energy (New Zealand)",
    volume: "2,800 tCO2e",
    price: "180 APT",
    vintage: "2024",
    certification: "Gold Standard",
    icon: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=400&fit=crop&crop=center"
  }
];

const filters = {
  category: ["Renewable Energy", "Forestry", "Agriculture", "Industrial"],
  vintage: ["2024", "2023", "2022"],
  priceRange: ["0-100", "100-150", "150-200", "200+"],
  certification: ["Gold Standard", "Verra", "Blue Carbon", "Others"]
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
              <select className="bg-transparent border-none focus:outline-none text-white">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
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
                      <span className="text-sm">${item}</span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProjects.map((credit) => (
                <div key={credit.id} className="bg-[#0D1522] border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all duration-200">
                  {/* Large Image at the top */}
                  <div className="relative w-full h-48">
                    <Image
                      src={credit.icon}
                      alt={credit.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Project details below the image */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="font-semibold text-lg mb-2">{credit.name}</h3>
                      <p className="text-gray-400">Volume: {credit.volume}</p>
                    </div>
                    <div className="space-y-2 mb-6">
                      <p className="text-green-500 text-xl font-bold">{credit.price}</p>
                      <p className="text-gray-400">Vintage: {credit.vintage}</p>
                      <p className="text-gray-400">Certification: {credit.certification}</p>
                    </div>
                    <button className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200">
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