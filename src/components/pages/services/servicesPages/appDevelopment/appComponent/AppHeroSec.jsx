import React from 'react';
import Image from 'next/image';
import HeroImage from '@/components/assets/appHero.png';
import urArrow from '@/components/assets/urBlue.png'

const AppHeroSec = () => {
  return (
    <div
      className="w-full py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between"
      style={{
        background: 'linear-gradient(180deg, #25BAC3 0%, #4F6BF0 100%)',
      }}
    >
      <div className="text-white max-w-3xl mb-10 md:mb-0">
        <h1 className="text-[60px] font-semibold mb-6">
          App Development
        </h1>
        <p className="text-[25px] leading-relaxed mb-4">
          At JobQuick, we specialize in creating high-performing, user-friendly, and visually appealing websites tailored to your business needs. Our expert team designs and develops responsive, SEO-optimized.
        </p>
        <p className="text-[25px] leading-relaxed mb-6">
          From corporate websites to e-commerce and custom web apps, we ensure secure, modern, and high-performing solutions.
        </p>
        <button className="bg-white text-[#4F6BF0] font-semibold py-2 px-5 rounded-md text-[25px] flex items-center gap-2">
          Get a Quote
          <Image src={urArrow} alt='urArrow'/>
        </button>
      </div>

      <div className="w-full h-full">
        <Image src={HeroImage} alt="Web Design Illustration" className="w-full h-[471px]" />
      </div>
    </div>
  );
};

export default AppHeroSec;
