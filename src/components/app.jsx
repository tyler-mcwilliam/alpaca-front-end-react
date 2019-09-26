import React from 'react';
import KeyForm from '../containers/key_form';
import SecretKeyForm from '../containers/secret_key_form';
import PositionsList from '../containers/positions_list';
import OrdersList from '../containers/orders_list';
import TradeBar from '../containers/trade_bar';
import ConnectionStatus from '../containers/connection_status';

const App = () => {
  return (
    <div className="gui-wrapper">
      <div className="sidebar">
        <a href="/">
          <img className="llama-logo" src="../assets/images/llama-logo.png" alt="logo" />
        </a>
        <div className="social-links">
          <hr />
          <a href="https://github.com/tyler-mcwilliam/alpaca-front-end-react"><i className="icon-links fa fa-github" /></a>
          <a href="https://github.com/tyler-mcwilliam"><i className="icon-links fa fa-github-alt" /></a>
          <a href="https://www.linkedin.com/in/thetylermcwilliam/"><i className="icon-links fa fa-linkedin-square" /></a>
          <hr />
        </div>
      </div>
      <div className="dashboard">
        <div className="topbar">
          <a href="/"><h3>Llama Trader</h3></a>
          <form action="https://app.alpaca.markets/signup">
            <button type="submit" className="api-button">Get API Key</button>
          </form>
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
            <div className="dash-wrapper">
              <h1 className="dash-title">Orders</h1>
              <OrdersList />
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
