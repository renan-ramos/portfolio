import type { MetadataRoute } from 'next'
import { locales } from '@/i18n/routing'
import { alternates, paths, siteUrl } from '@/lib/seo'

const url = (path: string) => new URL(path, siteUrl).href

const sitemap = (): MetadataRoute.Sitemap =>
  paths.flatMap((path) =>
    locales.map((locale) => ({
      url: url(`/${locale}${path}`),
      alternates: {
        languages: Object.fromEntries(
          Object.entries(alternates(locale, path)!.languages!).map(
            ([lang, href]) => [lang, url(href as string)]
          )
        )
      }
    }))
  )

export default sitemap
