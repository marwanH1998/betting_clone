'use client'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { useEffect, useState } from "react";
import Flag from 'react-country-flag';
import  { changeLanguage, selectGlobalSettings } from '../../redux/slices/globalSettingsSlice';
import  { languages} from '../../../public/localization/settings'
import { usePathname,useRouter } from 'next/navigation'
import type {LanguageEntry} from '../../redux/slices/globalSettingsSlice'
const LanguagesDropDown= () => {
    //TODO: This pathname can be later used for the task to route to the current directory instead of home
    // const pathname = usePathname()


    const router = useRouter()

    const globalSettings = useAppSelector(selectGlobalSettings);


    const changeLanguageSubmit = (language:LanguageEntry)=>{
        //TODO: instead of changing the route to home when changing language change to the path where you are
        router.push('/' + language.language)

    }
    return (
        <Dropdown className='w-12 min-w-200'  placeholder="Select a country">
            <DropdownTrigger className="mr-4">
            <div>
                <Flag     style={{fontSize: '1.5em',lineHeight: '1.5em',}}
                 countryCode={globalSettings.languageObject.code} svg />
            </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Languages" style={{fontSize: '1.5em',lineHeight: '1.5em',}} >
            {languages.map((language) => (
                <DropdownItem style={{fontSize: '1.5em',lineHeight: '1.5em',}} key={language.code} onClick={() => changeLanguageSubmit(language)} textValue={language.language} >
                      <div>
                      <Flag   style={{fontSize: '1.5em',lineHeight: '1.5em',}}   countryCode={language.code} svg />
                    </div>    
                </DropdownItem>
            ))}
            </DropdownMenu>
        </Dropdown>
);
}

export default LanguagesDropDown