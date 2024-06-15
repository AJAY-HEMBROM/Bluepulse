// src/context/authContext.js
"use client"
// src/context/authContext.js
import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const login = () => {
    console.log('Login function called'); // Debug log
    setIsAuthenticated(true);
    router.push('/');
  };

  const logout = () => {
    console.log('Logout function called'); // Debug log
    setIsAuthenticated(false);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log('useAuth called, context:', context); // Debug log
  return context;
};

