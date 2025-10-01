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
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        <h1 className="text-3xl font-bold text-white mb-8">Mint NFT</h1>
        
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