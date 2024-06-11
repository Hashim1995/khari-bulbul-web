import React, { FC } from "react";
import Heading from "components/Heading/Heading";
import { PostDataType } from "data/types";
import Card11 from "components/Card11/Card11";
import Card9 from "components/Card9/Card9";
import { DEMO_POSTS } from "data/posts";
import { Route } from "routers/types";

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

export interface SingleRelatedPostsProps {
  relatedPosts?: PostDataType[];
  moreFromAuthorPosts?: PostDataType[];
}

// DEMO DATA
let demoRelated: PostDataType[] = DEMO_POSTS.filter(
  (_, i) => i >= 10 && i < 14
);
// make differnt href demo, for user can click
demoRelated = demoRelated.map((item, index) => ({
  ...item,
  href: (item.href + index) as Route,
}));

let demoMoreFromAuthor: PostDataType[] = DEMO_POSTS.filter(
  (_, i) => i >= 14 && i < 18
);
// make differnt href demo, for user can click
demoMoreFromAuthor = demoMoreFromAuthor.map((item, index) => ({
  ...item,
  href: (item.href + index + "-") as Route,
}));

const SingleRelatedPosts: FC<SingleRelatedPostsProps> = ({
  relatedPosts = demoRelated,
  moreFromAuthorPosts = demoMoreFromAuthor,
}) => {
  return (
    <div className="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-28">
      {/* RELATED  */}
      <div className="container">
        <div>
          <Heading
            className="mb-10 text-neutral-900 dark:text-neutral-50"
            desc=""
          >
            Related posts
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {relatedPosts.map((post) => (
              <Card11 key={post.id} post={post} blog={blog}/>
            ))}
          </div>
        </div>

        {/* MORE FROM AUTHOR */}
        <div className="mt-20">
          <Heading
            className="mb-10 text-neutral-900 dark:text-neutral-50"
            desc=""
          >
            More from author
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {moreFromAuthorPosts.map((post) => (
              <Card9 key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRelatedPosts;
