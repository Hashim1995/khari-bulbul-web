import React, { FC } from "react";
import { PostDataType } from "data/types";
import HeaderFilter from "./HeaderFilter";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import CardAuthor2 from "components/CardAuthor2/CardAuthor2";
import Image from "components/Image";
import { DEMO_POSTS } from "data/posts";
import { Link } from "react-router-dom";

const MAGAZINE1_POSTS = DEMO_POSTS.filter((_, i) => i >= 8 && i < 16);

export interface SectionMagazine6Props {
  posts?: PostDataType[];
  heading?: string;
  className?: string;
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

const SectionMagazine6: FC<SectionMagazine6Props> = ({
  posts = MAGAZINE1_POSTS,
  heading = "Latest Articles 🎈 ",
  className = "",
}) => {
  const renderMain = () => {
    const { featuredImage, author, title, date, desc, href, readingTime } =
      posts[0];
    const subPosts = posts.filter((_, i) => i > 0);
    return (
      <main className="relative">
        {/* Image */}
        <div className="aspect-w-9 aspect-h-9 md:aspect-h-5 rounded-3xl lg:rounded-[40px] overflow-hidden">
          <Image
            fill
            alt=""
            sizes="(max-width: 1024px) 100vw, 1280px"
            src={featuredImage}
            className="object-cover"
          />
          <div>
            <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black"></span>
          </div>

          {/* CONTENT */}
          <div className="group dark absolute md:w-1/2 lg:w-2/3 max-w-2xl flex flex-col justify-end p-5 lg:p-14">
            <div className="">
              <h2 className="text-base md:text-xl lg:text-2xl xl:text-3xl font-semibold text-white hover:text-neutral-300">
                <Link to={href} className="line-clamp-3">
                  {title}
                </Link>
              </h2>
              <span className="hidden lg:block text-base text-neutral-200 mt-5">
                {desc}
              </span>
            </div>

            <div className="mt-7">
              <CardAuthor2
                readingTime={readingTime}
                date={date}
                author={author}
              />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:absolute mt-5 md:mt-0 h-96 md:h-auto md:right-3 md:top-3 md:bottom-3 md:w-1/2 lg:w-1/3 p-5 lg:p-8 bg-neutral-100 md:bg-white md:dark:bg-neutral-900 dark:bg-neutral-800 xl:bg-opacity-80 xl:dark:bg-opacity-80 xl:backdrop-filter xl:backdrop-blur-xl rounded-3xl lg:rounded-[34px] overflow-hidden">
          <div className="flow-root h-full w-full overflow-y-auto hiddenScrollbar">
            <div className="-my-5 md:-my-7 divide-y divide-neutral-200 dark:divide-neutral-700">
              {subPosts.map((post, i) => (
                <div key={i} className="block py-5 lg:py-7">
                  <h2 className="nc-card-title text-sm lg:text-base font-semibold">
                    <Link to={post.href} className="line-clamp-2">
                      {post.title}
                    </Link>
                  </h2>
                  <PostCardMeta
                    className="mt-4 text-xs sm:text-sm"
                    meta={blog}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  };

  return (
    <div className={`nc-SectionMagazine6 ${className}`}>
      <HeaderFilter heading={heading} />
      {posts[0] && renderMain()}
    </div>
  );
};

export default SectionMagazine6;
