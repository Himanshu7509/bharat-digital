"use client";
import React, { useState } from "react";
import Image from "next/image";
import double from "@/components/assets/qotas.png";
import img1 from "@/components/assets/image4.png";
import img2 from "@/components/assets/image5.png";
import img3 from "@/components/assets/image6.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    message:
      "It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
    name: "Jimmy Bartney",
    title: "Product Manager at Picko Lab",
    image: img1,
  },
  {
    message:
      "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
    name: "Natasha Romanoff",
    title: "Black Widow",
    image: img2,
  },
  {
    message:
      "“The best”! That’s what I want to say to this platform, didn’t know that there’s a platform to help you manage your business expenses like this! Very recommended to you who have a big business!",
    name: "Moritika Kazuki",
    title: "Finance Manager at Mangan",
    image: img3,
  },
   {
    message:
      "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
    name: "Natasha Romanoff",
    title: "Black Widow",
    image: img2,
  },
];

const OurClient = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-[#0E0E0E] text-white px-4 py-16 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-[55px] font-semibold mb-2">Our Client Feedback</h2>
        <p className="text-[#FFFFFF] text-[25px] font-light max-w-2xl mx-auto">
          We actively seek and encourage feedback from our clients to ensure we
          are meeting their needs and expectations
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        <div className="flex justify-center gap-6 transition-all duration-500">
          {reviews.map((item, index) => (
            <div
              key={index}
              className={`min-w-[300px] max-w-[400px] bg-white text-black rounded-xl p-6 space-y-6 ${
                index === currentIndex ? "block" : "hidden"
              } md:block`}
            >
              <Image src={double} alt="quote" width={30} height={30} />
              <p className="text-base leading-7">{item.message}</p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-300">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-black">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={prevSlide}
            className="bg-[#181818] text-white p-3 rounded-full hover:bg-[#2e2e2e]"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-gradient-to-r from-[#4F6BF0] to-[#00D1FF] text-white p-3 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
