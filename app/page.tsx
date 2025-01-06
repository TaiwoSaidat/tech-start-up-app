"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Works from "../components/Works";
import Testimonial from "../components/Testimonial";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Clients />
      <Works />
      <Testimonial />
      <ContactUs />
    </>
  );
}
