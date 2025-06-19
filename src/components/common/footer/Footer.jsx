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
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter, Company Links & Services - All in one row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Newsletter */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Don't Missed Subscribed!
            </h3>
          <div className="w-full border border-gray-600 flex items-center px-4 py-2 bg-transparent rounded">
  <input
    type="email"
    placeholder="Enter Email"
    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
  />
  <button className="md:ml-[-10px] w-10 h-10 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#4F6BF0] hover:bg-[#3f53d9] transition-colors">
    <Send className="text-white text-[20px] md:text-[15px] lg:text-[24px]" />
  </button>
</div>

          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Company</h3>
            <nav className="space-y-2 text-gray-300">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Service", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Team", path: "/team" },
                { name: "Blog", path: "/blog" },
                { name: "Contact Us", path: "/contact" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  className="block hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Our Services
            </h3>
            <nav className="space-y-2 text-gray-300">
              {[
                { name: "App Development", path: "/services/app-development" },
                { name: "Website Development", path: "/services/web-development" },
                { name: "Software Development", path: "/services/software-development" },
                { name: "UI/UX Design", path: "/services/ui-design" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  className="block hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
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