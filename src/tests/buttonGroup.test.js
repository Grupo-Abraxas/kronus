import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button, ButtonGroup } from '../components'

describe('it should test ButtonGroup component', () => {
  test('it should show ButtonGroup exist', () => {
    const { container } = render(<ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>)
    const el = container.querySelector('div')
    expect(screen.getByText("Left"))
    expect(screen.getByText("Middle"))
    expect(screen.getByText("Right"))
    expect(el.getAttribute('class')).toBe('button-group')
  })

  test('it should show a vertical ButtonGroup', () => {
    const { container } = render(<ButtonGroup isVertical>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>)
    const el = container.querySelector('[class^="button-group"]')
    expect(el.getAttribute('class')).toBe('button-group-vertical')
  })

  test('it should show multiple attributes passed like params', () => {
    const { container } = render(<ButtonGroup isVertical id="foo" className="bar">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>)
    const el = container.querySelector('[class^="button-group"]')
    expect(el.getAttribute('id')).toBe("foo")
    expect(el.getAttribute('class')).toBe("button-group-vertical bar")
  })
})