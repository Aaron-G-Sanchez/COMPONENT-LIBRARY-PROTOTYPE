import { CSSProperties, FC, ReactNode, Ref } from 'react'

import './AccordionGroup.scss'

export interface AccordionGroupProps {
  children: ReactNode
  className?: string
  ref?: Ref<HTMLDivElement>
  style?: CSSProperties
}

export const AccordionGroup: FC<AccordionGroupProps> = ({
  children,
  className = '',
  ref,
  style
}: AccordionGroupProps) => {
  const classList = className
    ? `accordion-group ${className}`
    : 'accordion-group'

  return (
    <div className={classList} style={style} ref={ref}>
      {children}
    </div>
  )
}
