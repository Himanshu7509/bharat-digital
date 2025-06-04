"use client"

import React from 'react'
import Image from 'next/image'
import aboutHero from '../../../assets/aboutUsBanner.jpg'

const AboutHero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Get In Touch Button */}
      <div className="absolute right-90 top-[250px] z-20">
        <button className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 w-20 h-20 text-white shadow-lg flex items-center justify-center flex-col text-xs font-medium hover:scale-105 transition-transform duration-300">
          <span className="text-[10px]">↗</span>
          <span>Get In</span>
          <span>Touch</span>
        </button>
      </div>

      {/* Top "About Us" and Heading */}
      <div className="container mx-auto px-6 pt-16 pb-10 z-10 relative">
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-sm font-medium text-gray-800">About Us</span>
          <div className="w-4 h-px bg-blue-600"></div>
        </div>

        <h1 className="text-4xl font-bold leading-snug max-w-4xl">
          <span className="text-blue-600">We provide</span>
          <span className="text-blue-600">s a range of services </span><br />
          <span className="text-blue-600"> related to </span>
          <span className="text-black">digital marketing, online </span> <br />
           <span className="text-black"> presence, & technology.</span>
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
