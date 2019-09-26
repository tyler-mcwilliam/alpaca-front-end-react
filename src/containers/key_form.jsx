import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateKey, fetchAccount, fetchPositions, fetchOrders } from '../actions';

class KeyForm extends Component {
  componentWillMount() {
  }

  componentDidMount() {
    // this.refresher = setInterval(this.props.fetchAccount(this.props.keyId, this.props.secretKey), 5000);
  }

  handleUpdate = (event) => {
    this.props.updateKey(event.target.value);
    this.props.fetchAccount(event.target.value, this.props.secretKey);
    this.props.fetchPositions(event.target.value, this.props.secretKey);
    this.props.fetchOrders(event.target.value, this.props.secretKey);
  }

  render() {
    return (
      <div>
        <p>API Key</p>
        <input
          value={this.props.keyId}
          type="text"
          className="form-control form-key"
          onChange={this.handleUpdate}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    keyId: state.keyId,
    secretKey: state.secretKey,
    account: state.account,
    positions: state.positions,
    orders: state.orders
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateKey, fetchAccount, fetchPositions, fetchOrders }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyForm);
