import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'
import { useTranslations } from 'next-intl'
import LanguageSelect from './language-select'
import MenuShortcuts from './menu-shortcuts'
import Link from './navigation-link'

const menuItems = {
  '/': { text: 'home', key: 'h' },
  '/work': { text: 'work', key: 'w' },
  '/blog': { text: 'blog', key: 'b' }
}

const shortcuts = Object.fromEntries(
  Object.entries(menuItems).map(([path, { key }]) => [key, path])
)

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
        <ul className="order-last flex w-full flex-wrap gap-7 md:order-none md:w-auto">
          {Object.entries(menuItems).map(([path, { text, key }]) => (
            <li key={path}>
              <Link
                href={path}
                aria-keyshortcuts={key}
                className="hover:text-primary transition-colors"
              >
                <span aria-hidden="true">[{key.toUpperCase()}] </span>
                {t(text)}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageSelect />
        <MenuShortcuts shortcuts={shortcuts} />
      </nav>
    </header>
  )
}

export default Header
