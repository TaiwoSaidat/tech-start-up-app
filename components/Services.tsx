"use client";
import { SERVICES } from "@/constants";
import React from "react";
import ServicesCard from "./CardComponent/ServicesCard";
import HomePageCard from "./CardComponent/HomePageCard";

const Services = () => {
  return (
    <>
      <section className="max-container padding-container bg-neutral-50 py-6 ">
        <HomePageCard
          span="Our Services"
          title="We help you identify and explore new opportunities."
          description="As long as those opportunities involve giving us money to re-purpose old projects — we can come up with an endless number of those."
        />

        {/* DOWN */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-6 gap-6">
          {SERVICES.map((service, index) => (
            <ServicesCard
              key={service.title}
              title={service.title}
              icon={service.icon}
              description={service.description}
              more={service.more}
              // icon2={icon2}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
