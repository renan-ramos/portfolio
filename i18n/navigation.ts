import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

export { locales, localePrefix, routing } from './routing'

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
