import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { List } from '../components'

describe('List component', () => {
  test('it should show a list with ul tag', () => {
    const { container } = render(<List id="foo">
      <li>One</li>
      <li>Two</li>
    </List>)
    const el = container.querySelector('#foo')
    const list = Array.from(container.childNodes)
    expect(el.tagName).toBe('UL')
    list.forEach(val => {
      expect(val.innerHTML).toBe("<li>One</li><li>Two</li>")
    })
    expect(el.childElementCount).toBe(2)
    expect(screen.getByText('One'))
    expect(screen.getByText('Two'))
  })

  test('it should show a list with p tag as items', () => {
    const { container } = render(<List id="foo" tag="div">
      <p>One</p>
      <p>Two</p>
    </List>)
    const el = container.querySelector('#foo')
    const list = Array.from(container.childNodes)
    list.forEach(val => {
      expect(val.innerHTML).toBe("<p>One</p><p>Two</p>")
    })
    expect(el.tagName).toBe('DIV')
  })

  test('it should show a list with ol tag passed like param', () => {
    const { container } = render(<List tag="ol" id="foo">
      <li>One</li>
    </List>)
    const el = container.querySelector('#foo')
    expect(el.tagName).toBe('OL')
    expect(el.childElementCount).toBe(1)
    expect(screen.getByText('One'))
  })

  test('it should show an interleaved list group passing like param: "isGroupInterleaved"', () => {
    const { container } = render(<List id="foo" isGroupInterleaved>
      <li>One</li>
      <li>Two</li>
    </List>)
    const el = container.querySelector('#foo')
    expect(el.className).toBe('list-group-interleaved')
  })

  test('it should show a flushed list group passing like param: "isGroupFlush"', () => {
    const { container } = render(<List id="foo" isGroupFlush>
      <li>One</li>
      <li>Two</li>
    </List>)
    const el = container.querySelector('#foo')
    expect(el.className).toBe('list-group-flush')
  })

  test('it should not show a classname passing a wrong param', () => {
    const { container, ...rest } = render(<List id="foo" isgroup="true">
      <li>One</li>
      <li>Two</li>
    </List>)
    const el = container.querySelector('#foo')
    expect(el.className).toBe('')
  })
})