'use client';

import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import Img1 from '../../../assets/Allprojects.png'

const slides = [
  {
    image: {Img1},
    heading: '1979 saw the company grow into a brand name',
    description:
      'synonymous with Chandni Chowk, Delhi; offering phenomenal artistry in gold and silver ornaments.',
    link: '/project1',
  },
  {
    image: {Img1},
    heading: 'Crafting excellence with every detail',
    description: 'Our portfolio spans modern to classic designs.',
    link: '/project2',
  },
  {
    image: {Img1},
    heading: 'Delivering digital experiences',
    description: 'We turn ideas into scalable products with creativity and code.',
    link: '/project3',
  },
];

const AllProjects = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="bg-white text-black py-10 px-4">
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold mb-8">
        All <span className="text-blue-600">Projects</span>
      </h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-xl">
        {/* Background Image */}
        <Image
          src={slides[current].image}
          alt={`slide-${current}`}
          className="w-full h-[500px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-6 text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">{slides[current].heading}</h3>
          <p className="text-md md:text-xl mb-6">{slides[current].description}</p>
          <Link
            href={slides[current].link}
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Preview →
          </Link>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-gray-300"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-gray-300"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

export default AllProjects;
