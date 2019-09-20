import React from 'react';

const Position = (props) => {
  if (!props.position) {
    return (null);
  }
  return (
    <div className="position">
      <p>Symbol: { props.position.symbol }</p>
      <p>Entry Price: { props.position.avg_entry_price }</p>
      <p>Quantity: { props.position.qty }</p>
    </div>
  );
};

export default Position;
