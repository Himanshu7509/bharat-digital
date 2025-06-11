'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import img1 from '@/components/assets/b1.png';
import img2 from '@/components/assets/b2.png';
import img3 from '@/components/assets/b3.png';

const blogData = [
  {
    image: img1,
    date: 'Feb 16, 2024',
    category: 'Business',
    title: 'ESSENTIAL TOOLS FOR MANAGING DIGITAL ASSET LIBRARY',
  },
  {
    image: img2,
    date: 'Jan 05, 2025',
    category: 'Business',
    title: 'LEVERAGING YOUR CREATIVE ON WORK FOR SUCCESS',
  },
  {
    image: img3,
    date: 'Mar 16, 2024',
    category: 'Business',
    title: 'THE ART OF BRANDING CRAFTING MEMORABLE VISUAL IDENTITIES',
  },
];

const BlogCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;
  
  // Calculate total pages
  const totalPages = Math.ceil(blogData.length / cardsPerPage);
  
  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = blogData.slice(indexOfFirstCard, indexOfLastCard);
  
  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, '...', currentPage, '...', totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {currentCards.map((item, index) => (
          <div key={index} className="overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
            />
            <div className="p-3 md:p-4">
              <p className="text-base md:text-[18px] lg:text-[20px] font-medium text-gray-600">
                {item.date} | {item.category}
              </p>
              <h2 className="text-lg md:text-xl lg:text-[26px] font-semibold mt-2 leading-tight md:leading-[30px] lg:leading-[36px] text-gray-800">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      {blogData.length > 9 && (
        <div className="flex justify-center items-center mt-8 md:mt-10 gap-1 md:gap-2 flex-wrap">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 md:px-3 py-1 bg-gray-200 text-black rounded text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
          >
            Prev
          </button>
          
          {getPageNumbers().map((pageNumber, index) => (
            <React.Fragment key={index}>
              {pageNumber === '...' ? (
                <span className="px-2 md:px-3 py-1 text-sm md:text-base">...</span>
              ) : (
                <button
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-2 md:px-3 py-1 rounded text-sm md:text-base transition-colors ${
                    currentPage === pageNumber
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-black hover:bg-gray-300'
                  }`}
                >
                  {pageNumber}
                </button>
              )}
            </React.Fragment>
          ))}
          
          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-2 md:px-3 py-1 bg-gray-200 text-black rounded text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogCards;