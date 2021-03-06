import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import {i18n} from './i18n.js';
import store from './store';
import App from './App.js';

const rootElement = document.getElementById('Container');
render(
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElement);