import React from 'react'
import { shallow } from 'enzyme'
import Todo from './todo'

const todoText = 'Do something'
const todoId = 0

describe('Todo', () => {
  it('should display the text prop', () => {
    const todo = shallow(<Todo text={todoText} id={todoId} />)
    expect(todo.text()).toEqual(todoText)
  })
  it('should use the id prop as key', () => {
    const todo = shallow(<Todo text={todoText} id={todoId} />)
    expect(todo.key()).toEqual(todoId.toString())
  })
})
