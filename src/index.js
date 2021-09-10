import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalFonts from "./styles/font";
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalFonts/>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


