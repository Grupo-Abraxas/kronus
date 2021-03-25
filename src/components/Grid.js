import React from 'react'

// Styles
import './scss/components/grids.scss'

const Grid = (
  {
    htmlTag,
    children,
    ...props
  }
) => {
  const HtmlTag = htmlTag || 'div'

  return (
    <HtmlTag
      { ...props }
    >
      { children }
    </HtmlTag>
  )
}

export default Grid
