import React, { useEffect, useState } from 'react';

import './pagination.css';

export const Pagination = ({
  pageCount,
  currentPage,
  itemsPerPage,
  onNextPage,
  onPrevPage,
  onFirstPage,
  onLastPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const [pageNumbersButton, setPageNumbersButtons] = useState([]);

  useEffect(() => {
    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(i);
    }
    setPageNumbersButtons(pageNumbers);
  }, [pageCount]);

  return (
    <div className='pagination'>
      <button onClick={onFirstPage}>First</button>
      <button onClick={onPrevPage} disabled={currentPage === 1}>
        Prev
      </button>
      {pageNumbersButton.map((pageNumberButton, idx) => (
        <button
          key={idx}
          className={currentPage === pageNumberButton ? 'active' : ''}
          onClick={() => {
            onPageChange(pageNumberButton);
          }}
        >
          {pageNumberButton}
        </button>
      ))}
      <button onClick={onNextPage} disabled={currentPage === pageCount}>
        Next
      </button>
      <button onClick={onLastPage}>Last</button>
      <span>Items per page</span>
      <input
        type='number'
        value={itemsPerPage}
        onChange={(e) => {
          onItemsPerPageChange(parseInt(e.target.value));
        }}
      />
    </div>
  );
};
