import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const visiblePages = 5; // Number of pages to show in the center

  const getPageNumbers = () => {
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage < visiblePages - 1) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2 bg-[#EAE7FD] p-3 rounded-full shadow-md">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 rounded-full bg-white shadow hover:bg-gray-200 disabled:opacity-80"
      >
        <ChevronLeft className="w-5 h-5 text-blue-600" />
      </button>

      {/* First Page */}
      {currentPage > 3 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === 1 ? "bg-[#7363D6] text-white" : "bg-white"
            }`}
          >
            1
          </button>
          <span className="text-gray-500">...</span>
        </>
      )}

      {/* Page Numbers */}
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg ${
            page === currentPage ? "bg-[#7363D6] text-white" : "bg-white"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Last Page */}
      {currentPage < totalPages - 2 && (
        <>
          <span className="text-gray-500">...</span>
          <button
            onClick={() => onPageChange(totalPages)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages ? "bg-blue-600 text-white" : "bg-white"
            }`}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 rounded-full bg-white shadow hover:bg-gray-200 disabled:opacity-50"
      >
        <ChevronRight className="w-5 h-5 text-blue-600" />
      </button>
    </div>
  );
};

export default Pagination;
