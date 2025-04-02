import Image from "next/image";
import React from "react";
import arrowMid from "../public/arrow-right-medium.png";
import arrowSm from "../public/arrow-right-small.png";
import logo from "../public/TJP-512x512.png";
import { COMPANIES, PORTFOLIOS, SOCIALS } from "@/constants";
import SocialButton from "./ButtonComponent/SocialButton";
import FooterComponent from "./CardComponent/FooterComponent";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="max-container padding-container py-6 ">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  ">
            {/* portfolio and compnay */}
            <div className=" w-[45%] gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className=" space-y-4">
                <h2 className=" regular-16 text-neutral-900">Portfolio</h2>
                <ul className="space-y-3 text-neutral-500">
                  <li>Linear</li>
                  <li>Sankira</li>
                  <li>Adtec</li>
                  <div className="flex gap-2 text-neutral-900">
                    <li>See all </li>
                    <Image alt="arrowSm" src={arrowSm} />
                  </div>
                </ul>
              </div>
              <div className=" space-y-4">
                <h2 className=" regular-16 text-neutral-900">Company</h2>
                {COMPANIES.map((company, index) => (
                  <FooterComponent title={company.title} />
                ))}
              </div>
            </div>
            {/* sign up for our newsletter */}
            <div className=" w-[60%] space-y-4 md:px-2 lg:px-2 md:ml-auto lg:ml-auto ">
              <h4 className="regular-16 text-neutral-900">
                Sign up for our newsletter
              </h4>
              <p className="small-16 text-neutral-500">
                Subscribe to get the latest design news, articles, resources and
                inspiration.
              </p>

              <form
                action="submit"
                className="border-2 border-neutral-200 bg-masenaWhite flexBetween rounded-lg"
              >
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  className=" text-neutral-500 border border-masenaWhite rounded-lg small-16 mx-4 w-[100%]"
                />
                <div className=" w-14 h-10 bg-masenaBlack flexCenter rounded">
                  <Image alt="arrow" src={arrowMid} />
                </div>
              </form>

              <div className="flex gap-6  ">
                {SOCIALS.map((social, index) => (
                  <SocialButton icon={social.icon} />
                ))}
              </div>
            </div>
          </div>

          <hr className=" bg-neutral-200 my-8" />

          <div className=" py-6 my-8 flexBetween">
            {/* <h3 className=" text-neutral-900 regular-24">Masena</h3> */}
            <Link href="/">
              <Image src={logo} alt="logo" width={48} height={48} />
            </Link>
            <Link href="https://github.com/TaiwoSaidat/tech-start-up-app">
              <p className=" text-neutral-500 small-16">
                ©Tech Start Up. 2024{" "}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
