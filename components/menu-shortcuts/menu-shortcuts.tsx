'use client'

import { useEffect } from 'react'
import { useTransitionNavigate } from '@/components/page-transition/page-transition'

type MenuShortcutsProps = {
  shortcuts: Record<string, string>
}

const isTyping = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  (target.isContentEditable ||
    ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))

export const MenuShortcuts = ({ shortcuts }: MenuShortcutsProps) => {
  const navigate = useTransitionNavigate()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Leave browser/OS shortcuts and text entry alone
      if (event.ctrlKey || event.metaKey || event.altKey || event.repeat) return
      if (isTyping(event.target)) return

      const path = shortcuts[event.key.toLowerCase()]
      if (path) navigate(path)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [navigate, shortcuts])

  return null
}
