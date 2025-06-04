"use client"
import React from "react";
import Image from "next/image";
import Img1 from "@/components/assets/w1.png";
import Img2 from "@/components/assets/w2.png";
import arrow from "@/components/assets/Vector.png";


const WhoWeAre = () => {
  return (
    <div className=" bg-[#0B0C0F] px-[5%] py-10 w-full flex flex-col justify-center items-center">
      <div className="w-[90%]">
        <div className="w-full mx-auto">
        <div className="mb-6 w-full flex justify-between items-start">
          <p className="text-[25px] text-[#FFFFFF] uppercase flex items-center ">
            Who We Are{" "}
            <span>
              <Image src={arrow} alt="Arrow" width={80} height={9} className="ml-2" />
            </span>
          </p>
          <h2 className="Heading leading-[60px]">
            Axleo is a business that provides services <br />
            related to online marketing.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start mt-[8%]">
          <Image src={Img1} alt="Team Working" width={300} height={300} />
          <Image src={Img2} alt="Office View" width={300} height={300} />
          <div className="max-w-sm">
            <p className="text-[#C4C4C4] mb-6 text-[25px] leading-[30px] font-[400]">
              Digital agencies can vary in size and specialization. Some may
              focus on specific niches, such as healthcare or e-commerce, while
              others may offer a comprehensive.
            </p>
            <button className="bg-gradient-to-r from-[#4F6BF0] to-[#25BAC3]  text-white font-semibold rounded-sm w-[210px] h-[75px] flex justify-center items-center text-[25px]">
              About Us
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[6%] border border-[#2F2F2F] flex flex-wrap justify-evenly h-[158px] items-center text-center w-full mx-auto">
        {[
          { number: "70+", label: "World Customer" },
          { number: "70+", label: "Positive Rating" },
          { number: "20+", label: "Total Branch" },
          { number: "16+", label: "Year Experience" },
        ].map((stat, idx) => (
          <div key={idx} className="w-1/2 sm:w-1/4">
            <p className="text-[55px] font-semibold leading-[45px] text-white">
              {stat.number}
            </p>
            <p className="text-[#C4C4C4] mt-2 text-[25px] leading-[29px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
