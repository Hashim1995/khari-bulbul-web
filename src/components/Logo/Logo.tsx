import React, { useEffect } from "react";

import logoImg from "images/logo.png";
import logoLightImg from "images/logo-light.png";
import LogoSvg from "./LogoSvg";
import Link from "components/Link";
import LogoSrc from "../../images/logo.png.png";
import { useReadLocalStorage } from "usehooks-ts";
import { useThemeMode } from "hooks/useThemeMode";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";

export interface LogoProps {
  img?: string;
  imgLight?: string;
}

const Logo: React.FC<LogoProps> = () => {
  // Read the theme from local storage
  const { isDarkMode } = useThemeMode();

  const { data, status } = useSelector((state: RootState) => state.logo);
  const coverPhoto = data?.data?.coverPhoto?.fileUrl;
  
  // Choose the logo based on the theme
  const logoSrc = LogoSrc;

  return (
    <Link
      href={{ pathname: "/" }}
      className="ttnc-logo inline-block text-primary-6000 flex-shrink-0"
    >
      {/* THIS USE FOR MY MULTI DEMO */}
      {/* IF YOU ARE MY CLIENT. PLESE DELETE THIS CODE AND YOU YOUR IMAGE PNG BY BELLOW CODE */}
      {/* <LogoSvg /> */}
      <img src={coverPhoto || logoSrc} alt="Logo" width={50} height={50} className="logo-custom-size"/>
    </Link>
  );
};

export default Logo;
