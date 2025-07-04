"use client";
import React from "react";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin, CheckCircle, Loader2 } from "lucide-react";
import mapIcon from '@/components/assets/gmap.png'
import { useState } from "react";
import { postApi } from "@/components/utils/Api";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);
    
    try {
      console.log("Form submitted:", formData);
      const response = await postApi(formData);
      console.log(response);
      
      // Simulate API delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      // Reset form data
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendAnother = () => {
    setIsSubmitted(false);
    setSubmitError(null);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Section - Company Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  You Will Grow, You Will Succeed.
                  <br />
                  We Promise That
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
               We're here to help you! Reach out anytime—our team is ready to assist. Whether you have questions, feedback, or just want to connect, we're only a message away.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Call for inquiry */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Call for inquiry
                    </h3>
                    <p className="text-gray-600">+1 615 802 7231</p>
                  </div>
                </div>

                {/* Send us email */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Send us email
                    </h3>
                    <p className="text-gray-600">bharatdigital970@gmail.com</p>
                  </div>
                </div>

                {/* Opening hours */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Opening hours
                    </h3>
                    <p className="text-gray-600">
                      Mon - Fri: 9:30 AM - 7:00 PM
                    </p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">
                      Office No-2505B, Iconic Corenthum, Floor- 25, Sector 62,
                      Noida, Uttar Pradesh 201301
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-white rounded-lg p-4 shadow-sm border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#02080a1a] p-2 rounded-full flex items-center justify-center">
                      <Image src={mapIcon} alt="mapIcon" className="w-full"/>
                    </div>
                    <span className="text-gray-900 font-medium">
                      Office No-2505B, Iconic Corenthum, Floor- 25, Sector 62,
                      Noida, Uttar Pradesh 201301
                    </span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    View on map
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Contact Info
                    </h2>
                    <p className="text-gray-600">
                      We typically respond within 24 hours.
                    </p>
                  </div>

                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm">{submitError}</p>
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          disabled={isLoading}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Contact No
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your Contact No"
                          disabled={isLoading}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your E-mail address"
                        disabled={isLoading}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                        required
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Your message"
                        disabled={isLoading}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send message"
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                // Success State UI
                <div className="text-center py-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Our team will review your message</li>
                        <li>• You'll receive a confirmation email shortly</li>
                        <li>• We'll respond within 24 hours during business days</li>
                      </ul>
                    </div>
                    
                    <button
                      onClick={handleSendAnother}
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[480px] overflow-hidden p-6 mb-4">
        <iframe
          title="Kartik EngiTech Services Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14019.876006831925!2d77.3627048!3d28.6263518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce58ce4b20b7b%3A0xce2480a953686058!2sKartik%20EngiTech%20Services%20Private%20Limited%2C%20Block%20A%2C%20Industrial%20Area%2C%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718120448377!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactForm;