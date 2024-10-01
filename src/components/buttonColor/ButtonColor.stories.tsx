import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import {ButtonColor} from "./ButtonColor";
import styles from './Button.module.css'


export default {
    title: "ButtonColor",
    component: ButtonColor
};

export const ButtonJob=()=>{
    return (
        <ButtonColor title={'color'}/>
    )

}