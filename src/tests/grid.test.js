import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Grid } from '../components'

describe('it should test Grid component', () => {
  test('it should show the Grid component was rendered', () => {
    const { container } = render(<Grid id="myId">Testing grid</Grid>)
    const el = container.querySelector("#myId")
    expect(screen.getAllByText("Testing grid"))
    expect(el.tagName).toBe("DIV")
  })

  test('it should render with the html-tag passed like param', () => {
    const { container } = render(<Grid id="test" htmlTag="main">Testing</Grid>)
    const el = container.querySelector('#test')
    expect(el.tagName).toBe("MAIN")
  })

  test('it should show a data-attribute passes like param', () => {
    const attr = "username"
    render(<Grid data-testid={ attr }>Testing</Grid>)
    expect(screen.getByTestId(attr))
  })

  test('it should show multiple attributes passed like params', () => {
    const { container } = render(<Grid id="myId" className="foo bar">Testing</Grid>)
    const el = container.querySelector('#myId')
    expect(el.getAttribute('id')).toBe("myId")
    expect(el.getAttribute('class')).toBe("foo bar")
    expect(el.textContent).toBe("Testing")
  })
})
