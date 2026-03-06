'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Ctx = {
  isBurgerMenuOpen: boolean
  openBurgerMenu: () => void
  closeBurgerMenu: () => void
}

const BurgerMenuContext = createContext<Ctx | undefined>(undefined)

export const BurgerMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

  const openBurgerMenu = () => setIsBurgerMenuOpen(true)
  const closeBurgerMenu = () => setIsBurgerMenuOpen(false)

  return (
    <BurgerMenuContext.Provider value={{ isBurgerMenuOpen, openBurgerMenu, closeBurgerMenu }}>
      {children}
    </BurgerMenuContext.Provider>
  )
}

export const useBurgerMenu = () => {
  const ctx = useContext(BurgerMenuContext)
  if (!ctx) throw new Error('useBurgerMenu must be used within BurgerMenuProvider')
  return ctx
}