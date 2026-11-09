'use client'

import { ComponentProps } from 'react'
import { Link } from '@/i18n/navigation'
import { usePageTransition } from '@/components/page-transition/page-transition'

type NavigationLinkProps = ComponentProps<typeof Link>

export const NavigationLink = ({
  href,
  onClick,
  ...props
}: NavigationLinkProps) => {
  const transition = usePageTransition()

  return (
    <Link
      href={href}
      {...props}
      onClick={(event) => {
        onClick?.(event)
        const plainClick =
          event.button === 0 &&
          !(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)

        if (
          !transition ||
          event.defaultPrevented ||
          !plainClick ||
          props.target === '_blank' ||
          typeof href !== 'string'
        )
          return
        event.preventDefault()
        transition(href)
      }}
    />
  )
}
