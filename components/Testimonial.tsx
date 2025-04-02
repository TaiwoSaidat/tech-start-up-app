import Image from 'next/image';
import React from 'react'
import adtecBlack from '../public/adtec-logo-black.png'

const Testimonial = () => {
  return (
    <>
      <section className="max-container padding-container py-6 ">
        <div className="flex flex-col gap-8 p-12">
          <h3 className=" regular-24 text-neutral-900 flexCenter ">
            "Working with Tech Start Up has been a game-changer for our startup. They
            quickly understood our vision and delivered a polished MVP that
            exceeded our expectations—on time and well within budget. The team’s
            professionalism, combined with their technical expertise, made the
            entire process seamless. We couldn’t have asked for a better partner
            to bring our product to life!"
          </h3>
          <Image alt="adtec-logo" src={adtecBlack} />
        </div>
      </section>
    </>
  );
}

export default Testimonial
