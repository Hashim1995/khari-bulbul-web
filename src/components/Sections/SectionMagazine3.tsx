import React, { FC } from "react";
import { SectionMagazine1Props } from "./SectionMagazine1";
import HeaderFilter from "./HeaderFilter";
import Card2 from "components/Card2/Card2";
import Card9 from "components/Card9/Card9";

export interface SectionMagazine3Props extends SectionMagazine1Props {}

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

const SectionMagazine3: FC<SectionMagazine3Props> = ({
  posts,
  heading = "Latest Articles 🎈 ",
  className = "",
}) => {
  return (
    <div className={`nc-SectionMagazine3 ${className}`}>
      <HeaderFilter heading={heading} />

      {!posts.length && <span>Nothing we found!</span>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {posts[0] && <Card2 size="large" post={blog} />}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {posts
            .filter((_, i) => i < 5 && i >= 1)
            .map((item, index) => (
              <Card9 ratio="aspect-w-3 aspect-h-3" key={index} post={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine3;
