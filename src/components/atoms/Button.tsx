/* eslint-disable react/button-has-type */
import React, { ReactNode } from 'react'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

const Button = ({
  children,
  onClick,
  type = 'button',
  disabled,
  className,
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`rounded-md shadow ${className}`}
  >
    {children}
  </button>
)

export default Button
