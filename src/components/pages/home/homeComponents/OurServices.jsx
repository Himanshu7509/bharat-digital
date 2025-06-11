"use client";
import React from "react";
import Image from "next/image";
import arrow from "@/components/assets/Vector.png";
import webIcon from "@/components/assets/web.png";
import appIcon from "@/components/assets/app.png";
import uiIcon from "@/components/assets/ui.png";
import urarrow from "@/components/assets/ur-arrow.png";
import Link from "next/link";

const services = [
  {
    title: "Web Design & Development",
    description:
      "We craft visually stunning, user-friendly, and high-performance websites.",
    icon: webIcon,
  },
  {
    title: "App Development",
    description:
      "We craft visually stunning, user-friendly, and high-performance websites.",
    icon: appIcon,
  },
  {
    title: "UI/UX Design",
    description:
      "We craft visually stunning, user-friendly, and high-performance websites.",
    icon: uiIcon,
  },
];

const OurServices = () => {
  return (
    <div className="w-full bg-[#0B0C0F] py-16 sm:py-20 flex justify-center items-center">
      <div className="w-[90%] max-w-[1400px] flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <p className="text-[#4F6BF0] text-lg sm:text-xl md:text-[25px] font-raleway uppercase flex items-center">
            OUR SERVICES
            <Image
              src={arrow}
              alt="Arrow"
              width={60}
              height={8}
              className="ml-2"
            />
          </p>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] Heading font-semibold text-white leading-snug">
              Turn Information Into Actionable Insights
            </h2>

            <Link href="/services">
              <button className="bg-[#4F6BF0] text-white px-5 sm:px-6 py-3 flex items-center gap-2 rounded-sm font-semibold text-[18px] sm:text-[20px]">
                More Services
                <Image src={urarrow} alt="urarrow" width={30} />
              </button>
            </Link>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border border-[#4E4E4E] rounded-xl bg-[#0F0F11] p-6 flex flex-col items-start gap-4"
            >
              <h3 className="text-white text-xl sm:text-2xl font-semibold flex items-center gap-2">
                <Image src={service.icon} alt="icon" width={30} height={30} />
                {service.title}
              </h3>
              <p className="text-[#FFFFFF] text-base sm:text-lg font-raleway">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
