import React from 'react'
import './button.css'

interface ButtonProps {
  primary?: boolean
  secondary?: boolean
  backgroundColor?: 'primary' | 'secondary' 
  size?: 'small' | 'medium' | 'large'
  title: string
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  title,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'
  return (
    <button
      type='button'
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      {...props}
    >
      {title}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  )
}
