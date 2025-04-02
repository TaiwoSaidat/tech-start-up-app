import React from "react";
import HomePageCard from "./CardComponent/HomePageCard";
import ContactForm from "./FormComponent/ContactForm";
import { OFFICES } from "@/constants";
import OfficesComponent from "./CardComponent/OfficesComponent";

const ContactUs = () => {
  return (
    <>
      <section id="ContactUs" className=" max-container padding-container py-6  ">
        <div className=" bg-neutral-900  border-1 rounded-xl p-12">
          <HomePageCard
            span="Contact Us"
            title="Let's Start Your Project"
            description="Let’s discuss how we can help your business grow with high-quality, affordable software solutions."
            variant="dark"
            withWidth={false}
          />

          {/* form components */}
          <div className="form">
            <ContactForm />
          </div>

          <div className=" space-y-20">
            <h3 className="mid-24 text-masenaWhite">Our Offices</h3>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
              {OFFICES.map((office, index) => (
                <OfficesComponent
                  // key={office.title}
                  title={office.title}
                  description={office.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
