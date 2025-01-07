'use client'
import React from "react";
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
        <div className=" flex flex-col md:flex-row lg:flex-row py-6 gap-8 ">
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