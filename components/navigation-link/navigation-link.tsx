'use client'

import { ComponentProps } from 'react'
import { Link } from '@/i18n/navigation'

type NavigationLinkProps = ComponentProps<typeof Link>

export const NavigationLink = ({ href, ...props }: NavigationLinkProps) => {
  return <Link href={href} {...props} />
}

