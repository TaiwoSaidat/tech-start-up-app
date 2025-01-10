import { ServiceProps } from '@/types/homePage';
import Image from 'next/image';
import React from 'react'
import arrowRight from '../../public/arrowRight.png'

const ServicesCard = ({icon, title, description, more, icon2}: ServiceProps) => {
  return (
    <>
      <div className="flex flex-col w-[1/2] p-6 gap-6 border-2 border-neutral-200 rounded-xl">
        <Image width={32} height={32} alt="icon" src={icon} />
        <h3 className="text-neutral-900 regular-24">{title}</h3>
        <p className="text-neutral-500 small-16">{description}</p>
        <div className="flex gap-2">
          <span className="regular-16">{more}</span>
          <Image width={24} height={20} alt="arrowRight" src={arrowRight} />
        </div>
      </div>
    </>
  );
}

export default ServicesCard