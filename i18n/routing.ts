import { defineRouting } from 'next-intl/routing'

// Kept apart from navigation.ts so middleware and metadata routes don't pull in next/root-params
export const locales = ['en', 'br'] as const
export const localePrefix = 'always' // Default

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
  localePrefix
})
