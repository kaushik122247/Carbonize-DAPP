"use client";

import React, { useState, useEffect } from 'react';
import { UserWallet } from './UserWallet';
import { useWallet } from '@aptos-labs/wallet-adapter-react';

// In a real app, this would come from a wallet connection context
const MOCK_WALLET_ADDRESS = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

function fetchWalletAddress() {
  // Check if we're in the browser before accessing sessionStorage
  if (typeof window !== 'undefined') {
    const userInfo = sessionStorage.getItem('userInfo');
    const address = userInfo ? JSON.parse(userInfo).address : null;
    return address;
  }
  return null;
}

export const DashboardHeader = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    // Only run on client side
    const address = fetchWalletAddress();
    setWalletAddress(address);
  }, []);

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Dashboard
      </h1>
      <UserWallet 
        walletAddress={walletAddress || MOCK_WALLET_ADDRESS}
        profileImageUrl="/images/default-avatar.png"
      />
    </div>
  );
};