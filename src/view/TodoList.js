import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map(todo => {
        return <Todo key={todo.id} text={todo.text} done={todo.done} />
      })}
    </div>
  )
}
TodoList.propTypes = {
  todos: PropTypes.array
}

export default TodoList
