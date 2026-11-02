import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import { describe, expect, it } from 'vitest'
import en from '@/dictionaries/en.json'
import br from '@/dictionaries/br.json'
import Footer from './footer/footer'

describe('Footer', () => {
  it.each([
    { locale: 'en', messages: en },
    { locale: 'br', messages: br }
  ])(
    'renders $locale social links with safe new-tab attributes',
    ({ locale, messages }) => {
      render(
        <NextIntlClientProvider
          locale={locale}
          messages={{ application: messages.application }}
        >
          <Footer />
        </NextIntlClientProvider>
      )

      const twitterLink = screen.getByRole('link', {
        name: messages.application.footer.follow
      })
      const githubLink = screen.getByRole('link', {
        name: messages.application.footer.code
      })

      expect(twitterLink.getAttribute('href')).toBe(
        'https://twitter.com/RenanGarcia_dev'
      )
      expect(twitterLink.getAttribute('target')).toBe('_blank')
      expect(twitterLink.getAttribute('rel')).toContain('noopener')
      expect(githubLink.getAttribute('href')).toBe(
        'https://github.com/renan-ramos'
      )
      expect(githubLink.getAttribute('target')).toBe('_blank')
    }
  )
})
