import React, { FC, useState } from "react";
import ButtonCircle from "components/Button/ButtonCircle";
import rightImg from "images/Frame8.svg";
import Badge from "components/Badge/Badge";
import Input from "components/Input/Input";
import Image from "components/Image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { dictionary, formErrorMessages } from "utils/dictionary";
import { Controller, useForm } from "react-hook-form";
import { IGlobalResponseAxios } from "data/types";
import api from "utils/axios";
import Loading from "components/Button/Loading";
import { toast } from "react-toastify";
import { toastOptions } from "utils/global-variables";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectWebsiteTitle } from "../../redux/core/core-slice";

export interface SectionSubscribe2Props {
  className?: string;
}

const SectionSubscribe2: FC<SectionSubscribe2Props> = ({ className = "" }) => {
  const {
    formState: { errors },
    control,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const { t } = useTranslation();

  const websiteTitle = useSelector(selectWebsiteTitle);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: { email: string }) => {
    try {
      setIsLoading(true);
      const res: IGlobalResponseAxios = await api.post("NewsSubscriber", {
        ...data,
      });

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
    <div className={`nc-SectionSubscribe2 relative flex flex-col lg:flex-row items-center ${className}`}>
      <div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
        <h2 className="font-semibold text-4xl">
          {websiteTitle?.data?.newsLetterHeader}
        </h2>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
          {websiteTitle?.data?.newsLetterContent}
        </span>
        <form
          noValidate
          className="mt-8 relative max-w-sm"
          onSubmit={handleSubmit(onSubmit)}
        >
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
            render={({ field: { onChange, value } }) => (
              <Input
                type="email"
                placeholder={t("emailAddressPlaceholder")}
                className={`mt-2 ${errors?.email ? "border-red-500" : ""}`}
                onChange={onChange}
                value={value}
              />
            )}
          />

          {!isLoading ? (
            <ButtonCircle
              type="submit"
              className="absolute transform top-1/2 -translate-y-1/2 right-1 dark:bg-neutral-300 dark:text-black"
            >
              <ArrowRightIcon className="w-5 h-5 " />
            </ButtonCircle>
          ) : (
            <div className="absolute transform top-1/2 -translate-y-1/2 right-1 dark:bg-neutral-300 dark:text-black">
              <Loading />
            </div>
          )}
        </form>
        {errors?.email && (
          <p className="text-red-500 text-md mt-2 ">{errors?.email?.message}</p>
        )}
      </div>
      <div className="flex-grow">
        <Image
          alt="subsc"
          sizes="(max-width: 768px) 100vw, 50vw"
          src={rightImg}
        />
      </div>
    </div>
  );
};

export default SectionSubscribe2;