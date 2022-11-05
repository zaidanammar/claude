/* eslint-disable react/button-has-type */
import React, { ReactNode } from 'react'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode
  handleClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({
  children,
  handleClick,
  type = 'button',
  disabled,
}: ButtonProps) => (
  <button type={type} onClick={handleClick} disabled={disabled}>
    {children}
  </button>
)

export default Button
