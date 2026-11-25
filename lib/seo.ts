import type { Metadata } from 'next'
import { locales } from '@/i18n/routing'

// shortcut: falls back to Vercel's production domain, set SITE_URL when hosting elsewhere
export const siteUrl = new URL(
  process.env.SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000')
)

// The `br` locale is Brazilian Portuguese; bare `br` would mean Breton to Google
export const htmlLang = (locale: string) => (locale === 'br' ? 'pt-BR' : locale)

export const alternates = (
  locale: string,
  path = ''
): Metadata['alternates'] => ({
  canonical: `/${locale}${path}`,
  languages: {
    ...Object.fromEntries(locales.map((l) => [htmlLang(l), `/${l}${path}`])),
    'x-default': `/en${path}`
  }
})

export const paths = ['', '/work', '/blog']
