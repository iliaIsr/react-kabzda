import React, {useState} from "react";
import { action } from '@storybook/addon-actions';
import {OnOf} from "./OnOf";

export default {
    title:"OnOf",
    component: OnOf
};

const callback=action('clicked, on or off')
export const OnMode=()=> <OnOf on={true} onClick={callback}/>
export const OfMode=()=> <OnOf on={false} onClick={callback}/>

export const ModeChanging=()=>{
    const [value, setValue]=useState<boolean>(true)
    return <OnOf on={value} onClick={setValue}/>
}