"use client";

import React from 'react';
import Image from 'next/image';

const nftCollection = [
  {
    id: 1,
    title: "Forest Guardian",
    description: "Carbon Credits",
    value: "9 APT",
    volume: "1,250 tCO2e",
    vintage: "2023",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "Wind Energy",
    description: "Carbon Credits",
    value: "12 APT",
    volume: "2,100 tCO2e",
    vintage: "2024",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "Solar Fields",
    description: "Carbon Credits",
    value: "15 APT",
    volume: "1,800 tCO2e",
    vintage: "2024",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 4,
    title: "Ocean Conservation",
    description: "Carbon Credits",
    value: "8 APT",
    volume: "950 tCO2e",
    vintage: "2023",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 5,
    title: "Green Mountain",
    description: "Carbon Credits",
    value: "11 APT",
    volume: "1,650 tCO2e",
    vintage: "2022",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 6,
    title: "Sustainable Farm",
    description: "Carbon Credits",
    value: "7 APT",
    volume: "1,100 tCO2e",
    vintage: "2023",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop&crop=center"
  }
];

export const NFTCollection = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">My NFT Collection</h2>
        <button className="px-4 py-2 text-green-500 hover:text-green-400 transition-colors text-sm font-semibold">
          View Details
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {nftCollection.map((nft) => (
          <div key={nft.id} className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
            <div className="relative w-full h-48 mb-3">
              <Image
                src={nft.image}
                alt={nft.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="text-white font-semibold mb-2">{nft.title}</h3>
            <div className="space-y-1 mb-3">
              <p className="text-gray-400 text-sm">{nft.description}</p>
              <p className="text-gray-300 text-sm">Volume: <span className="text-white">{nft.volume}</span></p>
              <p className="text-gray-300 text-sm">Vintage: <span className="text-white">{nft.vintage}</span></p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-green-500 font-medium">{nft.value}</p>
              <button className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};