import React, { ReactNode } from "react";
import SingleContent from "../SingleContent";
import SingleRelatedPosts from "../SingleRelatedPosts";

const Layout = ({ children, description }: { children: ReactNode, description?: any }) => {
  return (
    <div>
      {children}

      {/* SINGLE MAIN CONTENT */}
      <div className="container mt-10">
        <SingleContent description={description} />
      </div>

      {/* RELATED POSTS */}
      {/* <SingleRelatedPosts /> */}
    </div>
  );
};

export default Layout;
