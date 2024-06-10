// ExampleComponent.js
"use client";
// ExampleComponent.js
import React from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import app from '../../../firebase';

function storeDataToRealtimeDatabase(Led_Status, Motor) {
  const db = getDatabase(app);
  const dbRef = ref(db);
  set(dbRef, {
    Led_Status: Led_Status,
    Motor: Motor,
  })
  .then(() => {
    alert('Data added to Realtime Database');
  })
  .catch((error) => {
    console.error('Error adding data to Realtime Database:', error);
    alert('Failed to add data to Realtime Database');
  });
}

export default function ExampleComponent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const Led_Status = e.target.name.value;
    const Motor = e.target.email.value;
    storeDataToRealtimeDatabase(Led_Status, Motor);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="LED status" />
        <input type='text' name="email" placeholder="Motor" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
