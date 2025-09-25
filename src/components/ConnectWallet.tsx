"use client";
import React, { useState } from 'react';

interface ConnectWalletProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function ConnectWallet({ 
  className = '', 
  size = 'large',
  variant = 'outline'
}: ConnectWalletProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    
    try {
      // TODO: Implement actual wallet connection logic
      // For now, simulate connection process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Connect wallet clicked');
      setIsConnected(true);
      
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    console.log('Wallet disconnected');
  };

  // Size variations
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg md:text-xl'
  };

  // Variant styles
  const variantClasses = {
    primary: 'bg-green-500 text-white border-2 border-green-500 hover:bg-green-600 hover:border-green-600',
    secondary: 'bg-white text-green-500 border-2 border-white hover:bg-gray-100',
    outline: 'bg-transparent text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-black'
  };

  const baseClasses = `
    font-semibold rounded-lg transition-all duration-300 transform hover:scale-105
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    flex items-center justify-center gap-2
    animate-float shadow-lg hover:shadow-2xl
  `;

  if (isConnected) {
    return (
      <button
        onClick={handleDisconnect}
        className={`${baseClasses} ${sizeClasses[size]} bg-green-500 text-white border-2 border-green-500 hover:bg-green-600 ${className} shadow-2xl`}
        style={{
          boxShadow: '0 0 25px rgba(34, 197, 94, 0.5), 0 0 50px rgba(34, 197, 94, 0.3), 0 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease-in-out'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 35px rgba(34, 197, 94, 0.7), 0 0 70px rgba(34, 197, 94, 0.4), 0 6px 20px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 0 25px rgba(34, 197, 94, 0.5), 0 0 50px rgba(34, 197, 94, 0.3), 0 4px 15px rgba(0, 0, 0, 0.2)';
        }}
      >
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        Connected
      </button>
    );
  }

  return (
    <button
      onClick={handleConnectWallet}
      disabled={isConnecting}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className} shadow-2xl`}
      style={{
        boxShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(34, 197, 94, 0.2), 0 4px 15px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease-in-out'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.3), 0 6px 20px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(34, 197, 94, 0.2), 0 4px 15px rgba(0, 0, 0, 0.2)';
      }}
    >
      {isConnecting ? (
        <>
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
          Connecting...
        </>
      ) : (
        <>
          <svg 
            className="w-5 h-5 animate-pulse" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" 
            />
          </svg>
          Connect Wallet
        </>
      )}
    </button>
  );
}