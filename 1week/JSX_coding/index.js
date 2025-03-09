// React 모듈 가져오기
import React from 'react';
 import ReactDOM from 'react-dom/client';

 // 주요 컴포넌트 불러오기기
 import './index.css';
 import App from './App';
 import reportWebVitals from './reportWebVitals';

 // Library 컴포넌트 불러오기기
 import Library from './chapter_03/Library';

 // React 애플리케이션 렌더링
 const root= ReactDOM.createRoot(document.getElementById('root'));
 root.render(
 <React.StrictMode>
 <Library/>
 </React.StrictMode>
 );
 // Ifyouwanttostart measuringperformancein your app, passafunction
 // tologresults(for example: reportWebVitals(console.log))
 // orsendtoananalyticsendpoint. Learnmore: https://bit.ly/CRA-vitals
 reportWebVitals();