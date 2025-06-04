"use client"

import React from 'react';

const Timeline = () => {
  const timelineData = [
    {
      date: "January 2011",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      date: "January 2012", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      date: "March 2013",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      date: "January 2014",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-20">
          {/* Left side - Title and Timeline Visual */}
          <div className="flex-1 max-w-lg">
            <div className="mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-2 leading-tight">Timeline</h1>
              <h2 className="text-5xl font-bold text-blue-500 leading-tight">Our History</h2>
            </div>
            
            {/* Timeline Visual */}
            <div className="relative mt-16 flex items-center">
              {/* Horizontal lines */}
              <div className="flex flex-col gap-2 mr-8">
                <div className="w-20 h-1 bg-black"></div>
                <div className="w-20 h-1 bg-black"></div>
                <div className="w-20 h-1 bg-black"></div>
                <div className="w-20 h-1 bg-black"></div>
                <div className="w-20 h-1 bg-black"></div>
                <div className="w-20 h-1 bg-blue-400"></div>
                <div className="w-20 h-1 bg-black"></div>
                <div className="w-20 h-1 bg-black"></div>
                <div className="w-20 h-1 bg-black"></div>
                <div className="w-20 h-1 bg-black"></div>
                <div className="w-20 h-1 bg-black"></div>
              </div>
              
              {/* Circle with years */}
              <div className="relative">
                <div className="w-56 h-56 border-4 border-black rounded-full relative bg-white flex items-center justify-center">
                  {/* Center year - 2012 */}
                  <div className="text-6xl font-bold text-black">
                    2012
                  </div>
                  
                  {/* Years positioned around the circle */}
                  <div className="absolute -top-8 left transform -translate-x-1/2 text-gray-400 text-4xl font-bold">
                    2011
                  </div>
                  
                  <div className="absolute -bottom-8 left transform -translate-x-1/2 text-gray-400 text-4xl font-bold">
                    2013
                  </div>
                  
                  {/* Blue arc - top right quadrant */}  
                  <div className="absolute -inset-1">
                    <svg className="w-full h-full" viewBox="0 0 232 232">
                      <path
                        d="M 116 8 A 108 108 0 0 1 224 116"
                        fill="none"
                        stroke="#60A5FA"
                        strokeWidth="6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Timeline Content */}
          <div className="flex-1 max-w-lg pt-4">
            <div className="space-y-10">
              {timelineData.map((item, index) => (
                <div key={index} className="pb-4">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">
                    {item.date}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {item.description}
                  </p>
                  {index < timelineData.length - 1 && (
                    <div className="mt-8 w-full h-px bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;