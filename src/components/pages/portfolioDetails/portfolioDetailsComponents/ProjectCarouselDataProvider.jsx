"use client"
import React, { useState, useEffect } from 'react';

// Data Provider Component - handles all data and logic
const ProjectCarouselDataProvider = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Event handlers
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const handleGoToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handlePreview = () => {
    console.log('Preview clicked for slide:', slides[currentSlide]);
    alert(`Opening preview for: ${slides[currentSlide]?.category}`);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Don't render if no slides
  if (slides.length === 0) {
    return (
      <div className="w-full bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>No slides available</p>
        </div>
      </div>
    );
  }

  // Props to pass to UI component
  const carouselProps = {
    slides,
    currentSlide,
    isAutoPlaying,
    onNextSlide: handleNextSlide,
    onPrevSlide: handlePrevSlide,
    onGoToSlide: handleGoToSlide,
    onPreview: handlePreview,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  };

  return <ProjectCarouselUI {...carouselProps} />;
};

// Pure UI Component - only renders UI based on props
const ProjectCarouselUI = ({
  slides,
  currentSlide,
  isAutoPlaying,
  onNextSlide,
  onPrevSlide,
  onGoToSlide,
  onPreview,
  onMouseEnter,
  onMouseLeave
}) => {
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
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
              style={{
                backgroundImage: `url(${slides[currentSlide]?.backgroundImage})`
              }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            {/* Content Container */}
            <div className="relative h-full flex items-center justify-between px-8 md:px-16">
              {/* Left Arrow */}
              <button
                onClick={onPrevSlide}
                className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white border-opacity-20 opacity-60 group-hover:opacity-100 z-10"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Center Content */}
              <div className="flex-1 px-4 md:px-12">
                <div className="max-w-4xl mx-auto text-center text-white space-y-6">
                  <div className="text-sm font-medium opacity-80 tracking-wide uppercase">
                    {slides[currentSlide]?.category}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold leading-tight transition-all duration-500">
                    {slides[currentSlide]?.title}
                  </h2>
                  <button
                    onClick={onPreview}
                    className="inline-flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 border border-white border-opacity-20"
                  >
                    Preview
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={onNextSlide}
                className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white border-opacity-20 opacity-60 group-hover:opacity-100 z-10"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end p-6">
              {/* Slide Indicators */}
              <div className="flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => onGoToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white scale-125'
                        : 'bg-white bg-opacity-40 hover:bg-opacity-60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
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

export default ProjectCarouselDataProvider;