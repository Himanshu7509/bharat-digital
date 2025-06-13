"use client";
import React from "react";
import Image from "next/image";

import b1 from "@/components/assets/ar1.png";
import b2 from "@/components/assets/ar2.png";
import b3 from "@/components/assets/ar3.png";
import urarrow from "@/components/assets/ur-arrow.png";
import Link from "next/link";

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
    <div className="bg-[#F8F9FB] px-4 sm:px-10 md:px-20 py-16 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">
        {/* Title */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-[55px] font-semibold leading-tight md:leading-[62px]">
            <span className="text-[#4F6BF0]">Our Latest</span> <br />
            <span>Article</span>
          </h2>
          <div className="h-[1px] w-full bg-[#7C7C7C] mt-4" />
        </div>

        {/* Description & Button */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <Link href="/blog">
          <button className="bg-[#4F6BF0] text-white px-6 py-3 flex items-center gap-2 rounded-md font-semibold text-[18px] sm:text-[20px] w-fit cursor-pointer">
            Explore more
            <Image src={urarrow} alt="urarrow" width={30} />
          </button>
          </Link>
          <p className="text-base sm:text-lg md:text-[22px] leading-snug text-[#3B3B3B]">
            Offer a wide range of services to help businesses establish and enhance their online presence.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((item, index) => (
          <div key={index}>
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-[250px] sm:h-[280px] md:h-[300px] object-cover rounded-md"
            />
            <p className="text-[16px] sm:text-[18px] text-[#555] mt-4">
              {item.date} | {item.category}
            </p>
            <h3 className="mt-2 font-semibold text-[22px] sm:text-[25px] md:text-[29px] leading-[30px] sm:leading-[34px] md:leading-[36px] text-[#111]">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLatestArticle;
