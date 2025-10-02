"use client";
import React from 'react';
import ConnectWallet from './ConnectWallet';

export default function HeroContent() {
  return (
    <div className="absolute  inset-0 flex flex-col items-center justify-center z-20 px-4 py-8 pt-28">
      {/* Main Title */}
      <div className="relative text-center">
        {/* Text content */}
        <div className="relative z-10">
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl xl:text-[8.5rem] font-bold text-white mb-6"
            style={{ 
              color: '#FFFFFF',
              textShadow: `
                0 0 8px rgba(255, 255, 255, 0.4),
                0 0 16px rgba(255, 255, 255, 0.25),
                0 3px 6px rgba(0, 0, 0, 0.6),
                0 6px 12px rgba(0, 0, 0, 0.4),
                0 9px 18px rgba(0, 0, 0, 0.3),
                1px 1px 0px rgba(0, 0, 0, 0.7),
                3px 3px 0px rgba(0, 0, 0, 0.5)
              `
            }}
          >
            <span className="block">Tokenize</span>
          </h1>
          <div 
            className="text-6xl md:text-8xl lg:text-9xl xl:text-[7rem] font-bold mb-6"
            style={{ 
              color: '#00FF66',
              textShadow: `
                0 0 8px rgba(0, 255, 102, 0.4),
                0 0 16px rgba(0, 255, 102, 0.25),
                0 3px 6px rgba(0, 0, 0, 0.6),
                0 6px 12px rgba(0, 0, 0, 0.4),
                0 9px 18px rgba(0, 0, 0, 0.3),
                1px 1px 0px rgba(0, 0, 0, 0.7),
                3px 3px 0px rgba(0, 0, 0, 0.5)
              `
            }}
          >
            <span className="block">Carbon Credits</span>
          </div>
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl xl:text-[6rem] font-bold text-white mb-6"
            style={{ 
              color: '#E0E0E0',
              textShadow: `
                0 0 8px rgba(255, 255, 255, 0.4),
                0 0 16px rgba(255, 255, 255, 0.25),
                0 3px 6px rgba(0, 0, 0, 0.6),
                0 6px 12px rgba(0, 0, 0, 0.4),
                0 9px 18px rgba(0, 0, 0, 0.3),
                1px 1px 0px rgba(0, 0, 0, 0.7),
                3px 3px 0px rgba(0, 0, 0, 0.5)
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
        className="mt-15"
        buttonText="Get Started"
        hideIcon={true}
      />
    </div>
  );
}