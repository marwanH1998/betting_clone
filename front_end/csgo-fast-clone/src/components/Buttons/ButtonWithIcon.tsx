'use client';

import '@fortawesome/fontawesome-free/css/all.css';
import { FC } from 'react';

interface ButtonWithIconProps  {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const ButtonWithIcon: FC<ButtonWithIconProps> = (props)=> {
      
    return (
        <button onClick={props.onClick} className="bg-gamble hover:bg-gamble-light text-white font-bold py-2 px-4 rounded">
        <i className="fas fa-sign-in-alt mr-2"></i>
        Login
        </button>
    );
  };
  
  export default ButtonWithIcon;