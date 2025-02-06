import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center mt-8 mb-24">
      {/* First Button */}
      <button
        className={`px-6 py-4 border-t-2 border-b-2 border-l-2 border-gray-500 rounded-l-lg  
          ${currentPage === 1 ? "bg-gray-200" : "bg-gray-300 hover:bg-gray-400"}`}
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        First
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`px-4 py-4 border-t-2 border-b-2 border-l-2 border-gray-500 
            ${currentPage === index + 1 ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-300 hover:bg-gray-400"}`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`px-6 py-4 border-t-2 border-b-2 border-r-2 border-l-2 text-blue-500 font-semibold border-gray-500 rounded-r-lg bg-white  
          ${currentPage === totalPages ? "bg-blue-500" : "bg-gray-300 hover:bg-gray-400"}`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;