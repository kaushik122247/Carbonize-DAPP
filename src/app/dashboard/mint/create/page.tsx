"use client";

import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

// Define interface for form data
interface FormData {
  startDate: string;
  endDate: string;
  mintLimit: string;
  royaltyPercentage: string;
  mintFee: string;
  mintForSelf: boolean;
}

export default function CreateCollectionPage() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Effect to check wallet connection
  useEffect(() => {
    const checkWalletConnection = async () => {
      try {
        // Add your wallet connection check logic here
        // This is a placeholder
        const isConnected = false; // Replace with actual wallet check
        setIsWalletConnected(isConnected);
      } catch (err) {
        console.error('Error checking wallet connection:', err);
        setError('Failed to check wallet connection');
      }
    };

    checkWalletConnection();
  }, []);
  const [formData, setFormData] = useState<FormData>({
    startDate: '',
    endDate: '',
    mintLimit: '',
    royaltyPercentage: '',
    mintFee: '',
    mintForSelf: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    // Validation for number inputs
    if (type === 'number') {
      const numValue = parseFloat(value);
      
      // Validate percentage (0-100)
      if (name === 'royaltyPercentage' && (numValue < 0 || numValue > 100)) {
        return;
      }
      
      // Validate positive numbers
      if (numValue < 0) {
        return;
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle collection creation logic here
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0B1220] text-white p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Create New Collection</h1>
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

        {/* Wallet Connection Warning */}
        {!isWalletConnected && (
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-8">
            <div className="flex items-center text-orange-400">
              <span className="mr-2">⚠️</span>
              <div>
                <p className="font-medium">No account connected</p>
                <p className="text-sm mt-1">
                  To continue with creating your collection, make sure you are connected with a Wallet and with the same profile
                  account as in your COLLECTION_CREATOR_ADDRESS in .env file
                </p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
          {/* File Upload Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-white text-lg">Upload Files</label>
              <span className="text-sm text-gray-400">
                Uploads collection files to Irys, a decentralized storage
              </span>
            </div>
            <button
              type="button"
              onClick={() => document.getElementById('folder-upload')?.click()}
              className="w-full px-4 py-3 bg-[#0D1522] border border-gray-800 rounded-lg text-gray-400 hover:border-green-500 transition-all duration-200"
            >
              Choose Folder to Upload
            </button>
            <input
              id="folder-upload"
              type="file"
              // @ts-ignore - webkitdirectory is a non-standard attribute
              webkitdirectory=""
              directory=""
              className="hidden"
              onChange={(e) => {
                const files = e.target.files;
                if (files) {
                  console.log('Selected files:', Array.from(files));
                }
              }}
            />
          </div>

          {/* Date Range Section */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-white">Public mint start date</label>
                <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="datetime-local"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#0D1522] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-white">Public mint end date</label>
                <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="datetime-local"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#0D1522] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>
          </div>

          {/* Mint Limit */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-white">Mint limit per address</label>
              <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              name="mintLimit"
              value={formData.mintLimit}
              onChange={handleInputChange}
              placeholder="Enter mint limit"
              className="w-full px-4 py-3 bg-[#0D1522] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>

          {/* Optional Fields */}
          <div className="space-y-6">
            {/* Royalty Percentage */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-white">Royalty Percentage (optional)</label>
                <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                name="royaltyPercentage"
                value={formData.royaltyPercentage}
                onChange={handleInputChange}
                placeholder="Enter royalty percentage"
                className="w-full px-4 py-3 bg-[#0D1522] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>

            {/* Mint Fee */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-white">Mint fee per NFT in APT (optional)</label>
                <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                name="mintFee"
                value={formData.mintFee}
                onChange={handleInputChange}
                placeholder="Enter mint fee"
                className="w-full px-4 py-3 bg-[#0D1522] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>

            {/* Mint for Self */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="mintForSelf"
                name="mintForSelf"
                checked={formData.mintForSelf}
                onChange={handleInputChange}
                className="form-checkbox h-5 w-5 text-green-500 rounded border-gray-700 bg-transparent focus:ring-0 focus:ring-offset-0"
              />
              <div className="flex items-center justify-between flex-1">
                <label htmlFor="mintForSelf" className="text-white cursor-pointer">
                  Mint for myself (optional)
                </label>
                <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isWalletConnected}
            className={`w-full py-4 rounded-lg text-white text-lg font-semibold transition-all duration-200 
              ${!isWalletConnected 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-green-500 hover:bg-green-600'}`}
          >
            Create Collection
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}