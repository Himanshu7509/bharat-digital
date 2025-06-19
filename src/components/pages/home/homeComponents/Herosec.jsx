"use client";
import React, { useState, useEffect } from "react";
import bg1 from "@/components/assets/Background.png";
import bg2 from "@/components/assets/Background2.png";
import bg3 from "@/components/assets/Background3.png";
import Link from "next/link";

const slides = [
  {
    background: bg1.src,
    title: "SMART DIGITAL\nBUSINESS FOR\nSOLUTIONS",
    text: "We provide smart, digital solutions to help businesses grow and adapt. By using modern technology, we streamline operations and drive real results through tailored strategies.",
  },
  {
    background: bg2.src,
    title: "BHARAT DIGITAL\nENHANCES BUSINESS\nEFFICIENCY AND GROWTH",
    text: "Bharat Digital enhances business efficiency through smart, tech-driven solutions.We drive sustainable growth by transforming operations and strategy.",
  },
  {
    background: bg3.src,
    title: "FUTURE-READY\nDIGITAL SOLUTIONS\nFOR BUSINESS GROWTH",
    text: "Bharat Digital blends technology and strategy to unlock your business potential.We simplify workflows, enhance productivity, and accelerate success.",
  },
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
    <div className="relative w-full  h-[197px] sm:h-[400px] md:h-[90vh] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${slides.length * 100}vw`,
          transform: `translateX(-${activeIndex * 100}vw)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-screen md:h-screen bg-cover bg-center flex items-center px-4 sm:px-8 md:px-16 py-6"
            style={{
              backgroundImage: `url(${slide.background})`,
            }}
          >
            <div className="flex justify-between items-center w-full">
              {/* Left Content */}
              <div className="w-[65%] md:max-w-[850px]">
                <h1 className="whitespace-pre-line text-[16px] sm:text-[40px] md:text-[60px] lg:text-[72px] xl:text-[80px] leading-tight font-bold uppercase bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                  {slide.title}
                </h1>

                <p className="mt-6 text-white text-[6px] sm:text-[12px] md:text-[20px] lg:text-[22px] max-w-[680px] leading-relaxed">
                  {slide.text}
                </p>

                <Link href="/portfolio">
                <button className="mt-6 w-[60px] sm:w-[200px] cursor-pointer md:w-[215px] h-[22px] sm:h-[60px] flex justify-center items-center bg-[#4F6BF0] text-white font-semibold text-[6px] sm:text-[18px] rounded-sm">
                  VIEW OUR WORKS
                </button>
                </Link>
              </div>

              {/* Numbered Dots */}
              <div className="hidden md:flex flex-col gap-6 items-center mr-4">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-[44px] h-[44px] rounded-full flex items-center justify-center text-[18px] transition-all ${
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
