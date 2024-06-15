import React from 'react';
import Image from 'next/image';
import "../dashboard-3/dashboard.css";

const AboutUsPage = () => {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8"></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
          <img src="https://wallpaperaccess.com/full/2003866.jpg" alt="Image Description" />
          </div>
          <div className="space-y-4 text-justify">
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-700">
                At Blue Pulse, our mission is to provide innovative solutions for water management and conservation, ensuring a sustainable future for generations to come.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p className="text-gray-700">Email: ajayhembromofficial2001@gmail.com</p>
              <p className="text-gray-700">Phone: 8789901606</p>
              <p className="text-gray-700">Address: Kathalbari, Sahibganj, Jharkhand, 816101, India</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Meet Our Team</h3>
              <ul className="list-disc">
                <li>Ajay Hembrom</li>
                <li>Raju Soren</li>
                <li>Sagar Oraon</li>
                <li>Lal Babu Murmu</li>
                <li>Shubham Soren</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
