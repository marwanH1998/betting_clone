'use client'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useState } from "react";
import Flag from 'react-country-flag';
type LanguageEntry = {
    code: string;
    language: string;
  };
const LanguagesDropDown = () => {

    const [chosenLanguage,setChosenLanguage] = useState<LanguageEntry>( { code: 'US', language: 'en' })
    const languages = [
        { code: 'US', language: 'en' },       
        { code: 'EG', language: 'ar' },
        // Add more countries as needed
      ];

    return (
        <Dropdown className='w-12 min-w-200'  placeholder="Select a country">
            <DropdownTrigger className="mr-4">
            <div>
                <Flag     style={{fontSize: '1.5em',lineHeight: '1.5em',}}
                 countryCode={chosenLanguage.code} svg />
            </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Languages" style={{fontSize: '1.5em',lineHeight: '1.5em',}} >
            {languages.map((language) => (
                <DropdownItem style={{fontSize: '1.5em',lineHeight: '1.5em',}} key={language.code} onClick={() => setChosenLanguage(language)} textValue={language.language} >
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