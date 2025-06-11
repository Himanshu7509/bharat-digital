"use client";
import React from 'react';
import Image from "next/image";

const GoldStory = ({ data }) => {
    return (
        <div className="bg-[#0D0D0D] text-white w-full">
            <div className="w-[90%] mx-auto px-4 py-16">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-18 mb-20 min-w-full">
                    <div className="space-y-6 text-left flex-1">
                        <div className="flex items-center gap-6">
                            <Image src={data.brand.logo} alt="Logo" width={290} height={110} />
                            <h2 className="text-4xl font-semibold">{data.brand.name}</h2>
                        </div>
                        <p className="text-gray-300 NormalCustomParagraph leading-relaxed">
                            {data.brand.description}
                        </p>
                        <button className="RalewayButtons border w-[189px] h-[68px] border-white rounded-full hover:bg-white hover:text-black transition text-[25px]">
                            {data.brand.previewBtn}
                        </button>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <Image src={data.brand.image} alt="Project Screenshot" width={911} height={508} />
                    </div>
                </div>

                <div className="w-full h-px bg-[#8F8F8F] mb-16"></div>

                {/* Overview */}
                <section className="mb-16">
                    <h3 className="mb-6 NormalCustomHeading">{data.overview.title}</h3>
                    <p className="text-gray-300 leading-relaxed NormalCustomParagraph">{data.overview.description}</p>
                </section>

                <div className="w-full h-px bg-[#8F8F8F] mb-16"></div>

                {/* The Ask */}
                <section className="mb-16">
                    <h3 className="NormalCustomHeading mb-6">{data.ask.title}</h3>
                    <p className="text-gray-300 leading-relaxed NormalCustomParagraph">{data.ask.description}</p>
                </section>

                <div className="w-full h-px bg-[#8F8F8F] mb-16"></div>

                {/* Services and Deliverables */}
                <div className="bg-gradient-to-r from-[#13101D] to-[#4F6BF0] p-10 rounded-xl mb-16">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h4 className="text-4xl font-extrabold mb-6 text-white">{data.services.title}</h4>
                            <div className="flex flex-wrap gap-4">
                                {data.services.items.map(item => (
                                    <button key={item} className="RalewayButtons px-6 py-3 border border-white text-white rounded-full text-[21px] font-medium hover:bg-white hover:text-black transition duration-200">
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-4xl font-extrabold mb-6 text-white">{data.deliverables.title}</h4>
                            <div className="flex flex-wrap gap-4">
                                {data.deliverables.items.map(item => (
                                    <button key={item} className="RalewayButtons px-6 py-3 border border-white text-white rounded-full text-[21px] font-medium hover:bg-white hover:text-black transition duration-200">
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Solution */}
                <section className="mb-16">
                    <h3 className="NormalCustomHeading mb-6">{data.solution.title}</h3>
                    <p className="text-gray-300 leading-relaxed NormalCustomParagraph mb-8">{data.solution.description}</p>
                    <div className="flex flex-wrap gap-x-6 items-start">
                        <p className="text-[35px] font-semibold text-base whitespace-nowrap mt-2">Technologies &gt;&gt;</p>
                        <div className="flex flex-wrap gap-4 flex-1 min-w-0">
                            {data.solution.technologies.map((tech, index) => (
                                <span
                                    key={`${tech.name}-${index}`}
                                    className="w-[237px] h-[68px] flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-[25px] bg-[#1a1a1a] hover:bg-[#2a2a2a] transition"
                                >
                                    <Image src={tech.logo} alt={tech.name} width={20} height={20} />
                                    <span className="RalewayButtons">{tech.name}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="w-full h-px bg-[#8F8F8F] mb-16"></div>

                {/* Impact */}
                <section>
                    <h3 className="NormalCustomHeading mb-6">{data.impact.title}</h3>
                    <p className="text-gray-300 leading-relaxed NormalCustomParagraph mb-18">{data.impact.description}</p>
                </section>

                <div className="w-full h-px bg-[#8F8F8F] mb-16"></div>
            </div>
        </div>
    );
};

export default GoldStory;