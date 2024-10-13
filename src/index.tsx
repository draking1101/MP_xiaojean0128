import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from '@/reportWebVitals';
// Components
import { Header } from '@/components/header';
// Pages
import Home from '@/pages/home';
import News from '@/pages/news';
import Merch from '@/pages/merch';
import About from '@/pages/about';
import Rule from '@/pages/rule';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* 全局樣式應用 */}
    <style>
      {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html, body, #root {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
        }
      `}
    </style>
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/about" element={<About />} />
        <Route path="/rule" element={<Rule />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
