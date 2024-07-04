import React, { FC } from "react";
import Card2 from "components/Card2/Card2";
import { PostDataType } from "data/types";
import Card6 from "components/Card6/Card6";
import HeaderFilter from "./HeaderFilter";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectWebsiteTitle } from "../../redux/core/core-slice";

export interface SectionMagazine1Props {
  posts: PostDataType[];
  heading?: string;
  desc?: string;
  className?: string;
  blogs?: any[];
}

const SectionMagazine1: FC<SectionMagazine1Props> = ({
  posts,
  blogs,
  heading,
  className = "",
  desc,
}) => {
  const { t } = useTranslation();

  const websiteTitle = useSelector(selectWebsiteTitle);
  const defaultHeading = () => {
    return heading;
  };

  return (
    <div className={`nc-SectionMagazine1 ${className}`}>
      <HeaderFilter heading={`${defaultHeading()}`} desc={desc} />
      <div className="grid justify-center items-center grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {blogs && blogs?.length > 0 ? (
          <>
            <Card2 size="large" post={blogs[0]} />
            <div className="grid gap-6 md:gap-8">
              {blogs
                .filter((_, i) => i < 4 && i > 0)
                .map((item, index) => (
                  <Card6 key={index} post={item} />
                ))}
            </div>
          </>
        ) : (
          <div className="col-span-2 flex justify-center items-center">
            <span className="text-2xl text-center text-gray-500">
              {t("nothingFound")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionMagazine1;
