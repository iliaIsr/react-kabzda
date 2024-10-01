import React, {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

export default {
    title: 'ExampleSelects'
}

type citysType={
    capital:string
    north:string
}
type citysArrayType={
    country:string
    peoples:number
    citys:citysType
}
export const ExampleSelects = () => {
    let [citys, setCitys] = useState<Array<citysArrayType>>([
        {
            country: 'Belarus', peoples: 9500000, citys: {
                capital: 'Minsk',
                north:'Vitebsk'
            }
        },
        {
            country: 'Russia', peoples: 125500000, citys: {
                capital: 'Moscow',
                north:'Sankt-Petrburg'
            }
        },
        {
            country: 'Ukraine', peoples: 19500000, citys: {
                capital: 'Kyev',
                north:'Chernigov'
            }
        }
    ])


    return (
        <>
            <input value={"dd"}/>
        </>
    )
}