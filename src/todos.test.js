import reducer, {
  addTodo,
  removeTodo,
  toggleTodo,
  moveTodoUp,
  moveTodoDown,
} from './todos';

describe('todos', () => {
  describe('reducer', () => {
    const intialState = {
      todos: [
        {
          id: 0,
          text: 'Enter a new todo into the input and press enter to add it',
          isComplete: false,
        },
      ],
    };

    it('returns the initial state when no actions match', () => {
      expect(reducer(undefined, {})).toEqual(intialState);
    });

    it('adds a new todo', () => {
      const newTodo = 'do stuff';

      const newState = reducer(intialState, addTodo(newTodo));

      expect(newState.todos.length).toEqual(2);
      // toggles the demo todo to complete when a new one is added
      expect(newState.todos[0].isComplete).toBe(true);
      expect(newState.todos[1].text).toEqual(newTodo);
    });

    it('removes a todo', () => {
      const todoToRemove = {
        id: '123',
        text: 'do better stuff',
        isComplete: false,
      };

      const removeState = {
        todos: [todoToRemove],
      };

      expect(reducer(removeState, removeTodo(todoToRemove.id)).todos).toEqual(
        []
      );
    });

    it('toggles a todo', () => {
      const todoToToggle = {
        id: '123',
        text: 'do better stuff',
        isComplete: false,
      };

      const toggleState = {
        todos: [todoToToggle],
      };

      const newState = reducer(toggleState, toggleTodo(todoToToggle.id));

      expect(newState.todos.length).toEqual(1);
      expect(newState.todos[0].isComplete).toBe(true);
    });

    it('moves a todo up the list', () => {
      const first = { id: 1, text: 'first' };
      const second = { id: 2, text: 'second' };

      const moveDownState = {
        todos: [first, second],
      };

      const newState = reducer(moveDownState, moveTodoDown(second.id));

      expect(newState.todos.length).toEqual(2);
      expect(newState.todos[0].id).toEqual(second.id);
    });

    it('moves a todo down the list', () => {
      const first = { id: 1, text: 'first' };
      const second = { id: 2, text: 'second' };

      const moveDownState = {
        todos: [first, second],
      };

      const newState = reducer(moveDownState, moveTodoDown(first.id));

      expect(newState.todos.length).toEqual(2);
      expect(newState.todos[1].id).toEqual(first.id);
    });
  });
});
