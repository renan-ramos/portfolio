'use client'

import type { FormEvent, ReactNode } from 'react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { z } from 'zod'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { createContactSchema } from './contact-schema'

const inputClassName =
  'border-input focus-visible:border-primary bg-transparent border px-3 py-2 text-base outline-none'

type ContactDrawerProps = {
  className?: string
  children: ReactNode
}

export const ContactDrawer = ({ className, children }: ContactDrawerProps) => {
  const t = useTranslations('contact')
  const tErrors = useTranslations('contact.errors')
  const [errors, setErrors] = useState<Record<string, string[] | undefined>>({})

  // The mailto form posts nothing to a server, so validation only runs here
  const validate = (event: FormEvent<HTMLFormElement>) => {
    const result = createContactSchema({
      required: tErrors('required'),
      invalidEmail: tErrors('invalidEmail'),
      tooLong: tErrors('tooLong')
    }).safeParse(Object.fromEntries(new FormData(event.currentTarget)))

    if (result.success) return setErrors({})

    event.preventDefault()
    setErrors(z.flattenError(result.error).fieldErrors)
  }

  return (
    <Drawer>
      <DrawerTrigger className={className}>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{t('title')}</DrawerTitle>
          <DrawerDescription>{t('description')}</DrawerDescription>
        </DrawerHeader>
        <form
          action="mailto:renangarcia@live.com"
          method="post"
          encType="text/plain"
          noValidate
          onSubmit={validate}
          className="flex flex-col gap-4 p-4 pb-8 font-mono text-sm"
        >
          <label className="flex flex-col gap-1.5">
            {t('name')}
            <input name="name" required className={inputClassName} />
            {errors.name && (
              <span role="alert" className="text-destructive">
                {errors.name[0]}
              </span>
            )}
          </label>
          <label className="flex flex-col gap-1.5">
            {t('email')}
            <input
              name="email"
              type="email"
              required
              className={inputClassName}
            />
            {errors.email && (
              <span role="alert" className="text-destructive">
                {errors.email[0]}
              </span>
            )}
          </label>
          <label className="flex flex-col gap-1.5">
            {t('message')}
            <textarea
              name="message"
              required
              rows={5}
              className={inputClassName}
            />
            {errors.message && (
              <span role="alert" className="text-destructive">
                {errors.message[0]}
              </span>
            )}
          </label>
          <button
            type="submit"
            className="bg-primary text-primary-foreground min-h-12 px-6 font-bold hover:opacity-90"
          >
            {t('send')}
          </button>
        </form>
      </DrawerContent>
    </Drawer>
  )
}
