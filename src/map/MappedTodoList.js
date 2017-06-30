import { connect } from 'react-redux'
import TodoList from '../view/TodoList'

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const MappedTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default MappedTodoList
