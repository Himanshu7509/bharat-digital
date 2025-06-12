'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import blogBanner from '@/components/assets/blogHero.jpg';
import { ChevronRight } from 'lucide-react';

const categories = [
  'All',
  'App DEVELOPMENT',
  'UI/UX',
  'Digital Marketing',
  'Web Development',
  'Software Development',
];

const BlogHeroSec = () => {
  const [selected, setSelected] = useState('All');

  return (
    <section className="relative w-full h-[197px] sm:h-[400px] md:h-[90vh] py-8 sm:py-10 flex items-center justify-center text-white">

      <Image
        src={blogBanner}
        alt="Blog Banner"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-6xl w-[90%] mx-auto px-2 sm:px-4">
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[70px] font-semibold mb-2 sm:mb-4">
          Blog
        </h1>
        <p className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[28px] font-medium leading-snug">
          In today’s fast-paced digital landscape, businesses need reliable, scalable,
          and innovative IT solutions to stay ahead of the competition.
        </p>

        {/* Category Buttons */}
        <div className="mt-6 sm:mt-10 flex items-center justify-start sm:justify-center gap-3 overflow-x-auto px-1 sm:px-4 scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelected(category)}
              className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-md text-[12px] sm:text-sm md:text-base lg:text-[18px] font-semibold whitespace-nowrap transition-all duration-200 ${
                category === selected
                  ? 'bg-gradient-to-r from-[#4F6BF0] to-[#32A2D1] text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}

          {/* Arrow Button */}
          <button className="min-w-[32px] sm:min-w-[36px] h-8 sm:h-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200">
            <ChevronRight size={18} className="sm:size-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSec;
