import React, { FC } from "react";
import Heading from "components/Heading/Heading";
import { PostAuthorType } from "data/types";
import CardAuthorBox2 from "components/CardAuthorBox2/CardAuthorBox2";
import MySlider from "components/MySlider";
import { selectWebsiteTitle } from "../../redux/core/core-slice";
import { useSelector } from "react-redux";

export interface SectionSliderNewAuthorsProps {
  className?: string;
  heading: string;
  subHeading: string;
  authors: PostAuthorType[];
  itemPerRow?: number;
  books?: any, 
}

const SectionSliderNewAuthors: FC<SectionSliderNewAuthorsProps> = ({
  heading = "",
  subHeading = "",
  className = "",
  authors,
  books,
  itemPerRow = 5,
}) => {

  const websiteTitle = useSelector(selectWebsiteTitle);
  
  subHeading = websiteTitle?.data?.booksContent
  return (
    <div className={`nc-SectionSliderNewAuthors ${className}`}>
      <Heading desc={subHeading} isCenter>
        {heading}
      </Heading>
      <MySlider
        itemPerRow={itemPerRow}
        data={books}
        renderItem={(item, index) => (
          <CardAuthorBox2 key={index} author={item} />
        )}
      />
    </div>
  );
};

export default SectionSliderNewAuthors;
