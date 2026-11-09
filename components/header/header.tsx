'use client'

import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname } from '@/i18n/navigation'
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

export const Header = ({ className, ...props }: HeaderProps) => {
  const t = useTranslations('application.navigation')
  const pathname = usePathname()

  return (
    <header
      {...props}
      className={cn('container border-b font-mono text-sm', className)}
    >
      <nav className="flex flex-wrap items-center justify-between gap-4 py-5">
        <NavigationLink
          href="/"
          className="hover:text-primary flex items-center gap-2.5"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="text-primary size-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 4 1.5 8 5 12M11 4l3.5 4-3.5 4M9.5 2.5l-3 11" />
          </svg>
          renan.garcia
        </NavigationLink>
        <ul className="order-last flex w-full flex-wrap justify-between gap-x-4 gap-y-2 md:order-0 md:w-auto md:gap-7">
          {Object.entries(menuItems).map(([path, { text, key }]) => (
            <li key={path}>
              <NavigationLink
                href={path}
                aria-keyshortcuts={key}
                aria-current={pathname === path ? 'page' : undefined}
                className="hover:text-primary aria-[current=page]:text-primary after:bg-primary relative uppercase transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
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
