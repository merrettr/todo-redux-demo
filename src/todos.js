import { createAction } from 'redux-actions';
import { uniqueId, findIndex } from 'lodash';

// action types
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const MOVE_TODO_UP = 'MOVE_TODO_UP';
const MOVE_TODO_DOWN = 'MOVE_TODO_DOWN';

// action creators
export const addTodo = createAction(ADD_TODO, text => ({
  id: uniqueId(),
  text,
  isComplete: false,
}));

export const removeTodo = createAction(REMOVE_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
export const moveTodoUp = createAction(MOVE_TODO_UP);
export const moveTodoDown = createAction(MOVE_TODO_DOWN);

// reducer
const initialState = {
  todos: [
    {
      id: 0,
      text: 'Enter a new todo into the input and press enter to add it',
      isComplete: false,
    },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, payload].map(
          todo => (todo.id === 0 ? { ...todo, isComplete: true } : todo)
        ),
      };
    }
    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== payload),
      };
    }
    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map(
          todo =>
            todo.id === payload
              ? { ...todo, isComplete: !todo.isComplete }
              : todo
        ),
      };
    }
    case MOVE_TODO_UP: {
      const index = findIndex(state.todos, todo => todo.id === payload);
      const todos = state.todos;
      todos.splice(index - 1, 0, todos.splice(index, 1)[0]);

      return {
        ...state,
        todos,
      };
    }
    case MOVE_TODO_DOWN: {
      const index = findIndex(state.todos, todo => todo.id === payload);
      const todos = state.todos;
      todos.splice(index + 1, 0, todos.splice(index, 1)[0]);

      return {
        ...state,
        todos,
      };
    }
    default:
      return state;
  }
};
