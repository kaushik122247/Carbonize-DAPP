"use client";
import React from 'react';
import ConnectWallet from './ConnectWallet';
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 bg-black/20 backdrop-blur-md border-b border-white/10">
      <nav className="flex items-center justify-center relative">
        {/* Logo */}
        <div className="absolute left-0 flex items-center space-x-2">
          <img src="images/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-white text-xl font-bold font-space">Carbonize</span>
        </div>

        {/* Navigation Links - Centered */}
        <div className="hidden md:flex items-center space-x-8 font-inter">
          <a href="#" className="text-neutral-200 hover:text-green-400 transition-colors duration-0 font-medium">
            Home
          </a>
          <a href="#how-it-works" className="text-neutral-200 hover:text-green-400 transition-colors duration-0 font-medium">
            How It Works
          </a>
          <a href="#" className="text-neutral-200 hover:text-green-400 transition-colors duration-0 font-medium">
            Featured
          </a>
          <a href="#why-choose-us" className="text-neutral-200 hover:text-green-400 transition-colors duration-0 font-medium">
            Why Choose Us
          </a>
          <a href="#team" className="text-neutral-200 hover:text-green-400 transition-colors duration-0 font-medium">
            Team
          </a>
        </div>

        {/* Connect Wallet Button - Desktop */}
        <div className="absolute right-0 hidden md:block">
          <AptosWalletAdapterProvider>
            <ConnectWallet
              size="small"
              variant="outline"
              className="px-4 py-2 text-sm"
              disableFloatAnimation={true}
              disableHoverColorChange={true}
            />
          </AptosWalletAdapterProvider>
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