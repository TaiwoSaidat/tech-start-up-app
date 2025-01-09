import React from "react";
import HomePageCard from "./CardComponent/HomePageCard";
import ContactForm from "./FormComponent/ContactForm";

const ContactUs = () => {
  return (
    <>
      <section className="max-container padding-container bg-neutral-50 py-6 ">
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
        </div>
      </section>
    </>
  );
};

export default ContactUs;
