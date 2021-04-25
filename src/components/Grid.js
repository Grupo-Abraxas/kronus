import React from 'react'
import classnames from 'classnames'

// Styles
import './scss/components/grids.scss'

const Grid = (
  {
    children,
    className = false,
    isContainer = false,
    isColumn = false,
    areColumns = false,
    colSize = false,
    tabletSize = false,
    phoneSize = false,
    tag,
    ...props
  }
) => {
  const HtmlTag = tag || 'div'
  const gridClass = className || isContainer || areColumns || isColumn ||
    colSize || tabletSize || phoneSize ? true : false

  return (
    <HtmlTag
      data-yo={undefined}
      className={ gridClass ? classnames({
        'container': isContainer,
        'column': isColumn,
        'columns': areColumns,
        [`column-of-${colSize}`]: colSize,
        [`tablet-column-of-${tabletSize}`]: tabletSize,
        [`cellphone-column-of-${phoneSize}`]: phoneSize
      }, className) : null }
      { ...props }
    >
      { children }
    </HtmlTag>
  )
}

export default Grid
