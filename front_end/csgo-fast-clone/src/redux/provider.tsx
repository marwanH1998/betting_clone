"use client" 
import { Provider } from 'react-redux'
import React, { PropsWithChildren } from "react";

import store from '../redux/store'

const Providers = ({ children }: PropsWithChildren)=> {

    return (
    <Provider store={store}> 
    {children}
    </Provider>
    );
}
export default Providers;