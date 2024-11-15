import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";



type PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock = (props: PropsType) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    let view;

    switch (props.mode) {
        case 'analog':
            view =<AnalogClockView date={date}/>
            break;
        case 'digital':
            view = <DigitalClockView date={date}/>
    }

    return <div>
        {view}
    </div>
}

export type ClockViewPropsType={
    date:Date
}


