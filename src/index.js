import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import AddForm from "./components/addForm";

import { Provider } from 'react-redux'
import store from './store'

import './index.scss';
import './themes.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <div className={'app ' + store.getState().theme}>
      <Header />
      <Content />
      <Footer />
      <AddForm />
    </div>
  </Provider>

);
