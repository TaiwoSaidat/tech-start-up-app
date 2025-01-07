import { ClientProps } from '@/types/homePage'
import Image from 'next/image'
import React from 'react'

const ClientsCard = ({icon}: ClientProps) => {
  return (
    <>
      <div className=' '>
        <Image width={96} height={96} alt="log" src={icon} />
      </div>
    </>
  );
}

export default ClientsCard
