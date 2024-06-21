import Heading from "components/Heading/Heading";
import NcImage from "components/NcImage/NcImage";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectWebsiteTitle } from "../../redux/core/core-slice";
import { dictionary } from "utils/dictionary";
import AAAPP from "../../images/AAA-PP.jpg";
import Link from "components/Link";

export interface People {
  id: string;
  name: string;
  job: string;
  avatar: string;
}

const FOUNDER_DEMO: People[] = [
  // {
  //   id: "1",
  //   name: `Niamh O'Shea`,
  //   job: "Co-founder and Chief Executive",
  //   avatar:
  //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  // },
  // {
  //   id: "4",
  //   name: `Danien Jame`,
  //   job: "Co-founder and Chief Executive",
  //   avatar:
  //     "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  // },
  // {
  //   id: "3",
  //   name: `Orla Dwyer`,
  //   job: "Co-founder, Chairman",
  //   avatar:
  //     "https://images.unsplash.com/photo-1560365163-3e8d64e762ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  // },
  {
    id: "2",
    name: `Dara Frazier`,
    job: "Co-Founder, Chief Strategy Officer",
    avatar: AAAPP,
  },
];

const SectionFounder = () => {
  const { t } = useTranslation();
  const websiteTitle = useSelector(selectWebsiteTitle);
  return (
    <div className="nc-SectionFounder relative text-center">
      <Heading
        desc={websiteTitle?.data?.founderContent}
        className="justify-center !important my-4"
      >
        ⛱ {websiteTitle?.data?.founderHeader}
      </Heading>
      {FOUNDER_DEMO.map((item) => (
        <div key={item.id} className="mx-auto max-w-sm">
          <Link href="/author">
            <NcImage
              alt="founder"
              fill
              containerClassName="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden z-0"
              className="absolute inset-0 object-cover"
              src={item.avatar}
            />
          </Link>

          <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
            {"Khari Bulbul"}
          </h3>
          <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
            {websiteTitle?.data?.founderSpeciality}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SectionFounder;
