import React from "react";

type AccordionPropsType={
    titleValue: string
    collapset: boolean
    onChange:()=>void
}
export const Accordion=(props:AccordionPropsType)=>{
        return (
            <div>
                <AccordionTitle title={props.titleValue} onChange={props.onChange}
                collapset={props.collapset}/>
                {!props.collapset&&<AcordionBody/>}
            </div>)
    }


type AccordionTitlePropsType={
    title: string
    collapset: boolean
    onChange:()=>void
}
function AccordionTitle (props:AccordionTitlePropsType) {
    return <h3 onClick={(event)=>props.onChange()} >{props.title}</h3>
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

//
// import React from "react";
//
// type AccordionPropsType={
//     titleValue: string
//     collapset: boolean
//     onClick:()=>void
// }
// export const Accordion=(props:AccordionPropsType)=>{
//     return (
//         <div>
//             <AccordionTitle title={props.titleValue} onClick={props.onClick}
//                             collapset={props.collapset}/>
//             {!props.collapset&&<AcordionBody/>}
//         </div>)
// }
//
//
// type AccordionTitlePropsType={
//     title: string
//     collapset: boolean
//     onClick:()=>void
// }
// function AccordionTitle (props:AccordionTitlePropsType) {
//     return <h3 onClick={(event)=>props.onClick()} >{props.title}</h3>
// }
// function AcordionBody() {
//     return (
//         <div>
//             <ul>
//                 <li>1</li>
//                 <li>2</li>
//                 <li>3</li>
//             </ul>
//         </div>
//     );
// }
