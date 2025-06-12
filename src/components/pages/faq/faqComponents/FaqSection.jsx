"use client";
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('GENERAL FAQS');
  const [expandedQuestion, setExpandedQuestion] = useState(1);

  const categories = [
    'GENERAL FAQS',
    'WEB DEVELOPMENT FAQS',
    'DIGITAL MARKETING FAQS',
    'SOFTWARE DEVELOPMENT FAQS',
    'CHATBOT DEVELOPMENT FAQS',
    'GAME DEVELOPMENT FAQS',
    'UI UX DESIGN FAQS',
    'AI/ML SOLUTIONS FAQS',
    'CRM/ERP SOLUTIONS FAQS',
    'WEB SECURITY FAQS'
  ];

  const faqData = {
    'GENERAL FAQS': [
      {
        id: 1,
        question: 'What services does Bharat Digital offer?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
      },
      {
        id: 2,
        question: 'How do I get started with your IT solutions?',
        answer: 'Getting started is easy! Simply contact our team...'
      },
      {
        id: 3,
        question: 'How can I contact your support team?',
        answer: 'You can reach our support team through multiple channels...'
      },
      {
        id: 4,
        question: 'Do you offer custom IT solutions for businesses?',
        answer: 'Yes, we specialize in creating custom IT solutions...'
      }
    ]
  };

  const toggleQuestion = (questionId) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  const currentFAQs = faqData[activeCategory] || [];

  return (
    <div className="min-h-screen bg-white mt-20 mb-20 px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row w-full max-w-[1200px] mx-auto">
        {/* Sidebar */}
        <div className="lg:w-[320px] w-full border border-gray-200 mb-6 lg:mb-0">
          <div className="overflow-x-auto">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`w-full text-left px-4 py-3 sm:px-6 sm:py-4 text-base sm:text-xl font-medium border-b border-gray-200 transition-colors ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
                    : 'text-gray-800 hover:bg-gray-50'
                }`}
                style={{
                  background: activeCategory === category
                    ? 'linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%)'
                    : 'transparent'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        <div className="flex-1 lg:ml-8">
          <div className="space-y-6">
            {currentFAQs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-2 text-base sm:text-lg font-semibold">
                      {faq.question}
                    </h3>
                    {expandedQuestion === faq.id && (
                      <div className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className="ml-4 text-gray-400 hover:text-gray-600 flex-shrink-0"
                  >
                    <Plus
                      size={18}
                      className={`transform transition-transform ${
                        expandedQuestion === faq.id ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
