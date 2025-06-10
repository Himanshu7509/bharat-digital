'use client';
import React from 'react';
import Image from 'next/image';

import html from '@/components/assets/html.png';
import css from '@/components/assets/css.png';
import js from '@/components/assets/js.png';
import azure from '@/components/assets/azure.png';
import boot from '@/components/assets/boot.png';
import django from '@/components/assets/django.png';
import flutter from '@/components/assets/flutter.png';
import kotlin from '@/components/assets/kotlin.png';
import php from '@/components/assets/php.png';
import python from '@/components/assets/python.png';
import react from '@/components/assets/react.png';
import angular from '@/components/assets/angluar.png';
import ios from '@/components/assets/apple.png';

const techStack = [
  { src: html, label: 'Html' },
  { src: css, label: 'CSS3' },
  { src: js, label: 'Javascript' },
  { src: angular, label: 'Angular' },
  { src: python, label: 'Python' },
  { src: ios, label: 'iOS' },
  { src: azure, label: 'Azure' },
  { src: react, label: 'React Js' },
  { src: php, label: 'PHP' },
  { src: boot, label: 'Bootstrap' },
  { src: django, label: 'Django' },
  { src: kotlin, label: 'kotlin' },
  { src: flutter, label: 'Flutter' },
];

const OurTech = () => {
  return (
    <div
      className="w-full py-20"
      style={{
        background: 'linear-gradient(to right, #7572FD1F, #FF8B4A1F)',
      }}
    >
      <div className="w-[70%] mx-auto text-center">
        <p className="text-[#6366F1] font-medium">Technology</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Our <span className="text-[#333]">TechStack</span>
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-20">
          {techStack.map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={tech.src} alt={tech.label} className="w-12 h-12 object-contain" />
              <p className="mt-2 font-medium">{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTech;
