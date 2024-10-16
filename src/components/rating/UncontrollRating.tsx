import React, {useState} from "react";

export type numberForRating= 1|2|3|4|5|0;

export type RatingPropsType= {
    defaultValue?:numberForRating
    onChange:(value:numberForRating)=>void

}
export const UncontrollRating = (props:RatingPropsType) => {
    let [value, setValue] = useState<numberForRating>(props.defaultValue?props.defaultValue:0)
    return (
        <div>
            <Star selected={value > 0} setValue={()=>{setValue(1);  props.onChange(1)}} />
            <Star selected={value > 1} setValue={()=>{setValue(2); props.onChange(2)}} />
            <Star selected={value > 2} setValue={()=>{setValue(3); props.onChange(3)}} />
            <Star selected={value > 3} setValue={()=>{setValue(4); props.onChange(4)}} />
            <Star selected={value > 4} setValue={()=>{setValue(5); props.onChange(5)}} />
        </div>
    )
}


export type StarPropsType = {
    selected: boolean
    setValue:()=>void
}

export function Star(props: StarPropsType) {
    // return props.selected ? <span><b>star-</b></span>:  <span>star-</span>}
    return <span onClick={()=>{(props.setValue())}}>
        {props.selected?<b> star</b>:"star "}
    </span>}
