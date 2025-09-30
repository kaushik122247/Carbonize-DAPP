"use client";
import React from 'react';
import ConnectWallet from './ConnectWallet';

export default function HeroContent() {
  return (
    <div className="absolute  inset-0 flex flex-col items-center justify-center z-20 px-4 py-8">
      {/* Main Title with Backdrop */}
      <div className="relative text-center">
        {/* Semi-transparent black backdrop */}
        <div className="absolute h-[100vh] inset-0 bg-black/30 backdrop-blur-sm rounded-2xl -m-8 z-0"></div>
        
        {/* Text content */}
        <div className="relative z-10">
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl xl:text-[8.5rem] font-bold text-white mb-6 transform hover:scale-105 transition-transform duration-300"
            style={{ 
              textShadow: `
                0 0 10px rgba(255, 255, 255, 0.5),
                0 0 20px rgba(255, 255, 255, 0.3),
                0 4px 8px rgba(0, 0, 0, 0.8),
                0 8px 16px rgba(0, 0, 0, 0.6),
                0 12px 24px rgba(0, 0, 0, 0.4),
                2px 2px 0px rgba(0, 0, 0, 1),
                4px 4px 0px rgba(0, 0, 0, 0.8)
              `
            }}
          >
            <span className="block">Tokenize</span>
          </h1>
          <div 
            className="text-6xl md:text-8xl lg:text-9xl xl:text-[7rem] font-bold text-white-700 mb-6 transform hover:scale-105 transition-transform duration-300"
            style={{ 
              textShadow: `
                0 0 10px rgba(255, 255, 255, 0.5),
                0 0 20px rgba(255, 255, 255, 0.3),
                0 4px 8px rgba(0, 0, 0, 0.8),
                0 8px 16px rgba(0, 0, 0, 0.6),
                0 12px 24px rgba(0, 0, 0, 0.4),
                2px 2px 0px rgba(0, 0, 0, 1),
                4px 4px 0px rgba(0, 0, 0, 0.8)
              `
            }}
          >
            <span className="block">Carbon Credits</span>
          </div>
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl xl:text-[6rem] font-bold text-white mb-6 transform hover:scale-105 transition-transform duration-300"
            style={{ 
              textShadow: `
                0 0 10px rgba(255, 255, 255, 0.5),
                0 0 20px rgba(255, 255, 255, 0.3),
                0 4px 8px rgba(0, 0, 0, 0.8),
                0 8px 16px rgba(0, 0, 0, 0.6),
                0 12px 24px rgba(0, 0, 0, 0.4),
                2px 2px 0px rgba(0, 0, 0, 1),
                4px 4px 0px rgba(0, 0, 0, 0.8)
              `
            }}
          >
            <span className="block">as NFTs</span>
          </h1>
        </div>
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