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
    email: "",
  });

  const [selectedReasons, setSelectedReasons] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handlePaste = (e) => {
    // Remove any formatting from pasted content
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData('text');
    const { name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: paste }));
    
    // Clear validation error when pasting
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const toggleReason = (reason) => {
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason]
    );
  };

  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanedPhone = formData.phone.replace(/[\s\-\(\)\.]/g, '');
    
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (cleanedPhone.length < 10) {
      errors.phone = "Phone number must be at least 10 digits";
    } else if (cleanedPhone.length > 15) {
      errors.phone = "Phone number cannot exceed 15 digits";
    } else if (!phoneRegex.test(cleanedPhone)) {
      errors.phone = "Please enter a valid phone number";
    }

    return errors;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      message: "",
      email: "",
    });
    setSelectedReasons([]);
    setIsSubmitted(false);
    setSubmitError(null);
    setValidationErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setSubmitError(null);
    setValidationErrors({});
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setIsSubmitting(true);

    const finalData = {
      ...formData,
      reason: selectedReasons,
    };

    try {
      console.log("Form Submitted:", finalData);
      const response = await postApi(finalData);
      console.log(response);
      
      // Simulate success
      setIsSubmitted(true);
      
      // Optional: Reset form after a delay
      // setTimeout(() => {
      //   resetForm();
      // }, 5000);
      
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success UI
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#121212] text-white px-6 py-16 md:px-20 w-full flex justify-center items-center">
        <div className="w-full max-w-5xl text-center">
          <div className="bg-[#262626] rounded-lg p-12 mb-8">
            {/* Success Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-[#4F6BF0] to-[#25BAC3] rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[45px] Heading mb-4 text-white">
              Thank You!
            </h2>
            
            <p className="text-xl md:text-2xl text-[#FDFFFA] mb-2">
              Your message has been sent successfully.
            </p>
            
            <p className="text-lg text-gray-300 mb-8">
              We'll get back to you within 24 hours.
            </p>
            
            {/* Summary of submitted data */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 mb-8 text-left">
              <h3 className="text-xl font-semibold mb-4 text-center">Submission Summary</h3>
              <div className="space-y-2">
                <p><span className="text-gray-400">Name:</span> {formData.name}</p>
                <p><span className="text-gray-400">Email:</span> {formData.email}</p>
                <p><span className="text-gray-400">Phone:</span> {formData.phone}</p>
                {selectedReasons.length > 0 && (
                  <p><span className="text-gray-400">Services:</span> {selectedReasons.join(", ")}</p>
                )}
                {formData.message && (
                  <p><span className="text-gray-400">Message:</span> {formData.message}</p>
                )}
              </div>
            </div>
          </div>
          
          <button
            onClick={resetForm}
            className="bg-gradient-to-r from-[#4F6BF0] to-[#25BAC3] text-white px-8 py-3 uppercase rounded-sm font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  // Form UI
  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 py-16 md:px-20 w-full flex justify-center items-center">
      <div className="w-full max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] Heading mb-10 text-center">
          Let's Get in Touch
        </h2>

        {/* Error Message */}
        {submitError && (
          <div className="bg-red-600 text-white p-4 rounded-md mb-6 text-center">
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit}  autoComplete="off">
          <div className="bg-[#262626] px-8 py-3 mb-4 text-[20px]">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              onPaste={handlePaste}
              disabled={isSubmitting}
              style={{ color: 'white', backgroundColor: 'transparent' }}
              className={`w-full bg-transparent text-white border-b py-4 outline-none transition-all disabled:opacity-50 ${
                validationErrors.name ? 'border-red-500' : 'border-[#666] focus:border-white'
              }`}
            />
            {validationErrors.name && (
              <p className="text-red-400 text-sm mt-1">{validationErrors.name}</p>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6 text-[20px]">
            <div className="bg-[#262626] px-8 py-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                onPaste={handlePaste}
                disabled={isSubmitting}
                style={{ color: 'white', backgroundColor: 'transparent' }}
                className={`w-full bg-transparent text-white border-b py-4 outline-none transition-all disabled:opacity-50 ${
                  validationErrors.email ? 'border-red-500' : 'border-[#666] focus:border-white'
                }`}
              />
              {validationErrors.email && (
                <p className="text-red-400 text-sm mt-1">{validationErrors.email}</p>
              )}
            </div>

            <div className="bg-[#262626] px-8 py-3">
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleInputChange}
                onPaste={handlePaste}
                disabled={isSubmitting}
                style={{ color: 'white', backgroundColor: 'transparent' }}
                className={`w-full bg-transparent text-white border-b py-4 outline-none transition-all disabled:opacity-50 ${
                  validationErrors.phone ? 'border-red-500' : 'border-[#666] focus:border-white'
                }`}
              />
              {validationErrors.phone && (
                <p className="text-red-400 text-sm mt-1">{validationErrors.phone}</p>
              )}
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
              onPaste={handlePaste}
              disabled={isSubmitting}
              style={{ color: 'white', backgroundColor: 'transparent' }}
              className="w-full bg-transparent text-white border-b border-[#666] py-4 outline-none resize-none focus:border-white transition-all disabled:opacity-50"
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
                      disabled={isSubmitting}
                      className="absolute opacity-0 w-10 h-10 cursor-pointer disabled:cursor-not-allowed"
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
                  <span className={`text-[25px] text-[#FDFFFA] font-medium ${isSubmitting ? 'opacity-50' : ''}`}>
                    {reason}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-left">
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 bg-gradient-to-r from-[#4F6BF0] to-[#25BAC3] text-white px-12 py-3 uppercase rounded-sm font-semibold text-[25px] disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity flex items-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;