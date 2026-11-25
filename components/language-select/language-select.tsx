'use client'

import { useTranslations } from 'next-intl'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@ui-sdk/react/select'
import { usePathname, useRouter } from '@/i18n/navigation'

export const LanguageSelect = () => {
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('application.language.select')

  const handleLanguageChange = (value: string | null) => {
    if (value !== 'en' && value !== 'br') {
      throw new Error(`Unsupported locale: ${value}`)
    }

    router.replace(pathname, { locale: value })
  }

  return (
    <Select placeholder={t('label')} onValueChange={handleLanguageChange}>
      <SelectTrigger
        aria-label={t('label')}
        className="h-9 w-44 min-w-0 cursor-pointer px-2 text-xs sm:px-3 sm:text-sm"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-popover">
        <SelectItem value="en" className="cursor-pointer">
          {t('en')}
        </SelectItem>
        <SelectItem value="br" className="cursor-pointer">
          {t('br')}
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
