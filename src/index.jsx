/* eslint no-alert:off */

// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import apiKeyReducer from './reducers/api_key_reducer';
import secretKeyReducer from './reducers/secret_key_reducer';
import positionsReducer from './reducers/positions_reducer';

const identityReducer = (state = null) => state;

const initialState = {
  apiKey: "",
  secretKey: ""
};

const reducers = combineReducers({
  apiKey: apiKeyReducer,
  secretKey: secretKeyReducer,
  currentUser: identityReducer
});

// Middlewares
const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
}
