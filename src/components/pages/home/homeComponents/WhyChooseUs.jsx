"use client";
import React from "react";
import Image from "next/image";
import banner from "@/components/assets/banner-image.png";
import arrow from "@/components/assets/Vector.png";


const WhyChooseUs = () => {
  return (
    <div className="w-full flex justify-center items-center bg-[#0B0C0F] py-16">
      <div className="w-[90%] flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={banner}
            alt="Banner"
            className="rounded-sm object-cover w-[706px] h-[711px]"
          />
        </div>

        <div className="w-full md:w-1/2 text-white">
         
          <p className="text-[#4F6BF0] uppercase text-[25px] mb-2 flex items-center">
            WHY CHOOSE US
            <span>
              <Image
                src={arrow}
                alt="Arrow"
                width={80}
                height={9}
                className="ml-2"
              />
            </span>
          </p>

          <h2 className="Heading leading-[60px]">
            Grow Your Brand With Our Social Media A-Team.
          </h2>

          <p className="text-[#C4C4C4] text-[25px] leading-[33px] mb-6">
            We understand your needs and deliver digital marketing through
            unique selling one top proposition. Our team of expert is passionate
            about helping you Social med company.
          </p>

          <h3 className="text-[30px] font-medium leading-[30px] mb-2">
            Nexaq Platform
          </h3>
          <p className="mb-4 text-[25px] font-semibold text-[#C4C4C4]">Feature:</p>

          {/* Bullet List with Raleway */}
          <ul className="space-y-4 text-[20px] text-[#C4C4C4] font-medium font-[Raleway]">
            <li className="flex gap-2">
              <span className="text-[#7572FD] text-lg">●</span>
              <span>
                <span className="font-semibold text-white">Create engaging content:</span>{" "}
                Eye-catching visual, informative caption, & interactive elements can
                all help you capture attention and stop the scroll.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#7572FD] text-lg">●</span>
              <span>
                <span className="font-semibold text-white">Plan and schedule posts:</span>{" "}
                Schedule your content advance to ensure consistent presence and maintain a
                steady flow of communication.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#7572FD] text-lg">●</span>
              <span>
                <span className="font-semibold text-white">Curate valuable content:</span>{" "}
                Share relevant content for industry leader influencers to establish
                credibility and provide a well-rounded perspective.
              </span>
            </li>
          </ul>

          {/* CTA Button */}
          <button className="mt-6 bg-gradient-to-r from-[#4F6BF0] to-[#25BAC3] text-white px-6 py-3 rounded-sm font-semibold text-[25px]">
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
