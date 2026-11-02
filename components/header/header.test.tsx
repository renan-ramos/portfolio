import { render, screen } from '@testing-library/react'
import type { ComponentProps } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { describe, expect, it, vi } from 'vitest'
import en from '@/dictionaries/en.json'
import br from '@/dictionaries/br.json'
import { Header } from './header'

vi.mock('@/i18n/navigation', () => ({
  Link: ({ href, children, ...props }: ComponentProps<'a'>) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}))

vi.mock('@/components/menu-shortcuts/menu-shortcuts', () => ({
  MenuShortcuts: () => null
}))

vi.mock('@/components/language-select/language-select', () => ({
  LanguageSelect: () => <div data-testid="language-select" />
}))

describe('Header', () => {
  it.each([
    { locale: 'en', messages: en },
    { locale: 'br', messages: br }
  ])(
    'forwards header props and renders $locale navigation',
    ({ locale, messages }) => {
      render(
        <NextIntlClientProvider
          locale={locale}
          messages={{ application: messages.application }}
        >
          <Header data-testid="site-header" className="custom-header" />
        </NextIntlClientProvider>
      )

      const header = screen.getByTestId('site-header')

      expect(header.classList.contains('container')).toBe(true)
      expect(header.classList.contains('custom-header')).toBe(true)
      expect(
        screen
          .getByRole('link', { name: messages.application.navigation.home })
          .getAttribute('href')
      ).toBe('/')
      expect(
        screen
          .getByRole('link', { name: messages.application.navigation.work })
          .getAttribute('href')
      ).toBe('/work')
      expect(
        screen
          .getByRole('link', { name: messages.application.navigation.blog })
          .getAttribute('href')
      ).toBe('/blog')
      expect(screen.getByTestId('language-select')).toBeTruthy()
    }
  )
})
