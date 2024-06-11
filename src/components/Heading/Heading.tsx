import React, { HTMLAttributes, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectWebsiteTitle } from "../../redux/core/core-slice";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  fontClass?: string;
  desc?: ReactNode;
  isCenter?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  desc,
  className = "mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50",
  isCenter = false,
  ...args
}) => {
  const { t } = useTranslation();
  const websiteTitle = useSelector(selectWebsiteTitle);

  const defaultDesc = () => {
    if (desc) {
      return desc;
    } else {
      return websiteTitle?.data?.caruselGalleryContent;
    }
  };

  return (
    <div
      className={`nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end  ${className}`}
    >
      <div
        className={
          isCenter ? "text-center w-full max-w-2xl mx-auto " : "max-w-2xl"
        }
      >
        <h2
          className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-center`}
          {...args}
        >
          {children || `Section Heading`}
        </h2>
        {defaultDesc() && (
          <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400 text-center">
            {defaultDesc()}
          </span>
        )}
      </div>
    </div>
  );
};

export default Heading;
