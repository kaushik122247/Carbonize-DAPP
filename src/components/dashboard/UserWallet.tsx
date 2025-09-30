"use client";

import React from 'react';
import Image from 'next/image';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface UserWalletProps {
  walletAddress: string;
  profileImageUrl?: string;
}

const truncateAddress = (address: string): string => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const UserWallet: React.FC<UserWalletProps> = ({ 
  walletAddress,
  profileImageUrl = "/images/default-avatar.png" // Fallback image
}) => {
  const truncatedAddress = truncateAddress(walletAddress);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src={profileImageUrl}
                alt="Profile"
                fill
                className="rounded-full object-cover border border-gray-600"
              />
            </div>
            <span className="font-mono text-sm text-gray-300">{truncatedAddress}</span>
          </div>
          <ChevronDownIcon className="w-4 h-4 text-gray-400" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-gray-800 rounded-lg p-1 shadow-xl"
          sideOffset={5}
        >
          <DropdownMenu.Item className="outline-none">
            <button className="w-full text-left px-3 py-2 text-sm text-gray-300 rounded hover:bg-gray-700 transition-colors">
              View Profile
            </button>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="outline-none">
            <button className="w-full text-left px-3 py-2 text-sm text-gray-300 rounded hover:bg-gray-700 transition-colors">
              Copy Address
            </button>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="outline-none">
            <button className="w-full text-left px-3 py-2 text-sm text-gray-300 rounded hover:bg-gray-700 transition-colors">
              Disconnect
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};