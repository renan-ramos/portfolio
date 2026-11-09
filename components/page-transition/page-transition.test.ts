import { describe, expect, it } from 'vitest'
import { toCommand } from './page-transition'

describe('toCommand', () => {
  it.each([
    ['/', 'cd ~'],
    ['/work', 'cd ~/work'],
    ['/work#work-2', 'cd ~/work'],
    ['/blog/', 'cd ~/blog']
  ])('turns %s into %s', (href, command) => {
    expect(toCommand(href)).toBe(command)
  })
})
