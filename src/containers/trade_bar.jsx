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
      side: 'buy',
      type: 'market',
      time_in_force: 'day',
      limit_price: null,
      stop_price: null,
      extended_hours: false,
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  handleTickerUpdate = (event) => {
    this.setState({ ticker: event.target.value.toUpperCase() });
  }

  handleQuantityUpdate = (event) => {
    this.setState({ quantity: event.target.value });
  }

  handleSideUpdate = (event) => {
    this.setState({ side: event.target.value });
  }

  handleTypeUpdate = (event) => {
    this.setState({ type: event.target.value });
  }

  handleTimeInForceUpdate = (event) => {
    this.setState({ time_in_force: event.target.value });
  }

  handleLimitPriceUpdate = (event) => {
    this.setState({ limit_price: event.target.value });
  }

  handleStopPriceUpdate = (event) => {
    this.setState({ stop_price: event.target.value });
  }

  handleExtendedHoursUpdate = (event) => {
    this.setState({ extended_hours: (event.target.value === 'true') });
  }

  handleSubmit = () => {
    this.props.placeOrder(
      this.state.ticker,
      this.state.quantity,
      this.state.side,
      this.state.type,
      this.state.time_in_force,
      this.state.limit_price,
      this.state.stop_price,
      this.state.extended_hours
    );
  }

  render() {
    return (
      <div className="trade-bar">
        <form className="trade-form">
          <strong>Ticker</strong>
          <input
            value={this.state.ticker}
            type="text"
            className="form-symbol"
            onChange={this.handleTickerUpdate}
          />
          <strong>Quantity</strong>
          <input
            type="number"
            name="quantity"
            min="1"
            className="trade-quantity"
            value={this.state.quantity}
            onChange={this.handleQuantityUpdate}
          />
          <strong>Type</strong>
          <select className="form-side" onChange={this.handleTypeUpdate}>
            <option value="market">Market</option>
            <option value="limit">Limit</option>
            <option value="stop">Stop</option>
            <option value="stop_limit">Stop Limit</option>
          </select>
          <strong>Side</strong>
          <select className="form-side" onChange={this.handleSideUpdate}>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
          <strong>Time in Force</strong>
          <select className="form-side" onChange={this.handleTimeInForceUpdate}>
            <option value="day">Day</option>
            <option value="gtc">Good Til Cancelled</option>
            <option value="opg">OPG</option>
            <option value="cls">CLS</option>
            <option value="ioc">Immediate or Cancel</option>
            <option value="fok">Fill or Kill</option>
          </select>
          <div><strong>Limit Price</strong> <small>(Required if Type is LIMIT or STOP LIMIT)</small></div>
          <input
            type="number"
            name="limitPrice"
            min="0"
            className="trade-quantity"
            // style={this.state.type === 'limit' || 'stop_limit' ? { display: 'none' } : { display: 'block' }}
            value={this.state.limitPrice}
            onChange={this.handleLimitPriceUpdate}
          />
          <div><strong>Stop Price</strong> <small>(Required if Type is STOP or STOP LIMIT)</small></div>
          <input
            type="number"
            name="stopPrice"
            min="0"
            className="trade-quantity"
            // style={this.state.type === 'stop' || 'stop_limit' ? { display: 'none' } : { display: 'block' }}
            value={this.state.stopPrice}
            onChange={this.handleStopPriceUpdate}
          />
          <div><strong>Extended Hours?</strong> <small>(Required if Type is LIMIT and Time in Force is DAY)</small></div>
          <select className="form-side" onChange={this.handleExtendedHoursUpdate}>
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
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
