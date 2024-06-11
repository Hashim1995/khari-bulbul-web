import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import { PostDataType } from "data/types";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import Link from "components/Link";

export interface Card3Props {
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

const Card3: FC<Card3Props> = ({ className = "h-full", post }) => {
  const {
    title,
    href,
    readingTime,
    featuredImage,
    desc,
    categories,
    postType,
  } = post;

  return (
    <div
      className={`nc-Card3 relative flex flex-row items-center group ${className}`}
    >
      <div className="flex flex-col flex-grow">
        <div className="space-y-3.5">
          <CategoryBadgeList categories={categories} />
          <Link href={href} className="block">
            <h2
              className={`nc-card-title block font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base xl:text-lg`}
            >
              <span className="line-clamp-2" title={title}>
                {title}
              </span>
            </h2>
            <div className="hidden sm:block sm:mt-2">
              <span className="text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2">
                {desc}
              </span>
            </div>
          </Link>

          <PostCardMeta meta={{ ...blog }} />
        </div>
        <div className="mt-5 flex items-center flex-wrap justify-between">
          <PostCardLikeAndComment />
          <PostCardSaveAction readingTime={readingTime} />
        </div>
      </div>

      <div
        className={`block flex-shrink-0 w-24 sm:w-36 md:w-44 xl:w-56 ml-3 sm:ml-6 rounded-3xl overflow-hidden z-0 mb-5 sm:mb-0`}
      >
        <Link
          href={href}
          className="block w-full h-0 aspect-h-1 aspect-w-1 relative"
        >
          <NcImage
            containerClassName="absolute inset-0"
            src={featuredImage}
            fill
            alt={title}
          />
          <span>
            <PostTypeFeaturedIcon
              className="absolute left-2 bottom-2"
              postType={postType}
              wrapSize="w-8 h-8"
              iconSize="w-4 h-4"
            />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card3;
