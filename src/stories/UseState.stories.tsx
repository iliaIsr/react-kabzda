import React, {useMemo, useState} from "react";

export default {
    title: "useState demo"
}

function generateData(){
    //difficult counting
    console.log('generateData')
    return 23837210;
}
export const Example1 = () => {
    // const initValue=useMemo(generateData,[])
    const [counter, setCounter]=useState(generateData);
    console.log('result')
function functionSum(state:number){
        console.log('functionSum')
        return state+10
}

    return <>
        <button onClick={()=>setCounter(functionSum)}>+</button>
        <p>{counter}</p>

    </>
}