"use client";

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function MintNFTPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    vintage: "",
    volume: "",
    priceAPT: "",
    category: "",
    certification: "",
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle NFT minting logic here
    console.log('Minting NFT with details:', { ...formData, file: selectedFile });
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Mint NFT</h1>
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
        
        <div className="max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="block text-white text-lg">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#0C1015] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                placeholder="Enter NFT name"
                required
              />
            </div>

            {/* Description Field */}
            <div className="space-y-2">
              <label className="block text-white text-lg">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-[#0C1015] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors resize-none"
                placeholder="Enter NFT description"
                required
              />
            </div>

            {/* Category Field */}
            <div className="space-y-2">
              <label className="block text-white text-lg">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#0C1015] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                required
              >
                <option value="">Select Category</option>
                <option value="Renewable Energy">Renewable Energy</option>
                <option value="Forestry">Forestry</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Industrial">Industrial</option>
                <option value="Ocean Conservation">Ocean Conservation</option>
                <option value="Direct Air Capture">Direct Air Capture</option>
              </select>
            </div>

            {/* Volume Field */}
            <div className="space-y-2">
              <label className="block text-white text-lg">Volume (tCO2e)</label>
              <input
                type="text"
                name="volume"
                value={formData.volume}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#0C1015] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                placeholder="e.g., 1,250"
                required
              />
              <p className="text-gray-400 text-sm">Enter the carbon offset volume in tons of CO2 equivalent</p>
            </div>

            {/* Vintage Field */}
            <div className="space-y-2">
              <label className="block text-white text-lg">Vintage Year</label>
              <select
                name="vintage"
                value={formData.vintage}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#0C1015] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                required
              >
                <option value="">Select Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
              <p className="text-gray-400 text-sm">Year when the carbon credits were generated</p>
            </div>

            {/* Price in APT Field */}
            <div className="space-y-2">
              <label className="block text-white text-lg">Price (APT)</label>
              <input
                type="number"
                step="0.1"
                name="priceAPT"
                value={formData.priceAPT}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#0C1015] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                placeholder="e.g., 2.5"
                required
              />
              <p className="text-gray-400 text-sm">Set the price per credit in APT tokens</p>
            </div>

            {/* Certification Field */}
            <div className="space-y-2">
              <label className="block text-white text-lg">Certification</label>
              <select
                name="certification"
                value={formData.certification}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#0C1015] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                required
              >
                <option value="">Select Certification</option>
                <option value="Gold Standard">Gold Standard</option>
                <option value="Verra Verified">Verra Verified</option>
                <option value="Climate Action Reserve">Climate Action Reserve</option>
                <option value="American Carbon Registry">American Carbon Registry</option>
                <option value="Plan Vivo">Plan Vivo</option>
                <option value="CDM (Clean Development Mechanism)">CDM (Clean Development Mechanism)</option>
                <option value="JI (Joint Implementation)">JI (Joint Implementation)</option>
                <option value="Other">Other</option>
              </select>
              <p className="text-gray-400 text-sm">Select the certification standard for your carbon credits</p>
            </div>

            {/* Upload Image Section */}
            <div className="space-y-2">
              <label className="block text-white text-lg">Upload Image</label>
              <div className="border-2 border-dashed border-gray-800 rounded-lg p-8">
                <div className="flex flex-col items-center justify-center text-center">
                  {previewUrl ? (
                    <div className="relative w-full h-64">
                      <Image
                        src={previewUrl}
                        alt="NFT Preview"
                        fill
                        className="rounded-lg object-contain"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setPreviewUrl("");
                          setSelectedFile(null);
                        }}
                        className="absolute top-2 right-2 bg-red-500/80 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <div className="cursor-pointer" onClick={() => document.getElementById('file-upload')?.click()}>
                      <ArrowUpTrayIcon className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                      <p className="text-lg text-white mb-2">Choose File</p>
                      <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  )}
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleFileSelect}
                    accept="image/*"
                  />
                </div>
              </div>
            </div>

            {/* Mint Button */}
            <button
              type="submit"
              className="w-full py-4 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-500 transition-colors"
            >
              Mint NFT
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}