'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Ctx = {
  hasFirstInteraction: boolean
  markInteracted: () => void
}

const FirstInteractionContext = createContext<Ctx | undefined>(undefined)

export const FirstInteractionProvider = ({ children }: { children: ReactNode }) => {
  const [hasFirstInteraction, setHasFirstInteraction] = useState(false)

  const markInteracted = () => setHasFirstInteraction(true)

  return (
    <FirstInteractionContext.Provider value={{ hasFirstInteraction, markInteracted }}>
      {children}
    </FirstInteractionContext.Provider>
  )
}

export const useFirstInteraction = () => {
  const ctx = useContext(FirstInteractionContext)
  if (!ctx) throw new Error('useFirstInteraction must be used within FirstInteractionProvider')
  return ctx
}