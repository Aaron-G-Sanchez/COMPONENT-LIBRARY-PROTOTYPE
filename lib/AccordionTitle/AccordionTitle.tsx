import { FC, ReactNode } from 'react'

export interface AccordionTitleProps {
  children: ReactNode
}

export const AccordionTitle: FC<AccordionTitleProps> = ({
  children
}: AccordionTitleProps) => {
  return (
    <h3 className="accordion-title">
      <span>{children}</span>
    </h3>
  )
}
