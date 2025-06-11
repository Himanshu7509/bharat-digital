"use client";

import React, { useState } from "react";
import { Instagram, Linkedin } from "lucide-react";

const TeamMembers = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const teamData = {
    leadership: [
      {
        name: "Zane Sorell",
        role: "Product Developer",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        bgColor: "bg-amber-100",
        social: { instagram: true, linkedin: true },
      },
      {
        name: "Zane Sorell",
        role: "UI/UX Designer",
        image:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        bgColor: "bg-green-500",
        social: { instagram: true, linkedin: true },
      },
      {
        name: "Zane Sorell",
        role: "Senior Developer",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        bgColor: "bg-gray-800",
        social: { instagram: true, linkedin: true },
      },
    ],
    development: [
      {
        name: "Zane Sorell",
        role: "Full-Stack Developer",
        image:
          "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
        bgColor: "bg-orange-400",
        social: { instagram: true, linkedin: true },
      },
      {
        name: "Zane Sorell",
        role: "Backend Developer",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        bgColor: "bg-red-500",
        social: { instagram: true, linkedin: true },
      },
      {
        name: "Zane Sorell",
        role: "React JS Developer",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        bgColor: "bg-gray-600",
        social: { instagram: true, linkedin: true },
      },
    ],
    marketing: [
      {
        name: "Zane Sorell",
        role: "Media & Developer",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        bgColor: "bg-gray-100",
        social: { instagram: true, linkedin: true },
      },
      {
        name: "Zane Sorell",
        role: "Digital Marketing",
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        bgColor: "bg-orange-100",
        social: { instagram: true, linkedin: true },
      },
      {
        name: "Zane Sorell",
        role: "Content Writer",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
        bgColor: "bg-blue-500",
        social: { instagram: true, linkedin: true },
      },
    ],
  };

  const filters = [
    { key: "ALL", label: "ALL" },
    { key: "LEADERSHIP TEAM", label: "LEADERSHIP TEAM" },
    { key: "DEVELOPMENT TEAM", label: "DEVELOPMENT TEAM" },
    { key: "DESIGN TEAM", label: "DESIGN TEAM" },
    { key: "MARKETING TEAM", label: "MARKETING TEAM" },
    { key: "AI/ML EXPERTS", label: "AI/ML EXPERTS" },
    { key: "SECURITY SPECIALISTS", label: "SECURITY SPECIALISTS" },
  ];

  const TeamCard = ({ member }) => (
    <div
      className={`${member.bgColor} rounded-2xl p-4 relative overflow-hidden h-64 flex flex-col justify-end`}
    >
      <div className="bg-white rounded-xl p-4 mx-2">
        <h3 className="font-bold text-gray-800 text-lg mb-1">{member.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{member.role}</p>
        <div className="flex space-x-2">
          {member.social.instagram && (
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Instagram className="w-4 h-4 text-white" />
            </div>
          )}
          {member.social.linkedin && (
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Linkedin className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          TEAM
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
          A company portfolio highlights its services, projects, achievements,
          and expertise.
        </p>
      </div>

      {/* Layout Wrapper */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-64">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            {filters.map((filter, index) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`w-full text-left px-6 py-4 text-sm font-semibold border-b border-gray-100 transition-colors ${
                  activeFilter === filter.key
                    ? index === 0
                      ? "bg-gradient-to-r from-blue-500 to-teal-400 text-white"
                      : "bg-gray-100 text-gray-800"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-12">
          {/* Leadership Team */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
              {teamData.leadership.map((member, index) => (
                <TeamCard key={`leadership-${index}`} member={member} />
              ))}
            </div>
          </div>

          {/* Development Team */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              Development Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
              {teamData.development.map((member, index) => (
                <TeamCard key={`development-${index}`} member={member} />
              ))}
            </div>
          </div>

          {/* Marketing Team */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              Marketing Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
              {teamData.marketing.map((member, index) => (
                <TeamCard key={`marketing-${index}`} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
