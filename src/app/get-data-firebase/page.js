"use client";
import { useEffect, useState } from 'react';
import app from '../../../firebase';
import { getDatabase, ref, onValue, off } from 'firebase/database';

export default function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromRealtimeDatabase = () => {
      const db = getDatabase(app);
      const dbRef = ref(db); // Reference to the root node
      onValue(dbRef, (snapshot) => {
        const databaseData = snapshot.val();
        setData(databaseData); // Set the retrieved data to the state
      });
    };

    fetchDataFromRealtimeDatabase(); // Fetch data when the component mounts

    return () => {
      const db = getDatabase(app);
      off(ref(db)); // Detach the listener when the component unmounts
    };
  }, []); // Run effect only once when the component mounts

  return (
    <div>
      <h2>Database Data:</h2>
      {data ? (
        <div>
          <p>Email: {data.email}</p>
          <p>Name: {data.name}</p>
        </div>
      ) : (
        <p>No data retrieved yet.</p>
      )}
    </div>
  );
}
