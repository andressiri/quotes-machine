import React from 'react';
import ReactDOM from 'react-dom';
import {ContextProvider} from './Context.js';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './styles/index.scss';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far);

ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
