import React from "react";
import { ArrowUpRight } from "lucide-react";
import bgImg from "../../../assets/520fcbdbca76a8a90a8231bf5470c454532ba6b4.jpg";

export default function TeamBanner() {
  return (
    <div className="relative h-[197px] sm:h-[400px] md:h-[90vh] py-8 sm:py-10 flex items-center overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          filter: "brightness(0.4)",
        }}
      />

      <div className="relative z-10 text-white px-6 sm:px-12 lg:px-24">
        <h1 className="text-[10px] sm:text-[20px] lg:text-[55px] font-[400] leading-[28px] lg:leading-[68px] mb-8">
          “Meet the Passionate Minds Behind JobQuick – A Team
          <br />
          Committed to Revolutionizing HR, Payroll, and Staffing Solutions"
        </h1 >

        <button className="mt-4 md:mt-8 px-2 sm:px-3 md:px-6 py-0.5 md:py-3 bg-[#4F6BF0] text-white font-semibold rounded-sm md:rounded-md flex items-center gap-1 md:gap-2 text-[9px] sm:text-[18px] lg:text-[25px]">
          Get a Quote <ArrowUpRight className="w-[10px] md:w-[16px]" />
        </button>
      </div>

    </div>
  );
}
