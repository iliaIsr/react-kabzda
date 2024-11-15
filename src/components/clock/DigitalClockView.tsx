import React from "react";
import { ClockViewPropsType } from "./Clock";

const zeroPlus = (num: number) => (num >= 10 ? num : `0${num}`);

export const DigitalClockView: React.FC<ClockViewPropsType> = ({ date }) => {
    return (
        <div>
            <span>{zeroPlus(date.getHours())}:</span>
            <span>{zeroPlus(date.getMinutes())}:</span>
            <span>{zeroPlus(date.getSeconds())}</span>
        </div>
    );
};