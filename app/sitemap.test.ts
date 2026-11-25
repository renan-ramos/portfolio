import { describe, expect, it } from 'vitest'
import sitemap from './sitemap'

describe('sitemap', () => {
  it('lists every page per locale with absolute hreflang alternates', () => {
    const entries = sitemap()

    expect(entries).toHaveLength(6)
    expect(entries).toContainEqual({
      url: 'http://localhost:3000/br/work',
      alternates: {
        languages: {
          en: 'http://localhost:3000/en/work',
          'pt-BR': 'http://localhost:3000/br/work',
          'x-default': 'http://localhost:3000/en/work'
        }
      }
    })
  })
})
