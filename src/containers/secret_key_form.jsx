import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateSecretKey, fetchAccount } from '../actions';

class SecretKeyForm extends Component {
  componentWillMount() {
    console.log("Secret key form mounting...");
    fetchAccount();
  }

  componentDidMount() {
    this.props.fetchAccount(this.props.keyId, this.props.secretKey);
    console.log("...Secret key form mounted.");
  }

  handleUpdate = (event) => {
    this.props.updateSecretKey(event.target.value);
    this.props.fetchAccount(this.props.keyId, event.target.value);
  }

  render() {
    console.log("Rendering search bar..");
    return (
      <div>
        <p>Secret Key</p>
        <input
          value={this.props.secretKey}
          type="password"
          className="form-control form-search"
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
    positions: state.positions
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSecretKey, fetchAccount }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SecretKeyForm);
