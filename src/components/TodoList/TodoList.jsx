import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import TodoContainer from './TodoContainer';

export default ({ todos }) =>
  <div>
    {todos.length > 0 &&
      <span>
        Total todos: {todos.length}
      </span>}

    <ListGroup>
      {todos.filter(todo => todo.isComplete).map(todo =>
        <ListGroupItem key={todo.id}>
          <TodoContainer {...todo} />
        </ListGroupItem>
      )}
      {todos.filter(todo => !todo.isComplete).map(todo =>
        <ListGroupItem key={todo.id}>
          <TodoContainer {...todo} />
        </ListGroupItem>
      )}
    </ListGroup>
  </div>;
