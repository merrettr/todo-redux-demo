import { connect } from 'react-redux';
import TodoList from './TodoList';

export default connect(state => ({
  todos: state.todos,
}))(TodoList);
