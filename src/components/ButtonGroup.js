import React from 'react'
import classnames from 'classnames'

// Styles
import './scss/components/buttonsGroup.scss'

const ButtonGroup = (
  {
    children,
    className,
    isVertical = false,
    ...props
  }
) => {
  return (
    <div
      className={ classnames({
        'button-group': !isVertical,
        'button-group-vertical': isVertical
      }, className) }
      { ...props }
    >
      { children }
    </div>
  )
}

export default ButtonGroup
