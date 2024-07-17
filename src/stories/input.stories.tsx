import React, {ChangeEvent} from "react";
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

export const controlledInput =()=>{
const [parentValue, setParentValue]=useState("")
    const onChange=(e: ChangeEvent<HTMLInputElement>)=>{
    setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>
}

export const controlledCheckBox=()=>{
    const [parValue, setParValue]=useState(true)
    const onChange=(e: ChangeEvent<HTMLInputElement>)=>{
        setParValue(e.currentTarget.checked)
    }

    return <input type={"checkbox"} onChange={onChange} checked={parValue}/>
}


export const controllSelected=()=>{
    const [val, setVal]=useState<string>('1')
    const onChange=(e:ChangeEvent<HTMLSelectElement>)=>{
        setVal(e.currentTarget.value)
    }

    return <select value={val} onChange={onChange}>
        <option value={'1'}>Jenya</option>
        <option value={'2'}>Ekaterina</option>
        <option value={'3'}>  Viktoria</option>
    </select>
}



// export const controlledSelect=()=>{
//     const [parValue, setParValue]=useState<string|undefined>("2")
//     const onChange=(e: ChangeEvent<HTMLSelectElement>)=>{
//         setParValue(e.currentTarget.value)
//     }
//
//     return <select value={parValue} onChange={onChange}>
//         <option>none</option>
//         <option value={"1"}>Minsk</option>
//         <option value={"2"}>Moscow</option>
//         <option value={"3"}>Vitebsk</option>
//     </select>
// }

export const ControllInputWithFixedValue = () => <input value={"it-incubator"}/>

