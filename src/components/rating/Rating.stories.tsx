import React, {useState} from "react";
import {Rating} from "./Rating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Rating',
    component: Rating
}

export const zeroStars=()=> <Rating value={0} onClick={x=>x}/>
export const oneStars=()=> <Rating value={1} onClick={x=>x}/>
export const twoStars=()=> <Rating value={2} onClick={x=>x}/>
export const threeStars=()=> <Rating value={3} onClick={x=>x}/>
export const fourStars=()=> <Rating value={4} onClick={x=>x}/>
export const fiveStars=()=> <Rating value={5} onClick={x=>x}/>

export const changeStars=()=>{
    const [value, setValue]=useState<1|2|3|4|5|0>(0)
    return <Rating value={value} onClick={setValue}/>
}
