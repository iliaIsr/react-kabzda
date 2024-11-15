import {useEffect, useState} from "react";

type MyClockProps = {
    analog?:boolean;
}
export const MyClock=(analog:MyClockProps)=>{
    const [time, setTime] = useState(new Date());


    useEffect(()=>{
      const timer = setInterval(()=>{
          setTime(new Date())
      },1000)
        return ()=>clearInterval(timer)
    },[])

    const addZero=(num:number)=>num<=9?`0${num}`:num
    if (analog) {
        return (
            <div style={{ position: 'relative', width: '200px', height: '200px', border: '5px solid black', borderRadius: '50%' }}>
                <div style={{
                    position: 'absolute',
                    width: '50%',
                    height: '2px',
                    backgroundColor: 'black',
                    transform: `rotate(${(time.getHours() % 12) * 30 + (time.getMinutes() / 60) * 30}deg)`,
                    transformOrigin: '100%',
                    top: '50%',
                    left: '50%',
                }} />
                <div style={{
                    position: 'absolute',
                    width: '70%',
                    height: '1.5px',
                    backgroundColor: 'black',
                    transform: `rotate(${time.getMinutes() * 6}deg)`,
                    transformOrigin: '100%',
                    top: '50%',
                    left: '50%',
                }} />
                <div style={{
                    position: 'absolute',
                    width: '90%',
                    height: '1px',
                    backgroundColor: 'red',
                    transform: `rotate(${time.getSeconds() * 6}deg)`,
                    transformOrigin: '100%',
                    top: '50%',
                    left: '50%',
                }} />
            </div>
        );
    }
    return <div>
        <span>{addZero(time.getHours())}:</span>
        <span>{addZero(time.getMinutes())}:</span>
        <span>{addZero(time.getSeconds())}</span>
    </div>
}