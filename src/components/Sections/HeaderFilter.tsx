import React, { FC, useState } from "react";
import Heading from "components/Heading/Heading";
import Nav from "components/Nav/Nav";
import NavItem from "components/NavItem/NavItem";
import Button from "../Button/Button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { dictionary } from "utils/dictionary";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectWebsiteTitle } from "../../redux/core/core-slice";

export interface HeaderFilterProps {
  tabs?: string[];
  heading: string;
  desc?: string;
}

const HeaderFilter: FC<HeaderFilterProps> = ({
  // tabs = ["All items", "Garden", "Fitness", "Design"],
  tabs = [],
  heading = "🎈 Latest Articlessssss",
  desc,
}) => {
  const { t } = useTranslation();

  const websiteTitle = useSelector(selectWebsiteTitle);
  const [tabActive, setTabActive] = useState<string>(tabs[0]);

  const handleClickTab = (item: string) => {
    if (item === tabActive) {
      return;
    }
    setTabActive(item);
  };

  const navigate = useNavigate();
  return (
    <div className="flex flex-col mb-8 relative">
      <Heading desc={desc}>{heading}</Heading>
      <div className="flex justify-between">
        <Nav
          className="sm:space-x-2"
          containerClassName="relative flex w-full overflow-x-auto text-sm md:text-base"
        >
          {tabs.map((item, index) => (
            <NavItem
              key={index}
              isActive={tabActive === item}
              onClick={() => handleClickTab(item)}
            >
              {item}
            </NavItem>
          ))}
        </Nav>
        {/* <Button
          className="md:!flex"
          pattern="white"
          sizeClass="px-6 py-3"
          onClick={() => navigate("/author")}
        >
          <span>{t("viewAll")}</span>
          <ArrowRightIcon className="w-6 h-6 ml-3" />
        </Button> */}
      </div>
    </div>
  );
};

export default HeaderFilter;
