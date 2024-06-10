// ExampleComponent.js
"use client";
import app from '../../../firebase';
import { getDatabase, ref, set } from 'firebase/database';

function storeDataToRealtimeDatabase(name, email) {
  const db = getDatabase(app);
  const dbRef = ref(db);
  set(dbRef, {
    name: name,
    email: email,
   
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
    const name = e.target.name.value;
    const email = e.target.email.value;
    storeDataToRealtimeDatabase(name, email);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter name" />
        <input type="email" name="email" placeholder="Enter email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
