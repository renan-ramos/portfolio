'use client'

import { useTranslations } from 'next-intl'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select'
import { usePathname, useRouter } from '@/i18n/navigation'

const LanguageSelect = () => {
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('application.language.select')

  const handleLanguageChange = (value: string) => {
    if (value !== 'en' && value !== 'br') {
      throw new Error(`Unsupported locale: ${value}`)
    }

    router.replace(pathname, { locale: value })
  }

  return (
    <Select onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-44">
        <SelectValue placeholder={t('label')} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">{t('en')}</SelectItem>
          <SelectItem value="br">{t('br')}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default LanguageSelect
