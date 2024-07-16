import React, {useState} from "react";
const style={
    cursor:`pointer`
}
type AccordionPropsType={
    titleValue: string


   // collapset: boolean
}
export function UncontrollAcordion(props:AccordionPropsType){
       let[collapset, setCollapset]=useState(false)

        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={()=>{setCollapset(!collapset)}}/>

                {/*<button onClick={()=>{setCollapset(!collapset)}}>TOGGLE</button>*/}
                {!collapset&&<AcordionBody/>}
            </div>)
    }

type AccordionTitlePropsType={
    title: string
    onClick:()=>void
}
function AccordionTitle (props:AccordionTitlePropsType) {

    return <h3 style={style} onClick={()=>{props.onClick()}}>{props.title}</h3>
}
function AcordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

