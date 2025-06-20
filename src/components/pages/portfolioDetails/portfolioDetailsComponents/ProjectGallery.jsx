import Image from "next/image";

const ProjectGallery = ({ data = [] }) => {
  return (
    <div className="py-12 px-4 bg-white">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#e6edff] rounded-2xl shadow-lg text-center flex flex-col justify-between items-center min-h-[400px]"
          >
            <div className="flex-1 flex items-center justify-center h-full w-full">
              <Image
                src={item.image}
                alt={item.alt}
                className={item.style}
              />
            </div>
            {item.title && (
              <h3 className="text-xl text-gray-900  mb-4">{item.title}</h3>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
