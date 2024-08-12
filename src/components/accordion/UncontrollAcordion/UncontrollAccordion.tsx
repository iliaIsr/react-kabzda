import React, {useReducer} from "react";
import {reducer, TOGLE_COLLAPSED} from "./reducer";
const style={
    cursor:`pointer`
}
type AccordionPropsType={
    titleValue: string
   // collapset: boolean
}

export type ActionType={
    type:string
}


export function UncontrollAcordion(props:AccordionPropsType){
      // let[collapset, setCollapset]=useState(false)

    let[state, dispatch]=useReducer(reducer,{collapsed:false})

        return (
            <div>
               {/*<AccordionTitle title={props.titleValue} onClick={()=>{ setCollapset(!collapset)}}/>*/}

                <AccordionTitle title={props.titleValue} onClick={()=>{
                    dispatch({type:TOGLE_COLLAPSED})}}/>

                {/*<button onClick={()=>{setCollapset(!collapset)}}>TOGGLE</button>*/}
                {!state.collapsed&&<AcordionBody/>}
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

