import React from 'react'
import classnames from 'classnames'

// Styles
import './scss/components/lists.scss'

const List = (
  {
    children,
    className,
    tag = false,
    isGroup = false,
    isGroupFlush = false,
    isGroupInterleaved = false,
    ...props
  }
) => {
  const HTMLTag = tag || 'ul'
  const listClass = className || isGroup || isGroupFlush || isGroupInterleaved ? true : false

  return (
    <HTMLTag
      className={ listClass ? classnames({
        'list-group': isGroup,
        'list-group-flush': isGroupFlush,
        'list-group-interleaved': isGroupInterleaved
      }, className) : null }
      { ...props }
    >
      { children }
    </HTMLTag>
  )
}

export default List