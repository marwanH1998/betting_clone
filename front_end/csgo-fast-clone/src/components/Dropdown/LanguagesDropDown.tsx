'use client'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import Flag from 'react-country-flag';

const LanguagesDropDown = () => {
    const countries = [
        { code: 'US', label: 'United States' },
        { code: 'GB', label: 'United Kingdom' },
        // Add more countries as needed
      ];
    return (
        <Dropdown placeholder="Select a country">
            <DropdownTrigger>
            <div className="mr-4">
                <Flag countryCode='US' svg />
            </div>
            </DropdownTrigger>
            <DropdownMenu>
            {countries.map((country) => (
                <DropdownItem key={country.code} onClick={() => alert(country.code)} >
                      <div style={{ width: '20px' }}>
                            <Flag countryCode={country.code} svg />
                    </div>    
                </DropdownItem>
            ))}
            </DropdownMenu>
        </Dropdown>
);
}

export default LanguagesDropDown