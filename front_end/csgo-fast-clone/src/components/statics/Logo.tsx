
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
      layout='fill'
      objectFit='contain'
    />
    </div>
    <div className="h-full w-48 relative">
  <Image
    src={logo_2}
    alt="Second Image"
    layout='fill'
    objectFit='contain'

  />
    </div></Fragment>

)
}
export default Logo