
import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';// проимпортировать
import {Accordion} from './Accordion';
import React, {useState} from "react";

export default {
    component: Accordion
};

const onChangeHandler=action('onChange') //прописать
export const CollapsedAccordion=()=>{
    return(
    <Accordion titleValue={"Collapsed Accordion"} collapset={true} onChange={onChangeHandler}/>)
}

export const OpenAccordion=()=>{
    return(
    <Accordion titleValue={"Opened Accordion"} collapset={false} onChange={()=>{}}/>)
}

export const AccordionDemo=()=>{
    const [collapsed, setCollapsed]=useState(false)
    return(
        <Accordion titleValue={"Accordion"} collapset={collapsed} onChange={()=>{
            setCollapsed(!collapsed)
        }}/>)
}