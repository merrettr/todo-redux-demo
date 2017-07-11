import { connect } from 'react-redux';
import { addTodo } from '../../todos';
import AddTodo from './AddTodo';

export default connect(null, {
  addTodo,
})(AddTodo);
