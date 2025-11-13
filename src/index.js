import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

// const temp_number = 5;
// let text = "5?";
// if(temp_number > 5) {
//   text = "over_5";
// } else {
//   text = "under or equal 5";
// }
/*
const myElement = <h1>I Love JSX!</h1>;
const myElement2 = React.createElement('h1', {}, 'I do not use JSX!');
const myElement3 = <h1>React is {5 + 5} times better with JSX</h1>;
const myElement4 = <h1>Is it?? : {text}</h1>;
const myElement5 = <h1>Is it?? : {temp_number > 5 ? "over_5" : "under or equal 5"}</h1>;
*/
const myElement6 = <h1 style={{backgroundColor: "red"}}>css color</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//root.render(myElement);
root.render(myElement6);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
