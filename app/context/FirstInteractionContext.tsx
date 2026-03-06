'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { getLocalStorageValue, setLocalStorageValue } from '@/app/utils/client'

type Ctx = {
  hasFirstInteraction: boolean
  markInteracted: () => void
}

const FirstInteractionContext = createContext<Ctx | undefined>(undefined)
const STORAGE_KEY = 'hasFirstInteraction'

export const FirstInteractionProvider = ({ children }: { children: ReactNode }) => {
  const [hasFirstInteraction, setHasFirstInteraction] = useState(false)

  useEffect(() => {
    const stored = getLocalStorageValue(STORAGE_KEY)
    if (stored === 'true') {
      setHasFirstInteraction(true)
    }
  }, [])

  const markInteracted = () => {
    if (hasFirstInteraction) return
    setHasFirstInteraction(true)
    setLocalStorageValue(STORAGE_KEY, 'true')
  }

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