import React from "react";
import {OnOfUncontroll} from "./OnOfUncontroll";
import {action} from "@storybook/addon-actions";

export default {
    title:'UncontrolledOnOf',
    components: OnOfUncontroll
};

const callback=('on or of')
export const OffMode=()=><OnOfUncontroll onChange={x=>x}/>;
export const OnMode=()=><OnOfUncontroll onChange={x=>x}/>;