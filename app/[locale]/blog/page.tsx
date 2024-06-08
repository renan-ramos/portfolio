import { useTranslations } from 'next-intl'

const Blog = () => {
  const t = useTranslations('blog')

  return (
    <main className="container grow">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Blog</h1>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <p>{t('description')}</p>
    </main>
  )
}

export default Blog
