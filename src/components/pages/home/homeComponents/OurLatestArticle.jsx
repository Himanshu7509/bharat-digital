"use client";
import React from "react";
import Image from "next/image";

import b1 from "@/components/assets/ar1.png";
import b2 from "@/components/assets/ar2.png";
import b3 from "@/components/assets/ar3.png";
import urarrow from "@/components/assets/ur-arrow.png";

const articles = [
  {
    image: b1,
    date: "Feb 16, 2024",
    category: "Business",
    title: "ESSENTIAL TOOLS FOR MANAGING DIGITAL ASSET LIBRARY",
  },
  {
    image: b2,
    date: "Jan 16, 2025",
    category: "Business",
    title: "LEVERAGING YOUR CREATIVE ON WORK FOR SUCCESS",
  },
  {
    image: b3,
    date: "Mar 16, 2024",
    category: "Business",
    title: "THE ART OF BRANDING CRAFTING MEMORABLE VISUAL IDENTITIES",
  },
];

const OurLatestArticle = () => {
  return (
    <div className="bg-[#F8F9FB] px-4 md:px-20 py-16 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div className="w-[50%]">
          <h2 className="text-[55px] font-semibold leading-[62px]">
            <span className="text-[#4F6BF0]">Our Latest</span> <br />
            <span>Article</span>
          </h2>
          <div className="h-[1px] w-[100%] bg-[#7C7C7C] mt-4" />
        </div>

        <div className="mt-6 md:mt-0 flex flex-col justify-start items-start gap-4 w-[45%]">
          <button className="bg-[#4F6BF0] text-white px-5 py-2 flex justify-center items-center rounded-md font-semibold text-[22px]">
            Explore more{" "}
            <span>
              <Image src={urarrow} alt="urarrow" width={40} />
            </span>
          </button>
          <p className="text-[25px] leading-[32px] font-[400] text-[#3B3B3B]">
            Offer a wide range of services to help businesses establish and
            enhance their online presence.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((item, index) => (
          <div key={index}>
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-[300px] object-cover"
            />
            <p className="text-[20px] mt-4">
              {item.date} | {item.category}
            </p>
            <h3 className="mt-2 font-semibold text-[29px] leading-[36px]">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLatestArticle;
