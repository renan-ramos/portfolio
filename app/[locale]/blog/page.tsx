import { Words } from '@/components/hero-motion/hero-motion'
import { alternates } from '@/lib/seo'
import { useTranslations } from 'next-intl'

export const generateMetadata = async ({
  params
}: {
  params: Promise<{ locale: string }>
}) => ({ alternates: alternates((await params).locale, '/blog') })

const Blog = () => {
  const t = useTranslations('blog')

  return (
    <main className="container grow py-14 md:py-24">
      <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-none font-bold tracking-[-0.04em]">
        <Words text={t('title')} />
      </h1>
      <p
        style={{ animationDelay: '0.3s' }}
        className="animate-fade-up text-muted-foreground mt-6 font-mono text-sm"
      >
        {`// ${t('description')}`}
      </p>
    </main>
  )
}

export default Blog
