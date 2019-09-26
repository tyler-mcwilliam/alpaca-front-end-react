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
import ordersReducer from './reducers/orders_reducer';
import accountReducer from './reducers/account_reducer';
import placeOrderReducer from './reducers/place_order_reducer';

const initialState = {
  keyId: "APCA-API-KEY-ID",
  secretKey: "APCA-API-SECRET-KEY",
  // keyId: "PK6U6ED9E8HXK3SWW268",
  // secretKey: "SouRAmDePmiQkyEEsiLItQx72dylQuMizDvFZpWI",
  account: null,
  positions: null,
  orders: null,
  placed_order: null
};

const reducers = combineReducers({
  keyId: apiKeyReducer,
  secretKey: secretKeyReducer,
  account: accountReducer,
  positions: positionsReducer,
  orders: ordersReducer,
  placed_order: placeOrderReducer
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
