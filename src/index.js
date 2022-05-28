// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // импортируем BrowserRouter
import Main from './components/Main';

// теперь обернём компонент App в BrowserRouter
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Main />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);