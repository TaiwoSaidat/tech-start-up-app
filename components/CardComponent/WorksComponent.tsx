import { WorksProps } from "@/types/homePage";
import Image from "next/image";
import React from "react";

const WorksComponent = ({
  icon,
  subtitle,
  year,
  title,
  description,
}: WorksProps) => {
  return (
    <>
      <div className=" flex flex-col border-1 gap-5 p-4 rounded-xl bg-neutral-100">
        <div className="flexBetween p-4 ">
          {/* <div className="">
                {" "}
                <Image width={24} height={24} alt="linear" src={linearIcon} />
              </div> */}
          <Image width={36} height={36} alt="icon" src={icon} />
          <div className="flex flex-col regular-16 ">
            <h4 className=" text-neutral-500">{subtitle}</h4>
            <span className="flexEnd text-neutral-900">{year}</span>
          </div>
        </div>
        <div className=" flexBetween flex-col gap-6">
          <h2 className=" regular-24 text-neutral-900">{title}</h2>
          <p className="small-16 text-neutral-500">{description}</p>
        </div>
      </div>
    </>
  );
};

export default WorksComponent;
