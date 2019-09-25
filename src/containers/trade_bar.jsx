import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { placeOrder } from '../actions';

class TradeBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: "",
      quantity: 0,
      side: 'buy'
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  handleTickerUpdate = (event) => {
    this.setState({ ticker: event.target.value });
    console.log(this.state.ticker);
  }

  handleQuantityUpdate = (event) => {
    this.setState({ quantity: event.target.value });
    console.log(this.state.quantity);
  }

  handleSideUpdate = (event) => {
    this.setState({ side: event.target.value });
    console.log(this.state.side);
  }

  handleSubmit = (event) => {
    // this.props.fetchStock(event.target.value, this.props.secretKey);
    // mySymbol, myQty, mySide, myType, myTimeInForce, myLimitPrice
    this.props.placeOrder(this.state.ticker, this.state.quantity, this.state.side, 'market', 'day');
    console.log(this.state);
  }

  render() {
    return (
      <div className="trade-bar">
        <form className="trade-form">
          <input
            value={this.state.ticker}
            type="text"
            className="form-symbol"
            onChange={this.handleTickerUpdate}
          />
          <input
            type="number"
            name="quantity"
            min="1"
            value={this.state.quantity}
            onChange={this.handleQuantityUpdate}
          />
          <div className="form-side">
            <select onChange={this.handleSideUpdate}>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
          </div>
          <input className="order-submit" type="button" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    keyId: state.keyId,
    secretKey: state.secretKey,
    account: state.account,
    positions: state.positions
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ placeOrder }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TradeBar);
