import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchAccount, fetchPositions } from '../actions';


class ConnectionStatus extends Component {
  componentWillMount() {
  }

  componentDidMount() {
    // this.refresher = setInterval(fetchAccount(), 5000);
    fetchAccount();
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
          <p className="animated bounce inifinite">Inactive</p>
        </div>
      );
    }
    if (this.props.account.code === 40110000) {
      return (
        <div className="connection-status">
          <p>Inactive</p>
        </div>
      );
    }
    return (
      <div className="connection-status">
        <p>Active</p>
        <p>{ this.props.account.account_number }</p>
        <p>{ this.props.account.account_blocked }</p>
        <p>{ this.props.account.buying_power }</p>
        <p>{ this.props.account.currency }</p>
        <p>{ this.props.account.equity }</p>
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
