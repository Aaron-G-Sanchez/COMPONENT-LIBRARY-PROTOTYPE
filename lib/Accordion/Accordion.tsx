import { CSSProperties, FC, ReactNode, Ref, useContext, useState } from 'react'
import { AccordionContext } from './AccordionContext'
import './Accordion.scss'

interface AccordionProps {
  children: ReactNode
  className?: string
  ref?: Ref<HTMLDivElement>
  style?: CSSProperties
}

export const Accordion: FC<AccordionProps> = ({
  children,
  className = '',
  ref,
  style
}) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const classList = className ? `accordion-root ${className}` : 'accordion-root'

  return (
    <AccordionContext.Provider value={{ expandedItem, setExpandedItem }}>
      <div className={classList} style={style} ref={ref}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}
