import React, { FC } from "react";
import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import { IBlogsItem, PostDataType } from "data/types";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import Link from "components/Link";
import Image from "components/Image";
import PostCardMeta from "../PostCardMeta/PostCardMeta";

export interface Card2Props {
  className?: string;
  post:  IBlogsItem;
  size?: "normal" | "large";
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

const Card2: FC<Card2Props> = ({
  className = "h-full",
  size = "normal",
  post,
}) => {

  return (
    <div className={`nc-Card2 group relative flex flex-col ${className}`}>
      <div className="block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] z-0">
        <Image
          fill
          sizes="(max-width: 600px) 480px, 800px"
          className="object-cover rounded-3xl"
          src={post?.coverPhoto?.fileUrl || ''}
          alt={post?.name}
        />
        {/* <PostTypeFeaturedIcon
          className="absolute bottom-2 left-2"
          postType={postType}
          wrapSize="w-8 h-8"
          iconSize="w-4 h-4"
        />
        <CategoryBadgeList
          className="flex flex-wrap space-x-2 absolute top-3 left-3"
          itemClass="relative"
          categories={categories}
        /> */}
      </div>

      <Link href={`/posts/${post.id}`} className="absolute inset-0" />

      <div className="mt-5 px-4 flex flex-col">
        <div className="space-y-3">
          <PostCardMeta
            className="relative text-sm"
            avatarSize="h-8 w-8 text-sm"
            meta={blog}
            post={post}
          />

          <h2
            className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 ${
              size === "large" ? "text-base sm:text-lg md:text-xl" : "text-base"
            }`}
          >
            <Link href={`/posts/${post.id}`} className="line-clamp-2" title={post.name}>
              {post.name}
            </Link>
          </h2>
          <span className="block text-neutral-500 dark:text-neutral-400 text-[15px] leading-6 ">
           {post.content}
          </span>
        </div>
        <div className="my-5 border-t border-neutral-200 dark:border-neutral-700"></div>
        {/* <div className="flex items-center justify-between">
          <PostCardLikeAndComment className="relative" />
          <PostCardSaveAction className="relative" readingTime={readingTime} />
        </div> */}
      </div>
    </div>
  );
};

export default Card2;
