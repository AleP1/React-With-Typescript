import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootswatch/dist/yeti/bootstrap.min.css';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App title="Fast Notes!"/>
  </React.StrictMode>,
  document.getElementById('root')
);
