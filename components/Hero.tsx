import Image from "next/image";
import React from "react";
import arrowDown from "../public/arrowDown.png";
import clipArtGroup from '../public/clipArtGroup.png'

const Hero = () => {
  return (
    <>
      <section className="max-container padding-container flex flex-col md:flex-row lg:flex-row py-6 gap-10 ">
        {/* LEFT */}
        <div className=" flex flex-col gap-4 border-2 border-green-600 md:w-[60%] lg:[60%] ">
          {/* md:w-[60%] lg:[60%] */}
          <h2 className=" regular-64">
            Bringing Your Ideas to Life with Quality Software Solutions
          </h2>
          <p className=" small-24 text-neutral-500">
            Masena combines expertise in software development and design to help
            startups and small businesses launch successful products—on time,
            every time.
          </p>

          <button className=" bg-neutral-900 rounded-full h-14 w-14 flexCenter">
            {/* width={12} height={12} */}
            <Image width={24} height={24} alt="arrowdown" src={arrowDown} />
          </button>
        </div>
        {/* RIGHT */}
        <div className="hidden md:flexCenter w-96 bg-red-500 md:w-[35%] lg:[35%] p-2 ">
          {/*  md:w-[60%] lg:[60%] width={96} height={96} */}
          <Image alt="clipArtGroup" src={clipArtGroup} />
        </div>
      </section>
    </>
  );
};

export default Hero;
