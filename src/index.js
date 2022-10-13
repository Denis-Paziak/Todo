import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='app'>
    <Header />
    <Content />
    <Footer />
  </div>
);
