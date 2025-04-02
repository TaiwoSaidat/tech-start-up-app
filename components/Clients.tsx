import React from "react";
import { CLIENTS } from "@/constants";
import ClientsCard from "./CardComponent/ClientsCard";

const Clients = () => {
  return (
    <>
      <section className="max-container padding-container text-masenaWhite bg-neutral-900 rounded-xl py-16 ">
        <div className=" flex flex-col gap-10 my-12 ">
          <span className="small-16 md:small-28 text-masenaWhite ">
            Our Clients
          </span>
          <h2 className=" regular-32 md:regular-48 md:w-[60%] lg:w-[60%] text-masenaWhite">
            We’ve worked with hundreds of amazing people.
          </h2>
        </div>

        {/* justify-between  */}
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-10  ">
          {CLIENTS.map((client, index) => (
            <ClientsCard icon={client.icon} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Clients;
