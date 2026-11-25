'use client'

import type { FormEvent, ReactNode } from 'react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { z } from 'zod'
import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger
} from '@ui-sdk/react/drawer'
import { Field, FieldError, FieldLabel } from '@ui-sdk/react/field'
import { Input } from '@ui-sdk/react/input'
import { Textarea } from '@ui-sdk/react/textarea'
import { createContactSchema } from './contact-schema'

const inputClassName =
  'focus-visible:border-primary h-auto bg-transparent px-3 py-2 text-base outline-none'
const labelClassName = 'text-sm font-normal'
const errorClassName = 'text-destructive text-sm'

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
      <DrawerBackdrop className="bg-black/80" />
      <DrawerContent className="bg-background max-h-[85vh] max-w-none gap-0 border-x-0 p-0 shadow-none">
        <div
          aria-hidden
          className="bg-muted mx-auto mt-4 h-2 w-25 shrink-0 rounded-full"
        />
        <div className="flex flex-col gap-1.5 p-4 text-center sm:text-left">
          <DrawerTitle className="text-foreground text-base font-semibold tracking-tight">
            {t('title')}
          </DrawerTitle>
          <DrawerDescription className="text-muted-foreground m-0 text-sm">
            {t('description')}
          </DrawerDescription>
        </div>
        <form
          action="mailto:renangarcia@live.com"
          method="post"
          encType="text/plain"
          noValidate
          onSubmit={validate}
          className="flex flex-col gap-4 p-4 pb-8 font-mono text-sm"
        >
          <Field name="name" invalid={!!errors.name}>
            <FieldLabel className={labelClassName}>{t('name')}</FieldLabel>
            <Input required className={inputClassName} />
            {errors.name && (
              <FieldError match className={errorClassName}>
                {errors.name[0]}
              </FieldError>
            )}
          </Field>
          <Field name="email" invalid={!!errors.email}>
            <FieldLabel className={labelClassName}>{t('email')}</FieldLabel>
            <Input type="email" required className={inputClassName} />
            {errors.email && (
              <FieldError match className={errorClassName}>
                {errors.email[0]}
              </FieldError>
            )}
          </Field>
          <Field name="message" invalid={!!errors.message}>
            <FieldLabel className={labelClassName}>{t('message')}</FieldLabel>
            <Textarea rows={5} required className={inputClassName} />
            {errors.message && (
              <FieldError match className={errorClassName}>
                {errors.message[0]}
              </FieldError>
            )}
          </Field>
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
