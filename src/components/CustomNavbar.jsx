'use client';

import React from "react";
import { useAuth } from '../app/context/authContext';
import Link from 'next/link';

const CustomNavbar = () => {
  const { isAuthenticated, logout } = useAuth();
  console.log('CustomNavbar rendered, isAuthenticated:', isAuthenticated); // Debug log

  return (
    <nav className="h-8 py-2 px-3 text-opacity-100 text-white flex justify-between items-center">
      <div className="brand">
        <h1 className="p-4">
          <Link href="/">
            <p>Blue Pulse</p>
          </Link>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-3">
          <li>
            <Link href="/">
              <p className="hover:text-blue-500">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/dashboard-3">
              <p className="hover:text-blue-500">Dashboard</p>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <p className="hover:text-blue-500">About Us</p>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3">
          {isAuthenticated ? (
            <li>
              <button onClick={logout} className="hover:text-blue-500">Logout</button>
            </li>
          ) : (
            <>
              <li>
                <Link href="/login">
                  <p className="hover:text-blue-500">Login</p>
                </Link>
              </li>
              <li>
                <Link href="/sign-up">
                  <p className="hover:text-blue-500">Sign Up</p>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
