import React from 'react';
import Image from 'next/image';
import Img1 from '@/components/assets/w1.png';
import Img2 from '@/components/assets/w2.png';

const WhoWeAre = () => {
  return (
    <div className="bg-[#0D0D0D] text-white px-10 py-20">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
   
        <div className="flex-1">
          <p className="text-sm text-[#E0E0E0] uppercase tracking-widest mb-2 relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-[2px] before:bg-[#3F66FB]">
            Who We Are
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-5">
            Axleo is a business that provides services <br />
            <span className="text-[#B3B3B3]">related to online marketing.</span>
          </h2>
          <div className="flex gap-6 mt-6">
            <Image src={Img1} alt="Team Working" className="rounded-md" width={230} height={300} />
            <Image src={Img2} alt="Office View" className="rounded-md" width={230} height={300} />
          </div>
        </div>

        <div className="flex-1">
          <p className="text-[#B3B3B3] mb-6 leading-relaxed">
            Digital agencies can vary in size and specialization. Some may focus on specific niches,
            such as healthcare or e-commerce, while others may offer a comprehensive.
          </p>
          <button className="bg-gradient-to-r from-[#3F66FB] to-[#57D6DB] px-6 py-3 text-white font-semibold rounded-md">
            About Us
          </button>
        </div>
      </div>

      <div className="mt-20 border-t border-[#2A2A2A] pt-10 flex flex-wrap justify-between text-center gap-y-10">
        <div className="w-1/2 sm:w-1/4">
          <p className="text-4xl font-bold text-white">70+</p>
          <p className="text-[#B3B3B3] mt-2">World Customer</p>
        </div>
        <div className="w-1/2 sm:w-1/4">
          <p className="text-4xl font-bold text-white">70+</p>
          <p className="text-[#B3B3B3] mt-2">Positive Rating</p>
        </div>
        <div className="w-1/2 sm:w-1/4">
          <p className="text-4xl font-bold text-white">20+</p>
          <p className="text-[#B3B3B3] mt-2">Total Branch</p>
        </div>
        <div className="w-1/2 sm:w-1/4">
          <p className="text-4xl font-bold text-white">16+</p>
          <p className="text-[#B3B3B3] mt-2">Year Experience</p>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden md:block">
        <div className="w-24 h-24 rounded-full border-2 border-[#4F6BF0] flex items-center justify-center text-[10px] text-center text-[#4F6BF0] font-semibold rotate-[20deg]">
          GET IN TOUCH • GET IN TOUCH •
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
