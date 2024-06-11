import CardLarge1 from "components/CardLarge1/CardLarge1";
import Heading from "components/Heading/Heading";
import { IGalleryItem, PostDataType } from "data/types";
import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectWebsiteTitle } from "../../redux/core/core-slice";

export interface SectionLargeSliderProps {
  className?: string;
  heading?: string;
  posts: PostDataType[];
  gallery: IGalleryItem[];
}

const SectionLargeSlider: FC<SectionLargeSliderProps> = ({
  posts,
  gallery,
  heading,
  className = "",
}) => {
  const { t } = useTranslation();
  const [indexActive, setIndexActive] = useState(0);
  const websiteTitle = useSelector(selectWebsiteTitle);

  const defaultHeading = () => {
    if (heading) {
      return heading;
    } else {
      return websiteTitle?.data?.caruselGalleryHeader;
    }
  };

  const handleClickNext = () => {
    setIndexActive((state) => {
      if (state >= gallery.length - 1) {
        return 0;
      }
      return state + 1;
    });
  };

  const handleClickPrev = () => {
    setIndexActive((state) => {
      if (state === 0) {
        return gallery.length - 1;
      }
      return state - 1;
    });
  };

  return (
    <div className={`nc-SectionLargeSlider relative ${className}`}>
      {!!defaultHeading() && (
        <Heading className="mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50 justify-center">
          {defaultHeading()}
        </Heading>
      )}
      {gallery.map((item, index) => {
        if (indexActive !== index) return null;
        return (
          <CardLarge1
            key={index}
            onClickNext={handleClickNext}
            onClickPrev={handleClickPrev}
            // post={item}
            gallery={item}
          />
        );
      })}
    </div>
  );
};

export default SectionLargeSlider;
