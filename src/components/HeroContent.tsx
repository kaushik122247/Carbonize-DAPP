"use client";
import React from 'react';
import ConnectWallet from './ConnectWallet';

export default function HeroContent() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
      {/* Main Title */}
      <div className="text-center mt-22">
        <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[8.5rem] font-bold text-white mb-6">
          <span className="block">Tokenize</span>
        </h1>
        <div className="text-6xl md:text-8xl lg:text-9xl xl:text-[7rem] font-bold text-green-700 mb-6">
          <span className="block">Carbon Credits</span>
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[6rem] font-bold text-white mb-6">
          <span className="block">as NFTs</span>
        </h1>
      </div>

      {/* Connect Wallet Button Component */}
      <ConnectWallet 
        size="large"
        variant="outline"
        className="mt-12"
      />
    </div>
  );
}