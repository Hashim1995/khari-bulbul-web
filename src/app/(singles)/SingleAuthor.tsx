import Avatar from "components/Avatar/Avatar";
import { DEMO_AUTHORS } from "data/authors";
import { PostAuthorType } from "data/types";
import Link from "components/Link";
import AAAPP from "../../images/AAA-PP.png";
import React, { FC } from "react";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import Loading from "components/Button/Loading";
import Skeleton from "components/Skeleton/Skeleton";

export interface SingleAuthorProps {
  author?: PostAuthorType;
}

const SingleAuthor: FC<SingleAuthorProps> = ({ author = DEMO_AUTHORS[1] }) => {
  const { data, status } = useSelector((state: RootState) => state.logo);
  const coverPhoto = data?.data?.coverPhoto?.fileUrl;
  return (
    <div className="nc-SingleAuthor flex">
      <Link href={author.href}>
        {status === 'loading' ? (
          <Skeleton /> 
        ) : (
          <Avatar
            imgUrl={coverPhoto || AAAPP} 
            userName="Khari Bülbül"
            sizeClass="h-12 w-12 text-lg sm:text-xl sm:h-24 sm:w-24"
          />
        )}
      </Link>
      <div className="flex flex-col ml-3 max-w-lg sm:ml-5">
        <span className="text-xs text-neutral-400 uppercase tracking-wider">
          WRITTEN BY
        </span>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
          <Link href={author.href}>{author.displayName}</Link>
        </h2>
        <span className="block mt-1 text-sm text-neutral-500 sm:text-base dark:text-neutral-300">
          {author.desc}
          <Link
            className="text-primary-6000 font-medium ml-1"
            href={author.href}
          >
            Read more
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SingleAuthor;
