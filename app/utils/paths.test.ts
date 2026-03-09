import { describe, it, expect, afterEach } from 'vitest'
import {
  addBuildVersion,
  isGif,
  getGithubLink,
  getCommits,
  getIconPath,
  getImagePath,
  getNavIcon,
} from './paths'
import { ImageType } from '@/app/types'

describe('addBuildVersion', () => {
  const buildVersionOriginal = process.env.NEXT_PUBLIC_BUILD_VERSION

  afterEach(() => {
    process.env.NEXT_PUBLIC_BUILD_VERSION = buildVersionOriginal
  })

  it('appends version query string', () => {
    process.env.NEXT_PUBLIC_BUILD_VERSION = 'abc123'
    expect(addBuildVersion('/icons/nav/foo.png')).toBe('/icons/nav/foo.png?v=abc123')
  })

  it('handles undefined build version', () => {
    delete process.env.NEXT_PUBLIC_BUILD_VERSION
    expect(addBuildVersion('/path/to/file')).toBe('/path/to/file?v=undefined')
  })
})

describe('isGif', () => {
  it('returns true for .gif extension', () => {
    expect(isGif('image.gif')).toBe(true)
    expect(isGif('/path/to/image.GIF')).toBe(true)
    expect(isGif('photo.Gif')).toBe(true)
  })

  it('returns false for non-gif extensions', () => {
    expect(isGif('image.png')).toBe(false)
    expect(isGif('image.jpg')).toBe(false)
    expect(isGif('image.gifx')).toBe(false)
  })

  it('returns undefined/falsy for null/undefined (optional chaining)', () => {
    expect(isGif(null as any)).toBeFalsy()
    expect(isGif(undefined as any)).toBeFalsy()
  })
})

describe('getGithubLink', () => {
  it('builds github repo URL', () => {
    expect(getGithubLink('my-repo')).toBe('https://github.com/orjon/my-repo')
  })
})

describe('getCommits', () => {
  it('builds github commits API URL', () => {
    expect(getCommits('my-repo')).toBe(
      'https://api.github.com/repos/orjon/my-repo/commits'
    )
  })
})

describe('getIconPath', () => {
  it('builds path for nav icon', () => {
    expect(getIconPath(ImageType.NAV_ICON, 'burgerMenu')).toBe(
      '/icons/nav/burgerMenu.png'
    )
  })

  it('builds path for project icon', () => {
    expect(getIconPath(ImageType.PROJECT_ICON, 'my-project')).toBe(
      '/icons/projects/my-project.png'
    )
  })

  it('builds path for technology icon', () => {
    expect(getIconPath(ImageType.TECHNOLOGY_ICON, 'react')).toBe(
      '/icons/technology/react.png'
    )
  })
})

describe('getImagePath', () => {
  it('builds path for design images', () => {
    expect(getImagePath(ImageType.DESIGN_IMAGES, 'mockup')).toBe(
      '/images/design/mockup.png'
    )
  })

  it('builds path for project images', () => {
    expect(getImagePath(ImageType.PROJECT_IMAGES, 'screenshot')).toBe(
      '/images/projects/screenshot.png'
    )
  })
})

describe('getNavIcon', () => {
  const buildVersionOriginal = process.env.NEXT_PUBLIC_BUILD_VERSION

  afterEach(() => {
    process.env.NEXT_PUBLIC_BUILD_VERSION = buildVersionOriginal
  })

  it('builds OFF nav icon path with version', () => {
    process.env.NEXT_PUBLIC_BUILD_VERSION = 'v1'
    expect(getNavIcon('burgerMenu', false)).toBe(
      '/icons/nav/burgerMenuOFF.png?v=v1'
    )
  })

  it('builds ON nav icon path with version', () => {
    process.env.NEXT_PUBLIC_BUILD_VERSION = 'v1'
    expect(getNavIcon('burgerMenu', true)).toBe(
      '/icons/nav/burgerMenuON.png?v=v1'
    )
  })
})
