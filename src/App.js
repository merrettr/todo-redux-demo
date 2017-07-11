import React from 'react';
import { Grid } from 'react-bootstrap';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

export default () =>
  <Grid style={{ padding: '1em 0' }}>
    <AddTodo />
    <div style={{ padding: '1em 0' }} />
    <TodoList />
  </Grid>;
