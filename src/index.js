import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postReducer from './store/reducers/postReducer.js';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(postReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
