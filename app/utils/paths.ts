import { github, ImageType } from '@/app/types'
import { imagePath } from '@/app/data'

export const addBuildVersion = (file: string) =>
  `${file}?v=${process.env.NEXT_PUBLIC_BUILD_VERSION}`

export const isGif = (imagePath: string): boolean =>
  imagePath?.toLowerCase().endsWith('.gif')

export const getGithubLink = (repo: string) => {
  return `${github.baseUrl}/${github.user}/${repo}`
}

export const getCommits = (repo: string) => {
  return `${github.api}/${github.user}/${repo}/${github.commits}`
}

export const getIconPath = (imageType: ImageType, path: string) => {
  return `${imagePath[imageType]}/${path}.png`
}

export const getImagePath = (imageType: ImageType, file: string) => {
  return `${imagePath[imageType]}/${file}.png`
}

export const getNavIcon = (icon: string, isOn: boolean) => {
  return addBuildVersion(
    getIconPath(ImageType.NAV_ICON, `${icon}${isOn ? 'ON' : 'OFF'}`)
  )
}
