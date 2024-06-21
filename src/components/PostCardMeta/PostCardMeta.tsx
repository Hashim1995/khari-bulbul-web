import React, { FC } from "react";
import Avatar from "components/Avatar/Avatar";
import { IBlogsItem, PostDataType } from "data/types";
import AAAPP from "../../images/AAA-PP.jpg";
import Link from "components/Link";

export interface PostCardMetaProps {
  className?: string;
  meta: IBlogsItem;
  hiddenAvatar?: boolean;
  avatarSize?: string;
  post?: IBlogsItem;
}

const PostCardMeta: FC<PostCardMetaProps> = ({
  className = "leading-none text-xs",
  meta,
  post,
  hiddenAvatar = false,
  avatarSize = "h-7 w-7 text-sm",
}) => {
  const { createdDate, userId } = meta;

  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${className}`}
    >
      <Link href={`/author`} className="relative flex items-center space-x-2">
        {!hiddenAvatar && (
          <Avatar
            radius="rounded-full"
            sizeClass={avatarSize}
            imgUrl={AAAPP}
            userName={"Khari Bulbul"}
          />
        )}
        <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
          {"Khari Bulbul"}
        </span>
      </Link>
      <>
        <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
          ·
        </span>
        <span className="text-neutral-500 dark:text-neutral-400 font-normal">
          {post?.createdDate || createdDate}
        </span>
      </>
    </div>
  );
};

export default PostCardMeta;
