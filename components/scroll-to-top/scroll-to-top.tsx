'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

const SHOW_AFTER_PX = 300

export const ScrollToTop = () => {
  const t = useTranslations('application')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => setVisible(window.scrollY > SHOW_AFTER_PX)

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      aria-label={t('scrollToTop')}
      onClick={() => window.scrollTo({ top: 0 })}
      className="bg-primary text-primary-foreground fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 flex size-12 cursor-pointer items-center justify-center rounded-full font-mono text-xl hover:opacity-90"
    >
      <span aria-hidden="true">↑</span>
    </button>
  )
}
