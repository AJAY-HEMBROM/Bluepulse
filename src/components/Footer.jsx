"use client";
import React from "react";


const Footer = () => {
  return (
    <footer className="h-40 mt-60  text-white w-full ">
  <div className="flex justify-around p-5">
    <div className="text-center flex flex-col justify-center">
      <h1 className="text-3xl">Smart Water Tank</h1>
      <p>IOT based project</p>
    </div>
    <div className="text-sm flex flex-col justify-center">
      <ul className="text-base flex flex-col text-white">
        <div>contact us</div>
        <div className="ml-6">
          <li className="my-2">
            <a href="https://www.facebook.com/ajay.hembrom1395">
              <img
                src="/facebook.png"
                alt="Facebook"
                style={{ width: "20px", height: "20px" }}
                className="icon hover:opacity-50"
              />
            </a>
          </li>
          <li className="my-2">
            <a href="https://www.instagram.com/erwin_arsen/">
              <img
                src="/instagram.png"
                alt="Instagram"
                style={{ width: "20px", height: "20px" }}
                className="icon hover:opacity-50"
              />
            </a>
          </li>
          <li className="my-2">
            <a href="https://www.linkedin.com/in/ajay-hembrom-676b2b203/">
              <img
                src="/linkedin.png"
                alt="LinkedIn"
                style={{ width: "20px", height: "20px" }}
                className="icon hover:opacity-50"
              />
            </a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</footer>

  );
};

export default Footer;
