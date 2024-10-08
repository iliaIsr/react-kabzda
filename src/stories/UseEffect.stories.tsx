import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample=()=>{
    const [counter, setCounter]=useState(1)
    // const [fake, setFake]=useState(10)

    console.log('SimplExample')

    useEffect(() => {
        console.log('useEffect');
        document.title=counter.toString();
        alert(`ny i...${counter}`)
    });

    // const func=()=>{
    //     console.log("function")
    //     alert('function')
    // }
    // func()

    return<>
    Hello,{counter}-----------
        {/*{fake}*/}
        <button onClick={()=>setCounter(counter+1)}>+</button>
        {/*<button onClick={()=>setFake(fake+10)}>+</button>*/}
    </>
}
//почему при 2х стэйтах сначала отрабатывает ЮзЭф , даже с зависимостями
// коментарии влияют на работу ЮзЭф??