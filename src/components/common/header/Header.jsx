"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowUpRight, Menu, X, ChevronRight } from "lucide-react";

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
import faqIcon from "@/components/assets/faq.png";
import teamIcon from "@/components/assets/team.png";

const services = [
  { icon: dd1, title: "App Development", path: "app-development" },
  { icon: dd2, title: "Website Development", path: "web-development" },
  { icon: dd3, title: "Software Development", path: "software-development" },
  { icon: dd4, title: "UI/UX Design", path: "ui-design" },
  {
    icon: dd5,
    title: "Digital Marketing & Solution",
    path: "digital-marketing",
  },
  { icon: dd6, title: "Business Consultant", path: "business-consultant" },
  { icon: dd7, title: "ERP/CRM Development", path: "erp-development" },
  { icon: dd8, title: "Chatbot Development", path: "chatbot-development" },
  { icon: dd9, title: "Game Development", path: "game-development" },
  { icon: dd10, title: "Web Security", path: "web-security" },
  { icon: dd11, title: "Digital Card", path: "digital-card" },
  { icon: dd12, title: "Ai/ML", path: "ai-ml" },
];

const teamItems = [
  { icon: teamIcon, title: "Team", path: "team" },
  { icon: faqIcon, title: "FAQs", path: "faq" },
];

const Header = () => {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [teamMenuOpen, setTeamMenuOpen] = useState(false);

  const [servicesTimeout, setServicesTimeout] = useState(null);
  const [teamTimeout, setTeamTimeout] = useState(null);

  // Helper function to check if a path is active
  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  // Helper function to get link classes
  const getLinkClasses = (path, baseClasses = "text-[21px]") => {
    const activeClass = isActive(path) ? "text-[#4F6BF0]" : "";
    const hoverClass = "hover:text-[#4F6BF0]";
    return `${baseClasses} ${activeClass} ${hoverClass}`;
  };

  // Helper function for mobile link classes
  const getMobileLinkClasses = (path, baseClasses = "text-[18px] font-medium py-2") => {
    const activeClass = isActive(path) ? "text-[#4F6BF0]" : "text-gray-800";
    const hoverClass = "hover:text-[#4F6BF0]";
    return `${baseClasses} ${activeClass} ${hoverClass}`;
  };

  const closeSidebar = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setTeamMenuOpen(false);
  };

  const closeDropdowns = () => {
    setDropdownOpen(false);
    setTeamDropdownOpen(false);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
      setServicesTimeout(null);
    }
    setDropdownOpen(true);
    setTeamDropdownOpen(false);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 500);
    setServicesTimeout(timeout);
  };

  const handleTeamMouseEnter = () => {
    if (teamTimeout) {
      clearTimeout(teamTimeout);
      setTeamTimeout(null);
    }
    setTeamDropdownOpen(true);
    setDropdownOpen(false);
  };

  const handleTeamMouseLeave = () => {
    const timeout = setTimeout(() => {
      setTeamDropdownOpen(false);
    }, 500);
    setTeamTimeout(timeout);
  };

  return (
    <>
      {/* Top Header */}
      <div className="sticky top-0 z-50 w-full bg-[#0B0C0F]">
        <div className="flex items-center justify-between px-4 md:px-8 py-4">
          <Link href="/">
            <Image
              src={BD}
              alt="Logo"
              className="w-[60px] md:w-[132px] h-[30px] md:h-[66px]"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-10 text-white font-medium relative">
            <Link href="/" className={getLinkClasses("/")}>
              Home
            </Link>
            <Link href="/about" className={getLinkClasses("/about")}>
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <div className={`flex items-center gap-1 cursor-pointer ${getLinkClasses("/services")}`}>
                <Link href="/services" className="hover:text-[#4F6BF0]">
                  Services
                </Link>
                <ChevronDown size={18} />
              </div>

              {dropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-[600px] bg-white text-black rounded-lg shadow-xl p-6 grid grid-cols-2 gap-4 z-50"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.path}`}
                      className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-colors"
                      onClick={closeDropdowns}
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={30}
                        height={30}
                      />
                      <span className="text-[16px] font-semibold">
                        {service.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/portfolio" className={getLinkClasses("/portfolio")}>
              Portfolio
            </Link>

            <div
              className="relative"
              onMouseEnter={handleTeamMouseEnter}
              onMouseLeave={handleTeamMouseLeave}
            >
              <div className={`flex items-center gap-1 cursor-pointer ${getLinkClasses("/team")}`}>
                <Link href="/team" className="hover:text-[#4F6BF0]">
                  Team
                </Link>
                <ChevronDown size={18} />
              </div>

              {teamDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-[300px] bg-white text-black rounded-lg shadow-xl p-4 z-50"
                  onMouseEnter={handleTeamMouseEnter}
                  onMouseLeave={handleTeamMouseLeave}
                >
                  {teamItems.map((item, index) => (
                    <Link
                      key={index}
                      href={`/${item.path}`}
                      className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-md cursor-pointer transition-colors"
                      onClick={closeDropdowns}
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={30}
                        height={30}
                      />
                      <span className="text-[16px] font-semibold">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className={getLinkClasses("/blog")}>
              Blog
            </Link>
          </div>

          <Link href="/contact">
            <button className="hidden min-[1000px]:flex justify-center items-center gap-2 w-[183px] h-[57px] bg-gradient-to-r from-[#4F6BF0] to-[#25BAC3] hover:opacity-90 text-white text-[21px] font-medium">
              <ArrowUpRight size={21} />
              Contact Us
            </button>
          </Link>
          <button
            className="hidden max-[1000px]:block text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '' : <Menu size={30} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar - Fixed to enable scrolling */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Fixed Header */}
        <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
          <Image src={BD} alt="Logo" className="w-[100px] h-[50px]" />
          <button onClick={closeSidebar} className="text-gray-600">
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/"
              onClick={closeSidebar}
              className={getMobileLinkClasses("/")}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeSidebar}
              className={getMobileLinkClasses("/about")}
            >
              About Us
            </Link>

            <div className="py-2">
              <button className={`flex items-center justify-between w-full ${getMobileLinkClasses("/services")}`}>
                <Link href="/services" onClick={closeSidebar}>
                  Services
                </Link>
                <ChevronRight
                  onClick={() => setServicesOpen(!servicesOpen)}
                  size={18}
                  className={`transition-transform ${
                    servicesOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <div className="mt-3 ml-4 space-y-3">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.path}`}
                      onClick={closeSidebar}
                      className={`flex items-center gap-3 py-2 rounded-md px-2 ${
                        isActive(`/services/${service.path}`)
                          ? "bg-blue-50 text-[#4F6BF0]"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={20}
                        height={20}
                      />
                      <span className={`text-[16px] ${
                        isActive(`/services/${service.path}`)
                          ? "text-[#4F6BF0] font-semibold"
                          : "text-gray-700"
                      }`}>
                        {service.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              onClick={closeSidebar}
              className={getMobileLinkClasses("/portfolio")}
            >
              Portfolio
            </Link>

            <div className="py-2">
              <button
                onClick={() => setTeamMenuOpen(!teamMenuOpen)}
                className={`flex items-center justify-between w-full ${getMobileLinkClasses("/team")}`}
              >
                Team
                <ChevronRight
                  size={18}
                  className={`transition-transform ${
                    teamMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
              {teamMenuOpen && (
                <div className="mt-3 ml-4 space-y-3">
                  {teamItems.map((item, index) => (
                    <Link
                      key={index}
                      href={`/${item.path}`}
                      onClick={closeSidebar}
                      className={`flex items-center gap-3 py-2 rounded-md px-2 ${
                        isActive(`/${item.path}`)
                          ? "bg-blue-50 text-[#4F6BF0]"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={20}
                        height={20}
                      />
                      <span className={`text-[16px] ${
                        isActive(`/${item.path}`)
                          ? "text-[#4F6BF0] font-semibold"
                          : "text-gray-700"
                      }`}>
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              onClick={closeSidebar}
              className={getMobileLinkClasses("/blog")}
            >
              Blog
            </Link>

            <Link href="/contact" onClick={closeSidebar} className="mt-6">
              <button className="w-full bg-gradient-to-r from-[#4F6BF0] to-[#25BAC3] text-white py-3 rounded-md text-[18px] font-medium hover:opacity-90">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;