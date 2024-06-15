"use client";
import { useState } from 'react';
import "../../components/login.css"; // Import CSS module for styling
import firebaseApp from '../../../firebase';
const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userData = {
      firstName,
      lastName,
      email,
      password,
      displayName: `${firstName} ${lastName}` // Combine first name and last name for display name
    };
  
    try {
      const response = await fetch('/api/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
  
      if (response.ok) {
        // Show alert about successful sign-up
        window.alert('User signed up successfully!');
        
        // Reset form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
      } else {
        console.error('Failed to sign up user:', response.statusText);
      }
    } catch (error) {
      console.error('Error signing up user:', error.message);
    }
  };
  

  return (
    <div  className="container">
      <form className="form-container " onSubmit={handleSubmit}>
      <div className="form-group ">
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit" className="submit-btn">Sign Up</button>
    </form>
    </div>
    
    
  );
};

export default SignUp;