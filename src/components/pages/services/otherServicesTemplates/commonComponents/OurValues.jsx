import React from "react";
import Image from "next/image";
import dataIcon from "@/components/assets/data.png";
import customIcon from "@/components/assets/custom.png";
import endIcon from "@/components/assets/end.png";

const values = [
  {
    icon: dataIcon,
    title: "Data-Driven Strategies",
    description:
      "We use analytics and insights to create highly effective solutions. We use analytics and insights to create highly effective.",
  },
  {
    icon: customIcon,
    title: "Custom Solutions",
    description:
      "We use analytics and insights to create highly effective solutions. We use analytics and insights to create highly effective.",
  },
  {
    icon: endIcon,
    title: "End-to-End Management",
    description:
      "We use analytics and insights to create highly effective solutions. We use analytics and insights to create highly effective.",
  },
];

const OurValues = () => {
  return (
    <div className="w-full py-14 px-4 sm:px-10 md:px-20 bg-white text-black">
      <div className="text-center mb-10">
        <p className="text-[#4F6BF0] text-2xl sm:text-3xl font-semibold">
          Our Values
        </p>
        <h2 className="text-[7vw] sm:text-[5vw] md:text-[3vw] font-bold leading-tight mt-2">
          <span className="bg-gradient-to-b from-black to-gray-500 text-transparent bg-clip-text inline-block max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
            Core principles that define our partnership
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {values.map((value, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md p-6 rounded-xl text-left border border-gray-200 hover:shadow-lg transition"
          >
            <div className="flex justify-start mb-4">
              <Image
                src={value.icon}
                alt={value.title}
                width={60}
                height={60}
                className="w-[15vw] max-w-[60px] min-w-[40px]"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{value.title}</h3>
            <p className="text-base sm:text-lg text-[#000000]">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
