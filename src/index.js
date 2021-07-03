import React from 'react';
import ReactDOM from 'react-dom';
import {ContextProvider} from './Context.js';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './styles/index.scss';

ReactDOM.render(
  <ContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
