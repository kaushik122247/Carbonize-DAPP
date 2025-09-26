"use client";
import React from 'react';
import ConnectWallet from './ConnectWallet';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 bg-black/20 backdrop-blur-md border-b border-white/10">
      <nav className="flex items-center justify-center relative">
        {/* Logo */}
        <div className="absolute left-0 flex items-center space-x-2">
            <img src="images/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-white text-xl font-bold">Carbonize</span>
        </div>

        {/* Navigation Links - Centered */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-green-400 transition-colors duration-0">
            Home
          </a>
          <a href="#" className="text-white hover:text-green-400 transition-colors duration-0">
            How It Works
          </a>
          <a href="#" className="text-white hover:text-green-400 transition-colors duration-0">
            Featured
          </a>
          <a href="#why-choose-us" className="text-white hover:text-green-400 transition-colors duration-0">
            Why Choose Us
          </a>
           <a href="#team" className="text-white hover:text-green-400 transition-colors duration-300">
            Team
          </a>
          <a href="#" className="text-white hover:text-green-400 transition-colors duration-0">
            About Us
          </a>
        </div>

        {/* Connect Wallet Button - Desktop */}
        <div className="absolute right-0 hidden md:block">
          <ConnectWallet 
            size="small"
            variant="outline"
            className="px-4 py-2 text-sm"
            disableFloatAnimation={true}
            disableHoverColorChange={true}
          />
        </div>

        {/* Mobile menu button and Connect Wallet */}
        <div className="absolute right-0 md:hidden flex items-center space-x-2">
          <ConnectWallet 
            size="small"
            variant="outline"
            className="px-3 py-1.5 text-xs"
            disableFloatAnimation={true}
            disableHoverColorChange={true}
          />
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}