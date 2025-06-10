"use client";
import { Send, Instagram, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';
import logo from '../../assets/bd.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Newsletter & Social Icons */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Don't Missed Subscribed!</h3>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 bg-transparent border border-gray-600 rounded-l-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-r-lg transition-colors">
                <Send size={20} />
              </button>
            </div>

            <h3 className="text-2xl font-bold mb-4">Contact with us</h3>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Company</h3>
            <nav className="space-y-3 text-gray-300">
              {["Home", "About Us", "Service", "Portfolio", "Blog", "Contact Us"].map((item, i) => (
                <a key={i} href="#" className="block hover:text-white transition-colors">{item}</a>
              ))}
            </nav>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Services</h3>
            <nav className="space-y-3 text-gray-300">
              {["App Application", "Web Development", "UI/UX Design", "Digital Marketing", "Software Development"].map((item, i) => (
                <a key={i} href="#" className="block hover:text-white transition-colors">{item}</a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 border border-gray-700 rounded p-4 mb-6">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="w-32 h-16 flex items-center justify-center">
              <Image src={logo} alt="Bharat Digital Logo" />
            </div>
          </div>

          {/* Phone */}
          <div className="text-center">
            <p className="text-gray-400 mb-1">Phone</p>
            <p className="text-xl font-semibold">+91 615 802 7231</p>
          </div>

          {/* Email */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-1">Email Now</p>
            <p className="text-xl font-semibold">info@bharatdigital.co</p>
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
