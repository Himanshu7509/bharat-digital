"use client"
import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('GENERAL FAQS');
  const [expandedQuestion, setExpandedQuestion] = useState(1); // First question expanded by default

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
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
      },
      {
        id: 2,
        question: 'How do I get started with your IT solutions?',
        answer: 'Getting started is easy! Simply contact our team through our website or phone. We\'ll schedule a consultation to understand your requirements and provide a customized solution.'
      },
      {
        id: 3,
        question: 'How can I contact your support team?',
        answer: 'You can reach our support team through multiple channels - email, phone, or live chat. Our support team is available 24/7 to assist you with any queries.'
      },
      {
        id: 4,
        question: 'Do you offer custom IT solutions for businesses?',
        answer: 'Yes, we specialize in creating custom IT solutions tailored to your specific business needs. Our team works closely with you to develop solutions that align with your goals.'
      }
    ]
  };

  const toggleQuestion = (questionId) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  const currentFAQs = faqData[activeCategory] || [];

  return (
    <div className="min-h-screen bg-white mb-32 mt-32">
      <div className="flex w-[90%] mx-auto">
        {/* Left Sidebar */}
        <div className=" bg-white border border-gray-200 w-[399px] ">
          <div className="p-0">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`w-full h-full text-left px-6 py-4 text-[30px] font-[500] border-b border-gray-200 transition-colors ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
                    : 'text-gray-800 hover:bg-gray-50'
                } ${index === 0 ? '' : ''}`}
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

        {/* Main Content Area */}
        <div className="flex-1 bg-white ml-12">


          {/* FAQ Content */}
          <div className="p-6">
            <div className="space-y-8">
              {currentFAQs.map((faq) => (
                <div key={faq.id} className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-2 FaqHeading">
                        {faq.question}
                      </h3>
                      
                      {expandedQuestion === faq.id && (
                        <div className="text-gray-600 text-sm leading-relaxed">
                          <p className='NormalCustomParagraph'>{faq.answer}</p>
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
    </div>
  );
};

export default FAQSection;