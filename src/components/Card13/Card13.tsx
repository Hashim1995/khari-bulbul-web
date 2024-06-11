import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import { PostDataType } from "data/types";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import Link from "components/Link";

export interface Card13Props {
  className?: string;
  post: PostDataType;
}
const blog = {
  id: "08561d29-d462-4bde-0cd6-08dc39dc721c",
  name: "DOLMA NECE HAZIRLANIR",
  description: "<p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQL<br><br></p><p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQL</p><p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQL</p><p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQL</p><p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQL</p><p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQLV</p><p>V</p><p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQL</p><p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQLV</p><p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQL</p><p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQL</p><p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQL</p><p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQL</p><p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQL</p><p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQL</p><p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQL</p><p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQL</p><p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQL</p><p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQL</p><p>KLEJQ LWJEL QJWE JQLJE QJ EQJ JQL</p>",
  content: "DF EWIO PWIEROIWEROP I",
  showOnFirstScreen: false,
  userId: "f5e554c2-6a35-4a11-5abd-08dc2c76d71b",
  isActive: false,
  coverPhoto: {
    id: "00f73200-3399-4a1b-1c7c-08dc39dc6b84",
    mimeType: "image/jpeg",
    createdDate: "0001-01-01T00:00:00",
    fileSize: 46794,
    name: "61I24wOsn8L._AC_UF1000,1000_QL80_.jpg",
    fileUrl: "https://dev.optima.az:8290/backend/api/fileUpload/download/00f73200-3399-4a1b-1c7c-08dc39dc6b84"
  },
  createdDate: "01.03.2024"
};

const Card13: FC<Card13Props> = ({ className = "", post }) => {
  const { title, href, desc, featuredImage, date, postType } = post;

  return (
    <div className={`nc-Card13 relative flex justify-between ${className}`}>
      <div className="flex flex-col h-full py-2">
        <h2
          className={`nc-card-title block font-semibold text-sm sm:text-base`}
        >
          <Link href={href} className="line-clamp-2" title={title}>
            {title}
          </Link>
        </h2>
        <span className="hidden sm:block my-3 text-neutral-500 dark:text-neutral-400 ">
          <span className="line-clamp-2"> {desc}</span>
        </span>
        <span className="mt-4 block sm:hidden text-xs text-neutral-500 ">
          {date}
        </span>
        <div className="mt-auto hidden sm:block">
          <PostCardMeta meta={{ ...blog }}  />
        </div>
      </div>

      <Link
        href={href}
        className={`block relative h-full flex-shrink-0 w-24 sm:w-36 lg:w-40 xl:w-48 2xl:w-[200px] ml-4 sm:ml-5`}
      >
        <NcImage
          containerClassName="absolute inset-0"
          className="object-cover w-full h-full rounded-xl sm:rounded-3xl"
          src={featuredImage}
          fill
          alt={title}
        />
        <PostTypeFeaturedIcon
          className="absolute bottom-2 left-2"
          postType={postType}
          wrapSize="w-8 h-8"
          iconSize="w-4 h-4"
        />
      </Link>
    </div>
  );
};

export default Card13;
