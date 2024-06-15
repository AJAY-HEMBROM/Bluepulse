// src/app/page.js
import Image from "next/image";
import "../components/home.css";

export const metadata = { title: "Home : Blue Pulse" };

export default function Home() {
  return (
    <div className="">
      <div className="flex m-2 justify-stretch ">
        <div className=" flex-col items-center justify-start h-screen">
          <h1 className=" mt-32 text-5xl font-bold  text-justify w-auto ">
            Save water, secure the future. Every drop counts.
          </h1>
          <p className=" mt-5 text-xl text-justify">
            The world is facing a severe water crisis and it's up to us to make
            sure that we have enough clean drinking water for our planet.
          </p>

          <section id="features" className="my-20 flex space-x-5 m-auto">
            <div className="mt-10">
              <Image
                src="/waterTank.png"
                alt="Smart Water Tank"
                height={400}
                width={300}
              />
            </div>
            <div className="p-6 mt-12">
              <h2 className="font-bold text-xl">Features</h2>
              {/* Here you can add your feature list */}
              <ul className="mt-4 list-disc">
                <li className="mb-2">Water Monitoring</li>
                <li className="mb-2">Motor On/Off Control</li>
                <li className="mb-2">Water Quality Prediction</li>
                <li className="mb-2">
                  Water Challan for Excessive Water Consumption
                </li>
              </ul>
            </div>
          </section>

          <div></div>
        </div>
        <div>
          <div>
            <Image
              src="/water.png"
              alt="Smart Water Tank"
              height={400}
              width={1200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
