import React, { useEffect, useState } from "react";
import SectionLargeSlider from "app/(home)/SectionLargeSlider";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import {
  DEMO_POSTS,
  // DEMO_POSTS_AUDIO,
  DEMO_POSTS_GALLERY,
  // DEMO_POSTS_VIDEO,
} from "data/posts";
// import { DEMO_CATEGORIES } from "data/taxonomies";
import { DEMO_AUTHORS } from "data/authors";
// import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
// import SectionSliderPosts from "components/Sections/SectionSliderPosts";
import SectionMagazine1 from "components/Sections/SectionMagazine1";
// import SectionAds from "components/Sections/SectionAds";
import SectionMagazine7 from "components/Sections/SectionMagazine7";
// import SectionGridPosts from "components/Sections/SectionGridPosts";
// import SectionMagazine8 from "components/Sections/SectionMagazine8";
// import SectionMagazine9 from "components/Sections/SectionMagazine9";
// import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
// import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
// import SectionVideos from "components/Sections/SectionVideos";
// import SectionLatestPosts from "components/Sections/SectionLatestPosts";
// import SectionMagazine2 from "components/Sections/SectionMagazine2";
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
import { useSelector } from "react-redux";
import { selectWebsiteTitle } from "../../redux/core/core-slice";
import { useReadLocalStorage } from "usehooks-ts";
import { getLanguageId } from "utils/getLanguageId";
import backgroundImage from "../../images/bg-website.webp";

//
const MAGAZINE1_POSTS = DEMO_POSTS.filter((_, i) => i >= 8 && i < 16);
const MAGAZINE2_POSTS = DEMO_POSTS.filter((_, i) => i >= 0 && i < 7);
//

const PageHome = () => {
  const websiteTitle = useSelector(selectWebsiteTitle);
  const theme = useReadLocalStorage("theme");
  const currentLayoutLanguage = localStorage.getItem("currentLayoutLanguage");
  const [gallery, setGallery] = useState<IGalleryItem[]>();
  const [galleryloading, setGalleryLoading] = useState<boolean>(false);
  const [homePageData, setHomePageData] = useState<IHomePageDataResponse>();
  const [loadingHomePage, setLoadingHomePage] = useState<boolean>();
  const [booksData, setBooksData] = useState<IBooksItem[]>([]);
  const [postsData, setPostsData] = useState<IBlogsItem[]>([]);

  const getGallery = async () => {
    setGalleryLoading(true);
    try {
      const res = await api.get("/PhotoGallery/get-all-active", {
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

  const getHomePage = async () => {
    setLoadingHomePage(true);
    try {
      const res: any = await api.get(
        `/Post/get-all-active?language=${getLanguageId(currentLayoutLanguage)}`
      );

      if (res.data?.isSuccess) {
        setHomePageData(res?.data?.data);
        setPostsData(res?.data?.data?.data);
        // setBooksData(res?.data?.data?.books);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingHomePage(false);
    }
  };

  useEffect(() => {
    getGallery();
    getHomePage();
    getBooksData();
  }, []);

  return (
    <div className="nc-PageHome bg-image relative">
      <div className="container relative">
        <div id="gallery">
          {!galleryloading ? (
            <SectionLargeSlider
              className="pt-10 pb-18 md:py-16 md:pb-20 lg:pb-28 lg:pt-20"
              posts={DEMO_POSTS?.filter((_, i) => i < 3)}
              gallery={gallery?.filter((_, i) => i < 6) || []}
            />
          ) : (
            <div className=" flex justify-center  pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20">
              <Loading size="large" />
            </div>
          )}
        </div>

        <div id="about-us" className="mt-20">
          {/* <SectionSliderNewCategories
            className="py-16 lg:py-28"
            heading="Top trending topics"
            subHeading="Discover 233 topics"
            categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
            categoryCardType="card4"
          /> */}
          <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
            <SectionHero
              rightImg={rightImg}
              heading={`${websiteTitle?.data?.aboutUsHeader}`}
              btnText=""
              subHeading={websiteTitle?.data?.aboutUsContent}
            />
          </div>
        </div>

        {!loadingHomePage ? (
          <div id="blogs">
            <SectionMagazine1
              className="py-16 lg:py-14"
              posts={MAGAZINE1_POSTS}
              blogs={postsData}
            />
          </div>
        ) : (
          <div className=" flex justify-center  pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20">
            <Loading size="large" />
          </div>
        )}
        {!loadingHomePage ? (
          <div id="blogs">
            <SectionMagazine1
              className="py-16 lg:py-14"
              posts={MAGAZINE1_POSTS}
              blogs={postsData}
            />
          </div>
        ) : (
          <div className=" flex justify-center  pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20">
            <Loading size="large" />
          </div>
        )}
      </div>

      <div className="container ">
        <div id="newsletter">
          <SectionSubscribe2 className="pt-16 lg:pt-28" />
        </div>
      </div>
    </div>
  );
};

export default PageHome;
