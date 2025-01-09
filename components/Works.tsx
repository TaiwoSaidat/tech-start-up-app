import React from "react";
import HomePageCard from "./CardComponent/HomePageCard";
import Image from "next/image";
import linearIcon from '../public/linear-icon.png'
import { WORKS } from "@/constants";
import WorksComponent from "./CardComponent/WorksComponent";

const Works = () => {
  return (
    <>
      <section className="max-container padding-container bg-masenaWhite py-6 ">
        <HomePageCard
          span="Our Portfolio"
          title="Harnessing technology for a brighter future."
          description="We believe technology is the answer to the world’s greatest challenges. It’s also the cause, so we find ourselves in bit of a catch 22 situation."
          variant="light"
          withWidth = {true}
        />
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-6 gap-6">
          {WORKS.map((work, index) => (
            <WorksComponent
              key={work.title}
              icon={work.icon}
              subtitle={work.subtitle}
              year={work.year}
              title={work.title}
              description={work.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Works;
