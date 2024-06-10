"use client";
import React from "react";
import Link from 'next/link';

const CustomNavbar = () => {
  return (
    <nav className=" h-8 py-2 px-3 text-opacity-100 text-white flex justify-between items-center">
      <div className="brand">
        <h1 className="p-4">
          <a href="/">Smart Water Tank</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-3">
          <li>
            <Link href="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link href="/dashboard-3" className="hover:text-blue-500">Dashboard</Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-blue-500">About Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3">
          <li>
            <Link href="/login" className="hover:text-blue-500">Login</Link>
          </li>
          <li>
            <Link href="/sign-up" className="hover:text-blue-500">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
