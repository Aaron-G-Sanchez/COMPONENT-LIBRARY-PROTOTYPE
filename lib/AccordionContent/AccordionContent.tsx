import { FC, ReactNode, CSSProperties } from 'react'
import './AccordionContent.scss'

interface AccordionContentProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className = '',
  style
}) => {
  const classList = className
    ? `accordion-content ${className}`
    : 'accordion-content'

  return (
    <div className={classList}>
      <p>
        <span>{children}</span>
      </p>
    </div>
  )
}
