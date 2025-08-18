import { FC, ReactNode, CSSProperties, useContext } from 'react'

import { AccordionContext } from '../main'
import './AccordionContent.scss'

interface AccordionContentProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  groupId: string
}

export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className = '',
  style,
  groupId
}) => {
  const context = useContext(AccordionContext)

  const classList = className
    ? `accordion-content ${className}`
    : 'accordion-content'

  return (
    <div className={classList} style={style}>
      <p>
        <span>{children}</span>
      </p>
    </div>
  )
}
