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
import mainImage from "../../images/main_image.jpg";

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
      <div className="container relative pt-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
          Khari Bülbül Azərbaycan Mədəniyyət Evi
        </h2>
        <span className="mt-2 mb-10 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400 text-center">
          Berlin, Almaniya
        </span>
        <img
          src={mainImage}
          className="rounded-3xl shadow-2xl h-125-percentagelg:max-w-3xl object-cover w-full h-full"
          alt=""
        />

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
              heading={`Layihəmiz Haqqında`}
              btnText=""
              subHeading={
                "Khari Bülbül Azərbaycan Mədəniyyət Evi Berlində fəaliyyət göstərir və Almaniyada yaşayan azərbaycanlı icması üçün vacib mədəniyyət mərkəzidir. Bu mərkəz Novruz bayramı kimi müxtəlif tədbirlər təşkil edərək, azərbaycanlı mədəniyyətini və ənənələrini təşviq edir. Mərkəz həm də musiqi konsertləri, sənət sərgiləri və təhsil proqramları vasitəsilə Azərbaycan incəsənətini tanıdır​. Mədəniyyət evləri, icmaların mədəni irsini qoruyub saxlamaq və təşviq etmək üçün mühüm rol oynayır. Onlar müxtəlif mədəniyyətlər arasında qarşılıqlı anlaşma və hörmətin artırılmasına kömək edir."
              }
            />
          </div>
        </div>

        {!loadingHomePage ? (
          <div id="blogs">
            <SectionMagazine1
              className="py-16 lg:py-14"
              posts={MAGAZINE1_POSTS}
              blogs={postsData}
              heading="Tədbirlər"
              desc="Khari Bülbül Azərbaycan Mədəniyyət Evinin Keçirdiyi Tədbirlər"
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
              heading="Xəbərlər"
              desc="Khari Bülbül Azərbaycan Mədəniyyət Evinin Ən Son Xəbərləri"
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
