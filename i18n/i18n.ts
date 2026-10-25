import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

// Can be imported from a shared config
const locales = ['en', 'br']

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale
  if (!locale || !locales.includes(locale as (typeof locales)[number])) {
    notFound()
  }

  return {
    locale,
    messages: (await import(`../dictionaries/${locale}.json`)).default
  }
})
