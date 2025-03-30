import React from "react";
import ReactDOM from "react-dom/client";
import NotificationList from './example/NotificationList';
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<NotificationList />);



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