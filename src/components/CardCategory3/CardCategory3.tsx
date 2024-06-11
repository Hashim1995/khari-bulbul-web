import React, { FC } from "react";
import { TaxonomyType } from "data/types";
import Link from "components/Link";
import Image from "components/Image";
import { dictionary } from "utils/dictionary";
import { useTranslation } from "react-i18next";

export interface CardCategory3Props {
  className?: string;
  taxonomy: TaxonomyType;
}

const CardCategory3: FC<CardCategory3Props> = ({
  className = "",
  taxonomy,
}) => {
  const { t } = useTranslation();
  const { count, name, href = "/", thumbnail } = taxonomy;
  return (
    <Link href={href} className={`nc-CardCategory3 flex flex-col ${className}`}>
      <div className="flex-shrink-0 relative w-full aspect-w-5 aspect-h-5 h-0 rounded-2xl overflow-hidden group">
        <Image
          src={thumbnail || ""}
          className="object-cover w-full h-full rounded-2xl"
          sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
          fill
          alt=""
        />
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>
      <div className="mt-4 ">
        <h2
          className={`text-base text-neutral-900 dark:text-neutral-100 font-semibold `}
        >
          {name}
        </h2>
        <span
          className={`block mt-1 text-sm text-neutral-6000 dark:text-neutral-400`}
        >
          {count} {t("articles")}
        </span>
      </div>
    </Link>
  );
};

export default CardCategory3;
