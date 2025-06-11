"use client";
import React from "react";
import Image from "next/image";
import banner from "@/components/assets/banner-image.png";
import arrow from "@/components/assets/Vector.png";

const WhyChooseUs = () => {
  return (
    <div className="w-full flex justify-center items-center bg-[#0B0C0F] py-12 sm:py-16">
      <div className="w-[92%] flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={banner}
            alt="Banner"
            className="w-full h-auto rounded-sm object-cover max-w-[90%] md:max-w-full mx-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-white">
          <p className="text-[#4F6BF0] uppercase text-[5vw] sm:text-[3vw] md:text-[1.6vw] mb-2 flex items-center">
            WHY CHOOSE US
            <span className="ml-2">
              <Image
                src={arrow}
                alt="Arrow"
                width={60}
                height={8}
                className="inline-block"
              />
            </span>
          </p>

          <h2 className="font-bold leading-tight text-[6vw] sm:text-[4.5vw] md:text-[2.7vw] lg:text-[55px] Heading mb-4">
            Grow Your Brand With Our Social Media A-Team.
          </h2>

          <p className="text-[#C4C4C4] text-[4.5vw] sm:text-[3.5vw] md:text-[1.5vw] leading-relaxed mb-6">
            We understand your needs and deliver digital marketing through unique
            selling one top proposition. Our team of expert is passionate about
            helping you Social med company.
          </p>

          <h3 className="text-[5vw] sm:text-[3.5vw] md:text-[1.8vw] font-medium leading-snug mb-2">
            Nexaq Platform
          </h3>
          <p className="mb-4 text-[4.5vw] sm:text-[3.5vw] md:text-[1.5vw] font-semibold text-[#C4C4C4]">
            Feature:
          </p>

          {/* Bullet List */}
          <ul className="space-y-4 text-[4vw] sm:text-[3vw] md:text-[1.3vw] text-[#C4C4C4] font-medium ">
            <li className="flex gap-2 items-start">
              <span className="text-[#7572FD] text-lg">●</span>
              <span>
                <span className="font-semibold text-white">Create engaging content:</span>{" "}
                Eye-catching visuals, informative captions, and interactive elements help capture attention and stop the scroll.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-[#7572FD] text-lg">●</span>
              <span>
                <span className="font-semibold text-white">Plan and schedule posts:</span>{" "}
                Schedule in advance to ensure consistent presence and steady communication.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-[#7572FD] text-lg">●</span>
              <span>
                <span className="font-semibold text-white">Curate valuable content:</span>{" "}
                Share industry-relevant content to establish credibility and perspective.
              </span>
            </li>
          </ul>

          <button className="mt-6 bg-gradient-to-r from-[#4F6BF0] to-[#25BAC3] text-white px-6 py-3 rounded-sm font-semibold text-[4.5vw] sm:text-[3vw] md:text-[1.5vw]">
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
