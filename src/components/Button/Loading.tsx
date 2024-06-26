import React from "react";

interface LoadingProps {
  size?: "small" | "medium" | "large";
}

const Loading: React.FC<LoadingProps> = ({ size = "small" }) => {
  // Define size classes based on props
  let sizeClasses = "";
  if (size === "small") {
    sizeClasses = "h-5 w-5";
  }
 else if (size === "medium") {
    sizeClasses = "h-8 w-8";
  } else if (size === "large") {
    sizeClasses = "h-16 w-16";
  }

  return (
    <svg
      className={`animate-spin -ml-1 mr-3 ${sizeClasses}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export default Loading;
