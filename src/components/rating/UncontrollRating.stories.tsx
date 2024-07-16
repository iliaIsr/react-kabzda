import React from "react";
import {UncontrollRating} from "./UncontrollRating";
import {action} from "@storybook/addon-actions";

export default {
    title:'UncontrollRating',
    component:UncontrollRating,
    parameters:{}
}

const callback=action('changed')

export const Rating0=<UncontrollRating defaultValue={0} onChange={callback}/>
export const Rating1=<UncontrollRating defaultValue={1} onChange={callback}/>
export const Rating2=<UncontrollRating defaultValue={2} onChange={callback}/>
export const Rating3=<UncontrollRating defaultValue={3}onChange={callback}/>
export const Rating4=<UncontrollRating defaultValue={4} onChange={callback}/>
export const Rating5=<UncontrollRating defaultValue={5} onChange={callback}/>