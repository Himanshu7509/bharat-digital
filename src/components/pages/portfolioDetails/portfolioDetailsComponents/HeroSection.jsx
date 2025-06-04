import Image from 'next/image';
import Img from "../../../assets/stroyss.png";

const HeroSection = () => {
    return (
       <div className='flex items-center justify-center '  style={{background: 'radial-gradient(ellipse at 0% 50%, rgba(147, 197, 253, 0.4) 5%, rgba(191, 219, 254, 0.2) 30%, white 50%)'}}>
         <div className="flex flex-col max-w-7xl items-center justify-center text-center px-4 py-16 pb-0 w-full">
            <h1 className="BigCustomHeading font-normal text-gray-900 leading-tight font-">
                Empowering tech{" "}
                <span className="text-blue-600 font-semibold">companies to build</span>{" "}
                better <span className="font-semibold">AI.</span>
            </h1>

            <p className="mt-6 BigCustomParagraph text-gray-600 leading-relaxed">
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
       </div>
    );
};

export default HeroSection;