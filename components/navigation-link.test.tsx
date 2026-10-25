import { render, screen } from '@testing-library/react'
import type { ComponentProps } from 'react'
import { describe, expect, it, vi } from 'vitest'
import NavigationLink from './navigation-link'

vi.mock('@/i18n/navigation', () => ({
  Link: ({ href, children, ...props }: ComponentProps<'a'>) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}))

describe('NavigationLink', () => {
  it('forwards the destination and anchor props to the localized link', () => {
    render(
      <NavigationLink
        href="/work"
        aria-label="Work page"
        className="custom-link"
      >
        Work
      </NavigationLink>
    )

    const link = screen.getByRole('link', { name: 'Work page' })

    expect(link.getAttribute('href')).toBe('/work')
    expect(link.classList.contains('custom-link')).toBe(true)
    expect(link.textContent).toBe('Work')
  })
})
