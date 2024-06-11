import React, { FC } from "react";
import Heading from "components/Heading/Heading";
import Card4 from "components/Card4/Card4";
import Card7 from "components/Card7/Card7";
import { PostDataType } from "data/types";
import Card9 from "components/Card9/Card9";
import Card10 from "components/Card10/Card10";
import Card11, { Card11Props } from "components/Card11/Card11";
import Card10V2 from "components/Card10/Card10V2";
import MySlider from "components/MySlider";

export interface SectionSliderPostsProps {
  className?: string;
  heading: string;
  subHeading?: string;
  posts: PostDataType[];
  postCardName?: "card4" | "card7" | "card9" | "card10" | "card10V2" | "card11";
  perView?: 2 | 3 | 4;
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

const SectionSliderPosts: FC<SectionSliderPostsProps> = ({
  heading,
  subHeading,
  className = "",
  posts,
  postCardName = "card4",
  perView = 4,
}) => {
  let CardComponent = Card11;

  switch (postCardName) {
    case "card4":
      CardComponent = Card4;
      break;
    case "card7":
      CardComponent = Card7;
      break;
    case "card9":
      CardComponent = Card9;
      break;
    case "card10":
      CardComponent = Card10;
      break;
    case "card10V2":
      CardComponent = Card10V2;
      break;
    case "card11":
      CardComponent = Card11;
      break;

    default:
      break;
  }

  return (
    <div className={`nc-SectionSliderPosts ${className}`}>
      <Heading desc={subHeading} isCenter>
        {heading}
      </Heading>

      <MySlider
        data={posts}
        renderItem={(item, indx) => <CardComponent key={indx} post={item} blog={blog}/>}
        itemPerRow={perView}
      />
    </div>
  );
};

export default SectionSliderPosts;
