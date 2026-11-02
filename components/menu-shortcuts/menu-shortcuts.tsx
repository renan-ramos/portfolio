'use client'

import { useEffect } from 'react'
import { useRouter } from '@/i18n/navigation'

type MenuShortcutsProps = {
  shortcuts: Record<string, string>
}

const isTyping = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  (target.isContentEditable ||
    ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))

export const MenuShortcuts = ({ shortcuts }: MenuShortcutsProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Leave browser/OS shortcuts and text entry alone
      if (event.ctrlKey || event.metaKey || event.altKey || event.repeat) return
      if (isTyping(event.target)) return

      const path = shortcuts[event.key.toLowerCase()]
      if (path) router.push(path)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [router, shortcuts])

  return null
}
