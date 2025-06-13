"use client";
import React, { useState } from "react";
import Image from "next/image";

// Icons
import webIcon from "@/components/assets/web.png";
import appIcon from "@/components/assets/app.png";
import uiIcon from "@/components/assets/ui.png";
import businessIcon from "@/components/assets/businessIcon.png";
import marketingIcon from "@/components/assets/marketingIcon.png";
import softwareIcon from "@/components/assets/softwareIcon.png";
import gameIcon from "@/components/assets/gameIcon.png";
import chatbotIcon from "@/components/assets/chatbotIcon.png";
import aiIcon from "@/components/assets/aiIcon.png";
import erpIcon from "@/components/assets/erpIcon.png";
import securityIcon from "@/components/assets/securityIcon.png";
import cardIcon from "@/components/assets/card.png";

const services = [
  {
    title: "Web Design & Development",
    description:
      "We craft visually stunning, user-friendly, and high-performance websites.",
    icon: webIcon,
  },
  {
    title: "App Development",
    description:
      "We create intuitive, scalable, and high-performance mobile apps for Android and iOS.",
    icon: appIcon,
  },
  {
    title: "UI/UX Design",
    description:
      "We prioritize seamless user experiences and sleek modern interfaces for all platforms.",
    icon: uiIcon,
  },
  {
    title: "Business Consultant",
    description:
      "Providing expert guidance to align your business strategy with technology.",
    icon: businessIcon,
  },
  {
    title: "Digital Marketing & Solutions",
    description:
      "Boost your online presence with tailored marketing strategies and campaigns.",
    icon: marketingIcon,
  },
  {
    title: "Software Development",
    description:
      "Robust custom software development tailored to your exact business needs.",
    icon: softwareIcon,
  },
  {
    title: "Game Development",
    description:
      "Interactive and engaging games built with performance and user delight in mind.",
    icon: gameIcon,
  },
  {
    title: "Chatbot Development",
    description:
      "Automate interactions with AI-driven chatbot solutions across platforms.",
    icon: chatbotIcon,
  },
  {
    title: "AI/ML",
    description:
      "Leverage Artificial Intelligence to enhance automation, insights, and efficiency.",
    icon: aiIcon,
  },
  {
    title: "ERP/CRM Development",
    description:
      "Manage operations and customer relationships with custom ERP/CRM systems.",
    icon: erpIcon,
  },
  {
    title: "Web Security",
    description:
      "Protect your digital assets with advanced web security practices and tools.",
    icon: securityIcon,
  },
  {
    title: "Digital Card",
    description:
      "Create digital business cards to modernize and streamline networking.",
    icon: cardIcon,
  },
];

const ServicesCard = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <div className="w-full bg-[#0B0C0F] py-16 sm:py-20 flex justify-center items-center">
      <div className="w-[90%] flex flex-col gap-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[55px] xl:text-[2vw] font-bold text-white Heading leading-tight">
            OUR SERVICES
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service, idx) => (
            <div
              key={idx}
              className="border border-[#4E4E4E] rounded-xl flex flex-col justify-between items-center text-center p-4 sm:p-6 bg-[#0F0F11] hover:shadow-lg transition"
            >
              <div className="bg-[#1D1D1F] text-white w-full p-4 rounded-lg">
                <h3 className="font-semibold text-[5vw] sm:text-[3.5vw] md:text-[2vw] lg:text-[1.4vw] mb-3 flex items-center justify-start gap-2">
                  <Image
                    src={service.icon}
                    alt="icon"
                    width={28}
                    height={28}
                    className="w-[6vw] sm:w-[4vw] md:w-[2vw] lg:w-[1.5vw] h-auto"
                  />
                  {service.title}
                </h3>
                <p className="text-[4vw] sm:text-[2.8vw] md:text-[1.4vw] lg:text-[1.1vw] text-[#FFFFFF] font-raleway leading-snug text-left">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[#4F6BF0] text-[5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] font-semibold underline underline-offset-4"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
