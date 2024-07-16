import React from "react";
import {action} from "@storybook/addon-actions";
import {useState, useRef} from 'react';
import {any} from "prop-types";

export default {
    title: "input"
}

export const UncontrollInput = () => <input/>


export const TrackValueOfUncontrollInput = () => {
    const [value, setValue] = useState('')

    return <> <input onChange={(event) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }}/> - {value} </>
}

export const GetValueOfUncontrollInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef <HTMLInputElement> (null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return <> <input ref={inputRef}/> <button onClick={save}> save </button> actual value: {value} </>;

}
export const ControllInputWithFixedValue = () => <input value={"it-incubator"}/>

