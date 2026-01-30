export const setLocalStorageValue = (key: string, value: string) => {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(key, value)
}

export const getLocalStorageValue = (
  key: string,
  defaultValue = null as string | null
) => {
  if (typeof window === 'undefined') return defaultValue
  return window.localStorage.getItem(key) || defaultValue
}
