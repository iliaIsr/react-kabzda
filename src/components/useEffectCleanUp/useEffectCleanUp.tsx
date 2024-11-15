import {useEffect, useState} from "react";
import {cleanup} from "@testing-library/react";

export const UseEffectCleanUp = () => {
    let [number, setNumber] = useState(0);
    let [time, setTime] = useState(0);

    console.log("nuber one:", number);
    console.log("time one:", time);


    useEffect(() => {
        setNumber(number+1);
        return () => {

            setTime(0);
        }

    }, [time===10]);

    return <>
        <div>TIME:{time}</div><button onClick={()=>setTime(time+1)}>+</button>
        <div>PERIOD:{number}</div>
    </>;

}