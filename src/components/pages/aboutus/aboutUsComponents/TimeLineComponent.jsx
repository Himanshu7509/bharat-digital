"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeYear, setActiveYear] = useState(2015);
  const scrollContainerRef = useRef(null);
  const itemRefs = useRef([]);

  const timelineData = [
    {
      date: "January 2015",
      year: 2015,
      description: "Company foundation and initial product development. We started with a vision to revolutionize digital experiences and began building our core technology platform with a small but passionate team."
    },
    {
      date: "March 2016",
      year: 2016,
      description: "First major product launch and initial customer acquisition. Our innovative solution gained traction in the market, securing our first enterprise clients and establishing key partnerships."
    },
    {
      date: "June 2017",
      year: 2017,
      description: "Series A funding round completed successfully. Raised $5M to accelerate growth, expand our development team, and enhance our product offerings with advanced features and capabilities."
    },
    {
      date: "September 2018", 
      year: 2018,
      description: "International expansion begins with European market entry. Opened offices in London and Berlin, adapted our platform for global markets, and established strategic partnerships across Europe."
    },
    {
      date: "February 2019",
      year: 2019,
      description: "AI integration and machine learning capabilities launched. Introduced intelligent automation features that revolutionized user workflows and significantly improved platform efficiency and user satisfaction."
    },
    {
      date: "August 2020",
      year: 2020,
      description: "Remote work solutions developed during global pandemic. Rapidly pivoted to support distributed teams, launched collaboration tools, and helped thousands of companies transition to remote work."
    },
    {
      date: "November 2021",
      year: 2021,
      description: "Mobile-first redesign and cross-platform compatibility achieved. Launched native mobile applications, ensuring seamless user experience across all devices and significantly expanding our user base."
    },
    {
      date: "April 2022",
      year: 2022,
      description: "Series B funding and strategic acquisitions completed. Secured $25M investment, acquired two complementary startups, and expanded our technology stack to offer comprehensive business solutions."
    },
    {
      date: "July 2023",
      year: 2023,
      description: "Cloud infrastructure modernization and security enhancements. Migrated to advanced cloud architecture, implemented zero-trust security model, and achieved SOC 2 Type II compliance certification."
    },
    {
      date: "December 2024",
      year: 2024,
      description: "Next-generation platform launch with advanced analytics. Introduced real-time data insights, predictive analytics, and customizable dashboards that transformed how businesses make data-driven decisions."
    },
    {
      date: "March 2025",
      year: 2025,
      description: "Future innovations and sustainable technology initiatives. Leading the industry with carbon-neutral operations, quantum-ready security protocols, and breakthrough innovations in sustainable technology solutions."
    }
  ];

  // Get unique years for navigation
  const uniqueYears = [...new Set(timelineData.map(item => item.year))].sort();

  // Handle scroll to update active index and year
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const itemCenter = rect.top + rect.height / 2;
          const distance = Math.abs(itemCenter - containerCenter);
          
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActiveIndex(closestIndex);
      setActiveYear(timelineData[closestIndex].year);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [timelineData]);

  // Calculate progress based on scroll position (0 to 1)
  const getScrollProgress = () => {
    if (!scrollContainerRef.current) return 0;
    
    const container = scrollContainerRef.current;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    
    if (scrollHeight === 0) return 0;
    return Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
  };

  // Calculate arc path based on scroll progress with smoother animation
  const getArcPath = () => {
    const progress = getScrollProgress();
    const angle = progress * 270; // Reduced to 270 degrees for better visual
    const radians = (angle - 90) * (Math.PI / 180);
    
    const centerX = 116;
    const centerY = 116;
    const radius = 108;
    
    const endX = centerX + radius * Math.cos(radians);
    const endY = centerY + radius * Math.sin(radians);
    
    const largeArcFlag = angle > 180 ? 1 : 0;
    
    return `M ${centerX} ${centerY - radius} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
  };

  // Get previous and next years for display with proper logic
  const getPrevYear = () => {
    const currentIndex = timelineData.findIndex(item => item.year === activeYear);
    if (currentIndex > 0) {
      return timelineData[currentIndex - 1].year;
    }
    return null;
  };

  const getNextYear = () => {
    const currentIndex = timelineData.findIndex(item => item.year === activeYear);
    if (currentIndex < timelineData.length - 1) {
      return timelineData[currentIndex + 1].year;
    }
    return null;
  };

  // Calculate line progress based on scroll
  const getLineProgress = () => {
    const scrollProgress = getScrollProgress();
    const totalLines = 11;
    return Math.round(scrollProgress * (totalLines - 1));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12 xl:gap-20">
          {/* Left side - Title and Timeline Visual */}
          <div className="flex-1 max-w-lg mx-auto lg:mx-0">
            <div className="mb-8 lg:mb-12 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 leading-tight">Timeline</h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 leading-tight">Our History</h2>
            </div>
            
            {/* Timeline Visual */}
            <div className="relative mt-8 lg:mt-16 flex items-center justify-center lg:justify-start">
              {/* Horizontal lines with smooth progressive coloring - hide on mobile */}
              <div className="hidden lg:flex flex-col gap-2 mr-8">
                {[...Array(11)].map((_, i) => {
                  const activeLinePosition = getLineProgress();
                  const isColored = i <= activeLinePosition;
                  
                  return (
                    <motion.div 
                      key={i}
                      className="w-16 xl:w-20 h-1"
                      animate={{
                        backgroundColor: isColored ? '#60A5FA' : '#D1D5DB'
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    />
                  );
                })}
              </div>
              
              {/* Circle with years */}
              <div className="relative">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 border-3 sm:border-4 border-black rounded-full relative bg-white flex items-center justify-center overflow-visible">
                  {/* Center year - Active year with ultra smooth transition */}
                  <div className="relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeYear}
                        initial={{ 
                          opacity: 0, 
                          scale: 0.8,
                          y: 20,
                          filter: "blur(8px)"
                        }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          y: 0,
                          filter: "blur(0px)"
                        }}
                        exit={{ 
                          opacity: 0, 
                          scale: 0.8,
                          y: -20,
                          filter: "blur(8px)"
                        }}
                        transition={{
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                          scale: {
                            type: "spring",
                            stiffness: 100,
                            damping: 15
                          }
                        }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black"
                      >
                        {activeYear}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  
                  {/* Previous year - top with better positioning */}
                  <div className="absolute -top-12 sm:-top-14 lg:-top-16 left-1/2 transform -translate-x-1/2">
                    <AnimatePresence mode="wait">
                      {getPrevYear() && (
                        <motion.div
                          key={`prev-${getPrevYear()}`}
                          initial={{ 
                            opacity: 0, 
                            y: 20,
                            scale: 0.7
                          }}
                          animate={{ 
                            opacity: 0.6, 
                            y: 0,
                            scale: 1
                          }}
                          exit={{ 
                            opacity: 0, 
                            y: -20,
                            scale: 0.7
                          }}
                          transition={{ 
                            duration: 0.6, 
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          className="text-gray-400 text-xl sm:text-2xl lg:text-3xl font-bold"
                        >
                          {getPrevYear()}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Next year - bottom with better positioning */}
                  <div className="absolute -bottom-12 sm:-bottom-14 lg:-bottom-16 left-1/2 transform -translate-x-1/2">
                    <AnimatePresence mode="wait">
                      {getNextYear() && (
                        <motion.div
                          key={`next-${getNextYear()}`}
                          initial={{ 
                            opacity: 0, 
                            y: -20,
                            scale: 0.7
                          }}
                          animate={{ 
                            opacity: 0.6, 
                            y: 0,
                            scale: 1
                          }}
                          exit={{ 
                            opacity: 0, 
                            y: 20,
                            scale: 0.7
                          }}
                          transition={{ 
                            duration: 0.6, 
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          className="text-gray-400 text-xl sm:text-2xl lg:text-3xl font-bold"
                        >
                          {getNextYear()}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Blue arc - progress based with smooth animation */}  
                  <div className="absolute -inset-1">
                    <svg className="w-full h-full" viewBox="0 0 232 232">
                      <motion.path
                        d={getArcPath()}
                        fill="none"
                        stroke="#60A5FA"
                        strokeWidth="6"
                        strokeLinecap="round"
                        animate={{ 
                          d: getArcPath()
                        }}
                        transition={{
                          duration: 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Timeline Content */}
          <div className="flex-1 max-w-lg mx-auto lg:mx-0 pt-4">
            <div 
              ref={scrollContainerRef}
              className="space-y-6 sm:space-y-8 lg:space-y-10 max-h-80 sm:max-h-96 lg:max-h-96 overflow-y-auto pr-2 sm:pr-4 scroll-smooth"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {timelineData.map((item, index) => (
                <motion.div 
                  key={index} 
                  ref={el => itemRefs.current[index] = el}
                  className="pb-4"
                  animate={{
                    opacity: index === activeIndex ? 1 : 0.5,
                    scale: index === activeIndex ? 1.02 : 1,
                    x: index === activeIndex ? 8 : 0
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
                    animate={{
                      color: index === activeIndex ? '#3B82F6' : '#9CA3AF'
                    }}
                    transition={{ 
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    {item.date}
                  </motion.h3>
                  <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-500 ${
                    index === activeIndex ? 'text-gray-700' : 'text-gray-500'
                  }`}>
                    {item.description}
                  </p>
                  {index < timelineData.length - 1 && (
                    <motion.div 
                      className="mt-6 sm:mt-8 w-full h-px"
                      animate={{
                        backgroundColor: index < activeIndex ? '#60A5FA' : '#E5E7EB'
                      }}
                      transition={{ 
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Scroll indicator */}
            <div className="mt-4 text-center lg:text-left text-gray-400 text-xs sm:text-sm">
              Scroll to explore timeline
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;