"use client";
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Web3AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (userInfo: any) => void;
}

export default function Web3AuthModal({ isOpen, onClose, onSuccess }: Web3AuthModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [showMoreWallets, setShowMoreWallets] = useState(false);

  const connectWithGoogle = async () => {
    setIsLoading(true);
    setLoadingText('Connecting with Google...');
    
    try {
      // Simulate Google OAuth flow
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLoadingText('Getting user information...');
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLoadingText('Authentication successful!');
      
      // Mock user data for Google login
      const mockUser = {
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        profileImage: 'https://via.placeholder.com/150',
        loginProvider: 'google',
        address: '0x' + Math.random().toString(16).substr(2, 40),
      };
      
      setTimeout(() => {
        onSuccess(mockUser);
        onClose();
        setIsLoading(false);
        setLoadingText('');
      }, 1000);
    } catch (error) {
      console.error('Google login failed:', error);
      setIsLoading(false);
      setLoadingText('');
    }
  };

  const connectWithApple = async () => {
    setIsLoading(true);
    setLoadingText('Connecting with Apple...');
    
    try {
      // Simulate Apple OAuth flow
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLoadingText('Getting user information...');
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLoadingText('Authentication successful!');
      
      // Mock user data for Apple login
      const mockUser = {
        name: 'Jane Smith',
        email: 'jane.smith@icloud.com',
        profileImage: 'https://via.placeholder.com/150',
        loginProvider: 'apple',
        address: '0x' + Math.random().toString(16).substr(2, 40),
      };
      
      setTimeout(() => {
        onSuccess(mockUser);
        onClose();
        setIsLoading(false);
        setLoadingText('');
      }, 1000);
    } catch (error) {
      console.error('Apple login failed:', error);
      setIsLoading(false);
      setLoadingText('');
    }
  };

  const connectWithPetra = async () => {
    setIsLoading(true);
    setLoadingText('Connecting with Petra Wallet...');
    
    try {
      // Check if Petra wallet is available
      if (typeof window !== 'undefined' && 'aptos' in window) {
        const wallet = (window as any).aptos;
        
        setLoadingText('Requesting wallet connection...');
        const response = await wallet.connect();
        
        if (response) {
          setLoadingText('Wallet connected successfully!');
          
          setTimeout(() => {
            onSuccess({ 
              name: 'Petra Wallet User',
              email: response.address,
              address: response.address,
              profileImage: '',
              loginProvider: 'petra'
            });
            onClose();
            setIsLoading(false);
            setLoadingText('');
          }, 1000);
        }
      } else {
        // Simulate Petra wallet connection for demo
        setLoadingText('Requesting wallet connection...');
        await new Promise(resolve => setTimeout(resolve, 1500));
        setLoadingText('Wallet connected successfully!');
        
        const mockAddress = '0x' + Math.random().toString(16).substr(2, 40);
        setTimeout(() => {
          onSuccess({ 
            name: 'Petra Wallet User',
            email: mockAddress,
            address: mockAddress,
            profileImage: '',
            loginProvider: 'petra'
          });
          onClose();
          setIsLoading(false);
          setLoadingText('');
        }, 1000);
      }
    } catch (error) {
      console.error('Petra wallet connection failed:', error);
      setIsLoading(false);
      setLoadingText('');
    }
  };

  const connectWithOKXWallet = async () => {
    setIsLoading(true);
    setLoadingText('Connecting with OKX Wallet...');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLoadingText('Wallet connected successfully!');
      
      const mockAddress = '0x' + Math.random().toString(16).substr(2, 40);
      setTimeout(() => {
        onSuccess({ 
          name: 'OKX Wallet User',
          email: mockAddress,
          address: mockAddress,
          profileImage: '',
          loginProvider: 'okx'
        });
        onClose();
        setIsLoading(false);
        setLoadingText('');
      }, 1000);
    } catch (error) {
      console.error('OKX wallet connection failed:', error);
      setIsLoading(false);
      setLoadingText('');
    }
  };

  const connectWithNightly = async () => {
    setIsLoading(true);
    setLoadingText('Connecting with Nightly Wallet...');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLoadingText('Wallet connected successfully!');
      
      const mockAddress = '0x' + Math.random().toString(16).substr(2, 40);
      setTimeout(() => {
        onSuccess({ 
          name: 'Nightly Wallet User',
          email: mockAddress,
          address: mockAddress,
          profileImage: '',
          loginProvider: 'nightly'
        });
        onClose();
        setIsLoading(false);
        setLoadingText('');
      }, 1000);
    } catch (error) {
      console.error('Nightly wallet connection failed:', error);
      setIsLoading(false);
      setLoadingText('');
    }
  };

  const connectWithPontemWallet = async () => {
    setIsLoading(true);
    setLoadingText('Connecting with Pontem Wallet...');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLoadingText('Wallet connected successfully!');
      
      const mockAddress = '0x' + Math.random().toString(16).substr(2, 40);
      setTimeout(() => {
        onSuccess({ 
          name: 'Pontem Wallet User',
          email: mockAddress,
          address: mockAddress,
          profileImage: '',
          loginProvider: 'pontem'
        });
        onClose();
        setIsLoading(false);
        setLoadingText('');
      }, 1000);
    } catch (error) {
      console.error('Pontem wallet connection failed:', error);
      setIsLoading(false);
      setLoadingText('');
    }
  };

  const connectWithRimosafe = async () => {
    setIsLoading(true);
    setLoadingText('Connecting with Rimosafe...');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLoadingText('Wallet connected successfully!');
      
      const mockAddress = '0x' + Math.random().toString(16).substr(2, 40);
      setTimeout(() => {
        onSuccess({ 
          name: 'Rimosafe User',
          email: mockAddress,
          address: mockAddress,
          profileImage: '',
          loginProvider: 'rimosafe'
        });
        onClose();
        setIsLoading(false);
        setLoadingText('');
      }, 1000);
    } catch (error) {
      console.error('Rimosafe connection failed:', error);
      setIsLoading(false);
      setLoadingText('');
    }
  };

  // Install functions for redirecting to wallet installation pages
  const installOKXWallet = () => {
    window.open('https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge', '_blank');
  };

  const installNightlyWallet = () => {
    window.open('https://nightly.app/', '_blank');
  };

  const installPontemWallet = () => {
    window.open('https://pontem.network/pontem-wallet', '_blank');
  };

  const installRimosafe = () => {
    window.open('https://chromewebstore.google.com/detail/kiicddjcakdmobjkcpppkgcjbpakcagp/error', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border border-gray-700 text-white max-w-md max-h-[90vh] overflow-y-auto scrollbar-thin">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">
              Log in or sign up<br />
              <span className="text-gray-300">with Social + Aptos Connect</span>
            </DialogTitle>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </DialogHeader>
        
        <div className="space-y-4 mt-6">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-green-400 text-center">{loadingText}</p>
            </div>
          ) : (
            <>
              {/* Google Login */}
              <button
                onClick={connectWithGoogle}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              {/* Apple Login */}
              <button
                onClick={connectWithApple}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-black text-white border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                </svg>
                Continue with Apple
              </button>

              {/* Learn more about Aptos Connect */}
              <div className="text-center py-2">
                <p className="text-gray-400 text-sm">
                  Learn more about{' '}
                  <span className="text-blue-400 hover:underline cursor-pointer">
                    Aptos Connect →
                  </span>
                </p>
              </div>

              {/* Privacy Policy */}
              <div className="text-center text-xs text-gray-500 mb-4">
                By continuing, you agree to Aptos Labs'{' '}
                <a 
                  href="https://aptoslabs.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline cursor-pointer"
                >
                  Privacy Policy
                </a>.
                <br />
                <div className="flex items-center justify-center gap-1">
                  <span className="text-gray-400">Powered by</span>
                  <img 
                    src="/images/Aptos-logo.png" 
                    alt="Aptos Logo" 
                    className="w-4 h-4"
                  />
                  <span className="text-gray-400">Aptos Labs</span>
                </div>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900 text-gray-400">Or</span>
                </div>
              </div>

              {/* Petra Wallet */}
              <div className="flex items-center justify-between p-4 border border-gray-600 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <img 
                      src="data:image/png;base64,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" 
                      alt="Petra Wallet Logo" 
                      className="w-8 h-8 rounded-lg"
                    />
                  </div>
                  <span className="text-white font-medium">Petra</span>
                </div>
                <button
                  onClick={connectWithPetra}
                  className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Connect
                </button>
              </div>

              {/* More wallets toggle */}
              <div className="text-center">
                <button 
                  onClick={() => setShowMoreWallets(!showMoreWallets)}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 mx-auto"
                >
                  More wallets
                  <svg 
                    className={`w-4 h-4 transition-transform ${showMoreWallets ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Additional wallets dropdown */}
              {showMoreWallets && (
                <div className="space-y-3 mt-4">
                  {/* OKX Wallet */}
                  <div className="flex items-center justify-between p-4 border border-gray-600 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 3h6v6H3V3zm6 6h6v6H9V9zm6-6h6v6h-6V3zM3 15h6v6H3v-6zm12 0h6v6h-6v-6z"/>
                        </svg>
                      </div>
                      <span className="text-white font-medium">OKX Wallet</span>
                    </div>
                    <button
                      onClick={installOKXWallet}
                      className="px-4 py-1.5 bg-white text-black rounded-lg transition-colors duration-0 font-medium text-sm"
                      style={{
                        backgroundColor: '#ffffff',
                        color: '#000000'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#00d4aa';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffffff';
                        e.currentTarget.style.color = '#000000';
                      }}
                    >
                      Install
                    </button>
                  </div>

                  {/* Nightly */}
                  <div className="flex items-center justify-between p-4 border border-gray-600 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                        <img 
                          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iV2Fyc3R3YV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDg1MS41IDg1MS41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NTEuNSA4NTEuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzYwNjdGOTt9DQoJLnN0MXtmaWxsOiNGN0Y3Rjc7fQ0KPC9zdHlsZT4NCjxnPg0KCTxnIGlkPSJXYXJzdHdhXzJfMDAwMDAwMTQ2MDk2NTQyNTMxODA5NDY0NjAwMDAwMDg2NDc4NTIwMDIxMTY5MTg2ODhfIj4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyNCwwaDYwMy42YzY4LjUsMCwxMjQsNTUuNSwxMjQsMTI0djYwMy42YzAsNjguNS01NS41LDEyNC0xMjQsMTI0SDEyNGMtNjguNSwwLTEyNC01NS41LTEyNC0xMjRWMTI0DQoJCQlDMCw1NS41LDU1LjUsMCwxMjQsMHoiLz4NCgk8L2c+DQoJPGcgaWQ9IldhcnN0d2FfMyI+DQoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02MjMuNSwxNzAuM2MtMzcuNCw1Mi4yLTg0LjIsODguNC0xMzkuNSwxMTIuNmMtMTkuMi01LjMtMzguOS04LTU4LjMtNy44Yy0xOS40LTAuMi0zOS4xLDIuNi01OC4zLDcuOA0KCQkJYy01NS4zLTI0LjMtMTAyLjEtNjAuMy0xMzkuNS0xMTIuNmMtMTEuMywyOC40LTU0LjgsMTI2LjQtMi42LDI2My40YzAsMC0xNi43LDcxLjUsMTQsMTMyLjljMCwwLDQ0LjQtMjAuMSw3OS43LDguMg0KCQkJYzM2LjksMjkuOSwyNS4xLDU4LjcsNTEuMSw4My41YzIyLjQsMjIuOSw1NS43LDIyLjksNTUuNywyMi45czMzLjMsMCw1NS43LTIyLjhjMjYtMjQuNywxNC4zLTUzLjUsNTEuMS04My41DQoJCQljMzUuMi0yOC4zLDc5LjctOC4yLDc5LjctOC4yYzMwLjYtNjEuNCwxNC0xMzIuOSwxNC0xMzIuOUM2NzguMywyOTYuNyw2MzQuOSwxOTguNyw2MjMuNSwxNzAuM3ogTTI1My4xLDQxNC44DQoJCQljLTI4LjQtNTguMy0zNi4yLTEzOC4zLTE4LjMtMjAxLjVjMjMuNyw2MCw1NS45LDg2LjksOTQuMiwxMTUuM0MzMTIuOCwzNjIuMywyODIuMywzOTQuMSwyNTMuMSw0MTQuOHogTTMzNC44LDUxNy41DQoJCQljLTIyLjQtOS45LTI3LjEtMjkuNC0yNy4xLTI5LjRjMzAuNS0xOS4yLDc1LjQtNC41LDc2LjgsNDAuOUMzNjAuOSw1MTQuNywzNTMsNTI1LjQsMzM0LjgsNTE3LjV6IE00MjUuNyw2NzguNw0KCQkJYy0xNiwwLTI5LTExLjUtMjktMjUuNnMxMy0yNS42LDI5LTI1LjZzMjksMTEuNSwyOSwyNS42QzQ1NC43LDY2Ny4zLDQ0MS43LDY3OC43LDQyNS43LDY3OC43eiBNNTE2LjcsNTE3LjUNCgkJCWMtMTguMiw4LTI2LTIuOC00OS43LDExLjVjMS41LTQ1LjQsNDYuMi02MC4xLDc2LjgtNDAuOUM1NDMuOCw0ODgsNTM5LDUwNy42LDUxNi43LDUxNy41eiBNNTk4LjMsNDE0LjgNCgkJCWMtMjkuMS0yMC43LTU5LjctNTIuNC03Ni04Ni4yYzM4LjMtMjguNCw3MC42LTU1LjQsOTQuMi0xMTUuM0M2MzQuNiwyNzYuNSw2MjYuOCwzNTYuNiw1OTguMyw0MTQuOHoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==" 
                          alt="Nightly Logo" 
                          className="w-8 h-8 rounded-lg"
                        />
                      </div>
                      <span className="text-white font-medium">Nightly</span>
                    </div>
                    <button
                      onClick={installNightlyWallet}
                      className="px-4 py-1.5 bg-white text-black rounded-lg transition-colors duration-0 font-medium text-sm"
                      style={{
                        backgroundColor: '#ffffff',
                        color: '#000000'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#00d4aa';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffffff';
                        e.currentTarget.style.color = '#000000';
                      }}
                    >
                      Install
                    </button>
                  </div>

                  {/* Pontem Wallet */}
                  <div className="flex items-center justify-between p-4 border border-gray-600 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                        <img 
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4IDBDOC4wNzMwNCAwIDAgOC4wNzEzOSAwIDE3Ljk5NjNDMCAyNS4xMjk4IDQuMTczMTYgMzEuMzEwOCAxMC4yMDc2IDM0LjIyMDNWMzQuMjM1MUgxMC4yMzcyQzEyLjU4NiAzNS4zNjQ5IDE1LjIyMjggMzYgMTggMzZDMjcuOTI3IDM2IDM2IDI3LjkyODYgMzYgMTguMDAzN0MzNiA4LjA3MTM4IDI3LjkyNyAwIDE4IDBaTTE4IDEuNDc2OTJDMjcuMTA3MSAxLjQ3NjkyIDM0LjUyMjggOC44OTEwOCAzNC41MjI4IDE3Ljk5NjNDMzQuNTIyOCAyMC42MTA1IDMzLjkwOTcgMjMuMDkxNyAzMi44MjQgMjUuMjkyM0MzMC40NDU2IDI0LjE0MDMgMjguMDMwNCAyMy4yODM3IDI1LjU5MjkgMjIuNzAwM1Y4LjkyMDYyQzI1LjU5MjkgOC40NDA2MiAyNS4yMTYyIDguMDU2NjIgMjQuNzQzNSA4LjA1NjYySDIxLjcxNTJIMTQuMDg1NEgxMS4wNTdDMTAuNTkxNyA4LjA1NjYyIDEwLjIwNzYgOC40NDA2MiAxMC4yMDc2IDguOTIwNjJWMjIuNzY2OEM3Ljg0NDA3IDIzLjM1MDIgNS40OTUyOCAyNC4xOTIgMy4xODM0MiAyNS4yOTk3QzIuMDkwMjcgMjMuMDkxNyAxLjQ3NzIzIDIwLjYxNzggMS40NzcyMyAxNy45OTYzQzEuNDc3MjMgOC44OTEwOCA4Ljg5MjkgMS40NzY5MiAxOCAxLjQ3NjkyWk00LjEzNjIzIDI2Ljk2MTJDNi4wOTM1NiAyNS45OTM4IDguMTI0NzQgMjUuMjQ4IDEwLjIxNSAyNC43MzExVjMyLjU1ODhDNy43NDA2NiAzMS4yMzY5IDUuNjUwMzkgMjkuMzAyMiA0LjEzNjIzIDI2Ljk2MTJaTTE0LjA4NTQgMzQuMDQzMVYxNS42MDM3QzE0LjA4NTQgMTMuNDY5NSAxNS44MzU5IDExLjcwNDYgMTcuOTI2MSAxMS43MDQ2QzIwLjAxNjQgMTEuNzA0NiAyMS43MTUyIDEzLjQzMjYgMjEuNzE1MiAxNS41NTk0QzIxLjcxNTIgMTUuNTc0MiAyMS43MDc4IDE1LjU4ODkgMjEuNzA3OCAxNS42MDM3SDIxLjcxNTJWMjIuMDIwOUMxOS45MzUyIDIxLjgxNDIgMTguMTQ3NyAyMS43NDc3IDE2LjM2MDMgMjEuODQzN0wxNC44OTA0IDIzLjk3NzhDMTcuMTgwMSAyMy43ODU4IDE5LjQxMDcgMjMuODAwNiAyMS42MTE4IDI0LjA1MTdDMjEuNjM0IDI0LjA1MTcgMjEuNjQ4NyAyNC4wNTE3IDIxLjY3MDkgMjQuMDU5MUMyMS42ODU3IDI0LjA1OTEgMjEuNzAwNSAyNC4wNTkxIDIxLjcyMjYgMjQuMDY2NUMyMi4xMDY3IDI0LjExMDggMjMuNTAyNyAyNC4yODggMjQuNzgwNSAyNC42MDU1TDIxLjcyMjYgMjUuNjQ2OFYzNC4xMDIyQzIwLjUyNjEgMzQuMzc1NCAxOS4yODUyIDM0LjUzMDUgMTguMDE0OCAzNC41MzA1QzE2LjY0ODMgMzQuNTE1NyAxNS4zNDEgMzQuMzQ1OCAxNC4wODU0IDM0LjA0MzFaTTI1LjU4NTYgMzIuNjYyMlYyNC43NjhDMjcuNjY4NCAyNS4yOTIzIDI5LjcyOTIgMjYuMDYwMyAzMS43OTczIDI3LjA2NDZDMzAuMjQ2MiAyOS40MjAzIDI4LjEwNDIgMzEuMzU1MSAyNS41ODU2IDMyLjY2MjJaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjIyXzE2NzApIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMjIyXzE2NzAiIHgxPSIxNy45OTk3IiB5MT0iMzYuNzc4OSIgeDI9IjE3Ljk5OTciIHkyPSItNS41MTk3OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMDg1OCIgc3RvcC1jb2xvcj0iIzhEMjlDMSIvPgo8c3RvcCBvZmZzZXQ9IjAuMjM4MyIgc3RvcC1jb2xvcj0iIzk0MkJCQiIvPgo8c3RvcCBvZmZzZXQ9IjAuNDY2NyIgc3RvcC1jb2xvcj0iI0E5MkZBQyIvPgo8c3RvcCBvZmZzZXQ9IjAuNzQxMyIgc3RvcC1jb2xvcj0iI0NBMzc5MyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGMDNGNzciLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K" 
                          alt="Pontem Wallet Logo" 
                          className="w-8 h-8 rounded-lg"
                        />
                      </div>
                      <span className="text-white font-medium">Pontem Wallet</span>
                    </div>
                    <button
                      onClick={installPontemWallet}
                      className="px-4 py-1.5 bg-white text-black rounded-lg transition-colors duration-0 font-medium text-sm"
                      style={{
                        backgroundColor: '#ffffff',
                        color: '#000000'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#00d4aa';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffffff';
                        e.currentTarget.style.color = '#000000';
                      }}
                    >
                      Install
                    </button>
                  </div>

                  {/* Rimosafe */}
                  <div className="flex items-center justify-between p-4 border border-gray-600 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                        <img 
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiLz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLCAzKSBzY2FsZSgwLjgpIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjkuNTMxMSA5Ljg0MzY5VjBIMTkuNjg3NEwxOS42ODc3IDAuMDAwMzQwNTU1TDAgMC4wMDAzNDE0MTVMNC4zMjEzNGUtMDcgOS44NDQwM0g5Ljg0MzY5QzQuNDA3MTcgOS44NDQwMyAwIDE0LjI1MTIgMCAxOS42ODc3VjMwLjAwMDFIOS44NDM2OVYxOS42ODc5TDE5LjY4NzEgMzAuMDAwMUwxOS42ODcxIDE5LjY4NzdMMjkuNTMwOCA5Ljg0NDAzTDI5LjUzMTEgOS44NDQwM1Y5Ljg0MzY1TDI5LjUzMTEgOS44NDM2OVpNMTkuNjg3MSAxOS42ODc2TDE5LjY4NzEgOS44NDQwM0g5Ljg0MzY5VjE5LjY4NzZIMTkuNjg3MVpNMjkuNTMxMSA5Ljg0MzY1TDE5LjY4NzcgMC4wMDAzNDA1NTVMMjkuNTMxMSAwLjAwMDM0MDEyNVY5Ljg0MzY1Wk0xOS42ODc0IDE5LjY4NzZIMjkuNTMxMVYzMC4wMDAxSDE5LjY4NzRWMTkuNjg3NloiIGZpbGw9IiNGRjVDMjgiLz4KICA8L2c+Cjwvc3ZnPgo=" 
                          alt="Rimosafe Logo" 
                          className="w-8 h-8 rounded-lg"
                        />
                      </div>
                      <span className="text-white font-medium">Rimosafe</span>
                    </div>
                    <button
                      onClick={installRimosafe}
                      className="px-4 py-1.5 bg-white text-black rounded-lg transition-colors duration-0 font-medium text-sm"
                      style={{
                        backgroundColor: '#ffffff',
                        color: '#000000'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#00d4aa';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffffff';
                        e.currentTarget.style.color = '#000000';
                      }}
                    >
                      Install
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}