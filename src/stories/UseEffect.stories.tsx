import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample=()=>{
    const [counter, setCounter]=useState(1)
    const [fake, setFake]=useState(10)


    useEffect(()=>{
        debugger
        console.log('counter:', counter)
        document.title=(counter).toString()
    },[])

    return<>
       HELLO {counter}
    <button onClick={()=>setCounter(counter+1)}>+</button>
        It's Fake {fake}
        <button onClick={()=>setFake(fake+10)}>X</button>
    </>
}

export const SetTimeOutExample=()=>{
    const [counter, setCounter]=useState(1)
    const [fake, setFake]=useState(10)

    console.log('setTimeOutExample')
    //
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         console.log('setTimeOut')
    //         document.title=counter.toString()
    //     },1000)
    // },[counter])

    useEffect(()=>{
        setInterval(()=>{
            console.log('setTimeOut')
            document.title=counter.toString()
            setCounter(prevState=>prevState+1)
        },1000)
    },[])



    return<>
       <p> HELLO {counter}</p>
        {/*<button onClick={()=>setCounter(counter+1)}>+</button>*/}
       <p>It's Fake {fake} </p>
        {/*<button onClick={()=>setFake(fake+10)}>X</button>*/}
    </>
}

