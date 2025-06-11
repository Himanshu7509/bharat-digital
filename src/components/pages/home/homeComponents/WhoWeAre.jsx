"use client";
import React from "react";
import Image from "next/image";
import Img1 from "@/components/assets/w1.png";
import Img2 from "@/components/assets/w2.png";
import arrow from "@/components/assets/Vector.png";

const WhoWeAre = () => {
  return (
    <div className="bg-[#0B0C0F] px-4 sm:px-6 md:px-[5%] py-10 w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-[1400px]">
        {/* Title & Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <p className="text-xl sm:text-2xl md:text-[25px] text-white uppercase flex items-center">
            Who We Are
            <span className="ml-2">
              <Image src={arrow} alt="Arrow" width={60} height={8} />
            </span>
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold leading-snug text-white max-w-3xl">
            Axleo is a business that provides services <br className="hidden md:block" />
            related to online marketing.
          </h2>
        </div>

        {/* Images + Description */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <Image
            src={Img1}
            alt="Team Working"
            className="w-full md:w-1/3 h-auto object-cover rounded"
          />
          <Image
            src={Img2}
            alt="Office View"
            className="w-full md:w-1/3 h-auto object-cover rounded"
          />
          <div className="w-full md:w-1/3">
            <p className="text-[#C4C4C4] mb-6 text-base sm:text-lg md:text-[20px] leading-relaxed font-light">
              Digital agencies can vary in size and specialization. Some may
              focus on specific niches, such as healthcare or e-commerce, while
              others may offer a comprehensive.
            </p>
            <button className="bg-gradient-to-r from-[#4F6BF0] to-[#25BAC3] text-white font-semibold rounded-sm w-full sm:w-[210px] h-[60px] sm:h-[75px] text-lg sm:text-[25px] flex justify-center items-center">
              About Us
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-10 border border-[#2F2F2F] flex flex-wrap justify-evenly items-center text-center w-full py-6 gap-y-6">
          {[
            { number: "70+", label: "World Customer" },
            { number: "70+", label: "Positive Rating" },
            { number: "20+", label: "Total Branch" },
            { number: "16+", label: "Year Experience" },
          ].map((stat, idx) => (
            <div key={idx} className="w-1/2 sm:w-1/4">
              <p className="text-4xl sm:text-[45px] font-semibold text-white">
                {stat.number}
              </p>
              <p className="text-[#C4C4C4] mt-2 text-base sm:text-xl leading-[26px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
