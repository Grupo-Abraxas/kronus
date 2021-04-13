import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '../components'

describe('it should test Button component', () => {
  test('it should show a text passed as param', () => {
    const text = "Button example"
    render(<Button>{ text }</Button>)
    expect(screen.getByText(text))
  })

  test('it should show all classes passed like params', () => {
    const clases = "foo bar"
    const { container } = render(<Button className={ clases }>Testing</Button>)
    expect(container.firstChild).toHaveClass(clases)
  })

  test('it should show a data-attribute passes like param', () => {
    const attr = "username"
    render(<Button data-testid={ attr }>Testing</Button>)
    expect(screen.getByTestId(attr))
  })

  test('it should show multiple attributes passed like params', () => {
    const { container } = render(<Button id="myId" className="myClass foo">Testing</Button>)
    const el = container.querySelector('#myId')
    expect(el.getAttribute('id')).toBe("myId")
    expect(el.getAttribute('class')).toBe("myClass foo")
    expect(screen.getByText("Testing"))
  })
})
