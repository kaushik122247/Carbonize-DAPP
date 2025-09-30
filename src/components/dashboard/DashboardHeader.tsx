"use client";

import React from 'react';
import { UserWallet } from './UserWallet';

// In a real app, this would come from a wallet connection context
const MOCK_WALLET_ADDRESS = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

export const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Dashboard
      </h1>
      <UserWallet 
        walletAddress={MOCK_WALLET_ADDRESS}
        profileImageUrl="/images/default-avatar.png"
      />
    </div>
  );
};