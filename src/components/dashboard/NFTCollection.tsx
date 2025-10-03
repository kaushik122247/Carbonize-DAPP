"use client";

import React from 'react';
import Image from 'next/image';

const nftCollection = [
  {
    id: 1,
    title: "Rie Maynil",
    description: "Carbon Credits",
    value: "130 APT",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "Tirlie Mase",
    description: "Carbon Credits",
    value: "120 APT",
    image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "Ocean Breeze",
    description: "Marine Carbon Credits",
    value: "175 APT",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center"
  },
  // Add more NFTs as needed
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
          <div key={nft.id} className="bg-gray-700 rounded-lg p-4">
            <div className="relative w-full h-48 mb-3">
              <Image
                src={nft.image}
                alt={nft.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="text-white font-semibold">{nft.title}</h3>
            <p className="text-gray-400 text-sm">{nft.description}</p>
            <p className="text-green-500 font-medium mt-1">{nft.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};