import React from "react";
import PropTypes from "prop-types";

const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  const MAX_PAGES = 5;
  const HALF_MAX = Math.floor(MAX_PAGES / 2);
  const MAX_TOTAL = 100;
  const actualTotal = Math.min(totalPages, MAX_TOTAL);

  const generatePageNumbers = () => {
    let start = Math.max(1, currentPage - HALF_MAX);
    let end = Math.min(actualTotal, currentPage + HALF_MAX);

    if (currentPage <= HALF_MAX) {
      end = Math.min(actualTotal, MAX_PAGES);
    }

    if (currentPage + HALF_MAX >= actualTotal) {
      start = Math.max(1, actualTotal - MAX_PAGES + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const renderPageButton = (number) => (
    <li
      key={number}
      className={`page-item ${number === currentPage ? "active" : ""}`}
    >
      <button className="page-link" onClick={() => onPageChange(number)}>
        {number}
      </button>
    </li>
  );

  const renderEllipsis = () => (
    <li className="page-item disabled">
      <span className="page-link">...</span>
    </li>
  );

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
          >
            &laquo;
          </button>
        </li>

        {currentPage > 3 && (
          <>
            {renderPageButton(1)}
            {currentPage > 4 && renderEllipsis()}
          </>
        )}

        {generatePageNumbers().map(renderPageButton)}

        {currentPage < actualTotal - 2 && (
          <>
            {currentPage < actualTotal - 3 && renderEllipsis()}
            {renderPageButton(actualTotal)}
          </>
        )}

        <li
          className={`page-item ${
            currentPage === actualTotal ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Paginator;
