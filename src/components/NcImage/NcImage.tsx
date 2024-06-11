import React, { FC } from "react";

export interface NcImageProps extends Partial<HTMLImageElement> {
  containerClassName?: string;
  fill?: boolean;
}

const NcImage: FC<NcImageProps> = ({
  containerClassName = "",
  alt = "nc-imgs",
  fill = false,
  className,
  sizes = "(max-width: 600px) 480px, 800px",
  ...args
}) => {
  return (
    <div className={containerClassName}>
      {/* @ts-ignore */}
      <img
        {...args}
        alt={alt}
        sizes={sizes}
        className={
          className + "lg:max-w-3xl" +
          (fill ? " object-cover absolute inset-0 w-full h-full" : "")
        }
      />
    </div>
  );
};

export default NcImage;
