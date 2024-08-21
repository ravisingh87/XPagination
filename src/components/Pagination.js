import React from "react";
import "./Pagination.css";

const Pagination = ({ length, postPerPage, handlePagination, currentPage }) => {
  const paginationNumber = [];
  for (let i = 0; i < Math.ceil(length / postPerPage); i++) {
    paginationNumber.push(i);
  }

  return (
    <div className='pagination'>
      <button
        onClick={() => handlePagination(currentPage, "-")}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>{currentPage}</span>
      <button
        onClick={() => handlePagination(currentPage, "+")}
        disabled={currentPage === Math.ceil(length / postPerPage)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
