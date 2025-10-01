"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { setCookie, deleteCookie } from '@/lib/cookies';

interface AuthContextType {
  user: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (userInfo: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in (localStorage)
    const savedUser = localStorage.getItem('carbonize_user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
        
        // Ensure cookie is set for middleware
        setCookie('carbonize_auth', JSON.stringify({ isAuthenticated: true, user: parsedUser }), 7);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('carbonize_user');
        deleteCookie('carbonize_auth');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (userInfo: any) => {
    setUser(userInfo);
    setIsAuthenticated(true);
    localStorage.setItem('carbonize_user', JSON.stringify(userInfo));
    
    // Set cookie for middleware authentication check
    setCookie('carbonize_auth', JSON.stringify({ isAuthenticated: true, user: userInfo }), 7);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('carbonize_user');
    
    // Remove auth cookie
    deleteCookie('carbonize_auth');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}