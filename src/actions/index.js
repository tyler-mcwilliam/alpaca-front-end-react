const BASE_URL = 'https://paper-api.alpaca.markets';
const API_KEY = "PK6U6ED9E8HXK3SWW268";
const SECRET_KEY = "SouRAmDePmiQkyEEsiLItQx72dylQuMizDvFZpWI";

export const FETCH_ACCOUNT = 'FETCH_ACCOUNT';
export const FETCH_POSITIONS = 'FETCH_POSITIONS';
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
  console.log(keyId);
  console.log(secretKey);
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

export function fetchPositions() {
  const url = `${BASE_URL}/v2/positions`;

  const promise = fetch(url, {
    method: 'GET',
    headers: {
      'APCA-API-KEY-ID': API_KEY,
      'APCA-API-SECRET-KEY': SECRET_KEY
    },
  }).then(res => res.json());

  return {
    type: FETCH_POSITIONS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function placeOrder(mySymbol, myQty, mySide, myType, myTimeInForce, myLimitPrice) {
  const url = `${BASE_URL}/v2/orders`;
  const data = {
    symbol: mySymbol
  };
  const promise = fetch(url).then(r => r.json());

  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      'APCA-API-KEY-ID': API_KEY,
      'APCA-API-SECRET-KEY': SECRET_KEY,
      symbol: `${mySymbol}`,
      qty: `${myQty}`,
      side: `${mySide}`,
      type: `${myType}`,
      time_in_force: `${myTimeInForce}`,
      limit_price: `${myLimitPrice}`,
    }
  }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));

  return {
    type: PLACE_ORDER,
    payload: promise // Will be resolved by redux-promise
  };
}
