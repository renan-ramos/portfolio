import type { Metadata } from 'next'
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import { cn } from '@/lib/utils'
import Footer from '@/components/footer'
import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})

type MetadataProps = {
  params: Promise<{ locale: string }>
}

export const generateMetadata = async ({
  params
}: MetadataProps): Promise<Metadata> => {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description')
  }
}

type RootLayoutProps = MetadataProps & {
  children: ReactNode
}

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={cn(spaceGrotesk.variable, jetbrainsMono.variable)}
    >
      <body className="bg-background flex min-h-screen flex-col font-sans antialiased">
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
