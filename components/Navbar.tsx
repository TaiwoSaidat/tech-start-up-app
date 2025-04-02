import React from "react";
import Button from "./ButtonComponent/Button";
import menu from "../public/menu.png";
import logo from '../public/TJP-512x512.png'
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className=" max-container padding-container pt-6 pb-3 md:pt-12 md:pb-6 flexBetween  ">
        <Link href="/">
          <Image src={logo} alt="logo" width={52} height={52} />
        </Link>
        <div className=" flexBetween gap-4">
          <div className=" hidden md:block">
            <Link href="#ContactUs">
              <Button />
            </Link>
          </div>
          {/* width={10} height={10} */}
          <Image src={menu} alt="menu" />
        </div>
      </div>
      {/* width: Hug (127px)px; height: Hug (44px)px; padding: 8px 24px 8px 24px;
      gap: 10px; border-radius: 64px 0px 0px 0px; opacity: 0px; */}
    </>
  );
};

export default Navbar;
