import React, { Component } from 'react';

class KeyForm extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  handleUpdate = (event) => {
    this.setState({ term: event.target.value });
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <div className="trade-bar">
        <form action="/.">
          <input
            value={this.state.term}
            type="text"
            className="form-control form-trade"
            onChange={this.handleUpdate}
          />
          <input type="number" name="quantity" min="1" />
          <input type="radio" id="buy" name="orderSide" value="Buy" checked/>
          <label htmlFor="buy">Buy</label>
          <input type="radio" id="sell" name="orderSide" value="Sell"/>
          <label htmlFor="sell">Sell</label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default KeyForm;
