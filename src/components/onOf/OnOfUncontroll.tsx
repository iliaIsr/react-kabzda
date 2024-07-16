import React, {useState} from 'react';

type PropsTypeOnOf={
    onChange:(on:boolean)=>void
    defaultOn?:boolean
}


export const OnOfUncontroll= (props:PropsTypeOnOf) => {

    let[on,setOn]=useState(props.defaultOn? props.defaultOn:false)


    const onStyle={
        width:"30px",
        height:"20px",
        border: "1px solid black",
        display:"inline-block",
        padding:'2px',
        backgroundColor:on?"green":"white"
    }
    const offStyle={
        width:"30px",
        height:"20px",
        border: "1px solid black",
        display:"inline-block",
        marginLeft: "2px",
        padding:'2px',
        backgroundColor: on?"white":"red"
    }
    const indicatorStyle={
        width:"10px",
        height:"10px",
        borderRadius:"5px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        backgroundColor: on?"green":"red"
    }

    const onClicked=()=>{
        setOn(true)
    props.onChange(true)
    }
    const ofClicked=()=>{
        setOn(false)
    props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>on</div>
            <div style={offStyle} onClick={ofClicked}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

