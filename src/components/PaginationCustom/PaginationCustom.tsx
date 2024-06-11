import React, { FC } from "react";
import twFocusClass from "utils/twFocusClass";
import Link from "components/Link";

export interface PaginationProps {
  className?: string;
  totalNumberOfPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationCustom: FC<PaginationProps> = ({ className = "", totalNumberOfPages, currentPage, onPageChange }) => {
  const paginationButtons = [];
  for (let i = 1; i <= totalNumberOfPages; i++) {
    paginationButtons.push(
      <button
        key={i}
        className={`z-50 inline-flex w-11 h-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:border-neutral-700 ${twFocusClass()} ${
          currentPage === i ? "bg-primary-6000 text-white" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
        } ${currentPage === i ? twFocusClass() : ""}`}
        onClick={() => onPageChange(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <nav className={`nc-Pagination inline-flex space-x-1 text-base font-medium ${className}`}>
      {paginationButtons}
    </nav>
  );
};

export default PaginationCustom;
