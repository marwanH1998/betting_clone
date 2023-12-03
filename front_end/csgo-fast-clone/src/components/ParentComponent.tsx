'use client';

import { Fragment, ReactNode, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { LanguageEntry, changeLanguage } from "@/redux/slices/globalSettingsSlice";
import { languages } from "../../public/localization/settings";
import { code } from "@nextui-org/react";
interface ParentComponentProps  {
    children: ReactNode
    language: string
}
const ParentComponent = ({children,language}: ParentComponentProps) => {
    const dispatch = useAppDispatch();


    useEffect( () => {
        const languageItem:LanguageEntry= languages.find((item) => item.language ==language) ?? {language:'en',code:'US'}
        dispatch(changeLanguage(languageItem) );

    },[language])

    return (
        <Fragment>
        {children}
        </ Fragment>

        );

  };
  
  export default ParentComponent;