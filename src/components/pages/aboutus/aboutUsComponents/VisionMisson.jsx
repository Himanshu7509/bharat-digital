import { Target, MousePointer } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          {/* Vision & Mission Label */}
          <div className="flex items-center mb-6">
            <span className="text-blue-500 text-lg font-medium mr-4">
              Vision & Mission
            </span>
            <div className="h-0.5 bg-blue-500 flex-1 max-w-20"></div>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Title */}
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
                EMPOWERING GROWTH WITH INNOVATION

              </h1>
            </div>
            
            {/* Right Side - Description */}
            <div className="lg:pt-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Our Vision Card */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">OUR VISION</h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua.
              </p>
            </div>
            {/* Icon */}
            <div className="absolute top-6 right-6">
              <MousePointer size={48} className="text-white opacity-30" />
            </div>
          </div>

          {/* Our Mission Card */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">OUR MISSION</h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua.
              </p>
            </div>
            {/* Icon */}
            <div className="absolute top-6 right-6">
              <Target size={48} className="text-white opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;