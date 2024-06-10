"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import "../components/login.css"; 

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Login successful
        alert("Login successful");
        window.location.href = '/';
      } else {
        const data = await response.json();
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Failed to login. Please try again later.');
    }
  }

  return (
    <div className='container'>
      <div>
        <form className="form-container" onSubmit={handleSubmit}>
          {error && <div>{error}</div>}
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" placeholder="Password" required />
          </div>
          <button className="submit-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
