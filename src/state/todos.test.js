import todos, { todoActionKeys, addTodo } from './todos'

// Constants for testing

const testTodos = [
  {
    id: 0,
    text: 'Foo',
    done: false
  },
  {
    id: 4,
    text: 'Bar',
    done: true
  },
  {
    id: 2,
    text: 'Baz',
    done: false
  }
]
const nonexistentAction = 'FOOBAR'
const nextFreeId = 5
const newTodoText = 'Do something'

// Action builder tests

describe('addTodo', () => {
  it('should return an action with the add type', () => {
    const actual = addTodo()
    expect(actual.type).toEqual(todoActionKeys.add)
  })
  it('should return an action with the given text', () => {
    const actual = addTodo(newTodoText)
    expect(actual.text).toEqual(newTodoText)
  })
})

// Reducer test

describe('todos', () => {
  it('should have an empty array as an initial state', () => {
    const actual = todos()
    expect(actual).toBeInstanceOf(Array)
    expect(actual.length).toEqual(0)
  })
  it('should return the state when called without an action', () => {
    const actual = todos(testTodos)
    expect(actual).toEqual(testTodos)
  })
  it('should return the state when called with an unknown action', () => {
    const actual = todos(testTodos, { type: nonexistentAction })
    expect(actual).toEqual(testTodos)
  })
  it('should add new todos', () => {
    const actual = todos(testTodos, {
      type: todoActionKeys.add,
      text: newTodoText
    })
    expect(actual.length).toEqual(testTodos.length + 1)
  })
  it('should not alter existing todos when adding new ones', () => {
    const actual = todos(testTodos, {
      type: todoActionKeys.add,
      text: newTodoText
    })
    for (let i = 0; i < testTodos.length; i++) {
      expect(actual[i]).toEqual(testTodos[i])
    }
  })
  it('should give the new todo the text from the action', () => {
    const actual = todos(testTodos, {
      type: todoActionKeys.add,
      text: newTodoText
    })
    expect(actual[actual.length - 1].text).toEqual(newTodoText)
  })
  it('should mark the new todo as not done', () => {
    const actual = todos(testTodos, {
      type: todoActionKeys.add,
      text: newTodoText
    })
    expect(actual[actual.length - 1].done).toEqual(false)
  })
  it('should give the new todo an id one greater than those in use', () => {
    const actual = todos(testTodos, {
      type: todoActionKeys.add,
      text: newTodoText
    })
    expect(actual[actual.length - 1].id).toEqual(nextFreeId)
  })
  it('should give the first todo an id of 0', () => {
    const actual = todos(undefined, {
      type: todoActionKeys.add,
      text: newTodoText
    })
    expect(actual[actual.length - 1].id).toEqual(0)
  })
  it('should ignore adding todos without text', () => {
    const actual = todos(testTodos, { type: todoActionKeys.add })
    expect(actual).toEqual(testTodos)
  })
  it('should ignore adding todos with an empty text', () => {
    const actual = todos(testTodos, { type: todoActionKeys.add, text: '' })
    expect(actual).toEqual(testTodos)
  })
})
