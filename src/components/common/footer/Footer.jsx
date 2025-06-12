"use client";
import {
  Send,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import logo from "../../assets/bd.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter & Socials */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
            Don’t Missed Subscribed!
          </h3>
          <div className="flex flex-col sm:flex-row w-full max-w-md">
          
            <div className="w-full max-w-md border border-gray-600 flex items-center px-4 py-2 bg-transparent">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#4F6BF0] hover:bg-[#3f53d9] transition-colors">
                <Send size={20} className="text-white" />
              </button>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4">
            Contact with us
          </h3>
          <div className="flex flex-wrap gap-3">
            {[Instagram, Twitter, Facebook, Linkedin, Youtube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors"
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Company + Services side by side on mobile/tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-12">
          {/* Company Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Company</h3>
            <nav className="space-y-2 text-gray-300">
              {[
                "Home",
                "About Us",
                "Service",
                "Portfolio",
                "Blog",
                "Contact Us",
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Services</h3>
            <nav className="space-y-2 text-gray-300">
              {[
                "App Application",
                "Web Development",
                "UI/UX Design",
                "Digital Marketing",
                "Software Development",
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Logo, Phone, Email */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border border-gray-700 rounded p-6 mb-6 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Image
              src={logo}
              alt="Bharat Digital Logo"
              className="w-32 h-auto"
            />
          </div>
          <div>
            <p className="text-gray-400 mb-1">Phone</p>
            <p className="text-lg font-semibold">+91 615 802 7231</p>
          </div>
          <div>
            <p className="text-gray-400 mb-1">Email Now</p>
            <p className="text-lg font-semibold break-all">
              info@bharatdigital.co
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          Copyright @2025 | All Rights Reserved by Bharatdigital
        </div>
      </div>
    </footer>
  );
}
