"use client"

import React from 'react'
import Image from 'next/image'
import aboutHero from '../../../assets/aboutUsBanner.jpg'
import arrow from '../../../assets/Vector.png'

const AboutHero = () => {
  return (
    <div className=" bg-white overflow-hidden">
      {/* Get In Touch Button */}
      <div className="relative left-[950px] top-[490px] z-20">
        <button className="rounded-full border-14 border-[#F0F0F0] bg-gradient-to-r from-blue-500 to-cyan-400 w-[160px] h-[160px] text-white shadow-lg flex items-center justify-center flex-col text-xs font-medium hover:scale-105 transition-transform duration-300">
          <span className="text-[35px]">↗</span>
          <span>Get In</span>
          <span>Touch</span>
        </button>
      </div>

      {/* Top "About Us" and Heading */}
      <div className="container mx-auto px-6 pb-10 z-10 relative">
         <div>
                <p className="text-[#1A1A1A] font-bold text-[25px] font-raleway uppercase flex items-center">
                             About Us
                              <Image src={arrow} alt="arrow" width={40} height={10} className="ml-2" />
                            </p>
               
              </div>

        <h1 className="text-[80px] font-bold leading-snug max-w-8xl">
          <span className="text-[#4F6BF0]">We provide</span>
          <span className="text-[#4F6BF0]">s a range of services </span><br />
          <span className="text-[#4F6BF0]"> related to </span>
          <span className="text-[#1A1A1A]">digital marketing, online </span> <br />
           <span className="text-[#1A1A1A]"> presence, & technology.</span>
        </h1>
      </div>

      {/* Full-width image below text */}
      <div className="relative w-full h-[500px]">
        <Image
          src={aboutHero}
          alt="Team working together"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </div>
  )
}

export default AboutHero
