"use client";
import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/components/assets/po1.png";
import img2 from "@/components/assets/po2.png";
import img3 from "@/components/assets/po3.png";
import img4 from "@/components/assets/po4.png";
import img5 from "@/components/assets/po5.png";
import img6 from "@/components/assets/po6.png";

const portfolioData = [
  { id: 1, image: img1, category: "Web Development" },
  { id: 2, image: img2, category: "UX/UI" },
  { id: 3, image: img3, category: "Digital Marketing" },
  { id: 4, image: img4, category: "Software Development" },
  { id: 5, image: img5, category: "App Development" },
  { id: 6, image: img6, category: "Web Development" },
];

const categories = [
  "All",
  "Web Development",
  "App Development",
  "UX/UI",
  "Digital Marketing",
  "Software Development",
];

const PortfolioSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const itemsPerPage = 6;

  const filteredData =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-[36px] sm:text-[44px] md:text-[55px] font-semibold text-blue-600 mb-4">
          PORTFOLIO
        </h1>
        <p className="text-[#747474] text-[20px] sm:text-[28px] md:text-[35px] font-semibold leading-tight">
          A company portfolio highlights its services, projects, achievements, and expertise.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-3 sm:px-5 py-2 sm:py-3 rounded-md text-[16px] sm:text-[18px] font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-[#4F6BF0] text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
        {currentItems.map((item) => (
          <div key={item.id} className="group relative overflow-hidden">
            <Image
              src={item.image}
              alt={item.category}
              className="w-full h-[220px] sm:h-[250px] md:h-[300px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {filteredData.length > itemsPerPage && (
        <div className="flex justify-center items-center gap-2 flex-wrap">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 bg-gray-200 text-gray-700 rounded text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition"
          >
            Prev
          </button>

          {getPageNumbers().map((page, index) => (
            <React.Fragment key={index}>
              {page === "..." ? (
                <span className="px-3 py-2 text-gray-500 text-sm sm:text-base">...</span>
              ) : (
                <button
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 rounded text-sm sm:text-base font-medium transition ${
                    currentPage === page
                      ? "bg-blue-600 text-white shadow"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 bg-gray-200 text-gray-700 rounded text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition"
          >
            Next
          </button>
        </div>
      )}

      {/* No Data Message */}
      {currentItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No portfolio items found for the selected category.</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioSection;
