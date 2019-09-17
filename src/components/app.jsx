import React from 'react';
import KeyForm from '../containers/key_form';
import SecretKeyForm from '../containers/secret_key_form';
import PositionsList from '../containers/positions_list';
import TradeBar from '../containers/trade_bar';
import ConnectionStatus from '../containers/connection_status';

const App = () => {
  return (
    <div className="gui-wrapper">
      <div className="sidebar">
        <img className="llama-logo" src="../assets/images/llama-logo.png" alt="logo" />
      </div>
      <div className="dashboard">
        <div className="topbar">
          <h3>Llama Trader</h3>
        </div>
        <div className="content">
          <div className="info">
            <div className="dash-wrapper">
              <h1 className="dash-title">API Keys</h1>
              <KeyForm />
              <SecretKeyForm />
            </div>
            <div className="dash-wrapper">
              <h1 className="dash-title">Trade</h1>
              <TradeBar />
            </div>
            <div className="dash-wrapper">
              <h1 className="dash-title">Portfolio</h1>
              <PositionsList />
            </div>
          </div>
          <div className="status">
            <h1 className="dash-title">Connection Status</h1>
            <ConnectionStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
