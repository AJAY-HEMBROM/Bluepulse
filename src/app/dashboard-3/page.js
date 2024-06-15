// app/pages/index.js

import WaterTankVisualization from "../../components/WaterTankVisualization";
import "../dashboard-3/dashboard.css";
import Link from "next/link";

export const metadata = {
  title: "Dashboard",
};

const Home = () => {
  return (
    <div className="flex-col h-50 p-20">
      <div className="typewriter text-center text-3xl">
        <h1>WATER TANK</h1>
        <WaterTankVisualization />
      </div>
      <Link href="http://127.0.0.1:5000/">
      click here to test
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Water Quality</button>
      </Link> 
    </div>
  );
};

export default Home;
