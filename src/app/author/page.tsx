import React, { useEffect, useState } from "react";
import { DEMO_POSTS } from "data/posts";
import { IBlogsItem, IGetBlogsResponse, PostDataType } from "data/types";
import Pagination from "components/Pagination/Pagination";
import ButtonPrimary from "components/Button/ButtonPrimary";
// import { DEMO_AUTHORS } from "data/authors";
// import { DEMO_CATEGORIES } from "data/taxonomies";
import Nav from "components/Nav/Nav";
import NavItem from "components/NavItem/NavItem";
import SocialsList from "components/SocialsList/SocialsList";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
// import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import Card11 from "components/Card11/Card11";
// import BackgroundSection from "components/BackgroundSection/BackgroundSection";
// import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
// import ButtonSecondary from "components/Button/ButtonSecondary";
// import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import NcImage from "components/NcImage/NcImage";
import { GlobeAltIcon, ShareIcon } from "@heroicons/react/24/outline";
import { avatarImgs } from "contains/fakeData";
import VerifyIcon from "components/VerifyIcon";
// // import FollowButton from "components/FollowButton";
// import NcDropDown from "components/NcDropDown/NcDropDown";
// import { SOCIALS_DATA } from "components/SocialsShare/SocialsShare";
// import AccountActionDropdown from "components/AccountActionDropdown/AccountActionDropdown";
import Image from "components/Image";
import api from "utils/axios";
import Loading from "components/Button/Loading";
import PaginationCustom from "components/PaginationCustom/PaginationCustom";
import { dictionary } from "utils/dictionary";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectWebsiteTitle } from "../../redux/core/core-slice";

import logo from "../../images/logo.png.png";
import AAAPP from "../../images/AAA-PP.png";

//@ts-ignore
import { Helmet } from "react-helmet";
import { getLanguageId } from "utils/getLanguageId";

// const posts: PostDataType[] = DEMO_POSTS.filter((_, i) => i < 12);
const POST_TEMP = {
  index: 1,
  id: "9e3e3994-a3ed-47ca-a014-d4483884cfe2",
  featuredImage:
    "https://images.unsplash.com/photo-1440778303588-435521a205bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  title: "Lenovo’s smarter devices stoke professional passions",
  desc: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  date: "May 20, 2021",
  href: "/single/this-is-single-slug",
  commentCount: 11,
  viewedCount: 2504,
  readingTime: 2,
  bookmark: { count: 3007, isBookmarked: false },
  like: { count: 3366, isLiked: true },
  authorId: 3,
  categoriesId: [3, 12],
  postType: "standard",
  author: "John Doe", // assign author name
  categories: ["Technology", "Business"], // assign categories
};

const FILTERS = [
  { name: "Most Recent" },
  { name: "Curated by Admin" },
  { name: "Most Appreciated" },
  { name: "Most Discussed" },
  { name: "Most Viewed" },
];
// const TABS = ["Articles", "Favorites", "Saved"];
const PageAuthor = () => {
  const { t } = useTranslation();
  const currentLayoutLanguage = localStorage.getItem("currentLayoutLanguage");

  const websiteTitle = useSelector(selectWebsiteTitle);
  const TABS = [t("news"), t("events")];
  const [tabActive, setTabActive] = useState<string>(TABS[0]);

  const [blogs, setBlogs] = useState<IBlogsItem[]>([]);
  const [totalNumberOfBlogs, setTotalNumberOfBlogs] = useState<number>(0);
  const [blogsLoading, setBlogsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const pageSize = 10;

  const getBlogs = async (page: number) => {
    setBlogsLoading(true);
    try {
      const endpoint =
        tabActive === t("events")
          ? "/Post/GetAllActiveEvents"
          : "/Post/GetAllActiveBlogs";
      const res: IGetBlogsResponse = await api.get(
        `${endpoint}?language=${getLanguageId(currentLayoutLanguage)}`,
        {
          params: { offset: page },
        }
      );
      if (res) {
        setTotalNumberOfBlogs(res?.data?.data?.totalDataCount);
        setBlogs(res?.data?.data?.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setBlogsLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    getBlogs(currentPage);
  }, [currentPage, tabActive]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleClickTab = (item: string) => {
    if (item === tabActive) {
      return;
    }
    setTabActive(item);
    setCurrentPage(1); // Reset page when tab changes
  };

  return (
    <div className={`nc-PageAuthor bg-image`}>
      {/* HEADER */}
      <Helmet>
        <title>{"Khari Bülbül"}</title>
        <meta name="description" content={websiteTitle?.data?.bioContent} />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content={"Khari Bülbül"} />
        <meta
          property="og:description"
          content={websiteTitle?.data?.bioContent}
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="w-full">
        <div className="relative w-full h-40 md:h-60 2xl:h-72">
          <NcImage
            alt=""
            containerClassName="absolute inset-0"
            sizes="(max-width: 1280px) 100vw, 1536px"
            src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className="object-cover w-full h-full"
            fill
          />
        </div>
        <div className="container -mt-10 lg:-mt-16">
          <div className="relative bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-xl flex flex-col md:flex-row">
            <div className="w-32 lg:w-40 flex-shrink-0 mt-12 sm:mt-0">
              <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold rounded-full w-20 h-20 text-xl lg:text-2xl lg:w-36 lg:h-36 ring-4 ring-white dark:ring-0 shadow-2xl z-0">
                <Image alt="Avatar" src={AAAPP} fill className="object-cover" />
              </div>
            </div>

            {/*  */}
            <div className="pt-5 md:pt-1 lg:ml-6 xl:ml-12 flex-grow">
              <div className="max-w-screen-sm space-y-3.5 ">
                <h2 className="inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  <span>Khari Bülbül</span>
                  {/* <VerifyIcon
                    className="ml-2"
                    iconClass="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8"
                  /> */}
                </h2>
                <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                  {websiteTitle?.data?.bioContent}
                </span>
                {/* <a
                  href=" https://Khari Bülbül05.github.io/"
                  className="flex items-center text-xs font-medium space-x-2.5 cursor-pointer text-neutral-500 dark:text-neutral-400 truncate"
                >
                  <GlobeAltIcon className="flex-shrink-0 w-4 h-4" />
                  <span className="text-neutral-700 dark:text-neutral-300 truncate">
                    https://Khari Bülbül05.github.io/
                  </span>
                </a> */}
                <SocialsList itemClass="block w-7 h-7" />
              </div>
            </div>

            {/*  */}
            {/* <div className="absolute md:static left-5 right-5 top-4 sm:left-auto sm:top-5 sm:right-5 flex justify-end">
              <FollowButton
                isFollowing={false}
                fontSize="text-sm md:text-base font-medium"
                sizeClass="px-4 py-1 md:py-2.5 h-8 md:!h-10 sm:px-6 lg:px-8"
              />

              <div className="mx-2">
                <NcDropDown
                  className="flex-shrink-0 flex items-center justify-center focus:outline-none h-10 w-10 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full"
                  renderTrigger={() => <ShareIcon className="h-5 w-5" />}
                  onClick={() => {}}
                  data={SOCIALS_DATA}
                />
              </div>

              <AccountActionDropdown containerClassName="h-10 w-10 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700" />
            </div> */}
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <main>
          {/* TABS FILTER */}
          <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
            <Nav className="sm:space-x-2">
              {TABS.map((item, index) => (
                <NavItem
                  key={index}
                  isActive={tabActive === item}
                  onClick={() => handleClickTab(item)}
                >
                  {item}
                </NavItem>
              ))}
            </Nav>
            <div className="block my-4 border-b w-full border-neutral-300 dark:border-neutral-500 sm:hidden"></div>
            {/* <div className="flex justify-end">
              <ArchiveFilterListBox lists={FILTERS} />
            </div> */}
          </div>

          {/* LOOP ITEMS */}

          {!blogsLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
              {blogs?.length > 0 ? (
                blogs?.map((blog) => (
                  <Card11 key={blog?.id} post={POST_TEMP} blog={blog} />
                ))
              ) : (
                <div className="col-span-full flex justify-center items-center">
                  <span className="text-2xl text-center text-gray-500">
                    {t("nothingFound")}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-center pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20">
              <Loading size="large" />
            </div>
          )}

          {/* PAGINATION */}
          {totalNumberOfBlogs > 0 && (
            <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
              <PaginationCustom
                totalNumberOfPages={Math.ceil(totalNumberOfBlogs / pageSize)}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </main>

        {/* === SECTION 5 === */}
        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionGridCategoryBox
            categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
          />
          <div className="text-center mx-auto mt-10 md:mt-16">
            <ButtonSecondary>Show me more</ButtonSecondary>
          </div>
        </div> */}

        {/* === SECTION 5 === */}
        {/* <SectionSliderNewAuthors
          heading="Top elite authors"
          subHeading="Discover our elite writers"
          authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
        /> */}

        {/* SUBCRIBES */}
        {/* <SectionSubscribe2 /> */}
      </div>
    </div>
  );
};

export default PageAuthor;
