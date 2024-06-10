import React from 'react';
import "../dashboard-3/dashboard.css";
export const metadata = {
  title: "About-us"
};

const ShowTask = () => {
  return (
    <section id="contact" className="py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">Address</h3>
        <p>Kathalbari</p>
        <p>Sahibganj, Jharkhand, 816101</p>
        <p>India</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
        <p>Email: ajayhembromofficial2001@gmail.com</p>
        <p>Phone: 8789901606</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Team Members</h3>
        <ul>
          <li>
            Ajay Hembrom
          </li>
          <li>
            Raju Soren
          </li>
          <li>
            Sagar Oraon
          </li>
          <li>
            Lal Babu Murmu
          </li>
          <li>
            Subham Soren
          </li>
        </ul>
      </div>
    </div>
    
    
  </div>
</section>

  );
};

export default ShowTask;
