"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowUpRight, Menu, X, ChevronRight } from "lucide-react";

// Logo and service icons
import BD from "@/components/assets/bd.png";
import dd1 from "@/components/assets/appdev.png";
import dd2 from "@/components/assets/webdevl.png";
import dd3 from "@/components/assets/softdev.png";
import dd4 from "@/components/assets/uides.png";
import dd5 from "@/components/assets/digmar.png";
import dd6 from "@/components/assets/business.png";
import dd7 from "@/components/assets/erp.png";
import dd8 from "@/components/assets/chatbot.png";
import dd9 from "@/components/assets/software.png";
import dd10 from "@/components/assets/security.png";
import dd11 from "@/components/assets/card.png";
import dd12 from "@/components/assets/ai.png";

// Corrected service routes
const services = [
  { icon: dd1, title: "App Development", path: "appdevelopment" },
  { icon: dd2, title: "Website Development", path: "webdevelopment" },
  { icon: dd3, title: "Software Development", path: "softwaredevelopment" },
  { icon: dd4, title: "UI/UX Design", path: "uidesign" },
  { icon: dd5, title: "Digital Marketing & Solution", path: "digitalmarketing" },
  { icon: dd6, title: "Business Consultant", path: "businesspage" },
  { icon: dd7, title: "ERP/CRM Development", path: "erpdevelopment" },
  { icon: dd8, title: "Chatbot Development", path: "chatbotpage" },
  { icon: dd9, title: "Software Development", path: "softwaredevelopment" },
  { icon: dd10, title: "Web Security", path: "websecurity" },
  { icon: dd11, title: "Digital Card", path: "digitalcard" }, 
  { icon: dd12, title: "Ai/ML", path: "aidevelopment" },
];

const teamItems = [
  { title: "Team" },
  { title: "Faqs" },
];

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [teamMenuOpen, setTeamMenuOpen] = useState(false);

  const closeSidebar = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setTeamMenuOpen(false);
  };

  return (
    <>
      {/* Top Header */}
      <div className="relative z-50 w-full bg-[#0B0C0F]">
        <div className="flex items-center justify-between px-4 md:px-8 py-4">
          <Image src={BD} alt="Logo" className="w-[132px] h-[66px]" />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10 text-white font-medium relative">
            <Link href="/" className="text-[21px] hover:text-[#4F6BF0]">Home</Link>
            <Link href="/about" className="text-[21px] hover:text-[#4F6BF0]">About Us</Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className="flex items-center gap-1 text-[21px] cursor-pointer hover:text-[#4F6BF0]">
                Services <ChevronDown size={18} />
              </span>

              {dropdownOpen && (
                <div className="absolute top-4 left-0 mt-4 w-[600px] bg-white text-black rounded-lg shadow-xl p-6 grid grid-cols-2 gap-4 z-50">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.path}`}
                      className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                    >
                      <Image src={service.icon} alt={service.title} width={30} height={30} />
                      <span className="text-[16px] font-semibold">{service.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/portfolio" className="text-[21px] hover:text-[#4F6BF0]">Portfolio</Link>
            <Link href="/team" className="text-[21px] hover:text-[#4F6BF0]">Team</Link>
            <Link href="/blog" className="text-[21px] hover:text-[#4F6BF0]">Blog</Link>
          </div>

          {/* Contact Button */}
          <Link href="/contact">
            <button className="hidden md:flex justify-center items-center gap-2 w-[183px] h-[57px] bg-gradient-to-r from-[#4F6BF0] to-[#25BAC3] hover:opacity-90 text-white text-[21px] font-medium">
              <ArrowUpRight size={21} />
              Contact Us
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        menuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-4 border-b">
          <Image src={BD} alt="Logo" className="w-[100px] h-[50px]" />
          <button onClick={closeSidebar} className="text-gray-600"><X size={24} /></button>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          <Link href="/" onClick={closeSidebar} className="text-[18px] font-medium text-gray-800 hover:text-[#4F6BF0] py-2">Home</Link>
          <Link href="/about" onClick={closeSidebar} className="text-[18px] font-medium text-gray-800 hover:text-[#4F6BF0] py-2">About Us</Link>

          {/* Mobile Services Dropdown */}
          <div className="py-2">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full text-[18px] font-medium text-gray-800 hover:text-[#4F6BF0]"
            >
              Services
              <ChevronRight size={18} className={`transition-transform ${servicesOpen ? 'rotate-90' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="mt-3 ml-4 space-y-3">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={`/services/${service.path}`}
                    onClick={closeSidebar}
                    className="flex items-center gap-3 py-2 hover:bg-gray-100 rounded-md px-2"
                  >
                    <Image src={service.icon} alt={service.title} width={20} height={20} />
                    <span className="text-[16px] text-gray-700">{service.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/portfolio" onClick={closeSidebar} className="text-[18px] font-medium text-gray-800 hover:text-[#4F6BF0] py-2">Portfolio</Link>

          {/* Mobile Team Dropdown */}
          <div className="py-2">
            <button
              onClick={() => setTeamMenuOpen(!teamMenuOpen)}
              className="flex items-center justify-between w-full text-[18px] font-medium text-gray-800 hover:text-[#4F6BF0]"
            >
              Team
              <ChevronRight size={18} className={`transition-transform ${teamMenuOpen ? 'rotate-90' : ''}`} />
            </button>
            {teamMenuOpen && (
              <div className="mt-3 ml-4 space-y-3">
                {teamItems.map((item, index) => (
                  <Link
                    key={index}
                    href={`/${item.title.toLowerCase()}`}
                    onClick={closeSidebar}
                    className="block py-2 text-[16px] text-gray-700 hover:text-[#4F6BF0] hover:bg-gray-100 rounded-md px-2"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blog" onClick={closeSidebar} className="text-[18px] font-medium text-gray-800 hover:text-[#4F6BF0] py-2">Blog</Link>

          <Link href="/contact" onClick={closeSidebar} className="mt-6">
            <button className="w-full bg-gradient-to-r from-[#4F6BF0] to-[#25BAC3] text-white py-3 rounded-md text-[18px] font-medium hover:opacity-90">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
