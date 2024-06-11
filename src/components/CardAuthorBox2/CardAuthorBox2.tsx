import React, { FC } from "react";
import { IBooksItem, PostAuthorType } from "data/types";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
// import Avatar from "components/Avatar/Avatar";
import NcImage from "components/NcImage/NcImage";
import Link from "components/Link";

export interface CardAuthorBox2Props {
  className?: string;
  author: any;
}

const CardAuthorBox2: FC<CardAuthorBox2Props> = ({
  className = "",
  author,
}) => {
  const {  coverPhoto, audioFile, createdDate, description, id, isActive, name, pdfFile, price, showOnFirstScreen,  } = author;
  

  return (
    <Link
      href={`/books/${id}`}
      className={`nc-CardAuthorBox2 flex flex-col overflow-hidden bg-white dark:bg-neutral-800 rounded-3xl ${className}`}
    >
      <div className="relative flex-shrink-0 ">
        <div>
          <NcImage
            alt="author"
            containerClassName="flex aspect-w-12 aspect-h-16 w-full h-0"
            src={coverPhoto?.fileUrl || "https://images.unsplash.com/photo-1543497415-75c0a27177c0?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            fill
            sizes="(max-width: 600px) 480px, 33vw"
          />
        </div>
        {/* <div className="absolute top-3 inset-x-3 flex">
          <div className=" py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
            {price} AZN <ArrowRightIcon className="w-5 h-5 text-yellow-600 ml-3" />
          </div>
        </div> */}
      </div>

      <div className="-mt-8 m-8 text-center">
        {/* <Avatar
          containerClassName="ring-2 ring-white"
          sizeClass="w-16 h-16 text-2xl"
          radius="rounded-full"
          imgUrl={avatar}
          userName={displayName}
        /> */}
        <div className="mt-12">
          <h2 className={`text-base font-medium`}>
            <span className="line-clamp-1">{name}</span>
          </h2>
          <span
            className={`block mt-1 text-sm text-neutral-500 dark:text-neutral-400`}
          >
            @{author?.author}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardAuthorBox2;
