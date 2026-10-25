import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import LanguageSelect from './language-select'

const { replace } = vi.hoisted(() => ({ replace: vi.fn() }))

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) =>
    ({ label: 'Language', en: 'English', br: 'Portuguese' })[
      key as 'label' | 'en' | 'br'
    ] ?? key
}))

vi.mock('@/i18n/navigation', () => ({
  usePathname: () => '/work',
  useRouter: () => ({ replace })
}))

describe('LanguageSelect', () => {
  beforeEach(() => {
    replace.mockClear()
  })

  it.each([
    { locale: 'en', keys: '{ArrowDown}{Enter}' },
    { locale: 'br', keys: '{ArrowDown}{ArrowDown}{Enter}' }
  ])('replaces the current path with $locale', async ({ locale, keys }) => {
    const user = userEvent.setup()

    render(<LanguageSelect />)

    screen.getByRole('combobox').focus()
    await user.keyboard(keys)

    expect(replace).toHaveBeenCalledWith('/work', { locale })
  })
})
