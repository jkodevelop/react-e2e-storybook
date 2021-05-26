import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {i18n} from './i18n.js';
import {I18nextProvider} from 'react-i18next';
import App from './js/components/App.js';
import store from './store.js';
import './style.scss';

const rootElement = document.getElementById('Container');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)