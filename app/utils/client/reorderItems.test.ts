import { describe, it, expect } from 'vitest'
import { shuffleArray, swapWithRandom } from './reorderItems'

describe('shuffleArray', () => {
  it('returns array with same length', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(shuffleArray(arr)).toHaveLength(5)
  })

  it('returns array with same elements (no additions or removals)', () => {
    const arr = [1, 2, 3, 4, 5]
    const shuffled = shuffleArray(arr)
    expect(shuffled.sort()).toEqual([1, 2, 3, 4, 5].sort())
  })

  it('does not mutate original array', () => {
    const arr = [1, 2, 3]
    shuffleArray(arr)
    expect(arr).toEqual([1, 2, 3])
  })

  it('handles empty array', () => {
    expect(shuffleArray([])).toEqual([])
  })

  it('handles single-element array', () => {
    expect(shuffleArray([42])).toEqual([42])
  })
})

describe('swapWithRandom', () => {
  it('returns array with same length', () => {
    const arr = ['a', 'b', 'c', 'd']
    const result = swapWithRandom(arr, 1)
    expect(result).toHaveLength(4)
  })

  it('returns array with same elements', () => {
    const arr = ['a', 'b', 'c', 'd']
    const result = swapWithRandom(arr, 1)
    expect(result.sort()).toEqual([...arr].sort())
  })

  it('swaps element at index with another (element at index changes)', () => {
    const arr = ['a', 'b', 'c', 'd']
    const results = new Set<string>()
    for (let i = 0; i < 50; i++) {
      const result = swapWithRandom(arr, 1)
      results.add(result[1])
    }
    expect(results.size).toBeGreaterThan(1)
    expect(results).toContain('a')
    expect(results).toContain('c')
    expect(results).toContain('d')
    expect(results).not.toContain('b')
  })

  it('returns unchanged array when length < 2', () => {
    expect(swapWithRandom([1], 0)).toEqual([1])
    expect(swapWithRandom([], 0)).toEqual([])
  })

  it('does not mutate original array', () => {
    const arr = [1, 2, 3, 4]
    swapWithRandom(arr, 2)
    expect(arr).toEqual([1, 2, 3, 4])
  })
})
