import Image from 'next/image';

const HeroSection = ({ data }) => {
    return (
       <div className='flex items-center justify-center' style={{background: 'radial-gradient(ellipse at 0% 50%, rgba(147, 197, 253, 0.4) 5%, rgba(191, 219, 254, 0.2) 30%, white 50%)'}}>
         <div className="flex flex-col max-w-7xl items-center justify-center text-center px-4 py-16 pb-0 w-full">
            <h1 className="BigCustomHeading font-normal text-gray-900 leading-tight">
                {data?.HeroBanner?.[0]?.mainTitle || "Empowering tech"}{" "}
                <span className="text-blue-600 font-semibold">
                    {data?.HeroBanner?.[0]?.highlightText || "companies to build"}
                </span>{" "}
                {data?.HeroBanner?.[0]?.endTitle || "better"} <span className="font-semibold">{data?.HeroBanner?.[0]?.accentText || "AI."}</span>
            </h1>

            <p className="mt-6 BigCustomParagraph text-gray-600 leading-relaxed">
                {data?.HeroBanner?.[0]?.para1 || "Default paragraph text"}
            </p>

            <div className="mt-12 w-full max-w-4xl">
                <div className="rounded-xl overflow-hidden">
                    <Image
                        src={data?.HeroBanner?.[0]?.heroImage || "/default-hero-image.png"}
                        alt={data?.HeroBanner?.[0]?.imageAlt || "Portfolio Hero"}
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