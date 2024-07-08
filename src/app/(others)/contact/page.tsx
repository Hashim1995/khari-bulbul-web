import React, { ReactNode, useEffect, useState } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Input from "components/Input/Input";
import Label from "components/Label/Label";
import SocialsList from "components/SocialsList/SocialsList";
import Textarea from "components/Textarea/Textarea";
import Heading2 from "components/Heading/Heading2";
import Layout from "../layout";
import { useForm, Controller } from "react-hook-form";
import { dictionary, formErrorMessages } from "../../../utils/dictionary";
import { RootState } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import api from "utils/axios";
import { IGlobalResponseAxios } from "data/types";
import { SocialType } from "components/SocialsShare/SocialsShare";
import { Alert } from "components/Alert/Alert";
import { toast } from "react-toastify";
import { toastOptions } from "utils/global-variables";
import { useTranslation } from "react-i18next";
import logo from "../../../images/logo.png.png";
//@ts-ignore
import { Helmet } from "react-helmet";

interface IFormValues {
  fullName: string;
  email: string;
  message: string;
}

const PageContact = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
    reset,
  } = useForm<IFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch<any>(fetchContactData())
  // }, [])
  const { t } = useTranslation();
  const { data, status } = useSelector((state: RootState) => state.logo);
  const coverPhoto = data?.data?.coverPhoto?.fileUrl;
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false); // State to control showing success alert

  const contact = useSelector((state: RootState) => state.setting);
  const userEmail = contact?.data?.data?.email;

  const [contactData, setContactData] = useState<any>();

  useEffect(() => {
    setContactData(contact);
  }, [contact]);

  const facebookData = contact?.data?.data?.facebook;
  const instagramData = contact?.data?.data?.instagram;

  const socials: SocialType[] = [
    {
      id: "Facebook",
      name: "Facebook",
      icon: `<svg class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_17_61)">
    <path d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z" fill="currentColor"/>
    </g>
    </svg>
    `,
      href: "/pop",
    },
    {
      id: "Instagram",
      name: "Instagram",
      icon: `<svg class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_17_63)">
    <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="currentColor"/>
    <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="currentColor"/>
    <path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="currentColor"/>
    </g>
    </svg>
    `,
      href: "#",
    },
  ];

  if (facebookData) {
    socials[0].href = contactData?.data?.data?.facebook;
  }

  if (instagramData) {
    socials[1].href = contactData?.data?.data?.instagram;
  }

  const info = [
    // {
    //   title: "🗺 " + dictionary?.az?.address,
    //   desc: dictionary?.az?.addressDesc,
    // },
    {
      title: "💌 " + t("email"),
      desc: dictionary?.az?.emailDesc,
    },
    // {
    //   title: "☎ " + dictionary?.az?.phone,
    //   desc: dictionary?.az?.phoneDesc,
    // },
  ];

  // Update email value in the info array
  if (userEmail) {
    info[0].desc = userEmail;
  }

  const onSubmit = async (data: IFormValues) => {
    try {
      setIsLoading(true);
      const res: IGlobalResponseAxios = await api.post("Contact", data);

      if (res?.data?.isSuccess) {
        toast.success(t("successTxt"), toastOptions);

        reset();
      }
    } catch (error) {
      toast.error(t("errorOccurred"), toastOptions);
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-image">
      <Layout>
        <Helmet>
          <title>{t("contactUs")}</title>
          <meta name="description" content={t("dropUsMessage")} />
          <meta name="robots" content="noindex, follow" />
          <meta property="og:title" content={t("contactUs")} />
          <meta property="og:description" content={t("dropUsMessage")} />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://dev.optima.az:8305/contact"
          />
          <meta
            property="og:image"
            content={`https://dev.optima.az:8305/${coverPhoto || logo}`}
          />
          <meta
            name="keywords"
            content="contact us, get in touch, reach out, contact details, phone number, email address, location, city, customer service, support team"
          />
          <meta
            name="keywords"
            content="bizimlə əlaqə, əlaqə saxlayın, bizə müraciət edin, əlaqə məlumatları, telefon nömrəsi, e-poçt ünvanı, yer, şəhər, iş adı, müştəri dəstəyi, köməkçi mərkəzi, dəstək komandası"
          />
        </Helmet>
        <header className="text-center max-w-2xl mx-auto - mb-14 sm:mb-16 lg:mb-28 ">
          <Heading2>{t("contactUs")}</Heading2>
          <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200">
            {t("dropUsMessage")}
          </span>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="max-w-sm space-y-6">
            {info.map((item, index) => (
              <div key={index}>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  {item.title}
                </h3>
                <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                  {item.desc}
                </span>
              </div>
            ))}
            <div>
              <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                🌏 {t("socials")}
              </h3>
              <SocialsList className="mt-2" socials={socials} />
            </div>
          </div>
          <div className="border border-neutral-100 dark:border-neutral-700 lg:hidden"></div>
          <div>
            <form
              noValidate
              className="grid grid-cols-1 gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                control={control}
                name="fullName"
                rules={{
                  required: {
                    value: true,
                    message: t("fullNameRequired"),
                  },
                }}
                render={({ field: { onChange, value } }: any) => (
                  <label className="block">
                    <Label>{t("fullName")}</Label>
                    <Input
                      placeholder={t("fullNamePlaceholder")}
                      type="text"
                      className={`mt-2 ${
                        errors?.fullName ? "border-red-500" : ""
                      }`}
                      onChange={onChange}
                      value={value}
                    />
                  </label>
                )}
              />
              {errors?.fullName && (
                <p className="text-red-500 text-md  mt-[-3%]">
                  {errors?.fullName.message}
                </p>
              )}
              <Controller
                control={control}
                name="email"
                rules={{
                  required: {
                    value: true,
                    message: t("email"),
                  },
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: t("invalidEmailError"),
                  },
                }}
                render={({ field: { onChange, value } }: any) => (
                  <label className="block">
                    <Label>{t("emailAddress")}</Label>
                    <Input
                      type="email"
                      placeholder={t("emailAddressPlaceholder")}
                      className={`mt-2 ${
                        errors?.email ? "border-red-500" : ""
                      }`}
                      onChange={onChange}
                      value={value}
                    />
                  </label>
                )}
              />
              {errors?.email && (
                <p className="text-red-500 text-md  mt-[-3%]">
                  {errors?.email.message}
                </p>
              )}
              <Controller
                control={control}
                name="message"
                rules={{
                  maxLength: {
                    value: 300,
                    message: t("invalidMessageError"),
                  },

                  required: {
                    value: true,
                    message: t("messageRequired"),
                  },
                }}
                render={({ field: { onChange, value } }: any) => (
                  <label className="block">
                    <Label>{t("message")}</Label>
                    <Textarea
                      className={`mt-2 ${
                        errors?.message ? "border-red-500" : ""
                      }`}
                      rows={6}
                      onChange={onChange}
                      value={value}
                    />
                  </label>
                )}
              />

              {errors?.message && (
                <p className="text-red-500 text-md  mt-[-3%]">
                  {errors?.message?.message}
                </p>
              )}
              <ButtonPrimary
                type="submit"
                loading={isLoading}
                disabled={isLoading}
              >
                {t("submitBtn")}
              </ButtonPrimary>
            </form>
          </div>
        </div>
        {showSuccessAlert && (
          <Alert type="success" containerClassName="my-4">
            {t("messageSentSuccess")}
          </Alert>
        )}
      </Layout>
    </div>
  );
};

export default PageContact;
