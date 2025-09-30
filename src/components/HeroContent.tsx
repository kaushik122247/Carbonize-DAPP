"use client";
import React from 'react';
import ConnectWallet from './ConnectWallet';

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center lg:items-start justify-center h-full max-w-2xl">
      {/* Main Title with Backdrop */}
      <div className="text-center lg:text-left font-space relative">
        {/* Transparent Black Backdrop */}
        <div className="absolute inset-0 bg-black/35 backdrop-blur-sm rounded-3xl transform scale-105 z-0"></div>
        
        {/* Text Content */}
        <div className="relative z-10 px-6 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 lg:mb-4 hero-text leading-tight">
            <span className="block">Tokenize</span>
          </h1>
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient-primary mb-3 lg:mb-4 hero-text leading-tight">
            <span className="block">Carbon Credits</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-6 hero-text leading-tight">
            <span className="block">as NFTs</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 lg:mb-8 font-inter max-w-lg leading-relaxed">
            Transform environmental impact into tradeable digital assets on the blockchain. Join the future of sustainable finance.
          </p>
          
          {/* Connect Wallet Button */}
          <div className="flex justify-center lg:justify-start">
            <ConnectWallet 
              size="large"
              variant="outline"
              className="w-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}