// 'use client'
import React from 'react'
import Button from './ButtonComponent/Button'
import menu from '../public/menu.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      
      <div className=" max-container padding-container pt-12 pb-6 flexBetween  ">
        <h3 className=" regular-24 ">Masena</h3>
        <div className=" flexBetween gap-4">
          <Button />
          {/* width={10} height={10} */}
          <Image src={menu} alt="menu" />
        </div>
      </div>
      {/* width: Hug (127px)px; height: Hug (44px)px; padding: 8px 24px 8px 24px;
      gap: 10px; border-radius: 64px 0px 0px 0px; opacity: 0px; */}
    </>
  );
}

export default Navbar
