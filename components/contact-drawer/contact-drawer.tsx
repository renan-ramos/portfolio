'use client'

import type { FormEvent, ReactElement, ReactNode } from 'react'
import { useId, useState } from 'react'
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

// The error sits outside the <label> so it is not read as part of the field name
const Field = ({
  id,
  label,
  error,
  children
}: {
  id: string
  label: string
  error?: string
  children: ReactElement<{ name: string }>
}) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={`${id}-${children.props.name}`}>{label}</label>
    {children}
    {error && (
      <span
        id={`${id}-${children.props.name}-error`}
        role="alert"
        className="text-destructive"
      >
        {error}
      </span>
    )}
  </div>
)

type ContactDrawerProps = {
  className?: string
  children: ReactNode
}

export const ContactDrawer = ({ className, children }: ContactDrawerProps) => {
  const t = useTranslations('contact')
  const tErrors = useTranslations('contact.errors')
  const [errors, setErrors] = useState<Record<string, string[] | undefined>>({})
  const id = useId()

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

  const fieldProps = (name: string) => ({
    required: true,
    className: inputClassName,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${id}-${name}-error` : undefined
  })

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
          <Field id={id} label={t('name')} error={errors.name?.[0]}>
            <input id={`${id}-name`} name="name" {...fieldProps('name')} />
          </Field>
          <Field id={id} label={t('email')} error={errors.email?.[0]}>
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              {...fieldProps('email')}
            />
          </Field>
          <Field id={id} label={t('message')} error={errors.message?.[0]}>
            <textarea
              id={`${id}-message`}
              name="message"
              rows={5}
              {...fieldProps('message')}
            />
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
