import React, { FC } from "react";
import twFocusClass from "utils/twFocusClass";

export interface PaginationProps {
  className?: string;
  totalNumberOfPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationCustom: FC<PaginationProps> = ({ className = "", totalNumberOfPages, currentPage, onPageChange }) => {
  const maxButtons = 5;
  const halfMaxButtons = Math.floor(maxButtons / 2);

  const getPaginationButtons = () => {
    let startPage = Math.max(currentPage - halfMaxButtons, 1);
    let endPage = Math.min(startPage + maxButtons - 1, totalNumberOfPages);

    if (endPage - startPage < maxButtons - 1) {
      startPage = Math.max(endPage - maxButtons + 1, 1);
    }

    const buttons = [];
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`z-50 inline-flex w-11 h-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:border-neutral-700 ${twFocusClass()} ${
            currentPage === i ? "bg-primary-6000 text-white" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <nav className={`nc-Pagination inline-flex space-x-1 text-base font-medium ${className}`}>
      <button
        className={`z-50 inline-flex w-11 h-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:border-neutral-700 ${twFocusClass()} ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {getPaginationButtons()}
      <button
        className={`z-50 inline-flex w-11 h-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:border-neutral-700 ${twFocusClass()} ${
          currentPage === totalNumberOfPages ? "opacity-50 cursor-not-allowed" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalNumberOfPages}
      >
        &gt;
      </button>
    </nav>
  );
};

export default PaginationCustom;
