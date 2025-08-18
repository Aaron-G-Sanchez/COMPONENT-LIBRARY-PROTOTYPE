import {
  Children,
  cloneElement,
  CSSProperties,
  FC,
  isValidElement,
  ReactNode,
  Ref,
  useContext,
  useId
} from 'react'
import { AccordionContext } from '../main'

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
  const ctx = useContext(AccordionContext)
  const groupId = useId()

  const expanded = groupId === ctx?.expandedItem

  const classList = className
    ? `accordion-group ${className}`
    : 'accordion-group'

  const expandedClass = expanded ? ' expanded' : ''

  return (
    <div
      className={classList + expandedClass}
      style={style}
      ref={ref}
      onMouseEnter={() => ctx?.setExpandedItem(groupId)}
      onMouseLeave={() => ctx?.setExpandedItem(null)}
    >
      {Children.map(children, (child) =>
        isValidElement(child) ? cloneElement(child as any, { groupId }) : child
      )}
    </div>
  )
}
