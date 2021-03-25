import React from 'react'

// Styles
import './scss/components/buttons.scss'

const Button = (
  {
    children,
    ...props
  }
) => {
  return (
    <button
      { ...props }
    >
      { children }
    </button>
  )
}

export default Button
