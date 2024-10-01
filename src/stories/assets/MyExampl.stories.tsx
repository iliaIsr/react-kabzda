import React, { useState} from "react";

export default {
    title:"My.exampl"
}

const Counter=(props:{num:number})=>{
    console.log('Counter render')
    return <div>{props.num}</div>
}
const CounterMemo=React.memo(Counter)

const Name=(props:{name:string})=>{
    console.log("Name render")
    return <div>{props.name}</div>
}
const NameMemo=React.memo(Name)

export const TwoInOne=()=>{
    let [number, setNumber]=useState(0)
    let [name, setName]=useState("Dima")

    return (
        <div>
            <button onClick={() => setNumber(number + 1)}>NUMBER</button>
            <CounterMemo num={number}/>
            <button onClick={() => setName(name + '1')}>NAME</button>
            <NameMemo name={name}/>
        </div>
    )

}