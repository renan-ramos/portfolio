import { describe, expect, it } from 'vitest'
import { cn } from './utils'

describe('cn', () => {
  it('combines strings, arrays, and conditional classes', () => {
    expect(
      cn('flex', { hidden: false, 'font-bold': true }, [
        'gap-2',
        'items-center'
      ])
    ).toBe('flex font-bold gap-2 items-center')
  })

  it('merges conflicting Tailwind classes', () => {
    expect(cn('p-4 text-sm', 'px-2 text-lg')).toBe('p-4 px-2 text-lg')
  })

  it('returns an empty string when no classes are provided', () => {
    expect(cn()).toBe('')
  })
})
