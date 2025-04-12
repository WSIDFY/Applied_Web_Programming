import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; 
// App.js가 src 폴더 바로 안에 있으므로 경로 "./App"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);





/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //myapp으로 변경해야함함
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // 실질적으로 화면에 뿌려지는 내용
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/