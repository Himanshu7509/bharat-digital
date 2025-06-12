import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import servicebanner from '@/components/assets/services-banner.png';

const HeroSecServices = () => {
  return (
    <div
      className=" w-full h-[197px] sm:h-[400px] md:h-[90vh] bg-cover bg-center bg-no-repeat py-8 flex items-center justify-center text-white text-center px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${servicebanner.src})`,
      }}
    >
      
      <div className="z-10 mx-auto text-left w-[90%]">
        <h1 className="text-[10px] sm:text-[20px] lg:text-[55px] font-[400] leading-[28px] lg:leading-[68px]">
          we provide cutting-edge solutions tailored to meet your business needs. Our expertise spans across multiple domains.
        </h1>

        <button className="mt-4 md:mt-8 px-2 sm:px-3 md:px-6 py-0.5 md:py-3 bg-[#4F6BF0] text-white font-semibold rounded-sm md:rounded-md flex items-center gap-1 md:gap-2 text-[9px] sm:text-[18px] lg:text-[25px]">
          Get a Quote <ArrowUpRight className='w-[10px] md:w-[16px]' />
        </button>
      </div>

    </div>
  );
};

export default HeroSecServices;
