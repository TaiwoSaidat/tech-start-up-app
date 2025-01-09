import Image from "next/image";
import React from "react";
import arrowMid from "../public/arrow-right-medium.png";
import arrowSm from '../public/arrow-right-small.png'
import ln from '../public/linkedin.png';
import ig from '../public/instagram.png';
import fb from '../public/facebook.png';
import x from '../public/twitter.png';
import { SOCIALS } from "@/constants";
import SocialButton from "./ButtonComponent/SocialButton";



const Footer = () => {
  return (
    <>
      <section className="max-container padding-container bg-masenaWhite py-6 ">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  ">
            {/* portfolio and compnay */}
            <div className=" w-[45%] gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className=" space-y-4">
                <h2 className=" regular-16 text-neutral-900">Portfolio</h2>
                <ul className="space-y-3">
                  <li>Linear</li>
                  <li>Sankira</li>
                  <li>Adtec</li>
                  <div className="flex gap-2">
                    <li>See all </li>
                    <Image alt="arrowSm" src={arrowSm} />
                  </div>
                </ul>
              </div>
              <div className=" space-y-4">
                <h2 className=" regular-16 text-neutral-900">Company</h2>
                <ul className="space-y-3">
                  <li>About</li>
                  <li>Process</li>
                  <li>Blog</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>
            {/* sign up for our newsletter */}
            <div className=" space-y-4  md:ml-auto lg:ml-auto ">
              <h4 className="regular-16 text-neutral-900">
                Sign up for our newsletter
              </h4>
              <p className="small-16 text-neutral-500">
                Subscribe to get the latest design news, articles, resources and
                inspiration.
              </p>

              <form
                action="submit"
                className="border-2 border-neutral-200 flexBetween"
              >
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  className=" text-neutral-500 small-16"
                />
                <div className=" w-10 h-10 bg-masenaBlack flexCenter rounded">
                  <Image alt="arrow" src={arrowMid} />
                </div>
              </form>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 ">
                {SOCIALS.map((social, index) => (
                  <SocialButton icon={social.icon} />
                ))}

                {/* <div className=" w-10 h-10 flexCenter bg-neutral-900 rounded-full  ">
                  <Image alt="linkedin" src={ln} />
                </div>
                <div className=" w-10 h-10 flexCenter bg-neutral-900 rounded-full  ">
                  <Image alt="linkedin" src={ig} />
                </div>
                <div className=" w-10 h-10 flexCenter bg-neutral-900 rounded-full  ">
                  <Image alt="linkedin" src={fb} />
                </div>
                <div className=" w-10 h-10 flexCenter bg-neutral-900 rounded-full  ">
                  <Image alt="linkedin" src={x} />
                </div> */}
              </div>
            </div>
          </div>

          <hr className=" bg-neutral-200 my-8" />

          <div className=" py-6 my-8 flexBetween">
            <h3 className=" text-neutral-900 regular-24">Masena</h3>
            <p className=" text-neutral-500 small-16"> © Masena. 2024 </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
