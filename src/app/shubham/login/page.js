"use client";

// pages/index.js

import React, { useState } from 'react';
import styles from '../login/login.css';


const Home = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="box-login" id="login">
          <div className="top-header">
            <h3>Hello, Again!</h3>
            <small>We are happy to have you back.</small>
          </div>
          <div className="input-group">
            <div className="input-field">
              <input
                type="text"
                className="input-box"
                id="logEmail"
                required
              />
              <label htmlFor="logEmail">email</label>
            </div>
            <div className="input-field">
              <input
                type={showPassword ? 'text' : 'password'}
                className="input-box"
                id="logPassword"
                required
              />
              <label htmlFor="logPassword">Password</label>
              <div className="eye-area">
                <div className="eye-box" onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <i className="fa-regular fa-eye-slash" id="eye-slash"></i>
                  ) : (
                    <i className="fa-regular fa-eye" id="eye"></i>
                  )}
                </div>
              </div>
            </div>
            <div className="remember">
              <input
                type="checkbox"
                id="formCheck"
                className="check"
              />
              <label htmlFor="formCheck">Remember Me</label>
            </div>
            <div className="input-field">
              <input
                type="submit"
                className="input-submit"
                value="Sign In"
                required
              />
            </div>
            <div className="forgot">
              {/* Add your forgot password link or component here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

