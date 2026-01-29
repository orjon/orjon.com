import { useEffect } from 'react'

export const useMountLogger = (name: string) => {
  useEffect(() => {
    console.log(`🟢 MOUNTED: ${name}`)
    return () => {
      console.log(`🔴 UNMOUNTED: ${name}`)
    }
  }, [name])
}
