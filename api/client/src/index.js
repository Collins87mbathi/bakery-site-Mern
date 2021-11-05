import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  './index.css';
import Context from './context/Context';
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById('root')
);

