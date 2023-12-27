import React, { Component } from 'react';
import Input from './Component/Input';
import List from './Component/List';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      data: [],
    };
  }

  handleChange = (text) => {
    this.setState({ value: text });
  };

  handleSubmit = () => {
    if (this.state.value.trim() !== '') {
      this.setState((prevState) => ({
        data: [...prevState.data, prevState.value.trim()],
        value: '',
      }));
    }
  };

  handleDelete = (index) => {
    this.setState((prevState) => ({
      data: prevState.data.filter((_, i) => i !== index),
    }));
  };

  handleUpdate = (index) => {
    const data = prompt('Enter new data:');
    if (data !== null) {
      this.setState((prevState) => {
        const newData = [...prevState.data];
        newData[index] = data.trim();
        return { data: newData };
      });
    }
  };

  render() {
    return (
      <>
        <Input
          inputValue={this.state.value}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />

        <div id="text">
          <h1>{this.state.value}</h1>
        </div>
        <List
          data={this.state.data}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
      </>
    );
  }
}

export default App;
