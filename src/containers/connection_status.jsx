import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchAccount, fetchPositions } from '../actions';


class ConnectionStatus extends Component {
  componentWillMount() {
  }

  componentDidMount() {
    this.refresher = setInterval(fetchAccount, 5000);
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchAccount = () => {
    this.props.fetchAccount(this.props.keyId, this.props.secretKey);
  }

  render () {
    if (!this.props.account) {
      return (
        <div className="connection-status animated fadeOut">
          <p className="inactive-notification">Inactive</p>
        </div>
      );
    }
    if (this.props.account.code === 40110000) {
      return (
        <div className="connection-status">
          <p className="inactive-notification">Inactive</p>
        </div>
      );
    }
    return (
      <div className="connection-status">
        <p className="active-notification">Connected to Account: { this.props.account.account_number }</p>
        <h3>Buying Power: { this.props.account.buying_power } { this.props.account.currency }</h3>
        <h3>Equity: { this.props.account.equity } { this.props.account.currency }</h3>
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
  return bindActionCreators({ fetchAccount, fetchPositions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionStatus);
