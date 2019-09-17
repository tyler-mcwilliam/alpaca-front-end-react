import React, { Component } from 'react';

class KeyForm extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  componentWillMount() {
    console.log("Search bar mounting...");
  }

  componentDidMount() {
    console.log("...Search bar mounted.");
  }

  handleUpdate = (event) => {
    this.setState({ term: event.target.value });
    this.props.searchFunction(event.target.value);
  }

  render() {
    console.log("Rendering search bar..");
    return (
      <div>
        <p>API Key</p>
        <input
          value={this.state.term}
          type="text"
          className="form-control form-search"
          onChange={this.handleUpdate}
        />
      </div>
    );
  }
}

export default KeyForm;
