import React from 'react';

const Position = (props) => {
  if (!props.position) {
    return (null);
  }
  return (
    <div className="position animated bounce infinite">
      <div className="ticker-box">
        <div>
          { props.position.symbol }
        </div>
        <div>
          { (props.position.change_today * 100).toFixed(2) }%
        </div>
      </div>
      <div>
        ${ props.position.current_price }
      </div>
      <div>
        { props.position.qty }
      </div>
      <div>
        ${ props.position.market_value }
      </div>
      <div>
        ${ props.position.unrealized_pl }
      </div>
    </div>
  );
};

export default Position;
