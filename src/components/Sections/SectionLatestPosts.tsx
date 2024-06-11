import React, { FC } from "react";
import Card3 from "components/Card3/Card3";
import Heading from "components/Heading/Heading";
import WidgetTags from "components/WidgetTags/WidgetTags";
import { DEMO_POSTS } from "data/posts";
import { PostDataType } from "data/types";
import WidgetCategories from "components/WidgetCategories/WidgetCategories";
import WidgetAuthors from "components/WidgetAuthors/WidgetAuthors";
import WidgetPosts from "components/WidgetPosts/WidgetPosts";
import Pagination from "components/Pagination/Pagination";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Card4 from "components/Card4/Card4";
import Card7 from "components/Card7/Card7";
import Card9 from "components/Card9/Card9";
import Card10 from "components/Card10/Card10";
import Card11 from "components/Card11/Card11";
import Card14 from "components/Card14/Card14";

// THIS IS DEMO FOR MAIN DEMO
// OTHER DEMO WILL PASS PROPS
const postsDemo: PostDataType[] = DEMO_POSTS.filter((_, i) => i > 7 && i < 15);
//

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

export interface SectionLatestPostsProps {
  posts?: PostDataType[];
  gridClass?: string;
  className?: string;
  heading?: string;
  postCardName?:
    | "card3"
    | "card4"
    | "card7"
    | "card9"
    | "card10"
    | "card11"
    | "card14";
}

const SectionLatestPosts: FC<SectionLatestPostsProps> = ({
  posts = postsDemo,
  postCardName = "card3",
  heading = "Latest Articles 🎈",
  gridClass = "",
  className = "",
}) => {
  const renderCard = (post: PostDataType, index: number) => {
    switch (postCardName) {
      case "card3":
        return (
          // <Card3 key={index} className="p-3 sm:p-5 2xl:p-6 " post={post} />
          <Card3 key={index} className="py-3" post={post} />
        );
      case "card4":
        return <Card4 key={index} post={post} />;
      case "card7":
        return <Card7 key={index} post={post} ratio="aspect-w-5 aspect-h-5" />;
      case "card9":
        return <Card9 key={index} post={post} />;
      case "card10":
        return <Card10 key={index} post={post} />;
      case "card11":
        return <Card11 key={index} post={post} blog={blog}/>;
      case "card14":
        return <Card14 key={index} post={post} />;
      default:
        return null;
    }
  };

  return (
    <div className={`nc-SectionLatestPosts relative ${className}`}>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
          <Heading>{heading}</Heading>
          <div className={`grid gap-6 md:gap-8 ${gridClass}`}>
            {posts.map(renderCard)}
          </div>
          <div className="flex flex-col mt-12 md:mt-20 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary>Show me more</ButtonPrimary>
          </div>
        </div>
        <div className="w-full space-y-7 mt-24 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3 ">
          <WidgetTags />
          <WidgetCategories />
          <WidgetAuthors />
          <WidgetPosts />
        </div>
      </div>
    </div>
  );
};

export default SectionLatestPosts;
