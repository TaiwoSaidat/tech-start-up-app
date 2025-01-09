import { SocialProps } from "@/types/homePage";
import Image from "next/image";
import React from "react";

const SocialButton = ({icon}: any) => {
  return (
    <>
        <div className=" w-10 h-10 flexCenter bg-neutral-900 rounded-full  ">
          <Image  alt="linkedin" src={icon} />
        </div>
        
    </>
  );
};

export default SocialButton;
