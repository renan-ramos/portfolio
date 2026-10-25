import { render, screen } from '@testing-library/react'
import { createTranslator, NextIntlClientProvider } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { describe, expect, it, vi } from 'vitest'
import en from '@/dictionaries/en.json'
import br from '@/dictionaries/br.json'
import Home from './page'
import Blog from './blog/page'
import { generateMetadata } from './layout'
import { locales } from '@/i18n/navigation'

vi.mock('next-intl', async (importOriginal) => {
  const actual = await importOriginal<typeof import('next-intl')>()

  return {
    ...actual,
    useMessages: () => (actual.useLocale() === 'br' ? br : en)
  }
})

vi.mock('next/font/google', () => ({
  Inter: () => ({ className: 'inter' })
}))

vi.mock('next-intl/server', () => ({
  getTranslations: vi.fn()
}))

describe('Page translations', () => {
  it.each([
    { locale: 'en', messages: en },
    { locale: 'br', messages: br }
  ])('renders $locale headings from the dictionary', ({ locale, messages }) => {
    const blogTitle = `${locale}: ${messages.blog.title}`

    render(
      <NextIntlClientProvider
        locale={locale}
        messages={{
          home: {
            hello: messages.home.hello,
            description: messages.home.description,
            skills: {
              title: messages.home.skills.title,
              description: messages.home.skills.description
            }
          },
          blog: { ...messages.blog, title: blogTitle }
        }}
      >
        <Home />
        <Blog />
      </NextIntlClientProvider>
    )

    expect(
      screen.getByRole('heading', { name: messages.home.skills.title })
    ).toBeTruthy()
    expect(screen.getByRole('heading', { name: blogTitle })).toBeTruthy()
  })

  it.each([
    { locale: 'en', messages: en },
    { locale: 'br', messages: br }
  ])(
    'generates $locale metadata from the dictionary',
    async ({ locale, messages }) => {
      vi.mocked(getTranslations).mockResolvedValue(
        createTranslator({
          locale,
          messages: { metadata: messages.metadata },
          namespace: 'metadata'
        })
      )

      expect(locales).toContain(locale)
      expect(await generateMetadata({ params: { locale } })).toEqual(
        messages.metadata
      )
      expect(getTranslations).toHaveBeenLastCalledWith({
        locale,
        namespace: 'metadata'
      })
    }
  )
})
