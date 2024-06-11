import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import NavigationItem from "./NavigationItem";
import { NAVIGATION_DEMO_2 } from "data/navigation";

interface Props {
  className?: string;
}

const Navigation: FC<Props> = ({ className = "flex" }) => {
  const { t } = useTranslation();

  return (
    <ul className={`nc-Navigation items-center z-40 ${className}`}>
      {NAVIGATION_DEMO_2.map((item) => (
        <NavigationItem
          key={item.id}
          menuItem={{
            ...item,
            name: t(item.name)
          }}
        />
      ))}
    </ul>
  );
};

export default Navigation;
