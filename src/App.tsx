import React, {useState} from 'react';
import './App.css';
import {Acordion} from "./components/accordion/Accordion";
import {Rating, RatingValueType} from "./components/rating/Rating";
import {OnOf} from "./components/onOf/OnOf";
import {OnOfUncontroll} from "./components/onOf/OnOfUncontroll";
import {UncontrollAcordion} from "./components/accordion/UncontrollAccordion";
import {UncontrollRating} from "./components/rating/UncontrollRating";


function App() {
    let [ratingValue, setRetingValue]=useState<RatingValueType>(0)
    let [accordionCollapset, setAccordionCollapset]=useState<boolean>(false)
    let[switchOn,setswitchOn]=useState(false)
    return (
        <div className={"App"}>
            {/*<PageTitle title={"This is App compoent"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            {/*<Acordion titleValue={"Menu"} collapset={accordionCollapset} onClick={setAccordionCollapset}/> */}
            <Acordion titleValue={"Menu"} collapset={accordionCollapset} onClick={()=>{setAccordionCollapset(!accordionCollapset)}}/>
            {/*<Acordion titleValue={"Users"} collapset={true}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<UncontrollAcordion titleValue={"Menu"} />*/}
            <UncontrollAcordion titleValue={"Users"} />
            <Rating value={ratingValue} onClick={setRetingValue}/>
            {/*<UncontrollRating/>*/}
            {/*<OnOf onClick={setswitchOn} on={switchOn}/>*/}
            {/*<OnOf/>*/}
            <OnOfUncontroll onChange={setswitchOn}/>{switchOn.toString()}

        </div>
    );
}

type PageTitlePropsType={
    title:string;
}
function PageTitle(props:  PageTitlePropsType){
    return <h1>{props.title}</h1>
}


export default  App;
