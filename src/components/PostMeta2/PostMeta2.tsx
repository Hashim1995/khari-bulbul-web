import React, { FC } from "react";
import Avatar from "components/Avatar/Avatar";
import { IBlogsItem, PostDataType } from "data/types";
import { DEMO_POSTS } from "data/posts";
import AAAPP from "../../images/AAA-PP.png";
import Link from "components/Link";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const metaDemo: PostMeta2Props["meta"] = DEMO_POSTS[0];

export interface PostMeta2Props {
  className?: string;
  meta?: Pick<PostDataType, "date" | "author" | "categories" | "readingTime">;
  hiddenCategories?: boolean;
  size?: "large" | "normal";
  avatarRounded?: string;
  post?: IBlogsItem;
}

const PostMeta2: FC<PostMeta2Props> = ({
  className = "leading-none",
  meta = metaDemo,
  hiddenCategories = false,
  size = "normal",
  avatarRounded,
  post,
}) => {
  const { date, author, categories, readingTime } = meta;
  const { data, status } = useSelector((state: RootState) => state.logo);
  const coverPhoto = data?.data?.coverPhoto?.fileUrl;
  return (
    <div
      className={`nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 ${
        size === "normal" ? "text-xs" : "text-sm"
      } ${className}`}
    >
      <Link href={author.href} className="flex items-center space-x-2">
        <Avatar
          radius={avatarRounded}
          sizeClass={
            size === "normal"
              ? "h-6 w-6 text-sm"
              : "h-10 w-10 sm:h-11 sm:w-11 text-xl"
          }
          imgUrl={coverPhoto || AAAPP}
          userName={"Khari Bülbül"}
        />
      </Link>
      <div className="ml-3">
        <div className="flex items-center">
          <Link href={"/author"} className="block font-semibold">
            {"Khari Bülbül"}
          </Link>

          {/* {!hiddenCategories && (
            <>
              <span className="mx-2 font-semibold">·</span>
              <div className="ml-0">
                <span className="text-xs">🏷 </span>
                {categories.map((cat, index) => (
                  <Link key={cat.id} href={cat.href} className="font-semibold">
                    {cat.name}
                    {index < categories.length - 1 && <span>, </span>}
                  </Link>
                ))}
              </div>
            </>
          )} */}
        </div>
        <div className="text-xs mt-[6px]">
          <span className="text-neutral-700 dark:text-neutral-300">
            {post?.createdDate}
          </span>
          {/* <span className="mx-2 font-semibold">·</span> */}
          {/* <span className="text-neutral-700 dark:text-neutral-300">
            {readingTime} min read
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default PostMeta2;
