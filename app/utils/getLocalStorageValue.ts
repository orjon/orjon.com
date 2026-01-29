export const getLocalStorageValue = (
  key: string,
  defaultValue = null as string | null
) => window?.localStorage?.getItem(key) || defaultValue
