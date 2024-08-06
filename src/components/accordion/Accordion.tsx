import React from "react";

type ItemType={
    title: string
    value:any
}


type AccordionPropsType={
    titleValue: string
    collapset: boolean
    onChange:()=>void
    items:ItemType[]
    onClick:(value:any)=>void
}
export const Accordion=(props:AccordionPropsType)=>{
        return (
            <div>
                <AccordionTitle title={props.titleValue} onChange={props.onChange}
                collapset={props.collapset}/>
                {!props.collapset&&<AcordionBody items={props.items} onClick={props.onClick}/> }
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

type AccordionBodyPropsType={
    items:ItemType[]
    onClick:(value:any)=>void
}
function AcordionBody(props:AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                {props.items.map((i,index)=><div key={index} onClick={()=>{props.onClick(i.value)}}>{i.title}</div>)}
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
