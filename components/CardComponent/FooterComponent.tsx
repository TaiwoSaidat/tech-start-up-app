import { CompanyProps, } from "@/types/homePage";
import React from "react";

const FooterComponent = ({ title, }: CompanyProps) => {
  return (
    <>
      <ul className="space-y-3 text-neutral-500">
        <li>{title}</li>
      </ul>
    </>
  );
};

export default FooterComponent;
