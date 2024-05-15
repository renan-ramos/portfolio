import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import { cn } from '@/lib/utils'
import Footer from '@/components/footer'
import { ComponentProps } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Renan Garcia',
  description: "Renan Garcia's personal website"
}

type RootLayoutProps = ComponentProps<'html'> & {
  params: { locale: string }
}

const RootLayout = async ({
  children,
  params: { locale }
}: RootLayoutProps) => {
  const messages = await getMessages()

  return (
    <html lang={locale} className={cn(inter.className)}>
      <body className="flex min-h-screen flex-col bg-background antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
