import React from 'react'
import { shallow } from 'enzyme'
import Draft from './Draft'

const changeHandler = jest.fn()
const submitHandler = jest.fn()

describe('Draft', () => {
  it('should render an HTML form', () => {
    const draft = shallow(
      <Draft onChange={changeHandler} onSubmit={submitHandler} />
    )
    const form = draft.find('form')
    expect(form.length).toEqual(1)
  })
  it('should render an HTML input inside the form', () => {
    const draft = shallow(
      <Draft onChange={changeHandler} onSubmit={submitHandler} />
    )
    const input = draft.find('form').at(0).find('input')
    expect(input.length).toEqual(1)
  })
  it('should render an HTML input with the type text', () => {
    const draft = shallow(
      <Draft onChange={changeHandler} onSubmit={submitHandler} />
    )
    const input = draft.find('input')
    expect(input.is('[type="text"]')).toEqual(true)
  })
  it('should render the text prop in the input', () => {
    const draft = shallow(
      <Draft onChange={changeHandler} onSubmit={submitHandler} text="foo" />
    )
    const input = draft.find('input')
    expect(input.is('[value="foo"]')).toEqual(true)
  })
  it('should call onChange prop on input', () => {
    const draft = shallow(
      <Draft onChange={changeHandler} onSubmit={submitHandler} />
    )
    const input = draft.find('input')
    const text = 'foobar'
    input.simulate('change', { target: { value: text } })
    expect(changeHandler).toHaveBeenCalledTimes(1)
  })
  it('should call onChange prop with the value of the input', () => {
    const draft = shallow(
      <Draft onChange={changeHandler} onSubmit={submitHandler} />
    )
    const input = draft.find('input')
    const text = 'foobar'
    input.simulate('change', { target: { value: text } })
    expect(changeHandler).toHaveBeenCalledWith(text)
  })
  it('should call onSubmit prop on submit', () => {
    const draft = shallow(
      <Draft onChange={changeHandler} onSubmit={submitHandler} />
    )
    const form = draft.find('form')
    form.simulate('submit')
    expect(submitHandler).toHaveBeenCalledTimes(1)
  })
  it('should call onSubmit with the text prop', () => {
    const text = 'foobar'
    const draft = shallow(
      <Draft onChange={changeHandler} onSubmit={submitHandler} text={text} />
    )
    const form = draft.find('form')
    form.simulate('submit')
    expect(submitHandler).toHaveBeenCalledWith(text)
  })
})
