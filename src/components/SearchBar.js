import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onUserSubmit(this.state.term);
  };

  handleUserInput = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search.."
              onChange={this.handleUserInput}
            />
          </div>
        </form>
      </div>
    );
  }
}
