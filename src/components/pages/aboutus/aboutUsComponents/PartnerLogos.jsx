import Image from "next/image";
import one from "../../../assets/kumbhh-hdlogo.png";
import two from "../../../assets/image 22.png";
import three from "../../../assets/Danik-Bhaskar-Logo.png";
import four from "../../../assets/Clip path group.png";
import five from "../../../assets/g853.png";
import six from "../../../assets/uttar-pradesh-police-logo.png";
import seven from "../../../assets/kumbhh-hdlogo.png";
import eight from "../../../assets/image 23.png";
import nine from "../../../assets/HCL_Technologies-Logo.wine.png";
import ten from "../../../assets/Group.png";
import arrow from "@/components/assets/Vector.png";

const PartnerLogos = () => {
  const partners = [
    { name: "Government Partner 1", logo: one, alt: "Government Partner 1" },
    { name: "Tamil Nadu Government", logo: two, alt: "Tamil Nadu Government" },
    { name: "Dainik Bhaskar", logo: three, alt: "Dainik Bhaskar" },
    { name: "Hero", logo: four, alt: "Hero" },
    { name: "India Post", logo: five, alt: "India Post" },
    { name: "Dainik Bhaskar", logo: three, alt: "Dainik Bhaskar" },
    { name: "India Post", logo: five, alt: "India Post" },
    { name: "Tamil Nadu Government", logo: two, alt: "Tamil Nadu Government" },
    { name: "Hero", logo: four, alt: "Hero" },
    { name: "Karnataka Police", logo: six, alt: "Karnataka Police" },
    { name: "BSNL", logo: seven, alt: "BSNL" },
    {
      name: "Election Commission",
      logo: eight,
      alt: "Election Commission of India",
    },
    { name: "HCL", logo: nine, alt: "HCL Technologies" },
    { name: "Arihant", logo: ten, alt: "Arihant Publications" },
    { name: "HCL", logo: nine, alt: "HCL Technologies" },
    { name: "BSNL", logo: seven, alt: "BSNL" },
    { name: "Arihant", logo: ten, alt: "Arihant Publications" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mr-4">
            OUR PARTNER
          </h2>
          <Image
            src={arrow}
            alt="Arrow"
            width={80}
            height={9}
            className="ml-2"
          />
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 transition-shadow duration-300"
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 64px, 80px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
