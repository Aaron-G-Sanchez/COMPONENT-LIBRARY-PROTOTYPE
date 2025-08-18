import { createContext } from 'react'

interface AccordionContext {
  expandedItem: string | null
  setExpandedItem: (id: string | null) => void
}

export const AccordionContext = createContext<AccordionContext | null>(null)
