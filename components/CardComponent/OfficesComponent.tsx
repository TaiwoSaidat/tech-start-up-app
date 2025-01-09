import { OfficesProps } from "@/types/homePage";
import React from "react";

const OfficesComponent = ({ title, description }: OfficesProps) => {
  return (
    <>
      <div className=" space-y-4">
        <h5 className="regular-16 text-masenaWhite">{title}</h5>
        <p className="small-16 text-neutral-300">{description} </p>
      </div>
    </>
  );
};

export default OfficesComponent;
