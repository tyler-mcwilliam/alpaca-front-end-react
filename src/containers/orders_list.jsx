import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchOrders } from '../actions';
import Order from '../components/order';

class OrdersList extends Component {
  componentWillMount() {
    this.fetchOrders(this.props.keyId, this.props.secretKey);
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchOrders, 5000);
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchOrders = () => {
    this.props.fetchOrders(this.props.keyId, this.props.secretKey);
  }

  render () {
    if (!this.props.orders) {
      return (
        <div className="no-order-container">
          <div className="order-title">
            <span>No orders</span>
          </div>
        </div>
      );
    }
    if (this.props.orders.code === 40110000 || this.props.orders.message === "Failed to fetch") {
      return (
        <div className="order-container">
          <div className="order-title">
            <span>Stock</span>
          </div>
        </div>
      );
    }
    return (
      <div className="order-container">
        <div className="order-titles">
          <div className="order-symbol"><strong>Stock</strong></div>
          <div className="order-type"><strong>Order</strong></div>
          <div className="filled-avg-price"><strong>Net Price</strong></div>
          <div className="order-status"><strong>Status</strong></div>
        </div>
        <div className="order-content">
          {
            this.props.orders.map((order) => {
              return <Order key={order.asset_id} order={order} />;
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    keyId: state.keyId,
    secretKey: state.secretKey,
    account: state.account,
    orders: state.orders
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchOrders }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList);
