import React, {useEffect, useState} from "react";

export default {
    title: "Watch demo"
}

export const Watch = () => {
    new Date()
    let watch = new Date()
    let hour = watch.getHours()
    let minut = watch.getMinutes()
    let second = watch.getSeconds()
    let [hours, setHours] = useState(hour)
    let [minuts, setMinutes] = useState(minut)
    let [seconds, setSeconds] = useState(second)



    useEffect(()=>{
        setInterval(()=>{
            setSeconds(prevSec => {
                if (prevSec>=59){
                    setMinutes(prevMin=>{
                        if (prevMin>=59){
                            setHours(prevH => prevH>=23?0:prevH+1)
                            return 0
                        }
                        return prevMin+1;
                    })
                    return prevSec=0
                }
                return prevSec+1
            })
        },10)
    },[])

    return <div style={{color: "red", fontSize: '22px'}}>
        <div>
            {hours}:{minuts}:{seconds}
        </div>
    </div>
}


//
// useEffect(()=>{
//     setInterval(()=>{
//         if (minuts===60){
//             setHours(prevState=>prevState+1)
//             setMinuts(0)
//         }
//         if (seconds===60){
//             setMinuts(prevState => prevState+1)
//             setSeconds(0)
//         }
//         setSeconds(prevState => prevState+1)
//     },1000)
//
// },[])