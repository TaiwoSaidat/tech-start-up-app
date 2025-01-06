import Image from "next/image";
import React from "react";
import ClientCard from "./ButtonComponent/CardComponent/ServicesCard";
import arrowLeftRight from "../public/arowLeftRight.png";
import arrowRight from "../public/arrowRight.png";

const Clients = () => {
  return (
    <>
      <section>
        <div className="">
          <span>Our Clients</span>
          <h2>We’ve worked with hundreds of amazing people.</h2>
        </div>
        <div className="w-full gap-6">
          <div className="">
            {/* <Image width={24} height={24} alt="" src={} /> */}
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
