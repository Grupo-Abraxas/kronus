import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Grid } from '../components'

describe('it should test Grid component', () => {
  test('it should show the Grid component that was rendered', () => {
    const { container } = render(<Grid id="myId">Testing grid</Grid>)
    const el = container.querySelector("#myId")
    expect(screen.getAllByText("Testing grid"))
    expect(el.tagName).toBe("DIV")
  })

  test('it should render to <main> passing tag as property', () => {
    const { container } = render(<Grid id="test" tag="main">Testing</Grid>)
    const el = container.querySelector('#test')
    expect(el.tagName).toBe("MAIN")
  })

  test('it should render "container" class passing isContainer as property', () => {
    const { container } = render(<Grid tag="main" isContainer>Testing</Grid>)
    const el = container.querySelector('main')
    expect(el.getAttribute('class')).toBe("container")
  })

  test('it should render "columns" class passing areColumns as property', () => {
    const { container } = render(<Grid tag="section" areColumns>Testing</Grid>)
    const el = container.querySelector('section')
    expect(el.getAttribute('class')).toBe("columns")
  })

  test('it should render "column" class passing isColumn as property', () => {
    const { container } = render(<Grid isColumn>Testing</Grid>)
    const el = container.querySelector('div')
    expect(el.getAttribute('class')).toBe("column")
  })

  test('it should render "column-of-4" class passing colSize="4" as property', () => {
    const { container } = render(<Grid colSize="4">Testing</Grid>)
    const el = container.querySelector('div')
    expect(el.getAttribute('class')).toBe("column-of-4")
  })

  test('it should render combined classes passing colSize="4", tabletSize="3" and phoneSize="6" as properties', () => {
    const { container } = render(<Grid colSize="4" tabletSize="3" phoneSize="6">Testing</Grid>)
    const el = container.querySelector('div')
    expect(el.getAttribute('class')).toBe("column-of-4 tablet-column-of-3 cellphone-column-of-6")
  })

  test('it should render id and class attributes passed like properties', () => {
    const { container } = render(<Grid id="myId" isContainer className="foo bar">Testing</Grid>)
    const el = container.querySelector('#myId')
    expect(el.getAttribute('id')).toBe("myId")
    expect(el.getAttribute('class')).toBe("container foo bar")
    expect(el.textContent).toBe("Testing")
  })
})
