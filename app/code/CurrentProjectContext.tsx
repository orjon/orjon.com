'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

import { projects } from '@/data/code'

type CurrentProjectContextValue = {
  currentProject: string
  setCurrentProject: (p: string) => void
}

const CurrentProjectContext = createContext<CurrentProjectContextValue | undefined>(undefined)

export const CurrentProjectProvider = ({ children }: { children: ReactNode }) => {
  const [currentProject, setCurrentProject] = useState(projects[0].slug)

  return (
    <CurrentProjectContext.Provider value={{ currentProject, setCurrentProject }}>
      {children}
    </CurrentProjectContext.Provider>
  )
}

export const useCurrentProject = () => {
  const context = useContext(CurrentProjectContext)
  if (!context) throw new Error('useCurrentProject must be used within CurrentProjectProvider')
  return context
}