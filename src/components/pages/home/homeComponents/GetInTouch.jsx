"use client";
import { postApi } from "@/components/utils/Api";
import React, { useState } from "react";

const reasons = [
  "Website Development",
  "UI / UX Design",
  "Digital Marketing",
  "App Development",
  "Software Development",
  "Web Security",
  "Chatbot Development",
  "Business Consultant",
  "CRM / ERP",
  "Game Development",
  "AI / ML",
  "Digital Card",
];

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    email:"k23@gmail.com"

  });

  const [selectedReasons, setSelectedReasons] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleReason = (reason) => {
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason]
    );
  };

const handleSubmit = async(e) => {
  e.preventDefault();



  const finalData = {
    ...formData,
    reason: selectedReasons,
  };

  console.log("Form Submitted:", finalData);
  const response = await postApi(finalData)

  console.log(response);
  
}

  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 py-16 md:px-20 w-full flex justify-center items-center">
      <div className="w-full max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] Heading mb-10 text-center">Let’s Get in Touch</h2>

        {/* Input Fields */}
        <div className="grid md:grid-cols-2 gap-6 mb-6 text-[20px]">
          <div className="bg-[#262626] px-8 py-3">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-transparent text-white placeholder-[#D8D8D8] border-b border-[#666] py-4 outline-none focus:border-white transition-all"
            />
          </div>

          <div className="bg-[#262626] px-8 py-3">
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-transparent text-white placeholder-[#D8D8D8] border-b border-[#666] py-4 outline-none focus:border-white transition-all"
            />
          </div>

         

        

        

        </div>

        {/* Message Box */}
        <div className="mb-8 w-full bg-[#262626] px-8 py-3 text-[20px]">
          <textarea
            rows="4"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full bg-transparent text-white placeholder-[#D8D8D8] border-b border-[#666] py-4 outline-none resize-none focus:border-white transition-all"
          />
        </div>

        {/* Reason Checkboxes */}
        <div className="bg-[#262626] p-8 rounded-md mb-6">
          <h3 className="text-[30px] font-semibold mb-4">Reason in Comment</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-4">
            {reasons.map((reason) => (
              <label key={reason} className="flex items-center gap-3">
                <span className="relative w-5 h-5 flex items-center justify-center border-2 border-white rounded-sm">
                  <input
                    type="checkbox"
                    checked={selectedReasons.includes(reason)}
                    onChange={() => toggleReason(reason)}
                    className="absolute opacity-0 w-10 h-10 cursor-pointer"
                  />
                  {selectedReasons.includes(reason) && (
                    <svg
                      className="w-4 h-4 text-[#FDFFFA]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                <span className="text-[25px] text-[#FDFFFA] font-medium">{reason}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-left">
          <button   onClick={handleSubmit}
          className="mt-6 bg-gradient-to-r from-[#4F6BF0] to-[#25BAC3] text-white px-12 py-3 uppercase rounded-sm font-semibold text-[25px]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
