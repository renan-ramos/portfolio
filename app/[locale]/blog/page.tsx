import { useTranslations } from 'next-intl'

const Blog = () => {
  const t = useTranslations('blog')

  return (
    <main className="container grow py-14 md:py-24">
      <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-none font-bold tracking-[-0.04em]">
        {t('title')}
      </h1>
      <p className="text-muted-foreground mt-6 font-mono text-sm">
        {`// ${t('description')}`}
      </p>
    </main>
  )
}

export default Blog
