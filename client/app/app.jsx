import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Page } from '@components';

import store from './state';

import './reset.scss';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  </Provider>
);

export default App;
