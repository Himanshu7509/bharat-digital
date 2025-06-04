"use client";
import React, { useState } from "react";
import Image from "next/image";
import bannerimg from "@/components/assets/question.png";
import { Plus, X } from "lucide-react";
import arrow from "@/components/assets/Vector.png";

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
                        <Image src={arrow} alt="arrow" width={40} height={10} className="ml-2" />
                      </p>
          <h2 className="Heading leading-[70px]">
            Have any questions? Here some answers
          </h2>
        </div>
        <div>
          <Image
            src={bannerimg}
            alt="question"
            className="rounded-lg"
            width={500}
            height={300}
          />
          <p className="mt-3 flex items-center gap-2 text-lg">
            <span className="text-white font-semibold">
              📞 +12 608 (3456) 789
            </span>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 space-y-6">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-[#2f2f2f] pb-4">
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
            {openIndex === index && (
              <p className="text-[#C0C0C0] mt-3 text-[22px] font-medium leading-[30px]">
                {item.answer}
              </p>
            )}
          </div>
        ))}
        <button className="mt-6 px-6 py-3 rounded bg-gradient-to-r from-[#4F6BF0] to-[#00D1FF] text-white font-semibold text-sm uppercase">
          See All Questions
        </button>
      </div>
    </div>
  );
};

export default OurQuestion;
