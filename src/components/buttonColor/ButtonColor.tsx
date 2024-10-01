import React, {useState} from "react";
import styles from './Button.module.css'

type Props = {
    title: string
};
export const ButtonColor = (props: Props) => {
    const [color, setColor] = useState(1)
    const changeColor = () => {
        if (color === 4) {
            setColor(1)
            console.log(color)
        } else {
            setColor(color + 1)
            console.log(color)
        }

    }

    return (
        <button className={color === 1 ?
            styles.butColor1 :
            color === 2 ? styles.butColor2 :
                color === 3 ? styles.butColor3 : styles.butColor4} onClick={changeColor}>
            {props.title}
        </button>
    );
};


