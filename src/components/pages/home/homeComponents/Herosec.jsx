'use client';
import React, { useState, useEffect } from "react";
import bg1 from "@/components/assets/Background.png";
import bg2 from "@/components/assets/Background2.png";
import bg3 from "@/components/assets/Background3.png";

const slides = [
  {
    background: bg1.src,
    title: "Smart Digital\nBusiness For\nSolutions",
    text: "We specialize in a comprehensive range of services, including branding, digital marketing, content creation, and web design, all to meet the needs of each client."
  },
  {
    background: bg2.src,
    title: "Bharat Digital\nEnhances Business\nEfficiency and Growth",
    text: "We specialize in a comprehensive range of services, including branding, digital marketing, content creation, and web design, all to meet the needs of each client."
  },
  {
    background: bg3.src,
    title: "Smart Digital\nBusiness For\nSolutions",
    text: "We specialize in a comprehensive range of services, including branding, digital marketing, content creation, and web design, all to meet the needs of each client."
  }
];

const Herosec = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${activeIndex * 100}vh)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-screen bg-cover bg-center flex items-center justify-between px-20"
            style={{
              backgroundImage: `url(${slide.background})`,
            }}
          >
            <div className="flex justify-between items-center w-full">
              <div>
                <h1 className="whitespace-pre-line text-[80px] font-bold w-[686px] text-[#FEFEFE] uppercase leading-[95px]">
                  {slide.title}
                </h1>
                <p className="mt-6 w-[790px] text-[24px] text-[#F9F9F9]">
                  {slide.text}
                </p>
                <button className="w-[215px] h-[72px] flex rounded-sm justify-center items-center bg-[#4F6BF0] text-white font-semibold text-[20px] mt-5">
                  VIEW OUR WORKS
                </button>
              </div>
              <div className="relative z-10 flex flex-col gap-10 items-center">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-[44px] h-[44px] flex items-center justify-center rounded-full text-[20px] transition-all ${
                      activeIndex === i
                        ? "bg-[#284BFF] text-white"
                        : "border border-white text-white"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Herosec;
