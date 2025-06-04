import React from 'react';
import star from '@/components/assets/SVG.png';
import Image from 'next/image';

const services = [
  "DIGITAL PRODUCT",
  "UI/UX DESIGN",
  "DIGITAL STUDIO",
  "BRANDING DESIGN",
  "UI/UX DESIGN",
  "EMAIL MARKETING",
];

const MarqueeBanner = () => {
  return (
    <div className="relative overflow-hidden bg-[#4F6BF0] h-[100px] flex items-center">
      <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
        {Array(2).fill(services).flat().map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-white font-semibold text-[22px] sm:text-[28px] leading-[34px]"
          >
            <Image src={star} alt="star" width={40} height={40} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
