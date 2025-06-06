import React from "react";
import Image from "next/image";
import bg from "@/components/assets/trail.png";

const FreeTrail = () => {
  return (
    <div className="relative w-full h-[350px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-6 md:px-20">
        <div className="text-white">
          <p className="text-[#4461F2] text-[25px] font-medium mb-1">
            • Start your free trial •
          </p>
          <h2 className="Heading leading-[63px] w-[55%]">
            Ready To Take Your SEO To The Next Level?
          </h2>
        </div>

        <button className="mt-6 cursor-pointer bg-gradient-to-r from-[#4F6BF0] to-[#25BAC3] text-white px-6 py-3 uppercase rounded-sm font-semibold text-[25px]">
          CONTACT NOW
        </button>
      </div>
    </div>
  );
};

export default FreeTrail;
