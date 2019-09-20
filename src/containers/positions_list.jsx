import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPositions } from '../actions';
import Position from '../components/position';

class PositionsList extends Component {
  componentWillMount() {
    this.fetchPositions();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchPositions, 5000);
  }

  componentDidUpdate() {

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
          <span>Positions</span>
        </div>
        <div className="position-content">
          <Position />
        </div>
        <div>
          {
            this.props.positions.map((position) => {
              return <Position key={position.asset_id} position={position} />;
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
    positions: state.positions
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPositions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionsList);
