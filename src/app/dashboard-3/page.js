// app/pages/index.js

import WaterTankVisualization from '../../components/WaterTankVisualization';
import "../dashboard-3/dashboard.css";

export const metadata = {
  title: "Dashboard"};


const Home = () => {
  return (
    <div className='h-50 p-20'>
      <div className='typewriter text-center text-3xl  '>
      <h1>WATER TANK</h1>
      < WaterTankVisualization />
    </div>
    </div>
    
  );
};

export default Home;
