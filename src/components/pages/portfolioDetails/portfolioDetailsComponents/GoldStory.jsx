"use client";
import React from 'react';
import Image from "next/image";

// Static imports
import Logo from "../../../assets/GoldStoryLogo.png";
import Rect from "../../../assets/stroyss.png";
import Angular from "../../../assets/AngularLogo.png";
import Flutter from "../../../assets/FlutterLogo.png";
import Kubernetes from "../../../assets/KubernetesLogo.png";
import Bootstrap from "../../../assets/BootstrapLogo.png";

const GoldStory = () => {
    const techStack = [
        { name: "Angular", logo: Angular },
        { name: "Flutter", logo: Flutter },
        { name: "Kubernetes", logo: Kubernetes },
        { name: "Kubernetes", logo: Kubernetes },
        { name: "Bootstrap", logo: Bootstrap }
    ];

    const techStackRow2 = [
        { name: "Angular", logo: Angular },
        { name: "Flutter", logo: Flutter }
    ];

    return (
        <div className="bg-[#0D0D0D] text-white w-[100%]">
            <div className="w-[90%] mx-auto px-4 py-16">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-18 mb-20 min-w-full">
                    {/* Logo & Text */}
                    <div className="space-y-6 text-left flex-1 ">
                        <div className="flex items-center gap-6">
                            <Image src={Logo} alt="Goldstory Logo" width={290} height={110} />
                            <h2 className="text-4xl font-semibold">Goldstory</h2>
                        </div>
                        <p className="text-gray-300 NormalCustomParagraph leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text.
                        </p>
                        <button className="RalewayButtons border w-[189px] h-[68px] border-white rounded-full hover:bg-white hover:text-black transition text-[25px]">
                            Preview
                        </button>
                    </div>

                    {/* Image */}
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src={Rect}
                            alt="Project Screenshot"
                            width={911}
                            height={508}
                            
                        />
                    </div>
                </div>

                {/* Blue divider line */}
                <div className="w-full h-px bg-[#8F8F8F] mb-16"></div>

                {/* Overview */}
                <section className="mb-16">
                    <h3 className="mb-6 NormalCustomHeading">Overview</h3>
                    <p className="text-gray-300 leading-relaxed NormalCustomParagraph">
                        More and more businesses are integrating AI into their tech stacks. By enabling their clients to test and improve
                        the performance of their large language models (LLMs), Braintrust help them ship better products, faster. Acting
                        as development partner, Fluxon built a powerful yet user-friendly interface for the Braintrust product, greatly
                        accelerating its time to market. Services AI devApp devWeb appDatabase engineeringUser testing Deliverables
                        Intuitive user interfacePrompt playgroundLarge dataset visualization
                    </p>
                </section>

                {/* Blue divider line */}
                <div className="w-full h-px bg-[#8F8F8F] mb-16"></div>

                {/* The ask with blue highlight box */}
                <section className="mb-16">
                    <h3 className="NormalCustomHeading mb-6">The ask</h3>
                    <div className="relative">
                        <p className="text-gray-300 leading-relaxed NormalCustomParagraph">
                            As a new company with a small team, Braintrust were looking for a partner they could trust to develop their AI
                            software user interface. Speed to market was critical, so they needed an experienced team that could build the
                            UI rapidly, while implementing client feedback and requests.
                        </p>
                    </div>
                </section>

                {/* Blue divider line */}
                <div className="w-full h-px bg-[#8F8F8F] mb-16"></div>

                {/* Services & Deliverables */}
                <div className="bg-gradient-to-r from-[#13101D] to-[#4F6BF0] p-10 rounded-xl mb-16">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Services Column */}
                        <div>
                            <h4 className="text-4xl font-extrabold mb-6 text-white">Services</h4>
                            <div className="flex flex-wrap gap-4">
                                {["AI dev", "App dev", "Web dev", "User tasting", "Game dev", "Software dev"].map((item) => (
                                    <button
                                        key={item}
                                        className="RalewayButtons px-6 py-3 border border-white text-white rounded-full text-[21px] font-medium hover:bg-white hover:text-black transition duration-200"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Deliverables Column */}
                        <div>
                            <h4 className="text-4xl font-extrabold mb-6 text-white">Deliverables</h4>
                            <div className="flex flex-wrap gap-4">
                                {["Intuitive user interface", "Prompt playground", "Large dataset visualization"].map((item) => (
                                    <button
                                        key={item}
                                        className="RalewayButtons px-6 py-3 border border-white text-white rounded-full text-[21px] font-medium hover:bg-white hover:text-black transition duration-200"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Solution */}
                <section className="mb-16">
                    <h3 className="NormalCustomHeading mb-6">The solution</h3>
                    <p className="text-gray-300 leading-relaxed NormalCustomParagraph mb-8">
                        Fluxon built an easy-to-use interface that enables Braintrust's clients to quickly evaluate and optimize the quality
                        of their LLMs' responses. For Braintrust, adaptability and flexibility in development were key. Together, we rapidly
                        iterated on feedback and requests from users, building new features and finetuning others as needed. The result
                        was a powerful yet elegantly simple UI – one that's helping the next generation of AI-powered companies to
                        perfect their models.
                    </p>
                    <div className="flex flex-wrap gap-x-6 items-start">
                        {/* Heading */}
                        <p className="text-[35px] font-semibold text-base whitespace-nowrap mt-2">
                            Technologies &gt;&gt;
                        </p>

                        {/* Logo list */}
                        <div className="flex flex-wrap gap-4 flex-1 min-w-0">
                            {techStack.map((tech, index) => (
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

                {/* Blue divider line */}
                <div className="w-full h-px bg-[#8F8F8F] mb-16"></div>

                {/* Impact */}
                <section>
                    <h3 className="NormalCustomHeading mb-6">The impact</h3>
                    <p className="text-gray-300 leading-relaxed NormalCustomParagraph mb-18">
                        Fluxon's rapid development approach helped Braintrust get an impressive new product to market swiftly. Trusting
                        us to deliver a robust UI, their team was free to focus on perfecting the backend and growing the business. By
                        building an excellent product and remaining consistently responsive to their clients' needs, Braintrust have proven
                        themselves to be an indispensable partner. This has driven client retention and established their reputation as a
                        leading player in the development of high-functioning AI systems.
                    </p>
                </section>

                {/* Blue divider line */}
                <div className="w-full h-px bg-[#8F8F8F] mb-16"></div>

            </div>
        </div>
    );
};

export default GoldStory;