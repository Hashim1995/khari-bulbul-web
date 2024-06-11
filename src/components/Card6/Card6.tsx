import React, { FC } from "react";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
// import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import { IBlogsItem, PostDataType } from "data/types";
// import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
// import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
// import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import Link from "components/Link";
import Image from "components/Image";

export interface Card6Props {
  className?: string;
  post: IBlogsItem;
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

const Card6: FC<Card6Props> = ({ className = "h-full", post }) => {


  return (
    <div
      className={`nc-Card6 relative flex group flex-row items-center sm:p-4 sm:rounded-3xl sm:bg-white sm:dark:bg-neutral-900 sm:border border-neutral-200 dark:border-neutral-700 ${className}`}
    >
      <Link href={`/posts/${post.id}`} className="absolute inset-0 z-0"></Link>
      <div className="flex flex-col flex-grow">
        <div className="space-y-3 mb-4">
          {/* <CategoryBadgeList categories={categories} /> */}
          <h2 className={`block font-semibold text-sm sm:text-base`}>
            <Link href={`/posts/${post.id}`} className="line-clamp-2" title={post.name}>
              {post.name}
            </Link>
          </h2>
          <PostCardMeta meta={{ ...post }} />
        </div>
        {/* <div className="flex items-center flex-wrap justify-between mt-auto">
          <PostCardLikeAndComment className="relative" />
          <PostCardSaveAction className="relative" readingTime={readingTime} />
        </div> */}
      </div>

      <Link
        href={`/posts/${post.id}`}
        className={`block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ml-3 sm:ml-5 rounded-2xl overflow-hidden z-0`}
      >
        <Image
          sizes="(max-width: 600px) 180px, 400px"
          className="object-cover w-full h-full"
          fill
          src={post.coverPhoto.fileUrl || ''}
          alt={post.coverPhoto.name || ''}
        />
        {/* <span className="absolute bottom-1 left-1">
          <PostTypeFeaturedIcon
            wrapSize="h-7 w-7"
            iconSize="h-4 w-4"
            postType={postType}
          />
        </span> */}
      </Link>
    </div>
  );
};

export default Card6;
