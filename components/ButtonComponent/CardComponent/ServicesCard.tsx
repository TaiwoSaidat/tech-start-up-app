import Image from 'next/image';
import React from 'react'
import arrowLeftRight from '../../../public/arowLeftRight.png'
import arrowRight from '../../../public/arrowRight.png'
// import { ClientCardTypes } from '@/types/homePage';

type ClientCardProps = {
  // icon: string;
  title: string;
  description: string;
  // span: string;
};

const ServicesCard = ({  title, description }: ClientCardProps) => {
  return (
    <>
      <div className=" flex flex-col p-6 gap-6 border-2 border-red-800 rounded-xl ">
        {/* border-2 border-neutral-200 */}
        {/* <Image width={32} height={32} alt="icon" src={icon} /> */}
        <h3 className=" text-neutral-900 regular-24">{title}</h3>
        <p className=" text-neutral-500 small-16">{description}</p>
        <div className=" flex gap-2">
          <span className="regular-16">Read More</span>
          <Image width={24} height={20} alt="arrowRight" src={arrowRight} />
        </div>
      </div>
    </>
  );
};

export default ServicesCard
