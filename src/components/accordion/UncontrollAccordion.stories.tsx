import React, {useState} from "react";
import {UncontrollAcordion} from "./UncontrollAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title:'UncontrollAcordion',
    components:UncontrollAcordion
}

export const collapsetAuto =()=> <UncontrollAcordion titleValue={'Users'}/>

