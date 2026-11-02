import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'
import { useTranslations } from 'next-intl'
import LanguageSelect from './language-select'
import Link from './navigation-link'

const menuItems = {
  '/': { text: 'home' },
  '/work': { text: 'work' },
  '/blog': { text: 'blog' }
}

type HeaderProps = ComponentProps<'header'>

const Header = (props: HeaderProps) => {
  const t = useTranslations('application.navigation')

  return (
    <header
      {...props}
      className={cn('container border-b font-mono text-sm', props.className)}
    >
      <nav className="flex flex-wrap items-center justify-between gap-4 py-5">
        <Link href="/" className="hover:text-primary flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="bg-primary size-2.5 rounded-full"
          />
          renan.garcia
        </Link>
        <ul className="flex flex-wrap gap-7">
          {Object.entries(menuItems).map(([path, { text }], index) => (
            <li key={path}>
              <Link
                href={path}
                className="hover:text-primary transition-colors"
              >
                <span aria-hidden="true">[0{index + 1}] </span>
                {t(text)}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageSelect />
      </nav>
    </header>
  )
}

export default Header
