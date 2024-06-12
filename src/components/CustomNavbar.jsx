"use client";
import React from "react";
import Link from 'next/link';

const CustomNavbar = () => {
  return (
    <nav className=" h-8 py-2 px-3 text-opacity-100 text-white flex justify-between items-center">
      <div className="brand">
        <h1 className="p-4">
          <a href="/">Blue Pulse</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-3">
          <li>
            <a href="/" className="hover:text-blue-500">Home</a>
          </li>
          <li>
            <a href="/dashboard-3" className="hover:text-blue-500">Dashboard</a>
          </li>
          <li>
            <a href="/about-us" className="hover:text-blue-500">About Us</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3">
          <li>
            <a href="/login" className="hover:text-blue-500">Login</a>
          </li>
          <li>
            <a href="/sign-up" className="hover:text-blue-500">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
