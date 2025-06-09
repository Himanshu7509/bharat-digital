"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Bg1 from "../../../assets/Allprojects.png";

const ProjectCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "1979 saw the company grow into a brand name synonymous with Chandni Chowk, Delhi; offering phenomenal artistry in gold and silver ornaments.",
      backgroundImage: Bg1.src,
      category: "Heritage Collection"
    },
    {
      id: 2,
      title: "Exquisite craftsmanship meets modern design in our contemporary jewelry collection, blending tradition with innovation.",
      backgroundImage: Bg1.src, 
      category: "Modern Artistry"
    },
    {
      id: 3,
      title: "Discover the finest gemstones and precious metals crafted into timeless pieces that tell your unique story.",
      backgroundImage: Bg1.src,
      category: "Luxury Collection"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handlePreview = () => {
    console.log('Preview clicked for slide:', slides[currentSlide]);
    // Add your preview logic here
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2 text-gray-800">
            All <span className="text-blue-500">Projects</span>
          </h1>
        </div>

        {/* Main Carousel */}
        <div className="w-full">
          <div
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ease-in-out group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
              style={{
                backgroundImage: `url(${slides.backgroundImage})`
              }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            {/* Content Container */}
            <div className="relative h-full flex items-center justify-between px-8 md:px-16">

              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white border-opacity-20 opacity-60 group-hover:opacity-100 z-10"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Center Content */}
              <div className="flex-1 px-4 md:px-12">
                <div className="max-w-4xl mx-auto text-center text-white space-y-6">
                  <div className="text-sm font-medium opacity-80 tracking-wide uppercase">
                    {slides[currentSlide].category}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold leading-tight transition-all duration-500">
                    {slides[currentSlide].title}
                  </h2>
                  <button
                    onClick={handlePreview}
                    className="inline-flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 border border-white border-opacity-20"
                  >
                    Preview
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white border-opacity-20 opacity-60 group-hover:opacity-100 z-10"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end p-6">
              {/* Slide Indicators */}
              <div className="flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                        ? 'bg-white scale-125'
                        : 'bg-white bg-opacity-40 hover:bg-opacity-60'
                      }`}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="w-48 h-1 bg-white bg-opacity-20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-300 ease-linear rounded-full"
                  style={{
                    width: `${((currentSlide + 1) / slides.length) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;