import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import {Select} from "./Select";
import styles from './Select.module.css'


export default {
    title: "Select",
    component: Select
};

export const WitchValue = () => {
    const [value, setValue] = useState('2')

    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: "Minsk"},
                    {value: '2', title: "Moscow"},
                    {value: '3', title: 'Kyev'}
                ]}/>
    </>
}


export const WitchOutValue = () =>{
    const [value, setValue] = useState(null)

    return <>
        <Select
            onChange={setValue}
            value={value}
            items={[
                {value: '1', title: "Minsk"},
                {value: '2', title: "Moscow"},
                {value: '3', title: 'Kyev'}
            ]}/>
    </>
}




