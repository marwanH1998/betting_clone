'use client';

import { selectGlobalSettings } from '@/redux/slices/globalSettingsSlice';
import ButtonWithIcon from '../Buttons/ButtonWithIcon';
import IconButton from '../Buttons/IconButton';
import LanguagesDropDown from '../Dropdown/LanguagesDropDown';
import Logo from '../statics/Logo';
import { useAppDispatch,useAppSelector } from '@/redux/hooks';
import  { toggleSound } from '../../redux/slices/globalSettingsSlice';

const TopNavigation = () => {
    const globalSettings = useAppSelector(selectGlobalSettings);
    const dispatch = useAppDispatch();
    const FaqIconFunction = ():void=>{
      alert("ROUTE ME TO FAQ")
    }
    const SoundIconFunction = ():void=>{
        dispatch(toggleSound());
    }
    const LoginFunction = ():void =>{
      alert("global settings, " + globalSettings.language)
      alert("global settings, " + globalSettings.sound)

    }
    return (
      <div className="w-full h-16 fixed bg-black flex">
      <Logo/>
      <div className="h-full flex items-center ml-auto mr-4">
          <LanguagesDropDown />
          <IconButton onClick={SoundIconFunction} className={globalSettings.sound ?"fa-solid fa-volume-high fa-lg":"fa-solid fa-volume-xmark fa-lg"  } />
          <IconButton onClick={FaqIconFunction} className="far fa-circle-question fa-lg" />
          <ButtonWithIcon onClick={LoginFunction} />
      </div>
      </div>
    );
  };
  
  export default TopNavigation;