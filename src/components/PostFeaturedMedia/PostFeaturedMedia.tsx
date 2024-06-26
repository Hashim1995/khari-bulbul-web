import React, { FC } from "react";
import { IBlogsItem, PostDataType } from "data/types";
import GallerySlider from "./GallerySlider";
import MediaVideo from "./MediaVideo";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import MediaAudio from "./MediaAudio";
import Link from "components/Link";
import Image from "components/Image";

export interface PostFeaturedMediaProps {
  className?: string;
  post: PostDataType;
  blog: IBlogsItem;
  isHover?: boolean;
}

const PostFeaturedMedia: FC<PostFeaturedMediaProps> = ({
  className = "w-full h-full",
  post,
  blog,
  isHover = false,
}) => {
  const { featuredImage, postType, videoUrl, galleryImgs, audioUrl, href } =
    post;


  const { content, coverPhoto, showOnFirstScreen, id, description, isActive, name, userId} = blog;

  const isPostMedia = () => postType === "video" || postType === "audio";

  const renderGallerySlider = () => {
    if (!coverPhoto?.fileUrl) return null;
    return (
      <GallerySlider
        href={href}
        galleryImgs={[coverPhoto?.fileUrl || '']}
        className="absolute inset-0 z-10"
        galleryClass="absolute inset-0"
        ratioClass="absolute inset-0"
      />
    );
  };

  const renderContent = () => {
    // GALLERY
    if (postType === "gallery") {
      return renderGallerySlider();
    }

    // // VIDEO
    // if (postType === "video" && !!videoUrl && isHover) {
    //   return <MediaVideo isHover videoUrl={videoUrl} />;
    // }

    // // AUDIO
    // if (postType === "audio" && !!audioUrl) {
    //   return <MediaAudio post={post} />;
    // }

    // ICON
    // return isPostMedia() ? (
    //   <span className="absolute inset-0 flex items-center justify-center ">
    //     <PostTypeFeaturedIcon
    //       className="hover:scale-105 transform cursor-pointer transition-transform"
    //       postType={postType}
    //     />
    //   </span>
    // ) : null;
  };

  return (
    <div className={`nc-PostFeaturedMedia relative ${className}`}>
      {postType !== "gallery" && (
        <Image
          alt="featured"
          fill
          className="object-cover"
          src={coverPhoto?.fileUrl || ''}
          sizes="(max-width: 600px) 480px, 800px"
        />
      )}
      {renderContent()}
      {postType !== "gallery" && (
        <Link
          href={`/posts/${blog?.id}`}
          className={`block absolute inset-0 ${
            !postType || postType === "standard"
              ? "bg-black/20 transition-opacity opacity-0 group-hover:opacity-100"
              : ""
          }`}
        />
      )}
    </div>
  );
};

export default PostFeaturedMedia;
