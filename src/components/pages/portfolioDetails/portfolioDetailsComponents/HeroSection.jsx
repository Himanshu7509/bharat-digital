import Image from 'next/image';
import Img from "../../../assets/Rectangle.png";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center text-center px-4 py-16 bg-gradient-to-b from-white to-gray-50">
            <h1 className="text-4xl md:text-5xl font-normal text-gray-900 max-w-4xl leading-tight">
                Empowering tech{" "}
                <span className="text-blue-600 font-semibold">companies to build</span>{" "}
                better <span className="font-semibold">AI.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-gray-600 text-sm md:text-base leading-relaxed">
                Real-time code collaboration. Interactive virtual events. Off-sites in the metaverse. When 
                Fluxonians have ideas to help teams work better, we build them. Make your workday better 
                with Fluxon Apps.
            </p>

            <div className="mt-12 w-full max-w-4xl">
                <div className="rounded-xl overflow-hidden">
                    <Image
                        src={Img}
                        alt="Lord Krishna Special"
                        width={1065}
                        height={594}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;