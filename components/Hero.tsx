import Image from "next/image";
import React from "react";
import arrowDown from "../public/arrowDown.png";
import clipArtGroup from '../public/clipArtGroup.png'

const Hero = () => {
  return (
    <>
      <section className="max-container padding-container flex flex-col md:flex-row lg:flex-row py-6 gap-10 ">
        {/* LEFT */}
        <div className=" flex flex-col gap-4 md:w-[60%] lg:[60%]">
          <h2 className=" regular-32 flex-wrap md:regular-64">
            Bringing Your Ideas to Life with Quality Software Solutions
          </h2>
          <p className=" small-16 md:small-24 text-neutral-500">
            Masena combines expertise in software development and design to help
            startups and small businesses launch successful products—on time,
            every time.
          </p>

          <button className=" bg-neutral-900 rounded-full h-10 w-10 md:h-14 md:w-14 flexCenter">
            <Image width={24} height={24} alt="arrowdown" src={arrowDown} />
          </button>
        </div>
        {/* RIGHT */}
        <div className="hidden md:flexCenter w-96 md:w-[40%] lg:[40%] p-2 ">
          <Image alt="clipArtGroup" src={clipArtGroup} />
        </div>
      </section>
    </>
  );
};

export default Hero;
