import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateKey, fetchAccount } from '../actions';

class KeyForm extends Component {
  componentWillMount() {
    console.log("Key form mounting...");
    fetchAccount();
  }

  componentDidMount() {
    this.props.fetchAccount(this.props.keyId, this.props.secretKey);
    this.refresher = setInterval(this.fetchAccount, 5000);
    console.log("...Key form mounted.");
  }

  handleUpdate = (event) => {
    this.props.updateKey(event.target.value);
    this.props.fetchAccount(event.target.value, this.props.secretKey);
  }

  render() {
    console.log("Rendering key form-control..");
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
    positions: state.positions
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateKey, fetchAccount }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyForm);
