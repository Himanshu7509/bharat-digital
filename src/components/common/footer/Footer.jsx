"use client";
import { useState } from "react";
import {
  Send,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  CheckCircle,
} from "lucide-react";
import logo from "../../assets/bd.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail("");
    }, 1000);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setEmail("");
  };

  // Social media links configuration
  const socialLinks = [
    {
      Icon: Instagram,
      url: "https://www.instagram.com/bharatdigital.co/",
      label: "Instagram"
    },
   
    {
      Icon: Facebook,
      url: "https://www.facebook.com/bharatdigital.co/",
      label: "Facebook"
    },
    {
      Icon: Linkedin,
      url: "https://www.linkedin.com/company/bharatdigital-services/",
      label: "LinkedIn"
    },
    {
      Icon: Youtube,
      url: "https://www.youtube.com/@bharatdigital-co",
      label: "YouTube"
    }
  ];

  return (
    <footer className="bg-[#151515] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter & Socials */}
        <div className="mb-12">
          {!isSubmitted ? (
            <>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Don't Missed Subscribed!
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full max-w-md">
                <div className="w-full max-w-md border border-gray-600 flex items-center px-4 py-2 bg-transparent">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    disabled={isLoading}
                    required
                  />
                  <button 
                    type="submit"
                    disabled={isLoading || !email.trim()}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#4F6BF0] hover:bg-[#3f53d9] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Send size={20} className="text-white" />
                    )}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle size={48} className="text-green-500 mr-3" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-green-500">
                    Successfully Subscribed!
                  </h3>
                  <p className="text-gray-400 mt-2">
                    Thank you for subscribing to our newsletter.
                  </p>
                </div>
              </div>
              <button
                onClick={resetForm}
                className="px-6 py-2 bg-[#4F6BF0] hover:bg-[#3f53d9] rounded-full transition-colors text-sm"
              >
                Subscribe Another Email
              </button>
            </div>
          )}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 mb-12">
          {/* Social */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4">
              Contact with us
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ Icon, url, label }, i) => (
               <a
  key={i}
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`Follow us on ${label}`}
  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 hover:bg-gray-800 transition-colors"
>
  <Icon size={18} className="text-white pointer-events-none" />
</a>

              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-12 md:gap-40 lg:gap-60">
            {/* Company Links */}
            <div>
              <h3 className="text-xl sm:text-2xl font-medium mb-4">Company</h3>
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
                    className="block hover:text-[#4F6BF0] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-xl sm:text-2xl font-medium mb-4">
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
                    className="block hover:text-[#4F6BF0] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
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
            <p className="text-lg font-semibold">+1 615 802 7231</p>
          </div>
          <div>
            <p className="text-gray-400 mb-1">Email Now</p>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bharatdigital.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold break-all hover:text-[#4F6BF0] transition-colors cursor-pointer"
            >
              info@bharatdigital.co
            </a>
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