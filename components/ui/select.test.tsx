import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './select'

describe('Select', () => {
  it('renders its trigger and reports the chosen option', async () => {
    const onValueChange = vi.fn()
    const user = userEvent.setup()

    render(
      <Select onValueChange={onValueChange}>
        <SelectTrigger aria-label="Choose a language" className="w-44">
          <SelectValue placeholder="Choose" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="br">Portuguese</SelectItem>
        </SelectContent>
      </Select>
    )

    const trigger = screen.getByRole('combobox', { name: 'Choose a language' })
    expect(trigger.classList.contains('w-44')).toBe(true)

    trigger.focus()
    await user.keyboard('{ArrowDown}{Enter}')

    expect(onValueChange).toHaveBeenCalledWith('en')
    expect(trigger.textContent).toContain('English')
  })
})
