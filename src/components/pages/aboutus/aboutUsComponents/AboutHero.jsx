"use client"

import React from 'react'
import Image from 'next/image'
import aboutHero from '../../../assets/aboutUsBanner.jpg'
import arrow from '../../../assets/Vector.png'

const AboutHero = () => {
  return (
    <div className="mt-[100px] bg-white overflow-hidden">
      {/* Top "About Us" and Heading */}
      <div className="container mx-auto px-4 sm:px-6 pb-6 sm:pb-8 lg:pb-10 z-10 relative">
        <div>
          <p className="text-[#1A1A1A] font-bold text-[16px] sm:text-[20px] lg:text-[25px] font-raleway uppercase flex items-center">
            About Us
            <Image src={arrow} alt="arrow" className="ml-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-auto lg:h-auto" />
          </p>
        </div>

        <h1 className="text-[28px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold leading-tight sm:leading-snug max-w-8xl mt-4 sm:mt-6">
          <span className="text-[#4F6BF0]">We provide</span>
          <span className="text-[#4F6BF0]"> a range of services </span>
          <br className="hidden sm:block" />
          <span className="text-[#4F6BF0]"> related to </span>
          <span className="text-[#1A1A1A]">digital marketing, online </span> 
          <br className="hidden sm:block" />
          <span className="text-[#1A1A1A]"> presence, & technology.</span>
        </h1>
      </div>

      {/* Image container with relative positioning */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
        <Image
          src={aboutHero}
          alt="Team working together"
          fill
          className="object-cover w-full h-full"
          priority
        />
        
        {/* Get In Touch Button - positioned absolutely within image container */}
        <div className="absolute top-[-60px] sm:top-[-70px] md:top-[-80px] xl:top-[-88px] right-[10%] sm:right-[15%] md:right-[20%] xl:right-[25%] z-20">
          <button className="rounded-full border-8 sm:border-10 md:border-12 xl:border-14 border-[#F0F0F0] bg-gradient-to-r from-[#4F6BF0] to-[#25BAC3] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] xl:w-[160px] xl:h-[160px] text-white shadow-lg flex items-center justify-center flex-col text-xs font-medium hover:scale-105 transition-transform duration-300">
            <span className="text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px]">↗</span>
            <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px]">Get In</span>
            <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px]">Touch</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutHero