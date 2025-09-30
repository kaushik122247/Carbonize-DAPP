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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border border-gray-700 text-white max-w-md">
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
                <span className="text-blue-400 hover:underline cursor-pointer">Privacy Policy</span>.
                <br />
                Powered by <span className="text-gray-400">⚡ Aptos Labs</span>
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
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">P</span>
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
                      onClick={connectWithOKXWallet}
                      className="px-4 py-1.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm"
                    >
                      Install
                    </button>
                  </div>

                  {/* Nightly */}
                  <div className="flex items-center justify-between p-4 border border-gray-600 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      </div>
                      <span className="text-white font-medium">Nightly</span>
                    </div>
                    <button
                      onClick={connectWithNightly}
                      className="px-4 py-1.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm"
                    >
                      Install
                    </button>
                  </div>

                  {/* Pontem Wallet */}
                  <div className="flex items-center justify-between p-4 border border-gray-600 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">P</span>
                      </div>
                      <span className="text-white font-medium">Pontem Wallet</span>
                    </div>
                    <button
                      onClick={connectWithPontemWallet}
                      className="px-4 py-1.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm"
                    >
                      Install
                    </button>
                  </div>

                  {/* Rimosafe */}
                  <div className="flex items-center justify-between p-4 border border-gray-600 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">R</span>
                      </div>
                      <span className="text-white font-medium">Rimosafe</span>
                    </div>
                    <button
                      onClick={connectWithRimosafe}
                      className="px-4 py-1.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm"
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