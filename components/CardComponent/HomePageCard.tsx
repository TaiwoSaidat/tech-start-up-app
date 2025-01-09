import { HomePageProps } from "@/types/homePage";
import React from "react";

const HomePageCard = ({
  span,
  title,
  description,
  variant = "light",
  withWidth = true,
}: HomePageProps) => {
  const textColors =
    variant === "dark"
      ? {
          span: "text-masenaWhite",
          title: "text-masenaWhite",
          description: "text-neutral-500",
        }
      : {
          span: "text-neutral-500",
          title: "text-neutral-900",
          description: "text-neutral-500",
        };

  return (
    <>
      <div
        className={`flex flex-col gap-4 ${
          withWidth ? "md:w-[60%] lg:[60%]" : ""
        }`}
      >
        <span className={`small-16 ${textColors.span}`}>{span}</span>
        {/* <h2 className=" regular-32 text-neutral-900 md:regular-48" >  */}
        <h2 className={`regular-32 md:regular-48 ${textColors.title}`}>
          {title}
        </h2>
        {/* <p className=" small-16 md:small-24 text-neutral-500 ">{description}</p> */}
        <p className={`small-16 md:small-24 ${textColors.description}`}>
          {description}
        </p>
      </div>
    </>
  );
};

export default HomePageCard;
