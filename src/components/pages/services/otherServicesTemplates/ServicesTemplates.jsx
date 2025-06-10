"use client";
import React from "react";
import Image from "next/image";
import urArrow from "@/components/assets/urBlue.png";
import OurValues from "./commonComponents/OurValues";
import OurTech from "./commonComponents/OurTech";
import FreeTrail from "@/components/common/freeTrialBanner/FreeTrail";

const ServiceTemplates = ({ data }) => {
  const { HeroBanner, OurProcess, OurApproach } = data;

  return (
    <div className="w-full">
      <section
        className="w-full py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between min-h-screen"
        style={{
          background: `linear-gradient(180deg, ${HeroBanner[0].gradientColor[1]}, ${HeroBanner[0].gradientColor[0]})`,
        }}
      >
        <div className="text-white max-w-3xl mb-8 md:mb-10 lg:mb-0 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-semibold mb-4 md:mb-6 leading-tight">
            {HeroBanner[0].title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[25px] leading-relaxed mb-3 md:mb-4">
            {HeroBanner[0].para1}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[25px] leading-relaxed mb-6">
            {HeroBanner[0].para2}
          </p>
          <button className="bg-white text-[#4F6BF0] font-semibold py-2 sm:py-3 px-4 sm:px-6 md:px-5 rounded-md text-lg sm:text-xl md:text-2xl lg:text-[25px] flex items-center gap-2 mx-auto lg:mx-0">
            Get a Quote
            <Image src={urArrow} alt="urArrow" className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <Image
            src={HeroBanner[0].bannerImage}
            alt="Web Design Illustration"
            className="w-full h-auto"
          />
        </div>
      </section>

      <OurValues/>

      <section className="w-full py-10 sm:py-16 md:py-20 px-4 sm:px-6 bg-black text-white">
        <div className="w-full max-w-7xl mx-auto">
          <p className="text-center text-[#6366F1] font-medium text-sm sm:text-base">Our Process</p>
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-2 px-4">
            Proven method for building exceptional products
          </h2>

          <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col gap-8 sm:gap-12 md:gap-16 relative before:absolute before:left-4 sm:before:left-1/2 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#3F3F46] sm:before:transform sm:before:-translate-x-1/2">
            {OurProcess.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 md:gap-10 pl-8 sm:pl-0 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <span className="absolute left-3 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-[#4F6BF0] rounded-full z-10 top-0 sm:top-[50%] sm:translate-y-[-50%]" />

                <div className="w-full lg:w-1/2">
                  <Image
                    src={step.img}
                    alt={step.title}
                    className="rounded-md w-full h-auto"
                  />
                </div>

                <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold text-[#FFFFFF] leading-tight">
                    {step.title}
                  </h3>
                  <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-[400] leading-tight">{step.subtitle}</h4>
                  <p className="text-base sm:text-lg md:text-xl lg:text-[25px] font-[400] leading-relaxed lg:leading-[40px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10 sm:py-16 md:py-20 bg-white px-4 sm:px-6">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <p className="text-[#6366F1] font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[30px] text-center lg:text-left">
              Our Approach
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold mt-2 mb-4 sm:mb-6 text-center lg:text-left leading-tight">
              {OurApproach[0].heading}
            </h2>
            <ul className="space-y-2 text-base sm:text-lg md:text-xl lg:text-[25px] text-black font-semibold list-decimal list-inside">
              <li>A Team of Experienced Android Developers</li>
              <li>100% Transparency</li>
              <li>Excellent Technical Support</li>
              <li>99% On-time Delivery</li>
              <li>Flexible Engagements</li>
              <li>Up to 99.9% Crash-free • Cyber Secure</li>
            </ul>
          </div>

          <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
            <Image
              src={OurApproach[0].rightImage}
              alt="Approach Illustration"
              className="w-full max-w-md lg:max-w-full"
            />
          </div>
        </div>
      </section>

      <OurTech/>

      <FreeTrail/>
    </div>
  );
};

export default ServiceTemplates;