// import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import NcImage from "components/NcImage/NcImage";
import NextPrev from "components/NextPrev/NextPrev";
// import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import { IGalleryItem, PostDataType } from "data/types";
import React, { FC } from "react";
import CardAuthor2 from "components/CardAuthor2/CardAuthor2";
// import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
// import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
// import Link from "components/Link";

export interface CardLarge1Props {
  className?: string;
  post?: PostDataType;
  gallery: IGalleryItem;
  onClickNext?: () => void;
  onClickPrev?: () => void;
}


const CardLarge1: FC<CardLarge1Props> = ({
  className = "",
  post,
  gallery,
  onClickNext = () => {},
  onClickPrev = () => {},
}) => {
  const {coverPhoto, createdDate, description ,id, name} = gallery

  const author = {
    "id": 1,
    "firstName": "",
    "lastName": "",
    "displayName": "",
    "email": "",
    "gender": "",
    "avatar": "",
    "bgImage": "",
    "count": 40,
    "href": "",
    "desc": "",
    "jobName": ""
  };
  
  return (
    <div
      className={`nc-CardLarge1 nc-CardLarge1--hasAnimation relative flex flex-col-reverse md:flex-row justify-end ${className}`}
    >
      <div className="w-full">
        {/* <Link href={href} className="nc-CardLarge1__right block relative"> */}
          <NcImage
            containerClassName="aspect-w-16 aspect-h-12 sm:aspect-h-9 md:aspect-h-14 lg:aspect-h-10 2xl:aspect-h-9 relative rounded-3xl "
            className="absolute inset-0 object-cover rounded-3xl shadow-2xl  h-125-percentage"
            src={coverPhoto?.fileUrl || ''}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
            <div className="p-4 sm:pt-8 sm:px-10">
          <NextPrev
            btnClassName="w-11 h-11 text-xl"
            onClickNext={onClickNext}
            onClickPrev={onClickPrev}
            className="justify-center"
          />
        </div>
          {/* META TYPE */}
          {/* <PostTypeFeaturedIcon
            postType={post.postType}
            className="absolute w-8 h-8 md:w-10 md:h-10 right-6 top-6"
          /> */}
        {/* </Link> */}
      </div>
    </div>
  );
};

export default CardLarge1;
