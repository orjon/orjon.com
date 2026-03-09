import { describe, it, expect, afterEach } from 'vitest'
import {
  numberWithinRange,
  getRandomArrayItem,
  hasProject,
  dedupeArray,
  getSizes,
  getImageSizes,
  getSiteTitle,
} from './helpers'

describe('numberWithinRange', () => {
  it('clamps number to min when below range', () => {
    expect(numberWithinRange(-5, 0, 10)).toBe(0)
    expect(numberWithinRange(5, 10, 20)).toBe(10)
  })

  it('clamps number to max when above range', () => {
    expect(numberWithinRange(15, 0, 10)).toBe(10)
    expect(numberWithinRange(100, 10, 20)).toBe(20)
  })

  it('returns number unchanged when within range', () => {
    expect(numberWithinRange(5, 0, 10)).toBe(5)
    expect(numberWithinRange(0, 0, 10)).toBe(0)
    expect(numberWithinRange(10, 0, 10)).toBe(10)
  })
})

describe('getRandomArrayItem', () => {
  it('returns an item from the array', () => {
    const arr = ['a', 'b', 'c']
    const item = getRandomArrayItem(arr)
    expect(arr).toContain(item)
  })

  it('returns the only item for single-element array', () => {
    expect(getRandomArrayItem([42])).toBe(42)
  })

  it('returns undefined for empty array', () => {
    expect(getRandomArrayItem([])).toBeUndefined()
  })
})

describe('hasProject', () => {
  const projects = [
    { slug: 'foo', projectType: 'code' as const },
    { slug: 'bar', projectType: 'code' as const },
  ]

  it('returns true when project slug exists', () => {
    expect(hasProject(projects as any, 'foo')).toBe(true)
    expect(hasProject(projects as any, 'bar')).toBe(true)
  })

  it('returns false when project slug does not exist', () => {
    expect(hasProject(projects as any, 'baz')).toBe(false)
    expect(hasProject(projects as any, '')).toBe(false)
  })

  it('returns false for empty projects array', () => {
    expect(hasProject([], 'foo')).toBe(false)
  })
})

describe('dedupeArray', () => {
  it('removes duplicates', () => {
    expect(dedupeArray([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4])
  })

  it('preserves order of first occurrence', () => {
    expect(dedupeArray(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c'])
  })

  it('returns empty array for empty input', () => {
    expect(dedupeArray([])).toEqual([])
  })

  it('returns same array when no duplicates', () => {
    const arr = [1, 2, 3]
    expect(dedupeArray(arr)).toEqual([1, 2, 3])
  })
})

describe('getSizes', () => {
  it('returns values from record', () => {
    expect(getSizes({ sm: 100, md: 200, lg: 300 })).toEqual([100, 200, 300])
  })

  it('returns empty array for empty record', () => {
    expect(getSizes({})).toEqual([])
  })
})

describe('getImageSizes', () => {
  it('returns only rest width when no breakpoints', () => {
    const sizes = { rest: 800 }
    expect(getImageSizes(sizes)).toBe('800px')
  })

  it('returns media query string with breakpoints and rest', () => {
    const sizes = { 640: 400, 1024: 600, rest: 800 }
    const result = getImageSizes(sizes)
    expect(result).toContain('(max-width: 640px) 400px')
    expect(result).toContain('(max-width: 1024px) 600px')
    expect(result).toContain('800px')
    expect(result).toMatch(/^\(max-width: \d+px\) \d+px(, \(max-width: \d+px\) \d+px)*, \d+px$/)
  })

  it('handles single breakpoint', () => {
    const sizes = { 768: 500, rest: 1200 }
    const result = getImageSizes(sizes)
    expect(result).toBe('(max-width: 768px) 500px, 1200px')
  })
})

describe('getSiteTitle', () => {
  const envOriginal = process.env.NEXT_PUBLIC_ENV

  afterEach(() => {
    process.env.NEXT_PUBLIC_ENV = envOriginal
  })

  it('returns base title when NEXT_PUBLIC_ENV is not set', () => {
    delete process.env.NEXT_PUBLIC_ENV
    expect(getSiteTitle()).toBe('orjon.com')
  })

  it('returns staging title when NEXT_PUBLIC_ENV is staging', () => {
    process.env.NEXT_PUBLIC_ENV = 'staging'
    expect(getSiteTitle()).toBe('orjon.com | Staging')
  })

  it('returns local title when NEXT_PUBLIC_ENV is local', () => {
    process.env.NEXT_PUBLIC_ENV = 'local'
    expect(getSiteTitle()).toBe('orjon.com | Local')
  })

  it('returns base title for unknown env', () => {
    process.env.NEXT_PUBLIC_ENV = 'production'
    expect(getSiteTitle()).toBe('orjon.com')
  })
})
