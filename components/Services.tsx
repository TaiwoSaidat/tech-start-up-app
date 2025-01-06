'use client'
import React from "react";
// import ServicesCard from "./ButtonComponent/CardComponent/ServicesCard";
import arrowLeftRight from "../public/arowLeftRight.png";
import arrowRight from "../public/arrowRight.png";
import Image from "next/image";
// import ServicesCard from "./ButtonComponent/CardComponent/ServicesCard";
import { SERVICES } from "@/constants";
import ServicesCard from "./ButtonComponent/CardComponent/ServicesCard";

const Services = () => {
  return (
    <>
      <section className="max-container padding-container bg-neutral-50 ">
        <div className=" flex flex-col gap-4 md:w-[60%] lg:[60%]">
          <span className=" text-neutral-500 small-16">Our Services</span>
          <h2 className="text-neutral-900 regular-48">
            We help you identify and explore new opportunities.
          </h2>
          <p className=" text-neutral-500 small-24">
            As long as those opportunities involve giving us money to re-purpose
            old projects — we can come up with an endless number of those.
          </p>
        </div>

        {/* DOWN */}
        <div className=" flex flex-col md:flex-row lg:flex-row py-6 gap-8 border-2 border-green-800">
          {SERVICES.map((service) => (
            <ServicesCard
              key={service.title}
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          ))}

        </div>
      </section>
    </>
  );
};

export default Services;

      // <section className="max-container padding-container flex flex-col md:flex-row lg:flex-row py-6 gap-8 border-2 border-red-800">
      //   {/* LEFT */}
      //   {/* <ServicesCard /> */}
      //   {/* <ServicesCard /> */}
      //   <div className=" flex flex-col p-6 gap-6 border-2 border-red-800 rounded-xl ">
      //     {/* border-2 border-neutral-200 */}
      //     <Image
      //       width={32}
      //       height={32}
      //       alt="arrowLeftRight"
      //       src={arrowLeftRight}
      //     />
      //     <h3 className=" text-neutral-900 regular-24">Software Development</h3>
      //     <p className=" text-neutral-500 small-16">
      //       From MVP to scalable solutions, we build tailored software to help
      //       you succeed. Our team specializes in creating reliable,
      //       high-performance applications that meet your business needs.
      //     </p>
      //     <div className=" flex gap-2">
      //       <span className="regular-16">Read More</span>
      //       <Image width={24} height={20} alt="arrowRight" src={arrowRight} />
      //     </div>
      //   </div>
      //   {/* RIGHT */}
      //   <div className=" flex flex-col p-6 gap-6 border-2 border-red-800 rounded-xl ">
      //     {/* border-2 border-neutral-200 */}
      //     <Image
      //       width={32}
      //       height={32}
      //       alt="arrowLeftRight"
      //       src={arrowLeftRight}
      //     />
      //     <h3 className=" text-neutral-900 regular-24">UI/UX Design</h3>
      //     <p className=" text-neutral-500 small-16">
      //       Great products start with great design. We create engaging,
      //       user-centered interfaces that bring your vision to life and deliver
      //       an excellent user experience.
      //     </p>
      //     <div className=" flex gap-2">
      //       <span className="regular-16">Read More</span>
      //       <Image width={24} height={20} alt="arrowRight" src={arrowRight} />
      //     </div>
      //   </div>
      // </section>;
