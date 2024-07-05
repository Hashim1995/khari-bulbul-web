import ButtonPrimary from "components/Button/ButtonPrimary";
import React, { FC, ReactNode } from "react";
import Image from "../Image";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import Loading from "components/Button/Loading";
import fallbackImage from "../../images/default-fallback-image.png"

export interface SectionHeroProps {
  className?: string;
  rightImg: string;
  heading: ReactNode;
  subHeading: string;
  btnText: string;
}

const SectionHero: FC<SectionHeroProps> = ({
  className = "",
  rightImg,
  heading,
  subHeading,
  btnText,
}) => {

  const contact = useSelector((state: RootState) => state?.setting);
  const aboutUsImage = contact?.data?.data?.coverPhoto;
  const status = contact?.status;



  
  return (
    <div className={`nc-SectionHero relative ${className}`}>
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
        <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h2>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
            {subHeading}
          </span>
          {!!btnText && <ButtonPrimary href="/">{btnText}</ButtonPrimary>}
        </div>
        <div className="flex-grow flex justify-center items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto">
          {status === 'loading' ? (
            <Loading size="large" />
          ) : (
            <Image
              className="w-full scale-y-125 object-contain rounded-lg shadow-lg"
              src={aboutUsImage?.fileUrl || fallbackImage} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
