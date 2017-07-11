import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

export default class AddTodo extends Component {
  state = {
    text: '',
  };

  onKeyDown = ({ keyCode, target: { value } }) => {
    const { addTodo } = this.props;

    if (keyCode === 13) {
      addTodo(value);
      this.setState({ text: '' });
    }
  };

  onChange = ev => {
    this.setState({ text: ev.target.value });
  };

  render() {
    return (
      <FormControl
        type="text"
        placeholder="Add a new todo"
        value={this.state.text}
        onKeyDown={this.onKeyDown}
        onChange={this.onChange}
      />
    );
  }
}
