'use client'

import { useEffect, useState } from "react";

export const useMinuteClock = (): string => {
  const [time, setTime] = useState(() => {
    const now = new Date();
    return now.getHours().toString().padStart(2, "0") + ":" +
      now.getMinutes().toString().padStart(2, "0");
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateTime = () => {
      const now = new Date();
      const hh = now.getHours().toString().padStart(2, "0");
      const mm = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hh}:${mm}`);

      // Schedule next update at the top of the next minute
      const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
      timeoutId = setTimeout(updateTime, msUntilNextMinute);
    };

    updateTime(); // Initial call on mount

    return () => clearTimeout(timeoutId); // Clean up on unmount
  }, []);

  return time;
}
