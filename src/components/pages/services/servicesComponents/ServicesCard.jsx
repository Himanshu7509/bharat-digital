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
    description: "we craft visually stunning, user-friendly, and high-performance websites.",
    icon: webIcon,
  },
  {
    title: "App Development",
    description: "we craft visually stunning, user-friendly, and high-performance websites.",
    icon: appIcon,
  },
  {
    title: "UI/UX Design",
    description: "we craft visually stunning, user-friendly, and high-performance websites.",
    icon: uiIcon,
  },
  {
    title: "Business Consultant",
    description: "we craft visually stunning, user-friendly, and high-performance websites.",
    icon: businessIcon,
  },
  {
    title: "Digital Marketing & Solutions",
    description: "we craft visually stunning, user-friendly, and high-performance websites.",
    icon: marketingIcon,
  },
  {
    title: "Software Development",
    description: "we craft visually stunning, user-friendly, and high-performance websites.",
    icon: softwareIcon,
  },
  {
    title: "Game Development",
    description: "we craft visually stunning, user-friendly, and high-performance websites.",
    icon: gameIcon,
  },
  {
    title: "Chatbot Development",
    description: "we craft visually stunning, user-friendly, and high-performance websites.",
    icon: chatbotIcon,
  },
  {
    title: "AI/ML",
    description: "we craft visually stunning, user-friendly, and high-performance websites.",
    icon: aiIcon,
  },
  {
    title: "ERP/CRM Development",
    description: "we craft visually stunning, user-friendly, and high-performance websites.",
    icon: erpIcon,
  },
  {
    title: "Web Security",
    description: "we craft visually stunning, user-friendly, and high-performance websites.",
    icon: securityIcon,
  },
  {
    title: "Digital Card",
    description: "we craft visually stunning, user-friendly, and high-performance websites.",
    icon: cardIcon,
  },
];

const ServicesCard = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <div className="w-full bg-[#0B0C0F] py-20 flex justify-center items-center">
      <div className="w-[90%] flex flex-col gap-10">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h1 className="Heading">OUR SERVICES</h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service, idx) => (
            <div
              key={idx}
              className="border border-[#4E4E4E] rounded-xl flex flex-col justify-between items-center text-center p-6 bg-[#0F0F11]"
            >
              <div className="bg-[#1D1D1F] text-white w-full p-4 rounded-lg">
                <h3 className="font-medium text-[25px] mb-1 flex items-center justify-start gap-2">
                  <Image src={service.icon} alt="icon" width={30} height={30} />
                  {service.title}
                </h3>
                <p className="text-[20px] text-[#FFFFFF] font-raleway">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-none text-[#4F6BF0] font-medium text-[30px]"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
