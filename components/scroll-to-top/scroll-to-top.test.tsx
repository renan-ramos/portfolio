import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import { afterEach, describe, expect, it, vi } from 'vitest'
import en from '@/dictionaries/en.json'
import { ScrollToTop } from './scroll-to-top'

const scrollWindowTo = (y: number) =>
  act(() => {
    vi.stubGlobal('scrollY', y)
    window.dispatchEvent(new Event('scroll'))
  })

describe('ScrollToTop', () => {
  afterEach(() => {
    cleanup()
    vi.unstubAllGlobals()
  })

  it('shows after scrolling down and goes back to the top', () => {
    const scrollTo = vi.fn()
    vi.stubGlobal('scrollTo', scrollTo)
    render(
      <NextIntlClientProvider
        locale="en"
        messages={{ application: en.application }}
      >
        <ScrollToTop />
      </NextIntlClientProvider>
    )
    const name = en.application.scrollToTop

    expect(screen.queryByRole('button', { name })).toBeNull()
    scrollWindowTo(500)
    fireEvent.click(screen.getByRole('button', { name }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0 })
    scrollWindowTo(0)
    expect(screen.queryByRole('button', { name })).toBeNull()
  })
})
