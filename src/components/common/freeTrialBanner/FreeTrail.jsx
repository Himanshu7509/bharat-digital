import React from "react";
import bg from "@/components/assets/trail.png";
import Link from "next/link";

const FreeTrail = () => {
  return (
    <div className="relative w-full h-[76px] sm:h-[139px] lg:h-[350px] overflow-hidden">
  
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-6 md:px-20">
        <div className="text-white">
          <p className="text-[#4461F2] text-[6px] sm:text-[12px] lg:text-[25px] font-medium mb-1">
            • Start your free trial •
          </p>
          <h2 className="text-[12px] sm:text-[21px] lg:text-[55px] font-semibold lg:Heading lg:leading-[63px] w-[55%]">
            Ready To Take Your SEO To The Next Level?
          </h2>
        </div>

       <Link href="/contact">
       <button className="mt-6 cursor-pointer bg-gradient-to-r from-[#4F6BF0] to-[#25BAC3] text-white px-3 md:px-6 py-2 md:py-3 uppercase rounded-sm font-semibold text-[6px] sm:text-[12px] lg:text-[25px]">
          CONTACT NOW
        </button>
       </Link> 
      </div>
    </div>
  );
};

export default FreeTrail;
