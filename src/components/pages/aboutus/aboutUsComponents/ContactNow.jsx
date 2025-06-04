// components/SeoBanner.jsx
"use client";

import React from "react";
import Image from "next/image";
import bgImage from "../../../assets/e84d754614f9083a423a417c72590bbdd1441206 (1).png";

const ContactNow = () => {
  return (
  <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
  {/* Background Image */}
  <Image
    src={bgImage}
    alt="SEO Background"
    fill
    className="object-cover"
    priority
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-200 z-0"></div>

  {/* Content */}
  <div className="relative z-10 flex items-center justify-between h-full px-6 md:px-12 lg:px-16">
    {/* Text Section */}
    <div className="flex flex-col space-y-2 md:space-y-4">
      <div className="inline-flex items-center">
        <span className="text-blue-400 text-sm md:text-base font-medium">
          • Start your free trail •
        </span>
      </div>
      <div>
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
          Ready To Take Your
          <br />
          <span className="text-white">SEO To The Next Level?</span>
        </h2>
      </div>
    </div>

    {/* Button */}
    <div className="flex-shrink-0 ml-6">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg transition-colors duration-300 text-sm md:text-base lg:text-lg shadow-lg hover:shadow-xl">
        CONTACT NOW
      </button>
    </div>
  </div>
</div>

  );
};

export default ContactNow;