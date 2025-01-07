import { HomePageProps } from '@/types/homePage';
import React from 'react'

const HomePageCard = ({span, title, description}: HomePageProps) => {
  return (
    <>
      <div className=" flex flex-col gap-4 md:w-[60%] lg:[60%]">
        <span className=" text-neutral-500 small-16">{span}</span>
        <h2 className=" regular-32 text-neutral-900 md:regular-48">
          {title}
        </h2>
        <p className=" small-16 md:small-24 text-neutral-500 ">
          {description}
        </p>
      </div>
    </>
  );
}

export default HomePageCard
