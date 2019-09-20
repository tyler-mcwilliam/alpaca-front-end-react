import React, { Component } from 'react';

class KeyForm extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  componentWillMount() {
    console.log("Trade bar mounting...");
  }

  componentDidMount() {
    console.log("...Trade bar mounted.");
  }

  handleUpdate = (event) => {
    this.setState({ term: event.target.value });
    this.props.searchFunction(event.target.value);
  }

  render() {
    console.log("Rendering trade bar..");
    return (
      <div className="trade-bar">
        <p>Ticker</p>
        <input
          value={this.state.term}
          type="text"
          className="form-control form-trade"
          onChange={this.handleUpdate}
        />
        <button>Place</button>
      </div>
    );
  }
}

export default KeyForm;
