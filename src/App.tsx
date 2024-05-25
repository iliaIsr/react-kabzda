import React from 'react';
import './App.css';
import {Acordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {OnOf} from "./components/onOf/OnOf";
import {UncontrollAcordion} from "./components/accordion/UncontrollAccordion";
import {UncontrollRating} from "./components/rating/UncontrollRating";


function App() {
    return (
        <div className={"App"}>
            {/*<PageTitle title={"This is App compoent"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            {/*<Acordion titleValue={"Menu"} collapset={false}/>*/}
            {/*<Acordion titleValue={"Users"} collapset={true}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <UncontrollAcordion titleValue={"Menu"} />
            <UncontrollAcordion titleValue={"Users"} />
            <UncontrollRating/>
            <OnOf/>
            <OnOf/>
            <OnOf/>

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
