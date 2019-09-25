import React from 'react';

const Position = (props) => {
  if (!props.position) {
    return (null);
  }
  return (
    <div className="position animated bounce infinite">
      <div className="ticker-box" style={ props.position.change_today < 0 ? { backgroundColor: '#F5CFD3' } : { backgroundColor: '#D1F6E1' } }>
        <div className="symbol">
          { props.position.symbol }
        </div>
        <div>
          { (props.position.change_today * 100).toFixed(2) }%
        </div>
      </div>
      <div className="current-price">
        ${ props.position.current_price }
      </div>
      <div className="qty">
        { props.position.qty }
      </div>
      <div className="market-value">
        ${ props.position.market_value }
      </div>
      <div className="unrealized-pl">
        ${ props.position.unrealized_pl }
      </div>
      <div className="order-buttons">
        <button>Buy</button>
        <button>Sell</button>
      </div>
    </div>
  );
};

export default Position;
