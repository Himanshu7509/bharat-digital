import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import portfolioBG from '@/components/assets/portfolioBG.png';

const HeroSecPortfolio = () => {
  return (
    <div
      className="w-full h-[197px] sm:h-[400px] md:h-[90vh] py-8 sm:py-10bg-cover bg-center bg-no-repeat flex items-center justify-center text-white text-center px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${portfolioBG.src})`,
      }}
    >
      <div className="z-10 mx-auto text-left w-full max-w-6xl">
        <h1 className="text-[10px] sm:text-[20px] lg:text-[55px] font-[400] leading-[28px] lg:leading-[68px]">
          A company portfolio highlights its services, projects, achievements, and expertise.
        </h1>

        <button className="mt-4 md:mt-8 px-2 sm:px-3 md:px-6 py-0.5 md:py-3 bg-[#4F6BF0] text-white font-semibold rounded-sm md:rounded-md flex items-center gap-1 md:gap-2 text-[9px] sm:text-[18px] lg:text-[25px]">
                  Get a Quote <ArrowUpRight className='w-[10px] md:w-[16px]' />
                </button>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 bg-opacity-20 backdrop-blur-md flex items-center justify-center">
          <ArrowDown className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default HeroSecPortfolio;
