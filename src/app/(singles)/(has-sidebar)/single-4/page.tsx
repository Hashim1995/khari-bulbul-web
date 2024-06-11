import SingleHeader4 from "app/(singles)/SingleHeader4";
import React, { FC } from "react";
import Layout from "../layout";
interface IPageSingleTemplate5Props {
  description: string;
  }
const PageSingleTemplate4: FC<IPageSingleTemplate5Props> = ({description}) => {
  return (
    <Layout description={description}>
      <div className="absolute top-0 inset-x-0 bg-neutral-900 dark:bg-black/30 h-[480px] md:h-[600px] lg:h-[700px] xl:h-[95vh]"></div>

      <header className="container pt-10 lg:pt-16 rounded-xl relative z-10">
        <SingleHeader4 />
      </header>
    </Layout>
  );
};

export default PageSingleTemplate4;
