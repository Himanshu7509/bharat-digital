"use client";
import React, { useState } from "react";
import Image from "next/image";
import bannerimg from "@/components/assets/question.png";
import { Plus, X } from "lucide-react";
import arrow from "@/components/assets/Vector.png";
import phone from "@/components/assets/phone.png"
import Link from "next/link";

const faqData = [
  {
    question: "WHAT DO I HAVE FOR INSTALLATION?",
    answer:
      "Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built different.",
  },
  {
    question: "HOW MUCH DOES LOGO DESIGN SERVICES COST?",
    answer:
      "Prices vary depending on complexity and package, but we offer affordable rates tailored to your needs.",
  },
  {
    question: "HOW TO SOFT LAUNCH YOUR BUSINESS?",
    answer:
      "We help you plan, design, and implement a soft launch strategy tailored to your market.",
  },
  {
    question: "HOW DOES THE TRIAL WORK?",
    answer:
      "You get full access to all features during the trial period, with no obligation to purchase.",
  },
];

const OurQuestion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-16 px-6 md:px-20 bg-black text-white flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-8">
        <div>
          <p className="text-[#4F6BF0] text-[25px] font-raleway uppercase flex items-center">
            OUR QUESTION
            <Image src={arrow} alt="Arrow" width={80} height={9} className="ml-2" />
          </p>
          <h2 className="Heading leading-[70px]">
            Have any questions? Here some answers
          </h2>
        </div>

        <div className="relative w-full max-w-[650px]">
          <Image
            src={bannerimg}
            alt="question"
            className="rounded-lg w-full object-cover"
            width={650}
            height={400}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-lg" />
         
          <p className="absolute bottom-5 left-5 text-[30px] flex items-center gap-2 font-semibold text-[#FEFEFE]">
            <span><Image src={phone} alt="phone" width={35} height={35}/></span> +12 608 (3456) 789
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-[#2f2f2f] overflow-hidden transition-all duration-300"
          >
            <div
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="font-[700] leading-[35px] text-[25px]">
                Q{index + 1}. {item.question}
              </p>
              {openIndex === index ? (
                <X size={20} className="text-white" />
              ) : (
                <Plus size={20} className="text-white" />
              )}
            </div>
            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-[500px] mt-3" : "max-h-0"
              }`}
            >
              <p className="text-[#C0C0C0] text-[22px] font-medium leading-[30px]">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
        <Link href='/faq'>
        <button className="mt-6 bg-gradient-to-r from-[#4F6BF0] to-[#25BAC3] text-white px-6 py-3 uppercase rounded-sm font-semibold text-[25px]">
            See All Questions
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurQuestion;
