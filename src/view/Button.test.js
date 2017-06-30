import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

const testLabel = 'Click Me!'
const clickHandler = jest.fn()

describe('Button', () => {
  it('should render an HTML button', () => {
    const button = shallow(<Button />)
    expect(button.type()).toEqual('button')
  })
  it('should display the label prop', () => {
    const button = shallow(<Button label={testLabel} />)
    expect(button.text()).toEqual(testLabel)
  })
  it('should use the click handler in the onClick prop', () => {
    const button = shallow(<Button onClick={clickHandler} />)
    button.simulate('click')
    expect(clickHandler).toHaveBeenCalledTimes(1)
  })
})
