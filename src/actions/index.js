const BASE_URL = 'https://paper-api.alpaca.markets';
const API_KEY = "TBD";
const SECRET_KEY = "TBD";

const Alpaca = require('@alpacahq/alpaca-trade-api');

const alpaca = new Alpaca({
  keyId: API_KEY,
  secretKey: SECRET_KEY,
  paper: true,
});

export const FETCH_ACCOUNT = 'FETCH_ACCOUNT';
export const FETCH_POSITIONS = 'FETCH_POSITIONS';
export const PLACE_ORDER = 'PLACE_ORDER';

export function fetchAccount() {
  const url = `${BASE_URL}/v2/account`;
  const promise = fetch(url).then(r => r.json());

  // Get our account information.
  alpaca.getAccount()
    .then((account) => {
      // Check if our account is restricted from trading.
      if (account.trading_blocked) {
        console.log('Account is currently restricted from trading.')
      }

      // Check how much money we can use to open new positions.
      console.log(`$${account.buying_power} is available as buying power.`)
    });

  return {
    type: FETCH_ACCOUNT,
    payload: promise // Will be resolved by redux-promise
  };
}

export function fetchPositions() {
  const url = `${BASE_URL}/v2/positions`;
  const promise = fetch(url).then(r => r.json());

  // Get a list of all of our positions.
  alpaca.listPositions()
    .then((portfolio) => {
      // Print the quantity of shares for each position.
      portfolio.foreach(function (position) {
        console.log(`${position.qty} shares of ${position.symbol}`);
      });
    });

  return {
    type: FETCH_POSITIONS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function placeOrder(symbol, qty, side, type, timeInForce, limitPrice) {
  const url = `${BASE_URL}/v2/orders`;
  const promise = fetch(url).then(r => r.json());

  // Submit a market order to buy 1 share of Apple at market price
  alpaca.createOrder({
    symbol: 'AAPL',
    qty: 1,
    side: 'buy',
    type: 'market',
    time_in_force: 'day'
  });

  // Submit a limit order to attempt to sell 1 share of AMD at a
  // particular price ($20.50) when the market opens
  alpaca.createOrder({
    symbol: `${symbol}`,
    qty: `${qty}`,
    side: `${side}`,
    type: `${type}`,
    time_in_force: `${timeInForce}`,
    limit_price: `${limitPrice}`,
  });

  return {
    type: PLACE_ORDER,
    payload: promise // Will be resolved by redux-promise
  };
}
