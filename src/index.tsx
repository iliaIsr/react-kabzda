import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


let a ={
    name: "Dima",
    age:10,
    adress: {
        city: 'Minsk',
        country: 'Belarus'
    }
};

let users = [
    {
        name: "Dima",
        age:10,
        adress: {
            city: 'Minsk',
            country: 'Belarus'
        }
    },

{
    name: "Viktor",
        age:15,
    adress: {
    city: 'Minsk',
        country: 'Belarus'
}
}
]

let b:Array<string | number| boolean>
 b =['1','2','3','4',5, true];



console.log(users[0].adress.country);

