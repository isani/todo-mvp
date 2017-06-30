import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ text, id }) => {
  return <div key={id}>{text}</div>
}

Todo.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number
}

export default Todo
