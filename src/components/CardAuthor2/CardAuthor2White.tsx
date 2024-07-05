import React, { FC } from "react";
import Avatar from "components/Avatar/Avatar";
import { CardAuthor2Props } from "./CardAuthor2";
import AAAPP from "../../images/AAA-PP.png";
import Link from "components/Link";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

export interface CardAuthor2WhiteProps extends CardAuthor2Props {}

const CardAuthor2White: FC<CardAuthor2WhiteProps> = ({
  className = "",
  author,
  readingTime,
  date,
}) => {
  const { displayName = "Khari Bülbül", href = "/", avatar } = author;
  const { data, status } = useSelector((state: RootState) => state.logo);
  const coverPhoto = data?.data?.coverPhoto?.fileUrl;
  return (
    <Link
      href={href}
      className={`nc-CardAuthor2White relative inline-flex items-center ${className}`}
    >
      <Avatar
        sizeClass="h-10 w-10 text-base"
        containerClassName="flex-shrink-0 mr-3"
        radius="rounded-full"
        imgUrl={coverPhoto || AAAPP}
        userName={displayName}
      />
      <div>
        <h2
          className={`text-sm text-neutral-200 hover:text-white dark:text-neutral-700 dark:hover:text-black font-medium`}
        >
          {displayName}
        </h2>
        <span
          className={`flex items-center mt-1 text-xs text-neutral-300 dark:text-neutral-700`}
        >
          <span>{date}</span>
          {readingTime && (
            <>
              <span className="mx-1 opacity-0 group-hover:opacity-100 transition-opacity">
                ·
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                {readingTime} min read
              </span>
            </>
          )}
        </span>
      </div>
    </Link>
  );
};

export default CardAuthor2White;
