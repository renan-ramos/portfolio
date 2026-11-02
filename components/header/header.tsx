import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'
import { useTranslations } from 'next-intl'
import { LanguageSelect } from '@/components/language-select/language-select'
import { MenuShortcuts } from '@/components/menu-shortcuts/menu-shortcuts'
import { NavigationLink } from '@/components/navigation-link/navigation-link'

const menuItems = {
  '/': { text: 'home', key: 'h' },
  '/work': { text: 'work', key: 'w' },
  '/blog': { text: 'blog', key: 'b' }
}

const shortcuts = Object.fromEntries(
  Object.entries(menuItems).map(([path, { key }]) => [key, path])
)

type HeaderProps = ComponentProps<'header'>

export const Header = (props: HeaderProps) => {
  const t = useTranslations('application.navigation')

  return (
    <header
      {...props}
      className={cn('container border-b font-mono text-sm', props.className)}
    >
      <nav className="flex flex-wrap items-center justify-between gap-4 py-5">
        <NavigationLink href="/" className="hover:text-primary flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="bg-primary size-2.5 rounded-full"
          />
          renan.garcia
        </NavigationLink>
        <ul className="order-last flex w-full flex-wrap justify-between gap-x-4 gap-y-2 md:order-none md:w-auto md:gap-7">
          {Object.entries(menuItems).map(([path, { text, key }]) => (
            <li key={path}>
              <NavigationLink
                href={path}
                aria-keyshortcuts={key}
                className="hover:text-primary transition-colors"
              >
                <span aria-hidden="true">[{key.toUpperCase()}] </span>
                {t(text)}
              </NavigationLink>
            </li>
          ))}
        </ul>
        <LanguageSelect />
        <MenuShortcuts shortcuts={shortcuts} />
      </nav>
    </header>
  )
}
