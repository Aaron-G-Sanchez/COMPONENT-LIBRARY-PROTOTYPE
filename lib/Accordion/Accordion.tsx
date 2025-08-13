import { CSSProperties, FC, ReactNode, Ref } from 'react'
import './Accordion.scss'

interface AccordionProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  ref?: Ref<HTMLDivElement>
}

export const Accordion: FC<AccordionProps> = ({
  children,
  className = '',
  style,
  ref
}: AccordionProps) => {
  const classList = className ? `accordion-root ${className}` : `accordion-root`

  return (
    <div className={classList} style={style} ref={ref}>
      {children}
    </div>
  )
}
