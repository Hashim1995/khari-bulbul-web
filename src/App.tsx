import { useDispatch } from "react-redux";
import MyRoutes from "./routers";
import { useEffect } from "react";
import { fetchContactData } from "./redux/contact-slice";
//@ts-ignore
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Logo from "./images/logo.png.png";

function App() {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch<any>(fetchContactData());
  }, []);
  return (
    <div className="bg-[#f8f8f8] text-base dark:bg-neutral-900/95 text-neutral-900 dark:text-neutral-200 font-body">
      <Helmet>
        <title>{t("homePage")}</title>
        <meta name="description" content={t("websiteDescription")} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t("homePage")} />
        <meta property="og:description" content={t("websiteDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dev.optima.az:8305/" />
        <meta
          property="og:image"
          content={`https://dev.optima.az:8305/${Logo}`}
        />
        <meta
          name="keywords"
          content="women's rights, feminism, gender equality, author, books, blogs, empowerment, societal roles, activism"
          lang="en"
        />
        <meta
          name="keywords"
          content="qadın hüquqları, feminizm, cins bərabərlik, yazıçı, kitablar, bloglar, gücləndirmə, cəmiyyətdəki rollar, aktivizm"
          lang="az"
        />
        <meta
          name="keywords"
          content="права женщин, феминизм, гендерное равенство, автор, книги, блоги, автономия, социальные роли, активизм"
          lang="ru"
        />
        <meta
          name="keywords"
          content="права женщин, феминизм, гендерное равенство, автор, книги, блоги, автономия, социальные роли, активизм"
          lang="ru"
        />
      </Helmet>
      <MyRoutes />
    </div>
  );
}

export default App;
