import React, { FC, useState } from "react";
import NcImage from "components/NcImage/NcImage";
import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import { PostDataType } from "data/types";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostFeaturedMedia from "components/PostFeaturedMedia/PostFeaturedMedia";
import CardAuthor2 from "components/CardAuthor2/CardAuthor2";
import Link from "components/Link";

export interface Card10V3Props {
  className?: string;
  post: PostDataType;
  galleryType?: 1 | 2;
  gallery?: any;
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

const Card10V3: FC<Card10V3Props> = ({
  className = "h-full",
  post,
  galleryType = 1,
  gallery,
}) => {
  const {
    title,
    href,
    categories,
    postType,
    galleryImgs,
    author,
    date,
    readingTime,
  } = post;
  const [isHover, setIsHover] = useState(false);

  
  const renderGallery2 = () => {
    if (!galleryImgs) return null;
    return (
      <div className="w-full h-full grid grid-rows-2 gap-2">
        <div className="grid grid-cols-3 gap-2 ">
        {gallery?.[0]?.coverPhoto?.fileUrl &&  <NcImage
            alt=""
            fill
            containerClassName="relative col-span-2"
            className="absolute inset-0 object-cover w-full h-full"
            src={gallery?.[0]?.coverPhoto?.fileUrl || ''}
          />}
        {gallery?.[1]?.coverPhoto?.fileUrl  &&  <NcImage
            alt=""
            fill
            containerClassName="relative"
            className="absolute inset-0 object-cover w-full h-full"
            src={gallery?.[1]?.coverPhoto?.fileUrl || ''}
          />}
        </div>
        <div className="grid grid-cols-3 gap-2 ">
        {gallery?.[2]?.coverPhoto?.fileUrl &&  <NcImage
            alt=""
            fill
            containerClassName="relative"
            className="absolute inset-0 object-cover w-full h-full"
            src={gallery?.[2]?.coverPhoto?.fileUrl || ''}
          />}
       {gallery?.[3]?.coverPhoto?.fileUrl  &&   <NcImage
            alt=""
            fill
            containerClassName="relative col-span-2"
            className="absolute inset-0 object-cover w-full h-full"
            src={gallery?.[3]?.coverPhoto?.fileUrl || ''}
          />}
        </div>
      </div>
    );
  };

  const renderGallery = () => {
    if (!galleryImgs) return null;
    return (
      <div className="w-full h-full grid grid-cols-3 gap-2">
        <div className="grid ">
        {gallery?.[0]?.coverPhoto?.fileUrl  &&  <NcImage
            alt=""
            fill
            containerClassName="relative"
            className="absolute inset-0 object-cover w-full h-full"
            src={gallery?.[0]?.coverPhoto?.fileUrl || ''}
          />}
        </div>
        <div className="grid grid-rows-2 gap-2">
      {gallery?.[1]?.coverPhoto?.fileUrl  &&    <NcImage
            alt=""
            fill
            containerClassName="relative"
            className="absolute inset-0 object-cover w-full h-full"
            src={gallery?.[1]?.coverPhoto?.fileUrl || ''}
          />}
       {gallery?.[2]?.coverPhoto?.fileUrl  &&   <NcImage
            alt=""
            fill
            containerClassName="relative"
            className="absolute inset-0 object-cover w-full h-full"
            src={gallery?.[2]?.coverPhoto?.fileUrl || ''}
          />}
        </div>
        <div className="grid ">
         {gallery?.[4]?.coverPhoto?.fileUrl  && <NcImage
            alt=""
            fill
            containerClassName="relative"
            className="absolute inset-0 object-cover w-full h-full"
            src={gallery?.[4]?.coverPhoto?.fileUrl || ''}
          />}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-Card10V3 group relative flex flex-col ${className}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-16 sm:aspect-h-9 overflow-hidden z-0">
        <div>
          {postType !== "gallery" && !!galleryImgs?.length ? (
            <PostFeaturedMedia post={post} isHover={isHover} blog={blog}/>
          ) : galleryType === 1 ? (
            renderGallery()
          ) : (
            renderGallery2()
          )}
         
        </div>

        <Link
          href={'/gallery-list'}
          className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
        ></Link>
      </div>
      {/* <div className="absolute top-3 inset-x-3 flex justify-between items-start space-x-4">
        <CategoryBadgeList categories={categories} />
        <PostCardSaveAction />
      </div> */}

      {/* <div className="space-y-2.5 mt-4 px-4">
        <h2 className="nc-card-title block sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 ">
          <Link href={href} className="line-clamp-1" title={title}>
            {title}
          </Link>
        </h2>
        <CardAuthor2
          className="mt-3"
          author={author}
          hoverReadingTime={false}
          date={date}
          readingTime={readingTime}
        />
      </div> */}
    </div>
  );
};

export default Card10V3;
