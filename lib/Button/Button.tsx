import { CSSProperties, FC, ReactNode } from 'react'

import './Button.scss'

interface ButtonProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  variant: 'filled' | 'outline'
}

export const Button: FC<ButtonProps> = ({
  children,
  className = '',
  style,
  variant = 'filled'
}) => {
  const classList = className ? `button ${className}` : `button`

  return (
    <>
      <button className={classList} style={style}>
        {children}
      </button>
    </>
  )
}
