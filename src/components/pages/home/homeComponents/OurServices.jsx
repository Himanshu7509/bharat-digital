import React from "react";
import Image from "next/image";
import arrow from "@/components/assets/Vector.png";
import webIcon from "@/components/assets/web.png";
import appIcon from "@/components/assets/app.png";
import uiIcon from "@/components/assets/ui.png";
import urarrow from '@/components/assets/ur-arrow.png'

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
];

const OurServices = () => {
  return (
    <div className="w-full bg-[#0B0C0F] py-20 flex justify-center items-center">
      <div className="w-[90%] flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          
            <p className="text-[#4F6BF0] text-[25px] font-raleway uppercase flex items-center">
              OUR SERVICES
              <Image src={arrow} alt="Arrow" width={80} height={9} className="ml-2" />
            </p>
          
           <div className="w-full flex justify-between items-center">
             <h2 className="Heading leading-[70px]">
              Turn Information Into Actionable Insights
            </h2>
          <button className="bg-[#4F6BF0] text-white px-6 py-2 flex justify-center items-center rounded-sm font-semibold text-[22px]">
            More Services <span><Image src={urarrow} alt="urarrow" width={40}/></span>
          </button>
           </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border border-[#4E4E4E] rounded-xl flex flex-col justify-between items-center text-center p-6 bg-[#0F0F11] "
            >
              
              {/* <Image src={service.icon} alt={service.title} width={100} height={100} className="mb-8" /> */}

              <div className="bg-[#0F0F11] text-white w-full p-4 rounded-lg">
                <h3 className="font-medium text-[25px] mb-1 flex items-center justify-start gap-2">
                  <Image src={service.icon} alt="icon" width={30} height={30} />
                  {service.title}
                </h3>
                <p className="text-[20px] text-[#FFFFFF] font-raleway">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
