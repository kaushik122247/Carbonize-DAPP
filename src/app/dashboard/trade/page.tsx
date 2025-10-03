"use client";

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import Image from 'next/image';
import { CheckCircleIcon, PlusIcon } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Sample NFT data that user owns
const ownedNFTs = [
  {
    id: 1,
    title: "Forest Guardian",
    description: "Carbon Credits",
    volume: "1,250 tCO2e",
    vintage: "2023",
    certification: "Gold Standard",
    currentValue: "9 APT",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center",
    isListed: false
  },
  {
    id: 2,
    title: "Wind Energy",
    description: "Carbon Credits",
    volume: "2,100 tCO2e",
    vintage: "2024",
    certification: "Verra Verified",
    currentValue: "12 APT",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop&crop=center",
    isListed: true,
    listingPrice: "14 APT"
  },
  {
    id: 3,
    title: "Solar Fields",
    description: "Carbon Credits",
    volume: "1,800 tCO2e",
    vintage: "2024",
    certification: "Gold Standard",
    currentValue: "15 APT",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop&crop=center",
    isListed: false
  },
  {
    id: 4,
    title: "Ocean Conservation",
    description: "Carbon Credits",
    volume: "950 tCO2e",
    vintage: "2023",
    certification: "Verra Verified",
    currentValue: "8 APT",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center",
    isListed: false
  },
  {
    id: 5,
    title: "Green Mountain",
    description: "Carbon Credits",
    volume: "1,650 tCO2e",
    vintage: "2022",
    certification: "Gold Standard",
    currentValue: "11 APT",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
    isListed: true,
    listingPrice: "13 APT"
  },
  {
    id: 6,
    title: "Sustainable Farm",
    description: "Carbon Credits",
    volume: "1,100 tCO2e",
    vintage: "2023",
    certification: "Verra Verified",
    currentValue: "7 APT",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop&crop=center",
    isListed: false
  }
];

export default function SellNFTPage() {
  const [selectedNFTs, setSelectedNFTs] = useState<number[]>([]);
  const [showListingModal, setShowListingModal] = useState(false);
  const [selectedNFTForListing, setSelectedNFTForListing] = useState<any>(null);
  const [listingPrice, setListingPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<'all' | 'listed' | 'unlisted'>('all');

  const toggleNFTSelection = (id: number) => {
    setSelectedNFTs(prev =>
      prev.includes(id)
        ? prev.filter(nftId => nftId !== id)
        : [...prev, id]
    );
  };

  const handleListNFT = (nft: any) => {
    setSelectedNFTForListing(nft);
    setListingPrice(nft.currentValue);
    setShowListingModal(true);
  };

  const handleConfirmListing = () => {
    if (selectedNFTForListing && listingPrice) {
      // Handle listing logic here
      console.log(`Listing NFT ${selectedNFTForListing.title} for ${listingPrice}`);
      setShowListingModal(false);
      setSelectedNFTForListing(null);
      setListingPrice("");
      alert(`${selectedNFTForListing.title} has been listed for ${listingPrice}!`);
    }
  };

  const handleBulkList = () => {
    if (selectedNFTs.length === 0) return;
    console.log('Bulk listing NFTs:', selectedNFTs);
    alert(`${selectedNFTs.length} NFTs have been prepared for bulk listing!`);
  };

  const filteredNFTs = ownedNFTs.filter(nft => {
    const matchesSearch = nft.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'listed' && nft.isListed) ||
                         (filterStatus === 'unlisted' && !nft.isListed);
    return matchesSearch && matchesFilter;
  });

  const listedCount = ownedNFTs.filter(nft => nft.isListed).length;
  const totalValue = ownedNFTs.reduce((sum, nft) => {
    const value = parseFloat(nft.currentValue.replace(' APT', ''));
    return sum + value;
  }, 0);

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0B1220] text-white p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Sell Your NFTs</h1>
            <p className="text-gray-400">Manage and list your carbon credit NFTs for sale</p>
          </div>
          
          {/* Stats Cards */}
          <div className="flex space-x-4">
            <div className="bg-[#0D1522] border border-gray-800 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-green-400">{ownedNFTs.length}</p>
              <p className="text-gray-400 text-sm">Total NFTs</p>
            </div>
            <div className="bg-[#0D1522] border border-gray-800 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-blue-400">{listedCount}</p>
              <p className="text-gray-400 text-sm">Listed</p>
            </div>
            <div className="bg-[#0D1522] border border-gray-800 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-purple-400">{totalValue.toFixed(1)} APT</p>
              <p className="text-gray-400 text-sm">Total Value</p>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search your NFTs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#0D1522] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>
          
          <div className="flex space-x-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as 'all' | 'listed' | 'unlisted')}
              className="px-4 py-3 bg-[#0D1522] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
            >
              <option value="all">All NFTs</option>
              <option value="listed">Listed</option>
              <option value="unlisted">Not Listed</option>
            </select>
            
            {selectedNFTs.length > 0 && (
              <button
                onClick={handleBulkList}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
              >
                List Selected ({selectedNFTs.length})
              </button>
            )}
          </div>
        </div>

        {/* NFTs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNFTs.map((nft) => (
            <div
              key={nft.id}
              className={`bg-[#0D1522] border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 ${
                selectedNFTs.includes(nft.id) ? 'border-green-500' : 'border-gray-800'
              }`}
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={nft.image}
                  alt={nft.title}
                  fill
                  className="object-cover"
                />
                {nft.isListed && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Listed
                  </div>
                )}
                {selectedNFTs.includes(nft.id) && (
                  <div className="absolute top-3 left-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{nft.title}</h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-gray-400">Volume: <span className="text-white">{nft.volume}</span></p>
                    <p className="text-gray-400">Vintage: <span className="text-white">{nft.vintage}</span></p>
                    <p className="text-gray-400">Certification: <span className="text-white">{nft.certification}</span></p>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-gray-400 text-sm">Current Value</p>
                    <p className="text-2xl font-bold text-green-400">{nft.currentValue}</p>
                  </div>
                  {nft.isListed && (
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">Listed Price</p>
                      <p className="text-xl font-bold text-blue-400">{nft.listingPrice}</p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => toggleNFTSelection(nft.id)}
                    className={`flex-1 py-2 px-3 rounded-lg transition-colors text-sm font-medium ${
                      selectedNFTs.includes(nft.id)
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {selectedNFTs.includes(nft.id) ? 'Selected' : 'Select'}
                  </button>
                  
                  {nft.isListed ? (
                    <button className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
                      Edit Listing
                    </button>
                  ) : (
                    <button
                      onClick={() => handleListNFT(nft)}
                      className="flex-1 py-2 px-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                      List for Sale
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredNFTs.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-[#0D1522] border border-gray-800 rounded-xl p-12 max-w-md mx-auto">
              <PlusIcon className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No NFTs Found</h3>
              <p className="text-gray-400 mb-6">
                {searchTerm ? 'No NFTs match your search criteria.' : 'You don\'t have any NFTs to sell yet.'}
              </p>
              {!searchTerm && (
                <button
                  onClick={() => window.location.href = '/dashboard/mint'}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
                >
                  Mint Your First NFT
                </button>
              )}
            </div>
          </div>
        )}

        {/* Listing Modal */}
        {showListingModal && selectedNFTForListing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#0D1522] border border-gray-800 rounded-xl p-8 max-w-md w-full mx-4">
              <h2 className="text-2xl font-bold text-white mb-6">List NFT for Sale</h2>
              
              <div className="mb-6">
                <div className="relative w-full h-32 mb-4">
                  <Image
                    src={selectedNFTForListing.image}
                    alt={selectedNFTForListing.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{selectedNFTForListing.title}</h3>
                <p className="text-gray-400">Current Value: {selectedNFTForListing.currentValue}</p>
              </div>

              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-2">
                  Listing Price (APT)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={listingPrice.replace(' APT', '')}
                  onChange={(e) => setListingPrice(e.target.value + ' APT')}
                  className="w-full px-4 py-3 bg-[#0C1015] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="Enter price in APT"
                />
                <p className="text-gray-400 text-sm mt-2">
                  Marketplace fee: 2.5% • You'll receive: {(parseFloat(listingPrice.replace(' APT', '') || '0') * 0.975).toFixed(2)} APT
                </p>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setShowListingModal(false)}
                  className="flex-1 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmListing}
                  className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
                >
                  List NFT
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}