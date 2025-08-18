import { FC, ReactNode, CSSProperties } from 'react'

import './AccordionTitle.scss'

export interface AccordionTitleProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export const AccordionTitle: FC<AccordionTitleProps> = ({
  children,
  className = '',
  style
}: AccordionTitleProps) => {
  const classList = className
    ? `accordion-title ${className}`
    : 'accordion-title'

  return (
    <h3 className={classList} style={style}>
      <span>{children}</span>
    </h3>
  )
}
