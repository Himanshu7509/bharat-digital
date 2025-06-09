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
    <div className="w-full py-20 px-6 md:px-20 bg-white text-black">
      <div className="text-center mb-12">
        <p className="text-[#4F6BF0] text-[30px] font-semibold">Our Values</p>
        <h2 className="text-[55px] font-bold leading-tight mt-2 flex justify-center">
          <span className="bg-gradient-to-b from-black to-gray-500 text-transparent bg-clip-text w-[70%]">
            Core principles that define our partnership
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md p-6 rounded-xl text-left border border-gray-200 hover:shadow-lg transition"
          >
            <div className="flex justify-start mb-4">
              <Image
                src={value.icon}
                alt={value.title}
                width={70}
                height={70}
              />
            </div>
            <h3 className="text-[30px] font-bold mb-2">{value.title}</h3>
            <p className="text-[#000000] text-[20px]">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
