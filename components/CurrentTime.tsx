'use client'

import { useState, useEffect } from 'react'

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null

    // Calculate milliseconds until next minute
    const now = new Date()
    const msUntilNextMinute =
      60000 - (now.getSeconds() * 1000 + now.getMilliseconds())

    // Set initial timeout to trigger at the next minute
    const initialTimeout = setTimeout(() => {
      setCurrentTime(new Date())
      // Then set interval to update every minute
      intervalId = setInterval(() => {
        setCurrentTime(new Date())
      }, 60000)
    }, msUntilNextMinute)

    // Cleanup both timeout and interval on unmount
    return () => {
      clearTimeout(initialTimeout)
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [])

  return <div>{currentTime.toLocaleTimeString()}</div>
}

export default CurrentTime
