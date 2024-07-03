import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useReadLocalStorage } from "usehooks-ts";
import SectionLargeSlider from "app/(home)/SectionLargeSlider";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import {
  DEMO_POSTS,
  DEMO_POSTS_GALLERY,
} from "data/posts";
import { DEMO_AUTHORS } from "data/authors";
import SectionMagazine1 from "components/Sections/SectionMagazine1";
import SectionMagazine7 from "components/Sections/SectionMagazine7";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import rightImg from "../../images/about-hero-right.jpeg";
import SectionHero from "components/SectionHero/SectionHero";
import SectionFounder from "app/about/SectionFounder";
import api from "utils/axios";
import {
  IBlogsItem,
  IBooksItem,
  IGalleryItem,
  IGetGalleryResponse,
  IHomePageDataResponse,
  IHomePageDataResponseAxios,
} from "data/types";
import Loading from "components/Button/Loading";
import Skeleton from "../../components/Skeleton/Skeleton";
import { selectWebsiteTitle } from "../../redux/core/core-slice";
import { getLanguageId } from "utils/getLanguageId";
import mainImage from "../../images/main_image.jpg";
import SectionLargeSlider2 from "./SectionLargeSlider2";

const MAGAZINE1_POSTS = DEMO_POSTS.filter((_, i) => i >= 8 && i < 16);
const MAGAZINE2_POSTS = DEMO_POSTS.filter((_, i) => i >= 0 && i < 7);

const PageHome = () => {
  const websiteTitle = useSelector(selectWebsiteTitle);
  const theme = useReadLocalStorage("theme");
  const currentLayoutLanguage = localStorage.getItem("currentLayoutLanguage");
  const [gallery, setGallery] = useState<IGalleryItem[]>();
  const [galleryloading, setGalleryLoading] = useState<boolean>(false);
  const [homePageData, setHomePageData] = useState<IHomePageDataResponse>();
  const [loadingHomePage, setLoadingHomePage] = useState<boolean>(true);
  const [booksData, setBooksData] = useState<IBooksItem[]>([]);
  const [eventsData, setEventsData] = useState<IBlogsItem[]>([]);
  const [postsData, setPostsData] = useState<IBlogsItem[]>([]);

  const getGallery = async () => {
    setGalleryLoading(true);
    try {
      const res = await api.get("/PhotoGallery", {
        params: { offset: 1 },
      });
      if (res) {
        setGallery(res.data.data.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setGalleryLoading(false);
    }
  };

  const getBooksData = async () => {
    setLoadingHomePage(true);
    try {
      const res: any = await api.get(
        `/Book/get-all-active?language=${getLanguageId(currentLayoutLanguage)}`
      );
      if (res.data?.isSuccess) {
        setBooksData(res?.data?.data?.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingHomePage(false);
    }
  };

  const getEventsData = async () => {
    setLoadingHomePage(true);
    try {
      const res: any = await api.get(`/Post/GetAllEvents`);
      if (res.data?.isSuccess) {
        setEventsData(res?.data?.data?.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingHomePage(false);
    }
  };

  const getHomePage = async () => {
    setLoadingHomePage(true);
    try {
      const res: any = await api.get(`/Post/GetAllBlogs`);
      if (res.data?.isSuccess) {
        setHomePageData(res?.data?.data);
        setPostsData(res?.data?.data?.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingHomePage(false);
    }
  };

  useEffect(() => {
    getHomePage();
    getEventsData();
    getGallery();
  }, []);

  return (
    <div className="nc-PageHome bg-image relative">
      <div className="container relative pt-20">
     

        {loadingHomePage ? (
          <div className="centered-skeleton">
            <Skeleton className="skeleton-heading" />
            <Skeleton className="skeleton-subheading" />
          </div>
        ) : (
          <>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
              {websiteTitle?.data?.mainHeader}
            </h2>
            <span className="mt-2 mb-10 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400 text-center">
              {websiteTitle?.data?.mainContent}
            </span>
          </>
        )}
         <div id="gallery">
          {!galleryloading ? (
            <SectionLargeSlider2
              className="py-16 lg:py-14"
              posts={DEMO_POSTS?.filter((_, i) => i < 3)}
              gallery={gallery?.filter((_, i) => i < 6) || []}
            />
          ) : (
            <div className=" flex justify-center  pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20">
              <Loading size="large" />
            </div>
          )}
        </div>

        <div id="about-us" className="">
          <div className="container py-16 lg:py-14 space-y-16 lg:space-y-28">
            <SectionHero
              rightImg={rightImg}
              heading={loadingHomePage ? <Skeleton className="skeleton-heading" /> : websiteTitle?.data?.aboutUsHeader}
              btnText=""
              subHeading={loadingHomePage ? <Skeleton className="skeleton-subheading" /> : websiteTitle?.data?.aboutUsContent}
            />
          </div>
        </div>

        {!loadingHomePage ? (
          <div id="blogs">
            <SectionMagazine1
              className="py-16 lg:py-14"
              posts={MAGAZINE1_POSTS}
              blogs={eventsData}
              heading={websiteTitle?.data?.eventsHeader}
              desc={websiteTitle?.data?.eventsContent}
            />
          </div>
        ) : (
          <div className="flex justify-center pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20">
            <Loading size="large" />
          </div>
        )}
        {!loadingHomePage ? (
          <div id="blogs">
            <SectionMagazine1
              className="py-16 lg:py-14"
              posts={MAGAZINE1_POSTS}
              blogs={postsData}
              heading={websiteTitle?.data?.newsHeader}
              desc={websiteTitle?.data?.newsContent}
            />
          </div>
        ) : (
          <div className="flex justify-center pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20">
            <Loading size="large" />
          </div>
        )}
      </div>

      <div className="container">
        <div id="newsletter">
          <SectionSubscribe2 className="pt-16 lg:pt-28" />
        </div>
      </div>
    </div>
  );
};

export default PageHome;
