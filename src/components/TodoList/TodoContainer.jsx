import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../../todos';
import Todo from './Todo';

export default connect(null, {
  onToggle: toggleTodo,
  onDelete: removeTodo,
})(Todo);
