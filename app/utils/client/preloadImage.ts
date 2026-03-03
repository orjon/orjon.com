// const getImageWidth = (sizes: Record<string, number>): number => {
//   const viewportWidth = window.innerWidth

//   const breakpoints = Object.entries(sizes)
//     .filter(([key]) => key !== 'rest')
//     .map(([key, width]) => ({ max: Number(key), width }))
//     .sort((a, b) => a.max - b.max)

//   const match = breakpoints.find(({ max }) => viewportWidth <= max)
//   if (match) return match.width

//   return sizes.rest
// }

// export const preloadImage = (
//   path: string,
//   sizes: Record<string, number>,
//   quality: number
// ) => {
//   const imageWidth = getImageWidth(sizes)
//   console.log('preloading image', path, imageWidth, quality)
//   const u = new URL('/_next/image', window.location.origin)
//   u.searchParams.set('url', path)
//   u.searchParams.set('w', String(imageWidth))
//   u.searchParams.set('q', String(quality))
//   const img = new window.Image()
//   img.src = u.toString()
// }
