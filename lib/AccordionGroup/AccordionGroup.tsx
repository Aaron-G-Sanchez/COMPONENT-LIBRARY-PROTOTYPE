import { FC, ReactNode } from 'react'

import './AccordionGroup.scss'

export interface AccordionGroupProps {
  children: ReactNode
}

export const AccordionGroup: FC<AccordionGroupProps> = ({
  children
}: AccordionGroupProps) => {
  return <div className="accordion-group">{children}</div>
}
