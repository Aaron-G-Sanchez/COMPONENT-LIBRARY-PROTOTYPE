import { CSSProperties, FC, ReactNode, Ref } from 'react'
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
  const classList = className ? `accordion-root ${className}` : 'accordion-root'

  return (
    <div className={classList} style={style} ref={ref}>
      {children}
    </div>
  )
}
