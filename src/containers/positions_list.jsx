import React, { Component } from 'react';

class PositionsList extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  handleUpdate = (event) => {
    this.setState({ term: event.target.value });
    this.props.searchFunction(event.target.value);
  }

  componentWillMount() {
    console.log("Search bar mounting...");
  }

  componentDidMount() {
    console.log("...Search bar mounted.");
  }

  render() {
    console.log("Rendering search bar..");
    return (
      <input
        value={this.state.term}
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default PositionsList;
