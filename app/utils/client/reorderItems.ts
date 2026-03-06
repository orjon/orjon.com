export const shuffleArray = (items: any[]): any[] => {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export const swapWithRandom = (items: any[], index: number): any[] => {
  if (items.length < 2) return items
  const result = [...items]
  let randomIndex = index
  while (randomIndex === index) {
    randomIndex = Math.floor(Math.random() * result.length)
  }
  ;[result[index], result[randomIndex]] = [result[randomIndex], result[index]]
  return result
}
