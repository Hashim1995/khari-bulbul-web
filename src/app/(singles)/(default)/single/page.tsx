import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import SingleHeader from "app/(singles)/SingleHeader";
import Layout from "../layout"
import { IBlogsItem } from "data/types";

interface IProps  {
  description: any;
  post?: IBlogsItem;
}

const PageSingle: FC<IProps> = ({description, post}) => {
  return (
    <Layout description={description}>
      <div className={`nc-PageSingle pt-8 lg:pt-16`}>
        <header className="container rounded-xl">
          <div className="max-w-screen-md mx-auto">
            <SingleHeader post={post}/>
          </div>
        </header>

        {/* FEATURED IMAGE */}
        <div className="container my-10 sm:my-12 flex justify-center">
          <NcImage
            alt="single"
            containerClassName="z-10"
            className=""
            src={post?.coverPhoto?.fileUrl || ""}
            width={1260}
            height={850}
            sizes="(max-width: 1024px) 100vw, 1280px"
          />
        </div>
      </div>
    </Layout>
  );
};

export default PageSingle;
