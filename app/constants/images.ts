export const projectImageSizes = {
  640: 480,
  768: 600,
  1023: 900,
  1120: 700,
  rest: 900
}

export const designImageSizes = {
  480: 480,
  768: 600,
  1023: 900,
  rest: 1120
}

export const imageSizes = {
  navIcon: [30],
  techIcons: [64],
  projectIcon: [250],
  projectImage: Object.values(projectImageSizes),
  designImage: Object.values(designImageSizes)
}

export const imageQualities = {
  navIcons: 100,
  images: 75
}
export const screenMultipliers = [1, 2]
