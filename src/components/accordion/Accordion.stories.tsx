
import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';// проимпортировать
import {Accordion} from './Accordion';
import React, {useState} from "react";

export default {
    title:"Accordion",
    component: Accordion
};
//
const onChangeHandler=action('onChange') //прописать
const onClickCallback = action("some item was clicked")
export const CollapsedAccordion=()=>{
    return(
    <Accordion titleValue={"Collapsed Accordion"} collapset={true} onChange={onChangeHandler} items={[]} onClick={onClickCallback}/>)
}

export const OpenAccordion=()=>{
    return(
    <Accordion titleValue={"Opened Accordion"} collapset={false} onChange={()=>{}} items={[{title:"Dimych", value:1},{title:"Vova", value:2}, {title:"Vity", value:3}]} onClick={onClickCallback}/>)
}

export const AccordionDemo=()=>{
    const [collapsed, setCollapsed]=useState(false)
    return(
        <Accordion titleValue={"Accordion"} collapset={collapsed} onChange={()=>{
            setCollapsed(!collapsed)
        }} items={[{title:"Dimych", value:1},{title:"Vova", value:2}, {title:"Vity", value:3}]} onClick={(value)=>{alert(`person with id: ${value} should be happy`)}}/>)
}

//14 lesson s22 minuts DZ