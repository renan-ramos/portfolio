import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import MenuShortcuts from './menu-shortcuts'

const { push } = vi.hoisted(() => ({ push: vi.fn() }))

vi.mock('@/i18n/navigation', () => ({
  useRouter: () => ({ push })
}))

const shortcuts = { h: '/', w: '/work', b: '/blog' }

describe('MenuShortcuts', () => {
  beforeEach(() => {
    push.mockClear()
  })

  it.each([
    { key: 'h', path: '/' },
    { key: 'W', path: '/work' },
    { key: 'b', path: '/blog' }
  ])('navigates to $path when $key is pressed', async ({ key, path }) => {
    const user = userEvent.setup()

    render(<MenuShortcuts shortcuts={shortcuts} />)
    await user.keyboard(key)

    expect(push).toHaveBeenCalledWith(path)
  })

  it('ignores modified keys, typing in fields and unknown keys', async () => {
    const user = userEvent.setup()

    render(
      <>
        <MenuShortcuts shortcuts={shortcuts} />
        <input aria-label="search" />
      </>
    )
    await user.keyboard('{Control>}w{/Control}x')
    await user.click(document.querySelector('input')!)
    await user.keyboard('hwb')

    expect(push).not.toHaveBeenCalled()
  })
})
