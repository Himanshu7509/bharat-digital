import Image from "next/image";
import img1 from "../../../assets/box1.png";
import img2 from "../../../assets/box2.png";
import img3 from "../../../assets/box3.png";

const ProjectGallery = () => {
  return (
    <div className="py-12 px-4 bg-white">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 - Goldstory with light purple background */}
        <div className="bg-[#e6edff] rounded-2xl p-8 shadow-lg text-center flex flex-col justify-between items-center min-h-[400px]">
          <div className="flex-1 flex items-center justify-center py-4">
            <Image 
              src={img1} 
              alt="Goldstory Project" 
              className=" w-[432px] h-[303px] object-contain" 
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-6">Goldstory</h3>
        </div>

        {/* Card 2 - Multiple Screens with white background */}
        <div className="bg-[#e6edff] rounded-2xl shadow-lg overflow-hidden min-h-[400px] ">
          <div className="h-full flex items-center justify-center">
            <Image 
              src={img2} 
              alt="Multiple Application Screens" 
              className="w-full h-full max-w-full object-contain rounded-lg ml-50 " 
            />
          </div>
        </div>

        {/* Card 3 - Divine Idols with white background */}
        <div className="bg-[#e6edff] rounded-2xl shadow-lg overflow-hidden min-h-[400px] ">
          <div className="h-full flex items-center justify-center">
            <Image 
              src={img3} 
              alt="Divine Idols Website" 
              className="w-full h-auto max-w-full object-contain rounded-lg ml-20" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;