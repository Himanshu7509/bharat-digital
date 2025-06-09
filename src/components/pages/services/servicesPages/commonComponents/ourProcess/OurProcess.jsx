'use client';
import React from 'react';
import Image from 'next/image';
import img1 from '@/components/assets/p1.png';
import img2 from '@/components/assets/p2.png';
import img3 from '@/components/assets/p3.png';
import img4 from '@/components/assets/p4.png';
import img5 from '@/components/assets/p5.png';

const steps = [
  {
    title: 'Planning and Research',
    subtitle: 'Understanding the Project Scope and Goals',
    desc: `Before any design or coding begins, it’s essential to understand what the website aims to achieve. This phase involves gathering requirements, identifying the target audience, and defining the project’s objectives. Planning also includes researching competitors and outlining the site structure with a sitemap or wireframe to create a clear roadmap.`,
    img: img1,
  },
  {
    title: 'Design Phase',
    subtitle: 'Creating Visual Concepts and Layouts',
    desc: `In the design phase, web designers focus on the visual elements of the website such as layout, color schemes, typography, and user interface (UI) tools like Figma or Adobe XD are used to create mockups or prototypes. This step ensures the site is visually appealing and aligns with the brand identity while providing a seamless user experience (UX).`,
    img: img2,
  },
  {
    title: 'Development',
    subtitle: 'Turning Designs into Functional Websites',
    desc: `This is where the actual coding takes place. Front-end developers convert design files into HTML, CSS, and JavaScript, while back-end developers work on server-side programming, databases, and content management systems. The goal is to build a responsive, fast, and secure website that functions smoothly across all devices and browsers.`,
    img: img3,
  },
  {
    title: 'Testing and Review',
    subtitle: 'Ensuring Quality and Performance',
    desc: `Before going live, the website is rigorously tested for functionality, compatibility, speed and security. This includes checking forms, links, responsiveness, and loading times. Bugs and errors are fixed during this stage to ensure that the site works as intended and provides a smooth user experience.`,
    img: img4,
  },
  {
    title: 'Launch and Maintenance',
    subtitle: 'Deploying and Keeping the Website Updated',
    desc: `After successful testing, the website is launched to the public. But the process doesn’t end there—regular maintenance is also crucial. This includes patching errors, fixing issues, enhancing security, and adding new features as needed. Ongoing support ensures the website remains effective and up-to-date with the latest trends and technologies.`,
    img: img5,
  },
];

const OurProcess = () => {
  return (
    <div className="w-full bg-black py-20 text-white">
      <div className="w-[90%] mx-auto">
        <p className="text-center text-[#6366F1] font-medium">Our Process</p>
        <h2 className="text-center text-4xl md:text-5xl font-bold leading-tight mt-2">
          Proven method for building exceptional products
        </h2>

        <div className="mt-16 flex flex-col gap-16 relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#3F3F46]">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col lg:flex-row items-center justify-between gap-10 ${
                idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <span className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#4F6BF0] rounded-full z-10 top-[0%] translate-y-[-50%]" />

              {/* Image */}
              <div className="w-full lg:w-1/2">
                <Image src={step.img} alt={step.title} className="rounded-md" />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-[45px] font-bold text-[#FFFFFF]">{step.title}</h3>
                <h4 className="text-[38px] font-[400]">{step.subtitle}</h4>
                <p className="text-[25px] font-[400] leading-[40px]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
