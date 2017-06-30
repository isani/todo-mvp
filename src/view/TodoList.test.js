import React from 'react'
import { shallow } from 'enzyme'
import TodoList from './TodoList'

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

describe('TodoList', () => {
  it('should render the todos prop as Todo elements', () => {
    const list = shallow(<TodoList todos={testTodos} />)
    const todoElements = list.find('Todo')
    expect(todoElements.length).toEqual(testTodos.length)
  })
  it('should pass ids as Todo element keys', () => {
    const list = shallow(<TodoList todos={testTodos} />)
    const todoElements = list.find('Todo')
    for (let i = 0; i < testTodos.length; i++) {
      expect(todoElements.at(i).key()).toEqual(testTodos[i].id.toString())
    }
  })
  it('should pass text to Todo elements', () => {
    const list = shallow(<TodoList todos={testTodos} />)
    const todoElements = list.find('Todo')
    for (let i = 0; i < testTodos.length; i++) {
      expect(todoElements.at(i).props().text).toEqual(testTodos[i].text)
    }
  })
  it('should pass done state to Todo elements', () => {
    const list = shallow(<TodoList todos={testTodos} />)
    const todoElements = list.find('Todo')
    for (let i = 0; i < testTodos.length; i++) {
      expect(todoElements.at(i).props().done).toEqual(testTodos[i].done)
    }
  })
})
