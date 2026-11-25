import { notFound } from 'next/navigation'
import { locale as rootLocale } from 'next/root-params'
import { getRequestConfig } from 'next-intl/server'
import { locales } from './routing'

// Reading the locale from root params (not headers) keeps every page statically rendered
export default getRequestConfig(async () => {
  const locale = await rootLocale()
  if (!locale || !locales.includes(locale as (typeof locales)[number])) {
    notFound()
  }

  return {
    locale,
    messages: (await import(`../dictionaries/${locale}.json`)).default
  }
})
