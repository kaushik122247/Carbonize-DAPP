"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/providers/AuthProvider';
import Web3AuthModal from '@/components/Web3AuthModal';

interface ConnectWalletProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
  disableFloatAnimation?: boolean;
  disableHoverColorChange?: boolean;
}

export default function ConnectWallet({ 
  className = '', 
  size = 'large',
  variant = 'outline',
  disableFloatAnimation = false,
  disableHoverColorChange = false
}: ConnectWalletProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStep, setConnectionStep] = useState('');
  const router = useRouter();
  const { isAuthenticated, user, login, logout } = useAuth();

  // Wallet adapter related code removed for simplicity

  const handleConnectWallet = () => {
    setIsModalOpen(true);
  };

  const handleAuthSuccess = async (userInfo: any) => {
    setIsConnecting(true);
    setConnectionStep('Processing authentication...');
    
    try {
      // Process the authentication
      login(userInfo);
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
      
      setConnectionStep('Authentication successful! Redirecting...');
      
      // Navigate to dashboard after successful connection
      setTimeout(() => {
        router.push('/dashboard');
        setIsConnecting(false);
        setConnectionStep('');
      }, 1500);
      
    } catch (error) {
      console.error('Failed to process authentication:', error);
      setConnectionStep('Authentication failed');
      setTimeout(() => {
        setIsConnecting(false);
        setConnectionStep('');
      }, 2000);
    }
  };

  const handleDisconnect = () => {
    logout();
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
    primary: disableHoverColorChange
      ? 'bg-primary-green text-white border-2 border-primary-green font-inter font-semibold'
      : 'bg-primary-green text-white border-2 border-primary-green hover:bg-primary-green-light hover:border-primary-green-light font-inter font-semibold',
    secondary: disableHoverColorChange
      ? 'bg-white text-primary-green border-2 border-white font-inter font-semibold'
      : 'bg-white text-primary-green border-2 border-white hover:bg-gray-100 font-inter font-semibold',
    outline: disableHoverColorChange
      ? 'bg-transparent text-primary-green border-2 border-primary-green font-inter font-semibold'
      : 'bg-transparent text-primary-green border-2 border-primary-green hover:bg-primary-green hover:text-white font-inter font-semibold'
  };  const baseClasses = `
    font-semibold rounded-lg transition-all duration-300 transform hover:scale-105
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    flex items-center justify-center gap-2
    ${disableFloatAnimation ? '' : 'animate-float'} shadow-lg hover:shadow-2xl
  `;

  if (isAuthenticated) {
    return (
      <button
        onClick={handleDisconnect}
        className={`${baseClasses} ${sizeClasses[size]} text-white border-2 font-inter font-semibold ${className} shadow-2xl`}
        style={{
          backgroundColor: '#22c55e',
          borderColor: '#22c55e',
          boxShadow: '0 0 25px rgba(34, 197, 94, 0.5), 0 0 50px rgba(34, 197, 94, 0.3), 0 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease-in-out'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#16a34a';
          e.currentTarget.style.borderColor = '#16a34a';
          e.currentTarget.style.boxShadow = '0 0 35px rgba(22, 163, 74, 0.7), 0 0 70px rgba(22, 163, 74, 0.4), 0 6px 20px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#22c55e';
          e.currentTarget.style.borderColor = '#22c55e';
          e.currentTarget.style.boxShadow = '0 0 25px rgba(34, 197, 94, 0.5), 0 0 50px rgba(34, 197, 94, 0.3), 0 4px 15px rgba(0, 0, 0, 0.2)';
        }}
      >
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        Connected
      </button>
    );
  }

  return (
    <>
      <button
        onClick={handleConnectWallet}
        disabled={isConnecting}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className} shadow-2xl`}
        style={{
          boxShadow: '0 0 20px rgba(0, 212, 170, 0.4), 0 0 40px rgba(0, 212, 170, 0.2), 0 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease-in-out'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 212, 170, 0.6), 0 0 60px rgba(0, 212, 170, 0.3), 0 6px 20px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 170, 0.4), 0 0 40px rgba(0, 212, 170, 0.2), 0 4px 15px rgba(0, 0, 0, 0.2)';
        }}
      >
        {isConnecting ? (
          <>
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
            {connectionStep || 'Connecting...'}
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

      <Web3AuthModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
}