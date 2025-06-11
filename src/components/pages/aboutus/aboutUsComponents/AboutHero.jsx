  "use client"

  import React from 'react'
  import Image from 'next/image'
  import aboutHero from '../../../assets/aboutUsBanner.jpg'
  import arrow from '../../../assets/Vector.png'
  import { FaArrowUp } from "react-icons/fa";
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust weights as needed
});





  const AboutHero = () => {
    return (
      
      <div className=" mt-[100px] bg-white overflow-hidden">

        <div className="lg:ml-[100px] md:ml-[70px] container mx-auto px-4 sm:px-6 pb-6 sm:pb-8 lg:pb-10 z-10 relative">
          <div>
            <p className="text-[#1A1A1A] font-bold text-[16px] sm:text-[20px] lg:text-[25px] font-raleway uppercase flex items-center">
              About Us
              <Image src={arrow} alt="arrow" className="ml-2" />
            </p>
          </div>

          <h1 className="text-[28px] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[60px] font-bold leading-tight sm:leading-snug max-w-8xl mt-4 sm:mt-6">
            <span className="text-[#4F6BF0]">We provide</span>
            <span className="text-[#4F6BF0]"> a range of services </span>
            <br className="hidden sm:block" />
            <span className="text-[#4F6BF0]"> related to </span>
            <span className="text-[#1A1A1A]">digital marketing, online </span> 
            <br className="hidden sm:block" />
            <span className="text-[#1A1A1A]"> presence, & technology.</span>
          </h1>
        </div>

    
        <div className="mt-[40px] lg:mt-0 md:mt-0 xl:mt-0 relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
          <Image
            src={aboutHero}
            alt="Team working together"
            fill
            className="object-cover w-full h-full"
            priority
            
          />
          

          <div className="absolute top-[-60px] sm:top-[-70px] md:top-[-80px] xl:top-[-88px] right-[10%] sm:right-[15%] md:right-[20%] xl:right-[25%] z-20">
            <button className="rounded-full border-8 sm:border-10 md:border-12 xl:border-14 border-[#F0F0F0] bg-gradient-to-r from-[#4F6BF0] to-[#25BAC3] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] xl:w-[160px] xl:h-[160px] text-white shadow-lg flex items-center justify-center flex-col text-xs font-medium hover:scale-105 transition-transform duration-300">
        <span className="text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[25px] rotate-45 inline-block">
    <FaArrowUp />
  </span>

      

  <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[20px]">Get In</span> 
  <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[20px]">Touch</span>




            </button>
          </div>
        </div>
      </div>
    )
  }

  export default AboutHero