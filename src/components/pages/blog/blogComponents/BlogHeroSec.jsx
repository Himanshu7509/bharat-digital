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
    <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center text-white">
      {/* Background Image */}
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
      <div className="relative z-20 text-center max-w-6xl px-4">
        <h1 className="text-4xl md:text-6xl lg:text-[70px] font-semibold mb-4">Blog</h1>
        <p className="text-base md:text-xl lg:text-[30px] leading-snug font-medium">
          In today’s fast-paced digital landscape, businesses need reliable, scalable,
          and innovative IT solutions to stay ahead of the competition.
        </p>

        {/* Category Buttons */}
        <div className="mt-10 md:mt-14 flex items-center justify-center gap-3 overflow-x-auto px-2 md:px-0 scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelected(category)}
              className={`px-4 md:px-5 py-2 rounded-md text-sm md:text-base lg:text-[18px] font-semibold whitespace-nowrap transition-all duration-200 ${
                category === selected
                  ? 'bg-gradient-to-r from-[#4F6BF0] to-[#32A2D1] text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}

          {/* Arrow Button */}
          <button className="min-w-[36px] h-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSec;
