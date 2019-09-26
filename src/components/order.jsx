import React from 'react';

const Order = (props) => {
  if (!props.order) {
    return (null);
  }
  return (
    <div className="order">
      <div className="order-symbol">
        <strong>{ props.order.symbol }</strong>
      </div>
      <div className="order-type">
        <div className="type">
          { props.order.type.charAt(0).toUpperCase() + props.order.type.slice(1) } { props.order.side.toUpperCase() }
        </div>
        <div className="order-qty">
          { props.order.qty } Shares
        </div>
      </div>
      <div className="filled-avg-price">
        { (props.order.filled_avg_price ? '$' + props.order.filled_avg_price : 'N/A') }
      </div>
      <div className="order-status" style={props.order.status === 'new' ? { color: '#FFD808' } : (props.order.status === 'canceled' ? { color: '#D51C2D' } : { color: '#29E27A' })}>
        <div>
          <strong>{ props.order.status.toUpperCase() }</strong>
        </div>
      </div>
    </div>
  );
};

export default Order;
