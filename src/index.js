import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';

// react-router-dom 설치 후 BrowserRouter 적용
// basename -> CRA를 서버에 얹었을 때, 홈페이지 경로 참조를 못하는 이슈 방지.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
);