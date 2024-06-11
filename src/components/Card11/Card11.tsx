import React, { FC, useState } from "react";
import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import { IBlogsItem, PostDataType } from "data/types";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import PostFeaturedMedia from "components/PostFeaturedMedia/PostFeaturedMedia";
import Link from "components/Link";

export interface Card11Props {
  className?: string;
  post: any;
  blog: IBlogsItem;
  ratio?: string;
  hiddenAuthor?: boolean;
}

const Card11: FC<Card11Props> = ({
  className = "h-full",
  post,
  blog,
  hiddenAuthor = false,
  ratio = "aspect-w-4 aspect-h-3",
}) => {
  const { title, href, categories, date } = post;
  const { content, coverPhoto, showOnFirstScreen, id, description, isActive, name, userId, createdDate} = blog;

  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 ${className}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      //
    >
      <div
        className={`block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 ${ratio}`}
      >
        <div>
          <PostFeaturedMedia post={post} blog={blog} isHover={isHover} />
        </div>
      </div>
      <Link href={`/posts/${blog?.id}`} className="absolute inset-0"></Link>
      {/* <span className="absolute top-3 inset-x-3 z-10">
        <CategoryBadgeList categories={categories} />
      </span> */}

      <div className="p-4 flex flex-col space-y-3">
        {!hiddenAuthor ? (
          <PostCardMeta meta={blog} />
        ) : (
          <span className="text-xs text-neutral-500">{createdDate}</span>
        )}
        <h3 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
          <span className="line-clamp-2" title={name}>
            {name}
          </span>
        </h3>
        {/* <div className="flex items-end justify-between mt-auto">
          <PostCardLikeAndComment className="relative" />
          <PostCardSaveAction className="relative" />
        </div> */}
      </div>
    </div>
  );
};

export default Card11;
