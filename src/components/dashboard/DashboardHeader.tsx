"use client";

import React, { use } from 'react';
import { UserWallet } from './UserWallet';
import { useWallet } from '@aptos-labs/wallet-adapter-react';

// In a real app, this would come from a wallet connection context
const MOCK_WALLET_ADDRESS = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

function fetchWalletAddress() {
  const userInfo = sessionStorage.getItem('userInfo');
  const address = userInfo ? JSON.parse(userInfo).address : null;
  
  return address;
 }

export const DashboardHeader = () => {
  const WALLET_ADDRESS = fetchWalletAddress();

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Dashboard
      </h1>
      <UserWallet 
        walletAddress={WALLET_ADDRESS}
        profileImageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
      />
    </div>
  );
};