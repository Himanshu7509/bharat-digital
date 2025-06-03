"use client";
import React from 'react';
import Image from "next/image";

// Static imports
import Logo from "../../../assets/GoldStoryLogo.png";
import Rect from "../../../assets/Rectangle.png";
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
        <div className="bg-[#0D0D0D] text-white">
            <div className="max-w-5xl mx-auto px-6 py-16">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
                    {/* Logo & Text */}
                    <div className="space-y-6 text-left flex-1 max-w-sm">
                        <div className="flex items-center gap-3">
                            <Image src={Logo} alt="Goldstory Logo" width={120} height={32} />
                            <h2 className="text-xl font-semibold">Goldstory</h2>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text.
                        </p>
                        <button className="px-6 py-2.5 border border-white rounded-full hover:bg-white hover:text-black transition text-sm">
                            Preview
                        </button>
                    </div>

                    {/* Image */}
                    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700 flex-1 max-w-2xl">
                        <Image
                            src={Rect}
                            alt="Project Screenshot"
                            width={800}
                            height={500}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Blue divider line */}
                <div className="w-full h-px bg-[#8F8F8F] mb-16"></div>

                {/* Overview */}
                <section className="mb-16">
                    <h3 className="text-3xl font-bold mb-6">Overview</h3>
                    <p className="text-gray-300 leading-relaxed text-base">
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
                    <h3 className="text-3xl font-bold mb-6">The ask</h3>
                    <div className="relative">
                        <p className="text-gray-300 leading-relaxed text-base">
                            As a new company with a small team, Braintrust were looking for a partner they could trust to develop their AI
                            software user interface. Speed to market was critical, so they needed an experienced team that could build the
                            UI rapidly, while implementing client feedback and requests.
                        </p>
                        {/* Blue highlight box */}
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded text-lg font-bold">
                            1533 x 392
                        </div>
                    </div>
                </section>

                {/* Blue divider line */}
                <div className="w-full h-px bg-[#8F8F8F] mb-16"></div>

                {/* Services & Deliverables */}
                <div className="bg-gradient-to-r from-[#1a1a3e] to-[#4a4b8e] p-8 rounded-lg mb-16">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl font-bold mb-6 text-left">Services</h4>
                            <div className="flex flex-wrap gap-3">
                                {["AI dev", "App dev", "Web dev", "User testing", "Game dev", "Software dev"].map((item) => (
                                    <span key={item} className="px-4 py-2 bg-transparent border border-white text-white rounded-full text-sm">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-6 text-left">Deliverables</h4>
                            <div className="flex flex-wrap gap-3">
                                {["Intuitive user interface", "Prompt playground", "Large dataset visualization"].map((item) => (
                                    <span key={item} className="px-4 py-2 bg-transparent border border-white text-white rounded-full text-sm">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                {/* Solution */}
                <section className="mb-16">
                    <h3 className="text-3xl font-bold mb-6">The solution</h3>
                    <p className="text-gray-300 leading-relaxed text-base mb-8">
                        Fluxon built an easy-to-use interface that enables Braintrust's clients to quickly evaluate and optimize the quality
                        of their LLMs' responses. For Braintrust, adaptability and flexibility in development were key. Together, we rapidly
                        iterated on feedback and requests from users, building new features and finetuning others as needed. The result
                        was a powerful yet elegantly simple UI – one that's helping the next generation of AI-powered companies to
                        perfect their models.
                    </p>

                    <div className="space-y-4">
                        <p className="font-semibold text-base">Technologies &gt;&gt;</p>
                        <div className="space-y-3">
                            {/* First row of technologies */}
                            <div className="flex flex-wrap gap-4">
                                {techStack.map((tech, index) => (
                                    <span key={`${tech.name}-${index}`} className="px-4 py-2 border border-gray-600 rounded-full flex items-center gap-2 text-sm">
                                        <Image src={tech.logo} alt={tech.name} width={20} height={20} />
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                            {/* Second row of technologies */}
                            <div className="flex flex-wrap gap-4">
                                {techStackRow2.map((tech, index) => (
                                    <span key={`row2-${tech.name}-${index}`} className="px-4 py-2 border border-gray-600 rounded-full flex items-center gap-2 text-sm">
                                        <Image src={tech.logo} alt={tech.name} width={20} height={20} />
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blue divider line */}
                <div className="w-full h-px bg-[#8F8F8F] mb-16"></div>

                {/* Impact */}
                <section>
                    <h3 className="text-3xl font-bold mb-6">The impact</h3>
                    <p className="text-gray-300 leading-relaxed text-base mb-18">
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