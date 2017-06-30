// Keys

const todoActionKeys = {
  add: 'ADD_TODO'
}

// Action builders

const addTodo = text => {
  return {
    type: todoActionKeys.add,
    text: text
  }
}

// Reducer

const nextAvailableId = todos => {
  return Math.max(-1, Math.max.apply(Math, todos.map(todo => todo.id))) + 1
}

const initialTodos = []
const todos = (todos = initialTodos, action = {}) => {
  switch (action.type) {
    case todoActionKeys.add:
      if (!action.text) {
        return todos
      }
      return [
        ...todos,
        {
          id: nextAvailableId(todos),
          text: action.text,
          done: false
        }
      ]

    default:
      return todos
  }
}

// Exports

export default todos
export { todoActionKeys, addTodo }
