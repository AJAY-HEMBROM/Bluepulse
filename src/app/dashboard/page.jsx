// pages/index.js
import React from 'react';
import WaterTank from '../../components/WaterTank';

const IndexPage = () => {
  // Dummy data
  const maxCapacity = 1000; // Max capacity of the tank
  const waterLevel = 950; // Current water level

  return (
    <div className="container flex justify-center">
      <div>
      <h1 className='text-2xl mb-2'>Smart Water Tank </h1>
      <WaterTank waterLevel={waterLevel} maxCapacity={maxCapacity} />
      <p>Water Level: {waterLevel} liters</p>
      <p>Max Capacity: {maxCapacity} liters</p>
      </div>
      <div className='space-x-5 mt-44 ml-10'>
        <div className='text-2xl'>MOTOR SWITCH</div>
        <button className='bg-green-600 w-20'>ON</button>
        <button className='bg-red-700 w-20'>OFF</button>
      </div>
    </div>
  );
};

export default IndexPage;
