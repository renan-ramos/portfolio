'use client'

import { ComponentProps } from 'react'
import { Link } from '@/i18n/navigation'

type NavigationLinkProps = ComponentProps<typeof Link>

const NavigationLink = ({ href, ...props }: NavigationLinkProps) => {
  return <Link href={href} {...props} />
}

export default NavigationLink
