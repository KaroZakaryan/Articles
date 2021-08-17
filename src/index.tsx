import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as ReduxProvider} from 'react-redux';
import {BrowserRouter as RouterProvider} from 'react-router-dom';

import './styles/index.scss';

import App from './App';
import store from './store';
import {AppLanguage} from './constants';
import {LocalizedRouter} from './components';
import * as localizations from './localization';

const rootElement = document.getElementById('root');

const wrappedApp = (
  <ReduxProvider store={store}>
    <LocalizedRouter
      languages={AppLanguage}
      appStrings={localizations}
      RouterComponent={RouterProvider}>
      <App />
    </LocalizedRouter>
  </ReduxProvider>
);

ReactDOM.render(wrappedApp, rootElement);
