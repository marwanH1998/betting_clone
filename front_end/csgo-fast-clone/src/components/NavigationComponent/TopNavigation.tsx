'use client';

import Image from 'next/image'
import logo from '../../assets/images/core/logo.png'

const TopNavigation = () => {
      
    return (
      <div className="w-full h-16 fixed bg-black flex">
        <div className="h-full w-24 relative">
        <Image
          src={logo}
          alt="LOGO"
          layout='fill'
          objectFit='contain'
        />
        </div>
        <div className="h-full w-24 relative">
      <Image
        src={logo}
        alt="Second Image"
        layout='fill'
        objectFit='contain'
      />
    </div>
      </div>
    );
  };
  
  export default TopNavigation;