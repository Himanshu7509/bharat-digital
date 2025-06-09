'use client';
import React from 'react';
import Image from 'next/image';
import img from '@/components/assets/ap1.png';

const WebApproach = () => {
  return (
    <div className="w-full py-20 bg-white">
      <div className="w-[90%] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <p className="text-[#6366F1] font-semibold text-[30px]">Our Approach</p>
          <h2 className="text-[45px] font-bold mt-2 mb-6">
            Benefits of Bharatdigital for Web Design and Development Services
          </h2>
          <ul className="space-y-2 text-[25px] text-black font-semibold list-decimal list-inside">
            <li>A Team of Experienced Android Developers</li>
            <li>100% Transparency</li>
            <li>Excellent Technical Support</li>
            <li>99% On-time Delivery</li>
            <li>Flexible Engagements</li>
            <li>Up to 99.9% Crash-free • Cyber Secure</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image src={img} alt="Approach Illustration" className="w-full " />
        </div>
      </div>
    </div>
  );
};

export default WebApproach;
