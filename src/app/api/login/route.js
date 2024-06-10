// pages/api/login.js

import { getDatabase, ref, child, get } from 'firebase/database';
import { app } from '../../../../firebase'; // Adjust the path accordingly
import { NextResponse } from 'next/server';

// Initialize Firebase Realtime Database
const db = getDatabase(app);

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Query the database to find the user with the provided email
    const snapshot = await get(child(ref(db), 'users'));
    let user = null;

    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const userData = childSnapshot.val();
        if (userData.email === email) {
          user = {
            id: childSnapshot.key,
            ...userData,
          };
        }
      });
    }

    // If user not found or password is incorrect, return error
    if (!user || user.password !== password) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // If login successful, return user data
    return NextResponse.json({ message: 'User logged in successfully', user });
  } catch (error) {
    console.error('Error logging in user:', error);
    return NextResponse.json({ error: 'Failed to log in user' }, { status: 500 });
  }
}
