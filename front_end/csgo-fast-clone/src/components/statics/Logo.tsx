
'use client';

import { Fragment } from "react";
import Image from 'next/image'
import logo from '../../assets/images/core/logo.png'
import logo_2 from '../../assets/images/core/logo_2.png'
const Logo = ()=> {

    return ( 
    <Fragment>
            <div className="h-full w-24 relative">
    <Image
      src={logo}
      alt="LOGO"
      style={{
        objectFit: 'contain',
      }}
      fill = {true}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

    />
    </div>
    <div className="h-full w-48 relative">
  <Image
    src={logo_2}
    alt="Second Image"
    style={{
      objectFit: 'contain',
    }}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    fill = {true}

  />
    </div></Fragment>

)
}
export default Logo