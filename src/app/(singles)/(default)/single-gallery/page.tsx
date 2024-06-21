import React, { FC, useEffect, useState } from "react";
import NcImage from "components/NcImage/NcImage";
import ListingImageGallery from "components/listing-image-gallery/ListingImageGallery";
import SingleHeader from "app/(singles)/SingleHeader";
import { imgHigtQualitys } from "contains/fakeData";
import { useNavigate, useSearchParams } from "react-router-dom";
import usePathname from "hooks/usePathname";
import Layout from "../layout";
import { IGalleryItem } from "data/types";
import api from "utils/axios";
import { useTranslation } from "react-i18next";

//@ts-ignore
import { Helmet } from "react-helmet";

import logo from "../../../../images/logo.png.png";

const IMAGES_GALLERY: string[] = imgHigtQualitys;

const PageSingleGallery = () => {
  //
  //
  const router = useNavigate();
  const thisPathname = usePathname();
  const [searchParams] = useSearchParams();
  const modal = searchParams?.get("modal");
  //
  const { t } = useTranslation();

  const [galleryData, setGalleryData] = useState<IGalleryItem[]>();
  const [totalNumberOfGallery, setTotalNumberOfGallery] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [offset, setOffset] = useState<number>(0);
  const [limit] = useState<number>(10);

  useEffect(() => {
    // Fetch initial page data when component mounts
    fetchMoreData();
  }, []);

  const fetchMoreData = async () => {
    const newOffset = offset + 1; // Increment offset by one
    try {
      const res = await api.get(`/PhotoGallery/get-all-active`, {
        params: {
          offset: newOffset,
          limit: limit, // Include limit if needed
        },
      });
      const newData = res?.data?.data?.data;
      const totalNumberOfData = res?.data?.data?.totalDataCount;
      setGalleryData((prevData) => [...(prevData ?? []), ...newData]);
      setOffset(newOffset);
      setTotalNumberOfGallery(totalNumberOfData);
    } catch (e) {
      console.log(e);
    }
  };

  const extractCoverPhotoUrls = (galleryData: IGalleryItem[] | undefined) => {
    if (!galleryData || !Array.isArray(galleryData)) {
      console.error("Yanlış qalereya datası");
      return [];
    }
    return galleryData.map((item) => item.coverPhoto.fileUrl);
  };

  // Fetch data on component mount

  // Extract coverPhoto URLs
  const coverPhotoUrls = extractCoverPhotoUrls(galleryData);

  const handleCloseModalImageGallery = () => {
    let params = new URLSearchParams(document.location.search);
    params.delete("modal");

    router(`${thisPathname}?${params.toString()}`);
  };

  const handleOpenModalImageGallery = () => {
    router(`${thisPathname}?modal=PHOTO_TOUR_SCROLLABLE`);
  };

  interface ListingGalleryImage {
    id: number;
    url: string;
  }

  // Assuming coverPhotoUrls is properly defined as an array of strings
  const listingImages: ListingGalleryImage[] = coverPhotoUrls.map(
    (url, index) => ({
      id: index,
      url: url || "", // Handle null or undefined case
    })
  );

  const imageNames = galleryData?.map((image) => image.name);

  return (
    <div className="bg-image">
      <Layout>
        <div className={`pt-8 lg:pt-16 `}>
          {/* SINGLE HEADER */}
          <Helmet>
            <title>{t("gallery")}</title>
            <meta name="description" content={t("websiteDescription")} />
            <meta name="robots" content="noindex, follow" />
            <meta property="og:title" content={t("gallery")} />
            <meta property="og:description" content={t("websiteDescription")} />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content="https://dev.optima.az:8305/gallery-list"
            />
            <meta
              property="og:image"
              content={`https://dev.optima.az:8305/${logo}`}
            />
            <meta
              name="keywords"
              content={
                `photography, photo gallery, images, pictures, visual art, creative, photography collection, photo album, diverse, eclectic, mixed, assorted, variety, display, showcase` +
                imageNames?.join(", ")
              }
            />
            <meta
              name="keywords"
              content="fotografiya, foto qalereya, şəkillər, görüntülər, vizual incəsənət, yaradıcı, fotografiya kolleksiyası, foto albom, müxtəlif, ekletik, qarışıq, çeşidli, ekran, göstəriş"
            />
            <meta
              name="keywords"
              content="фотография, фотогалерея, изображения, картинки, визуальное искусство, творчество, коллекция фотографий, фотоальбом, разнообразный, эклектичный, смешанный, разнообразие, дисплей, витрина"
            />
          </Helmet>
          <header className="container rounded-xl">
            <SingleHeader hiddenDesc />
            <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-2 my-10">
              <div
                className="col-span-2 row-span-2 relative rounded-xl overflow-hidden cursor-pointer z-0"
                onClick={handleOpenModalImageGallery}
              >
                <NcImage
                  alt="single"
                  containerClassName="absolute inset-0"
                  className="object-cover w-full h-full rounded-xl"
                  fill
                  src={coverPhotoUrls[0] ?? undefined}
                />
                <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
              {coverPhotoUrls
                .filter((_, i) => i >= 1 && i < 5)
                .map((item, index) => (
                  <div
                    key={index}
                    className={`relative rounded-xl overflow-hidden z-0 ${
                      index >= 2 ? "hidden sm:block" : ""
                    }`}
                  >
                    <NcImage
                      alt="single"
                      fill
                      containerClassName="aspect-w-6 aspect-h-5"
                      className="object-cover w-full h-full rounded-xl"
                      src={item || ""}
                    />

                    {/* OVERLAY */}
                    <div
                      className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                      onClick={handleOpenModalImageGallery}
                    />
                  </div>
                ))}

              <div
                className="absolute hidden md:flex md:items-center md:justify-center right-3 bottom-3 px-4 py-2 rounded-full bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10"
                onClick={handleOpenModalImageGallery}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                <span className="ml-2 text-neutral-800 text-sm font-medium">
                  {t("showAllImages")}
                </span>
              </div>
            </div>
          </header>

          <ListingImageGallery
            isShowModal={modal === "PHOTO_TOUR_SCROLLABLE"}
            onClose={handleCloseModalImageGallery}
            images={listingImages}
            fetchMoreData={fetchMoreData}
            totalNumberOfData={totalNumberOfGallery}
            hasMoreData={!isLoading}
          />
        </div>
      </Layout>
    </div>
  );
};

export default PageSingleGallery;
