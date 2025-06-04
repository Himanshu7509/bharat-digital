"use client"
import { Send, Instagram, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';
import logo from '../../assets/bd.png'
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Don't Missed Subscribed!</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 bg-transparent border border-gray-600 rounded-l-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-r-lg transition-colors">
                <Send size={20} />
              </button>
            </div>
            
            {/* Contact Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6">Contact with us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Company</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">About Us</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Service</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Portfolio</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Blog</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Contact Us</a>
            </nav>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Our Services</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">App Application</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Web Development</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">UI/UX Design</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Digital Marketing</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Software Development</a>
            </nav>
          </div>
        </div>

        {/* Bottom Contact Info */}
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 mb-8">
          {/* Logo Placeholder */}
          <div className="flex items-center">
            <div className="w-32 h-16 rounded flex items-center justify-center">
              <Image src={logo} alt="" />
            </div>
          </div>

          {/* Phone */}
          <div className="text-center">
            <p className="text-gray-400 mb-1">Phone</p>
            <p className="text-xl font-semibold">+91 615 802 7231</p>
          </div>

          {/* Email */}
          <div className="text-center">
            <p className="text-gray-400 mb-1">Email Now</p>
            <p className="text-xl font-semibold">info@bharatdigital.co</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400">
            Copyright @2025 | All Rights Reserved by | All Rights Reserved by Bharatdigital
          </p>
        </div>
      </div>
    </footer>
  );
}