'use client';

import ButtonWithIcon from '../Buttons/ButtonWithIcon';
import IconButton from '../Buttons/IconButton';
import LanguagesDropDown from '../Dropdown/LanguagesDropDown';
import Logo from '../statics/Logo';

const TopNavigation = () => {
      
    return (
      <div className="w-full h-16 fixed bg-black flex">
      <Logo/>
      <div className="h-full flex items-center ml-auto mr-4">
          <LanguagesDropDown />
          <IconButton className="fa-solid fa-volume-xmark fa-lg" />
          <IconButton className="far fa-circle-question fa-lg" />
          <ButtonWithIcon />
      </div>
      </div>
    );
  };
  
  export default TopNavigation;