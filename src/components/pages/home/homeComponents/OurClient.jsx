"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import double from "@/components/assets/qotas.png";
import img1 from "@/components/assets/image4.png";
import img2 from "@/components/assets/image5.png";
import img3 from "@/components/assets/image6.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

const reviews = [
  {
    message:
      "It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
    name: "Jimmy Bartney",
    title: "Product Manager at Picko Lab",
    image: img1,
  },
  {
    message:
      "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
    name: "Natasha Romanoff",
    title: "Black Widow",
    image: img2,
  },
  {
    message:
      "“The best”! That’s what I want to say to this platform, didn’t know that there’s a platform to help you manage your business expenses like this! Very recommended to you who have a big business!",
    name: "Moritika Kazuki",
    title: "Finance Manager at Mangan",
    image: img3,
  },
];

const getDuplicatedReviews = (original, minCount = 5) => {
  const repeated = [...original];
  while (repeated.length < minCount) {
    repeated.push(...original);
  }
  return repeated.slice(0, minCount);
};

const OurClient = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const duplicatedReviews = getDuplicatedReviews(reviews, 5);

  return (
    <div className="w-full bg-[#0E0E0E] text-white px-4 py-16 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-[40px] md:text-[55px] font-semibold mb-2">Our Client Feedback</h2>
        <p className="text-[#FFFFFF] text-[18px] md:text-[25px] font-light max-w-2xl mx-auto">
          We actively seek and encourage feedback from our clients to ensure we are meeting their needs and expectations
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
         
          if (swiper.params.navigation) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        {duplicatedReviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-full bg-white text-black rounded-xl p-6 flex flex-col justify-between min-h-[350px]">
              <div className="space-y-6 flex-grow">
                <Image src={double} alt="quote" width={30} height={30} />
                <p className="text-[18px] font-medium leading-7">{item.message}</p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-300 mt-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={60}
                  className="rounded-lg"
                />
                <div>
                  <p className="font-bold text-[20px]">{item.name}</p>
                  <p className="text-[16px] font-[400]">{item.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          ref={prevRef}
          className="w-10 h-10 rounded-full bg-black hover:bg-[#4461F2] text-white flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          ref={nextRef}
          className="w-10 h-10 rounded-full bg-black hover:bg-[#4461F2] text-white flex items-center justify-center"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default OurClient;
