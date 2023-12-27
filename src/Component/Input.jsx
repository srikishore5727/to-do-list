import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <div id="input">
        <input
          type="text"
          placeholder="Enter Text"
          value={this.props.inputValue}
          onChange={(e) => this.props.handleChange(e.target.value)}
        />
        <button id="createBtn" onClick={this.props.handleSubmit}>
          Create
        </button>
      </div>
    );
  }
}
