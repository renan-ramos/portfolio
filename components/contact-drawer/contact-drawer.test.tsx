import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ContactDrawer } from './contact-drawer'

vi.mock('next-intl', () => ({
  useTranslations: (namespace: string) => (key: string) =>
    namespace === 'contact.errors' ? `error:${key}` : key
}))

describe('ContactDrawer', () => {
  it('shows each field error only after a failed submit', async () => {
    const user = userEvent.setup()
    render(<ContactDrawer>Open</ContactDrawer>)

    await user.click(screen.getByRole('button', { name: 'Open' }))
    const name = await screen.findByRole('textbox', { name: 'name' })
    expect(screen.queryByText('error:required')).toBeNull()
    expect(name.getAttribute('aria-invalid')).toBeNull()

    await user.type(screen.getByRole('textbox', { name: 'email' }), 'nope')
    await user.click(screen.getByRole('button', { name: 'send' }))

    expect(name.getAttribute('aria-invalid')).toBe('true')
    expect(name.getAttribute('aria-describedby')).toBeTruthy()
    expect(screen.getAllByText('error:required')).toHaveLength(2)
    expect(screen.getByText('error:invalidEmail')).toBeTruthy()
  })
})
