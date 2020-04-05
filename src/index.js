import React, { Suspense } from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Spinner from './components/Spinner';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from './state/store';

render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Route path="/" component={App} />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
