import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPositions } from '../actions';
import Position from '../components/position';
import KeyForm from '../containers/key_form';
import SecretKeyForm from '../containers/secret_key_form';

class PositionsList extends Component {
  componentWillMount() {
    this.fetchPositions();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchPositions, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchPositions = () => {
    this.props.fetchPositions();
  }

  render () {
    return (
      <div className="position-container">
        <div className="position-title">
          <span>Position Ticker</span>
        </div>
        <div className="position-content">
          <Position />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    positions: state.positions_list
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPositions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionsList);
