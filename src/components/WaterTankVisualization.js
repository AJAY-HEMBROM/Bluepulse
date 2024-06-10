// src/components/WaterTankVisualization.js
"use client";
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import firebase from '../../firebase';
import "../app/dashboard-3/dashboard.css";

const TankHeight = 500; // Height of the tank in centimeters
const ThresholdLimit = 350; // Threshold limit for water consumption

const WaterTankVisualization = () => {
  const [tankHeight, setTankHeight] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [motorOn, setMotorOn] = useState(false); // State for motor

  useEffect(() => {
    const database = getDatabase();
    const dataRef = ref(database);
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      const tankHeightFromDB = data && data.HEIGHT ? data.HEIGHT : 0;
      const calculatedPercentage = (tankHeightFromDB / TankHeight) * 100;
      const clampedPercentage = Math.min(100, Math.max(0, calculatedPercentage));
      setPercentage(clampedPercentage);
      setTankHeight(tankHeightFromDB);

      // Check if water consumption exceeds threshold
      if (tankHeightFromDB > ThresholdLimit) {
        alert('Water consumption has exceeded the threshold limit.');
        const emailData = {
          subject: 'Water Consumption Exceeded Limit',
          message: `Warning: Water consumption has exceeded the threshold limit. Current consumption: ${tankHeightFromDB} liters.`,
        };

        // Make a POST request to send email
        fetch('http://localhost:3000/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        })
          .then(response => {
            if (response.ok) {
              console.log('Email sent successfully');
            } else {
              console.error('Failed to send email');
            }
          })
          .catch(error => {
            console.error('Error sending email:', error);
          });
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleMotor = () => {
    setMotorOn(prevState => !prevState); // Toggle motor state

    // Update motor status in the database
    const database = getDatabase();
    const motorRef = ref(database, 'MOTOR_CONTROL');
    set(motorRef, motorOn ? 0: 1); // Update motor status to 'on' if currently off, and vice versa
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
        <svg width="200" height="200">
          {/* Tank */}
          <rect x="50" y="20" width="100" height="180" fill="#ccc" stroke="#000" strokeWidth="2" />
          {/* Water */}
          <rect x="50" y={200 - (tankHeight / TankHeight) * 180} width="100" height={(tankHeight / TankHeight) * 180} fill="#007bff" />
        </svg>
        {/* Tank level value */}
        <div style={{ marginLeft: '10px' }}>
          <p style={{ fontSize: '16px', marginBottom: '5px' }}>{percentage.toFixed(2)}%</p>
          <p style={{ fontSize: '12px', color: 'white' }}>Percentage</p>
        </div>
        {/* On/Off button for motor */}
        <button style={{ marginLeft: '20px', padding: '5px 10px', fontSize: '14px' }} onClick={toggleMotor}>Motor {motorOn ? 'Off' : 'On'}</button>
      </div>
    </div>
  );
};

export default WaterTankVisualization;
