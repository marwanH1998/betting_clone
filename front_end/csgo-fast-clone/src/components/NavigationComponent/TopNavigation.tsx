'use client';

import ButtonWithIcon from '../Buttons/ButtonWithIcon';
import IconButton from '../Buttons/IconButton';
import LanguagesDropDown from '../Dropdown/LanguagesDropDown';
import Logo from '../statics/Logo';

const TopNavigation = () => {
    
    const FaqIconFunction = ():void=>{
      alert("ROUTE ME TO FAQ")
    }
    const SoundIconFunction = ():void=>{
      alert("Sound off sound on toggle")
    }
    const LoginFunction = ():void =>{
      alert("Login Modal")
    }
    return (
      <div className="w-full h-16 fixed bg-black flex">
      <Logo/>
      <div className="h-full flex items-center ml-auto mr-4">
          <LanguagesDropDown />
          <IconButton onClick={SoundIconFunction} className="fa-solid fa-volume-xmark fa-lg" />
          <IconButton onClick={FaqIconFunction} className="far fa-circle-question fa-lg" />
          <ButtonWithIcon onClick={LoginFunction} />
      </div>
      </div>
    );
  };
  
  export default TopNavigation;