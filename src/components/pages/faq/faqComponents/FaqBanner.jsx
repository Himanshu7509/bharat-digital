import React from 'react';
import { ChevronDown } from 'lucide-react';
import bgImg from '../../../assets/520fcbdbca76a8a90a8231bf5470c454532ba6b4.jpg';

export default function FaqBanner() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          filter: 'brightness(0.4)', // darker background for better text visibility
        }}
      />

      {/* Content aligned to the left */}
      <div className="relative z-10 text-white px-6 sm:px-12 lg:px-24">
        <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-8">
          “Meet the  Passionate Minds Behind JobQuick – A Team<br />
          Committed to Revolutionizing HR, Payroll, and Staffing Solutions"
        </h1>

        <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          Get a Quote
          <svg 
            className="ml-2 w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </button>
      </div>

      {/* Scroll Down Indicator */}
      {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all duration-300 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </div> */}
    </div>
  );
}
