"use client";
import React from "react";
import Image from "next/image";
import BD from "@/components/assets/bd.png";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="p-2 bg-[#0B0C0F] h-[95px] w-full flex items-center justify-between px-8">
      <div className="flex items-center gap-2">
        <Image
          src={BD}
          alt="Bharat Digital Logo"
          className="w-[132px] h-[66px]"
        />
      </div>

      <div className="flex items-center gap-10 text-white font-medium">
        <Link href="/">
          <span className="text-[21px] hover:text-[#4F6BF0]">Home</span>
        </Link>
        <Link href="/about">
          <span className="text-[21px] hover:text-[#4F6BF0]">About Us</span>
        </Link>
        <Link href="/services">
          <span className="text-[21px] hover:text-[#4F6BF0]">Services</span>
        </Link>
        <Link href="/portfolio">
          <span className="text-[21px] hover:text-[#4F6BF0]">Portfolio</span>
        </Link>
        <Link href="/team">
          <span className="text-[21px] hover:text-[#4F6BF0]">Team</span>
        </Link>
        <Link href="/blog">
          <span className="text-[21px] hover:text-[#4F6BF0]">Blog</span>
        </Link>
      </div>

      <Link href="/contact">
      <button className="flex justify-center cursor-pointer items-center gap-2 w-[183px] h-[57px] bg-gradient-to-r from-[#4F6BF0] to-[#25BAC3] hover:bg-[#25BAC3] text-white text-[21px] font-medium">
        <ArrowUpRight size={21} />
        Contact Us
      </button>
      </Link>
    </div>
  );
};

export default Header;
