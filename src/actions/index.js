const BASE_URL = 'https://paper-api.alpaca.markets';
const API_KEY = "PK6U6ED9E8HXK3SWW268";
const SECRET_KEY = "SouRAmDePmiQkyEEsiLItQx72dylQuMizDvFZpWI";

export const FETCH_ACCOUNT = 'FETCH_ACCOUNT';
export const FETCH_POSITIONS = 'FETCH_POSITIONS';
export const FETCH_ORDERS = 'FETCH_ORDERS';
export const PLACE_ORDER = 'PLACE_ORDER';
export const UPDATE_KEY = 'UPDATE_KEY';
export const UPDATE_SECRET_KEY = 'UPDATE_SECRET_KEY';

export function updateKey(keyId) {
  const promise = keyId;

  return {
    type: UPDATE_KEY,
    payload: promise // Will be resolved by redux-promise
  };
}

export function updateSecretKey(secretKey) {
  const promise = secretKey;

  return {
    type: UPDATE_SECRET_KEY,
    payload: promise // Will be resolved by redux-promise
  };
}

export function fetchAccount(keyId, secretKey) {
  const url = `${BASE_URL}/v2/account`;
  const promise = fetch(url, {
    method: 'GET',
    headers: {
      'APCA-API-KEY-ID': keyId,
      'APCA-API-SECRET-KEY': secretKey
    },
  }).then(res => res.json());

  return {
    type: FETCH_ACCOUNT,
    payload: promise // Will be resolved by redux-promise
  };
}

export function fetchPositions(keyId, secretKey) {
  const url = `${BASE_URL}/v2/positions`;

  const promise = fetch(url, {
    method: 'GET',
    headers: {
      'APCA-API-KEY-ID': keyId,
      'APCA-API-SECRET-KEY': secretKey
    },
  }).then(res => res.json());

  return {
    type: FETCH_POSITIONS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function fetchOrders(keyId, secretKey) {
  const url = `${BASE_URL}/v2/orders?status=%27all%27&limit=500`;

  const promise = fetch(url, {
    method: 'GET',
    headers: {
      'APCA-API-KEY-ID': keyId,
      'APCA-API-SECRET-KEY': secretKey
    },
  }).then(res => res.json());

  return {
    type: FETCH_ORDERS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function placeOrder(mySymbol, myQty, mySide, myType, myTimeInForce, myLimitPrice, myStopPrice, myExtendedHours) {
  const url = `${BASE_URL}/v2/orders`;
  const data = {
    symbol: mySymbol,
    qty: myQty,
    side: mySide,
    type: myType,
    time_in_force: myTimeInForce
    // limit_price: myLimitPrice,
    // stop_price: myStopPrice,
    // extended_hours: myExtendedHours
  };
  if (data.type === 'limit' || 'stop_limit') {
    data.limit_price = myLimitPrice;
  }
  if (data.type === 'stop' || 'stop_limit') {
    data.stop_price = myStopPrice;
  }
  if (data.time_in_force === 'day' && data.type === 'limit') {
    data.extended_hours = myExtendedHours;
  }
  console.log(data);
  const promise = fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      'APCA-API-KEY-ID': API_KEY,
      'APCA-API-SECRET-KEY': SECRET_KEY
    }
  }).then(res => res.json());

  console.log(promise);

  return {
    type: PLACE_ORDER,
    payload: promise // Will be resolved by redux-promise
  };
}
